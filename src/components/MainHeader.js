function MainHeader() {
    return (
        <div className="shadow-md bg-yellow-500 mx-3 my-4 px-6 py-4 rounded-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <div>
            <p className="font-semibold">My Asset Portfolio</p>
            <p className="text-5xl font-semibold">N0.00</p>
          </div>
          <p className="p-2">NGN</p>
          </div>
          <div className="bg-white rounded-3xl flex items-center pl-3">
          <p>USD</p>
          <button className="shadow-lg bg-yellow-500 rounded-3xl text-xs font-bold mx-2 my-1 px-4 py-1">NGN</button>
          </div>
        </div>
      </div>
    )
}

export default MainHeader