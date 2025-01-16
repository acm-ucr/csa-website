import React from 'react';

const Header = () => {
    return (
        <header className = "text-right py-6 px-4 max-w-xl mx-auto border-r-8 border-[#964F4D] h-[284px]">
            <h1 className = "text-[#800000] text-2xl md:text-6xl font-bodoni font-bold mb-8">
                Chinese Student
                <br />
                Association
            </h1>

            <p className = "text-[#535353] text-4.5 md:text-xl max-3-3xl font-Lora font-semibold mx-auto leading-relaxed">
                Social, cultural, and service oriented 
                <br />
                organization that strives to promote the Chinese 
                <br />
                American Culture throughout the UCR and 
                <br />
                Riverside communities
            </p>
        </header>
    );
};

export default Header;