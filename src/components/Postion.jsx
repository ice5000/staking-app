import { useState } from "react";

function Postion() {
  const [range, setRange] = useState(0);

  return (
    <div className="flex justify-center items-center">
      <div className="border-[1px] w-full h-full lg:w-[700px] lg:h-[325px]">
        <div className="mt-4 items-center text-purple-900 font-medium flex justify-center">
          Add Position
        </div>
        <div className="space-y-5 text-sm">
          <div className="flex flex-row justify-between px-10">
            <div>
              <div className="text-purple-900 font-medium">Return</div>
              <div>0 ICZ</div>
            </div>
            <div>
              <div className="text-purple-900 font-medium">Return Rate</div>
              <div>10 %</div>
            </div>
          </div>
          <div className="flex flex-row justify-between px-10">
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
        <div className="mt-5 flex items-center flex-col">
          <div className="mr-12 ml-auto text-xs">{range}/50 ICZ </div>
          <input
            min={0}
            max={50}
            onChange={(e) => setRange(e.currentTarget?.value)}
            className="w-[90%] mt-2"
            type="range"
          />
        </div>
        <div className="flex flex-row justify-evenly mt-7 space-x-8 lg:space-x-44">
          <div className="flex flex-col space-y-1">
            <div className="text-xs text-[#8791A5]">Staked</div>
            <div className="border-[1px] w-20 h-6 text-center flex  text-sm">
              <div className="mx-auto text-center">0</div>
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
          <button className="text-[10px] py-2 px-4 mb-2 rounded-sm text-white bg-purple-900 hover:bg-purple-800">
            STAKE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Postion;
