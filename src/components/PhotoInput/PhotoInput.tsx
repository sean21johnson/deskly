import React, { ChangeEvent } from "react";
import styles from "./PhotoInput.module.css";

type PhotoInputProps = {
  onUpload: (image: File | null) => void;
};

const PhotoInput: React.FC<PhotoInputProps> = (props) => {
  const { onUpload } = props;

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    onUpload(file);
  };

  return (
    <div className={styles.photoInputContainer}>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
    </div>
  );
};

export default PhotoInput;
