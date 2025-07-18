import CarList from "@/components/car/CarList";
import Loader from "@/components/ui/Loader";
import CarFilters from "@/components/car/CarFilters";
import { useUrlSearchParams } from "@/hooks/useUrlSearchParams";
import { isEnumValue } from "@/utils/object";
import { CarBrand, CarCategory, CarFiltersInput, useGetCarsQuery , CarTransmission } from "@/graphql/__generated__/types";
// import Alert from "@/components/layout/Alert";
// import { AlertVariant } from "@/components/layout/Alert.model";


const Home = () => {
  const [urlSearchParams] = useUrlSearchParams()
  
  const query = urlSearchParams.get('query') || '';
  const page = urlSearchParams.get('page') || '';

  const filters: CarFiltersInput = {
    brand: isEnumValue<typeof CarBrand>(urlSearchParams.get('brand') ?? '', CarBrand) ? urlSearchParams.get('brand') as CarBrand : undefined,
    category: isEnumValue<typeof CarCategory>(urlSearchParams.get('category') ?? '', CarCategory) ? urlSearchParams.get('category') as CarCategory : undefined,
    transmission: isEnumValue<typeof CarTransmission>(urlSearchParams.get('transmission') ?? '', CarTransmission) ? urlSearchParams.get('transmission') as CarTransmission : undefined,
  }
  
  const { data, loading } = useGetCarsQuery({
    variables: {
       input: {
         query: query,
         filters: {
           // status: CarStatus.Published,
           ...(filters.brand && { brand: filters.brand}),
           ...(filters.category && { category: filters.category}),
           ...(filters.transmission && { transmission: filters.transmission}),
         },
         page: page ? parseInt(page) : 1,
         limit: 2,
       }
    },
  });

  if(loading) {
    return <Loader fullScreen={true}/>;
  } 
  
  return (
    <main className="my-8 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 md:grid-cols-6 lg:grid-cols-10 xl:grid-cols-10">
      <div className="md:col-span-2 lg:col-span-2 flex flex-col">
        <CarFilters />
      </div>
      {data?.cars && (
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 md:col-span-4 lg:col-span-4">
          <CarList cars={data.cars.items} pagination={data.cars.pagination} />
        </div>
      )}
      <div className="md:col-span-6 lg:col-span-4 flex flex-col">
        {/* <Alert variant={AlertVariant.Default} title="Alert"/> */}
        {/* <div className="flex items-center justify-center h-screen"></div> */}
        {/* Google Map Component */}
      </div>
    </main>
  );
};

export default Home;