import { countTotalCountries } from "@/utils/chartsFn";
import { useEffect, useState } from "react";

const useCountries = (customers: any) => {
  const [dataHorizontalBar, setDataHorizontalBar] = useState();
  const [countriesWithCountData, setCountriesWithCountData] = useState([]);
  const [arrayLabels, setArrayLabels] = useState([]);
  const [arrayCountries, setArrayCountries] = useState([]);
  const [loadingCountries, setLoadingCountries] = useState<boolean>(true);

  useEffect(() => {
    if (customers?.results) {
      const countriesWithCount = countTotalCountries(customers.results);
      // @ts-ignore
      setCountriesWithCountData(countriesWithCount);
      // @ts-ignore
      setArrayLabels(countriesWithCount.map((country) => country.name));
      // @ts-ignore
      setArrayCountries(countriesWithCount.map((country) => country.count));
    }
  }, [customers]);

  useEffect(() => {
    if (arrayCountries) {
      setLoadingCountries(true);
      setDataHorizontalBar({
        // @ts-ignore
        labels: arrayLabels,
        datasets: [
          {
            label: "Quantity",
            data: arrayCountries,
            backgroundColor: "#6366F1",
          },
        ],
      });

      setLoadingCountries(false);
    }
  }, [arrayCountries]);

  return {
    dataHorizontalBar: loadingCountries ? null : dataHorizontalBar,
    countriesWithCountData,
    loadingCountries,
  };
};

export default useCountries;
