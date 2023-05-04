import React, { ChangeEvent } from "react";
import styles from "./PhotoInput.module.css";

type PhotoInputProps = {
  onUpload: (image: File | null) => void;
};

const PhotoInput: React.FC<PhotoInputProps> = ({ onUpload }) => {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    onUpload(event.target.files ? event.target.files[0] : null);
  };

  return (
    <div className={styles.main}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        id="fileInput"
        className={styles.fileInput}
      />
      <label htmlFor="fileInput" className={styles.customLabel}>
        Choose File
      </label>
    </div>
  );
};

export default PhotoInput;
