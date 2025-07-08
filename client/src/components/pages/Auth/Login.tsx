import LoginForm from "@/components/auth/LoginForm";


const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full gap-4">
      <div className="w-full text-center flex flex-col gap-4">
        <h2 className="text-2xl font-bold ">Login</h2>
      </div>
      <LoginForm />
    </div>
  );
};

export default Login;