import { createContext, useState } from "react";
import Aunt from "../Aunt/Aunt";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("");
// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const ring = "Diamond";
  const [money,setMoney] = useState(1000);
  return (
    <div className="border-2 border-solid border-black w-11/12 text-center p-10 rounded-xl mx-auto my-20">
      <h2 className="text-3xl font-bold">Grandpa</h2>
      <MoneyContext.Provider value={[money,setMoney]} >
        <AssetContext.Provider value={"Gold"}>
          <div className="flex gap-4 mt-5">
            <Dad asset={ring}></Dad>
            <Uncle asset={ring}></Uncle>
            <Aunt></Aunt>
          </div>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
