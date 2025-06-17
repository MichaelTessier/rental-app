// import Filters from "./layout/Filters";
import CarDetail from "@/components/car/CarDetail";
import { GET_CAR } from "@/graphql/queries/car.queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router";
import Loader from "@/components/ui/Loader";

const Car = () => {
  const params = useParams()

  const { data, loading } = useQuery(GET_CAR, {
    variables: { id: params?.id },
  })


  if(loading) {
    return <Loader fullScreen={true} />;
  }
  
  
  return (
    <main >
      
      <CarDetail car={data?.car}/>
    </main>
  );
};

export default Car;