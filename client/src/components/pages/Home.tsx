import CarList from "@/components/car/CarList";
import {  getCars } from "@/graphql/queries/car.queries";
import { useQuery } from "@apollo/client";
import Loader from "@/components/ui/Loader";

const Home = () => {
  const {data, loading} = useQuery(getCars)

  if(loading) {
    return <Loader fullScreen={true}/>;
  }
  
  return (
    <main className="my-8 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-10">
      <div className="md:col-span-2 lg:col-span-2 flex flex-col">
        {/* <Filters /> */}
      </div>
      {data?.cars && (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 md:col-span-4 lg:col-span-4">
          <CarList cars={data.cars}/>
        </div>
      )}
      <div className="md:col-span-6 lg:col-span-4 flex flex-col">
        {/* <div className="flex items-center justify-center h-screen"></div> */}
        {/* Google Map Component */}
      </div>
    </main>
  );
};

export default Home;