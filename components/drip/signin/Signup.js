import React, { useRef, useState } from 'react';
import copyToClipboard from '../../../utils/function/copyToClipBoard';

const Signup = () => {
    const [CopySuccess, setCopySuccess] = useState(false);
    const pageEL = useRef(null);

    return (
        <div className="flex justify-center items-center min-h-screen"
            ref={pageEL}
            onClick={() => copyToClipboard(pageEL, setCopySuccess)}>

            <p className="pb-4 font-bold absolute top-4">
                {CopySuccess && (
                    <span className="inline-flex gap-1 text-sm font-thin">
                        Copied! <i className="ri-chat-smile-2-line animate-bounce"></i>
                    </span>
                )}
            </p>

            <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Sign Up
                </button>

                <p className="text-gray-700 pt-10 text-center">
                    Already have an account?{" "}
                    <a
                        href="#"
                        className="text-red-400 hover:underline"
                    >
                        Sign in
                    </a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
