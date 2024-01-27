import shareBox from "../assets/share-box-fill.png";
import infoFill from "../assets/information-fill.png";
import checkGold from "../assets/registration/check-gold.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import showHide from "../assets/show-hide-arrow.png";
import checkFill from "../assets/checkbox-circle-fill.png";
import GetConsult from "./GetConsult";
import RequestModal from "../components/RequestModal.jsx";
import '../styles/bigInfoCard.scss';
import alekseiShyianName from "../assets/teams/aleksei-shyian-min.jpg";
import alekseiShyian from "../assets/teams/qr/aleksei-shyian.png";
import tykhovaTatianaName from "../assets/teams/tykhova-tatiana-min.jpg";
import tykhovaTatiana from "../assets/teams/qr/tykhova-tatiana.png";
import kristinaSokolovskayaName from "../assets/teams/kristina-sokolovskaya-min.jpg";
import kristinaSokolovskaya from "../assets/teams/qr/kristina-sokolovskaya.png";
import pavelDyninName from "../assets/teams/pavel-dynin-min.jpg";
import propertyPartnersDynin from "../assets/teams/qr/property-partners-dynin.png";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../assets/teams/qr/anna-horshunova.png";
import allaGerassimovaName from "../assets/teams/alla-gerassimova-min.jpg";
import allaGerassimova from "../assets/teams/qr/alla-gerassimova.png";
import dmitriyKoltsovName from "../assets/teams/dmitriy-koltsov-min.jpg";
import dmitriyKoltsov from "../assets/teams/qr/dmitriy-koltsov.png";
import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../assets/teams/qr/qr-alex.svg";

function BigInfoCard({ name, activitiesBlocks, opportunitiesBlocks, price, capitalPrice, longText }) {
    const { t } = useTranslation();

    const [activeKind, setActiveKind] = useState(null);

    const handleTypeClick = (kind) => {
        setActiveKind((prevActiveKind) => (prevActiveKind === kind ? null : kind));
    };
    const [showModal, setShowModal] = useState(false);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 8));

    const team = [
        {
            "image": alexLogachevName, "name": "Alex Logachev", "position": "CEO", "qr": qrAlex,
            "social": {
                "telegram": "https://t.me/oleksandr_logachev",
                "instagram": "https://www.instagram.com/logachev_alexsandr?igshid=MzRlODBiNWFlZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971588395135&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/logachev.alexsandr?mibextid=LQQJ4d"
            }
        },
        {
            "image": alekseiShyianName, "name": "Aleksei Shyian", "position": "Business Developer", "qr": alekseiShyian,
            "social": {
                "instagram": "https://www.instagram.com/dubai_oleksii_shyian",
                "telegram": "https://t.me/brodubai"
            }
        },
        {
            "image": tykhovaTatianaName, "name": "Tykhova Tatiana", "position": "Real estate broker", "qr": tykhovaTatiana,
            "social": {
                "instagram": "https://www.instagram.com/taffeeta",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971522419898&text&type=phone_number&app_absent=0"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName, "name": "Kristina Sokolovskaya", "position": "CEO Kristal Business Experts", "qr": kristinaSokolovskaya,
            "social": {
                "telegram": "https://t.me/+971529568%20390",
            }
        },
        {
            "image": pavelDyninName, "name": "Pavel Dynin", "position": "Real estate broker", "qr": propertyPartnersDynin,
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://www.instagram.com/pavel.dynin?igshid=OGQ5Z%20Dc2ODk2ZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585622362&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ%204d"
            }
        },
        {
            "image": annaHorshunovaName, "name": "Anna Horshunova", "position": "Real estate broker", "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
        {
            "image": allaGerassimovaName, "name": "Alla Gerassimova", "position": "Marketer, content maker", "qr": allaGerassimova,
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://www.instagram.com/a11gep?igshid=NTc4MTIw+NjQ2YQ%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971555728933&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": dmitriyKoltsovName, "name": "Dmitriy Koltsov", "position": "Real estate broker", "qr": dmitriyKoltsov,
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://www.instagram.com/brokervdubae",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585589938&text&type=phone_number&app_absent=0",
            }
        },
    ]

    const closeModal = () => {
        setShowModal(false);
    };

    const InfoTemp = ({ text }) => {
        return (
            <div className="info-temp">
                <img src={checkFill} alt="" />
                {text}
            </div>
        )
    }

    return (
        <div className="info-card">
            <div className="top-content">
                <div className="title">
                    <div className="name">
                        {name}
                        <img src={shareBox} alt="" />
                    </div>
                    <div className="cost">
                        <div>
                            {t("name50")} <span> from {price}</span>
                        </div>
                        <img src={infoFill} alt="" />
                    </div>
                </div>
                <div className="top-content-descr">
                    <div className="title-descr">{t("name65")}</div>
                    <div className="descr-temp-container">
                        {activitiesBlocks.map((block, index) => (
                            <InfoTemp key={index} text={block.text} />
                        ))}
                    </div>
                </div>
                <div className="top-content-descr">
                    <div className="title-descr">{t("name51.7")}</div>
                    <div className="descr-temp-container">
                        {opportunitiesBlocks.map((block, index) => (
                            <InfoTemp key={index} text={block.text} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottom-content">
                <div className="content">
                    <div className="paragraph">
                        <div>{t("name69")}</div>
                        <div className="text">{t("name53.1")} {capitalPrice} AED</div>
                    </div>
                    <div className="paragraph">
                        <div>{t("name54")}</div>
                        {longText.map((block, index) => (
                            <div key={index} className="text">
                                {block.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="show-hide " onClick={setShowModal}>
                    <img src={showHide} className="rotate90" alt="" />
                    {t("get-help")}
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
        </div>
    )
}

export default BigInfoCard
