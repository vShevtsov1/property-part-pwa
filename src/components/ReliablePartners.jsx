import "../styles/Components/ReliablePartners.scss"
import companies from "../assets/freezone/companies.svg";
import document from "../assets/freezone/document.svg";
import headset from "../assets/freezone/headset.svg";
import legal from "../assets/freezone/legal.svg";
import over from "../assets/freezone/over.svg";
import world from "../assets/freezone/world.svg";
import { useTranslation } from "react-i18next";

function ReliablePartners() {
    const { t } = useTranslation();
    const Block = ({ imageSrc, description1, description2, }) => (
        <div className="block">
            <img src={imageSrc} alt="" />
            <div className="descr">
                <div>{description1}</div>
                <div>{description2}</div>
            </div>
        </div>
    );

    return (
        <div className="reliable-partner">
            <div className="title">
                {t("name77")}
            </div>
            <div className="blocks-container">
                <div className="main-block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 6H21C26.6569 6 29.4853 6 31.2426 7.75736C33 9.51472 33 12.3431 33 18C33 23.6569 33 26.4853 31.2426 28.2426C29.4853 30 26.6569 30 21 30H15C9.34315 30 6.51472 30 4.75736 28.2426C3 26.4853 3 23.6569 3 18C3 12.3431 3 9.51472 4.75736 7.75736C6.51472 6 9.34315 6 15 6ZM19.875 13.5C19.875 12.8787 20.3787 12.375 21 12.375H28.5C29.1213 12.375 29.625 12.8787 29.625 13.5C29.625 14.1213 29.1213 14.625 28.5 14.625H21C20.3787 14.625 19.875 14.1213 19.875 13.5ZM21.375 18C21.375 17.3787 21.8787 16.875 22.5 16.875H28.5C29.1213 16.875 29.625 17.3787 29.625 18C29.625 18.6213 29.1213 19.125 28.5 19.125H22.5C21.8787 19.125 21.375 18.6213 21.375 18ZM22.875 22.5C22.875 21.8787 23.3787 21.375 24 21.375H28.5C29.1213 21.375 29.625 21.8787 29.625 22.5C29.625 23.1213 29.1213 23.625 28.5 23.625H24C23.3787 23.625 22.875 23.1213 22.875 22.5ZM16.5 13.5C16.5 15.1569 15.1569 16.5 13.5 16.5C11.8431 16.5 10.5 15.1569 10.5 13.5C10.5 11.8431 11.8431 10.5 13.5 10.5C15.1569 10.5 16.5 11.8431 16.5 13.5ZM13.5 25.5C19.5 25.5 19.5 24.1569 19.5 22.5C19.5 20.8431 16.8137 19.5 13.5 19.5C10.1863 19.5 7.5 20.8431 7.5 22.5C7.5 24.1569 7.5 25.5 13.5 25.5Z" fill="white" />
                    </svg>
                    <div className="descr">
                        <div>{t("name77")}</div>
                    </div>
                </div>
                <Block
                    imageSrc={companies}
                    description1={t("20companies")}
                    description2={t("openedAndRegisteredMonthly")}
                />
                <Block
                    imageSrc={companies}
                    description1={t("over90percent")}
                    description2={t("largestFreeZonesAccredited")}
                />
                <Block
                    imageSrc={companies}
                    description1={t("companySupport")}
                    description2={t("moreThan100ClientsTrustUs")}
                />
            </div>
        </div>
    )
}

export default ReliablePartners
