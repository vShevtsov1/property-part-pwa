import '../styles/Pages/aboutAreas.scss'
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import areaMap from '../assets/Areas/map.png'
import statisticsGraph from '../assets/Areas/statisticsInfo.png'
import GetConsult from "../components/GetConsult.jsx";

const AboutAreas = () => {
    const AreaCard = () => {
        return (<div className='areas-card'>
                <div className="header">
                    <div className="name-price">
                        <div>Business Bay</div>
                        <div>$$$</div>
                    </div>
                    <div className="description">
                        Best for business style of life
                    </div>
                </div>

                <div className="map-img">
                    <img src={areaMap} alt=""/>
                </div>
            </div>
        )
    }

    const TransactionBlock = () => {
        return (<div className='transaction-block'>
                <div className="transaction-img">
                    <img src={areaMap} alt=""/>
                </div>

                <div className="content-profit">
                    <div className="transaction-content">
                        <div className="text">
                            <div>Al Wasl (City Walk)</div>

                            <div className='description'>
                                <div>AED 4.2M </div>
                                <div>Average property price</div>
                            </div>
                        </div>

                        <div className="variants">
                            <div className="variant active">1</div>
                            <div className="variant">2</div>
                            <div className="variant">3</div>
                            <div className="variant">4</div>
                        </div>
                    </div>

                    <div className="profit">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 14" fill="none">
                                <path
                                    d="M4.4 13C4.4 13.3314 4.66863 13.6 5 13.6C5.33137 13.6 5.6 13.3314 5.6 13L4.4 13ZM5.42426 0.575736C5.18995 0.341421 4.81005 0.341421 4.57574 0.575736L0.757359 4.39411C0.523045 4.62843 0.523045 5.00833 0.757359 5.24264C0.991674 5.47696 1.37157 5.47696 1.60589 5.24264L5 1.84853L8.39411 5.24264C8.62843 5.47696 9.00833 5.47696 9.24264 5.24264C9.47696 5.00833 9.47696 4.62843 9.24264 4.39411L5.42426 0.575736ZM5.6 13L5.6 1L4.4 1L4.4 13L5.6 13Z"
                                    fill="#82BB5F"/>
                            </svg>
                        </div>
                        37.8% vs 2023
                    </div>
                </div>
            </div>
        )
    }

    return (<div className='about-areas'>
            <Header></Header>
            <div className="about-areas-container">
                <div className="about-dubai">
                    <div className="content">
                        <div className="title">About Dubai areas: luxury, comfort and style</div>
                        <div className="description">
                            <div>Dubai, a glittering jewel in the United Arab Emirates, is renowned for its blend of
                                modern luxury and traditional allure. The city's diverse areas each tell a unique story
                                of opulence and grandeur, offering a living experience that caters to a range of
                                lifestyles and preferences. From the palm-shaped islands of Palm Jumeirah to the
                                bustling streets of Downtown Dubai, the city is a tapestry of exclusive residential
                                enclaves, commercial hubs, and serene family neighborhoods.
                            </div>
                            <div>The iconic Burj Khalifa and the dancing Dubai Fountain are just the tip of the iceberg,
                                with each area boasting its own landmarks and luxuries. The upscale marinas, sprawling
                                malls like The Dubai Mall, and lush parks underscore the city's commitment to providing
                                an unmatched urban experience.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="area-card-container">
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                </div>

                <div className="get-consult-box">
                    <GetConsult/>
                </div>

                <div className="area-card-container">
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                    <AreaCard/>
                </div>

                <div className="statistics">
                    <div className="text-content">
                        <div className="title">Top 5 performing areas in Dubai </div>
                        <div className="description">
                            <div>Dubai's property market is booming, especially in Jumeirah Village Circle (JVC), Business Bay, Dubai Marina, Dubai Hills, and Jumeirah Lakes Towers (JLT). JVC attracts those seeking affordable, family-friendly living, while Business Bay is a hub for professionals with its luxury residences and commercial spaces.
                            </div>
                            <div> Dubai Marina and JLT are favorites for their luxurious waterfront lifestyles, and Dubai Hills is gaining popularity for its serene, upscale environment.
                            </div>
                        </div>
                    </div>
                    <div className="statistics-info">
                        <img src={statisticsGraph} alt=""/>
                    </div>
                </div>

                <div className="transaction">
                    <div className="transaction-title">
                        <div>Area wise transaction summary 2023 </div>
                    </div>

                    <div className="transaction-blocks">
                        <TransactionBlock/>
                        <TransactionBlock/>
                        <TransactionBlock/>
                        <TransactionBlock/>
                    </div>
                    <div className="show-more">
                        Show more
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AboutAreas;
