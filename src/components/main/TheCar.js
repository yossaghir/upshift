import React from 'react'

export default function TheCar() {
    return (
        <div className=" bg-custom-col1 py-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 m-auto text-custom-col2 w-7/12 text-left text-sm">
                <div className="w-9/12">
                    <p className="text-xs font-bold text-custom-col2">05 ------ THE CAR</p>
                    <h1 className="text-3xl font-bold text-custom-col4 my-8">Always Drive an Identical Prius</h1>
                    <p className="break-all my-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam esse possimus accusamus repudiandae odit vero nulla aperiam at illum cumque necessitatibus soluta, modi dignissimos rerum non consectetur ea nostrum veniam suscipit. Incidunt veritatis inventore optio, reiciendis quae fugit omnis ad tenetur, culpa laboriosam ullam autem. Minima incidunt nostrum est suscipit.</p>
                </div>
                <div>
                    <img src="/img/cars/car2.jpg" alt="The Car" className="mb-8"/>
                    <div className="flex flex-none items-start gap-8">
                        <img src="/img/cars/car4.jpg" alt="The Car" />
                        <img src="/img/cars/car3.png" alt="The Car"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between items-center m-auto text-custom-col2 w-7/12 text-left text-sm mt-20">
                <div className="w-6/12">
                    <h1 className="text-3xl font-bold text-custom-col4 my-8">Join instantly with $0 down and get your car right now.</h1>
                </div>
                <div>
                    <a href="/#" className="text-custom-col1 bg-custom-col2 py-4 px-20 rounded-full hover:bg-custom-col3 hover:text-custom-col2 my-8">Get Started</a>
                </div>

            </div>
            <div className="m-auto py-8 w-7/12 h-1 border-b border-custom-col3"></div>
        </div>
    )
}
