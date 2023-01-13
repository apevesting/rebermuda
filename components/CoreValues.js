import React from 'react'
import { Container } from '@nextui-org/react'

const CoreValues = () => {
    return (
        <Container md>
            <div className="flex justify-center my-20">
                <div className="grid grid-cols-1 auto-rows-auto gap-16">
                    {/* PROFESSIONAL SERVICE */}
                    <div className="md:h-96 items-center grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-16">
                        <img src="/professional-service.jpeg" alt="Dedicated Professional Service" className="h-full"/>
                        <div className="flex-col">
                            <h2 className="fancyTitle font-semibold text-xl md:text-4xl mb-2.5">Dedicated Professional Service</h2>
                            <p className="text-base">
                                We maintain integrity in everything we do. The team at re/Bermuda prides itself 
                                in providing a service that is professional, empathetic and responsive. 
                                We go above and beyond to ensure all our customers enjoy positive experiences throughout their engagement with the Company.
                            </p>
                        </div>
                    </div>
                    {/* RESULTS ORIENTED */}
                    <div className="md:h-96 items-center grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-8">
                        <div className="flex-col">
                            <h2 className="fancyTitle font-semibold text-xl md:text-4xl mb-2.5">Results Oriented</h2>
                            <p className="text-base">
                                The team at re/Bermuda is ambitious, career focused and goal oriented. 
                                We take the initiative when working with our customers to ensure they get the best possible results.
                            </p>
                        </div>
                        <img src="/results-oriented.jpeg" alt="Results Oriented" className="h-full"/>
                    </div>
                    {/* EMBRACE CHANGE */}
                    <div className="md:h-96 items-center grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-8">
                        <img src="/change.jpeg" alt="Embrace Change & Drive Innovation" className="h-full"/>
                        <div className="flex-col">
                            <h2 className="fancyTitle font-semibold text-xl md:text-4xl mb-2.5">Embrace Change & Drive Innovation.</h2>
                            <p className="text-base">
                                We expect change and embrace it. Our team sets new standards of excellence within the real estate industry 
                                and it is always developing and implementing new and innovative ways to provide superior service.
                            </p>
                        </div>
                    </div>
                    {/* QUALITY WORK */}
                    <div className="md:h-96 items-center grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-8">
                        <div className="flex-col">
                            <h2 className="fancyTitle font-semibold text-xl md:text-4xl mb-2.5">Pride through Quality Work</h2>
                            <p className="text-base">
                                We take pride in what we do and maintain consistency through our delivery of thorough and high quality work. 
                                We take responsibility for producing only the best, as we try always to exceed our own high standards.
                            </p>
                        </div>
                        <img src="/quality.jpeg" alt="Pride through Quality Work" className="h-full"/>
                    </div>
                     {/* PASSIONATE */}
                     <div className="md:h-96 items-center grid grid-cols-1 auto-rows-auto md:grid-cols-2 md:grid-rows-1 gap-8">
                        <img src="/passion.jpeg" alt="Passionate & Determined" className="h-full"/>
                        <div className="flex-col">
                            <h2 className="fancyTitle font-semibold text-xl md:text-4xl mb-2.5">Passionate & Determined</h2>
                            <p className="text-base">
                                We are passionate about our business and what we represent. 
                                We are determined to meet our goals and objectives because we love what we do. 
                                We maintain positive and optimistic attitudes so we can inspire others to do the same.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default CoreValues