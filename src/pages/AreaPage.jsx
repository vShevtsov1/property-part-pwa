import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/Pages/business.scss"
import arrowLeft from "../assets/arrow-left-fill.svg";
import share from "../assets/share.svg";
import GetConsult from "../components/GetConsult";
import { useState } from "react";
import { useParams } from "react-router-dom";
import annaHorshunovaName from "../assets/teams/anna-horshunova-min.jpg";
import annaHorshunova from "../assets/teams/qr/anna-horshunova.png";
import RequestModal from "../components/RequestModal.jsx";

import apart1 from "../assets/Areas/apart-pages/apart1.png";
import apart2 from "../assets/Areas/apart-pages/apart2.png";
import apart3 from "../assets/Areas/apart-pages/apart3.png";

import palm1 from "../assets/Areas/apart-pages/palm1.png";
import palm2 from "../assets/Areas/apart-pages/palm2.png";
import palm3 from "../assets/Areas/apart-pages/palm3.png";

import mbr from "../assets/Areas/apart-pages/mbr1.png";
import mbr1 from "../assets/Areas/apart-pages/mbr2.png";
import mbr2 from "../assets/Areas/apart-pages/mbr3.png";

import creek1 from "../assets/Areas/apart-pages/creek1.png";
import creek2 from "../assets/Areas/apart-pages/creek2.png";
import creek3 from "../assets/Areas/apart-pages/creek3.png";

import marina1 from "../assets/Areas/apart-pages/marina1.png";
import marina2 from "../assets/Areas/apart-pages/marina2.png";
import marina3 from "../assets/Areas/apart-pages/marina3.png";

import lagoon1 from "../assets/Areas/lagoons1.png";
import lagoon2 from "../assets/Areas/lagoons2.png";
import lagoon3 from "../assets/Areas/lagoons3.png";

import jlt from "../assets/Areas/jlt.png";
import jlt1 from "../assets/Areas/jlt1.png";
import jlt2 from "../assets/Areas/jlt2.png";

import mjl from "../assets/Areas/apart-pages/mjl.png";
import mjl1 from "../assets/Areas/apart-pages/mjl1.png";
import mjl2 from "../assets/Areas/apart-pages/mjl2.png";

import mudon from "../assets/Areas/apart-pages/mudon.png";
import mudon1 from "../assets/Areas/apart-pages/mudon1.png";
import mudon2 from "../assets/Areas/apart-pages/mudon2.png";

import jvc from "../assets/Areas/apart-pages/jvc.png";
import jvc1 from "../assets/Areas/apart-pages/jvc1.png";
import jvc2 from "../assets/Areas/apart-pages/jvc2.png";

import bluewaters from "../assets/Areas/apart-pages/bluewaters.png";
import bluewaters1 from "../assets/Areas/apart-pages/bluewaters1.png";
import bluewaters2 from "../assets/Areas/apart-pages/bluewaters2.png";

import centralPark from "../assets/Areas/apart-pages/bluewaters.png";
import centralPark1 from "../assets/Areas/apart-pages/bluewaters1.png";
import centralPark2 from "../assets/Areas/apart-pages/bluewaters2.png";

import damacHills from "../assets/Areas/apart-pages/damac-hills.png";
import damacHills1 from "../assets/Areas/apart-pages/damac-hills1.png";
import damacHills2 from "../assets/Areas/apart-pages/damac-hills2.png";

import dubaiHills from "../assets/Areas/apart-pages/damac-hills.png";
import dubaiHills1 from "../assets/Areas/apart-pages/damac-hills1.png";
import dubaiHills2 from "../assets/Areas/apart-pages/damac-hills2.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


