import React from 'react'

function HowItWorksProcess(props) {
    return (
        <>
                    
                    <div className="m-auto flex flex-col justify-center items-center">
                    <div className="h-16 w-16 rounded-full bg-custom-cirle1 flex flex-none justify-center items-center"><img src={props.image} alt="" className="h-5"/></div>
                        <p className="font-semibold text-custom-col4 text-xl my-8">{props.title}</p>
                        <p>Learn more about the company Learn more about the company Learn more about the company</p>
                    </div>
        </>
    )
}
export default HowItWorksProcess;