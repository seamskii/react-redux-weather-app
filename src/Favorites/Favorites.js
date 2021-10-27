import { useEffect, useState } from "react";
import { WeatherDay } from "../WeatherDay/WeatherDay";
import styles from "./favorites.module.css";
import { fetchSingleCity } from "../mockApi";
import { PageHeader, Button, Descriptions } from "antd";
import { Layout } from "antd";
import { Link } from "react-router-dom";
import { FavoritesSearchDay } from "./FavoritesSearchDay";

export const Favorites = ({likeCity,temperatureType}) => {
  const memCity=likeCity
    return (
      <div className={styles.main}>
        {memCity.map((i, index) => (
          <FavoritesSearchDay city={i} temperatureType={temperatureType} />
        ))}
      </div>
    );

};
