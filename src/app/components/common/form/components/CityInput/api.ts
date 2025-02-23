import type { CityOption } from "./types";

const GEONAMES_USERNAME = process.env.NEXT_PUBLIC_GEONAMES_USERNAME;
const GEONAMES_API = "https://secure.geonames.org/searchJSON";

interface GeonamesCity {
  name: string;
  countryName: string;
}

export async function loadCityOptions(
  inputValue: string
): Promise<CityOption[]> {
  if (inputValue.length < 2) return [];

  try {
    const response = await fetch(
      `${GEONAMES_API}?q=${encodeURIComponent(
        inputValue
      )}&maxRows=10&style=FULL&featureClass=P&username=${GEONAMES_USERNAME}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.geonames.map((city: GeonamesCity) => ({
      value: `${city.name}, ${city.countryName}`,
      label: `${city.name}, ${city.countryName}`,
    }));
  } catch (error) {
    console.error("Error fetching cities:", error);
    return [];
  }
}
