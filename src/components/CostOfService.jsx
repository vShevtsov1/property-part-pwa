import { useTranslation } from "react-i18next";
import "../styles/cost-service.scss"
import checkGold from "../assets/registration/check-gold.png";

function CostOfService() {
    const { t } = useTranslation();

    const CostTemp = ({ text }) => {
        return (
            <div className="cost-temp">
                <img src={checkGold} alt="" />
                {text}
            </div>
        )
    }

    const CostBlock = ({ title, costTempBlocks, priceDolar, priceAED }) => {
        return (
            <div className="cost-block">
                <div className="title">{title}</div>
                <div className="cost-temp-container">
                    {costTempBlocks.map((block, index) => (
                        <CostTemp key={index} text={block.text} />
                    ))}
                </div>
                <div className="price">
                    <div>From {priceDolar}</div>
                    <div>(AED {priceAED})</div>
                </div>
            </div>
        )
    }

    return (
        <div className="cost-service">
            <div className="cost-block-container">
                <CostBlock
                    title={t("Company setup")}
                    costTempBlocks={[
                        { text: t("Prior authorization") },
                        { text: t("Rent a virtual office") },
                        { text: t("Obtaining a license") },
                    ]}
                    priceDolar={t("$8,800")}
                    priceAED={t("32,000")}
                />
                <CostBlock
                    title={t("Company registration + Visa processing")}
                    costTempBlocks={[
                        { text: t("Prior authorization") },
                        { text: t("Rent a virtual office") },
                        { text: t("Obtaining a license") },
                        { text: t("Obtaining an immigration card / establishment card") },
                        { text: t("Obtaining a labor card") },
                        { text: t("Issuance of investor / partner visa") },
                    ]}
                    priceDolar={t("$8,800")}
                    priceAED={t("32,000")}
                />
                <CostBlock
                    title={t("Company registration + Visa processing + Bank account opening")}
                    costTempBlocks={[
                        { text: t("Prior authorization") },
                        { text: t("Renting a virtual office") },
                        { text: t("Obtaining a license") },
                        { text: t("Obtaining an immigration card / establishment card") },
                        { text: t("Obtaining a labor card") },
                        { text: t("Investor / partner visa issuance") },
                        { text: t("KYC walkthrough") },
                        { text: t("Opening an account with a UAE bank") },
                    ]}
                    priceDolar={t("12,500")}
                    priceAED={t("20,500")}
                />
            </div>
        </div>
    )
}

export default CostOfService
