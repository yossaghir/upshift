import React from 'react'

function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap justify-center content-center items-end m-auto px-16 py-5 text-custom-col2">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a href="/#">
                            <img className="h-8" src="/img/upshift-logo.png" alt="Upshift" />
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                        id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item mx-5 flex items-center flex-wrap"><div className="h-3 w-3 rounded-full bg-custom-cirle1 mr-2"></div><a className="text-custom-col4" href="/#">Personal</a></li>
                            <li className="nav-item mx-5 flex items-center flex-wrap"><div className="h-3 w-3 rounded-full bg-custom-cirle2 mr-2"></div><a href="/#">Business</a></li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item mx-5"><a href="/#">About</a></li>
                            <li className="nav-item mx-5"><a href="/#">Pricing</a></li>
                            <li className="nav-item mx-5"><a href="/#">FAQ</a></li>
                            <li className="nav-item mx-5"><a href="/#">Contact Us</a></li>
                        </ul>
                        <ul className="flex flex-none lg:flex-row list-none leading-snug lg:ml-auto">
                            <li className="nav-item mx-5"><a href="/#">Log In</a></li>
                            <li className="nav-item mx-5"><span className="bg-custom-col3 py-3 px-8 rounded-full hover:bg-custom-col2 hover:text-custom-col1"><a href="/#">Join Now</a></span></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;