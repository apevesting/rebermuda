import React, { useState } from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { Container } from '@nextui-org/react'
import Script from 'next/script'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const KYC = () => {
    const [startDate, setStartDate] = useState(new Date());

    return(
        <>
            <Head>
                <title>re/Bermuda - KYC</title>
                <meta name="description" content="Bermuda real estate consulting." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="robots" content="noindex"/>
                <meta name="googlebot" content="noindex"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Script src="https://unpkg.com/flowbite@1.6.0/dist/datepicker.js"/>

            <Container xs>
                <div className="my-10">
                    <div className="grid grid-cols-1 auto-rows-auto gap-2">
                        <p id="fancyTitle" className="fancyTitle text-xl font-extrabold">re/Bermuda</p>
                        <p className="text-xs font-semibold">Customer Due Dilligence (KYC) Form</p>
                        <form className="grid gap-4 mb-6 md:grid-cols-2 my-5">
                            <div>
                                <label htmlFor="first_name" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
                            </div>     
                            <div>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                            <div>
                                <label htmlFor="countryOfBirth" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Country of Birth</label>
                                <input type="text" id="countryOfBirth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Country" required/>
                            </div>
                            <div>
                                <label htmlFor="nationality" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Nationality</label>
                                <input type="text" id="nationality" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nationality" required/>
                            </div>
                            <div>
                                <label htmlFor="occupation" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Occupation</label>
                                <input type="text" id="occupation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Occupation" required/>
                            </div>
                            <div>
                                <label htmlFor="employer" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Employer</label>
                                <input type="text" id="employer" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Employer" required/>
                            </div>
                            <div>
                                <label htmlFor="beneficialOwner" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Beneficial Owner (if not customer above)</label>
                                <input type="text" id="beneficialOwner" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Beneficial Owner"/>
                            </div>
                            <div>
                                <label htmlFor="sourceOfFunds" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Source of Funds</label>
                                <input type="text" id="sourceOfFunds" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Source of Funds" required/>
                            </div>
                            <div>
                                <label htmlFor="transactionFundsOrigin" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Transaction Funds Origin</label>
                                <input type="text" id="transactionFundsOrigin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Transaction Funds Origin" required/>
                            </div>
                            <div>
                                <label htmlFor="formPayment" className="block mb-1 text-xs font-medium text-gray-900 dark:text-white">Form of Payment</label>
                                <input type="text" id="formPayment" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Form of Payment" required/>
                            </div>

                            <hr/>

                            <div></div>

                        </form>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default KYC