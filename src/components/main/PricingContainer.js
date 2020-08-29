import React from 'react'
import Pricing from './Pricing'
function PricingContainer() {
    return (
        <div className="mx-auto my-16">
            <div className="container w-8/12 mx-auto text-center">
                <p className="text-xs font-bold text-custom-col2">04 ------ PRICING</p>
                <div className="m-auto w-8/12">
                    <h1 className="text-3xl font-bold text-custom-col4 my-8">Monthly plans for less than a parking space</h1>
                    <p className="text-sm text-custom-col2">Plans include concierge delivery and pickup,
                         cleaning and refueling service, full coverage insurance and maintenance-everything but gas and tolls.
                        Join instantly with $0 down and get your car right now.</p>
                </div>
            </div>
            <div className="m-auto bg-white flex flex-wrap justify-center my-16">
                
                <Pricing 
                    title="FlexPass" 
                    subtitle="Get 2 days/month" 
                    price="159" 
                    paragraph1="Not sure how much you drive?" 
                    paragraph2="Get A magic button anytime you need a car." 
                />
                <Pricing 
                    title="Getaway" 
                    subtitle="Get 4 days/month" 
                    price="219" 
                    paragraph1="Not sure how much you drive?" 
                    paragraph2="Get A magic button anytime you need a car." 
                />
                <Pricing 
                    title="Freedom" 
                    subtitle="Get 8 days/month" 
                    price="389" 
                    paragraph1="Not sure how much you drive?" 
                    paragraph2="Get A magic button anytime you need a car." 
                />
            </div>
        </div>
    )
}
export default PricingContainer;
