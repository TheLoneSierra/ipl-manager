import React from "react";

const Signup = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side Image */}
            <div className="md:w-1/2 w-full h-20 md:h-screen">
                <img
                    src="someimage.jpg"
                    alt="IPL Players"
                    className="w-full h-full object-cover md:object-cover object-top"
                />
            </div>

            {/* Right Side Form */}
            <div className="md:w-1/2 w-full bg-gray-900 text-white flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

                    <form className="space-y-4">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-2 rounded  border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>

                        <div>
                            <input
                                type="email"
                                placeholder="Email"
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

                        <div>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 rounded border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors duration-300 font-semibold"
                        >
                            Signup
                        </button>

                        <button
                            type="button"
                            className="w-full py-2 rounded-full bg-white text-gray-900 hover:bg-gray-200 transition-colors duration-300 font-semibold"
                        >
                            Signup with Google
                        </button>

                        <div className="text-center text-sm">
                            Already have an account?{" "}
                            <a href="/" className="text-red-400 hover:text-red-600">
                                Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
