import { Link } from "react-router";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from "@/components/shadcn/sheet";
import { Button } from "@/components/shadcn/button";
import { CarTaxiFront, MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";
import { userStore } from "@/store/user";
import { useReactiveVar } from "@apollo/client";
import { Skeleton } from "../shadcn/skeleton";
import UserMobileMenu from "../navigation/UserMobileMenu";
import UserAvatar from "../user/UserAvatar";

const Header = () => {
  const userState = useReactiveVar(userStore);

  return (
    <div className="flex items-center justify-between px-5 py-2 bg-white dark:bg-gray-800 border">
      <Link to="/" className="flex items-center gap-2">
        <CarTaxiFront className="h-8 w-8" />
        <span className="text-lg font-semibold">Rental App</span>
      </Link>
      <div className="hidden lg:flex gap-4 mr-1">
        {!userState.isAuthenticated && !userState.isLoading &&(
          <Button className="mb-2" asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
        { userState.isAuthenticated && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  <UserAvatar user={userState.user} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              { userState.isAdmin && (
                <Link to="/admin/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
              )}
              <Link to="/me/bookings">
                <DropdownMenuItem>My Bookings</DropdownMenuItem>
              </Link>
              <Link to="/me/profile">
                <DropdownMenuItem>Profile</DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>
        )}
        { userState.isLoading && (
          <Skeleton className="h-9 w-9 rounded-full" />
        )}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle />
          <SheetHeader>
            <SheetDescription />
          </SheetHeader>
          <div className="grid  p-4">
            <div className="flex items-center mb-3">
              {/* <span className="me-4"></span> */}
              {!userState.isAuthenticated && (
                <Button asChild>
                  <Link to="/login">Login</Link>
                </Button>
              )}
              {userState.isAuthenticated && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <UserAvatar user={userState.user} />
                  </Button>
                  <p className="ps-2">{userState.user?.firstName}</p>
                </>
              )}
              {userState.isLoading && (
                <div className="flex items-center gap-2">
                  <Skeleton className="h-9 w-9 rounded-full" />
                  <Skeleton className="h-4 w-40 " />
                </div>
              )}
            </div>
            {userState.isAuthenticated && (
              <>
                {/* <AdminMobileMenu /> */}
                <UserMobileMenu isAdmin={userState.isAdmin}/>
                <DropdownMenuSeparator />
                <Link
                  to="#"
                  className="text-lg font-medium hover:underline underline-offset-4 mt-3"
                >
                  Logout
                </Link>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;