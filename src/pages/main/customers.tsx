import CustomerMaintainer from "@/components/Customers/CustomerMaintainer";
import MainLayout from "@/layout/MainLayout";
import { useTypedSelector } from "@/redux/hooks";

import { fetchUser } from "@/redux/slices/user";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Customers = () => {
  const dispatch = useDispatch();

  const { page, results } = useTypedSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser({ page, results }));
  }, [page]);

  return (
    <MainLayout>
      <CustomerMaintainer />
    </MainLayout>
  );
};

export default Customers;
