import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../components/ThemeProvider";
import Switch from "react-switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useContext(ThemeContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };

  return (
    <Root>
      <h1>Toggle Theme</h1>
      <Switch
        checked={themeMode === "lightTheme" ? true : false}
        className="test"
        height={50}
        width={120}
        activeBoxShadow="0 0 2px 3px #3bf"
        onColor="#00bfff"
        offColor="#808080"
        checkedIcon={
          <WbSunnyIcon
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 35,
              paddingLeft: 10,
              color: "yellow",
            }}
            color={themeMode === "lightTheme" ? "white" : "grey"}
            className="light"
          />
        }
        uncheckedIcon={
          <NightsStayIcon
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 35,
              paddingLeft: 24,
              color: "white",
            }}
            color={themeMode === "darkTheme" ? "blue" : "blue"}
            className="dark"
          />
        }
        onChange={handleThemeChange}
      />
    </Root>
  );
};

export default ThemeSwitcher;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .custom-classname .react-toggle--checked .react-toggle-track {
    background-color: red;
    height: 200px;
    width: 200px;
    padding: 30px;
  }
`;
