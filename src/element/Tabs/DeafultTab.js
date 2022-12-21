import React, { useState } from "react"
import Tab1 from "../Tabs/Tab1";
import Tab2 from "../Tabs/Tab2";
import Tab3 from "../Tabs/Tab3";
import Tab4 from "../Tabs/Tab4";
import Tab5 from "../Tabs/Tab5";
import Tab6 from "../Tabs/Tab6";
import Dropdown from '../Dropdown';


const DeafultTab = () => {
    const [tab, SetTab] = useState(0);
    const title = ["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"];

    const display = () => {
        if (tab === 0) {
            return <Tab1 />;
        } else if (tab === 1) {
            return <Tab2 />;
        } else if (tab === 2) {
            return <Tab3 />;
        } else if (tab === 3) {
            return <Tab4 />;
        } else if (tab === 4) {
            return <Tab5 />;
        } else {
            return <Tab6 />;
        }

    }

    return (
        <div className='w-full flex'>
            <div className='max-w-full my-2'>
                <div className="flex flex-1 justify-between mr-2">
                    <div className='flex gap-1'>
                        {title.map((titles, index) => {
                            return (
                                <button key={index}
                                    onClick={() => SetTab(index)}
                                    className={`py-1 px-4 justify-center items-center w-[8vw] transition-colors duration-300 text-[14px] font-bold font-poppins" 
                            ${index === tab ? "bg-[#353945] rounded-[20px] text-white" : "bg-transparent hover:bg-[#353945] hover:text-white rounded-[20px]"}`}>
                                    {titles}
                                </button>
                            )
                        })}
                    </div>
                    <Dropdown />
                </div>
                <div className="mt-10">
                    {display()}
                </div>
            </div>
        </div>
    )
}

export default DeafultTab