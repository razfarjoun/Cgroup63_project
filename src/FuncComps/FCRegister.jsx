import React, { useState } from 'react';

function RegistrationPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-light-blue-500">
                <div className="card w-full max-w-md bg-base-100 shadow-xl p-5">
                    <div className="card-body flex items-center justify-center">
                        <h2 style={{ fontFamily: "" }} className="card-title text-center text-dark-blue-500">Register</h2>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <label className="btn btn-circle swap swap-rotate" style={{ position: 'absolute', top: '30px', right: '20px' }}>

                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" />

                                {/* hamburger icon */}
                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                {/* close icon */}
                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                            <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', }} className="steps">
                                <div style={{ marginRight: '1rem' }} className="step step-primary">General</div>
                                <div style={{ marginRight: '1rem' }} className="step step-primary">Template<br></br>structure</div>
                                <div style={{ marginRight: '1rem' }} className="step "> Identification</div>
                            </div>
                            <br /><br />
                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                    <input type="text" className="grow" placeholder="Username" />
                                </label>
                            </div>
                            <br />
                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                                    <input type="text" className="grow" placeholder="Email" />
                                </label>
                            </div>
                            <br />
                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                    <input
                                        type="password"
                                        className="grow"
                                        value={password}
                                        placeholder='Password'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </label>
                            </div>
                            <br />
                            <div className="form-control">
                                <label className="input input-bordered flex items-center gap-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="w-4 h-4 opacity-70"
                                    >
                                        <path fillRule="evenodd"
                                            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <input
                                        type="password"
                                        className="grow "
                                        value={confirmPassword}
                                        placeholder='Confirm Password'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="phone">
                                </label>
                                <input type="tel" placeholder="Phone" id="phone" className="input input-bordered w-full " />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="shotFirst">
                                </label>
                                <select className="select select-bordered w-full ">
                                    <option disabled selected>Transcription language</option>
                                    <option>Hebrowe</option>
                                    <option>English</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => window.location.href = '/register2'} type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-primary">Continue</button>
                            </div>
                            <div className="form-control mt-6">
                                <button type="button" className="btn  btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent">Back</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegistrationPage;
