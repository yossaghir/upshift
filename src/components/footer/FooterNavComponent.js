import React from 'react'

function FooterNavComponent(props) {
    return (
        <div className="flex flex-col items-start mx-16 text-sm px-4">
            <p className="py-3 text-xs"><strong>{props.item_name}</strong></p>
            <ul>
            {props.items.map(item => (
                <li className="py-3" key={item.name}>{item.name}</li>
            ))}
            </ul>
        </div>
    );
}
export default FooterNavComponent;