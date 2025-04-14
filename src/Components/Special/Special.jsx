const Special = ({asset}) => {
    return (
        <div className="border border-solid border-black p-4 rounded-xl">
            <h2>Special</h2>
            <p>Ring: <span className="font-bold text-red-400">{asset}</span></p>
        </div>
    );
};

export default Special;