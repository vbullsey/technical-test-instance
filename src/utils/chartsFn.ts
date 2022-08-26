export const countTotalOfArray = (array: [], key: string, target: string) => {
  const count = array.filter((obj) => obj[key] === target).length;

  return count;
};

export const countTotalCountries = (array: [any]) => {
  const countries = Object.values(
    array.reduce((locations, { location }) => {
      const { country } = location;

      locations[country] = locations[country] || { name: country, count: 0 };
      locations[country].count++;
      return locations;
    }, {})
  );

  return countries;
};

export const countryWithMaxQuantity = (countries: []) => {
  const max = countries.reduce(
    (acc, country) => (acc = acc > country.count ? acc : country.count),
    0
  );

  return max;
};
