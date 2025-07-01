import { Link } from "react-router-dom";

const ErrorBadRequest = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {/* <img src="/images/BAdREquest.png" alt="BAdREquest" height={400} width={400} /> */}
      <p className="text-xl">
        Bad Request :( Go back to{" "}
        <b>
          <Link to="/" className="text-blue-500">
            HomePage
          </Link>
        </b>
      </p>
    </div>
  );
};

export default ErrorBadRequest;