import { Icon } from "@iconify/react";
import { useState } from "react"

export default function Timeline({ timelines,width=360 }) {
    const [currentIndex, setCurrentIndex] = useState(-1);
    const handleActive = (index) => {
        setCurrentIndex(index);
        // const ref = document.getElementById(`actived-${index}`);
    }
    return (
        <div className={`w-[${width}px] flex-col items-center relative`}>
            <div className={`absolute left-[${width/2+2}px]`}  >
                <Icon icon="bxs:flag-checkered" className="w-6 h-6"  ></Icon>
            </div>

            <div className="flex gap-4 mt-6">
                <div className={`border-r ${currentIndex % 2 === 0 ? 'border-black ' : 'border-stone-400'} gap-20 p-2 flex flex-col py-10`} >
                    {timelines?.map((timeline, index) => (
                        (index % 2 === 0) &&
                        <div className={`flex w-[${width/2-10}px] items-end cursor-pointer`} key={index}
                            onClick={() => { handleActive(index) }} id={`actived-${index}`}>
                            <div className={`flex flex-1 flex-col ${currentIndex === index ? 'border-black text-black' : 'border-stone-400'} border-b ${currentIndex % 2 === 0 ? 'border-black' : 'border-stone-400'}`}>
                                <h3 className={``}>{timeline.date}</h3>
                                <h3 className={``}>{timeline.title}</h3>
                            </div>
                            <div className={`border rounded-full ${currentIndex === index ? 'bg-white border-black' : 'bg-stone-400'} w-2 h-2 -mb-1`}>

                            </div>
                            {/* car icon */}
                            {currentIndex === index &&
                                <div className={`absolute left-[${width/2+4}px]`}>
                                    <img className="w-full h-full" src='/assets/race-car.svg'></img>
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <div className={`border-l  pt-20 gap-20  flex flex-col ${currentIndex % 2 === 1 ? 'border-black ' : 'border-stone-400'}`}>
                    {timelines?.map((timeline, index) => (
                        (index % 2 === 1) &&
                        <div className={`flex w-[${width/2-10}px] items-end cursor-pointer`} key={index} onClick={() => { handleActive(index) }} id={`actived-${index}`}>
                            <div className={`border rounded-full ${currentIndex === index ? 'bg-white border-black' : 'bg-stone-400'} w-2 h-2 -mb-1`}>

                            </div>
                            <div className={` text-right flex flex-1  flex-col ${currentIndex === index ? 'border-black text-black' : 'border-stone-400'} border-b ${currentIndex % 2 === 1 ? 'border-black' : 'border-stone-400'}`}>
                                <h3 className={``}>{timeline.date}</h3>
                                <h3 className={``}>{timeline.title}</h3>
                            </div>
                            {/* car icon */}
                            {currentIndex === index &&
                                <div className={`absolute left-[${width/2+4}px] -mb-2`} >
                                    <img className="w-full h-full" src='/assets/race-car.svg'></img>
                                </div>
                            }
                        </div>
                    ))}
                </div>

            </div>
            <div className={`absolute left-[${width/2+2}px]`}  >
                <Icon icon="bxs:flag-checkered" className="w-6 h-6" ></Icon>
            </div>

        </div>
    )
}