import styles from "./favorites.module.css";
import { FavoritesSearchDay } from "./FavoritesSearchDay";
import { useSelector } from "react-redux";

export const Favorites = ({ setError, error }) => {
  const counter = useSelector((state) => state.counter);


  return (
    <div className={styles.main}>
      {counter.map((i, index) => (
        <FavoritesSearchDay city={i} setError={setError} error={error} />
      ))}
    </div>
  );
};
