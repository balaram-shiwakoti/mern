import { Link } from "react-router-dom";

const LoginComponent = () => {
  return (
    <div className=" flex flex-col justify-between h-[350px] w-[350px] bg-white p-4 rounded-lg">
      <div className="flex flex-col">
        <input
          className="border-solid border-2 text-lg p-4 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="border-solid border-2 text-lg p-4 mt-3 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
      </div>
      <div className="flex flex-col  items-center gap-4">
        <button className="bg-btn-primary p-4 text-white rounded-md w-full">
          Log In
        </button>
        <hr />
        <hr />
        <hr />
        <Link
          className="bg-btn-secondary p-2 text-white rounded-md w-1/2 no-underline	"
          to={`signup`}
        >
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default LoginComponent;
