import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div className="border border-solid border-black p-4 rounded-xl">
            <h2 className="text-2xl font-semibold">Uncle</h2>
            <div className="mt-4 flex gap-4">
                <Cousin name={'Sazid'} asset={asset}></Cousin>
                <Cousin name={'Rakib'}></Cousin>
                <Cousin name={'Pallab'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;