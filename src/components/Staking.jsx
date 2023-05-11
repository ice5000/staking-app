import Header from "./Header";


function Staking() {
  return (
    <div className="space-y-10">
      <Header />
        <div className="flex flex-col justify-between">
          <div className="text-center text-2xl lg:text-3xl font-medium text-purple-900">
            DEMO STAKING APP
          </div>
          <div className="">
            <div className="border-x-[1px] h-full space-y-5 max-w-5xl mx-auto">
              <div className="text-center text-lg lg:text-xl text-purple-900 font-medium">
                Contract Information
              </div>
              <div className="flex text-center items-center px-2 justify-between max-w-4xl mx-auto">
                <div className="mb-2">
                  <div className="text-[13px]">Contract Address</div>
                  <div className="text-[13px] underline text-purple-900">
                    npMxz.....CKA4s
                  </div>
                </div>
                <div className="mb-2">
                  <div className="text-[13px]">Locking Duration</div>
                  <div className="text-[13px] text-purple-900">3 months</div>
                </div>
                <div className="mb-2">
                  <div className="text-[13px]">Return Rate</div>
                  <div className="text-[13px] text-purple-900">10 %</div>
                </div>
              </div>
            </div>
            <div className="border-b-[1px] w-full max-w-5xl mx-auto"></div>
          </div>
        </div>

    </div>
  );
}

export default Staking;
