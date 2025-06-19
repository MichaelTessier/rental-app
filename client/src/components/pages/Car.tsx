// import Filters from "./layout/Filters";
import CarDetail from "@/components/car/CarDetail";
import { getCar } from "@/graphql/queries/car.queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loader from "@/components/ui/Loader";

const Car = () => {
  const params = useParams()

  const { data, loading } = useQuery(getCar, {
    variables: { id: params?.id ?? '' },
  })


  if(loading) {
    return <Loader fullScreen={true} />;
  }
  
  
  return (
    <main >
      { data?.car && (
        <CarDetail car={data?.car}/>
      )}
    </main>
  );
};

export default Car;