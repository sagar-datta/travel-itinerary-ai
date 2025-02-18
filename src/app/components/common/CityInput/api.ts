import type { CityOption, GeonamesResult } from "./types";

if (!process.env.NEXT_PUBLIC_GEONAMES_USERNAME) {
  console.warn("NEXT_PUBLIC_GEONAMES_USERNAME environment variable is not set");
}

export const loadCityOptions = async (
  inputValue: string
): Promise<CityOption[]> => {
  if (inputValue.length < 2) return [];

  try {
    const [exactMatches, similarMatches] = await Promise.all([
      fetch(
        `https://secure.geonames.org/searchJSON?name_equals=${encodeURIComponent(
          inputValue
        )}&maxRows=3&username=${
          process.env.NEXT_PUBLIC_GEONAMES_USERNAME
        }&featureClass=P&orderby=population`
      ).then((res) => res.json()),
      fetch(
        `https://secure.geonames.org/searchJSON?name_startsWith=${encodeURIComponent(
          inputValue
        )}&maxRows=10&username=${
          process.env.NEXT_PUBLIC_GEONAMES_USERNAME
        }&featureClass=P&orderby=population`
      ).then((res) => res.json()),
    ]);

    const allResults = [
      ...(exactMatches?.geonames || []),
      ...(similarMatches?.geonames || []),
    ];

    const uniqueResults = Array.from(
      new Map(
        allResults.map((item) => [
          item.name + item.adminName1 + item.countryName,
          item,
        ])
      ).values()
    ).sort((a, b) => (b.population || 0) - (a.population || 0));

    return uniqueResults
      .slice(0, 5)
      .filter(
        (place: GeonamesResult) =>
          place.name && place.adminName1 && place.countryName
      )
      .map((place: GeonamesResult) => {
        const locationString = `${place.name}, ${place.adminName1}, ${place.countryName}`;
        return {
          value: locationString,
          label: locationString,
        };
      });
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
};
