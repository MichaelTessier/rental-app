import CarDetail from "@/components/car/CarDetail";
import { useParams } from "react-router";
import Loader from "@/components/ui/Loader";
import { useGetCarQuery } from "@/graphql/__generated__/types";

const Car = () => {
  const params = useParams()

  const { data, loading } = useGetCarQuery({
    variables: {
      id: params?.id ?? ''
    },
  });

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