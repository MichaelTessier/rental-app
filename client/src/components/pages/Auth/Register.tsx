import RegisterForm from "@/components/auth/RegisterForm";


const Register = () => {
 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full gap-4">
      <div className="w-full text-center flex flex-col gap-4">
        <h2 className="text-2xl font-bold ">Register</h2>
        <p>Enter your information to create an account</p>
      </div>
      <RegisterForm />
    </div>
  );
};

export default Register;