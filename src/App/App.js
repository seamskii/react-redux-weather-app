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
  
  const [favourites, setFavourites] = useState([]);
  const [temperature, setTemperature] = useState(false);
  // console.log("temperature",temperature);
   
  return (
    <div>
      <Router>
        <Layout>
          <div className="site-page-header-ghost-wrapper">
            <PageHeader
              ghost={false}
              title="Hero Weather Task"
              extra={[
                <Button key="3">
                  <Link to="/">Home</Link>
                </Button>,
                <Button key="2" type="primary">
                  <Link to="/favorites">Favorites</Link>
                </Button>,        
                <Button key="1" type="primary" shape="round"  onClick={()=>setTemperature(!temperature)}>
                  Celsius/Fahrenheit
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
          <WeatherWeek setFavourites={setFavourites} favourites={favourites} temperature={temperature} />
          </Route>
          <Route path="/favorites">
          <Favorites likeCity={favourites} temperature={temperature}/>
          </Route>
          
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

