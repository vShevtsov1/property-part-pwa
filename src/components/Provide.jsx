import "../styles/Components/Provide.scss"
import { useTranslation } from "react-i18next";

import worldBh from "../assets/Registration/world-bh.png";
import groupBh from "../assets/Registration/group-bh.png";
import checkBh from "../assets/Registration/check-bh.png";
import boxBh from "../assets/Registration/box-bh.png";
import box from "../assets/freezone/box.svg";
import companies from "../assets/freezone/companies.svg";
import document from "../assets/freezone/document.svg";
import headset from "../assets/freezone/headset.svg";
import legal from "../assets/freezone/legal.svg";
import over from "../assets/freezone/over.svg";
import world from "../assets/freezone/world.svg";

function Provide() {
    const { t } = useTranslation();
    return (
        <div className="provide">
            <div className="title">
                <div>
                    {t("weProvide")}
                </div>
                <div>
                    {t("accessToDatabase")}
                </div>
            </div>
            <div className="blocks-container">
                <div className="block">
                    <img src={box} alt="" />
                    <img className="bh" src={boxBh} alt="" />
                    <div className="descr">
                        <div>{t("name84")}</div>
                        <div>{t("name85")}</div>
                    </div>
                </div>
                <div className="block">
                    <img src={world} alt="" />
                    <img className="bh" src={worldBh} alt="" />
                    <div className="descr">
                        <div>{t("name86")}</div>
                        <div>{t("name87")}</div>
                    </div>
                </div>
                <div className="block">
                    <img src={document} alt="" />
                    <img className="bh" src={groupBh} alt="" />
                    <div className="descr">
                        <div>{t("name88")}</div>
                        <div>{t("name89")}</div>
                    </div>
                </div>
                <div className="block">
                    <img src={legal} alt="" />
                    <img className="bh" src={checkBh} alt="" />
                    <div className="descr">
                        <div>{t("name90")}</div>
                        <div>{t("name91")}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Provide
