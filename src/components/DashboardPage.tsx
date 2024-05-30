import axios from "axios";
import { useState } from "react";

const DashboardPage = () => {
  const [value, setValue] = useState({
    description: "",
    amount: 0,
    paymentMethod: "",
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
    axios
      .post("http://localhost:3000/dashboard", value)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    setValue({ ...value, amount: 0, paymentMethod: "", description: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col justify-between h-[350px] w-[350px] bg-white p-4 rounded-lg"
    >
      <input
        className="border-solid border-2 text-lg p-4 rounded-md"
        type="text"
        name="description"
        placeholder="Description"
        id="description"
        onChange={handleChange}
        value={value.description}
      />
      <input
        className="border-solid border-2 text-lg p-4 mt-3 rounded-md"
        type="number"
        name="amount"
        placeholder="Amount"
        onChange={handleChange}
        id="amount"
        value={value.amount}
      />
      <input
        className="border-solid border-2 text-lg p-4 mt-3 rounded-md"
        type="text"
        name="paymentMethod"
        placeholder="Payment Method"
        onChange={handleChange}
        id="paymentMethod"
        value={value.paymentMethod}
      />
      <button
        className="bg-btn-primary p-4 text-white rounded-md w-full"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default DashboardPage;
