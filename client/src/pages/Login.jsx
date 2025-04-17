import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side Image */}
            <div className="md:w-1/2 w-full h-64 md:h-auto">
                <img
                    src="someimage.jpg"
                    alt="IPL Players"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Side Form */}
            <div className="md:w-1/2 w-full bg-gray-900 text-white flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">IPL Manager</h2>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full px-4 py-2 rounded  border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 rounded  border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>

                        <div className="flex justify-end text-sm">
                            <a href="#" className="text-gray-400 hover:text-white">
                                Forgot Password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300 font-semibold"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="w-full py-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold"
                        >
                            Login with Google
                        </button>

                        <div className="text-center text-sm">
                            New User?{" "}
                            <Link to="/signup" className="text-red-400 hover:text-red-600">Signup</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
