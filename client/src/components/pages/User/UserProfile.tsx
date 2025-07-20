import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs"
import UpdateProfile from "@/components/user/UpdateProfile";
import UpdatePassword from "@/components/user/UpdatePassword";

function UserProfile()  {  
  return (
    <main className="flex min-h-screen items-center justify-center flex-1 flex-col">
      <Tabs defaultValue="profile" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="avatar">Avatar</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <UpdateProfile />
        </TabsContent>
        <TabsContent value="password">
          <UpdatePassword />
        </TabsContent>
        <TabsContent value="avatar">Change your avatar here.</TabsContent>
      </Tabs>
    </main>
  );
}

export default UserProfile
