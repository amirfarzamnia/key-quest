import { createWeb3Modal, defaultConfig, useWeb3Modal } from '@web3modal/ethers5/react';
import { Route, Routes, useLocation, BrowserRouter } from 'react-router-dom';
import Disclaimer from './components/Disclaimer';
import { MdDashboard } from 'react-icons/md';
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

function ConnectWalletButton() {
    const [account, setAccount] = React.useState(null);
    const { open } = useWeb3Modal();

    return (
        <button
            onClick={async () => {
                const provider = await open();
                const signer = provider.getSigner();
                const address = await signer.getAddress();

                setAccount(address);
            }}
            className="border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 py-2 flex items-center gap-1 rounded-sm">
            {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect Wallet'}
        </button>
    );
}

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
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const isDappPage = location.pathname === '/dapp';

    return (
        <header className="border-b border-b-white flex gap-2 items-center justify-between px-8">
            <h1 className="font-bold text-xl">Passive Spectators</h1>
            <div className="flex gap-2 items-center">
                <a href="/" className={`border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 flex items-center gap-1 rounded-sm ${isHomePage ? 'bg-white text-black' : ''}`}>
                    <HiHome />
                    Home
                </a>
                <a href="/dapp" className={`border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 flex items-center gap-1 rounded-sm ${isDappPage ? 'bg-white text-black' : ''}`}>
                    <MdDashboard />
                    Dapp
                </a>
                <ConnectWalletButton />
            </div>
        </header>
    );
}
