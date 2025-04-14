import MyBrother from "../MyBrother/MyBrother";
import Myself from "../Myself/Myself";
import MySister from "../MySister/MySister";
const Dad = ({asset}) => {
    return (
        <div className="border border-solid border-black p-4 rounded-xl">
            <h2 className="font-semibold text-2xl">Dad</h2>
            <div className="flex mt-3 gap-4">
                <Myself asset={asset}></Myself>
                <MyBrother></MyBrother>
                <MySister></MySister>
            </div>
        </div>
    );
};

export default Dad;