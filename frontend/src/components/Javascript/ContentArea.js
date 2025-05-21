
import logo from './ja.png'
import { Link } from 'react-router-dom';
import './Script.css';

const ContentArea = ({ selectedContent }) => {
  const content = {
    home: (
      <div>
        
        <h1> JavaScript</h1>
        <p>
          Welcome to the ultimate JavaScript tutorial designed to give you all the essentials you need to start your JavaScript journey! JavaScript is a versatile and powerful programming language known for its flexibility and ubiquity in web development. Whether you're a beginner or someone looking to sharpen your skills, this tutorial is your gateway to mastering JavaScript.
        </p>
        <p>JavaScript's popularity stems from its versatility and essential role in modern web development. It powers interactive websites, server-side applications, game development, and even mobile apps. Dive into this tutorial and discover why JavaScript is the language of choice for beginners and professionals alike in creating dynamic and engaging user experiences.</p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>


      </div>
    ),
    intro: (
      <div>
          <h1>Introduction to JavaScript</h1>
        <p>
          JavaScript is a high-level, interpreted programming language that was created by Brendan Eich in 1995. Initially developed to make web pages interactive, it has since evolved into one of the most versatile programming languages in the world. JavaScript is widely used for web development, enabling dynamic content, interactivity, and seamless user experiences. It powers server-side applications using environments like Node.js, is used in mobile app development with frameworks like React Native, and even contributes to game development and desktop applications.
        </p>
        <h2>Key Features of JavaScript:</h2>
         <ul>
          <li><strong>Lightweight and Interpreted:</strong> JavaScript is a lightweight, high-level programming language designed for fast execution. It is interpreted, meaning it doesn't require compilation, which speeds up development.</li>
           <li><strong>Dynamic Typing:</strong> JavaScript uses dynamic typing, allowing variables to hold different types of data at different times without explicitly declaring their type.</li>
           <li><strong>Object-Oriented Programming:</strong> JavaScript supports object-oriented programming principles like encapsulation, inheritance, and polymorphism, enabling structured and reusable code.</li>
        <li><strong>Platform-Independent:</strong> JavaScript can run on any device or platform with a compatible browser or runtime environment, such as Node.js.</li>
          <li><strong>Rich Ecosystem and Libraries:</strong> JavaScript boasts a vast ecosystem with numerous libraries and frameworks like React, Angular, and Vue.js, simplifying development for various use cases.</li>
         </ul>
        <p>These features make JavaScript an excellent choice for developers across all skill levels.</p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>
  
      </div>
      
    ),
    
    syntax: (
      
      <div>
      <div>
        <h1>JavaScript Syntax</h1>
        <p>
          JavaScript's syntax is simple and flexible, making it easy to learn and use for a wide range of programming tasks. Here's a closer look at some key syntax rules:
        </p>
        <h2>Key Syntax Rules</h2>
        <ul>
          <li>
            <strong>Semicolons:</strong> While semicolons are optional in JavaScript, it’s recommended to use them to separate statements explicitly.
          </li>
          <li>
            <strong>Case Sensitivity:</strong> Variable names and identifiers are case-sensitive.
          </li>
          <li>
            <strong>Comments:</strong> Use <code>//</code> for single-line comments and <code>/* */</code> for multi-line comments.
          </li>
        </ul>
        <h2>Examples</h2>
        <p><strong>Declaring Variables:</strong></p>
        <pre>
    let name = "Alice"; // Modern declaration<br/>
    const age = 25;     // Constant variable<br/>
    var isActive = true; // Older syntax<br/>
        </pre>
        <p><strong>Defining Functions:</strong></p>
        <pre>
    
    // Calling a Method<br/>
    console.log(greet("Alice")); // Output: Hello, Alice
    
    
        </pre>
        <p><strong>Advanced Topics:</strong></p>
        <ul>
          <li>
            <strong>Method Overloading:</strong> JavaScript does not natively support method overloading but you can simulate it using conditional logic.
          </li>
          <li>
            <strong>Return Types:</strong> JavaScript is dynamically typed, so function return types are inferred.
          </li>
        </ul>
      </div>
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

    </div>
    
    ),
    variables: (
     
        <div>
         <h1>JavaScript Variables</h1>
        <p>
           Variables in JavaScript are used to store data. JavaScript is dynamically
           typed, meaning you don’t need to declare a variable’s type explicitly.
         </p>
         <h2>Creating Variables</h2>         
         <pre>
              let x = 10;   // Integer
              const y = 3.14;   // Float (constant)
              var name = "Alice";   // String (older syntax)
        </pre>         
        <h2>Rules for Variable Names</h2>
        <ul>
          <li>Must begin with a letter, an underscore (_), or a dollar sign ($).</li>
           <li>Cannot start with a number.</li>
           <li>Can only contain alphanumeric characters, underscores, and dollar signs.</li>
           <li>Are case-sensitive.</li>
         </ul>
         <h2>Examples</h2>        <p>
          <strong>Swapping Variables:</strong>
        </p>
         <pre>
          let a = 5, b = 10;
          [a, b] = [b, a];
          console.log(a, b); // Output: 10 5         
          </pre>
        <p>
          <strong>Multiple Assignments:</strong>
         </p>         
         <pre>
          let x = 1, y = 2, z = 3;
            console.log(x, y, z); // Output: 1 2 3
         </pre>
         <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

        
      </div>
    ),
    getStarted: (
      <div>
        <h1>Getting Started with JavaScript</h1>
         <p>To start coding in JavaScript, you'll first need to set up a JavaScript development environment on your system or use a browser for quick testing.</p>
        <h2>Step 1: Install Node.js (Optional)</h2>
         <p>Download and install Node.js from the official website: <a href="https://nodejs.org">nodejs.org</a>. Node.js allows you to run JavaScript outside of the browser and is essential for backend development.</p>
         <h2>Step 2: Verify Installation</h2>
         <p>Open your terminal (Command Prompt or Bash) and type:</p>
        <pre>node --version</pre>
         <p>This command should display the installed Node.js version.</p>
        <h2>Step 3: Write Your First Program</h2>
         <p>Create a new file with the extension <code>.js</code> and add:</p>
         <pre>console.log("Hello, JavaScript!");</pre>
       <p>Run the file using (if you installed Node.js):</p>
         <pre>node filename.js</pre>
         <p>Alternatively, open your browser's developer tools (usually accessed by pressing <code>F12</code>) and type the code directly in the console tab:</p>
         <pre>console.log("Hello, JavaScript!");</pre>
         <p>Congratulations! You've written and executed your first JavaScript program.</p>
         <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

      </div>
    ),
    Promises: (
      <div>
        <h1>JavaScript Promises</h1>
    <p>
    JavaScript Promises are a powerful feature in JavaScript that allow you to handle asynchronous operations more efficiently. 
    A Promise represents a value that might not be available yet but will be resolved in the future.
     They are typically used when dealing with operations like HTTP requests, reading files, or timers.
     </p>
    <h2>Key Concepts of JavaScript Promises:</h2>
    <p>
     1.Pending: The initial state of the Promise; the operation is still ongoing.
     2.Resolved: The Promise has completed successfully, and the operation returned a value.
     3.Rejected: The Promise has failed, and the operation returned an error. 
    </p>
     <h2>Promise Syntax:</h2>
    <p>
     <strong>1. Creating a Promise:</strong><br/><p>
     A Promise is created using the new Promise() constructor that accepts a function with two parameters: resolve and reject.<br/>
    </p>
    <strong>2.Handling a Promise with then() and catch():</strong><br/><p>
     Once the Promise is created, you can use .then() to handle the success case and .catch() to handle errors.<br/>
     </p>
     You can chain multiple then() calls to handle multiple steps of asynchronous operations. Each then() returns a new Promise.<br/>
     </p>
     <strong>4. Using Promise.all():</strong><br/><p>
     If you have multiple asynchronous operations that can run in parallel, you can use Promise.all() to wait for all of them to complete. It takes an array of Promises and returns a single Promise that resolves when all Promises are resolved.<br/>
     </p>
     <strong>5. Using async and await:</strong><br/><p>
     async and await are syntactic sugar built on top of Promises that makes asynchronous code look more like synchronous code, making it easier to work with.async is used to define a function that returns a Promise.await can be used inside an async function to wait for a Promise to resolve before continuing execution.<br/>
     
    </p>
    <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

  </div>
    ),
    ArrayMethods: (
      <div>
        <h1>Array Methods in JavaScript</h1>
          <p>
            JavaScript provides a wide variety of array methods to manipulate and work with arrays efficiently. These methods make it easier to handle common operations like adding, removing, and transforming array elements.
          </p>
           <h2>Common Array Methods</h2>
           <ul>
            <li><strong>Push:</strong> Adds one or more elements to the end of an array.</li>
             <li><strong>Pop:</strong> Removes the last element from an array.</li>
             <li><strong>Shift:</strong> Removes the first element from an array.</li>
             <li><strong>Unshift:</strong> Adds one or more elements to the beginning of an array.</li>
             <li><strong>Map:</strong> Creates a new array by applying a function to each element.</li>
            <li><strong>Filter:</strong> Creates a new array with elements that pass a condition.</li>
            <li><strong>Reduce:</strong> Reduces the array to a single value by applying a function.</li>
            <li><strong>ForEach:</strong> Executes a provided function once for each array element.</li>
           </ul>
           <h2>Examples</h2>
           <p>
             <strong>Adding and Removing Elements:</strong>
           </p>
           <pre>
      const arr = [1, 2, 3];
       arr.push(4); // Adds 4 to the end
       console.log(arr); // Output: [1, 2, 3, 4]
      
       arr.pop(); // Removes the last element
       console.log(arr); // Output: [1, 2, 3]
      
       arr.shift(); // Removes the first element
       console.log(arr); // Output: [2, 3]
      
      arr.unshift(0); // Adds 0 to the beginning
       console.log(arr); // Output: [0, 2, 3]
           </pre>
          <p>
            <strong>Transforming Arrays:</strong>
          </p>
      <pre>
          const numbers = [1, 2, 3, 4];
          const doubled = numbers.map(num = num * 2); // Multiply each element by 2      console.log(doubled); // Output: [2, 4, 6, 8]
          
          const evenNumbers = numbers.filter(num = num % 2 === 0); // Filter even numbers
          console.log(evenNumbers); // Output: [2, 4]
          </pre>
          <p>
            <strong>Reducing an Array:</strong></p>         
            <pre>
            const sum = numbers.reduce((acc, num) = acc + num, 0); // Sum all elements
            console.log(sum); // Output: 10
           </pre>
           <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

      </div>
    ),
    Asynchronous: (
      <div>
        <h1> JavaScript Asynchronous</h1>
     <p>
     JavaScript asynchronous programming is essential for handling tasks like network requests, timers, or any operation that might take a long time to complete without blocking the execution of other code.
      In JavaScript, asynchronous programming can be handled in several ways. Here are the key concepts:
     </p>
     <br/>
     <strong>1.Callbacks</strong><br/>
     <p>
    A callback is a function passed as an argument to another function, which is then executed after a task completes. 
     However, this can lead to "callback hell" when multiple nested callbacks are used.<br/></p>
     <strong>2.Promises</strong><br/><p>
     A Promise is an object that represents the eventual completion or failure of an asynchronous operation. 
     Promises are a cleaner way to handle asynchronous code compared to callbacks.</p>
    <strong>3.Async/Await</strong><br/><p>
     Async/Await is a more modern and readable way of handling asynchronous operations. It simplifies working with promises and makes asynchronous code appear synchronous, which is easier to understand and maintain.
     The async keyword is used to define a function that returns a promise.
     The await keyword is used inside an async function to pause the execution of the function until the promise is resolved or rejected.</p>
     <strong>4.The Event Loop</strong><br/><p>
     The Event Loop is the mechanism that allows JavaScript to handle asynchronous operations while still executing code in a single thread. 
    It ensures that code is executed in the correct order, with non-blocking I/O operations processed as events in the event queue.</p>
    <strong>5.setTimeout() and setInterval()</strong><br/><p>
    Both setTimeout() and setInterval() are functions used to schedule tasks asynchronously.
     setTimeout() Executes a function after a specified delay (in milliseconds).
     setInterval() Executes a function repeatedly with a specified interval.</p>
     <strong>6.Promise.all()</strong><br/><p>
     Promise.all() is used when you want to wait for multiple promises to resolve before proceeding. 
     It takes an array of promises and returns a new promise that resolves when all of the promises are resolved, or rejects if any of the promises fail.</p>
     <strong>7.Promise.race()</strong><br/><p>
     Promise.race() is used when you want to execute as soon as the first promise resolves or rejects. 
     It takes an array of promises and resolves or rejects with the result of the first promise that settles.</p>
     <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

      </div>
    ),
  }
   
     
    

  return (
    <div style={styles.contentArea}>
      {content[selectedContent] || 
      (
      <div>
        <h1 className="w"><b>Welcome to Javascript Tutorial</b></h1>
        <img 
            src={logo} 
            alt="javascript" 
            style={{ width: "300px", height: "300px", margin: "20px auto", display: "block" }} 
          />
         
    <p>A versatile, high-level programming language for interactive and dynamic web pages.</p>
      <h2> Core Features</h2>
      <ul>
        <li>
          <strong>Syntax:</strong> Similar to C-style languages (e.g., <code>if</code>, <code>for</code>, <code>while</code>).
        </li>
        <li>
          <strong>Dynamic Typing:</strong> Variables do not require a declared type.
        </li>
        <li>
          <strong>Object-Oriented:</strong> Supports object creation, prototyping, and inheritance.
        </li>
        <li>
          <strong>Event-Driven:</strong> Handles user interactions like clicks, input, and hover.
        </li>
        <li>
          <strong>Interpreted:</strong> Runs in the browser, no need for compilation.
        </li>
      </ul>
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/css">
    <button type="button" class="btn btn-success">CSS</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div>

    </div>
    
      )
      }       
    </div>
  );
};
const styles = {
  contentArea: {
    width: "75%",
    padding: "20px",
    boxSizing: "border-box",
    overflowY: "auto",
  },
};

export default ContentArea;



