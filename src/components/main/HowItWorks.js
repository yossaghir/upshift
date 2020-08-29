import React from 'react'
import HowItWorksProcess from './HowItWorksProcess'

function HowItWorks() {
    return (
        <div className="bg-custom-circle2 text-custom-col2 text-xs">
            <div className="flex flex-wrap justify-center items-center m-auto gap-8">
                <div className="w-10/12 xl:w-2/12 lg:w-2/12">
                    <p className="text-xs font-bold text-custom-col2">02 ------ HOW IT WORKS</p>
                    <h1 className="text-3xl font-bold text-custom-col4 my-8">Simple and handy rental process</h1>
                </div>
                <div className="w-10/12 xl:w-3/12 lg:w-3/12">
                    <p>Snow chains, surf board rack, key lock box, or dog car seat hammock available upon request</p>
                    <div className="w-10/12 h-1 border-b border-custom-col3 my-4"></div>
                    <div className="flex flex-none">
                        <div className="h-6 w-6 rounded-full bg-custom-cirle1 mr-2 flex justify-center items-center text-custom-col2 text-4xl">&#11177;</div>
                        <div className="inline ml-4">
                            <p className="font-semibold text-custom-col4">Check the available accessories &rarr;</p>
                        </div>
                    </div></div>
                <div className="w-10/12 xl:w-3/12 lg:w-3/12 ">
                    <p>Still got questions? We've probably covered them all in the Help Center.</p>
                    <div className="w-10/12 h-1 border-b border-custom-col3 my-4"></div>
                    <div className="flex flex-none">
                        <div className="h-6 w-6 rounded-full bg-custom-cirle1 mr-2 flex justify-center items-center text-custom-col2 text-4xl">&#11177;</div>
                        <div className="ml-4">
                            <p className="font-semibold text-custom-col4">Read our FAQ &rarr;</p>
                        </div>
                    </div></div>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 xl:m-12 xl:p-12 text-center gap-6">
                <div className="border-b border-custom-col1 p-12"><HowItWorksProcess title="Text us" image="/img/icons/text.png" /></div>
                <div className="border-b border-custom-col1 my-12 p-12"><HowItWorksProcess title="We deliver" image="/img/icons/deliver.png" /></div>
                <div className="border-b border-custom-col1 p-12"><HowItWorksProcess title="You drive" image="/img/icons/drive.png" /></div>
                <div className="border-b border-custom-col1 my-12 p-12"><HowItWorksProcess title="We pick it up" image="/img/icons/pick.png" /></div>
            </div>
        </div>
    )
}
export default HowItWorks;