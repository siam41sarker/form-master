import Special from "../Special/Special";

const Myself = ({asset}) => {
    return (
        <div className="border  border-solid border-black p-4 rounded-xl">
            <h2 className="text-xl font-medium">Myself</h2>
            <div className="mt-4 flex justify-center">
                <Special asset={asset}></Special>
            </div>
        </div>
    );
};

export default Myself;