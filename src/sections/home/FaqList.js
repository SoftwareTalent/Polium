import { useEffect, useState } from "react"
import { Icon } from '@iconify/react'
import Collapse from "../../components/Collaspse";


export default function FaqList() {
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
        <>
            <div className="flex flex-col gap-8 items-center py-10 text-black mb-4 text-4xl font-bold" style={{ background: '#3EB78440' }}>
                F A Q
            </div>
            <Collapse items={faqs}>
            </Collapse>
        </>
    )
}