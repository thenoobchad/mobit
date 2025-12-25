"use client";

import { useState } from "react";



// import axios from 'axios';



import { ExchangeRate } from "./exchange-rate";
import { Button } from "../button";





export const CurrencyConverter = () => {

    const [primary, setPrimary] = useState<string | undefined>("BTC")
    const [secondary, setSecondary] = useState<string | undefined>("BTC")
    
    const [amount, setAmount] = useState(1)

    const [exchangeRate, setExchangeRate] = useState(0)

    const currencies = ["BTC", "ETC", "USD", "XRP", "LTC", "ADA"]

    // const handleCurrencyChange = (e:ChangeEvent<HTMLInputElement>) => {
    //     setAmount(Number(e.target.value))
    // }

    const handleConvert = () => { 
        const options = {
          method: "GET",
          url: "https://alpha-vantage.p.rapidapi.com/query",
          params: {
            from_currency: primary,
            function: "CURRENCY_EXCHANGE_RATE",
            to_currency: secondary,
          },
          headers: {
            "x-rapidapi-host": "alpha-vantage.p.rapidapi.com",
            "x-rapidapi-key": "myapikeypass",
          },
        };

        // axios.request(options).then((response) => {
        //     console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
        //     setExchangeRate(
        //       response.data["Realtime Currency Exchange Rate"][
        //         "5. Exchange Rate"
        //       ]
        //     );
        // }).catch((error) => {
        //     console.error(error)
        // })
    }
    
  return (
      <div className="  rounded-sm p-4 border-accent">
          <h2 className="text-xl font-semibold text-white">Currency converter</h2>

          <div className="flex flex-col gap-4">
          <table className="w-full">
              <tbody>
                  <tr className="gap-5 flex ">
                      <td>Primary Currency:</td>
                        <td>
                            <input
                                type="number"
                                name="currency-amount-1"
                                value={amount}
                                  onChange={(e) => setAmount(Number(e.target.value))}
                                  className=" focus:outline-none"
                          /></td>
                        <td>
                              <select
                                  value={primary}
                                  name="currency-option-1"
                                  className="focus:outline-none outline[select]:w-full"
                                  onChange={(e) => setPrimary(e.target.value)}
                                  
                              >
                                  {currencies.map((currency, i) => (
                                      <option value=""
                                      key={i}
                                      >{currency}</option>
                                  ))}
                                  
                            </select>
                        </td>
                      </tr>
                      
                     <tr className="flex gap-4">
                      <td>Secondary Currency:</td>
                     
                          <td>
                              <select
                                  value={secondary}
                                  name="currency-option-2"
                                  className=""
                                  onChange={(e) => setSecondary(e.target.value)}
                              >
                                 {currencies.map((currency, i) => (
                                      <option value=""
                                      key={i}
                                      >{currency}</option>
                                  ))}
                            </select>
                        </td>
                </tr>
              </tbody>
              </table>

              <Button title="Convert" style=""/>
              </div>
          <ExchangeRate />
    </div>
  )
}