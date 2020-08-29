import React from 'react'

function Pricing(props) {
    return (
        <div className="border border-custom-col3 m-8 max-w-xs text-custom-col2 text-sm pt-8 hover:shadow-2xl hover:border-t-4"> 
            <div className="text-center">
                <h1 className="text-3xl text-custom-col4 font-semibold">{props.title}</h1>
                <h4>{props.subtitle}</h4>
                <p className="mt-4"><span className="text-3xl font-semibold">${props.price}</span>/month</p>
            </div>
            <div className="m-auto w-8/12 h-1 border-b border-custom-col3 my-8"></div>
            <div className="text-center px-12">
                <p>{props.paragraph1}</p>
                <p className="mb-12">{props.paragraph2}</p>
                <a href="/#" className="my-8 text-xs text-custom-col1 bg-custom-col2 py-4 px-8 rounded-full hover:bg-custom-col3 hover:text-custom-col2">Start with {props.title}</a>
                <p className="my-12"><a href="/#">View plan details &rarr;</a></p>
            </div>
        </div>
    )
}

export default Pricing;