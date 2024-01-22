import "../styles/newConsultingBaner.scss"
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { useState } from "react";
import alexLogachevName from "../assets/teams/alex-logachev-min.jpg";
import qrAlex from "../assets/teams/qr/qr-alex.svg";
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
import RequestModal from "../components/RequestModal.jsx";
import { useTranslation } from "react-i18next";


function NewConsultBaner({ img, title, description }) {
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState({
        tittleText: "Our expert will reach you out",
        buttonText: "Get a free consultation"
    });
    const closeModal = () => {
        setShowModal(false);
    };

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
            "image": tykhovaTatianaName,
            "name": "Tykhova Tatiana",
            "position": "Real estate broker",
            "qr": tykhovaTatiana,
            "social": {
                "instagram": "https://www.instagram.com/taffeeta",
                "telegram": "https://t.me/+971522419898",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971522419898&text&type=phone_number&app_absent=0"
            }
        }
        ,
        {
            "image": kristinaSokolovskayaName,
            "name": "Kristina Sokolovskaya",
            "position": "CEO Kristal Business Experts",
            "qr": kristinaSokolovskaya,
            "social": {
                "telegram": "https://t.me/+971529568%20390",
            }
        },
        {
            "image": pavelDyninName,
            "name": "Pavel Dynin",
            "position": "Real estate broker",
            "qr": propertyPartnersDynin,
            "social": {
                "telegram": "https://t.me/pavel_dynin",
                "instagram": "https://www.instagram.com/pavel.dynin?igshid=OGQ5Z%20Dc2ODk2ZA%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585622362&text&type=phone_number&app_absent=0",
                "facebook": "https://www.facebook.com/csdus?mibextid=LQQJ%204d"
            }
        },
        {
            "image": annaHorshunovaName,
            "name": "Anna Horshunova",
            "position": "Real estate broker",
            "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
        {
            "image": allaGerassimovaName,
            "name": "Alla Gerassimova",
            "position": "Marketer, content maker",
            "qr": allaGerassimova,
            "social": {
                "telegram": "https://t.me/alla_gerassimova",
                "instagram": "https://www.instagram.com/a11gep?igshid=NTc4MTIw+NjQ2YQ%3D%3D",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971555728933&text&type=phone_number&app_absent=0",
            }
        },
        {
            "image": dmitriyKoltsovName,
            "name": "Dmitriy Koltsov",
            "position": "Real estate broker",
            "qr": dmitriyKoltsov,
            "social": {
                "telegram": "https://t.me/brokervdubae",
                "instagram": "https://www.instagram.com/brokervdubae",
                "whatsapp": "https://api.whatsapp.com/send/?phone=971585589938&text&type=phone_number&app_absent=0",
            }
        },
    ]

    const { t } = useTranslation();
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 8));

    return (
        <div className="new-baner">
            <div className="content-image">
                <div className="content">
                    <div className="title">
                        <div>{title}</div>
                        {description.map((text, index) => (
                            <div className="description" key={index}>{text}</div>
                        ))}
                    </div>

                    <div className="leave-a-request" onClick={setShowModal}>
                        {t("consultation_button")}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z" fill="white" />
                        </svg>
                    </div>
                </div>
                <div className="image">
                    <img src={img} alt="" />
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
        </div >
    )
}

export default NewConsultBaner
