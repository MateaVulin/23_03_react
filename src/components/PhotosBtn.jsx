import React from "react";
import styles from "./PhotosBtn.module.css";
const PhotosBtn = ({ setPage }) => {
  return (
    <button className={StyleSheet.btn} onClick={() => setPage("photos")}>
      Photos
    </button>
  );
};
export default PhotosBtn;
