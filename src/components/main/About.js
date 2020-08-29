import React from 'react'

function About() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 m-auto text-custom-col2 w-8/12 text-left text-sm my-24 items-end gap-8">
            <div className="">
                <div className="relative"><img src="/img/cars/car0.jpg" alt="About Us" className="pb-12 w-10/12 xl:w-9/12 lg:w-9/12" />
                    <div className="absolute bottom-0 right-0 bg-custom-col4 text-custom-col1 text-xs p-8 w-10/12 xl:w-9/12 lg:w-9/12">
                        <p className="px-2  border-l-2 border-custom-col2">"Since Becoming a monthly subscriber, i feel like i have my car back again.
                        it's like i own a car without the worries or costs of keeping it around all
                        the time."</p>
                        <div className="flex flex-wrap justify-between items-start p-4">
                            
                            <div className="">
                                <img src="/img/cars/car0.jpg" alt="SAM R." className="h-6 w-6 rounded-full bg-custom-cirle1"/>
                                <p className="font-semibold text-custom-col2">SAM R.</p>
                            </div>
                            <div className="inline">
                                <p className="font-semibold "> &#9734; &#9734; &#9734; &#9734; &#9734;</p>
                                <p className="font-semibold text-custom-col2"> 28 reviews at Yelp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" px-12">
                <p className="text-xs font-bold text-custom-col2">01 ------ ABOUT US</p>
                <h1 className="text-3xl font-bold text-custom-col4 my-8">Let's make cities better</h1>
                <p className="break-all">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam esse possimus accusamus repudiandae odit vero nulla aperiam at illum cumque necessitatibus soluta, modi dignissimos rerum non consectetur ea nostrum veniam suscipit. Incidunt veritatis inventore optio, reiciendis quae fugit omnis ad tenetur, culpa laboriosam ullam autem. Minima incidunt nostrum est suscipit.</p>
                <div className="w-10/12 h-1 border-b border-custom-col3 my-10"></div>
                <div className="flex flex-none">
                    <div className="h-12 w-12 rounded-full bg-custom-cirle1 mr-2 flex justify-center items-center text-custom-col2 text-4xl">&#11177;</div>
                    <div className="inline ml-4">
                        <p>Interested in our values?</p>
                        <p className="font-semibold text-custom-col4">Learn more about the company &rarr;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;