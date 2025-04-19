import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

function NavbarContainer() {

    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [isDarkMode , setIsDarkMode] = useState(false);

    const navigate = useNavigate();

    const toggleDarkMode = () => {
        const darkModeClass = 'dark';
        document.documentElement.classList.toggle(darkModeClass);
        setIsDarkMode(!isDarkMode);
    }

    return (
        <div className="flex-col h-max shadow-xl w-full px-10 py-4 md:py-6 gap-4 md:px-40 flex fixed top-0 left-0 z-50 bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between h-full w-full">
                <p
                    onClick={() => navigate('/')}
                    className="text-3xl font-bold text-blue-700 dark:text-white cursor-pointer"
                >
                    SpotFlix
                </p>

                <div className="flex items-center justify-center">
                    <button
                        onClick={toggleDarkMode}
                        className="text-blue-700 dark:text-white text-2xl mr-4 md:hidden cursor-pointer flex justify-center items-center"
                    >
                        {isDarkMode ? '🌞' : '🌜'}
                    </button>

                    {/* Icon container with fixed size and transition */}
                    <div
                        id="metaMenu"
                        className="w-8 h-8 flex items-center justify-center text-blue-700 dark:text-white text-2xl md:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={`transform transition-transform duration-300 ${
                                isMenuOpen ? 'rotate-45 scale-125' : 'rotate-0 scale-100'
                            }`}
                        >
                            {isMenuOpen ? '×' : '☰'}
                        </span>
                    </div>
                </div>

                <div className="md:flex hidden flex-col md:flex-row text-lg text-blue-700 dark:text-white cursor-pointer h-full justify-center items-center">
                    <button
                        onClick={toggleDarkMode}
                        className="text-blue-700 dark:text-white text-2xl mr-4 hidden md:flex cursor-pointer justify-center items-center"
                    >
                        {isDarkMode ? '🌞' : '🌜'}
                    </button>
                    <Menu setIsMenuOpen={setIsMenuOpen} />
                </div>
            </div>

            {isMenuOpen && (
                <div className="flex flex-col md:hidden text-lg text-blue-700 dark:text-white cursor-pointer h-full justify-center items-center w-full gap-2">
                    <Menu setIsMenuOpen={setIsMenuOpen} />
                </div>
            )}
        </div>
    );
}

export default NavbarContainer;