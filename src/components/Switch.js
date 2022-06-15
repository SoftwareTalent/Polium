import { useState } from "react"

export default function Switch({items = ["First", "Second"], onChangeIndex }) {
    const [index,setIndex] = useState(1);
    const handleClick = (index)=>{
        setIndex(index);
        if(onChangeIndex)
            onChangeIndex(index)
    }
    return (
        <div className="flex bg-base-200 border border-base-200 p-1 px-3 rounded-2xl h-12 cursor-pointer">
            <div className={`flex w-1/2 font-bold text-lg rounded-2xl items-center h-full px-10 ${index === 1? 'bg-white':''}`} onClick={()=>handleClick(1)}>
                <div>{items[0]}</div>
            </div>
            <div className={`flex w-1/2 font-bold text-lg rounded-2xl items-center h-full px-10 ${index === 2? 'bg-white':''}`}  onClick={()=>handleClick(2)}>
                <div>{items[1]}</div>
            </div>
        </div>
    )
}