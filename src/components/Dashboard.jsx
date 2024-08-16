import { RiLockPasswordFill } from 'react-icons/ri';
import React from 'react';

function Dashboard() {
    const [errorMessage, setErrorMessage] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className="flex flex-col items-center justify-center h-96 pt-32 text-center">
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    setErrorMessage('Password is incorrect');
                }}
                className="bg-white text-black p-8 rounded shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Enter Password</h2>
                <p className="text-sm mb-4">Note: Password is hidden in the game</p>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 text-lg border border-gray-300 rounded mb-4" placeholder="Enter your password" />
                {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}
                <button type="submit" className="w-full py-2 px-4 text-lg bg-black text-white rounded hover:bg-gray-800 transition-colors flex items-center gap-2">
                    <RiLockPasswordFill /> Enter Password
                </button>
            </form>
        </div>
    );
}

export default Dashboard;
