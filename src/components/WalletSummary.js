import { InformationCircleIcon } from "@heroicons/react/solid";


function WalletSummary() {
  return (
    <div>
      <div className="bg-white max-w-full m-2 pt-2 rounded-md">
        <div className="bg-yellow-500 m-5 p-5 rounded-md cursor-pointer">
          <div className="flex">
            <img src="/bitcoins.png" className="h-10" />
            <div className="ml-6">
              <p className="text-xs font-semibold">Total Wallet Balance</p>
              <p className="text-2xl font-semibold ">0.0000000 BTC</p>
              <div className="bg-white rounded-3xl p-1">
                <p className="text-xs font-semibold">
                  Available Escrow wallet: 0.000000BTC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div CLASS="bg-gray-200 p-4">
            <button className="mx-6 font-bold">SEND</button>
            <button className="mx-6">DEPOSIT</button>
            <button className="mx-6">TRANSFER</button>
            <button className="mx-7">TRANS. HISTORY</button>
          </div>
        </div>
        <div className="border-2 m-6 rounded-t-lg">
          <div className="flex justify-between border-b">
            <button className="bg-gray-100 m-6">EXTERNAL WALLET</button>
            <button className="bg-gray-100 m-6">HAGGLEX WALLET</button>
          </div>
          <div className="flex items-end">
            <div className="border-b w-4/5 border-black m-4">
              <p className="font-semibold">Amount to send</p>

              <div className="flex items-baseline">
                <p className="text-5xl font-semibold">0.00</p>
                <p>NGN</p>
              </div>
            </div>
            <img src="/swap.png" alt="swap" className="h-10" />
          </div>

          <div className="m-4 border-b">
            <p>0.00000000BTC</p>
            <p className="font-bold">Send to</p>
            <input
              className="border-2 p-4 w-full text-xs rounded-lg"
              type="text"
              placeholder="Paste wallet address"
            />
            <p className="text-gray-500 text-xs">Transaction Fees: 0.0000000000BTC</p>
            <button className="border p-3 mt-6 rounded-lg w-full bg-blue-800 text-white">SEND BTC</button>
            <div className="flex items-center justify-center rounded-3xl border bg-blue-100 my-3 mx-12">
                <InformationCircleIcon className="h-5 text-blue-900"/>
                <p className="text-blue-900 font-semibold text-sm">Send only BTC to this deposit address</p>
            </div>
          </div>
         <div className="m-4">
         <p className="text-xs"> - Paste a BTC address only through this manner</p>
          <p className="text-xs"> - Sending coins or tokens other than BTC to this address may result in the loss of your tokens</p>
         </div>
        </div>
      </div>
    </div>
  );

}

export default WalletSummary;
