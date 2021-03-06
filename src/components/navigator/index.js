import { useState, useEffect } from "react";
import { Nav, NavLink, AntdSelect, MobileIcon, NavMenu } from "./index.style";
import { Twirl as Hamburger } from "hamburger-react";

import logoTip from "../../assets/icons/logo.svg";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Select } from "antd";
import "antd/dist/antd.css";
export default function Navbar() {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { Option } = Select;
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const handleClick = () => {
    setClick(!click);
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    // localStorage.setItem("language", language);
};

  return (
    <div>
      <Nav>
        <NavLink to="/">
          <img src={logoTip} alt="registon" className="logo-image" />
        </NavLink>
        <MobileIcon onClick={handleClick} click={click}>
          <Hamburger
            rounded
            direction="right"
            size={24}
            toggled={click}
            toggle={setClick}
          />
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavLink href="#functions">
            <button className="nav-btn">{t("navigation.functions")}</button>
          </NavLink>
          <NavLink href="#customers">
            <button className="nav-btn">{t("navigation.customers")}</button>
          </NavLink>
          <NavLink href="#contact">
            <button className="nav-btn">{t("navigation.request")}</button>
          </NavLink>
          <NavLink href="#contact">
            <button className="nav-btn">{t("navigation.contacts")}</button>
          </NavLink>
          <NavLink to="/sign-up">
            <AntdSelect
              className="antd-select"
              defaultValue={
                localStorage.getItem("i18nextLng")
                  ? localStorage.getItem("i18nextLng")
                  : "uz"
              }
              style={{ width: 120 }}
              onChange={changeLanguage}
            >
              <Option value="uz">Uzbek</Option>
              <Option value="en">English</Option>
            </AntdSelect>
          </NavLink>
        </NavMenu>
      </Nav>
    </div>
  );
}
