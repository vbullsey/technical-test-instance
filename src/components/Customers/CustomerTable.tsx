import useCustomer from "@/hooks/useCustomer";
import { useActions } from "@/redux/hooks";
import { CustomerType } from "@/redux/slices/user/userType";
import { Mask, Table } from "react-daisyui";
import Loading from "../Loading/Loading";
import UltimatePaginationBasic from "../Pagination/Pagination";
import { tableHeadColums } from "./CustomerStatics";

const CustomerTable = () => {
  const { data, isLoading, page, error } = useCustomer();

  const { changePage } = useActions();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <h1 className="text-md font-bold">
        Error from the API, please try again! 😵
      </h1>
    );
  }

  const onPageChange = (page: number) => {
    // @ts-ignore
    changePage(page);
  };

  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <Table className="rounded-box w-full">
        <Table.Head className="text-white">
          {tableHeadColums.map((item, i: number) => (
            <span key={i}>{item.name}</span>
          ))}
        </Table.Head>
        <Table.Body>
          {data?.results?.map((customer: CustomerType, i: number) => {
            const { picture, name, email, cell, gender, location } = customer;
            return (
              <Table.Row key={i} hover className="hover:text-white">
                <div className="flex items-center space-x-3 truncate ">
                  <Mask variant="squircle" src={picture?.thumbnail || ""} />
                  <div>
                    <div className="font-bold ">
                      {name.title} {name.first} {name.last}
                    </div>
                    <div className="text-sm opacity-50">{location.country}</div>
                  </div>
                </div>
                <div>{email}</div>
                <div>{cell}</div>
                <div>{gender}</div>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div className="flex justify-center my-8 items-center">
        {data && (
          <UltimatePaginationBasic
            currentPage={page}
            totalPages={500}
            onChange={onPageChange}
          />
        )}
      </div>
    </div>
  );
};

export default CustomerTable;
