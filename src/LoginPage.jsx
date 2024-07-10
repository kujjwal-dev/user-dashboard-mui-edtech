import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import OtpInput from "react-otp-input";
import { CgSpinner } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";
import App from './App';

const LoginPage = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [otpError, setOtpError] = useState("");

    useEffect(() => {
        async function me() {
            try {
                const response = await Axios.get("http://localhost:3001/api/v1/auth/me", {
                    withCredentials: true,
                });
                setUser(response?.data.success);
            } catch (error) {
                console.log(error);
            }
        }
        me();
    }, []);

    const validateEmail = () => {
        if (!email) {
            setEmailError("Email is required");
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError("Invalid email address");
            return false;
        }
        setEmailError("");
        return true;
    };

    const validateOtp = () => {
        if (otp.length !== 6) {
            setOtpError("OTP must be 6 digits");
            return false;
        }
        setOtpError("");
        return true;
    };

    async function sendEmail() {
        if (!validateEmail()) {
            return;
        }
        setLoading(true);
        try {
            const emailSend = await Axios.post(
                "http://localhost:3001/api/v1/auth/register",
                { email },
                { withCredentials: true }
            );
            toast.success(emailSend.data.message);
            setShowOTP(true);
        } catch (error) {
            toast.error(error.response.data.error);
        } finally {
            setLoading(false);
        }
    }

    async function verifyOTP() {
        if (!validateOtp()) {
            return;
        }
        setLoading(true);
        try {
            const otpSend = await Axios.post(
                "http://localhost:3001/api/v1/auth/verify",
                { otp, email },
                { withCredentials: true }
            );
            setUser(otpSend.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            {
                user ? (
                    <div>
                        <App />
                    </div>
                ) : (
                    <div>
                        {showOTP ? (
                            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                                <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg max-w-6xl p-5 md:p-0 items-center">
                                    <div className="md:w-1/2 px-8 md:px-16 py-8 md:py-16 flex flex-col justify-center items-center">
                                        <h2 className="font-bold text-4xl md:text-6xl text-[#002D74]">EDTech</h2>
                                        <p className="text-sm mt-4 text-[#002D74]">Enter Your OTP</p>

                                        <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
                                            <OtpInput
                                                value={otp}
                                                onChange={setOtp}
                                                numInputs={6}
                                                inputType="text"
                                                shouldAutoFocus
                                                containerStyle="otp-container"
                                                renderSeparator={<span>-</span>}
                                                renderInput={(props) => <input {...props} className="otp-input" />}
                                                autoFocus
                                            />
                                            {otpError && <span className="text-red-500">{otpError}</span>}
                                            <button
                                                className="bg-[#002D74] rounded-xl text-white py-2 mt-4 hover:scale-105 duration-300 flex gap-2 items-center justify-center"
                                                type="button"
                                                onClick={() => {
                                                    verifyOTP();
                                                    setLoading(true);
                                                }}
                                            >
                                                {loading && <CgSpinner size={20} className="animate-spin" />}
                                                <span>Verify OTP</span>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="md:w-1/2 hidden md:block">
                                        <img className="rounded-2xl w-full h-full object-cover" src="books.jpg" alt="Books" />
                                    </div>
                                </div>
                            </section>
                        ) : (
                            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                                <div className="bg-white flex flex-col md:flex-row rounded-2xl shadow-lg max-w-6xl w-full items-center">
                                    <div className="md:w-1/2 px-8 md:px-16 py-8 md:py-16 flex flex-col justify-center items-center ">
                                        <h2 className="font-bold text-4xl md:text-6xl text-[#002D74]">EDTech</h2>
                                        <p className="text-sm md:text-base mt-4 text-[#002D74]">Welcome to elearning</p>

                                        <form className="flex w-full flex-col gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
                                            <input
                                                className="p-4 rounded-xl w-[75%] ml-[50px]  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002D74]"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            {emailError && <span className="text-red-500">{emailError}</span>}
                                            <button
                                                className="bg-[#002D74] w-[25%] ml-[160px] rounded-xl text-white py-3 hover:scale-105 duration-300 flex gap-2 items-center justify-center"
                                                type="button"
                                                onClick={() => {
                                                    sendEmail();
                                                    setLoading(true);
                                                }}
                                            >
                                                {loading && <CgSpinner size={20} className="animate-spin" />}
                                                <span>Login</span>
                                            </button>
                                        </form>
                                    </div>

                                    <div className="md:w-1/2 hidden md:block">
                                        <img className="rounded-2xl w-full h-full object-cover" src="books.jpg" alt="Books" />
                                    </div>
                                </div>
                            </section>
                        )}
                    </div>
                )
            }
        </div>
    );
};

export default LoginPage;
