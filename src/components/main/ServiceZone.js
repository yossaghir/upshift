import React from 'react'

function ServiceZone() {
    return (
        <div className="flex justify-end items-end">
            <div className="relative pt-20">
                <div className="xl:absolute xl:top-0 xl:left-0 lg:absolute lg:top-0 lg:left-0 mx-16 w-3/12 hidden lg:inline">
                    <img src="/img/cars/car5.jpg" />
                </div>
                <div className="w-6/12 bg-custom-col4 m-auto py-24 px-16 xl:px-32">
                    <div className="text-xs text-custom-col2 border-b border-custom-col2 mb-8">
                        <p className="font-bold ">03 ------ SERVICE ZONE</p>
                        <h1 className="text-3xl font-semibold text-custom-col1 my-6">We've got SF covered</h1>
                        <p className="text-sm">We provide two delivery options for any trip:</p>
                        <p className="text-sm font-bold text-custom-col1 my-6 ">&#x2611; Concierge Service (8am - 8pm daily)</p>
                        <p className="m-6 break-all">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur nostrum fugit a reprehenderit!</p>
                        <p className="text-sm font-bold text-custom-col1 my-6">&#9745; Self service (24/7)</p>
                        <p className="m-6 break-all">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur nostrum fugit a reprehenderit!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium consectetur nostrum fugit a reprehenderit!
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-wrap text-xs items-center">
                            <div className="h-12 w-12 rounded-full bg-custom-cirle1 mr-2 flex justify-center items-center text-custom-col2  text-4xl">&#11177;</div>
                            <div className="inline ml-4">
                                <p className=" text-custom-col2">Outside of SF?</p>
                                <p className="font-semibold text-custom-col3">Tell us where to expand &rarr;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceZone;