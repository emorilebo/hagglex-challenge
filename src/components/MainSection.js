import MainHeader from "./MainHeader";
import Wallet from "./Wallet";
import WalletSummary from "./WalletSummary";

function MainSection() {
  return (
    <div className="bg-gray-200 w-full">
      <MainHeader/>
      <div className="flex-row md:flex">
      <Wallet />
      <WalletSummary />
      </div>
    </div>
  );
}

export default MainSection;
