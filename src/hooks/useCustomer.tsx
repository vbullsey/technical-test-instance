import { useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const useCustomer = () => {
  const { data, page, results, error, isLoading } = useTypedSelector(
    (state: RootState) => state.user
  );

  return {
    error: error || data === null,
    isLoading,
    data,
    page,
    results,
  };
};

export default useCustomer;
