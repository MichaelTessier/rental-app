import { Button } from "@/components/shadcn/button";
import {
  Card,
  CardContent,
  CardHeader,
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
import { MailPlus } from "lucide-react";
import { useForm } from "react-hook-form"
import { useForgotPasswordMutation } from "@/graphql/__generated__/types";
import Loader from "@/components/ui/Loader";
import { toast } from "sonner"
import { forgotPasswordSchema, ForgotPasswordSchema } from "./user.schema";
import { zodResolver } from "@hookform/resolvers/zod"

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordSchema>(
    {
      resolver: zodResolver(forgotPasswordSchema),
    }
  );

  const [forgotPasswordMutation, { loading} ] = useForgotPasswordMutation()

  async function onSubmit(payload: ForgotPasswordSchema) {
    console.log("🚀 ~ onSubmit ~ payload:", payload)
    await forgotPasswordMutation({
      variables: {
        input: {
          email: payload.email,
        }
      },
      onError: (error) => {
        toast.error(`Error during forgot password: ${error.message}`);
      },
      onCompleted: () => {
        toast.success("Email sent!");
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
              <CardHeader>
                {/* <CardTitle className="text-2xl">Sign Up</CardTitle> */}
                {/* <CardDescription>
                  Enter your information to create an account
                </CardDescription> */}
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
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
                    <div className="h-4 w-4 ml-2" >
                      { loading ? <Loader  /> : <MailPlus /> }
                    </div>
                    Send
                  </Button>
                </div>
                {/* <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Link to="/login" className="underline">
                    Sign in
                  </Link>
                </div> */}
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>


  );
};

export default ForgotPasswordForm;