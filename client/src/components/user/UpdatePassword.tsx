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
import { useUpdatePasswordMutation } from "@/graphql/__generated__/types";
import Loader from "@/components/ui/Loader";
import { toast } from "sonner"
import { UpdatePasswordSchema, updatePasswordSchema } from "./user.schema";
import { zodResolver } from "@hookform/resolvers/zod"

const UpdateProfile = () => {

  const form = useForm<UpdatePasswordSchema>(
    {
      resolver: zodResolver(updatePasswordSchema),
    }
  );

  const [updatePasswordMutation, { loading} ] = useUpdatePasswordMutation()

  async function onSubmit(payload: UpdatePasswordSchema) {
    await updatePasswordMutation({
      variables: {
        input: {
          oldPassword: payload.password,
          newPassword: payload.confirmPassword,
        }
      },
      onError: () => {
        toast.error(`Error during update`);
      },
      onCompleted: () => {
        toast.success("Update successful!");
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
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField 
                      control={form.control}
                      name="newPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>New Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter your new password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField 
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirmation Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Enter confirmation of new password"
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