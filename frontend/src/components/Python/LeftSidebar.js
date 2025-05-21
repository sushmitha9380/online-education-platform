
import './Python.css';

const LeftSidebar = ({ onButtonClick }) => {
  return (
    <div style={styles.sidebar}>
      <button className="button" onClick={() => onButtonClick("home")}>
  Python HOME
</button>
<button className="button" onClick={() => onButtonClick("intro")}>
  Python Intro
</button>
<button className="button" onClick={() => onButtonClick("syntax")}>
  Python Syntax
</button>
<button className="button" onClick={() => onButtonClick("variables")}>
  Python Variables
</button>
<button className="button" onClick={() => onButtonClick("functions")}>
  Python Functions
</button>
<button className="button" onClick={() => onButtonClick("classes")}>
  Python Classes
</button>
<button className="button" onClick={() => onButtonClick("dataTypes")}>
  Python Data Types
</button>
<button className="button" onClick={() => onButtonClick("numbers")}>
  Python Numbers
</button>
<button className="button" onClick={() => onButtonClick("casting")}>
  Python Casting
</button>
<button className="button" onClick={() => onButtonClick("strings")}>
  Python Strings
</button>
<button className="button" onClick={() => onButtonClick("booleans")}>
  Python Booleans
</button>
<button className="button" onClick={() => onButtonClick("operators")}>
  Python Operators
</button>
<button className="button" onClick={() => onButtonClick("lists")}>
  Python Lists
</button>

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
