import { useWeb3ModalAccount, useWeb3Modal } from '@web3modal/ethers5/react';
import React from 'react';

function Game() {
    const { isConnected } = useWeb3ModalAccount();
    const { open } = useWeb3Modal();

    if (!isConnected) {
        return (
            <div className="flex flex-col items-center justify-center h-96 pt-32 text-center">
                <button className="border border-white px-4 py-2 flex gap-2 items-center rounded hover:bg-white hover:text-black duration-200" onClick={() => open()}>
                    Connect Wallet to Continue
                </button>
            </div>
        );
    }

    return <iframe src="http://localhost:5173" />;
}

export default Game;
