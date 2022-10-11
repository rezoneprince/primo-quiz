import React from "react";
import BG from "../../assets/bg.jpg";

const Header = () => {
    return (
        <div
            style={{ backgroundImage: `url(${BG})` }}
            className="container mx-auto p-5 bg-center bg-cover bg-no-repeat"
        >
            <h2 className="text-orange-500 font-bold text-5xl text-center">
                Multistep Quiz Form
            </h2>

        </div>
    );
};

export default Header;