function AreaPage() {
    console.log(apart1);
    const { id } = useParams();
    console.log(id);
    const [showModal, setShowModal] = useState(false);

    const { t } = useTranslation();
    const pageTexy = {
        "business": {
            "title": t("areas-business.title"),
            "titleText": [
                t('areas-business.titleText.0'),
            ],
            "locationText": [
                t('areas-business.locationText.0'),
                t('areas-business.locationText.1'),
                t('areas-business.locationText.2'),
                t('areas-business.locationText.3')
            ],
            "infrastructureText": [
                t('areas-business.infrastructureText.0'),
                t('areas-business.infrastructureText.1'),
                t('areas-business.infrastructureText.2')
            ],
            "images": [apart1, apart2, apart3],
            "blocks": [
                {
                    "title": t('areas-business.blocks.0.title'),
                    "texts": [
                        t('areas-business.blocks.0.texts.0'),
                        t('areas-business.blocks.0.texts.1'),
                        t('areas-business.blocks.0.texts.2')
                    ]
                },
                {
                    "title": t('areas-business.blocks.0.title'),
                    "texts": [
                        t('areas-business.blocks.1.texts.0'),
                        t('areas-business.blocks.1.texts.1')
                    ]
                },
                {
                    "title": t('areas-business.blocks.2.title'),
                    "texts": [t('areas-business.blocks.2.texts.0')]
                }
            ]
        },
        "palm": {
            "title": "Palm Jumeirah",
            "titleText": ["The Palm Jumeirah is an artificial island in Dubai, shaped like a palm tree and located off the coast of the city. It is one of the most iconic and recognizable landmarks in Dubai, known for its luxurious properties and stunning views of the Arabian Gulf.",
                "The Palm Jumeirah was developed by Nakheel Properties, one of Dubai’s largest property developers, and was completed in 2006. "],
            "locationText":
                ["Location: Palm Jumeirah is a man-made island located off the coast of Dubai, United Arab Emirates, in the Persian Gulf.",
                    "Size: The island is shaped like a palm tree and spans over 5 square kilometers, making it one of the largest man-made islands in the world.",
                    "Architecture: Palm Jumeirah is known for its impressive architecture, featuring high-end luxury hotels, apartments, and villas, many of which offer stunning views of the sea and the city skyline.",
                    "Attractions: The island offers a range of attractions and entertainment options, including beaches, water sports, shopping malls, and theme parks like Aquaventure Waterpark.",
                    "Architecture: Palm Jumeirah is known for its impressive architecture, featuring high-end luxury hotels, apartments, and villas, many of which offer stunning views of the sea and the city skyline.",
                    "Landmarks: Palm Jumeirah is home to several iconic landmarks, including the Atlantis, The Palm hotel and resort, and the Palm Jumeirah Monorail."
                ],
            "infrastructureText": ["The Palm Jumeirah offers a wide range of amenities for residents, including supermarkets, restaurants, cafes, and retail outlets. The Palm Jumeirah Boardwalk, which is a popular destination for residents and visitors, is lined with a variety of restaurants and cafes.",
                "There are several schools in and around the Palm Jumeirah, including the Dubai British School, the American School of Dubai, and the Wellington International School.",
                "Healthcare facilities on the Palm Jumeirah include the Al Das Medical Clinic and the Al Das Medical Centre. There are also several hospitals and medical centers located in nearby areas such as Dubai Marina and Dubai Media City.",
                "The Palm Jumeirah offers a wide range of amenities for residents, including supermarkets, restaurants, cafes, and retail outlets. ",
                "The Palm Jumeirah Boardwalk, which is a popular destination for residents and visitors, is lined with a variety of restaurants and cafes."],
            "images": [
                palm1,
                palm2,
                palm3,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": ["The Palm Jumeirah is home to several notable landmarks, including the Atlantis, The Palm hotel, which features a waterpark, aquarium, and several restaurants and bars. The Palm Jumeirah also has several parks and green spaces, including Al Ittihad Park, which features a playground, jogging track, and a variety of plants and trees.",
                        "There are also plenty of outdoor activities available on The Palm Jumeirah, including water sports such as jet skiing, parasailing, and wakeboarding. The Palm Jumeirah Boardwalk is a popular spot for walking, jogging, and cycling, with stunning views of the Dubai skyline and the Arabian Gulf. Other nearby attractions include the Dubai Marina, Ski Dubai at Mall of the Emirates, and the Dubai Miracle Garden.",
                        "The Palm Jumeirah offers a wide range of outdoor activities, fitness options, and beauty services to residents and visitors. There are several gyms and fitness centers located on the island, including Fitness First and Fairmont The Palm’s Willow Stream Spa & Fitness Center. There are also plenty of opportunities for outdoor activities, such as walking or cycling."]
                },
                {
                    "title": "Property in Business Bay",
                    "texts": ["The Palm Jumeirah is situated near several other communities in Dubai, including Dubai Marina, Jumeirah Beach Residence, and Al Sufouh. Dubai Marina is just a short drive away and offers a similar lifestyle to The Palm Jumeirah, with luxury apartments, high-end shopping, and dining options. Jumeirah Beach Residence is another beachfront community that is popular with residents and visitors. Al Sufouh is located to the south of The Palm Jumeirah and is primarily a residential area. ",
                        "The Palm Jumeirah is well-connected to the rest of Dubai via Sheikh Zayed Road, which runs parallel to the island. Public transportation options include buses and taxis, and there are plans to build a monorail system that will connect The Palm Jumeirah to the Dubai Metro."]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": ["The Palm Jumeirah is one of Dubai’s most prestigious and sought-after residential areas, offering a luxurious beachfront lifestyle with stunning views and top-notch amenities. While the cost of living and real estate prices are high, the area offers a unique and unparalleled experience that is highly desirable to many. The Palm Jumeirah is a great place to live for those who can afford it and want to experience the best of what Dubai has to offer."]
                }
            ]
        },
        "mbr": {
            "title": "MBR City",
            "titleText": ["MBR City is a new development area in Dubai, named after His Highness Sheikh Mohammed bin Rashid Al Maktoum, the Vice President and Prime Minister of the UAE and Ruler of Dubai. It is a high-end residential and commercial development project located in the heart of Dubai.",
                "MBR City was first announced in 2013 as part of the Dubai Plan 2021, which aims to make Dubai one of the most livable and sustainable cities in the world."],
            "locationText": ["Location: MBR City, also known as Mohammed Bin Rashid City, is a master-planned development located in the heart of Dubai, United Arab Emirates, spanning over 54 million square feet.",
                "Size: The development includes residential, commercial, and leisure spaces, with a mix of apartments, villas, and townhouses.",
                "Accessibility: MBR City is well-connected to other parts of Dubai via major roads, including Sheikh Zayed Road and Al Khail Road, and is also accessible via public transportation.",
                "Architecture: MBR City features a range of architectural styles, from modern and contemporary to traditional Arabic, with a focus on luxury and sustainability.",
                "Attractions: The development offers a range of attractions and entertainment options, including shopping malls, restaurants, cafes, cinemas, and parks.",
                "Real estate: MBR City offers a range of luxurious residential properties, including apartments, villas, and townhouses, with world-class amenities and services in Dubai."],
            "infrastructureText": ["MBR City offers residents access to a range of world-class amenities, including supermarkets, restaurants, cafes, and retail outlets. The area is also home to several top-rated schools, including GEMS International School and Hartland International School. ",
                "Healthcare facilities in the area are also of the highest quality, with Dubai Creek Hospital and Mediclinic Parkview Hospital located nearby.",
                "MBR City is located near the coast, and residents have easy access to some of Dubai’s most beautiful beaches. The nearest beach is Jumeirah Beach, which is just a short drive away. This popular beach is known for its crystal-clear water, white sand, and stunning views of the Burj Al Arab.",
                "Another popular beach nearby is Kite Beach, which is known for its ideal conditions for kite surfing and other water sports. The beach also features several food trucks, a running track, and a playground, making it a popular spot for families and fitness enthusiasts."],
            "images": [
                mbr,
                mbr1,
                mbr2,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": ["MBR City offers a variety of shopping destinations, dining options, and entertainment venues. The area is home to several malls such as Cityland Mall and Meydan One Mall. These malls offer a wide range of international and local brands, cinemas, and restaurants, making them popular spots for residents and visitors alike.",
                        "There are also several fine dining restaurants located within the area, such as the French-inspired Bistro des Arts and the contemporary Japanese restaurant Izakaya. Other popular dining options in MBR City include Zuma, Cavalli Club, and Atmosphere Lounge.",
                        "For those seeking a lively nightlife, MBR City has several options to choose from. The world-renowned Cavalli Club is located in the Fairmont Hotel, offering guests an unforgettable experience with its luxurious décor, world-class DJ performances, and signature cocktails.  The nearest beach is Jumeirah Beach, which is just a short drive away. This popular beach is known for its crystal-clear water, white sand, and stunning views of the Burj Al Arab."],
                },
                {
                    "title": "Nearby Communities",
                    "texts": ["MBR City is located near several other popular communities in Dubai, including Downtown Dubai, Business Bay, and Dubai Hills Estate. These communities offer a range of shopping, dining, and entertainment options, as well as access to major landmarks and attractions such as the Burj Khalifa, Dubai Mall, and Dubai Opera. MBR City is also well-connected to other parts of Dubai through major highways and public transportation.",
                        "Popular beach nearby is Kite Beach, which is known for its ideal conditions for kite surfing and other water sports. The beach also features several food trucks, a running track, and a playground, making it a popular spot for families and fitness enthusiasts."]
                },
                {
                    "title": "Conclusion",
                    "texts": ["MBR City is a rapidly developing area in Dubai that offers a luxurious and comfortable lifestyle for its residents. With a range of properties available, including villas, townhouses, and apartments, there is something for everyone in this community. The area offers easy access to major landmarks and attractions, as well as a range of amenities and facilities, including schools, healthcare facilities, shopping destinations, and outdoor activities."]
                }
            ]
        },
        "creek": {
            "title": "Creek Harbour",
            "titleText": ["Dubai Creek Harbour is a mixed-use development located on the banks of Dubai Creek, which is considered to be the birthplace of Dubai.",
                "The area is being developed by Emaar Properties, one of the largest real estate developers in the Middle East, in partnership with Dubai Holding. ",
                "The project aims to create a new urban center that combines residential, commercial, and cultural elements."],
            "locationText": ["Location: Dubai Creek Harbour is a master-planned development located on the banks of the Dubai Creek, United Arab Emirates., and is adjacent to the equally famous central area of Downtown Dubai.",
                "Size: The development spans over 6 square kilometers, and includes residential, commercial, and leisure spaces.",
                "Accessibility: Dubai Creek Harbour is well-connected to other parts of Dubai via major roads, including Sheikh Zayed Road and Dubai-Al Ain Road, and is also accessible via public transportation.",
                "Architecture: Dubai Creek Harbour features modern and contemporary architecture, with several high-rise residential towers, luxury villas, and commercial buildings.",
                "Attractions: The development offers a range of attractions and entertainment options, including the Dubai Creek Tower, a cultural center, a marina, a yacht club, and several shopping malls.",
                "Real estate: Dubai Creek Harbour offers a range of luxurious residential properties, including apartments, villas, and townhouses, with stunning views of the Dubai skyline and the Dubai Creek."
            ],
            "infrastructureText": ["Dubai Creek Harbour offers residents a wide range of amenities, including supermarkets, cafes, restaurants, and shops. The Dubai Creek Tower, which is currently under construction, will offer additional retail and dining options once completed. The area is also home to several schools, including the International School of Arts and Sciences and the Cambridge International School. Healthcare facilities in the area include the Mediclinic Dubai Creek Hospital.",
                "Dubai Creek Harbour is well-connected to the rest of Dubai through a variety of transportation options. The area is easily accessible by car, with Sheikh Zayed Road and Al Khail Road both nearby.",
                "Dubai Creek Harbour is also served by Dubai Metro’s Green Line, with the Dubai Creek Harbour Metro Station providing convenient access to the area. In addition, the area is home to the Dubai Creek Harbour Ferry Station, which offers ferry services to various destinations including Dubai Marina, Al Fahidi, and Al Ghubaiba."],
            "images": [
                creek1,
                creek2,
                creek3,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": ["Dubai Creek Harbour offers a variety of options for shopping, dining, and entertainment. There are several shopping destinations within the area, such as The Dubai Mall, the largest shopping mall in the world, and Dubai Festival City Mall. Both malls offer a wide range of shops and boutiques, ranging from high-end luxury brands to popular international chains.",
                        "When it comes to dining, residents and visitors can choose from a vast selection of restaurants and cafes serving different cuisines, including Arabic, Asian, European, and American. Some of the popular dining spots in the area include Boardwalk, EETEN Urban Kitchen, The Lighthouse Restaurant & Cafe, and The Pizza Company.",
                        "For those looking for a lively nightlife, Dubai Creek Harbour has several options, including the Irish Village, QD’s, and the Buddha Bar. These venues offer a range of entertainment options, including live music performances, DJs, and drinks.",
                        "Dubai Creek Harbour offers several leisure activities for residents and visitors. One of the most popular activities is taking a traditional dhow boat ride along the Dubai Creek."]
                },
                {
                    "title": "Nearby Communities",
                    "texts": ["Dubai Creek Harbour is located close to several other communities in Dubai. The neighboring communities include the Dubai Festival City, Business Bay, and Downtown Dubai. The connectivity to these areas is excellent, with various modes of transportation available, including the Dubai Metro, buses, and taxis.",
                        "Dubai Creek Harbour is located along the Dubai Creek, and while it doesn’t have any beaches of its own, it is located near several popular beaches. The closest beach to the area is Al Mamzar Beach Park, which is just a short drive away. The park has five beaches, which offer a variety of activities, including swimming, sunbathing, and water sports.",
                        "Jumeirah Beach is another popular beach destination that is easily accessible from Dubai Creek Harbour. The beach is known for its white sand, clear water, and stunning views of the Burj Al Arab, one of Dubai’s most famous landmarks."]
                },
                {
                    "title": "Conclusion",
                    "texts": ["Dubai Creek Harbour is a rapidly growing area in Dubai, offering residents a luxurious and comfortable lifestyle. With its stunning views of Dubai Creek and the Dubai skyline, world-class amenities, and convenient location, the area is an excellent choice for both investors and those looking to live in Dubai. The area has a wide range of properties available, catering to different preferences and budgets."]
                }
            ]
        },
        "marina": {
            "title": "Dubai Marina",
            "titleText": ["Dubai Marina is a vibrant waterfront community in Dubai, United Arab Emirates (UAE). It’s located along the Persian Gulf shoreline.",
                "The Dubai Marina district is a man-made canal city, built around a two-mile stretch of artificial canal. It’s also home to the world’s tallest residential building, the Princess Tower, as well as the second-tallest residential building, the 23 Marina."],
            "locationText": ["Location: Dubai Marina is a man-made canal city located along the Persian Gulf shoreline in Dubai, United Arab Emirates.",
                "Size: The area spans over 50 million square feet and is one of the largest waterfront communities in the world.",
                "Architecture: Dubai Marina is known for its impressive architecture, featuring high-rise buildings and luxury towers, many of which offer stunning views of the marina and the sea.",
                "Accessibility: The area is well-connected to other parts of Dubai via major roads, including Sheikh Zayed Road and the Dubai Metro.",
                "Marina: Dubai Marina is home to a large yacht marina, which can accommodate over 500 boats and yachts, making it a popular destination for water sports enthusiasts",
                "Entertainment: The area offers a wide range of entertainment options, including restaurants, cafes, and shopping malls like Dubai Marina Mall. It is a popular tourist destination, with many visitors coming to experience its attractions, events, and entertainment."],
            "infrastructureText": ["Dubai Marina is home to several popular shopping destinations, including Dubai Marina Mall, which features over 140 stores and restaurants, and the nearby Mall of the Emirates, which is one of the largest malls in the world. Other popular shopping destinations in the area include Ibn Battuta Mall, The Beach at JBR, and Marina Walk.",
                "Dubai Marina is also known for its vibrant nightlife scene, with several bars, lounges, and nightclubs located in the area. Some of the most popular nightlife spots in Dubai Marina include Zero Gravity, Pier 7, and Lock, Stock & Barrel.",
                "Dubai Marina offers a range of fitness centers and gyms, including Fitness First, Gold’s Gym, and Fitness Factory."],
            "images": [
                marina1,
                marina2,
                marina3,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": ["There are several outdoor activities available in Dubai Marina, including water sports such as jet skiing, parasailing, and wakeboarding. The area is also home to several parks and green spaces, including Dubai Marina Promenade and Jumeirah Beach Park, which offer walking paths and scenic views.",
                        "Dubai Marina is home to several notable landmarks and attractions, including the Dubai Marina Yacht Club, which offers yacht rentals and charters, and the Dubai Marina Walk, a pedestrian-friendly promenade with a variety of shops, cafes, and restaurants. The Dubai Eye, one of the world’s largest observation wheels, is also located in Dubai Marina.",
                        "In addition to Dubai Marina Promenade and Jumeirah Beach Park, there are several other parks and green spaces in the area, including the Al Sufouh Park and Emirates Golf Club, which features a championship golf course and stunning views of Dubai Marina."]
                },
                {
                    "title": "Property in Business Bay",
                    "texts": ["Dubai Creek Harbour is located close to several other communities in Dubai. The neighboring communities include the Dubai Festival City, Business Bay, and Downtown Dubai. The connectivity to these areas is excellent, with various modes of transportation available, including the Dubai Metro, buses, and taxis.",
                        "Dubai Creek Harbour is located along the Dubai Creek, and while it doesn’t have any beaches of its own, it is located near several popular beaches. The closest beach to the area is Al Mamzar Beach Park, which is just a short drive away. The park has five beaches, which offer a variety of activities, including swimming, sunbathing, and water sports.",
                        "Jumeirah Beach is another popular beach destination that is easily accessible from Dubai Creek Harbour. The beach is known for its white sand, clear water, and stunning views of the Burj Al Arab, one of Dubai’s most famous landmarks."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": ["Dubai Marina is a vibrant and cosmopolitan community located in the heart of Dubai.",
                        "Dubai Marina is a popular choice for both living and investing, due to its central location, high-end properties, and numerous amenities. It is a great place for those who value an active lifestyle, with plenty of opportunities for outdoor activities and sports. Overall, Dubai Marina offers a unique and desirable living experience in one of the most dynamic cities in the world"
                    ]
                }
            ]
        },
        "lagoons": {
            "title": "Damac Lagoons",
            "titleText": ["Damac Lagoons is a waterfront residential community situated in Dubai’s International Media Production Zone (IMPZ). It is a part of the larger Dubailand project and is developed by Damac Properties. ",
                "The community features a range of residential properties, including apartments, townhouses, and villas, that offer a luxurious and comfortable living experience. "],
            "locationText": ["Location: Damac Lagoons is situated in the heart of Dubai, close to Dubai International Airport, Dubai Festival City, and Dubai Creek. It is easily accessible via road and public transportation, making it a convenient location for residents and commuters alike.",
                "Architecture: Damac Lagoons has a modern and contemporary design, with a mix of low-rise residential buildings and villas that offer stunning waterfront views. The area is designed to be pedestrian-friendly, with several walkways and green spaces for residents to enjoy.",
                "Real estate: Damac Lagoons offers a range of luxury residential properties, including apartments and villas, with world-class amenities and services. The area is designed to offer a unique lifestyle that combines luxury living with natural beauty and tranquility.",
                "Amenities: Damac Lagoons offers several amenities and facilities for residents, including a clubhouse, swimming pools, fitness center, and spa. The area also has several parks and open spaces for recreational activities, as well as a marina for water sports enthusiasts."],
            "infrastructureText": ["Damac Lagoons offers a range of amenities and facilities to its residents, including supermarkets, retail outlets, restaurants, and cafes. The community also features several parks and green spaces, as well as sports facilities and playgrounds for children.",
                "There are several schools in and around Damac Lagoons, including Gems Metropole School and Jebel Ali School. These schools offer high-quality education to students of all ages, from pre-school to secondary school.",
                "The healthcare needs of residents in Damac Lagoons are catered to by several hospitals and clinics in the surrounding areas, including the Mediclinic Parkview Hospital and Aster Clinic in Arabian Ranches.",
                "Damac Lagoons is located in close proximity to some of the most stunning beaches in Dubai. The community is situated a few minutes’ drive away from the beaches of Jumeirah and Dubai Marina. These beaches are known for their pristine waters and beautiful scenery."],
            "images": [
                lagoon1,
                lagoon2,
                lagoon3,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": ["Damac Lagoons is situated close to a range of leisure activities and notable landmarks. For those who enjoy the outdoors, there are several parks, cycling tracks, and walking trails in the vicinity of the community. The Dubai Miracle Garden, one of the world’s largest flower gardens, is also located nearby, providing visitors with a colorful and picturesque setting to explore.",
                        "The Dubai Autodrome, a world-class race track, is located a few minutes’ drive from the community, providing motorsports enthusiasts with an exciting destination to visit. Another notable landmark near Damac Lagoons is the Dubai Fountain, a spectacular water and light show located in the heart of Downtown Dubai.",
                        "Additionally, there are several golf courses located near the community, including the Trump International Golf Club and the Emirates Golf Club, providing golfers with world-class facilities to enjoy."]
                },
                {
                    "title": "Nearby Communities",
                    "texts": ["Damac Lagoons is located in the heart of Dubai and is surrounded by several other popular communities. These include Jumeirah Village Circle, Jumeirah Village Triangle, and Dubai Sports City. The area is also in close proximity to the bustling Dubai Marina, which is home to numerous restaurants, shops, and entertainment options.",
                        "The transportation options in and around the area are excellent, with easy access to major highways and public transportation. There are several bus and metro stations located nearby, providing easy access to other areas of Dubai.",
                        "Damac Lagoons is located in close proximity to some of the most stunning beaches in Dubai. The community is situated a few minutes’ drive away from the beaches of Jumeirah and Dubai Marina. These beaches are known for their pristine waters and beautiful scenery."]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": ["Damac Lagoons is an excellent place to live or invest in Dubai, offering a wide range of real estate options, top-notch amenities, and convenient transportation options. With its prime location and easy access to major highways and public transportation, the area is ideal for those who want to be close to the action but still enjoy a peaceful and relaxing lifestyle. Whether you are looking for a luxury villa, a spacious townhouse, or a modern apartment, Damac Lagoons has something for everyone."]
                }
            ]
        },
        "jlt": {
            "title": "JLT",
            "titleText": [
                "Jumeirah Lake Towers (JLT) is a large mixed-use development located in the heart of Dubai, United Arab Emirates. It is a master-planned development that consists of 80 high-rise towers, a cluster of man-made lakes, and several commercial and residential buildings.",
                "The development is designed to offer residents and visitors a high-quality lifestyle, with its focus on modern living and state-of-the-art facilities."
            ],
            "locationText": [
                "Location: Damac Lagoons is situated in the heart of Dubai, close to Dubai International Airport, Dubai Festival City, and Dubai Creek. It is easily accessible via road and public transportation, making it a convenient location for residents and commuters alike.",
                "Architecture: Damac Lagoons has a modern and contemporary design, with a mix of low-rise residential buildings and villas that offer stunning waterfront views. The area is designed to be pedestrian-friendly, with several walkways and green spaces for residents to enjoy.",
                "Real estate: Damac Lagoons offers a range of luxury residential properties, including apartments and villas, with world-class amenities and services. The area is designed to offer a unique lifestyle that combines luxury living with natural beauty and tranquility.",
                "Amenities: Damac Lagoons offers several amenities and facilities for residents, including a clubhouse, swimming pools, fitness center, and spa. The area also has several parks and open spaces for recreational activities, as well as a marina for water sports enthusiasts."
            ],
            "infrastructureText": [
                "Jumeirah Lakes Towers (JLT) is a mixed-use development located in the heart of New Dubai, close to Dubai Marina.",
                "The development consists of 80 towers, divided into 26 clusters.",
                "The community offers residential, commercial, and retail properties, with over 5000 companies operating within the area.",
                "JLT features a number of amenities including parks, running tracks, restaurants, cafes, supermarkets, and shops.",
                "The community is known for its scenic views of two championship golf courses, lakes, and Dubai Marina skyline.",
                "Public transportation is easily accessible, with two metro stations and bus services connecting JLT to the rest of Dubai."
            ],
            "images": [
                jlt,
                jlt1,
                jlt2
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "Jumeirah Lake Towers offers a wide variety of shopping, dining, and entertainment options. The area is home to several shopping centers, including the Dubai Marina Mall and the Ibn Battuta Mall. These malls offer a range of high-end and affordable stores, as well as restaurants and cafes.",
                        "For dining, residents can enjoy a diverse range of cuisines, from Middle Eastern to Asian to Western. Some popular restaurants in the area include The Cheesecake Factory, Nando’s, Wagamama, and Brothaus Bakery.",
                        "In terms of nightlife, Jumeirah Lake Towers has a thriving bar and nightclub scene. Some popular venues include Lock Stock & Barrel, McGettigan’s, and Stereo Arcade. The area also has a number of rooftop bars and lounges with stunning views of the Dubai skyline."
                    ]
                },
                {
                    "title": "Nearby Communities",
                    "texts": [
                        "Jumeirah Lake Towers is located in close proximity to several other popular areas in Dubai, such as Dubai Marina, Jumeirah Beach Residence, and Emirates Hills. These communities offer a range of amenities, attractions, and activities for residents to enjoy. There are also several transportation options available for those looking to explore other areas of the city, including the Dubai Metro, taxis, and buses.",
                        "Jumeirah Lake Towers is located near some of the best beaches in Dubai. The most popular beaches in the area are Jumeirah Beach and the public beach at Dubai Marina. Both beaches offer pristine white sand, crystal-clear water, and plenty of facilities for visitors.",
                        "Jumeirah Beach also features a range of water sports and activities, including jet skiing, parasailing, and banana boat."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "Overall, Jumeirah Lake Towers is a vibrant and dynamic area of Dubai that offers a range of amenities, attractions, and activities for residents to enjoy. With its prime location, high-quality real estate options, and abundance of amenities, Jumeirah Lake Towers is an ideal place to live or invest in. The area is popular with young professionals and families alike, and offers a diverse and multicultural community. Whether you’re looking for a place to call home or a sound investment opportunity, Jumeirah Lake Towers is definitely worth considering."
                    ]
                }
            ]
        },
        "mjl": {
            "title": "MJL",
            "titleText": [
                "Madinat Jumeirah Living is a luxurious residential development situated in the heart of Dubai.",
                "It is a gated community surrounded by lush green parks, stunning views of the Burj Al Arab, and an abundance of amenities that cater to residents’ every need."
            ],
            "locationText": [
                "Madinat Jumeirah Living is a premium residential development located in the heart of Dubai’s prestigious Jumeirah district.",
                "The development features spacious apartments, townhouses, and duplexes with high-end finishes and stunning views of the iconic Burj Al Arab. There are 60 buildings in total, with 1, 2, 3, and 4-bedroom apartments, 3 and 4-bedroom townhouses, and 4, 5, and 6-bedroom villas.",
                "The area covers over 3 million square feet.",
                "Madinat Jumeirah Living is developed by Dubai Holding, one of the region’s leading real estate developers.",
                "The community offers a range of amenities, including swimming pools, fitness centers, playgrounds, landscaped gardens, and retail outlets.",
                "Madinat Jumeirah Living is located close to several of Dubai’s major attractions, including the beach, the Dubai Mall, and the Dubai International Airport.",
                "The development is designed to offer residents a luxurious and tranquil lifestyle with easy access to all the conveniences of city living."
            ],
            "infrastructureText": [
                "Madinat Jumeirah Living offers a range of amenities, including supermarkets, restaurants, cafes, and retail stores. The area also features a community center, fitness center, and a shared pool. For healthcare facilities, the nearest hospital is Al Zahra Hospital Dubai, located a 10-minute drive away.",
                "There are several schools in and around Madinat Jumeirah Living, including Jumeirah College, GEMS Wellington International School, and Emirates International School. These schools offer a range of curriculums and programs, providing families with a variety of options for their children’s education.",
                "In terms of supermarkets, there are several options in the area, including Spinneys, Carrefour, and Waitrose. Residents can also find a range of specialty stores and boutique shops for their daily needs.",
                "Madinat Jumeirah Living offers a range of beauty and wellness services, including salons, spas, and fitness centers. Residents can enjoy a variety of outdoor activities, such as jogging and cycling."
            ],
            "images": [
                mjl,
                mjl1,
                mjl2
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "Madinat Jumeirah Living offers a range of shopping, dining, and nightlife options. One of the most popular destinations in the area is the Souk Madinat Jumeirah, which is a modern interpretation of a traditional Arabian souk. It features over 95 stores selling everything from clothing and accessories to artwork and jewelry. The souk also offers a variety of dining options, from fast food to fine dining, with cuisines ranging from Middle Eastern to international.",
                        "In terms of dining options, residents of Madinat Jumeirah Living can enjoy a variety of cuisines. Some popular restaurants in the area include Pierchic, which offers seafood and stunning views of the Arabian Gulf, and Pai Thai, which serves authentic Thai cuisine. For a more casual dining experience, residents can visit the Beachcombers restaurant, which offers Asian-inspired cuisine in a relaxed atmosphere."
                    ]
                },
                {
                    "title": "Nearby Communities",
                    "texts": [
                        "Jumeirah Lake Towers is located in close proximity to several other popular areas in Dubai, such as Dubai Marina, Jumeirah Beach Residence, and Emirates Hills. These communities offer a range of amenities, attractions, and activities for residents to enjoy. There are also several transportation options available for those looking to explore other areas of the city, including the Dubai Metro, taxis, and buses.",
                        "Jumeirah Lake Towers is located near some of the best beaches in Dubai. The most popular beaches in the area are Jumeirah Beach and the public beach at Dubai Marina. Both beaches offer pristine white sand, crystal-clear water, and plenty of facilities for visitors.",
                        "Jumeirah Beach also features a range of water sports and activities, including jet skiing, parasailing, and banana boat."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "Overall, Jumeirah Lake Towers is a vibrant and dynamic area of Dubai that offers a range of amenities, attractions, and activities for residents to enjoy. With its prime location, high-quality real estate options, and abundance of amenities, Jumeirah Lake Towers is an ideal place to live or invest in. The area is popular with young professionals and families alike, and offers a diverse and multicultural community. Whether you’re looking for a place to call home or a sound investment opportunity, Jumeirah Lake Towers is definitely worth considering."
                    ]
                }
            ]
        },
        "mudon": {
            "title": "Mudon",
            "titleText": [
                "Mudon is a private area of Dubai, where the real atmosphere of country life is recreated. It is located inside the larger Dubailand district and is a prime example of a classic low-rise building. The general developer of Mudon is Dubai Properties, a company known for its residential projects."
            ],
            "locationText": [
                "The unique location is one of the main advantages of the Mudon area. It is located on the outskirts of Dubai, away from the bustling tourist streets and attractions, which gives residents the opportunity to fully enjoy a calm and quiet holiday.",
                "At the same time, Mudon is located at the junction of two highways – Al Qudra Road and Emirates Road, which allows you to quickly get to other areas of Dubai, including interesting locations and attractions. Mudon borders other districts, including Dubai Studio City, Arabian Ranches, Remraam.",
                "Currently, there is no active public transport network in the area, but there are several bus stops on the territory of Mudon. You can also use the bus to get to the nearest metro station: the trip to it will take about 15 minutes.",
                "The ideal location significantly reduces the travel time to different locations in Dubai. Dubai Miracle Garden and Expo 2021 can be reached in just 15 minutes.",
                "It will take about a 30-minute drive to the central part of Dubai, Kite Beach and The Beach, located in JBR. The road to Dubai International Airport will take about 35 minutes."
            ],
            "infrastructureText": [
                "Mudon offers residents many opportunities for recreation and daily life. You can have a snack or spend time with your family in nearby cafes or restaurants.",
                "Fans of an active lifestyle and sports will appreciate the impressive number of sports grounds where you can play football, basketball and tennis.",
                "Also on the territory of the district there is a premium sports club Athletic Concept Fitness First Gym.",
                "Grocery stores, pharmacies, laundries, coffee shops, beauty salons are located on almost every street. On the territory of the landscaped park spaces there are equipped bicycle and jogging paths. Safe playgrounds are provided for children.",
                "Mudon district is popular among families with children, due to its proximity to educational institutions. Schools with an international curriculum and kindergartens are located near the community. Clinics and hospitals are located a few minutes from Mudon."
            ],
            "images": [
                mudon,
                mudon1,
                mudon2,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "There are no popular tourist attractions in the area, but this is a plus for a quiet and private suburban community. The main attraction of Mudon can be called a huge Central Park, whose area is over 16 hectares.",
                        "If residents want to spend time with their family and get new impressions, you can always go to see nearby attractions. A 15-minute drive separates residents from the Global Village – a unique place with a fair, attractions, regular shows, a museum, a theater and other entertainment.",
                        "IMG Worlds of Adventure Theme Park is located 20 minutes from Mudon – a real abundance of attractions and entertainment for the whole family. In 30 minutes you can reach the Al Marmoom Desert Conservation Reserve – a picturesque natural resort inhabited by birds."
                    ]
                },
                {
                    "title": "Real estate in Mudon",
                    "texts": [
                        "There is a wide range of real estate in the Mudon area, but duplexes and townhouses predominate. For large families, separate townhouses with 2-6 bedrooms are offered. There are also medium-rise complexes on the territory, where you can buy apartments with 1-3 bedrooms. For connoisseurs of maximum luxury and privacy, villas with 3-5 bedrooms are offered.",
                        "Individual houses are equipped with additional amenities: private terraces, swimming pool, private parking or garage. Residential complexes also have premium amenities, including a concierge service, a gym, a security system, recreation areas and a barbecue."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "Mudon is an attractive area for all categories of residents. Expats moving to Dubai, employees of local companies, tourists, young families with children and elderly couples prefer to settle here. The area is ideal for those who want to live not in the noisy conditions of the metropolis, but in a quiet and private community with developed infrastructure.",
                        "All this makes any property in Mudon attractive from the point of view of investment – especially villas, townhouses and duplexes."
                    ]
                }
            ]
        },
        "jvc": {
            "title": "JVC",
            "titleText": [
                "Jumeirah Village Circle is a growing community located in the heart of Dubai. The area is designed to be a self-contained and self-sufficient neighborhood with a mix of residential, commercial, and retail spaces. The area is situated close to Dubai Sports City, Dubai Motor City, and Arabian Ranches."
            ],
            "locationText": [
                "Jumeirah Village Circle (JVC) is a freehold community located in Dubai, United Arab Emirates.",
                "The community is situated in the heart of Dubai, close to major highways, shopping centers, schools, and hospitals.",
                "JVC offers a range of housing options, including apartments, villas, and townhouses.",
                "The community features a range of amenities and facilities, such as parks, sports facilities, and retail outlets.",
                "JVC is known for its family-friendly atmosphere, making it a popular choice for families and expatriates living in Dubai.",
                "The community is designed to provide a balanced lifestyle, with a focus on green spaces and a healthy environment.",
                "JVC is a relatively new community, with many of the properties built within the past decade.",
                "The community is a short drive away from popular destinations in Dubai, such as Dubai Marina, Jumeirah Beach Residence, and Mall of the Emirates."
            ],
            "infrastructureText": [
                "Jumeirah Village Circle has a range of amenities, including supermarkets, pharmacies, restaurants, and cafes. Popular supermarkets in the area include Spinneys, Carrefour, and Choithrams. There are also several parks and green spaces, including JVC Park and Circle Park.",
                "Several schools are located in and around Jumeirah Village Circle, including GEMS World Academy, JSS International School, and Dubai British School.",
                "Healthcare facilities in the area include Mediclinic Parkview Hospital and Aster Clinic. Jumeirah Village Circle is well connected to the rest of Dubai via Sheikh Mohammed Bin Zayed Road, Al Khail Road, and Hessa Street.",
                "Public transportation options include buses and taxis. The nearest metro station is the Mall of the Emirates metro station, which is around 15 minutes away by car.",
                "Jumeirah Village Circle is located around 20-25 minutes away from Dubai Marina, Jumeirah Beach, and Downtown Dubai.",
                "Other major landmarks and attractions such as Burj Khalifa, Dubai Mall, and Dubai International Airport can be reached within a 25-30 minute drive."
            ],
            "images": [
                jvc,
                jvc1,
                jvc2
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "Jumeirah Village Circle offers residents a wide variety of shopping, dining, and entertainment options. There are several supermarkets and grocery stores in the area, including Spinneys, Carrefour, and Choithrams, providing residents with easy access to fresh produce and other essentials.",
                        "There are also many restaurants offering a range of cuisines, from Italian to Indian, and several cafes and bakeries.",
                        "For nightlife, there are several bars and pubs in the area, including Folly by Nick & Scott and The Taphouse, which offers craft beers and live music. There are also several entertainment venues in the area, including cinemas and the Dubai Miracle Garden, which is the world’s largest flower garden and a must-visit attraction in the city. Jumeirah Village Circle is conveniently located near some of Dubai’s most popular beaches, including Jumeirah Beach, which is only a 20-minute."
                    ]
                },
                {
                    "title": "Nearby Communities",
                    "texts": [
                        "There are plenty of outdoor activities available in Jumeirah Village Circle, including parks, sports facilities, and community centers. One of the most popular attractions in the area is the Circle Mall, which offers a range of shopping and entertainment options for residents and visitors alike.",
                        "Other notable landmarks in the area include the Dubai Autodrome, a world-class race track that hosts various events throughout the year, and the Dubai Butterfly Garden, which is home to over 15,000 butterflies and other insects.",
                        "Jumeirah Village Circle is surrounded by several other communities, including Jumeirah Park, Jumeirah Village Triangle, and Dubai Sports City."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "In conclusion, Jumeirah Village Circle is a vibrant and dynamic community that offers residents a range of amenities and attractions. From its prime location near some of Dubai’s most popular beaches to its variety of shopping, dining, and entertainment options, there’s something for everyone in this thriving community.",
                        "With a range of real estate options available, Jumeirah Village Circle is also an attractive investment opportunity for those looking to make a smart investment in Dubai’s booming real estate market."
                    ]
                }
            ]
        },
        "bluewaters": {
            "title": "Bluewaters",
            "titleText": [
                "Bluewaters Island is a luxurious artificial island, part of the prestigious coastal area of Dubai Marina. This large-scale project was created by a large developer Meraas, and in a short period of time, this man-made island became a real concentration of elite residential and commercial real estate."
            ],
            "locationText": [
                "The island has a unique location - it is located just 400 meters from Dubai Marina and the coastal line of the district, but at the same time, it is a separate territory that is connected to the mainland by bridges.",
                "Despite its privacy and isolation of the territory, every resident of Bluewaters Island has the opportunity to quickly reach any part of Dubai.",
                "From the island, there is a road leading to the main highway of the emirate Sheikh Zayed Road, which connects all areas.",
                "The project also involves the construction of a cable car that will connect Dubai Marina and Bluewaters Island and significantly increase the tourist potential of the island.",
                "For residents and guests of the city without their own cars, there is a pedestrian zone: a few minutes of a pleasant walk with amazing views of the city and the Arabian Gulf, and you get to the mainland Dubai Marina."
            ],
            "infrastructureText": [
                "The peculiarity of the Bluewaters Island infrastructure is the division of the island's territory into separate zones.",
                "There are residential, entertainment, beach, shopping, and hotel areas that complement each other and create an ideal residential and entertainment space for residents and tourists.",
                "The shopping and entertainment area of the district includes more than 200 restaurants, cafes, bars, and shops. There are no large shopping centers on the island: only exclusive boutiques and shops.",
                "However, shopping lovers will not need much time to get to the largest Dubai Marina Mall.",
                "The territory of the island is perfect for recreation and accommodation of families with children: there are children's play areas and swimming pools that diversify the leisure of every child.",
                "There are no preschools and school facilities on Bluewaters Island, but the road to the nearest schools and kindergartens will take no more than 7-10 minutes."
            ],
            "images": [
                bluewaters,
                bluewaters1,
                bluewaters2,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "The main attraction of the island is the Dubai Eye, marked in the Guinness Book of Records as the world's tallest wheel. Its height is 210 meters, and every visitor can enjoy stunning views of the Arabian Gulf, the coastline, and the emirate itself.",
                        "A famous location on Bluewaters Island is the Madame Tussauds Wax Museum, which is also the first Tussauds museum in the Middle East.",
                        "A landmark can also be called well-equipped beach lines: a comfortable coast with beach clubs exceeds the expectations of each guest, offering a calm and peaceful holiday."
                    ]
                },
                {
                    "title": "Real estate on Bluewaters Island",
                    "texts": [
                        "The residential cluster on the island is represented mainly by low-rise complexes. Buyers and investors are offered classic apartments with 1-3 bedrooms, penthouses and townhouses. Villas are especially popular, due to the limited offers.",
                        "At the service of residents - an impressive set of premium amenities: swimming pools, well-equipped recreation areas, modern gyms and sports grounds, round-the-clock concierge services, playgrounds, cinemas, SPA and fitness centers."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "Artificial islands in Dubai are one of the most attractive locations in terms of real estate investment. Limited area and a small number of offers make real estate a highly profitable and liquid asset.",
                        "Combined with the developed tourist and entertainment infrastructure that distinguishes Bluewaters Island, the limited offers significantly increase the investment potential of real estate. At the same time, the location is ideal not only for investment but also for personal living of connoisseurs of real comfort and exclusivity."
                    ]
                }
            ]
        },
        "central-park": {
            "title": "Central Park",
            "titleText": [
                "Central Park is a community located inside one of the central districts of the Emirate, Mohammed bin Rashid City. This is an elite residential community designed and built on the principle of 'a city within a city': low-rise buildings provide a comfortable suburban lifestyle while offering residents developed infrastructure."
            ],
            "locationText": [
                "Central Park is located at the junction of the main thoroughfares, which provides quick access to any areas of Dubai.",
                "Being in the central part of the emirate, Central Park residents can use most of the major highways: Sheikh Mohammed Bin Zayed Road, Al Khail Road, Al Meydan Road, Al Quoz 2, Muscat Street.",
                "The area is perfect for both owners of private cars and residents who prefer to travel by public transport.",
                "The abundance of bus stops and the proximity to metro stations allow you to save time on trips to business and tourist areas of the city.",
                "The road to Downtown Dubai, Business Bay, Dubai Design District will take about 10-15 minutes.",
                "It will take the same amount of time to get to Dubai International Airport.",
                "A 20-30-minute drive will take you to the artificial Palm Jumeirah Island and the Dubai Marina coastal area."
            ],
            "infrastructureText": [
                "Within Central Park and the surrounding areas, there is everything that a modern person needs for a comfortable life.",
                "Grocery stores, cafes, restaurants and snack bars, playgrounds and sports grounds, beauty salons and fitness centers are all located within walking distance.",
                "Special attention is paid to sports infrastructure.",
                "Within walking distance from the community, there are sports and wellness centers, as well as a huge park with cycling and running tracks.",
                "The social infrastructure is also at a high level.",
                "Within a 10-minute drive, there are international schools, shopping malls, kindergartens, hospitals, medical centers and polyclinics."
            ],
            "images": [
                centralPark,
                centralPark1,
                centralPark2,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "There are no tourist attractions in the area itself: the concept of the community is based on the format of a quiet suburban life. At the same time, the residents of Central Park are not deprived of the opportunity to enjoy the popular locations of Dubai.",
                        "A 5-10-minute drive will take you to the largest shopping malls, the famous Meydan Racecourse, the popular Dubai Hills Golf Club. After spending 10-15 minutes on the road, Central Park residents will find themselves in the central districts of Dubai (Downtown Dubai, Business Bay, and others), where the key attractions of the emirate are located."
                    ]
                },
                {
                    "title": "Real estate in Central Park",
                    "texts": [
                        "The Central Park area is dominated by comfortable townhouses with 3-5 bedrooms, whose area can reach 500 square meters. There is also a medium-rise building on the territory, where investors and buyers can purchase apartments.",
                        "Private residences differ not only in layout and configuration but also in additional amenities: they can be equipped with private pools, fully furnished, premium appliances."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "The developed infrastructure and transport network make the area attractive for potential tenants. Thanks to the complex development, Central Park becomes interesting for residents counting on short-term and long-term rentals.",
                        "On average, the potential profitability of real estate in Central Park is at the level of 7-8%."
                    ]
                }
            ]
        },
        "damac-hills": {
            "title": "Damac Hills",
            "titleText": [
                "Damac Hills is a prestigious and popular district of Dubai, one of the largest projects of the famous developer Damac Properties. It is a large-scale and multifunctional community with a developed commercial and social infrastructure. The area offers a very wide selection of real estate, which is suitable for buyers."
            ],
            "locationText": [
                "The Damac Hills district has a strategically advantageous location - it is surrounded by developed communities, has access to the main highways of Dubai and tourist attractions.",
                "Communities such as Arabian Ranches, Dubai Motor City, Mudon, Dubai Investments Park, Dubai Sports City are located next to Damac Hills. The trip to them will take no more than 5-10 minutes. This location makes Damac Hills ideal for families, employees of local companies, expats, and other categories of buyers.",
                "There are regular bus routes throughout the area, allowing you to quickly get to the right places. There is no subway station in the district - it is located 20 minutes away. The trip to popular tourist areas will also not take much time: Downtown Dubai and Dubai Marina are only 25-30 minutes away."
            ],
            "infrastructureText": [
                "Dubai Hills Estate is positioned as a quiet, peaceful and family-oriented area, which is reflected in its infrastructure.",
                "The main part of the district's infrastructure is a 7-kilometer boulevard, where retail outlets, entertainment facilities, supermarkets, cafes and restaurants are located: every resident will be able to find something to their liking.",
                "The area is very popular among families with children: there are schools and kindergartens located within walking distance.",
                "There are also educational institutions in the surrounding areas, including institutions for higher education.",
                "Polyclinics, medical centers, hospitals are within walking distance from the northern and southern parts of Dubai Hills. The developer paid special attention to the arrangement of sports grounds: on the territory of the district there are open and closed gyms, fitness centers, tennis courts and football fields."
            ],
            "images": [
                damacHills,
                damacHills1,
                damacHills2,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "The main attraction of Dubai Hills is the prestigious 18-hole golf course - one of the world's most famous courses, ideal for both craftsmen and beginners.",
                        "There are many park spaces in the area: landscaped areas will be an excellent solution for family outdoor recreation, picnics and barbecues. A large shopping center Dubai Hills Mall is also located in the community.",
                        "Dubai Hills is a worthy example of a classic country community. There are no famous tourist attractions here, which makes it an attractive option for life."
                    ]
                },
                {
                    "title": "Real estate in Damac Hills",
                    "texts": [
                        "Dubai Hills offers a wide selection of real estate: the objects differ in area, format and cost. This variability allows you to choose housing for a certain budget and taste.",
                        "Apartments with 1-3 bedrooms are common in medium-storey residential complexes. Those who want to fully immerse themselves in the atmosphere of country life can see options with functional townhouses. The main part of the development of Dubai Hills is luxury villas - the best solution for personal living or investment."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "One of the main features of the Dubai Hills Estate area is the huge popularity of residential projects. Real estate here is bought by locals, expats, investors and people who want to move to Dubai forever. Such demand affects the cost, which has increased by almost 10% in less than a year. Confident growth rates prove the high investment potential of real estate in Dubai Hills.",
                        "Real estate in Dubai Hills is great for generating income from risk-free long-term rentals. At the same time, developers try to master the territory of the district as much as possible."
                    ]
                }
            ]
        },
        "dubai-hills": {
            "title": "Dubai Hills",
            "titleText": [
                "Dubai Hills is one of the new prestigious areas of Dubai, having all the advantages of country life and located in close proximity to the central part of the emirate. It is part of Mohammed Bin Rashid City, a multifunctional and developed area. The large green area of Dubai Hills is ideal for people who want to live away from the city hustle."
            ],
            "locationText": [
                "Representing a community within the MBR City district, Dubai Hills Estate has a favorable location: you can get to it quickly from any part of Dubai, as well as vice versa. Excellent transport accessibility is ensured by the proximity to the highway that runs along the area.",
                "Dubai Hills is divided into three separate zones, and each of them has its own characteristics. The first zone is the central part with a picturesque golf course, which is surrounded by prestigious mansions and villas. The second zone is a medium-rise building of residential complexes, commercial facilities and a promenade. The third zone is a denser building, consisting of villas and townhouses.",
                "According to the plans of developers to equip transport infrastructure, subway stations will be built on the territory of Dubai Hills Estate in the near future.",
                "Public transport stops are also located in the immediate vicinity of the area. Car owners will be able to easily reach famous areas of Dubai: the road to Downtown Dubai will take about 20 minutes, the trip to Dubai International Airport will take about 25 minutes, and the journey to the artificial island of Palm Jumeirah will take about 35 minutes."
            ],
            "infrastructureText": [
                "Dubai Hills Estate is positioned as a quiet, peaceful and family-oriented area, which is reflected in its infrastructure.",
                "The main part of the district's infrastructure is a 7-kilometer boulevard, where retail outlets, entertainment facilities, supermarkets, cafes and restaurants are located: every resident will be able to find something to their liking.",
                "The area is very popular among families with children: there are schools and kindergartens located within walking distance.",
                "There are also educational institutions in the surrounding areas: even including institutions for higher education.",
                "Polyclinics, medical centers, hospitals are within walking distance from the northern and southern parts of Dubai Hills. The developer paid special attention to the arrangement of sports grounds: on the territory of the district there are open and closed gyms, fitness centers, tennis courts and football fields."
            ],
            "images": [
                dubaiHills,
                dubaiHills1,
                dubaiHills2,
            ],
            "blocks": [
                {
                    "title": "Attractions",
                    "texts": [
                        "The main attraction of Dubai Hills is the prestigious 18-hole golf course - one of the world's most famous courses, ideal for both craftsmen and beginners.",
                        "There are many park spaces in the area: landscaped areas will be an excellent solution for family outdoor recreation, picnics and barbecues. A large shopping center Dubai Hills Mall is also located in the community.",
                        "Dubai Hills is a worthy example of a classic country community. There are no famous tourist attractions here, which makes it an attractive option for life."
                    ]
                },
                {
                    "title": "Nearby Communities",
                    "texts": [
                        "Dubai Hills offers a wide selection of real estate: the objects differ in area, format and cost. This variability allows you to choose housing for a certain budget and taste.",
                        "Apartments with 1-3 bedrooms are common in medium-storey residential complexes. Those who want to fully immerse themselves in the atmosphere of country life can see options with functional townhouses. The main part of the development of Dubai Hills is luxury villas - the best solution for personal living or investment."
                    ]
                },
                {
                    "title": "Investment attractiveness",
                    "texts": [
                        "One of the main features of the Dubai Hills Estate area is the huge popularity of residential projects. Real estate here is bought by locals, expats, investors and people who want to move to Dubai forever. Such demand affects the cost, which has increased by almost 10% in less than a year. Confident growth rates prove the high investment potential of real estate in Dubai Hills.",
                        "Real estate in Dubai Hills is great for generating income from risk-free long-term rentals. At the same time, developers try to master the territory of the district as much as possible."
                    ]
                }
            ]
        }
    }

    const team = [
        {
            "image": annaHorshunovaName, "name": "Anna Horshunova", "position": "Real estate broker", "qr": annaHorshunova,
            "social": {
                facebook: "https://www.facebook.com/annagorshunova?mibextid=LQQJ4d"
            }
        },
    ]

    const { title, titleText, locationText, infrastructureText, images, blocks } = pageTexy[id];
    const [modalText, setModalText] = useState({
        tittleText: "",
        buttonText: ""
    });

    const closeModal = () => {
        setShowModal(false);
    };

    function copy(text) {
        navigator.clipboard.writeText(text)
    }
    return (
        <div className="areas-page-wrapper">
            <Header />
            <RequestModal showModal={showModal} closeModal={closeModal} modalText={modalText}
                image={annaHorshunovaName} />
            <div className="areas-page-container">
                <div className="back-container">
                    <Link to={"/areas"}>
                        <div className="back">
                            <img src={arrowLeft} alt="" />
                            Back
                        </div>
                    </Link>
                    <div onClick={() => copy("http://propart.ae/areas")} className="share">
                        <img src={share} alt="" />
                    </div>
                </div>

                <div className="main-content">
                    <div className="content-left">
                        <div className="block">
                            <div className="big-title">{title}</div>
                            <div className="description">
                                <div className="text">
                                    {titleText.map((text, index) => (
                                        <div key={index}>{text}</div>
                                    ))}
                                </div>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${images[0]})` }}
                                ></div>
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${images[1]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">{t("location-features")}</div>
                            <div className="description">
                                {locationText.map((text, index) => (
                                    <div className="text" key={index}>
                                        {text}
                                    </div>
                                ))}
                                <div
                                    className="image"
                                    style={{ backgroundImage: `url(${images[2]})` }}
                                ></div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="title">{t("infrastructure")}</div>
                            <div className="description">
                                {infrastructureText.map((text, index) => (
                                    <div className="text" key={index}>
                                        {text}
                                    </div>
                                ))}
                                <div className="broker">
                                    <div className="image">
                                        <img src={annaHorshunovaName} alt="" />
                                    </div>
                                    <div className="get-consult-form">
                                        <div className="content">
                                            <div className="title-description">
                                                <div className="title">
                                                    <div>Real estate broker</div>
                                                    <div>Anna Horshunova</div>
                                                </div>
                                                <div className="description">
                                                    Off-plan properties, Investments, Commercial property, Mortgage
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                <div className="button-white" onClick={() => window.open("tel:+971521038793")}>Contact agent</div>
                                                <div className="button-brown" onClick={() => {
                                                    setModalText({ tittleText: t("modalHeader"), buttonText: t("modalButton") })
                                                    setShowModal(true)
                                                }}>Request</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="content-right">
                        {images.slice(0, 3).map((image, index) => (
                            <div
                                key={index}
                                className="image"
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                        ))}
                        <div className="broker">
                            <div className="image">
                                <img src={annaHorshunovaName} alt="" />
                            </div>
                            <div className="get-consult-form">
                                <div className="content">
                                    <div className="title-description">
                                        <div className="title">
                                            <div>Real estate broker</div>
                                            <div>Anna Horshunova</div>
                                        </div>
                                        <div className="description">
                                            Off-plan properties, Investments, Commercial property, Mortgage
                                        </div>
                                    </div>
                                    <div className="buttons">
                                        <div className="button-white" onClick={() => window.open("tel:+971521038793")}>Contact agent</div>
                                        <div className="button-brown" onClick={() => {
                                            setModalText({ tittleText: t("modalHeader"), buttonText: t("modalButton") })
                                            setShowModal(true)
                                        }}>Request</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lower-container">
                    {blocks.map((block, index) => (
                        <div className="block" key={index}>
                            <div className="title">{block.title}</div>
                            {block.texts.map((text, textIndex) => (
                                <div key={textIndex} className="description">
                                    <div className="text">{text}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="get-consult-box">
                    <GetConsult></GetConsult>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default AreaPage