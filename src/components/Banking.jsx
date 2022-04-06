import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit, withdraw } from "../actions";

const Banking = () => {
  const [amount, setAmount] = useState(() => {
    return 0
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDeposit = () => {
    dispatch(deposit(+amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(+amount));
  };

  return (
    <div className="m-auto text-center py-5 w-full">
      <div className="field">
        <input
          type="number"
          className="rounded outline-none p-2 w-3/4"
          placeholder="Amount"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <button
        className=" bg-green-600 text-white text-2xl p-2 rounded m-3 hover:bg-green-800 transition-all"
        onClick={handleDeposit}
      >
        Deposit
      </button>
      <button
        className=" bg-blue-600 text-white text-2xl p-2 rounded m-3 hover:bg-blue-800 transition-all"
        onClick={handleWithdraw}
      >
        Withdraw
      </button>
    </div>
  );
};

export default Banking;
