import HomeMaintainer from "@/components/Home/HomeMaintainer";
import MainLayout from "@/layout/MainLayout";

const Index = ({ customers }: any) => {
  return (
    <MainLayout>
      <HomeMaintainer customers={customers} />
    </MainLayout>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_RANDOM_USER_URL}/api/?seed=${process.env.NEXT_PUBLIC_SEED}&results=10`
    );
    const customers = await res.json();

    return {
      props: {
        customers,
      },
    };
  } catch (e) {
    return {
      props: {
        customers: null,
      },
    };
  }
}

export default Index;
