import { Card, CardHeader, CardTitle } from "@/components/shadcn/card";
import { BatteryFull, CalendarDays, CarFront, Cog, DoorClosed, Fuel, Milestone, RockingChair, Type } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import type { Car } from "@rental-app/shared";

type Props = {
  car: Car
}

const CarFeatures = ({ car }: Props) => {

  const features = [
    { icon: CarFront, label: car.brand },
    { icon: Type, label: car.category },
    { icon: Fuel, label: car.fuelType },
    { icon: Cog, label: car.transmission },
    { icon: BatteryFull, label: `${car.power} CC` },
    { icon: Milestone, label: `${car.millage} KM` },
    { icon: DoorClosed, label: `${car.doors} doors` },
    { icon: CalendarDays, label: car.year },
    { icon: RockingChair, label:`${car.seats} seats` },
    { icon: Milestone, label: car.millage },
  ].filter(feature => feature.label);

  return (
    <Card>
      <CardHeader className="bg-muted/25">
        <div className="grid gap-0.5">
          <CardTitle className="group flex items-center gap-2 mb-5 text-2xl">
            <p className="text-2xl font-bold mt-5">Key Features</p>
          </CardTitle>
          <div className="text-sm text-muted-foreground">
            <div className="px-8">
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-start">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-xl">
                    <Button variant="secondary" size="icon" className="rounded-full">
                      <feature.icon className="h-6 w-6" />
                    </Button>
                    <p>{feature.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default CarFeatures;