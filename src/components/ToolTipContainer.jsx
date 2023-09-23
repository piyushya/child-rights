import tooltip_data from '../tooltip_data.json'
import { useState } from 'react'

export default function ToolTipContainer(title, setTooltip_title){
    const tooltip_desc = tooltip_data[title];
    return(
        <div className='tooltip_container'>
            <div className='tooltip_wrapper'>
                {tooltip_desc}
                <button className='tooltip_close_btn' onClick={()=>{
                    setTooltip_title("");
                    console.log("close tooltip");
                }}>close</button>
            </div>
        </div>
    )
}