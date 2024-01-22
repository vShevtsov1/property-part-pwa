import "../styles/filter.scss"
import { useTranslation } from "react-i18next";
import locations from "../data/Location.jsx";
import { useState } from "react";

const Filter = ({ filtrDataProjects, setFilterDataProjects }) => {
    const { t } = useTranslation();
    const [visibleSearch, setVisibleSearch] = useState(false);
    const [filterData, setFilterData] = useState({
        "search": "",
        "searchVisible": locations,
        priceValues: { "from": "", "to": "" },
        sizeValues: { "from": "", "to": "" }
    })

    const [visibleDropDowns, setVisibleDropDowns] = useState({
        "price": false,
        "size": false,
        "bedrooms": false,
        "location": false,
        "completion": false,
        "propertyType": false
    })

    const { values }= useState([
        {"value": "Al Barari", "label": "Al Barari"},
        {"value": "Al Barsha 1", "label": "Al Barsha 1"},
        {"value": "Al Barsha 2", "label": "Al Barsha 2"},
        {"value": "Al Barsha 3", "label": "Al Barsha 3"},
        {"value": "Al Furjan", "label": "Al Furjan"},
        {"value": "Al Habtoor City", "label": "Al Habtoor City"},
        {"value": "Al Jaddaf", "label": "Al Jaddaf"},
        {"value": "Al Khail Heights", "label": "Al Khail Heights"},
        {"value": "Al Reem Island, Abu Dhabi", "label": "Al Reem Island, Abu Dhabi"},
        {"value": "Al Sufouh 1", "label": "Al Sufouh 1"},
        {"value": "Al Sufouh 2", "label": "Al Sufouh 2"},
        {"value": "Al Wasl (City Walk)", "label": "Al Wasl (City Walk)"},
        {"value": "Arabian Ranches", "label": "Arabian Ranches"},
        {"value": "Arabian Ranches 2", "label": "Arabian Ranches 2"},
        {"value": "Arabian Ranches 3", "label": "Arabian Ranches 3"},
        {"value": "Arjan", "label": "Arjan"},
        {"value": "Barsha South", "label": "Barsha South"},
        {"value": "Bluewaters Island", "label": "Bluewaters Island"},
        {"value": "Business Bay", "label": "Business Bay"},
        {"value": "Cherrywoods", "label": "Cherrywoods"},
        {"value": "City of Arabia", "label": "City of Arabia"},
        {"value": "Complex (Dubailand)", "label": "Complex (Dubailand)"},
        {"value": "Creekside", "label": "Creekside"},
        {"value": "Culture Village", "label": "Culture Village"},
        {"value": "Damac Hills", "label": "Damac Hills"},
        {"value": "Damac Hills 2", "label": "Damac Hills 2"},
        {"value": "Damac Lagoons", "label": "Damac Lagoons"},
        {"value": "Discovery Gardens", "label": "Discovery Gardens"},
        {"value": "Downtown Dubai", "label": "Downtown Dubai"},
        {"value": "Dubai Creek Harbour", "label": "Dubai Creek Harbour"},
        {"value": "Dubai Design District", "label": "Dubai Design District"},
        {"value": "Dubai Festival City", "label": "Dubai Festival City"},
        {"value": "Dubai Golf City", "label": "Dubai Golf City"},
        {"value": "Dubai Harbour", "label": "Dubai Harbour"},
        {"value": "Dubai Healthcare City", "label": "Dubai Healthcare City"},
        {"value": "Dubai Hills", "label": "Dubai Hills"},
        {"value": "Dubai International", "label": "Dubai International"},
        {"value": "Dubai Investment Park", "label": "Dubai Investment Park"},
        {"value": "Dubai Islands", "label": "Dubai Islands"},
        {"value": "Dubai Marina", "label": "Dubai Marina"},
        {"value": "Dubai Maritime City", "label": "Dubai Maritime City"},
        {"value": "Dubai Production City", "label": "Dubai Production City"},
        {"value": "Dubai Science Park", "label": "Dubai Science Park"},
        {"value": "Dubai Silicon Oasis", "label": "Dubai Silicon Oasis"},
        {"value": "Dubai South", "label": "Dubai South"},
        {"value": "Dubai Sports City", "label": "Dubai Sports City"},
        {"value": "Dubai Studio City", "label": "Dubai Studio City"},
        {"value": "Dubai Water Canal", "label": "Dubai Water Canal"},
        {"value": "Dubai Waterfront", "label": "Dubai Waterfront"},
        {"value": "Emaar South", "label": "Emaar South"},
        {"value": "Emirates Hills", "label": "Emirates Hills"},
        {"value": "Expo City Dubai", "label": "Expo City Dubai"},
        {"value": "Financial Centre", "label": "Financial Centre"},
        {"value": "International City", "label": "International City"},
        {"value": "Jebel Ali", "label": "Jebel Ali"},
        {"value": "Jumeirah", "label": "Jumeirah"},
        {"value": "Jumeirah Beach Residence (JBR)", "label": "Jumeirah Beach Residence (JBR)"},
        {"value": "Jumeirah Golf Estates", "label": "Jumeirah Golf Estates"},
        {"value": "Jumeirah Heights", "label": "Jumeirah Heights"},
        {"value": "Jumeirah Islands", "label": "Jumeirah Islands"},
        {"value": "Jumeirah Lake Towers (JLT)", "label": "Jumeirah Lake Towers (JLT)"},
        {"value": "Jumeirah Park", "label": "Jumeirah Park"},
        {"value": "Jumeirah Village Circle (JVC)", "label": "Jumeirah Village Circle (JVC)"},
        {"value": "Jumeirah Village Triangle (JVT)", "label": "Jumeirah Village Triangle (JVT)"},
        {"value": "La Mer", "label": "La Mer"},
        {"value": "Liwan", "label": "Liwan"},
        {"value": "Madina Jumeirah Living", "label": "Madina Jumeirah Living"},
        {"value": "Mina Al Arab, Ras Al Khaimah", "label": "Mina Al Arab, Ras Al Khaimah"},
        {"value": "Mina Rashid", "label": "Mina Rashid"},
        {"value": "Mirdif Hills", "label": "Mirdif Hills"},
        {"value": "Mirdif Tulip", "label": "Mirdif Tulip"},
        {"value": "Mohammed Bin Rashid City (MBR)", "label": "Mohammed Bin Rashid City (MBR)"},
        {"value": "Motor City", "label": "Motor City"},
        {"value": "Mudon", "label": "Mudon"},
        {"value": "Nad Al Sheba", "label": "Nad Al Sheba"},
        {"value": "Nshama", "label": "Nshama"},
        {"value": "Old Town", "label": "Old Town"},
        {"value": "Oman", "label": "Oman"},
        {"value": "Park Gate Residences", "label": "Park Gate Residences"},
        {"value": "Palm Jumeirah", "label": "Palm Jumeirah"},
        {"value": "Ras Al Khor", "label": "Ras Al Khor"},
        {"value": "Remraam", "label": "Remraam"},
        {"value": "Rashid Yachts and Marina", "label": "Rashid Yachts and Marina"},
        {"value": "Sharjah", "label": "Sharjah"},
        {"value": "Sheikh Zayed Road", "label": "Sheikh Zayed Road"},
        {"value": "The Greens", "label": "The Greens"},
        {"value": "The Lakes", "label": "The Lakes"},
        {"value": "The Meadows", "label": "The Meadows"},
        {"value": "The Springs", "label": "The Springs"},
        {"value": "The Sustainable City", "label": "The Sustainable City"},
        {"value": "The Valley", "label": "The Valley"},
        {"value": "The Villa", "label": "The Villa"},
        {"value": "The World Islands", "label": "The World Islands"},
        {"value": "Tilal Al Ghaf", "label": "Tilal Al Ghaf"},
        {"value": "Town Square", "label": "Town Square"},
        {"value": "Villanova", "label": "Villanova"},
        {"value": "Wadi Al Safa 5", "label": "Wadi Al Safa 5"},
        {"value": "YAS Island", "label": "YAS Island"}
    ]);

    function handleFindChange(event) {
        const inputValue = event.target.value;

        if (inputValue.length !== 0) {
            setVisibleSearch(true)
            const filteredList = locations.filter((location) =>
                location.label.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            setFilterDataProjects(prevState => ({
                ...prevState,
                searchVisible: filteredList,
            }));
        } else {
            setVisibleSearch(false)
            setFilterDataProjects(prevState => ({
                ...prevState,
                searchVisible: locations
            }));
        }
        setFilterDataProjects(prevState => ({
            ...prevState,
            search: inputValue
        }));
    }


    return (<div className={"filter"}>
        <div className="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill="#09121F" />
            </svg>

            <input placeholder={"Search on map..."} value={filtrDataProjects.search} onChange={handleFindChange} type="text" />
            {visibleSearch && <div className="filter-dropdown-search">
                {filtrDataProjects.searchVisible.map((location, index) => (
                    <div key={index}>
                        <div onClick={() => {
                            setFilterData(prevState => ({
                                ...prevState,
                                search: location.value
                            }));
                            setVisibleSearch(false)
                        }} className="location-option">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.364 17.3639L12 23.7279L5.636 17.3639C4.37734 16.1052 3.52019 14.5016 3.17293 12.7558C2.82567 11.0099 3.00391 9.20035 3.6851 7.55582C4.36629 5.91129 5.51984 4.50569 6.99988 3.51677C8.47992 2.52784 10.22 2 12 2C13.78 2 15.5201 2.52784 17.0001 3.51677C18.4802 4.50569 19.6337 5.91129 20.3149 7.55582C20.9961 9.20035 21.1743 11.0099 20.8271 12.7558C20.4798 14.5016 19.6227 16.1052 18.364 17.3639ZM12 12.9999C12.5304 12.9999 13.0391 12.7892 13.4142 12.4141C13.7893 12.0391 14 11.5304 14 10.9999C14 10.4695 13.7893 9.96078 13.4142 9.58571C13.0391 9.21064 12.5304 8.99992 12 8.99992C11.4696 8.99992 10.9609 9.21064 10.5858 9.58571C10.2107 9.96078 10 10.4695 10 10.9999C10 11.5304 10.2107 12.0391 10.5858 12.4141C10.9609 12.7892 11.4696 12.9999 12 12.9999Z" fill="#909090" />
                            </svg> {location.label}
                        </div>
                    </div>
                ))}
            </div>}
        </div>

        <div className="dropdown" onMouseEnter={() => {
            setVisibleDropDowns(prevState => ({
                ...prevState,
                price: true
            }));
        }}
            onMouseLeave={() => {
                setVisibleDropDowns(prevState => ({
                    ...prevState,
                    price: false
                }));
            }}
        >
            <div className={"dropdown-container"}>
                {t("filter1")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F" />
                </svg>
            </div>

            {visibleDropDowns.price && <div className="additional-menu">
                <input value={filterData.priceValues.from}
                    onChange={(e) => setFilterData(prevState => ({
                        ...prevState,
                        priceValues: {
                            ...prevState.priceValues,
                            from: e.target.value
                        }
                    }))} placeholder={"From"} />
                <input value={filterData.priceValues.to} placeholder={"To"}
                    onChange={(e) => setFilterData(prevState => ({
                        ...prevState,
                        priceValues: {
                            ...prevState.priceValues,
                            to: e.target.value
                        }
                    }))}
                />
            </div>}
        </div>

        <div className="dropdown" onMouseEnter={() => {
            setVisibleDropDowns(prevState => ({
                ...prevState,
                size: true
            }));
        }}
             onMouseLeave={() => {
                 setVisibleDropDowns(prevState => ({
                     ...prevState,
                     size: false
                 }));
             }}
        >
            <div className={"dropdown-container"}>
                {t("filter2")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                </svg>
            </div>

            {visibleDropDowns.size && <div className="additional-menu">
                <input value={filterData.sizeValues.from}
                       onChange={(e) => setFilterData(prevState => ({
                           ...prevState,
                           sizeValues: {
                               ...prevState.sizeValues,
                               from: e.target.value
                           }
                       }))} placeholder={"From"} />
                <input value={filterData.sizeValues.to} placeholder={"To"}
                       onChange={(e) => setFilterData(prevState => ({
                           ...prevState,
                           sizeValues: {
                               ...prevState.sizeValues,
                               to: e.target.value
                           }
                       }))}
                />
            </div>}
        </div>

        <div className="dropdown" onMouseEnter={() => {
            setVisibleDropDowns(prevState => ({
                ...prevState,
                bedrooms: true
            }));
        }}
             onMouseLeave={() => {
                 setVisibleDropDowns(prevState => ({
                     ...prevState,
                     bedrooms: false
                 }));
             }}
        >
            <div className={"dropdown-container"}>
                {t("filter3")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                </svg>
            </div>

            {visibleDropDowns.bedrooms && <div className="additional-list">
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Studio
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    1
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    2
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    3
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    4
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    5
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    6
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    7
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    8
                </div>
            </div>}
        </div>

       <div className="dropdown" onMouseEnter={() => {
            setVisibleDropDowns(prevState => ({
                ...prevState,
                 location: true
            }));
        }}
             onMouseLeave={() => {
                 setVisibleDropDowns(prevState => ({
                     ...prevState,
                     location: false
                 }));
             }}
        >
            <div className={"dropdown-container"}>
                {t("filter4")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                </svg>
            </div>

            {/*{visibleDropDowns.location && <div className="additional-list location">*/}
            {/*    {values.map((value, index) => (*/}
            {/*        <div key={index} className='dropdown-option'>*/}
            {/*            <div>*/}
            {/*                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"*/}
            {/*                     fill="none">*/}
            {/*                    <g clip-path="url(#clip0_329_1748)">*/}
            {/*                        <path*/}
            {/*                            d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"*/}
            {/*                                fill="#B6B6B6"/>*/}
            {/*                            <path*/}
            {/*                                d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"*/}
            {/*                                fill="#B6B6B6"/>*/}
            {/*                        </g>*/}
            {/*                        <defs>*/}
            {/*                            <clipPath id="clip0_329_1748">*/}
            {/*                                <rect width="24" height="24" fill="white"/>*/}
            {/*                            </clipPath>*/}
            {/*                        </defs>*/}
            {/*                    </svg>*/}
            {/*                </div>*/}
            {/*                {value.label}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*</div>}*/}
        </div>

        <div className="dropdown" onMouseEnter={() => {
            setVisibleDropDowns(prevState => ({
                ...prevState,
                completion: true
            }));
        }}
             onMouseLeave={() => {
                 setVisibleDropDowns(prevState => ({
                     ...prevState,
                     completion: false
                 }));
             }}
        >
            <div className={"dropdown-container"}>
                Completion
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                </svg>
            </div>

            {visibleDropDowns.completion && <div className="additional-list">
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    ready
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    off plan
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    any
                </div>
            </div>}
        </div>

        <div className="dropdown" onMouseEnter={() => {
            setVisibleDropDowns(prevState => ({
                ...prevState,
                propertyType: true
            }));
        }}
             onMouseLeave={() => {
                 setVisibleDropDowns(prevState => ({
                     ...prevState,
                     propertyType: false
                 }));
             }}
        >
            <div className={"dropdown-container"}>
                {t("filter6")}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14L8 10H16L12 14Z" fill="#09121F"/>
                </svg>
            </div>

            {visibleDropDowns.propertyType && <div className="additional-list">
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Apartments
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Villa
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Town house
                </div>
                <div className='dropdown-option'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                             fill="none">
                            <g clip-path="url(#clip0_329_1748)">
                                <path
                                    d="M10 3C10 3.78105 10 4.21895 10 5H5V19H19V14H21V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H10Z"
                                    fill="#B6B6B6"/>
                                <path
                                    d="M19 14H21V3.99984C21 3.73462 20.8946 3.48027 20.7071 3.29273C20.5196 3.1052 20.2652 2.99984 20 2.99984L10 3C10 3.78105 10 4.21895 10 5H19V14Z"
                                    fill="#B6B6B6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_329_1748">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    Plots
                </div>
            </div>
            }
        </div>
    </div>)
}
export default Filter