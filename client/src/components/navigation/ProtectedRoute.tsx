import { UserRole } from "@/graphql/__generated__/types";
import { userStore } from "@/store/user";
import Loader from "../ui/Loader";
import { Navigate } from "react-router";

type Props = {
  children: React.ReactNode;
  roles: UserRole[]
}

function ProtectedRoute({ roles, children }: Props) {
  const userState = userStore()
  console.log("🚀 ~ ProtectedRoute ~ userState:", userState)

  if(userState.isLoading) {
    return (
      <Loader fullScreen />
    );
  }

  if(!userState.isAuthenticated) {
    return (
      <Navigate to="/login" replace />
    )
  }

  if(roles && !roles.some((role) => userState?.user?.role?.includes(role))) {
    return (
      <Navigate to="/" replace />
    )
  }
 
  return (
    <div>
      {children}
    </div>
  );
}

export default ProtectedRoute;