import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import Disclaimer from './components/Disclaimer';
import { FaXTwitter } from 'react-icons/fa6';
import NotFound from './components/NotFound';
import { FaTelegram } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Dapp from './components/Dapp';
import React from 'react';

import './index.css';

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
        <div className="bg-black text-white min-h-screen overflow-hidden flex flex-col">
            <div className="star"></div>
            <div className="star"></div>
            <div className="star"></div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/dapp" element={<Dapp />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
            <footer className="border-t border-t-white mt-auto flex items-center py-4 px-8 gap-4 justify-between">
                <div className="flex items-center gap-2">
                    <a href="#" target="_blank" className="text-2xl">
                        <FaTelegram />
                    </a>
                    <a href="#" target="_blank" className="text-2xl">
                        <FaXTwitter />
                    </a>
                </div>
                <span>CA: xxxxxxxxxxxxxxxxxxxxxxx</span>
            </footer>
        </div>
    </React.StrictMode>
);

function Header() {
    const isHomePage = useLocation().pathname === '/';

    return (
        <header className="border-b border-b-white flex gap-2 items-center justify-between">
            <h1>Passive Spectators</h1>
            <div className="flex gap-2 items-center">
                <a href="/" className={`border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 flex items-center gap-1 rounded-sm ${isHomePage ? 'bg-white text-black' : ''}`}>
                    <HiHome />
                    Home
                </a>
                <w3m-button />
            </div>
        </header>
    );
}
