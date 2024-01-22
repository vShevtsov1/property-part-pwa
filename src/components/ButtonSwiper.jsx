import "../styles/Components/ButtonSwiper.scss"
import arrowButton from "../assets/arrow-left.png";

function ButtonSwiper({ title, title1, description1, title2, description2, buttonColor }) {
    return (
        <div className="button-swiper">
            <div className="button-swiper-content">
                <div className="title">
                    <div>{title}</div>
                    <div className="buttons-container">
                        <div className="button">
                            <img src={arrowButton} alt="" />
                        </div>
                        <div className="button rotate180deg">
                            <img src={arrowButton} alt="" />
                        </div>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card">
                        <div className="content">
                            <div>{title1}</div>
                            <div>{description1}</div>
                        </div>
                        <div className="button">
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div>{title2}</div>
                            <div>{description2}</div>
                        </div>
                        <div className="button" style={{ backgroundColor: buttonColor }} >
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ButtonSwiper
