import { CardHeader, CardTitle } from "@/components/shadcn/card";
import CardItem from "@/components/car/CarItem";
import { Link } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { CarListFragment, PaginationFragment } from "@/graphql/queries/car.queries";
import { FragmentType, useFragment } from "@/__generated__";
import Paginator from "../layout/Paginator";
import { useUrlSearchParams } from "@/hooks/useUrlSearchParams";


type Props = {
  cars: FragmentType<typeof CarListFragment>[]; 
  pagination?: FragmentType<typeof PaginationFragment>;
}

const CarList = ( props: Props) => {
  const pagination = useFragment(PaginationFragment, props.pagination);
  console.log("🚀 ~ CarList ~ pagination:", pagination)


  const [urlSearchParams, setUrlSearchParams] = useUrlSearchParams()

  function handlePageChange(page: number) {
    setUrlSearchParams(urlSearchParams, 'page', page.toString()); 
  }

  return (
    <>
      <CardHeader className="p-0">
        <CardTitle className="group flex items-center text-2xl p-0">
          Rent Car for Your Next Trip
        </CardTitle>
        <div className="flex">
          <Link to="/search" className="inline-block">
            <Button variant="ghost" className="px-1 ">
              <ArrowLeftRight className="h-4 w-4 me-1" />
              Search cars within location/budget/dates
            </Button>
          </Link>
        </div>
      </CardHeader>
      <div className="text-sm text-muted-foreground">
        { props.cars?.length ? props.cars.map((car, idx) => (
          <CardItem key={idx} car={car} />
        )) : <p>No cars found.</p> }
      </div>

      <Paginator onPageChange={(page) => handlePageChange(page)} totalItems={pagination?.total} initialPage={pagination?.page} limit={pagination?.limit} />
    </>
  );
};

export default CarList;