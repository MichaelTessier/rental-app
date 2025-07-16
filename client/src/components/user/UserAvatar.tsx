import { User } from "@/graphql/__generated__/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar";

function getFirstLetter(name: string): string {
  return name.charAt(0).toUpperCase();
}

function UserAvatar({ user } : { user: User | null }) {
  const firstLetter = getFirstLetter(user?.firstName ?? 'A')
  const secondLetter = getFirstLetter(user?.lastName ?? 'B')

  const fallbackText = `${firstLetter}${secondLetter}`;

  return (
    <div className="flex items-center">
      <Avatar className="h-10 w-10">
        <AvatarImage src={user?.avatar?.url} />
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>
    </div>
  );
}

export default UserAvatar