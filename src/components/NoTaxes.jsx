import "../styles/Components/NoTaxes.scss"
import { useTranslation } from "react-i18next";
import lineUp from "../assets/freezone/line-up.svg";


function NoTaxes() {
    const { t } = useTranslation();
    return (
        <div className="no-taxes">
            <div className="content">
                <div className="text">
                    <div className="title">
                        <div>{t("name92")}</div>
                        <div>{t("name93")}</div>
                    </div>
                    <div className="list">
                        <div className="list-elem">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.4453 2.75 16.5018 4.42242 17.0846 6.68694C17.1879 7.08808 17.5968 7.32957 17.9979 7.22633C18.3991 7.12308 18.6405 6.7142 18.5373 6.31306C17.788 3.4019 15.1463 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C4.13525 10.1379 3.40931 10.348 2.87868 10.8787C2 11.7574 2 13.1716 2 16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16C22 13.1716 22 11.7574 21.1213 10.8787C20.2426 10 18.8284 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8Z" fill="#C29773" />
                                </svg>
                            </div>
                            <div>{t("name97.2")}</div>
                        </div>
                        <div className="list-elem">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M2 9.63734C2 14.5003 6.01943 17.0917 8.96173 19.4111C10 20.2296 11 21.0002 12 21.0002C13 21.0002 14 20.2296 15.0383 19.4111C17.9806 17.0917 22 14.5003 22 9.63734C22 4.77441 16.4998 1.32571 12 6.00088C7.50016 1.32571 2 4.77441 2 9.63734Z" fill="#C29773" />
                                </svg>
                            </div>

                            <div>{t("name98.1")}</div>
                        </div>
                        <div className="list-elem">
                            <img src={lineUp} alt="" />
                            <div>{t("name99")}</div>
                        </div>
                    </div>
                </div>
                <div className="procent">
                    <div className="procent-elem">
                        <div className="descr">{t("name94.2")}</div>
                        <div className="line"></div>
                    </div>
                    <div className="procent-elem">
                        <div className="descr">{t("name95.2")}</div>
                        <div className="line"></div>
                    </div>
                    <div className="procent-elem">
                        <div className="descr">{t("name96.2")}</div>
                        <div className="line"></div>
                    </div>
                    <div className="procent-elem">
                        <div className="descr">{t("name100.2")}</div>
                        <div className="line"></div>
                    </div>
                    <div className="procent-elem">
                        <div className="descr">{t("name101.2")}</div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoTaxes
