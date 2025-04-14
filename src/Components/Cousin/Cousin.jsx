import { useContext } from "react";
import Friend from "../Friend/Friend";
import Special from "../Special/Special";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";
const Cousin = ({name,asset}) => {
    const goldAsset = useContext(AssetContext);
    const [data] = useContext(MoneyContext);
    return (
        <div className="border border-black p-4 rounded-xl">
            <h1 className="text-xl font-medium">Cousin</h1>
            <p>{name}</p>
            {asset&& <section className="mt-4">
                    <Special asset={asset}></Special>
                </section>}
            {(name==="Shreya")&& <section className="mt-4">
                        <Friend name={name}></Friend>
                </section>}
            {name==="Shruti"&& <section className="mt-4">
                    <Friend name={name}></Friend>
                </section>}
            {name==="Sabrina"&&<p>Ring: <span className="font-medium text-purple-500">{goldAsset}</span></p>}
            {name==="Pallab"&&<p>Wealth: {data}</p>}
        </div>
    );
};

export default Cousin;