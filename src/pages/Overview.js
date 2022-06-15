
const PassItem = ({ item }) => {
    return (
        <div className="flex flex-col gap-2 w-24 items-center">
            <div className="w-24 h-[85px] bg-base-300 rounded-xl">

            </div>
            <span>
                {item.title}
            </span>
        </div>

    )
}

export default function Overview() {
    return (
        <div className="flex flex-col py-10 items-center w-full justify-center">
            {/* holding & supply */}
            <div className="flex flex-col border rounded-xl max-w-xl w-full  py-10 mb-10 gap-4">
                <div className="flex w-full py-4">
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="flex flex-col ">
                            <h2 className="text-2xl font-bold">
                                HOLDING
                            </h2>
                            <div className="w-1/2 flex items-center">
                                <img src='/assets/ticket-star.svg' alt="star" className="h-8"></img>
                                <span>5,100</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div className="flex flex-col ">

                            <h2 className="text-2xl font-bold">
                                CURRENT SUPPLY
                            </h2>
                            <div className="w-1/2 flex items-center">
                                <img src='/assets/ticket-star.svg' alt="star" className="h-8"></img>
                                <span>102,000,000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex rounded-xl w-full h-60  items-center justify-center gap-4 mb-14">
                        <div className="rounded-full h-40 w-40 py-10 flex flex-col items-center gap-3 border-gray-600 border-4">
                            <div className="w-10">
                                <img src='/assets/ticket-star.svg' className="width:100%" />
                            </div>
                            <h3 className="text-xs tracking-tight mb-10">Next Amount: 100 Tickets</h3>
                            <h3 className="">In 24 Hours</h3>
                        </div>

                    </div>

                </div>
            </div>
            {/* Polium Pass */}

            <h3 className="text-xl uppercase font-bold ">Polium Pass</h3>
            <div className="flex flex-col border rounded-xl max-w-lg w-full py-10 items-center mb-10 gap-4">
                <h3 className="text-xl  font-bold">Floor</h3>
                <span className="mb-2">6.2 ETH</span>
                <h3 className="text-xl  font-bold">Floor</h3>
                <span className="">18,492/20,000</span>
            </div>
            {/* My Passes */}
            <h3 className="text-xl uppercase font-bold">My Passes</h3>
            <div className="flex gap-2 sm:gap-6 md:gap-10 border rounded-xl max-w-2xl w-full py-10 items-center justify-center">
                <PassItem item = {{title:"#271"}}/>
                <PassItem item = {{title:"#1271"}}/>
                <PassItem item = {{title:"#3271"}}/>
            </div>
        </div>
    )
}