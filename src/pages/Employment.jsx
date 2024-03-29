import "../styles/Pages/accounting.scss"
import accountaingBaner from "../assets/accounting-main.jpeg";
import visa from "../assets/visa.jpg"
import emiratesId from "../assets/emiratesId.jpg"
import labourCard from "../assets/labourCard.png"
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

import Header from "../components/Header"
import Footer from "../components/Footer"
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import ConsulatingBaner from "../components/ConsulatingBaner"
import BanerBlocks from "../components/BanerBlocks.jsx"
import NewConsultBaner from "../components/NewConsultBaner"

const Employment = () => {
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

    const guides = [
        {
            number: '01',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H13C13.4142 14.75 13.75 14.4142 13.75 14C13.75 13.5858 13.4142 13.25 13 13.25H8Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0723 -28.1777C18.75 -20.8553 18.75 -9.07023 18.75 14.5V39.5C18.75 63.0702 18.75 74.8553 26.0723 82.1777C33.3947 89.5 45.1798 89.5 68.75 89.5H81.25C104.82 89.5 116.605 89.5 123.928 82.1777C131.25 74.8553 131.25 63.0702 131.25 39.5V14.5C131.25 -9.07023 131.25 -20.8553 123.928 -28.1777C116.605 -35.5 104.82 -35.5 81.25 -35.5H68.75C45.1798 -35.5 33.3947 -35.5 26.0723 -28.1777ZM50 9.8125C47.4112 9.8125 45.3125 11.9112 45.3125 14.5C45.3125 17.0888 47.4112 19.1875 50 19.1875H100C102.589 19.1875 104.688 17.0888 104.688 14.5C104.688 11.9112 102.589 9.8125 100 9.8125H50ZM50 34.8125C47.4112 34.8125 45.3125 36.9112 45.3125 39.5C45.3125 42.0888 47.4112 44.1875 50 44.1875H81.25C83.8388 44.1875 85.9375 42.0888 85.9375 39.5C85.9375 36.9112 83.8388 34.8125 81.25 34.8125H50Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("employment-land-blocks.01"),
        },
        {
            number: '02',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="6" r="4" fill="#C29773" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 22C14.8501 22 14.0251 22 13.5126 21.4874C13 20.9749 13 20.1499 13 18.5C13 16.8501 13 16.0251 13.5126 15.5126C14.0251 15 14.8501 15 16.5 15C18.1499 15 18.9749 15 19.4874 15.5126C20 16.0251 20 16.8501 20 18.5C20 20.1499 20 20.9749 19.4874 21.4874C18.9749 22 18.1499 22 16.5 22ZM18.468 17.7458C18.6958 17.518 18.6958 17.1487 18.468 16.9209C18.2402 16.693 17.8709 16.693 17.6431 16.9209L15.7222 18.8417L15.3569 18.4764C15.1291 18.2486 14.7598 18.2486 14.532 18.4764C14.3042 18.7042 14.3042 19.0736 14.532 19.3014L15.3097 20.0791C15.5375 20.307 15.9069 20.307 16.1347 20.0791L18.468 17.7458Z" fill="#C29773" />
                    <path d="M15.4147 13.5074C14.4046 13.1842 13.24 13 12 13C8.13401 13 5 14.7909 5 17C5 19.1406 7.94244 20.8884 11.6421 20.9949C11.615 20.8686 11.594 20.7432 11.5775 20.6201C11.4998 20.0424 11.4999 19.3365 11.5 18.586V18.414C11.4999 17.6635 11.4998 16.9576 11.5775 16.3799C11.6639 15.737 11.8705 15.0333 12.4519 14.4519C13.0334 13.8705 13.737 13.6639 14.3799 13.5774C14.6919 13.5355 15.0412 13.5162 15.4147 13.5074Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path d="M100 -10.5C100 3.30712 88.8071 14.5 75 14.5C61.1929 14.5 50 3.30712 50 -10.5C50 -24.3071 61.1929 -35.5 75 -35.5C88.8071 -35.5 100 -24.3071 100 -10.5Z" fill="#C29773" />
                        <path d="M97.9887 36.3924C95.032 36.4282 92.2761 36.5361 89.8745 36.859C85.8565 37.3992 81.4585 38.6903 77.8245 42.3243C74.1905 45.9583 72.8994 50.3563 72.3591 54.3743C71.8737 57.9851 71.8744 62.3967 71.8751 67.0876V68.1622C71.8744 72.8532 71.8737 77.2648 72.3591 80.8755C72.7382 83.695 73.4871 86.7016 75.1557 89.5C75.1038 89.5 75.0519 89.5 75 89.5C25 89.5 25 76.908 25 61.375C25 45.842 47.3858 33.25 75 33.25C83.2886 33.25 91.1062 34.3845 97.9887 36.3924Z" fill="#C29773" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M103.125 89.5C92.813 89.5 87.657 89.5 84.4535 86.2965C81.25 83.093 81.25 77.937 81.25 67.625C81.25 57.313 81.25 52.157 84.4535 48.9535C87.657 45.75 92.813 45.75 103.125 45.75C113.437 45.75 118.593 45.75 121.796 48.9535C125 52.157 125 57.313 125 67.625C125 77.937 125 83.093 121.796 86.2965C118.593 89.5 113.437 89.5 103.125 89.5ZM115.425 62.9113C116.849 61.4875 116.849 59.1791 115.425 57.7553C114.001 56.3316 111.693 56.3316 110.269 57.7553L98.2639 69.7607L95.9808 67.4776C94.557 66.0538 92.2486 66.0538 90.8248 67.4776C89.401 68.9013 89.401 71.2098 90.8248 72.6335L95.6859 77.4947C97.1097 78.9184 99.4181 78.9184 100.842 77.4947L115.425 62.9113Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("employment-land-blocks.02"),
        },
        {
            number: '03',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M2 17.5737L2 6.42632C2 4.57895 3.60064 3.41122 4.90312 4.30838L10.9998 8.76844L10.9998 7.12303C10.9998 5.50658 12.467 4.48482 13.661 5.26983L21.0784 10.1468C22.3069 10.9545 22.3069 13.0455 21.0784 13.8532L13.661 18.7302C12.467 19.5152 10.9998 18.4934 10.9998 16.877V15.2316L4.90313 19.6916C3.60065 20.5888 2 19.4211 2 17.5737Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path d="M12.5 61.8355L12.5 -7.83552C12.5 -19.3816 22.504 -26.6799 30.6445 -21.0726L68.7486 6.80275L68.7486 -3.48108C68.7486 -13.5839 77.9189 -19.9699 85.381 -15.0635L131.74 15.4175C139.418 20.4658 139.418 33.5342 131.74 38.5825L85.3811 69.0635C77.9189 73.9699 68.7486 67.5839 68.7486 57.4811V47.1973L30.6445 75.0726C22.504 80.6799 12.5 73.3816 12.5 61.8355Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("employment-land-blocks.03"),
        },
        {
            number: '04',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5487 21.5277L10.7988 21.1053C11.1996 20.4282 11.3999 20.0897 11.7191 19.9009C12.0383 19.712 12.4547 19.6987 13.2874 19.6721C14.0682 19.6471 14.593 19.579 15.0417 19.3931C15.9864 19.0018 16.7369 18.2513 17.1282 17.3066C17.4217 16.5981 17.4217 15.6999 17.4217 13.9035V13.1324C17.4217 10.6083 17.4217 9.34622 16.8536 8.4191C16.5357 7.90033 16.0995 7.46416 15.5807 7.14626C14.6536 6.57813 13.3916 6.57812 10.8675 6.57812H8.55422C6.03013 6.57812 4.76808 6.57813 3.84097 7.14626C3.3222 7.46416 2.88604 7.90033 2.56813 8.4191C2 9.34622 2 10.6083 2 13.1324V13.9035C2 15.6999 2 16.5981 2.29348 17.3066C2.68478 18.2513 3.43533 19.0018 4.38002 19.3931C4.82871 19.579 5.35348 19.6471 6.13427 19.6721C6.96698 19.6987 7.38334 19.712 7.70253 19.9009C8.02172 20.0897 8.2221 20.4282 8.62285 21.1053L8.87291 21.5277C9.24547 22.1572 10.1762 22.1572 10.5487 21.5277ZM13.0843 14.289C13.6167 14.289 14.0482 13.8574 14.0482 13.3251C14.0482 12.7928 13.6167 12.3613 13.0843 12.3613C12.552 12.3613 12.1205 12.7928 12.1205 13.3251C12.1205 13.8574 12.552 14.289 13.0843 14.289ZM10.6747 13.3251C10.6747 13.8574 10.2432 14.289 9.71084 14.289C9.17852 14.289 8.74699 13.8574 8.74699 13.3251C8.74699 12.7928 9.17852 12.3613 9.71084 12.3613C10.2432 12.3613 10.6747 12.7928 10.6747 13.3251ZM6.33735 14.289C6.86967 14.289 7.30121 13.8574 7.30121 13.3251C7.30121 12.7928 6.86967 12.3613 6.33735 12.3613C5.80503 12.3613 5.37349 12.7928 5.37349 13.3251C5.37349 13.8574 5.80503 14.289 6.33735 14.289Z" fill="#C29773" />
                    <path d="M15.1696 2C16.3214 1.99999 17.2372 1.99999 17.9717 2.06982C18.7249 2.14143 19.3617 2.29154 19.9289 2.63915C20.5125 2.9968 21.0032 3.48748 21.3608 4.0711C21.7085 4.63836 21.8586 5.27514 21.9302 6.02829C22 6.76279 22 7.67871 22 8.83039V9.61699C22 10.4367 22 11.0886 21.9639 11.6173C21.927 12.1581 21.85 12.6226 21.6698 13.0575C21.2296 14.1202 20.3853 14.9646 19.3225 15.4048C19.2959 15.4158 19.2692 15.4265 19.2423 15.4367C19.114 15.4858 19.0042 15.5278 18.9077 15.5591C18.9217 15.0903 18.9217 14.5563 18.9217 13.9537V13.0614C18.9217 11.8598 18.9217 10.8532 18.8439 10.0349C18.7625 9.17817 18.5853 8.37421 18.1325 7.63536C17.6909 6.91475 17.0851 6.30889 16.3645 5.8673C15.6256 5.41453 14.8217 5.23733 13.9649 5.15588C13.1466 5.07807 12.14 5.07809 10.9384 5.07812H8.48326C7.66717 5.0781 6.94105 5.07809 6.30276 5.10245C6.3325 4.9994 6.37324 4.88128 6.42106 4.74264C6.5024 4.50682 6.60519 4.28381 6.73554 4.0711C7.09318 3.48748 7.58386 2.9968 8.16748 2.63915C8.73473 2.29154 9.37152 2.14143 10.1247 2.06982C10.8592 1.99999 11.775 1.99999 12.9268 2H15.1696Z" fill="#C29773" />
                </svg>
            ),
            imageSrc: (
                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                    <g opacity="0.1">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M65.9297 86.5484L67.4925 83.9079C69.9972 79.6763 71.2496 77.5604 73.2445 76.3804C75.2395 75.2003 77.8417 75.1171 83.0462 74.9506C87.9262 74.7945 91.2061 74.3687 94.0105 73.2071C99.9147 70.7615 104.606 66.0705 107.051 60.1662C108.886 55.7379 108.886 50.1242 108.886 38.8966V34.0773C108.886 18.3017 108.886 10.4139 105.335 4.61939C103.348 1.37708 100.622 -1.34896 97.3795 -3.33586C91.5851 -6.88671 83.6973 -6.88672 67.9217 -6.88672H53.4639C37.6883 -6.88672 29.8005 -6.88671 24.0061 -3.33586C20.7638 -1.34896 18.0377 1.37708 16.0508 4.61939C12.5 10.4139 12.5 18.3017 12.5 34.0773V38.8966C12.5 50.1242 12.5 55.7379 14.3342 60.1662C16.7799 66.0705 21.4708 70.7615 27.3751 73.2071C30.1795 74.3687 33.4592 74.7945 38.3392 74.9506C43.5436 75.1171 46.1459 75.2003 48.1408 76.3804C50.1358 77.5604 51.3881 79.6763 53.8928 83.9079L55.4557 86.5484C57.7842 90.4823 63.6011 90.4823 65.9297 86.5484ZM81.7771 41.3061C85.1041 41.3061 87.8012 38.609 87.8012 35.282C87.8012 31.9549 85.1041 29.2579 81.7771 29.2579C78.4501 29.2579 75.753 31.9549 75.753 35.282C75.753 38.609 78.4501 41.3061 81.7771 41.3061ZM66.7169 35.282C66.7169 38.609 64.0198 41.3061 60.6928 41.3061C57.3658 41.3061 54.6687 38.609 54.6687 35.282C54.6687 31.9549 57.3658 29.2579 60.6928 29.2579C64.0198 29.2579 66.7169 31.9549 66.7169 35.282ZM39.6084 41.3061C42.9355 41.3061 45.6325 38.609 45.6325 35.282C45.6325 31.9549 42.9355 29.2579 39.6084 29.2579C36.2814 29.2579 33.5843 31.9549 33.5843 35.282C33.5843 38.609 36.2814 41.3061 39.6084 41.3061Z" fill="#C29773" />
                        <path d="M94.8102 -35.5C102.008 -35.5 107.733 -35.5001 112.323 -35.0636C117.03 -34.616 121.01 -33.6779 124.556 -31.5053C128.203 -29.27 131.27 -26.2032 133.505 -22.5556C135.678 -19.0103 136.616 -15.0304 137.064 -10.3232C137.5 -5.73256 137.5 -0.00809097 137.5 7.18992V12.1062C137.5 17.2291 137.5 21.3038 137.275 24.608C137.044 27.9884 136.562 30.8911 135.436 33.6091C132.685 40.2515 127.408 45.5288 120.766 48.2802C120.599 48.349 120.432 48.4155 120.265 48.4796C119.463 48.7861 118.776 49.0487 118.173 49.2444C118.261 46.3142 118.261 42.9768 118.261 39.2105V33.6337C118.261 26.1236 118.261 19.8326 117.775 14.718C117.265 9.36359 116.158 4.33881 113.328 -0.279018C110.568 -4.78278 106.782 -8.56942 102.278 -11.3293C97.6601 -14.1592 92.6353 -15.2667 87.2809 -15.7758C82.1663 -16.2621 75.8753 -16.2619 68.3652 -16.2617H53.0204C47.9198 -16.2618 43.3816 -16.262 39.3923 -16.1097C39.5781 -16.7537 39.8327 -17.492 40.1316 -18.3585C40.64 -19.8323 41.2824 -21.2262 42.0971 -22.5556C44.3324 -26.2032 47.3991 -29.27 51.0467 -31.5053C54.5921 -33.6779 58.572 -34.616 63.2791 -35.0636C67.8698 -35.5001 73.5941 -35.5 80.7923 -35.5H94.8102Z" fill="#C29773" />
                    </g>
                </svg>
            ),
            text: t("employment-land-blocks.04"),
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState({
        tittleText: "Our expert will reach you out",
        buttonText: "Get a free consultation"
    });
    const closeModal = () => {
        setShowModal(false);
    };
    return (<div className="accounting-wrapper">
        <Header />
        <div className="accounting-container">
            <div className="accounting-guide">
                <NewConsultBaner
                    img={accountaingBaner}
                    title={t("employment-banner")}
                    description={[t("employment-descr")]}
                />
                <BanerBlocks
                    guides={guides}
                />
            </div>

            <div className="cost-of-epmloyment">
                <div className="title">
                    <div>{t("j_title2")}</div>
                    <div>{t("j_title3")}</div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <div className="content">
                            <div className="count">
                                01
                            </div>
                            <div className="title-card">
                                <div>{t("j_title4")}</div>
                                <div>{t("j_title5")}</div>
                            </div>
                        </div>
                        <div className="image">
                            <img src={labourCard} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="count">
                                02
                            </div>
                            <div className="title-card">
                                <div>{t("j_title8")}</div>
                                <div>{t("j_title9")}</div>
                            </div>
                        </div>
                        <div className="image">
                            <img src={emiratesId} alt="" />
                        </div>
                    </div>

                    <div className="card">
                        <div className="content">
                            <div className="count">
                                03
                            </div>
                            <div className="title-card">
                                <div>{t("j_title6")}</div>
                                <div>{t("j_title7")}</div>
                            </div>
                        </div>
                        <div className="image">
                            <img src={visa} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="employments-cards">
                <div className="card-container">
                    <div className="card">
                        <div className="title-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="102" height="102" viewBox="0 0 102 102" fill="none">
                                <g opacity="0.1">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25 -16.7502V70.7498C25 81.1051 33.3947 89.4998 43.75 89.4998H106.25C116.605 89.4998 125 81.1051 125 70.7498V8.24976C125 -2.10558 116.605 -10.5002 106.25 -10.5002H31.25C27.7982 -10.5002 25 -13.2985 25 -16.7502ZM45.3125 26.9998C45.3125 24.4109 47.4112 22.3123 50 22.3123H100C102.589 22.3123 104.688 24.4109 104.688 26.9998C104.688 29.5886 102.589 31.6873 100 31.6873H50C47.4112 31.6873 45.3125 29.5886 45.3125 26.9998ZM45.3125 48.8748C45.3125 46.2859 47.4112 44.1873 50 44.1873H84.375C86.9638 44.1873 89.0625 46.2859 89.0625 48.8748C89.0625 51.4636 86.9638 53.5623 84.375 53.5623H50C47.4112 53.5623 45.3125 51.4636 45.3125 48.8748Z" fill="#191C38" />
                                    <path d="M27.5549 -22.4559C29.7329 -21.4791 31.25 -19.2918 31.25 -16.7502H106.25C108.408 -16.7502 110.502 -16.4768 112.5 -15.9626V-21.0875C112.5 -28.6944 105.763 -34.5376 98.2322 -33.4619L30.7475 -23.8212C29.5445 -23.6493 28.4544 -23.1644 27.5549 -22.4559Z" fill="#191C38" />
                                </g>
                            </svg>
                            <div className="title">1</div>
                            <div className="description">
                                <div>{t("verification.title")}</div>
                                <div>{t("verification.content")}</div>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="day">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#C29773" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="white" />
                                </svg>
                                {t("result.day")}
                            </div>
                            <div className="text">
                                <div>{t("result.description.0")}</div>
                                <div>{t("result.description.1")}</div>
                            </div>
                            <div className="text">
                                <div>{t("result.term.0")}</div>
                                <div>{t("result.term.1")}</div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="title-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="102" viewBox="0 0 98 102" fill="none">
                                <g opacity="0.1">
                                    <path d="M75 14.5C88.8071 14.5 100 3.30712 100 -10.5C100 -24.3071 88.8071 -35.5 75 -35.5C61.1929 -35.5 50 -24.3071 50 -10.5C50 3.30712 61.1929 14.5 75 14.5Z" fill="#191C38" />
                                    <path d="M50.0005 28.5625C36.9315 28.5625 25.9313 38.3444 24.4043 51.3239L20.3451 85.8273C20.0426 88.3984 21.8817 90.7279 24.4528 91.0304C27.0239 91.3329 29.3534 89.4938 29.6558 86.9227L33.7151 52.4193C34.4968 45.7745 39.1808 40.4469 45.313 38.6189L45.3129 64.825C45.3128 70.4405 45.3126 75.1231 45.8124 78.8405C46.3399 82.7642 47.5004 86.3067 50.3471 89.1534C53.1937 92.0001 56.7362 93.1605 60.66 93.6881C64.3773 94.1879 69.0599 94.1877 74.6753 94.1875H75.3254C80.9408 94.1877 85.6236 94.1879 89.341 93.6881C93.2647 93.1605 96.8072 92.0001 99.6538 89.1534C102.501 86.3067 103.661 82.7642 104.189 78.8405C104.688 75.1232 104.688 70.4406 104.688 64.8252L104.688 38.6189C110.82 40.4469 115.504 45.7745 116.286 52.4193L120.345 86.9227C120.648 89.4938 122.977 91.3329 125.548 91.0304C128.119 90.7279 129.958 88.3984 129.656 85.8273L125.597 51.3239C124.07 38.3444 113.069 28.5625 100 28.5625H50.0005Z" fill="#191C38" />
                                </g>
                            </svg>
                            <div className="title">
                                2
                            </div>

                            <div className="description">
                                <div>{t("step1.description.main")}</div>
                                <div>{t("step1.description.details")}</div>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="day">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#C29773" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="white" />
                                </svg>

                                1 day
                            </div>
                            <div className="text">
                                <div>{t("result.description.0")}</div>
                                <div>{t("step1.content.results")}</div>
                            </div>

                            <div className="text">
                                <div>{t("result.term.0")}</div>
                                <div>{t("step1.content.term")}</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="102" viewBox="0 0 98 102" fill="none">
                                <g opacity="0.1">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.4891 -27.3801C36.2529 -35.5 49.1686 -35.5 75 -35.5C100.831 -35.5 113.747 -35.5 117.511 -27.3801C117.834 -26.6821 118.107 -25.9572 118.327 -25.2119C120.884 -16.5419 111.751 -6.49306 93.4856 13.6046L81.25 27L93.4856 40.3954C111.751 60.4931 120.884 70.5419 118.327 79.2119C118.107 79.9572 117.834 80.6822 117.511 81.3801C113.747 89.5 100.831 89.5 75 89.5C49.1686 89.5 36.2529 89.5 32.4891 81.3801C32.1655 80.6822 31.8926 79.9572 31.6728 79.2119C29.116 70.5419 38.2488 60.4931 56.5144 40.3954L68.75 27L56.5144 13.6046C38.2488 -6.49305 29.116 -16.5419 31.6728 -25.2119C31.8926 -25.9572 32.1655 -26.6821 32.4891 -27.3801ZM62.5 62.9375C59.9112 62.9375 57.8125 65.0362 57.8125 67.625C57.8125 70.2138 59.9112 72.3125 62.5 72.3125H87.5C90.0888 72.3125 92.1875 70.2138 92.1875 67.625C92.1875 65.0362 90.0888 62.9375 87.5 62.9375H62.5ZM57.8125 -13.625C57.8125 -16.2138 59.9112 -18.3125 62.5 -18.3125H87.5C90.0888 -18.3125 92.1875 -16.2138 92.1875 -13.625C92.1875 -11.0362 90.0888 -8.9375 87.5 -8.9375H62.5C59.9112 -8.9375 57.8125 -11.0362 57.8125 -13.625Z" fill="#191C38" />
                                </g>
                            </svg>
                            <div className="title">
                                3
                            </div>

                            <div className="description">
                                <div>{t("step2.description.main")}</div>
                                <div>{t("step2.description.details")}</div>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="day">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#C29773" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="white" />
                                </svg>

                                1 day
                            </div>
                            <div className="text">
                                <div>{t("result.description.0")}</div>
                                <div>{t("step2.content.results")}</div>
                            </div>

                            <div className="text">
                                <div>{t("result.term.0")}</div>
                                <div>{t("step2.content.term")}</div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="102" viewBox="0 0 98 102" fill="none">
                                <g opacity="0.1">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 27V2C12.5 -15.6777 12.5 -24.5165 17.9917 -30.0083C23.4835 -35.5 32.3223 -35.5 50 -35.5H100C117.678 -35.5 126.517 -35.5 132.008 -30.0083C137.5 -24.5165 137.5 -15.6777 137.5 2V27C137.5 44.6777 137.5 53.5165 132.008 59.0083C127.968 63.0481 122.117 64.1162 112.269 64.3985C112.246 59.7997 110.648 55.2072 107.476 51.4847C107.296 51.2742 107.188 51.0124 107.166 50.7367C106.382 40.9149 98.5828 33.1156 88.7611 32.3318C88.4853 32.3098 88.2236 32.2014 88.013 32.022C80.5138 25.6312 69.4839 25.6312 61.9847 32.022C61.7742 32.2014 61.5124 32.3098 61.2367 32.3318C51.4149 33.1156 43.6156 40.9149 42.8318 50.7367C42.8098 51.0124 42.7014 51.2742 42.522 51.4847C39.3497 55.2072 37.7521 59.7997 37.7291 64.3985C27.8819 64.116 22.0313 63.0478 17.9917 59.0082C12.5 53.5165 12.5 44.6777 12.5 27ZM51.5625 -10.5C51.5625 -13.0888 53.6612 -15.1875 56.25 -15.1875H93.75C96.3388 -15.1875 98.4375 -13.0888 98.4375 -10.5C98.4375 -7.91117 96.3388 -5.8125 93.75 -5.8125H56.25C53.6612 -5.8125 51.5625 -7.91117 51.5625 -10.5ZM43.75 6.6875C41.1612 6.6875 39.0625 8.78616 39.0625 11.375C39.0625 13.9638 41.1612 16.0625 43.75 16.0625H106.25C108.839 16.0625 110.938 13.9638 110.938 11.375C110.938 8.78616 108.839 6.6875 106.25 6.6875H43.75Z" fill="#191C38" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M81.9322 39.1574C77.937 35.7527 72.0607 35.7527 68.0655 39.1574C66.3534 40.6165 64.2247 41.4982 61.9824 41.6771C56.7498 42.0947 52.5947 46.2498 52.1771 51.4824C51.9982 53.7247 51.1165 55.8534 49.6574 57.5655C46.2527 61.5607 46.2527 67.437 49.6574 71.4322C51.1165 73.1443 51.9982 75.273 52.1771 77.5153C52.5947 82.7479 56.7498 86.903 61.9824 87.3206C64.2247 87.4995 66.3534 88.3813 68.0655 89.8403C72.0607 93.245 77.937 93.245 81.9322 89.8403C83.6443 88.3813 85.773 87.4995 88.0153 87.3206C93.2479 86.903 97.403 82.7479 97.8206 77.5153C97.9995 75.273 98.8813 73.1443 100.34 71.4322C103.745 67.437 103.745 61.5607 100.34 57.5655C98.8813 55.8534 97.9995 53.7247 97.8206 51.4824C97.403 46.2498 93.2479 42.0947 88.0153 41.6771C85.773 41.4982 83.6443 40.6165 81.9322 39.1574ZM87.5734 61.6768C89.466 59.9104 89.5682 56.9442 87.8018 55.0517C86.0354 53.1591 83.0692 53.0568 81.1767 54.8232L70.9822 64.3381L68.8234 62.3232C66.9308 60.5568 63.9646 60.6591 62.1982 62.5517C60.4318 64.4442 60.5341 67.4104 62.4267 69.1768L67.7838 74.1768C69.5848 75.8577 72.3796 75.8577 74.1805 74.1768L87.5734 61.6768Z" fill="#191C38" />
                                </g>
                            </svg>
                            <div className="title">
                                4
                            </div>

                            <div className="description">
                                <div>{t("j_title34")}</div>
                                <div>{t('j_title35')}</div>
                            </div>
                        </div>
                        <div className="main-content">
                            <div className="day">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#C29773" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="white" />
                                </svg>

                                1 day
                            </div>
                            <div className="text">
                                <div>{t("step3.description.main")}</div>
                                <div>{t("step3.description.details")}</div>
                            </div>

                            <div className="text">
                                <div>{t("result.term.0")}</div>
                                <div>{t("step3.content.term")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <RequestModal showModal={showModal} closeModal={closeModal} modalText={{ tittleText: t("modalHeader"), buttonText: t("modalButton") }} image={team[randomNumber].image} />
        <Footer />
    </div>
    )
}

export default Employment
