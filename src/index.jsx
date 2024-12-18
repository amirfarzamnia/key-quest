import { createWeb3Modal, defaultConfig, useWeb3ModalAccount } from '@web3modal/ethers5/react';
import { FaTelegram, FaRegUser, FaCheck, FaBars, FaTimes } from 'react-icons/fa';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import Disclaimer from './components/Disclaimer';
import Dashboard from './components/Dashboard';
import { MdDashboard } from 'react-icons/md';
import NotFound from './components/NotFound';
import { FaXTwitter } from 'react-icons/fa6';
import Statics from './components/Statics';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Game from './components/Game';
import React from 'react';

import './index.css';

const Header = ({ address }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="border-b border-b-white flex gap-2 items-center justify-between px-4 md:px-8 py-2 overflow-x-auto">
            <a href="/" className="font-bold text-xl text-nowrap">
                Passive Spectators
            </a>
            <div className="flex gap-2 items-center">
                {address && <span className="hidden md:block">{address}</span>}
                {!isMenuOpen && (
                    <button className="text-2xl md:hidden" onClick={() => setIsMenuOpen(true)}>
                        {<FaBars />}
                    </button>
                )}
                <div className="hidden md:flex gap-2 items-center">
                    {window.location.pathname === '/' ? (
                        <>
                            <a href="/statics" className="border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 py-1 flex items-center gap-2 rounded">
                                <MdDashboard />
                                Statics
                            </a>
                            <a href="/dashboard" className="border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 py-1 flex items-center gap-2 rounded">
                                <FaRegUser />
                                Dashboard
                            </a>
                        </>
                    ) : (
                        <a href="/" className="border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 py-1 flex items-center gap-2 rounded group">
                            <BsArrowLeftShort className="group-hover:-translate-x-1 transform duration-200" />
                            Back
                        </a>
                    )}
                </div>
            </div>
            {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-4 z-10 md:hidden">
                    <button className="text-2xl md:hidden" onClick={() => setIsMenuOpen(false)}>
                        {<FaTimes />}
                    </button>
                    <a href="/statics" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                        Statics
                    </a>
                    <a href="/dashboard" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                        Dashboard
                    </a>
                    {window.location.pathname !== '/' && (
                        <a href="/" className="text-white text-2xl" onClick={() => setIsMenuOpen(false)}>
                            Back
                        </a>
                    )}
                </div>
            )}
        </header>
    );
};

createWeb3Modal({
    themeMode: 'light',
    ethersConfig: defaultConfig({
        metadata: {
            name: 'Passive Spectators',
            description: 'AppKit Example',
            url: 'https://web3modal.com',
            icons: ['https://avatars.githubusercontent.com/u/37784886']
        }
    }),
    chains: [
        {
            chainId: 1,
            name: 'Ethereum',
            currency: 'ETH',
            explorerUrl: 'https://etherscan.io',
            rpcUrl: 'https://cloudflare-eth.com'
        }
    ],
    projectId: '72d31a31e44763d401b07e629ffa3414',
    enableAnalytics: true
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

function App() {
    const [notification, setNotification] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const { address } = useWeb3ModalAccount();

    const ca = 'xxxxxxxxxxxxxxxxxxxxxxx';

    React.useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return (
            <div className="bg-black text-white min-h-screen overflow-hidden flex items-center justify-center border border-white">
                <div className="loading"></div>
            </div>
        );
    }

    return (
        <div className="bg-black text-white min-h-screen overflow-hidden flex flex-col border border-white">
            {['/', '/dashboard'].includes(window.location.pathname) && (
                <>
                    <div className="star"></div>
                    <div className="star"></div>
                    <div className="star"></div>
                </>
            )}
            <Header address={address} />
            <div className="overflow-y-auto" style={{ maxHeight: '85vh' }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/disclaimer" element={<Disclaimer />} />
                        <Route path="/statics" element={<Statics />} />
                        <Route path="/game" element={<Game />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <footer className="border-t border-t-white mt-auto flex items-center py-4 px-4 md:px-8 gap-4 justify-between">
                <div className="flex items-center gap-6">
                    <a href="#" target="_blank" className="text-2xl transform transition-transform duration-300 hover:scale-110">
                        <FaTelegram />
                    </a>
                    <a href="#" target="_blank" className="text-2xl transform transition-transform duration-300 hover:scale-110">
                        <FaXTwitter />
                    </a>
                </div>
                <span
                    onClick={() => {
                        navigator.clipboard.writeText(ca).then(() => {
                            setNotification(true);

                            setTimeout(() => setNotification(false), 2000);
                        });
                    }}
                    className="cursor-pointer hover:underline"
                    title="Click to copy contract address">
                    CA: {ca}
                </span>
            </footer>
            {notification && (
                <div className="fixed bottom-20 right-4 bg-white text-black px-4 py-2 rounded flex items-center gap-2">
                    <FaCheck />
                    Contract address copied
                </div>
            )}
        </div>
    );
}
