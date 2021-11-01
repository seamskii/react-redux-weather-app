import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherWeek } from "../WeatherWeek/WeatherWeek";
import { Favorites } from "../Favorites/Favorites";
import { useState } from "react";
import { Layout, PageHeader, Button } from "antd";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { useSelector, useDispatch } from "react-redux";
import { switChcelsius, switchFahrenheit } from "../actions/indexTemp";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const { Header, Content, Footer } = Layout;

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);

  const temperatureType = useSelector((state) => state.temperatureType);
  const dispatch = useDispatch();

  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

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
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Layout>
            <div className="site-page-header-ghost-wrapper">
              <PageHeader
                ghost={false}
                title="Herolo Weather Task"
                extra={[
                  <Button key="5">
                    <Link to="/">Home</Link>
                  </Button>,
                  <Button key="4" type="primary">
                    <Link to="/favorites">Favorites</Link>
                  </Button>,
                  <Button
                    key="3"
                    type="primary"
                    shape="round"
                    onClick={() => dispatch({ type: "GEOPOSITION_ON" })}
                  >
                    Geolocation
                  </Button>,
                  <Button
                    key="2"
                    type="primary"
                    shape="round"
                    onClick={() => toggleTemp()}
                  >
                    Celsius/Fahrenheit
                  </Button>,
                  <Button
                    key="1"
                    type="primary"
                    shape="round"
                    onClick={() => themeToggle()}
                  >
                    Change Theme
                  </Button>,
                ]}
              ></PageHeader>
            </div>

            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 64 }}
            >
              <div>
                <Switch>
                  <Route path="/" exact>
                    <WeatherWeek setError={setError} error={error} />
                  </Route>
                  <Route path="/favorites">
                    <Favorites setError={setError} error={error} />
                  </Route>
                </Switch>
              </div>
            </Content>

            <Footer style={{ textAlign: "center" }}>
              <h3 style={{color:"red",fontSize:"20px"}}>Avileble Cities!!</h3>
              <h3 style={{color:"red",fontSize:"23px"}}>tel-aviv , haifa , elat , moscow , london , berlin</h3>
            </Footer>
          </Layout>
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
};
