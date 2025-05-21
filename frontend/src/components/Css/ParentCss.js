import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import ContentArea from "./ContentArea";


const ParentCss = () => {
  const [selectedContent, setSelectedContent] = useState("");

  const handleButtonClick = (contentKey) => {
    setSelectedContent(contentKey);
  };

  return (
    <div style={styles.container}>
      <LeftSidebar onButtonClick={handleButtonClick} />
      <ContentArea selectedContent={selectedContent} />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    width: "100%",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
};

export default ParentCss;
