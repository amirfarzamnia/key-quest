import { RiErrorWarningFill } from 'react-icons/ri';
import { FaPlay, FaFilePdf } from 'react-icons/fa';
import React from 'react';

function Home() {
    return (
        <div className="flex justify-between">
            <div className="container p-8 text-white w-8/12">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="mb-8 text-sm">We're poised to revolutionize the DeFi yield farming landscape by fusing AI and DAO into an ecosystem guided by AI insights and empowered by Truth Seekers. Our vision is to usher in a new era of data-driven decision-making, transparency, and community-driven governance, reshaping the way we approach yield farming.</p>
                <div className="flex justify-between">
                    <div className="border-2 border-white p-6 w-1/2 mr-4 rounded-sm">
                        <h3 className="text-sm font-semibold text-center">Quality's Ascendance: The Truth Seeker's Journey</h3>
                        <hr className="border-0 border-t border-white my-3"></hr>
                        <p className="text-gray-300 text-sm">In Passive Spectators, quality holds greater value than quantity. We thrive on dedicated engagement and impactful contributions, where true influence emerges from a commitment to excellence. Becoming a Truth Seeker is a quest to unlock hidden keys, revealing profound truths that shape our shared pursuit.</p>
                    </div>
                    <div className="border-2 border-white p-6 w-1/2 ml-4 rounded-sm">
                        <h3 className="text-sm font-semibold text-center h5">Unlocking Unique Yields: Enter the Passive Vault</h3>
                        <hr className="border-0 border-t border-white my-3"></hr>
                        <p className="text-gray-300 text-sm">Simply buy and lock your Passive tokens within the Passive vault, enabling the Treasury to farm on your behalf. Enjoy the top stable yields in DeFi without worrying about actively managing any positions. Watch your Locked APY rise over time as the Passive Treasury generates revenue and grows in value. Relax and enjoy effortless passive income.</p>
                    </div>
                </div>
                <div className="flex mt-8 space-x-4">
                    <a href="/game" className="border border-white px-4 py-2 flex gap-2 items-center rounded-sm hover:bg-white hover:text-black duration-200">
                        <FaPlay />
                        Get your access
                    </a>
                    <a href="/declaration" className="border border-white px-4 py-2 flex gap-2 items-center rounded-sm hover:bg-white hover:text-black duration-200">
                        <FaFilePdf />
                        Declaration
                    </a>
                    <a href="/disclaimer" className="border border-white px-4 py-2 flex gap-2 items-center rounded-sm hover:bg-white hover:text-black duration-200">
                        <RiErrorWarningFill />
                        Disclaimer
                    </a>
                </div>
            </div>
            <img src="images/pages/home/background.png" className="w-4/12 h-96 my-auto" width="auto"></img>
        </div>
    );
}

export default Home;
