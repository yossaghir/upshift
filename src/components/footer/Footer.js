import React, { Component } from 'react'
import FooterNavComponent from './FooterNavComponent';

class Footer extends Component {
    render() {
        let nav1 = [
            { name: 'Personal' },
            { name: 'Business' },
            { name: 'Pricing' },
            { name: 'Log In' },
        ];

        let nav2 = [
            { name: 'About' },
            { name: 'Blog' },
            { name: 'Careers' },
            { name: 'Contact US' },
        ];

        let nav3 = [
            { name: 'FAQ' },
            { name: 'Insurance' },
            { name: 'Agreement' },
        ];
        return (
            <>
                <div className="flex flex-wrap items-stretch m-auto py-5 justify-center text-custom-col2">
                    <FooterNavComponent items={nav1} item_name="PRODUCT" />
                    <FooterNavComponent items={nav2} item_name="COMPANY" />
                    <FooterNavComponent items={nav3} item_name="HELP CENTER" />
                    <div className="flex flex-col">
                        <p className="py-3 text-xs"><strong>STAY IN TOUCH</strong></p>
                        <p className="py-3 text-sm">Join our Mailing list to get updates. We Respect your privacy.</p>
                        <form className="w-full max-w-sm">
                            <div className="flex items-center bg-custom-col3 rounded-full py-4 px-4 mt-6">
                                <input className="leading-tight bg-custom-col3 rounded-full w-full px-4" type="email" name="email" placeholder="Email address..." />
                                <button className="bg-custom-col2 flex-shrink-0 rounded-full" type="submit">
                                    <img src="/img/icons/Telegram.png" alt="Join" className="w-8 h-8 p-2" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex flex-wrap content-start px-5 py-6 justify-center gap-8 text-custom-col2">
                    <div>
                        <img className="h-8" src="/img/upshift-logo.png" alt="Upshift" />
                    </div>
                    <div className="mx-20"><p>Copyright &#169; Upshift, Inc.</p></div>
                    <div className="flex flex-wrap"><div className="mx-3 h-6 w-6 rounded-full bg-custom-cirle1 flex flex-none justify-center items-center"><img src="/img/icons/fb.png" alt="" className="h-3"/></div>
                    <div className="h-6 w-6 rounded-full bg-custom-cirle1 flex flex-none justify-center items-center"><img src="/img/icons/twitter.png" alt="" className="h-3"/></div></div>
                    <div></div>
                </div>
            </>
        )
    }
}
export default Footer;