import { useEffect, useState } from "react";
import Collapse from "../components/Collaspse";

export default function PoliumPass() {
    const [faqs, setFaqs] = useState([]);
    
    useEffect(() => {
        setFaqs(
            [
                {
                    title: "Is the console available?",
                    content: "Yes, available, if you're a correct user, it is possible"
                },
                {
                    title: "Is the console available?",
                    content: "Yes, available, if you're a correct user, it is possible"
                },
                {
                    title: "Is the console available?",
                    content: "Yes, available, if you're a correct user, it is possible"
                }
            ]
        )
    }, [])

    return (
        <div className="flex flex-col justify-center items-center gap-4 sm:gap-8 p-2 sm:p-4 md:p-8 " >
            {/* pass */}
            <h2 className="text-4xl font-bold">Polium Pass </h2>
            <p>The pass to access the Polium Ecosystem</p>
            <span>Mint is coming soon!</span>
            <div className="w-full max-w-sm border border-base-300 mb-10 sm:mb-16">
                <video src=''>

                </video>
            </div>
            {/* utils */}
            <h2 className="text-4xl font-bold">Utilities </h2>
            <p className="mb-4">Holders will receive</p>

            <div className="w-full max-w-lg justify-between mb-10 sm:mb-16 flex gap-2 sm:gap-4 md:gap-8 flex-col sm:flex-row">
                <div className="flex flex-col gap-2 items-center mb-2 ">
                    <div className="flex h-12 w-12 flex-col w">
                        <img src='/assets/mobile.svg' className="width:100%" />
                    </div>
                    <span className="text-sm">Polium One Console</span>
                </div>
                <div className="flex flex-col gap-2 items-center mb-2 ">
                    <div className="flex h-12 w-12 flex-col w">
                        <img src='/assets/ticket-star.svg' className="width:100%" />
                    </div>
                    <span className="text-sm">5000 Tickets</span>
                </div>
                <div className="flex flex-col gap-2 items-center mb-2 ">
                    <div className="flex h-12 w-12 flex-col w">
                        <img src='/assets/archive.svg' className="width:100%" />
                    </div>
                    <span className="text-sm">Future Airdrops</span>
                </div>
            </div>
            {/* ticket */}
            <h2 className="text-4xl font-bold">Polium Tickets </h2>
            <p className="mb-14">You will be rewarded tickets for being a holder. The tickets can mean something big in the future</p>

            <h2 className="text-4xl font-bold">Automatic Staking </h2>
            <p className="mb-4">You will automatically earn daily tickets by holding the Polium Pass</p>
            {/* staking */}

            <div className="flex rounded-xl w-[280px] h-60 bg-gradient-to-b from-fuchsia-400 to-blue-300 items-center justify-center gap-4 mb-14">
                <div className="rounded-full h-40 w-40 py-10 flex flex-col items-center gap-3 border-gray-600 border-4">
                    <div className="w-10">
                    <img src='/assets/ticket-star.svg' className="width:100%" />
                    </div>
                    <h3 className="text-xs tracking-tight">Next Amount: 100 Tickets</h3>
                </div>
            </div>
           {/* ticket */}
           <h2 className="text-4xl font-bold">FAQ</h2>
           <p className="mb-8">Frequently asked questions regarding the Polium Pass</p>
           <div className="w-full md:w-3/4">
           <Collapse items={faqs}>
            </Collapse>
           </div>
           
        </div>
    )
}