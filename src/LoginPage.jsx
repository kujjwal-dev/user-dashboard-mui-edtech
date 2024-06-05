
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import OtpInput from "react-otp-input";
import { CgSpinner } from "react-icons/cg";
import toast, { Toaster } from "react-hot-toast";
import App from './App';



const LoginPage = () => {

    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false)
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");


    console.log("email", email);


    async function sendEmail() {
        try {
            

        } catch (error) {
           
        } finally {
           
        }
    }

    async function verifyOTP() {
        try {
            
               
      

        } catch (error) {
            

        } finally {
           
        }
    }

    console.log('user', user);

    async function me() {
        try {
         
        } catch (error) {
           
        }
    }



    return (
        <div>
            <Toaster toastOptions={{ duration: 4000 }} />
            {
                user ? (<div> <App/>   </div>)

                    : (
                        <div>
                            {showOTP ? <>
                                <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                                    <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                                        <div className="md:w-1/2 px-8 md:px-16">
                                            <h2 className="font-bold text-2xl text-[#002D74]">Edtech</h2>
                                            <p className="text-xs mt-4 text-[#002D74]">Enter Your OTP</p>

                                            <form action="" className="flex flex-col gap-4">
                                                <OtpInput
                                                    value={otp}
                                                    onChange={setOtp}
                                                    numInputs={6}
                                                    inputType="text"
                                                    shouldautofocus
                                                    containerStyle="opt-container"
                                                    renderSeparator={<span>-</span>}
                                                    renderInput={(props) => <input {...props} />}
                                                    autofocus
                                                    className="opt-container"
                                                />
                                                <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 flex gap-1 items-center justify-center "
                                                onClick={() => { 
                                                    verifyOTP();
                                                    setLoading(true);
                                                }}>
                                                    {loading && <CgSpinner size={20} className=" mt-1 animate-spin" />}

                                                    <span>Verify OTP</span>
                                                </button>
                                            </form>
                                        </div>

                                        <div className="md:block hidden w-1/2">
                                            <img className="rounded-2xl" src="books.jpg" />
                                        </div>
                                    </div>
                                </section>
                            </>
                                : <>
                                    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                                        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                                            <div className="md:w-1/2 px-8 md:px-16">
                                                <h2 className="font-bold text-2xl text-[#002D74]">Edtech</h2>
                                                <p className="text-xs mt-4 text-[#002D74]">Welcome to elearning</p>

                                                <form action="" className="flex flex-col gap-4">
                                                    <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                                    <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 flex gap-1 items-center justify-center"
                                                        onClick={() => {
                                                            sendEmail();
                                                            setLoading(true);
                                                        }}
                                                    >
                                                        {loading && <CgSpinner size={20} className=" mt-1 animate-spin" />}
                                                        <span> Login</span>
                                                    </button>
                                                </form>
                                            </div>

                                            <div className="md:block hidden w-1/2">
                                                <img className="rounded-2xl" src="books.jpg" />
                                            </div>
                                        </div>
                                    </section>
                                </>}

                        </div>
                    )
            }







        </div>

    )
}

export default LoginPage