import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import {WeatherWeek} from "../WeatherWeek/WeatherWeek"
import { Favorites } from "../Favorites/Favorites";

export const App = () => {
  return(
   
         <Router>
      <div>
      <Switch>
        <Route path="/" exact component={WeatherWeek}/>
        <Route path="/favorites" component={Favorites}/>
        </Switch>
      </div>
    </Router>
  );
};

