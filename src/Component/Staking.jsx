import React from "react";
import { WalletIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function Staking() {
  return (
    <div className="space-y-10">
      <div className="flex justify-around mt-5">
        <button className="rounded-sm bg-black text-white w-12 text-center text-xs h-6 font-bold ">
          Demo
        </button>
        <div className="flex text-center justify-center items-center space-x-1">
          <WalletIcon className="w-5 text-purple-900" />
          <div className="text-[9px] text-purple-900 font-medium ">5CXM......nSfL</div>
          <ChevronDownIcon className="w-3 text-purple-900" />
        </div>
      </div>
      <div>
      <div className="justify-items-center flex flex-col justify-center items-center space-y-7 ">
        <div className="text-center text-xl font-medium text-purple-900">
          DEMO STAKING APP
        </div>
        <div className="">
          
          <div className="border-x-[1px] h-24 space-y-5">
          <div className="text-center text-purple-900 font-medium">Contract Information</div>
          <div className="flex  text-center items-center space-x-60  justify-evenly ">
          <div>
          <div className="text-[10px]">Contract Address</div>
          <div className="text-[10px] underline text-purple-900">npMxz.....CKA4s</div>
          </div>
          <div>
          <div className="text-[10px]">Locking Duration</div>
          <div className="text-[10px] text-purple-900">3 months</div>
          </div>
          <div>
          <div className="text-[10px]">Return Rate</div>
          <div className="text-[10px] text-purple-900">10 %</div>
          </div>
          </div>
          </div>
          <div className="border-b-[1px] w-[800px]"></div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Staking;
