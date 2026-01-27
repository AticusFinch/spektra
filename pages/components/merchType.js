import Image from "next/image";
import styles from "./merchType.module.css";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const MerchType = ({
  imageSrc,
  imageAlt,
  merchType,
  material,
  size,
  color,
  text,
  availableAmount,
  galleryImages = [],
}) => {
  const router = useRouter();
  const { locale } = router;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const openGallery = () => {
    console.log("Gallery clicked, images:", galleryImages);
    if (galleryImages && galleryImages.length > 0) {
      setIsGalleryOpen(true);
      setCurrentImageIndex(0);
    } else {
      console.log("No gallery images available");
    }
  };

  const closeGallery = useCallback(() => {
    setIsGalleryOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setSlideDirection("right");
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setSlideDirection("left");
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  }, [galleryImages.length]);

  const hasGallery = galleryImages && galleryImages.length > 0;

  // Debug: log gallery status
  useEffect(() => {
    console.log("Gallery images received:", galleryImages);
    console.log("Has gallery:", hasGallery);
  }, [galleryImages, hasGallery]);

  // Keyboard navigation for gallery
  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isGalleryOpen, nextImage, prevImage, closeGallery]);

  return (
    <>
      <div className={styles["merch-type"]}>
        <div
          className={styles["merch-type-image"]}
          onClick={hasGallery ? openGallery : undefined}
          style={hasGallery ? { cursor: "pointer" } : {}}
        >
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
      {isGalleryOpen && hasGallery && (
        <div className={styles["gallery-modal"]} onClick={closeGallery}>
          <button
            className={styles["gallery-close"]}
            onClick={closeGallery}
            aria-label="Close gallery"
          >
            <AiOutlineClose />
          </button>
          <button
            className={styles["gallery-prev"]}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            <AiOutlineLeft />
          </button>
          <div
            className={styles["gallery-content"]}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              key={currentImageIndex}
              className={`${styles["gallery-image-wrapper"]} ${
                styles[`slide-${slideDirection}`]
              }`}
            >
              <Image
                src={galleryImages[currentImageIndex]?.sourceUrl || imageSrc}
                alt={
                  galleryImages[currentImageIndex]?.altText ||
                  imageAlt ||
                  "Gallery image"
                }
                width={
                  galleryImages[currentImageIndex]?.mediaDetails?.width || 1200
                }
                height={
                  galleryImages[currentImageIndex]?.mediaDetails?.height || 800
                }
                className={styles["gallery-image"]}
              />
            </div>
            {galleryImages.length > 1 && (
              <div className={styles["gallery-counter"]}>
                {currentImageIndex + 1} / {galleryImages.length}
              </div>
            )}
          </div>
          {galleryImages.length > 1 && (
            <button
              className={styles["gallery-next"]}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              <AiOutlineRight />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default MerchType;
