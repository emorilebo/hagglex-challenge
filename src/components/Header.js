// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'
import { BellIcon, ChevronDownIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-between bg-white shadow-md ">
      <div className="flex items-center p-5">
        <img src="/hagglexlogo.png" alt="" className="h-9" />
        <h1 className="pl-2 text-xl text-blue-900 font-bold">HaggleX</h1>
      </div>
      <div className="flex items-center mr-10">
      <div class="bg-white rounded-md mx-3  relative inline-block cursor-pointer hover:bg-white hover:border-green-300 hover:border-4">
          <BellIcon className="h-8 text-blue-900 " />
          <span class="absolute -top-1 right-0 left-4 inline-block w-3 h-3  bg-gray-300 border-3 mr-1 p-2 text-blue-900 text-xs border-white rounded-full ">
            <p className="text-xs -mt-2 -ml-1">4</p>
          </span>
        </div>
        <div className="border-2 p-2 rounded-full items-cente justify-center">
          <h1>WO</h1>
        </div>
        <h1>Wills Omaer</h1>
        <ChevronDownIcon className="h-6"/>
      </div>
    </div>
  );
}



export default Header;
