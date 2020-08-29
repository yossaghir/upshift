import React, { Component } from 'react'

class Sponsor extends Component {
    render() {
        const {img, link_url} = this.props;

        if(img==="")
        {
            return (
                <div className="flex justify-center items-center text-custom-col2  text-4xl bg-custom-col1 py-5">
                    &#11167;
                </div>
            );
        }
        
        return (
            <div className="bg-white py-5">
                <figure>
                    <a href={link_url} target="_blank" rel="noopener noreferrer">
                        <img className="h-12" src={img} alt="Upshift"/>
                    </a>
                </figure>
            </div>
        )

    }
}
Sponsor.defaultProps = {
    img:"",
    link_url:"#"
}
export default Sponsor;