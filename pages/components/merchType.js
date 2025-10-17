import Image from "next/image";
import styles from "./merchType.module.css";

const MerchType = ({
  imageSrc,
  imageAlt,
  title,
  material,
  size,
  availableAmount,
  locale,
}) => {
  return (
    <div className={styles["merch-type"]}>
      <div className={styles["merch-type-image"]}>
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>
      <div className={styles["merch-type-title"]}>
        <h2>{title}</h2>
      </div>
      <div className={styles["merch-type-description"]}>
        <p className={styles["merch-type-material"]}>{material}</p>
        <p className={styles["merch-type-size"]}>{size}</p>
      </div>
      <div className={styles["merch-type-availability"]}>
        <p>{locale === "sr" ? "Dostupno:" : "Available amount:"}</p>
        <span>{availableAmount}</span>
      </div>
    </div>
  );
};

export default MerchType;
