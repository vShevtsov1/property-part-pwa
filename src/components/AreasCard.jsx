import blueArrow from "../assets/Areas/blue-arrow.svg";
import "../styles/areaCard.scss"
import { Link } from "react-router-dom";

function AreasCard({ img, name, page }) {
    const imgStyle = {
        backgroundImage: ` linear-gradient(0deg, rgb(0, 0, 0) -58.46%, rgba(0, 0, 0, 0) 96.51%),  url(${img})`,
        height: '218px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };
    return (
        <div className="area-card">
            <Link to={`/area-page/${page}`}>
                <div className="img" style={imgStyle}>
                </div>

                <div className="description">
                    <div className="name">{name}</div>
                    <div className="button">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M16.172 11.4997L10.808 6.13568L12.222 4.72168L20 12.4997L12.222 20.2777L10.808 18.8637L16.172 13.4997H4V11.4997H16.172Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div >
    )
}

export default AreasCard
