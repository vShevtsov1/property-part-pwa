import {Link} from "react-router-dom";
import '../styles/Components/AreaCard.scss'
import DynamicTruncatedText from "./DynamicTruncatedText.jsx";
import React from "react";

const AreaCard = ({name, description, price, image, area}) => {
    return (
        <Link to={`/${area}`}>
            <div className='areas-card'>
                <div className="header">
                    <div className="name-price">
                        <div>{name}</div>
                        <div>{price}</div>
                    </div>
                    <div className="description">
                        <DynamicTruncatedText text={description} customBreakpoints={
                        {
                            1920: 50,
                            1450: 70,
                            1720: 70,
                            1000: 30,
                            850: 20,
                            725: 30,
                            650: 20,
                            600: 60
                        }
                    } /><DynamicTruncatedText/>
                    </div>
                </div>

                <div className="map-img">
                    <img src={image} alt=""/>
                </div>
            </div>
        </Link>
    )
}

export default AreaCard