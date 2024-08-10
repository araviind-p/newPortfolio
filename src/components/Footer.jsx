import { Typography } from "@material-tailwind/react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import { useSelector } from "react-redux";

const currentYear = new Date().getFullYear();

export function Footer() {
    const { darkMode } = useSelector(store => store.appSlice)
    return (
        <footer className={`relative w-full ${darkMode ? 'bg-background-dark text-text-dark':'bg-background-light text-text-light'} `}>
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">

                </div>
                <div className={`mt-12 flex w-full flex-col items-center justify-center border-t ${darkMode ? 'border-blue-gray-50 ':'border-gray-600'} py-4 md:flex-row md:justify-between`}>
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">Aravind P</a>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" href="https://github.com/yourusername" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaGithub className="h-5 w-5" />
                        </Typography>
                        <Typography as="a" href="https://linkedin.com/in/yourusername" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaLinkedin className="h-5 w-5" />
                        </Typography>
                        <Typography as="a" href="mailto:your-email@example.com" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaGoogle className="h-5 w-5" />
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}
