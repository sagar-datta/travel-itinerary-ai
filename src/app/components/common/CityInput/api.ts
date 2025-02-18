import axios from "axios";
import type { CityOption, GeonamesResult } from "./types";
import { USERNAME } from "./constants";

export const loadCityOptions = async (
  inputValue: string
): Promise<CityOption[]> => {
  if (inputValue.length < 2) return [];

  try {
    const [exactMatches, similarMatches] = await Promise.all([
      axios.get("http://api.geonames.org/searchJSON", {
        params: {
          name_equals: inputValue,
          maxRows: 3,
          username: USERNAME,
          featureClass: "P",
          orderby: "population",
        },
      }),
      axios.get("http://api.geonames.org/searchJSON", {
        params: {
          name_startsWith: inputValue,
          maxRows: 10,
          username: USERNAME,
          featureClass: "P",
          orderby: "population",
        },
      }),
    ]);

    const allResults = [
      ...(exactMatches.data?.geonames || []),
      ...(similarMatches.data?.geonames || []),
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
