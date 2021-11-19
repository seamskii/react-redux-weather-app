import styles from "./favorites.module.css";
import { FavoritesSearchDay } from "./FavoritesSearchDay";
import { useSelector } from "react-redux";

export const Favorites = ({ setError, error }) => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className={styles.main}>
      {favorites.map((i, index) => (
        <FavoritesSearchDay city={i} setError={setError} error={error} />
      ))}
    </div>
  );
};
