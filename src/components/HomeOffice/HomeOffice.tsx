import React, { useState } from "react";
import PhotoInput from "../PhotoInput/PhotoInput";

import styles from "./HomeOffice.module.css";

const HomeOffice: React.FC = () => {
  const [image, setimage] = useState<string | null>(null);

  const handleImageUpload = (image: File | null) => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setimage(base64Image);
      };
      reader.readAsDataURL(image);
    } else {
      setimage(null);
    }
  };

  return (
    <div className={styles.main}>
      <PhotoInput onUpload={handleImageUpload} />
      {image && <img src={image} alt="Home Office" />}
    </div>
  );
};

export default HomeOffice;
