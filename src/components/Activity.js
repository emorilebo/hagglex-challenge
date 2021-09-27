import CoinActivity from "./CoinActivity";

const activities = [
  {
    id: 1,
    imageUrl: "/hagglex.png",
    name: "Haggle",
    subName: "HAG",
    balance: "0.0 HAG",
  },
  {
    id: 2,
    imageUrl: "/bitcoins.png",
    name: "Bitcoin",
    subName: "BTC",
    balance: "0.0 BTC",
  },
  {
    id: 3,
    imageUrl: "/usdts.png",
    name: "USDT",
    subName: "USDT",
    balance: "0.0 USDT",
  },
  {
    id: 4,
    imageUrl: "/bitcoincash.png",
    name: "Bitcoin Cash",
    subName: "BCH",
    balance: "0.0 BCH",
  },
  {
    id: 5,
    imageUrl: "/ethereum.png",
    name: "Ethereum",
    subName: "ETH",
    balance: "0.0 ETH",
  },
  {
    id: 6,
    imageUrl: "/dash.png",
    name: "Dash",
    subName: "DASH",
    balance: "0.0 DASH",
  },
  {
    id: 7,
    imageUrl: "/litecoin.png",
    name: "Litecoin",
    subName: "LTC",
    balance: "0.0 LTC",
  },
  {
    id: 7,
    imageUrl: "/dogecoin.png",
    name: "Dogecoin",
    subName: "DOGE",
    balance: "0.0 DOGE",
  },
];

function Activity() {
  return (
    <div className="">
      {activities?.map(({ id, imageUrl, name, subName, balance }) => (
        <CoinActivity
          key={id}
          imageUrl={imageUrl}
          name={name}
          subName={subName}
          balance={balance}
        />
      ))}
    </div>
  );
}

export default Activity;
