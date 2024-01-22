import { useTranslation } from "react-i18next";
import "../styles/Components/table.scss"

function Table() {
    const { t } = useTranslation();
    return (
        <div className="table">
            <div className="table-row">
                <div className="first-table-row">{t("name1.1")}</div>
                <div className="second-table-row">{t("name2")}</div>
                <div className="third-table-row">{t("name4")}</div>
            </div>

            <div className="table-row">
                <div className="first-table column-start">
                    <div>{t("name1")}</div>
                </div>
                <div className="second-table column-def">
                    <div>{t("100 % ownership of foreign")}</div>
                    <div>{t("citizens or legal")}</div>
                    <div>{t("persons")}</div>
                </div>
                <div className="third-table column-def">
                    <div>{t("100 % ownership of foreign citizens")}</div>
                    <div>{t("or legal entities. Maybe")}</div>
                    <div>{t("Adding a local agent to simplify procedures")}</div>
                </div>
            </div>

            <div className="table-row">
                <div className="first-table column-start">
                    <div>{t("name6")}</div>
                </div>
                <div className="second-table column-def">
                    <div>{t("Activities outside the UAE:")}</div>
                    <div>{t("There are no restrictions within the UAE:")}</div>
                    <div>{t("There are restrictions")}</div>
                </div>
                <div className="third-table column-def">
                    <div>{t("Activities outside the UAE:")}</div>
                    <div>{t("There are no restrictions within the UAE: there are no restrictions")}</div>
                </div>
            </div>

            <div className="table-row">
                <div className="first-table column-start">
                    <div>{t("name6")}</div>
                </div>
                <div className="second-table column-def">
                    <div>{t("9 % income tax starting with")}</div>
                    <div>{t("2023r.")}</div>
                    <div>{t("Annual reporting")}</div>
                </div>
                <div className="third-table column-def">
                    <div>{t("9 % income tax starting from")}</div>
                    <div>{t("2023. 5 % VAT (VAT)")}</div>
                    <div>{t("Annual reporting")}</div>
                </div>
            </div>

            <div className="table-row">
                <div className="first-table column-start">
                    <div>{t("name6")}</div>
                </div>
                <div className="second-table column-def">
                    <div>{t("The cost of employee")}</div>
                    <div>{t("registration is from $ 2.600 per 2 years")}</div>
                </div>
                <div className="third-table column-def">
                    <div>{t("The cost of employee")}</div>
                    <div>{t("registration is from $ 2.600 by 2 years")}</div>
                </div>
            </div>

            <div className="table-row">
                <div className="first-table column-start">
                    <div>{t("name6")}</div>
                </div>
                <div className="second-table column-def">
                    <div>{t("The regulatory body is Frizona")}</div>
                </div>
                <div className="third-table column-def">
                    <div>{t("the-regulatory.1")}</div>
                    <div>{t("the-regulatory.2")}</div>
                    <div>{t("the-regulatory.3")}</div>
                </div>
            </div>

            <div className="table-row">
                <div className="first-table column-start">
                    <div>{t("name6")}</div>
                </div>
                <div className="second-table column-def">
                    <div>{t("Annually")}</div>
                </div>
                <div className="third-table column-def">
                    <div>{t("Annually")}</div>
                </div>
            </div>
        </div>
    )
}

export default Table
