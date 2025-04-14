import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";
const MyBrother = () => {
const [value] = useContext(MoneyContext)
    return (
        <div className="border  border-solid border-black p-4 rounded-xl">
             <h2 className="font-medium text-xl">My Brother</h2>
             <p>Property: {value}</p>
        </div>
    );
};

export default MyBrother;