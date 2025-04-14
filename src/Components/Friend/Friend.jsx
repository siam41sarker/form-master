import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";
const Friend = ({name}) => {
    const gift = useContext(AssetContext);
    const [moneyMine] = useContext(MoneyContext);
    return (
        <div className="border border-solid border-black rounded-xl p-4">
            <h1>Friend</h1>
            <p>Asset: <span className="font-medium text-blue-400">{gift}</span></p>
            {name==="Shruti"&& <p>Money: <span className="font-medium text-violet-600">{moneyMine}</span></p>}
        </div>
    );
};

export default Friend;