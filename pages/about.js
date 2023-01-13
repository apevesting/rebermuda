import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { Container } from '@nextui-org/react'
import CoreValues from '../components/CoreValues'
import Footer from '../components/Footer'


const About = () => {
    return(
        <>
            <Head>
                <title>re/Bermuda - About re/Bermuda; what we do and why</title>
                <meta name="description" content="Premium Bermuda real estate consultancy." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navigation/>


            <section className="mb-20">
                <Container fluid>
                    <div className="flex items-center justify-center mb-5">
                        <h1 className="fancyTitle font-semibold text-2xl md:text-4xl leading-8">What we do.</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full md:w-1/2 grid grid-cols-1 grid-rows-2 gap-4">
                            <p className="text-sm md:text-base leading-loose">
                                re/Bermuda is a small, discreet real estate consulting and financial strategy boutique firm, 
                                specializing in providing support and advice to real estate investors, to connect through direct buying and selling opportunities using purchase, 
                                trade and financial options in Bermuda. We look for, seek and identify real estate and investment opportunities.
                            </p>
                            <p className="text-sm md:text-base leading-loose">
                                Our mission is to provide a cost-effective service based on the concept of value for money.
                                We are backed by a team of trained, experienced and motivated real estate practitioners. 
                                Our goal is to treat our clients with respect and confidentiality and to help them meet their real estate objectives,
                                whilst ensuring KYC and AML protocols are in place and effective to meet legislative requirements.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="my-20">
                <CoreValues/>
            </section>

            <section className="grid grid-cols-1 grid-rows-2 gap-4 items-center justify-center">
                <div className="my-25">
                    <div className="flex justify-center">
                        <p className="fancyTitle text-center w-full md:w-1/2 text-xl md:text-6xl leading-loose">Start your real estate journey today.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <a className="my-5 border border-black text-xs md:text-sm px-6 py-2 hover:bg-black hover:text-white" href="mailto:info@rebermuda.com">
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default About