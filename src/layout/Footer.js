
import { Icon } from '@iconify/react';


export default function Footer() {
    return (
        <div className="flex justify-between gap-4 w-full max-w-6xl p-4">
            <h6 className="text-sm">© Polium 2022. All rights reserved</h6>

            <div className="flex gap-4 items-center ">
                <button className="text-white btn btn-circle btn-sm bg-black border-0 hover:bg-black p-0"><Icon width={20} icon ='akar-icons:instagram-fill'></Icon></button>
                <button className="text-white btn btn-circle btn-sm bg-black border-0 hover:bg-black p-0"><Icon width={20} icon ='codicon:github'></Icon></button>
                <button className="text-white btn btn-circle btn-sm bg-black border-0 hover:bg-black p-0"><Icon width={18} icon ='bxl:discord-alt'></Icon></button>
                
            </div>
        </div>
    )
}