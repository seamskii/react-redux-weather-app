import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherWeek } from "../WeatherWeek/WeatherWeek";
import { Favorites } from "../Favorites/Favorites";
import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import { LocationSearch } from "../LocationSearch/LocationSearch";
import { fetchWeekData } from "../mockApi";
import { Layout, PageHeader, Button } from "antd";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <div className="site-page-header-ghost-wrapper">
            <PageHeader
              ghost={false}
              title="Hero Weather Task"
              extra={[
                <Button key="2">
                  <Link to="/">Home</Link>
                </Button>,
                <Button key="1" type="primary">
                  <Link to="/favorites">Favorites</Link>
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
                <Route path="/" exact component={WeatherWeek} />
                <Route path="/favorites" component={Favorites} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            БЛАГОДАРЮ ТЕБЯ, ВЛАДЫКА ЭДУАРД!
          </Footer>
        </Layout>
      </Router>
    </div>
  );
};
