
import './Parentcomponent.css';  

const LeftSidebar = ({ onButtonClick }) => {
  return (
    <div style={styles.sidebar}>
      <button className="button" onClick={() => onButtonClick("home")}>HTML HOME</button>
      <button className="button" onClick={() => onButtonClick("intro")}>HTML Intro</button>
      <button className="button" onClick={() => onButtonClick("tags")}>HTML Tags</button>
      <button className="button" onClick={() => onButtonClick("headings")}>HTML Heading</button>
      <button className="button" onClick={() => onButtonClick("paragraphs")}>HTML Paragraphs</button>
      <button className="button" onClick={() => onButtonClick("formatting")}>HTML Formatting</button>
      <button className="button" onClick={() => onButtonClick("images")}>HTML Images</button>
      <button className="button" onClick={() => onButtonClick("lists")}>HTML Lists</button>
      <button className="button" onClick={() => onButtonClick("iframes")}>HTML Iframes</button>
      <button className="button" onClick={() => onButtonClick("forms")}>HTML Forms</button>
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
  },
};

export default LeftSidebar;

