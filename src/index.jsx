import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import NotFound from './components/NotFound';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
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
            <header className="border-b border-b-white">
                <w3m-button />
            </header>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
            <footer className="border-t border-t-white mt-auto"></footer>
        </div>
    </React.StrictMode>
);
