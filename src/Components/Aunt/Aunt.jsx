import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";
const Aunt = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div className="border p-4 border-solid border-black rounded-xl">
            <h2 className="font-semibold text-2xl">Aunty</h2>
            <p>Money: {money}</p>
            <div className="mt-4 flex gap-4">
                <Cousin name={'Sabrina'}></Cousin>
                <Cousin name={'Shruti'}></Cousin>
                <Cousin name={'Shreya'}></Cousin>
            </div>
            <button onClick={()=>setMoney(money+500)} className="p-3 bg-red-600 rounded-xl mt-4 text-white">Button</button>
        </div>
    );
};

export default Aunt;