import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full flex justify-between items-center bg-primary-black sm:px-8 px-4 py-4"
        >
            {/* Logo */}
            <div className="md:flex-[0.5] flex-initial justify-center items-center text-white font-bold text-2xl">
                <Link to="/">
                    <h1>Nautical Traders</h1>
                </Link>
            </div>

            {/* Navigation Links for Desktop */}
            <div className="relative z-20 text-white md:flex hidden list-none flex-row justify-between items-center flex-initial text-l">
                <Link to="/data-upload" className="mx-6 hover:scale-[1.1]">
                    Data Upload
                </Link>
                <Link to="/demand-forecast" className="mx-6 hover:scale-[1.1]">
                    Demand Forecast
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navbar;
