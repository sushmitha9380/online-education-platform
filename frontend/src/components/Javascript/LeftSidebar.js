
// import './Script.css'

// const LeftSidebar = ({ onButtonClick }) => {
//   return (
//     <div style={styles.sidebar}>
//       <button className="button" onClick={() => onButtonClick("home")}>
//       JavaScript HOME
//     </button>
//     <button className="button" onClick={() => onButtonClick("intro")}>
//       JavaScript Intro
//     </button>
//     <button className="button" onClick={() => onButtonClick("syntax")}>
//       JavaScript Syntax
//     </button>
//     <button className="button" onClick={() => onButtonClick("getStarted")}>
//       Getting Started
//     </button>
//     <button className="button" onClick={() => onButtonClick("Promises")}>
//       JavaScript Promises
//     </button>
//     <button className="button" onClick={() => onButtonClick("variables")}>
//       JavaScript Variables
//     </button>
//     <button className="button" onClick={() => onButtonClick("ArrayMethods")}>
//       JavaScript ArrayMethods
//     </button>
//     <button className="button" onClick={() => onButtonClick("Asynchronous")}>
//       JavaScript Asynchronous
//     </button>

//     </div>
//   );
// };

// const styles = {
//   sidebar: {
//     width: "25%",
//     height: "100vh",
//     backgroundColor: "#f4f4f4",
//     padding: "20px",
//     boxSizing: "border-box",
//     overflowY: "auto",
//   },
  
// };

// export default LeftSidebar;
import './Script.css';

const LeftSidebar = ({ onButtonClick, isAuthenticated }) => {
  return (
    <div style={styles.sidebar}>
      <button className="button" onClick={() => onButtonClick("home")}>
        JavaScript HOME
      </button>
      <button className="button" onClick={() => onButtonClick("intro")}>
        JavaScript Intro
      </button>
      <button className="button" onClick={() => onButtonClick("syntax")}>
        JavaScript Syntax
      </button>
      <button className="button" onClick={() => onButtonClick("getStarted")}>
        Getting Started
      </button>

      {/* Conditional rendering based on authentication */}
      {isAuthenticated ? (
        <>
          <button className="button" onClick={() => onButtonClick("Promises")}>
            JavaScript Promises
          </button>
          <button className="button" onClick={() => onButtonClick("ArrayMethods")}>
            JavaScript ArrayMethods
          </button>
          <button className="button" onClick={() => onButtonClick("Asynchronous")}>
            JavaScript Asynchronous
          </button>
        </>
      ) : (
        <p>Please log in to access advanced topics like Promises, Array Methods, and Asynchronous JavaScript.</p>
      )}

      <button className="button" onClick={() => onButtonClick("variables")}>
        JavaScript Variables
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

