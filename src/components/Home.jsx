import { RiErrorWarningFill } from 'react-icons/ri';
import { FaPlay, FaFilePdf } from 'react-icons/fa';
import React from 'react';

import '../css/home.css';

function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-between">
            <div className="container p-4 md:p-8 text-white w-full md:w-8/12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">About Us</h2>
                <p className="mb-4 md:mb-6 text-sm md:text-base responsive" style={{ fontSize: '1vw' }}>
                    We're poised to revolutionize the DeFi yield farming landscape by fusing AI and DAO into an ecosystem guided by AI insights and empowered by Truth Seekers. Our vision is to usher in a new era of data-driven decision-making, transparency, and community-driven governance, reshaping the way we approach yield farming.
                </p>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="border-2 border-white p-4 md:p-6 w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 rounded">
                        <h3 className="text-sm font-semibold text-center">Quality's Ascendance: The Truth Seeker's Journey</h3>
                        <hr className="border-0 border-t border-white my-3"></hr>
                        <p className="text-gray-300 text-xs md:text-sm responsive" style={{ fontSize: '1vw' }}>
                            In Passive Spectators, quality holds greater value than quantity. We thrive on dedicated engagement and impactful contributions, where true influence emerges from a commitment to excellence. Becoming a Truth Seeker is a quest to unlock hidden keys.
                        </p>
                    </div>
                    <div className="border-2 border-white p-4 md:p-6 w-full md:w-1/2 md:ml-4 rounded">
                        <h3 className="text-sm font-semibold text-center">Unlocking Unique Yields: Enter the Passive Vault</h3>
                        <hr className="border-0 border-t border-white my-3"></hr>
                        <p className="text-gray-300 text-xs md:text-sm responsive" style={{ fontSize: '1vw' }}>
                            Simply buy and lock your Passive tokens within the Passive vault, enabling the Treasury to farm on your behalf. Enjoy the top stable yields in DeFi without worrying about actively managing any positions. Watch your Locked APY rise over time as the Passive Treasury generates revenue and grows in value.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mt-4 md:mt-6 space-y-4 md:space-y-0 md:space-x-4">
                    <a href="/game" className="border border-white px-4 py-2 flex gap-2 items-center justify-center rounded hover:bg-white hover:text-black duration-200">
                        <FaPlay />
                        Get your access
                    </a>
                    <a href="/declaration" className="border border-white px-4 py-2 flex gap-2 items-center justify-center rounded hover:bg-white hover:text-black duration-200">
                        <FaFilePdf />
                        Declaration
                    </a>
                    <a href="/disclaimer" className="border border-white px-4 py-2 flex gap-2 items-center justify-center rounded hover:bg-white hover:text-black duration-200">
                        <RiErrorWarningFill />
                        Disclaimer
                    </a>
                </div>
            </div>
            <div className="hidden md:block w-full md:w-4/12 h-64 md:h-96 my-auto">
                <img src="images/pages/home/background.png" className="w-full h-full" alt="Background" />
            </div>
        </div>
    );
}

export default Home;
