function CoinActivity({ imageUrl, name, subName, balance }) {
    return (
        <div className="flex items-center px-1 cursor-pointer hover:bg-gray-300">
      <img src={imageUrl} className="h-10 w-10 rounded-md" alt="" />
      <div className="flex justify-between w-full py-3">
        <div className="pl-3">
          <p className="text-sm font-medium">{name}</p>
          <p className="text-gray-500 text-sm">{subName}</p>
        </div>
        <div>
        <p className="justify-end text-blue-900 text-md">{balance}</p>
        <p className="text-xs mr-3">NGN 0.00</p>
        </div>
      </div>
      
    </div>
    )
}

export default CoinActivity
