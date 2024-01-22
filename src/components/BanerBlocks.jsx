import '../styles/banerBlocks.scss'
import message from "../assets/Registration/message.png";
import user from "../assets/Registration/user.png";
import documentBh from "../assets/Registration/document.png";
import twoArrow from "../assets/Registration/two-arrow.png";
import docDef from "../assets/Registration/doc-def.png";
import statistic from "../assets/Registration/statistic.png";
import docPlus from "../assets/Registration/doc-plus.png";

function BanerBlocks({ guides }) {

    const BanerBlock = ({ number, icon, imageSrc, text }) => {
        return (
            <div className="guide-block">
                <div>
                    {number}
                    {icon}
                </div>
                {imageSrc}
                <div>{text}</div>
            </div>
        )
    }

    return (
        <div className="guide-section">
            <div className="guide-blocks">
                {guides.map((guide, index) => (
                    <BanerBlock
                        key={index}
                        number={guide.number}
                        icon={guide.icon}
                        imageSrc={guide.imageSrc}
                        text={guide.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default BanerBlocks

