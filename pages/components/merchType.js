import Image from "next/image";
import styles from "./merchType.module.css";
import { useRouter } from "next/router";

const MerchType = ({
  imageSrc,
  imageAlt,
  merchType,
  material,
  size,
  color,
  text,
  availableAmount,
}) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <div className={styles["merch-type"]}>
      <div className={styles["merch-type-image"]}>
        <Image src={imageSrc} alt={imageAlt} width={400} height={400} />
      </div>
      <div className={styles["merch-type-content"]}>
        <div className={styles["merch-type-title"]}>
          {merchType && (
            <p className={styles["merch-type-label"]}>{merchType}</p>
          )}
        </div>
        <div className={styles["merch-type-description"]}>
          {material && (
            <p className={styles["merch-type-material"]}>
              {locale === "sr" ? "Materijal:" : "Material:"}
              <span>{material}</span>
            </p>
          )}
          {size && (
            <p className={styles["merch-type-size"]}>
              {locale === "sr" ? "Veličina:" : "Size:"}
              <span>{size}</span>
            </p>
          )}
          {color && (
            <p className={styles["merch-type-color"]}>
              {locale === "sr" ? "Boja:" : "Color:"}
              <span>{color}</span>
            </p>
          )}
          {text && (
            <p className={styles["merch-type-text"]}>
              {locale === "sr" ? "Tekst:" : "Text:"}
              <span>{text}</span>
            </p>
          )}
        </div>
        <div className={styles["merch-type-availability"]}>
          <p>
            {locale === "sr" ? "Dostupno:" : "Available:"}
            <span
              className={
                availableAmount <= 0 ? styles["unavailable"] : undefined
              }
            >
              {availableAmount <= 0
                ? locale === "sr"
                  ? "Nedostupno"
                  : "Unavailable"
                : availableAmount}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MerchType;
