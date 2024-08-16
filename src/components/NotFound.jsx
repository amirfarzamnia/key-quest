import { BsArrowLeftShort } from 'react-icons/bs';
import React from 'react';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-96 pt-32 text-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="my-6">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <a href="/" className="border border-white hover:bg-white hover:text-black duration-200 text-xl px-4 py-1 flex items-center gap-2 rounded-sm group">
                <BsArrowLeftShort className="group-hover:-translate-x-1 transform duration-200" />
                Back
            </a>
        </div>
    );
}

export default NotFound;
