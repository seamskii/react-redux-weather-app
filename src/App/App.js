import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import "./App.css";
import "./theme.light.less";
import "./theme.dark.less";
import {
  HeartFilled,
  HomeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { WeatherWeek } from "../WeatherWeek/WeatherWeek";
import { Favorites } from "../Favorites/Favorites";
import { Layout, PageHeader, Button, Typography } from "antd";
import { Link } from "react-router-dom";
// import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { switChcelsius, switchFahrenheit } from "../actions/indexTemp";


const { Header, Content, Footer } = Layout;

const themeTexts = {
  light: {
    buttonText: "🌔",
  },
  dark: {
    buttonText: "⛅",
  },
};

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);
  const [currentLocationKey, setCurrentLocationKey] = useState("215854");
  const [location, setLocation] = useState("Tel Aviv");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const temperatureType = useSelector((state) => state.temperatureType);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const toggleTemp = () => {
    const Fahrenheit = "fahrenheit";
    const Celsius = "celsius";
    if (temperatureType === Fahrenheit) {
      dispatch(switChcelsius(Celsius));
    } else {
      dispatch(switchFahrenheit(Fahrenheit));
    }
  };

  return (
    <Router>
      <Layout>
        {/* <div
          className="site-page-header-ghost-wrapper"
          className={styles.buttons}
        > */}
          <PageHeader
            ghost={false}
            title="Herolo Weather Task"
            extra={[
              <Button key="6" shape="round" onClick={changeTheme}>
                {themeTexts[theme].buttonText}
              </Button>,
              <Button key="5" shape="round">
                <Link to="/">
                  <HomeOutlined />
                </Link>
              </Button>,
              <Button key="4" shape="round">
                <Link to="/favorites">
                  <HeartFilled /> {counter.length}
                </Link>
              </Button>,
              <Button
                key="3"
                shape="round"
                onClick={() => dispatch({ type: "GEOPOSITION_ON" })}
              >
                <EnvironmentOutlined />
              </Button>,
              <Button key="2" shape="round" onClick={() => toggleTemp()}>
                ℃🌡℉
              </Button>,
            ]}
          ></PageHeader>
        {/* </div> */}

        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div>
            <Switch>
              <Route path="/" exact>
                <WeatherWeek
                  setError={setError}
                  error={error}
                  theme={theme}
                  currentLocationKey={currentLocationKey}
                  setCurrentLocationKey={(currentLocationKey) =>
                    setCurrentLocationKey(currentLocationKey)}
                    setLocation={(location)=>setLocation(location)}
                    location={location}
                />
              </Route>
              <Route path="/favorites">
                <Favorites setError={setError} error={error} />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
        <a style={{fontSize:"30px"}} href="https://github.com/seamskii/react-redux-weather-app">GitHub</a>
        </Footer>
      </Layout>
    </Router>
  );
};
