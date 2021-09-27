import Activity from "./Activity";
import CoinActivity from "./CoinActivity";

function Wallet() {
  return (
    <div className="shadow-md bg-white w-full lg:w-1/2 rounded-lg mx-4 my-2">
      <div className="flex justify-between m-2">
        <h1 className="p-4 font-bold">Wallet</h1>
        <div className="flex bg-gray-100 m-3 rounded-md">
          <button className="px-3  border-2 border-gray-300 rounded-md bg-gray-200 my-2 font-bold shadow-xl">
            List
          </button>
          <button className="px-3 bg-gray-200 my-2 "> Stats</button>
        </div>
      </div>
      <div className="flex m-2 p-2">
        <div className="cursor-pointer border-b-3 border-yellow-400">
          <p className="font-bold text-lg p-2 ">FLEX</p>
        </div>

        <p>VAULT</p>
      </div>
      <Activity />
    </div>
  );
}

export default Wallet;
