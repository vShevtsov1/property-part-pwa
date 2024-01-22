
import "../styles/projectSimilar.scss"
import MaxLengthText from "./MaxLengthText.jsx";
import DynamicTruncatedText from "./DynamicTruncatedText.jsx";
const ProjectSimilar = ({project}) => {
    function formatNumberWithCommas(value) {
        value = (Number(value)/3.16).toFixed(0).toString()
        return value.replace(/,/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <div className="project-similar" style={{ height: '100%' }} onClick={() => window.location.href = `/project/${project._id}`}>
            <div className="image-container" style={{
                background: `linear-gradient(0deg, #000 -58.46%, rgba(0, 0, 0, 0.00) 96.51%), url(${project.imageSrcMain}) lightgray 50% / cover no-repeat`,
            }}>
                <div className="information">
                    <div className="price-per-meter">
                        <div
                            className="price">$ {(Number(project.priceFrom) / 3.16 / Number(project.sizeFrom)).toFixed(0)} sq.ft
                        </div>
                    </div>
                    <div className="price-name">
                        <div className="name-bedrooms">

                            <div className="name">
                                <DynamicTruncatedText text={project.projectName} customBreakpoints={{
                                    1920: 20,
                                    1620: 12,
                                    1420: 20,
                                }}/>
                            </div>
                            <div className="bedrooms">
                                <DynamicTruncatedText text={project.developer} customBreakpoints={{
                                    1920: 20,
                                }}/>
                            </div>
                        </div>
                        <div className="price-from">
                            <div className="from">from</div>
                            <div className="price">$ {formatNumberWithCommas(project.priceFrom)}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ProjectSimilar