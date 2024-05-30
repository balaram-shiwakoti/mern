import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();
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

    axios
      .post("http://localhost:3000/", {
        email: value.email,
        password: value.password,
      })
      .then((result) => {
        console.log(result);
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col justify-between h-[350px] w-[350px] bg-white p-4 rounded-lg"
    >
      <div className="flex flex-col">
        <input
          className="border-solid border-2 text-lg p-4 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
          value={value.email}
        />
        <input
          className="border-solid border-2 text-lg p-4 mt-3 rounded-md"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          id="password"
          value={value.password}
        />
      </div>
      <div className="flex flex-col  items-center gap-4">
        <button
          type="submit"
          className="bg-btn-primary p-4 text-white rounded-md w-full"
        >
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
    </form>
  );
};

export default LoginComponent;
