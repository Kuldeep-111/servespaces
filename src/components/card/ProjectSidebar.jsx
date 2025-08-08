import { useState } from "react";
import { CgTrending } from "react-icons/cg";
import { FaTools } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { ImImage } from "react-icons/im";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiMountains } from "react-icons/pi";

const ProjectSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const tabsData = [
        { icon: IoDocumentTextOutline, topic: "Basic" },
        { icon: ImImage, topic: "Banner" },
        { icon: GoInfo, topic: "Overview" },
        { icon: PiMountains, topic: "Landscapes" },
        { icon: ImImage, topic: "Gallery" },
        { icon: FaTools, topic: "Amenities" },
        { icon: FaTools, topic: "Location Map" },
        { icon: GoInfo, topic: "Key Highlights" },
        { icon: CgTrending, topic: "Floor Plan" },
        { icon: FaTools, topic: "Construction Technology" },
    ];

    return (
        <div className="project-details-sidebar fixed top-0 right-0 bg-[#13131d] py-10 h-screen z-50">
            <div className="flex flex-col items-center gap-10">
                {/* Hamburger */}
                <div
                    className="hamburger fixed top-5 right-5 bg-orange-600 flex flex-col justify-center items-center rounded-full w-14 h-14 cursor-pointer transition-transform duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Top Line */}
                    <div
                        className={`w-8 h-[4px] bg-white rounded-lg transition-all duration-300 ${
                            isOpen ? "rotate-45 translate-y-1.5" : ""
                        }`}
                    />
                    {/* Bottom Line */}
                    <div
                        className={`w-8 h-[4px] bg-white mt-2 rounded-lg transition-all duration-300 ${
                            isOpen ? "-rotate-45 -translate-y-1.5" : ""
                        }`}
                    />
                </div>

                {/* Tabs */}
                <div className="tabs flex flex-col mt-16 justify-center items-start gap-3">
                    {tabsData.map((tab, i) => {
                        const IconComponent = tab.icon;
                        return (
                            <div
                                key={i}
                                className="flex w-full items-center px-10 py-3 hover:bg-orange-500 gap-5 transition-all duration-300"
                            >
                                <IconComponent color="white" size={26} />
                                {/* Topic: Only show when sidebar is open */}
                                {isOpen && (
                                    <div className="topic text-white font-bold whitespace-nowrap">
                                        {tab.topic}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProjectSidebar;
