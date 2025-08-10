import ForgotPasswordForm from "@/components/user/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full gap-4">
      <div className="w-full text-center flex flex-col gap-4">
        <h2 className="text-2xl font-bold ">Forgot Password</h2>
        <p>Enter your email to receive a password reset link</p>
      </div>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;