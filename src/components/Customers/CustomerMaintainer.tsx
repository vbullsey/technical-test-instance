import MainTitle from "../MainTitle";
import CustomerTable from "./CustomerTable";

const CustomerMaintainer = () => {
  return (
    <main className="bg-base-100">
      <div className="p-8 max-w-[96rem] w-full mx-auto">
        <MainTitle>
          <h1 className="text-2xl font-normal">Customers</h1>
        </MainTitle>
        <div className="mt-4 bg-neutral p-4">
          <CustomerTable />
        </div>
      </div>
    </main>
  );
};
export default CustomerMaintainer;
