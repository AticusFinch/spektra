import { useRouter } from "next/router";

import styles from "./news.module.css";

const News = () => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className={styles["news-container"]}>
      <p>jahdfjkhadjkfhadjkfh</p>
    </div>
  );
};

export default News;
