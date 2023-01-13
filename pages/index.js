import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { Container } from '@nextui-org/react'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>re/Bermuda - Premium Bermuda real estate consultancy</title>
        <meta name="description" content="Bermuda real estate consulting." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="overflow-x-hidden overflow-y-hidden md:min-w-screen md:min-h-screen">
        <Navigation />

        <Container md>
          <div className="md:mt-20 items-center grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-8">
            <div>
              <p className="fancyTitle font-extrabold text-4xl md:text-5xl leading-normal mb-5">Real estate consultancy</p>
              <div className="flex-col">
                <p className="text-xs md:text-sm leading-loose">
                  Real estate is still a relatively safe harbor, an asset class influenced by value creation and investor interest for the short or long-term.  
                  Now, the world is much smaller and the population today is on the move, as opportunities are not just localized. 
                  Let our real estate knowledge and expertise help you to grasp residential and commercial real estate opportunities and to grow your investment returns.
                </p>
                <p className="mt-5 text-xs md:text-sm leading-loose">
                  We work with property owners, investors, fund managers, REITs, family offices and service providers 
                  to add value and to develop growth strategies with a focus on purchasing.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-1 gap-8">
              <img src="/trees.jpeg" alt="Bermuda" className="w-full h-full"/>
              <img src="/sand.jpeg" alt="Bermuda" className="w-full h-full"/>
            </div>
          </div>
        </Container>

        <div className="absolute bottom-0 w-full flex justify-center">
          <Footer/>
        </div>
      </div>
    </>
  )
}
