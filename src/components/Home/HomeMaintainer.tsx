import PieChart from "../Charts/PieChar.tsx/PieChart";
import VerticalBarChart from "../Charts/VerticalBarChart/VerticalBarChart";
import HorizontalBarChart from "../Charts/HorizontalBarChart/HorizontalBarChart";
import Card from "../Dashboard/Card";
import MainTitle from "../MainTitle";

import useChart from "@/hooks/useChart";
import { SEED } from "@/constants";
import useCountries from "@/hooks/useCountries";
import Loading from "../Loading/Loading";

import CardInfo from "../CardInfo/CardInfo";

const HomeMaintainer = ({ customers }: any) => {
  const { dataPie } = useChart(customers);
  const { dataHorizontalBar, countriesWithCountData, loadingCountries } =
    useCountries(customers);

  return (
    <main className="bg-base-100">
      <div className="p-8 max-w-[96rem] w-full mx-auto">
        <MainTitle>
          <h1 className="text-2xl font-normal">
            Current Seed is <span className="font-bold">'{SEED}'</span>
          </h1>
        </MainTitle>

        <CardInfo
          customers={customers}
          countriesWithCountData={countriesWithCountData}
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 mt-4">
          <Card>
            <div>
              <PieChart dataPie={dataPie} />
            </div>
          </Card>
          <Card>
            {loadingCountries ? (
              <Loading />
            ) : (
              <HorizontalBarChart dataHorizontalBar={dataHorizontalBar} />
            )}
          </Card>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <Card title="Chart Bar Demo">
            <VerticalBarChart />
          </Card>
          <Card title="Chart Bar Demo">
            <VerticalBarChart />
          </Card>
          <Card title="Chart Bar Demo">
            <VerticalBarChart />
          </Card>
        </div>

        <div className="my-4">
          <Card>
            <div className="p-6">
              <h1 className="font-bold text-lg">
                For more content, contact with me 👀
              </h1>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default HomeMaintainer;
