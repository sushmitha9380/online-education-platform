
import './Parent.css'

const LeftSidebar = ({ onButtonClick }) => {
  return (
    <div style={styles.sidebar}>
     <button className="button" onClick={() => onButtonClick("cssHome")}>CSS HOME</button>
    <button className="button" onClick={() => onButtonClick("cssIntro")}>CSS Introduction</button>
    <button className="button" onClick={() => onButtonClick("cssSyntax")}>CSS Syntax</button>
    <button className="button" onClick={() => onButtonClick("cssSelectors")}>CSS Selectors</button>
    <button className="button" onClick={() => onButtonClick("cssHowTo")}>CSS How To</button>
    <button className="button" onClick={() => onButtonClick("cssComments")}>CSS Comments</button>
    <button className="button" onClick={() => onButtonClick("cssColors")}>CSS Colors</button>
    <button className="button" onClick={() => onButtonClick("cssBackgrounds")}>CSS Backgrounds</button>
    <button className="button" onClick={() => onButtonClick("cssBorders")}>CSS Borders</button>
    <button className="button" onClick={() => onButtonClick("cssMargins")}>CSS Margins</button>
    <button className="button" onClick={() => onButtonClick("cssPadding")}>CSS Padding</button>
    <button className="button" onClick={() => onButtonClick("cssHeightWidth")}>CSS Height/Width</button>
    <button className="button" onClick={() => onButtonClick("cssBoxModel")}>CSS Box Model</button>
    <button className="button" onClick={() => onButtonClick("cssOutline")}>CSS Outline</button>
    <button className="button" onClick={() => onButtonClick("cssText")}>CSS Text</button>
    <button className="button" onClick={() => onButtonClick("cssFonts")}>CSS Fonts</button>

    </div>
  );
};

const styles = {
  sidebar: {
    width: "25%",
    height: "100vh",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    boxSizing: "border-box",
    overflowY: "auto",
  },

  
 
};

export default LeftSidebar;
