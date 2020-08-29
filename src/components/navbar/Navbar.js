import React from 'react'
function Navbar() {
    return (
        <>
            <div className="flex flex-wrap justify-between content-center items-end m-auto px-16 py-5 text-custom-col2">
                <div>
                    <figure>
                        <img className="h-8" src="/img/upshift-logo.png" alt="Upshift"/>
                    </figure>
                </div>
                <div>
                    <ul className="flex">
                        <li className="mx-5 flex items-center flex-wrap"><div className="h-3 w-3 rounded-full bg-custom-cirle1 mr-2"></div><a className="text-custom-col4" href="/#">Personal</a></li>
                        <li className="mx-5 flex items-center flex-wrap"><div className="h-3 w-3 rounded-full bg-custom-cirle2 mr-2"></div><a href="/#">Business</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex sm:flex-wrap">
                        <li className="mx-5"><a href="/#">About</a></li>
                        <li className="mx-5"><a href="/#">Pricing</a></li>
                        <li className="mx-5"><a href="/#">FAQ</a></li>
                        <li className="mx-5"><a href="/#">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="flex sm:flex-wrap">
                        <li className="mx-5"><a href="/#">Log In</a></li>
                        <li className="mx-5"><span className="bg-custom-col3 py-3 px-8 rounded-full hover:bg-custom-col2 hover:text-custom-col1"><a href="/#">Join Now</a></span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;