import React, { useState } from "react";
import PhotoInput from "../PhotoInput/PhotoInput";
import axios from "axios";

import styles from "./HomeOffice.module.css";

const HomeOffice: React.FC = () => {
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(null);
  const [detectedItems, setDetectedItems] = useState<string[]>([]);

  const handleImageUpload = (image: File | null) => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setUploadedImageSrc(base64Image);
        analyzeImage(base64Image);
      };
      reader.readAsDataURL(image);
    } else {
      setUploadedImageSrc(null);
    }
  };

  const analyzeImage = async (base64Image: string) => {
    try {
      const response = await axios.post(
        "https://your-backend-api.com/analyze-image",
        { image: base64Image }
      );
      const detectedObjects = response.data;
      // Process the response and extract the recognized equipment
      setDetectedItems(detectedObjects);
    } catch (error) {
      console.error("Error analyzing image:", error);
    }
  };

  return (
    <div className="homeOffice">
      <PhotoInput onUpload={handleImageUpload} />
      {uploadedImageSrc && (
        <img
          src={uploadedImageSrc}
          alt="Uploaded home office"
          className="uploadedImage"
        />
      )}
      <div>
        <h2>Detected Items:</h2>
        <ul>
          {detectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeOffice;
