"use client";

import { redirect } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { makePayment } from "@/actions/user";

export const PaymentSection = ({
  user,
}: {
  user: { id: string; role: string };
}) => {
  //Transaction states
  const [currency, setCurrency] = useState<string>("");
  const [data, setData] = useState({
    id: user.id,
    amount: "",
    mode: "",
  });
  const [wallet, setWallet] = useState<string>("");
  const [network, setNetwork] = useState<string>("");

  //user feedback states

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>("");
  const [success, setSuccess] = useState<boolean | null>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value === "" ? 0 : parseFloat(e.target.value);
    if (!isNaN(newAmount)) {
      setData({
        id: user.id,
        amount: String(newAmount),
        mode: data.mode,
      });
    }
  };

  const onHandleCurrencyChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
    setError(null);
    setLoading(true);
    const currencyValue = e.target.value;

    if (currencyValue == null || !data.amount) {
      setWallet("");
      setData({
        id: "",
        amount: "",
        mode: "",
      });
      return;
    }

    if (currencyValue == "usdt") {
      timerRef.current = setTimeout(() => {
        setNetwork("BSC");
        setWallet("0x4434r7t4rergr7843tr7429384yrejh00454454e");
      }, 3000);

      console.log(data.amount);
      setLoading(false);
    }

    if (currencyValue == "bnb") {
      timerRef.current = setTimeout(() => {
        setNetwork("ETH");
        setWallet("0x4434r7t4rergr7843tr7429384yrejh00454454e");
      }, 3000);
      //convert the currency
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", data.id);
    formData.append("amount", data.amount);
    formData.append("mode", data.mode);

    console.log(data);

    const res = await makePayment(formData);
    if (res.success) {
      setData({
        id: "",
        amount: "",
        mode: "",
      });
      setWallet("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex w-70 flex-col gap-2 p-2">
        <input
          type="text"
          name="amount"
          value={data.amount}
          className="h-10 border px-4 hover:outline-0"
          placeholder="Amount to pay in USD"
          onChange={onHandleChange}
        />

        <p className="text-justify">
          Enter amount you want to pay in dollars, code will convert it to your
          required token
        </p>
        <select
          className="mx-auto h-10 w-full bg-gray-200 px-4 text-center"
          name="mode"
          onChange={onHandleCurrencyChange}
        >
          <option defaultChecked value="null">
            -- Mode of Payment --
          </option>
          <option value="usdt">USDT - BSC Network</option>
          <option value="bnb">BNB - BSC Network</option>
        </select>
        <div className="flex w-full flex-col">
          {loading && <p>Loading...</p>}
          {!!wallet && (
            <>
              <h4 className="text-justify text-sm">
                Send{" "}
                <span className="text-md font-semibold text-blue-900">
                  {data.amount} USDT
                </span>{" "}
                to the address below on {network} network
              </h4>
              <p className="flex w-full flex-wrap py-2">
                {wallet.slice(0, 37)}...
              </p>

              <div className="flex flex-col gap-4">
                <p className="text-justify">
                  Click the button below to confirm funds have been sent to
                  wallet
                </p>
                <input
                  type="text"
                  name="id"
                  value={data.id}
                  onChange={onHandleChange}
                />
                <button className="h-10 w-full border">Confirm</button>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};
