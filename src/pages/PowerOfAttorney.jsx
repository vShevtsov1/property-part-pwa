import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/PowerOfAttorney.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Help from "../components/Help"
import ConsulatingBaner from "../components/ConsulatingBaner"

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

function PowerOfAttorney() {
    const { t } = useTranslation();
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

    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState({
        tittleText: "Our expert will reach you out",
        buttonText: "Get a free consultation"
    });

    const closeModal = () => {
        setShowModal(false);
    };
    return (
        <div className="attorney-wrapper">
            <Header></Header>
            <div className="attorney-container">
                <div className="attorney-baner-guide">
                    <ConsulatingBaner
                        img={accountaingBaner}
                        title="Power of attorney in Dubai court"
                        description={['Fast and convenient. Remote issue of a notarial power of attorney']}
                        setShowModal="showModal"
                    />
                </div>

                <div className="registering">
                    <div>Registering a business in the UAE is easy</div>
                    <div>But we clearly recognize that the ultimate goal of our clients is not the company itself, it is only a tool. To realize specific business objectives is their main vector: from global trade to registration of virtual or intellectual assets. We help solve these problems</div>
                </div>

                <div className="question">
                    <div className="content">
                        <div>?</div>

                        <div className="description">
                            <div>We work directly with Dubai Court public Notaries</div>
                            <div>The state—issued online power of attorney is a PDF file with a QR code. They operate throughout the UAE.</div>
                        </div>
                    </div>
                </div>

                <div className="process">
                    <div className="title">
                        <div>The process takes 1 working day</div>
                        <div>Our managers will accompany you throughout the entire process of obtaining a power of attorney</div>
                    </div>

                    <div className="process-block-container">
                        <div className="process-block-title">
                            Why us
                        </div>
                        <div className="process-block">
                            <div>1</div>
                            <div className="description">
                                <div>Preparation</div>
                                <div>You describe which power of attorney you need</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>2</div>
                            <div className="description">
                                <div>Power of Attorney</div>
                                <div>Drafting and Approval</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>3</div>
                            <div className="description">
                                <div>Translation into Arabic</div>
                                <div>You describe which power of attorney you need</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>4</div>
                            <div className="description">
                                <div>Video call with notary</div>
                                <div>You have the power of attorney on your email</div>
                            </div>
                        </div>
                        <div className="process-block">
                            <div>5</div>
                            <div className="description">
                                <div>Preparation</div>
                                <div>You describe which power of attorney you need</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="required">
                    <div className="cards">
                        <div className="card">
                            <div>You will be required to:</div>
                            <div>From 1800 AED</div>
                        </div>
                        <div className="card-description">
                            <div>Copies of the passport/id of all persons listed in the power of attorney</div>
                            <div>Active phone and mail</div>
                            <div>Record a video message</div>
                            <div>Agree on the text of the power of attorney</div>
                            <div>Set aside time for a video call with a notary</div>
                        </div>
                    </div>
                </div>

                <div className="important">
                    <div className="title">Important</div>

                    <div className="cards">
                        <div className="card">
                            <div>Carefully monitor the data provided</div>
                            <div>Specify the correct email address (during video calls, you will need to dictate the OTP code that will be sent to the mail)</div>
                        </div>
                        <div className="card">
                            <div>Punctual for the scheduled call</div>
                            <div>If you do not get in touch at the time appointed for the call, this will entail the burning of the fee.</div>
                        </div>
                    </div>
                </div>

                <div className="help-block">
                    <Help />
                </div>
            </div>
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
            <Footer></Footer>
        </div>
    )
}

export default PowerOfAttorney
