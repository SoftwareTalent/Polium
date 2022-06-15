import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Collapse({ items }) {
    const [currentIndex,setCurrentIndex] = useState(-1);

    return (
        <>
            {items?.map((item, index) => (
                <div onClick={() => setCurrentIndex(index)} key={index} tabIndex="0" className="collapse  border-b  last:border-0 border-base-300 bg-base-100 cursor-pointer">
                    <div className="collapse-title text-xl font-medium">
                        <div className="flex gap-4 items-center">
                            {index !== currentIndex &&
                                <Icon width={24} icon="akar-icons:chevron-right"></Icon>
                            }
                            {index === currentIndex &&
                                <Icon width={24} icon="akar-icons:chevron-down"></Icon>
                            }
                            <h4>{item?.title}</h4>
                        </div>

                    </div>
                    <div className="collapse-content">
                        <p>{item?.content}</p>
                    </div>

                </div>
            ))}
        </>
    )


}