import { Navbar, Text, Button } from "@nextui-org/react";
import Link from 'next/link'


const Navigation = () => {
    return(
        <Navbar className="bg-transparent my-2.5" disableShadow>
            <Navbar.Brand>
                <Link id="fancyTitle" className="fancyTitle text-lg md:text-2xl font-extrabold hover:opacity-75" href="/">re/Bermuda</Link>
            </Navbar.Brand>

            <Navbar.Content>
                <Navbar.Link className="text-xs md:text-sm" href="/about">
                    <span className="text-xs md:text-sm">About</span>
                </Navbar.Link>
                <Navbar.Link className="px-6 py-2 border border-black hover:bg-black hover:text-white" color="inherit" href="mailto:info@rebermuda.com">
                    <span className="text-xs md:text-sm">Contact Us</span>
                </Navbar.Link>
            </Navbar.Content>
        </Navbar>
    )
}

export default Navigation