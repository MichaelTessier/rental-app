import { Card, CardHeader } from "../shadcn/card";
import { Checkbox } from "../shadcn/checkbox";
import { Search } from "lucide-react";
import { Input } from "../shadcn/input";
import { CarBrand, CarCategory, CarTransmission } from "@/__generated__/graphql";
import { useState } from "react";
import { useUrlSearchParams } from "@/hooks/useUrlSearchParams";
// import { removeEmpty } from "@/utils/object";
// import { useNavigate } from "react-router";

const carCategories = Object.values(CarCategory);
const carBrands = Object.values(CarBrand)
const carTransmissions =  Object.values(CarTransmission);

const CarFilters = () => {
  const [urlSearchParams, setUrlSearchParams, removeUrlSearchParam] = useUrlSearchParams()


  const [query, setQuery] = useState<string>(urlSearchParams.get('query') || '');
  const [filters, setFilters] = useState({
    brand: urlSearchParams.get('brand') as CarBrand | undefined,
    category: urlSearchParams.get('category'),
    transmission: urlSearchParams.get('transmission'),
  })


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setUrlSearchParams(urlSearchParams, 'query', query); 
  }

  const handleChangeFilters = (type: keyof typeof filters, value: string, isCheck: boolean) => {
    setFilters((prevFilters) => {
      const state = {
        ...prevFilters,
        [type]: isCheck ? value : undefined
      }

      return state
    })

    if(!isCheck) {
      removeUrlSearchParam(urlSearchParams, type);
    } else {
      setUrlSearchParams(urlSearchParams, type, value); 
    }

  }

  

  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row items-start bg-muted/25">
          <div className="grid gap-0.5">
            <div className="text-sm text-muted-foreground">
              <div className="filter-section my-8">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-bold mt-4 my-2">Type keyword</h2>
                  <div className="relative ml-auto flex-1 md:grow-0">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full rounded-lg bg-background pl-8"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </form>
              </div>

              <div className="filter-section my-8">
                <h2 className="text-xl font-bold mt-4 my-3">Car Type</h2>
                {carCategories?.map((category) => (
                  <div
                    key={category}
                    className="flex items-center space-x-2 my-2"
                    >
                    <Checkbox 
                      id="category" 
                      name="category" 
                      value={category} 
                      checked={filters.category === category}  
                      onCheckedChange={(isCheck: boolean) => handleChangeFilters('category', category, isCheck)}
                    />
                    <label
                      htmlFor="carType"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              <div className="filter-section my-8">
                <h2 className="text-xl font-bold mt-4 my-3">Select Brand</h2>
                {carBrands?.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2 my-2">
                    <Checkbox 
                      id="brand" 
                      name="brand" 
                      value={brand} 
                      checked={filters.brand === brand}  
                      onCheckedChange={(isCheck: boolean) => handleChangeFilters('brand', brand, isCheck)}
                    />
                    <label
                      htmlFor="carBrand"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>

              <div className="filter-section my-8">
                <h2 className="text-xl font-bold mt-4 my-3">Transmission</h2>
                {carTransmissions?.map((transmission) => (
                  <div
                    key={transmission}
                    className="flex items-center space-x-2 my-2"
                  >
                    <Checkbox
                      id="transmission"
                      name="transmission"
                      value={transmission}
                      checked={filters.transmission === transmission}  
                      onCheckedChange={(isCheck: boolean) => handleChangeFilters('transmission', transmission, isCheck)}
                    />
                    <label
                      htmlFor="carTransmission"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {transmission}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default CarFilters;