import { CardHeader, CardTitle } from "@/components/shadcn/card";
import CardItem from "@/components/car/CarItem";
import { Link } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { CarListFragment } from "@/graphql/queries/car.queries";
import { FragmentType } from "@/__generated__";


type Props = {
  cars: FragmentType<typeof CarListFragment>[]; 
}

const CarList = ({ cars }: Props) => {
  
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
        { cars?.length && cars.map((car, idx) => (
          <CardItem key={idx} car={car} />
        )) }
      </div>
    </>
  );
};

export default CarList;