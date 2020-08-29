import React from 'react'

function Slider() {
    return (
        <>
        <div className="bg-custom-col1">
            <div className="flex flex-wrap justify-between items-start px-16 text-custom-col4 py-32">
                <div className="xl:w-6/12">
                    <h1 className="text-5xl font-semibold my-0">Just drive.</h1>
                    <h1 className="text-5xl font-semibold my-0">We'll do the rest.</h1>
                    <p className="text-custom-col2 my-8">All-inclusive, usage-based car subscriptions.</p>
                    <form className="">
                        <div className="flex flex-none">
                            <input className="xl:w-8/12 mr-5 py-4 rounded-xl bg-custom-col1 border-b border-custom-col3" type="text" name="phone" placeholder="Phone number..."/>
                            <button className="text-custom-col1 bg-custom-col2 py-4 px-8 rounded-full hover:bg-custom-col3 hover:text-custom-col2" type="submit" name="submit">Get Started</button>
                        </div>
                    </form>
                </div>  
                <div className="xl:w-4/12">
                    <figure>
                        <img src="/img/cars/car00.png" alt="Upshift"/>
                    </figure>   
                </div>  
            </div>  
        </div>
        </>
    )
}
export default Slider;
