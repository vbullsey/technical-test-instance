import { countTotalOfArray } from "@/utils/chartsFn";
import { useEffect, useState } from "react";

const useChart = (customers: any) => {
  const [dataGender, setDataGender] = useState([]);
  const [loadingGender, setLoadingGender] = useState<boolean>(true);

  const labelsGender = ["female", "male"];

  useEffect(() => {
    if (customers?.results) {
      setLoadingGender(true);
      const countFemale = countTotalOfArray(
        customers.results,
        "gender",
        "female"
      );
      const countMale = countTotalOfArray(customers.results, "gender", "male");
      // @ts-ignore
      setDataGender((prev) => [countFemale, countMale]);
      setLoadingGender(false);
    }
  }, [customers]);

  const dataPie = {
    labels: labelsGender,
    datasets: [
      {
        label: "Genders",
        data: dataGender,
        backgroundColor: ["#6366F1", "#1E293B"],
        borderColor: ["#000", "#000"],
        borderWidth: 1,
      },
    ],
  };

  return {
    dataGender,
    loadingGender,
    labelsGender,
    dataPie,
  };
};

export default useChart;
