import { useState } from "react";
import Switch from "../components/Switch";
import Timeline from "../components/Timeline";

const OVERVIEWS = [
    { date: 2022, title: 'Polium Pass' },
    { date: 2022, title: 'PFP Airdrop' },
    { date: 2023, title: 'Polium Wallet' },
    { date: 2023, title: 'Gametag Claim' },
    { date: 2024, title: 'Dev Toolkit' },
    { date: 2024, title: 'You will find out' },
    { date: 2024, title: 'Polium One' },
]
const CONSOLES = [
    { date: 2021, title: 'Idea' },
    { date: 2021, title: 'Planning' },
    { date: 2022, title: 'Console Design' },
    { date: '', title: 'Hardware Development' },
    { date: '', title: 'Software Development' },
    { date: '', title: 'Functional Proptype' },
    { date: '', title: 'DFMA' },
    { date: '', title: 'Manufacturing' },
    { date: 2024, title: 'Ready for Launch' },
]

export default function Roadmap() {
    const [currentIndex,setCurrentIndex] = useState(1);
    return (
        <div className="flex flex-col w-full items-center justify-center py-10">
            <div className="flex flex-col gap-4 items-center mb-4">
                <h2 className="text-4xl font-bold">Road Map</h2>
                <p className="">Roadmap for 2022-2024</p>
                <Switch currentIndex={1} items={["Overview", "Console"]} onChangeIndex = {(index)=>setCurrentIndex(index)}></Switch>
            </div>
            {currentIndex === 1 &&
                <Timeline timelines={
                    OVERVIEWS
                }  />
            }
            {currentIndex === 2 &&
                <Timeline timelines={
                    CONSOLES
                } />
            }
        </div>
    )
}