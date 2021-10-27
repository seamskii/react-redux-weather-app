import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherWeek } from "../WeatherWeek/WeatherWeek";
import { Favorites } from "../Favorites/Favorites";
import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchWeekData } from "../mockApi";
import { Layout, PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import styles from "./pp.module.css";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const { Header, Content, Footer } = Layout;

export const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [temperatureType, setTemperatureType] = useState("fahrenheit");
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  console.log("favouritesLeangh", favourites);

  const getGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        console.log(position.coords.latitude);
      });
    } else console.log("geoposition is not supported");
  };

  const toggleTemp=()=>{
    const Fahrenheit="fahrenheit";
    const Celsius="celsius";
    if(temperatureType === Fahrenheit){
      setTemperatureType(Celsius);
    }else{
      setTemperatureType(Fahrenheit);
      
    }
  }

  return (
  
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router >
          <Layout >
            <div className="site-page-header-ghost-wrapper">
              <PageHeader
                ghost={false}
                title="Hero Weather Task"
                extra={[
                  <Button  key="5" onClick={() => themeToggle()}>
                    Change Theme
                  </Button>,
                  <Button  key="4">
                    <Link to="/">Home</Link>
                  </Button>,
                  <Button key="3" type="primary">
                    <Link to="/favorites">Favorites</Link>
                  </Button>,
                  <Button
                    key="2"
                    type="primary"
                    shape="round"
                    onClick={() => getGeolocation()}
                  >
                    Geolocation
                  </Button>,
                  <Button
                    key="1"
                    type="primary"
                    shape="round"
                    onClick={() =>toggleTemp()}
                  >
                    Celsius/Fahrenheit
                  </Button>,
                ]}
              ></PageHeader>
            </div>

            <Content className={styles.lightTheme}
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <div>
                <Switch>
                  <Route path="/" exact>
                    <WeatherWeek
                      setFavourites={setFavourites}
                      favourites={favourites}
                      temperatureType={temperatureType}
                    />
                  </Route>
                  <Route path="/favorites">
                    <Favorites
                      likeCity={favourites}
                      temperatureType={temperatureType}
                    />
                  </Route>
                </Switch>
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              БЛАГОДАРЮ ТЕБЯ, ВЛАДЫКА ЭДУАРД!
            </Footer>
          </Layout>
        </Router>
      </StyledApp>
    </ThemeProvider>

  );
};
