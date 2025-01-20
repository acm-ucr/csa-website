import React from "react";
import Image from "@/public/about/heart.svg";

const Philanthropy = () => {
    return (
        <div className="relative grid grid-cols-4 p-6">
            <div className="col-span-2 flex items-center border-8 rounded-3xl border-csa-gray-200 p-2">
                <p className=" text-left text-5xl font-lora font-bold text-csa-gray-200 p-4">Philanthropy</p>
                <div className="absolute left-1/2 " style={{transform: 'translateY(5%) translateX(-50%)'}}>
                    <img src={Image.src} alt="heart" className="w-3/4 h-3/4" />
                </div>
            </div>
        </div>
    );
};

export default Philanthropy;
    