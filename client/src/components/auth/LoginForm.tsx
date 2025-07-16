import { Link, useNavigate } from "react-router-dom";
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
import { LogIn } from "lucide-react";

import { useForm } from "react-hook-form"
import { useLoginMutation } from "@/graphql/__generated__/types";
import Loader from "@/components/ui/Loader";
import { toast } from "sonner"
import { loginSchema, LoginSchema } from "./auth.schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { userStore } from "@/store/user";
import { useReactiveVar } from "@apollo/client";

const LoginForm = () => {
  const form = useForm<LoginSchema>(
    {
      resolver: zodResolver(loginSchema),
    }
  );

  const [loginUserMutation, { loading} ] = useLoginMutation(
    {
      refetchQueries: ["Me"],
    }
  )

  const userState = useReactiveVar(userStore);

  const navigate = useNavigate();

  if(userState.isAuthenticated) {
    redirectToHome()
    return null;
  } 

  async function onSubmit(payload: LoginSchema) {
    await loginUserMutation({
      variables: {
        input: {
          email: payload.email,
          password: payload.password,
        }
      },
      onError: () => {
        toast.error(`Error during login`);
      },
      onCompleted: () => {
        toast.success("Login successful! You can now log in.");
        redirectToHome()
      }
    })  
  }

  function redirectToHome() {
    navigate("/", { replace: true });
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

                    <FormField 
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel>Password</FormLabel>

                          <Link to="/password-forgot" className="underline text-xs">
                            Forgot your password ? 
                          </Link>
                        </div>
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
                  </div>
                  <Button type="submit" className="w-full">
                    <div className="h-4 w-4 ml-2" >
                      { loading ? <Loader  /> : <LogIn  />}
                    </div>
                    Login
                  </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                  Don't have an account?{" "}
                  <Link to="/register" className="underline">
                    Sign up
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </Form>
    </div>


  );
};

export default LoginForm;