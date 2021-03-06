import {  useState, useEffect, useCallback } from "react";
import {
  MobileViewProvider,
  MobileContent,
  BackContent,
} from "./style";
import "./style.css";
import Front from "../../assets/images/mobile/inner_slider.png";
import FrontThree from "../../assets/images/mobile/orders.png";
import { useTranslation } from "react-i18next";
export default function MobileView() {
  const [offset, setOffset] = useState(0);
  const [transform, setTransform] = useState(0);
  const {t} = useTranslation()

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const reveal = useCallback(() => {
    let revals = document.querySelectorAll(".image-wrap");
    let elementTop = revals[0].getBoundingClientRect().top;
    if (elementTop < 400 && elementTop > -800) {
      setTransform((elementTop - 400) / 5);
    }
  }, [transform]);

  window.addEventListener("scroll", reveal);

  return (
    <MobileViewProvider className="reveal-animation">
      <MobileContent className="container my-5 py-5">
        <h2>
          {t("mobile.mobile_application_info")}
        </h2>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <BackContent className="back-content">
              <div className="image-wrap">
                <img
                  src={Front}
                  alt="front"
                  className="front"
                  style={{ transform: `translateY(${transform}px)` }}
                />
              </div>
            </BackContent>
          </div>
          <div
            className="col-lg-4 col-md-6 mb-4"
            style={{ transform: "translateY(80px)" }}
          >
            <BackContent className="back-content">
              <div className="image-wrap">
                <img
                  src={Front}
                  alt="front"
                  className="front"
                  style={{ transform: `translateY(${transform}px)` }}
                />
              </div>
            </BackContent>
          </div>
          <div className="col-lg-4 col-md-6">
            <BackContent className="back-content">
              <div className="image-wrap">
                <img
                  src={FrontThree}
                  alt="front"
                  className="front"
                  style={{ transform: `translateY(${transform}px)` }}
                />
              </div>
            </BackContent>
          </div>
        </div>
      </MobileContent>
      {/* <div className="container scroll-animation">
        <h1>Har bir hodim uchun qulay ishchi oynasi</h1>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 mt-5">
            <div className="image-wrapper">
              <img src={FirstPanel} alt="first" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 mt-5">
            <div className="image-wrapper">
              <img src={SecondPanel} alt="second" />
            </div>
          </div>
        </div>
      </div> */}
    </MobileViewProvider>
  );
}
