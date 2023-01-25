import React from "react";
import "./Banner.css";
import Btn from "../Btn/Btn";
import banner from "../../assets/images/nick-hang-nU4YvCaDb4Y-unsplash.webp";
import bannerMobile from "../../assets/images/Mobilenick-hang-nU4YvCaDb4Y-unsplash.webp";
import useMediaQuery from "../../utils/useMediaQuery";

const datas = [
  {
    id: "1B",
    title: "Protégeons notre maison",
    subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    btnlink: "#contact",
    btn: "Nous rejoindre ?",
  },
];

function Banner() {
  /* Media queries. */
  const matches = useMediaQuery("(min-width: 600px)");
  return (
    <div className="banner">
      {datas.map(({ id, title, subtitle, btnlink, btn }) => {
        return (
          <div key={id} className="banner-container">
            <div className="banner__img">
              {/* Changement de contenu <img /> si la page est supérieur à 600px. */}
              {matches ? (
                <img src={banner} alt="Bois" />
              ) : (
                <img src={bannerMobile} alt="Bois" />
              )}
            </div>
            <div className="banner__content">
              <div className="banner-title">
                <h1>{title}</h1>
              </div>
              <span className="banner-line"></span>
              <div className="banner-subtitle">
                <h2>{subtitle}</h2>
              </div>
              <Btn link={btnlink} btn={btn} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Banner;
