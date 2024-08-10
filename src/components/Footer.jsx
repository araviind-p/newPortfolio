import { Typography } from "@material-tailwind/react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { useSelector } from "react-redux";
import { FaPhone } from "react-icons/fa6";

const currentYear = new Date().getFullYear();

export function Footer() {
    const { darkMode } = useSelector(store => store.appSlice)
    return (
        <footer className={`relative w-full ${darkMode ? 'bg-background-dark text-text-dark' : 'bg-background-light text-text-light'} `}>
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                </div>
                <div className={`mt-12 flex w-full flex-col items-center justify-center border-t ${darkMode ? 'border-blue-gray-50 ' : 'border-gray-600'} py-4 md:flex-row md:justify-between`}>
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >

                        &copy; {currentYear} <a href="https://portfolio-9nm9.onrender.com">Aravind P</a>. All
                        Rights Reserved.

                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" href="https://github.com/araviind-p" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaGithub className="h-5 w-5" />
                        </Typography>
                        <Typography as="a" href="https://www.linkedin.com/in/aravind-p-20853125a/" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaLinkedin className="h-5 w-5" />
                        </Typography>
                        <Typography as="a" href="mailto:aravindparavind10@gmail.com" className="opacity-80 transition-opacity hover:opacity-100">
                            <BiLogoGmail className="h-5 w-5" />
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}
