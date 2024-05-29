import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-between h-[350px] w-[350px] bg-white p-4 rounded-lg"
    >
      <input
        className="border-solid border-2 text-lg p-4 rounded-md"
        type="email"
        name="email"
        placeholder="Email"
        id="email"
        value={value.email}
        onChange={handleChange}
      />
      <input
        className="border-solid border-2 text-lg p-4 mt-3 rounded-md"
        type="password"
        name="password"
        placeholder="Password"
        id="password"
        value={value.password}
        onChange={handleChange}
      />

      <div className=" flex flex-col  items-center gap-4">
        <button
          type="submit"
          className="bg-btn-primary p-4 text-white rounded-md w-full"
        >
          Signup
        </button>

        <Link
          to={`/`}
          className="bg-btn-secondary p-4 text-white rounded-md w-1/2 no-underline text-center"
        >
          Back to Login
        </Link>
      </div>
    </form>
  );
};

export default SignupPage;
