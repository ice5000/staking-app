import React from "react";

function Postion() {
  return (
    <div className="flex justify-center items-center  ">
      <div className="border-[1px] w-[700px] h-[325px] ">
        <div className="mt-4 items-center text-purple-900 font-medium flex justify-center">
          Add Position
        </div>
        <div className="space-y-5 text-xs">
          <div className="flex flex-row justify-around space-x-96">
            <div>
              <div className="text-purple-900 font-medium">Return</div>
              <div>0 ICZ</div>
            </div>
            <div>
              <div className="text-purple-900 font-medium">Return Rate</div>
              <div>10 %</div>
            </div>
          </div>
          <div className="flex flex-row justify-around space-x-96">
            <div>
              <div className="text-purple-900 font-medium">Min Value:</div>
              <div>5 ICZ</div>
            </div>
            <div>
              <div className="text-purple-900 font-medium">Max Value:</div>
              <div>5000000 ICZ</div>
            </div>
          </div>
        </div>
        <div className="mt-5  flex items-center flex-col">
          <div className="pl-[500px] text-xs">0/50.94 ICZ </div>
          <input className="w-[570px] " type="range"></input>
        </div>
        <div className="flex flex-row justify-evenly mt-7 space-x-44">
          <div className="flex flex-col space-y-1">
            <div className="text-xs text-[#8791A5]">Staked</div>
            <div className="border-[1px] w-20 h-6 text-center flex  text-sm">
              <div className="mx-1">0</div>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-xs text-[#8791A5]">Lock Period</div>
            <div className="border-[1px] w-20 h-6 text-center flex items-center justify-center text-sm">
              <div>3 months </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            <div className="text-xs text-[#8791A5]">Available</div>
            <div className="border-[1px] w-20 h-6 text-center flex items-center justify-center text-sm">
              <div className="mx-1">50.94</div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
            <button className="text-[10px] w-16 h-6 text-white bg-purple-900">
                STAKE
            </button>
        </div>
      </div>
    </div>
  );
}

export default Postion;
