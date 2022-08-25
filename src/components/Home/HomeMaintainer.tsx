import React from "react";
import Card from "../Dashboard/Card";
import Welcome from "../Dashboard/Welcome";
// import { useDispatch } from "react-redux";
// import { fetchUser } from "@/redux/slices/user";

const HomeMaintainer = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("a");
  //   dispatch(fetchUser());
  // }, []);

  return (
    <main className="bg-base-100">
      <div className="p-8 max-w-[96rem] w-full mx-auto">
        <Welcome />
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
};
export default HomeMaintainer;
