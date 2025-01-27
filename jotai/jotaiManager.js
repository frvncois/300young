const { atom } = require("jotai");

export const locationLifeStyleInitialData = [
  {
    id: 1,
    title: "Location",
    image: "/assets/location.webp",
    text: "Welcome to the vibrant heart of Montreal, a dynamic urban environment that merges city buzz with unparalleled cultural richness. Proximity to the Lachine Canal offers a peaceful escape from the city’s hustle and bustle. With its artistic festivals, cultural events, and lively nightlife, the downtown neighborhood promises an incomparable living experience for those seeking the urban experience while enjoying easy access to services and entertainment. Welcome to the neighborhood where city living comes to life.",
    shape: "location-clip-path",
    bgColor: "#E8E1CF",
  },
  {
    id: 2,
    title: "Lifestyle",
    image: "/assets/life-style.webp",
    text: "Living in Downtown Montreal means embracing and enjoying a dynamic and stimulating urban lifestyle. Start your days with a coffee at one of the many local bakeries before exploring the historic streets of Old Montreal. Evenings come alive here with a variety of restaurants offering international cuisine, and Montreal’s legendary nightlife will thrill you with its exciting bars and clubs. Proximity to the Quartier des Spectacles ensures privileged access to artistic festivals and live performances throughout the year.",
    shape: "lifeStyle-clip-path",
    bgColor: "#E8E1CF",
  },
];

export const spacesInitialData = [
  {
    id: 1,
    title: "Our spaces",
    image: "/assets/location.webp",
    text: "Découvrez nos superbes condos à louer, parfaitement agencés, avec un design moderne et pratique, idéal pour établir un espace de vie confortable et accueillant.",
    shape: "location-clip-path",
    bgColor: "#E8E1CF",
  },
  {
    id: 2,
    title: "Lifestyle",
    image: "/assets/life-style.webp",
    text: "Living in Downtown Montreal means embracing and enjoying a dynamic and stimulating urban lifestyle. Start your days with a coffee at one of the many local bakeries before exploring the historic streets of Old Montreal. Evenings come alive here with a variety of restaurants offering international cuisine, and Montreal’s legendary nightlife will thrill you with its exciting bars and clubs. Proximity to the Quartier des Spectacles ensures privileged access to artistic festivals and live performances throughout the year.",
    shape: "lifeStyle-clip-path",
    bgColor: "#E8E1CF",
  },
];


export const translate = atom({});
export const checkMobile = atom(false);
export const locationLifeStyleInData = atom([...locationLifeStyleInitialData]);
export const spacesData = atom([...spacesInitialData]);
