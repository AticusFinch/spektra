// components/Search.js
import { useRouter } from "next/router";
import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import styles from "./Search.module.css"; // Create a CSS module for styling

const Search = ({ placeholder }) => {
  const router = useRouter();
  const { locale } = router;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?term=${searchTerm}&locale=${locale}`);
    }
  };

  return (
    <div className={styles["nav-search"]}>
      <form onSubmit={handleSearchSubmit}>
        <button type="submit" className={styles["search-button"]}>
          <HiMagnifyingGlass />
        </button>
        <input
          type="text"
          placeholder={placeholder}
          className={styles["search-input"]}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
