import CarDetail from "@/components/car/CarDetail";
import { useParams } from "react-router";
import Loader from "@/components/ui/Loader";
import { useGetCarQuery } from "@/graphql/__generated__/types";
import ErrorProvider from "../layout/ErrorProvider";

const Car = () => {
  const params = useParams()

  const { data, loading, error } = useGetCarQuery({
    variables: {
      id: params?.id ?? ''
    },
  });

  if(error?.graphQLErrors) {
    return <ErrorProvider error={error} />
  }

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