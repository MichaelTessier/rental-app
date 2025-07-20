import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
} from "@/components/shadcn/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { useForm } from "react-hook-form"
import { useUpdateUserMutation } from "@/graphql/__generated__/types";
import Loader from "@/components/ui/Loader";
import { toast } from "sonner"
import { UpdateUserSchema, updateUserSchema } from "./user.schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { userStore } from "@/store/user";
import { useReactiveVar } from "@apollo/client";

const UpdateProfile = () => {
  const userState = useReactiveVar(userStore);

  const form = useForm<UpdateUserSchema>(
    {
      resolver: zodResolver(updateUserSchema),
      defaultValues: {
        firstName: userState.user?.firstName,
        lastName: userState.user?.lastName,
        email: userState.user?.email,

      }
    }
  );

  const [updateUserMutation, { loading} ] = useUpdateUserMutation()

  async function onSubmit(payload: UpdateUserSchema) {
    await updateUserMutation({
      variables: {
        input: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          email: payload.email,
        }
      },
      onError: () => {
        toast.error(`Error during update`);
      },
      onCompleted: () => {
        toast.success("Update successful!");
        if(!userState.user) return
        
        userStore({
          ...userState,
          user: {
            ...userState.user,
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
          }
        })
        // Redirect to login or home page
      }
    })
  
  }

  return (
    <div className="w-full">

      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-1 flex-col gap-4 bg-muted/40 justify-center ">
            <Card className="mx-auto w-full max-w-lg shadow-lg">
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <FormField 
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField 
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField 
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    { loading ? <div className="h-4 w-4 ml-2" ><Loader  /></div> : null }
                    Save
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>


  );
};

export default UpdateProfile;