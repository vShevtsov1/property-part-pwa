import "../styles/filterAreas.scss"
import { useState } from "react";
import areasinfo from "../data/Areasinfo.jsx";
import { useTranslation } from "react-i18next";

function FilterAreas() {
    const [visibleSearch, setVisibleSearch] = useState(false);
    const [filterData, setFilterData] = useState({
        "search": "",
        "searchVisible": areasinfo,
        priceValues: { "from": "", "to": "" }

    })
    const [visibleDropDowns, setVisibleDropDowns] = useState({
        "price": false,
    })
    const { t } = useTranslation();
    function handleFindChange(event) {
        const inputValue = event.target.value;
        if (inputValue.length !== 0) {
            setVisibleSearch(true)
            const filteredList = areasinfo.filter((areasinfo) =>
                areasinfo.label.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            setFilterData(prevState => ({
                ...prevState,
                searchVisible: filteredList
            }));
        }
        else {
            setVisibleSearch(false)
            setFilterData(prevState => ({
                ...prevState,
                searchVisible: areasinfo
            }));
        }
        setFilterData(prevState => ({
            ...prevState,
            search: inputValue
        }));

    }
    return (
        <div className="search-bar">
            <input placeholder="Type here the area you are looking for..." value={filterData.search} onChange={handleFindChange} type="text" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21008 0.5C4.54633 0.5 0.765625 4.28071 0.765625 8.94446C0.765625 13.6082 4.54633 17.3889 9.21008 17.3889C11.1615 17.3889 12.9584 16.727 14.3882 15.6155L17.9637 19.1909C18.3759 19.603 19.0443 19.603 19.4565 19.1909C19.8687 18.7787 19.8687 18.1103 19.4565 17.6981L15.8811 14.1226C16.9926 12.6927 17.6545 10.8959 17.6545 8.94446C17.6545 4.28071 13.8738 0.5 9.21008 0.5ZM2.87674 8.94446C2.87674 5.44665 5.71227 2.61111 9.21008 2.61111C12.7079 2.61111 15.5434 5.44665 15.5434 8.94446C15.5434 12.4423 12.7079 15.2778 9.21008 15.2778C5.71227 15.2778 2.87674 12.4423 2.87674 8.94446Z" fill="#575757" />
            </svg>


            {visibleSearch && <div className="filter-dropdown-search">
                {filterData.searchVisible.map((areasinfo, index) => (
                    <div key={index}>
                        <div onClick={() => {
                            setFilterData(prevState => ({
                                ...prevState,
                                search: areasinfo.value
                            }));
                            setVisibleSearch(false)
                        }} className="location-option">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.364 17.3639L12 23.7279L5.636 17.3639C4.37734 16.1052 3.52019 14.5016 3.17293 12.7558C2.82567 11.0099 3.00391 9.20035 3.6851 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639ZM12 12.9999C12.5304 12.9999 13.0391 12.7892 13.4142 12.4141C13.7893 12.0391 14 11.5304 14 10.9999C14 10.4695 13.7893 9.96078 13.4142 9.58571C13.0391 9.21064 12.5304 8.99992 12 8.99992C11.4696 8.99992 10.9609 9.21064 10.5858 9.58571C10.2107 9.96078 10 10.4695 10 10.9999C10 11.5304 10.2107 12.0391 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999Z" fill="#909090" />
                            </svg> {areasinfo.label}
                        </div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default FilterAreas
