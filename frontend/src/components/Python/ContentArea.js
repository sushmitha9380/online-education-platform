
import down from './py.jpeg';
import { Link } from 'react-router-dom';

const ContentArea = ({ selectedContent }) => {
  const content = {
    home: (
      <div>
        <h1><b> Python Tutorial</b></h1>
        <p>
          Welcome to the ultimate Python tutorial designed to give you all the
          essentials you need to start your Python journey! Python is a
          versatile and powerful programming language known for its simplicity
          and readability. Whether you're a beginner or someone looking to
          sharpen your skills, this tutorial is your gateway to mastering
          Python.
        </p>
        <p>
          Python's popularity stems from its simplicity and wide range of
          applications, including web development, data analysis, artificial
          intelligence, and scientific computing. Dive into this tutorial and
          discover why Python is the language of choice for beginners and
          professionals alike.
        </p>
        <h2>Advantages of Python</h2>
    <ul>
        <li><span class="advantage">Easy to Learn and Use:</span> Python's syntax is simple and intuitive, making it a great choice for beginners. The language's readability promotes good programming practices.</li><br/>
        <li><span class="advantage">Versatility:</span> Python can be used in many domains including web development, data science, machine learning, automation, artificial intelligence, and more, making it a versatile tool for various projects.</li><br/>
        <li><span class="advantage">Large Standard Library:</span> Python provides a vast collection of modules and libraries, which allows developers to perform tasks such as file manipulation, web scraping, data analysis, and networking without needing to write much code from scratch.</li><br/>
        <li><span class="advantage">Cross-Platform Compatibility:</span> Python is available on all major operating systems, such as Windows, macOS, and Linux, and Python programs can be easily ported between platforms with little or no modification.</li><br/>
        <li><span class="advantage">Extensive Community Support:</span> Python has a large and active community, meaning plenty of resources (tutorials, forums, documentation) and libraries are readily available for developers.</li><br/>
        <li><span class="advantage">Great for Prototyping:</span> Due to its ease of use and flexibility, Python is ideal for rapid prototyping and experimentation, especially in fields like data science and AI.</li><br/>
        <li><span class="advantage">Interpreted Language:</span> Python is interpreted, which means you can test and debug your code interactively, without the need to compile it first.</li><br/>
        <li><span class="advantage">Object-Oriented Programming:</span> Python supports object-oriented programming (OOP), enabling better code organization and reusability.</li><br/>
        <li><span class="advantage">Integration Capabilities:</span> Python can integrate with other languages and technologies such as C, C++, Java, .NET, and more. This makes it a good choice for systems that require interaction between different technologies.</li>
    </ul>

    <h2>Disadvantages of Python</h2>
    <ul>
        <li><span class="disadvantage">Slower Execution Speed:</span> As an interpreted language, Python can be slower than compiled languages like C or C++. The execution speed can be a concern in performance-critical applications.</li><br/>
        <li><span class="disadvantage">Not Ideal for Mobile Development:</span> Python is not a popular choice for mobile app development (although frameworks like Kivy and BeeWare exist). Native mobile applications tend to be more efficient when developed using languages like Swift or Kotlin.</li><br/>
        <li><span class="disadvantage">Weak in Mobile Computing:</span> While Python is versatile, it's not well-suited for building resource-intensive mobile apps compared to other languages like Java or Swift.</li><br/>
        <li><span class="disadvantage">Memory Consumption:</span> Python's memory consumption is higher compared to low-level programming languages like C or C++, making it less ideal for applications with limited resources or those that require intensive memory management.</li><br/>
        <li><span class="disadvantage">Limited Multi-threading:</span> Python has a Global Interpreter Lock (GIL) that limits the execution of multiple threads simultaneously, which can be a disadvantage for multi-threaded CPU-bound tasks.</li><br/>
        <li><span class="disadvantage">Design Restrictions:</span> Although Python is highly flexible, it’s a dynamically typed language. This can lead to errors that are caught only at runtime, making it harder to detect bugs during development.</li><br/>
        <li><span class="disadvantage">Not as Fast as Other Languages:</span> For computationally heavy tasks, Python may be outperformed by compiled languages, requiring developers to use optimized libraries or tools for specific use cases.</li><br/>
        <li><span class="disadvantage">Dependency Management:</span> Managing dependencies and Python environments can be challenging in complex projects, especially when different versions of packages or Python itself are involved.</li>
    </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    intro: (
      <div>
        <h1><b>Introduction to Python</b></h1>
        <p>
          Python is a high-level, interpreted programming language created by
          Guido van Rossum in 1991. It is widely used for web development, data
          analysis, artificial intelligence, scientific computing, and much
          more. Python is open-source and has a vibrant community, making it one
          of the most popular programming languages today.
        </p>
        <h4>Key Features of Python:</h4>
        <ul>
          <li>
            <strong>Easy to Learn:</strong> Python's syntax is straightforward
            and resembles plain English.
          </li>
          <li>
            <strong>Versatile:</strong> Suitable for small scripts to large,
            complex applications.
          </li>
          <li>
            <strong>Extensive Libraries:</strong> Offers numerous libraries for
            various tasks like NumPy for data analysis, Django for web
            development, and TensorFlow for AI.
          </li>
          <li>
            <strong>Platform-Independent:</strong> Python runs on all major
            operating systems like Windows, macOS, and Linux.
          </li>
        </ul>
        <p>
          These features make Python an excellent choice for developers across
          all skill levels.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    getStarted: (
      <div>
        <h1><b>Getting Started with Python</b></h1>
        <p>
          To start coding in Python, you'll first need to set up a Python
          development environment on your system.
        </p>
        <h4>Step 1: Install Python</h4>
        <p>
          Download and install Python from the official website:{" "}
          <a href="https://www.python.org">python.org</a>. Ensure that you check
          the option to add Python to your system's PATH during installation.
        </p>
        <h4>Step 2: Verify Installation</h4>
        <p>Open your terminal (Command Prompt or Bash) and type:</p>
        <pre>python --version</pre>
        <p>This command should display the installed Python version.</p>
        <h4>Step 3: Write Your First Program</h4>
        <p>
          Create a new file with the extension <code>.py</code> and add:
        </p>
        <pre>print("Hello, Python!")</pre>
        <p>Run the file using:</p>
        <pre>python filename.py</pre>
        <p>
          Congratulations! You've written and executed your first Python
          program.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    syntax: (
      <div>
        <h1><b>Python Syntax</b></h1>
        <p>
          Python’s syntax is simple and easy to understand, making it one of the
          most beginner-friendly programming languages. Here's a closer look at
          some key syntax rules:
        </p>
        <h4>Key Syntax Rules:</h4>
        <ul>
          <li>
            <strong>Indentation:</strong> Python uses indentation to define code
            blocks instead of braces. Be consistent with spaces or tabs.
          </li>
          <li>
            <strong>Case Sensitivity:</strong> Variable names and identifiers
            are case-sensitive.
          </li>
          <li>
            <strong>Comments:</strong> Use <code>#</code> for single-line
            comments and triple quotes for multi-line comments.
          </li>
        </ul>
        <h5>Examples:</h5>
        <p>
          <strong>Conditional Statement:</strong>
        </p>
        <pre>if 5 &gt; 2: print("Five is greater than two!")</pre>
        <p>
          <strong>Loops:</strong>
        </p>
        <pre>for i in range(5): print(i)</pre>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">JavaScript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    variables: (
      <div>
        <h1><b>Python Variables</b></h1>
        <p>
          Variables in Python are used to store data. Python is dynamically
          typed, which means you don’t need to declare a variable’s type.
        </p>
        <h4>Creating Variables</h4>
        <pre>x = 10 # Integer y = 3.14 # Float name = "Alice" # String</pre>
        <h4>Rules for Variable Names</h4>
        <ul>
          <li>Must begin with a letter or an underscore (_).</li>
          <li>Cannot start with a number.</li>
          <li>Can only contain alphanumeric characters and underscores.</li>
          <li>Are case-sensitive.</li>
        </ul>
        <h5>Examples:</h5>
        <p>
          <strong>Swapping Variables:</strong>
        </p>
        <pre>a, b = 5, 10 a, b = b, a</pre>
        <p>
          <strong>Multiple Assignments:</strong>
        </p>
        <pre>x, y, z = 1, 2, 3</pre>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    functions: (
      <div>
        <h1><b>Python Functions</b></h1>
        <p>
          Functions are a key part of Python programming. They allow you to
          organize your code into reusable blocks.
        </p>
        <h3>Defining a Function</h3>
        <pre>def greet(name): return "Hello, " + name</pre>
        <p>To call the function:</p>
        <pre>print(greet("Alice")) # Output: Hello, Alice</pre>
        <h3>Function with Multiple Parameters</h3>
        <pre>def add(a, b): return a + b print(add(5, 3)) # Output: 8</pre>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    classes: (
      <div>
        <h1><b>Python Classes</b></h1>
        <p>
          Classes are used to define the structure of objects. They are a way to
          bundle data and functionality together.
        </p>
        <h2>Defining a Class</h2>
        <p>
          A class in Python serves as a fundamental structure for organizing and
          managing related data and behaviors. When you define a class, you
          essentially create a blueprint or a template for objects that share
          the same characteristics and actions. This is the core of
          object-oriented programming (OOP), where the class represents a
          concept or category, and the objects are the individual instances that
          belong to this category. For example, consider a "Book" class. It
          might have attributes such as title, author, and publication year, as
          well as methods like `borrow()` or `return()`. Every individual book
          object created from this class will have its own unique title, author,
          and year, but they will share the common behavior (methods) defined in
          the class, like borrowing or returning the book. Classes allow for the
          concept of **encapsulation**, which means bundling the data
          (attributes) and methods (functions) that operate on the data into a
          single unit. This helps in protecting the data by restricting direct
          access to the internal workings of the class. Instead, interaction
          with the data is done through methods, which might include checks or
          validations to ensure correct usage. One of the most powerful features
          of classes in Python is **inheritance**, which allows one class to
          inherit attributes and methods from another. This means you can create
          a new class (child class) that takes on the characteristics of an
          existing class (parent class) and even add more specific features or
          override existing ones. This promotes code reuse and makes your code
          more modular and flexible. For instance, you could have a base class
          called "Vehicle," and from this base class, you could derive more
          specific classes like "Car" or "Motorcycle." These subclasses would
          inherit the general properties of a "Vehicle" (like speed or fuel
          type) but could also have additional features unique to their types
          (like a number of doors for the "Car" class). Classes also help with
          **polymorphism**, which means that the same method name can behave
          differently depending on the object that calls it. For example, a
          `speak()` method in an "Animal" class could be implemented differently
          for different types of animals. A "Dog" class might print "Bark" when
          `speak()` is called, while a "Cat" class might print "Meow." In
          addition, classes in Python can be designed to support
          **abstraction**, which hides unnecessary implementation details and
          shows only the relevant functionality. By defining a class, you
          provide a clear interface for other parts of your program to interact
          with, while the internal workings of the class remain hidden and
          protected. To summarize, defining a class in Python is an essential
          step in organizing and structuring your code, enabling you to model
          real-world entities, organize related data and behaviors, reuse code
          through inheritance, and build more maintainable and flexible systems.
        </p>
        <p>Creating an object from the class:</p>
        <pre>
          p = Person("Alice", 25) print(p.greet()) # Output: Hello, my name is
          Alice and I am 25 years old.
        </pre>
        <h2>Class Inheritance</h2>
        <p>
          Inheritance in Python is one of the key features of object-oriented
          programming (OOP) that allows a new class (called a child or subclass)
          to inherit attributes and methods from an existing class (called a
          parent or superclass). This concept promotes code reuse and modularity
          by enabling new classes to take on the behaviors and properties of
          existing ones, reducing redundancy and making your code more
          maintainable. When a class inherits from another, the child class
          gains access to the parent class's attributes (data members) and
          methods (functions). However, the child class can also define its own
          attributes and methods or modify (override) the inherited methods to
          suit its specific needs. This allows you to build upon existing
          functionality rather than starting from scratch, making development
          faster and more efficient. For example, imagine you have a parent
          class called "Animal," which contains general attributes like `name`
          and `age`, and methods like `speak()`. If you then create a child
          class called "Dog," it automatically inherits the `name` and `age`
          attributes, as well as the `speak()` method. However, you can also add
          specific features to the "Dog" class, such as a `breed` attribute or
          an overridden version of the `speak()` method that makes the dog
          "bark" instead of the generic animal sound. Inheritance enables
          **extensibility** in your program. You can extend the functionality of
          a parent class without changing the parent class itself, allowing for
          easier modifications and additions to your codebase. For example, if
          you add new methods or modify existing methods in the parent class,
          all child classes that inherit from that parent will automatically
          receive these updates, reducing the need for manual changes across
          multiple classes. Additionally, inheritance supports **polymorphism**,
          which means that different child classes can implement the same method
          in different ways, even though they share the same method name. This
          allows you to write more flexible code where you can call the same
          method on different objects, but the method's behavior can vary
          depending on the class of the object. In summary, inheritance is a
          powerful feature that allows you to create new classes based on
          existing ones, promoting code reuse, flexibility, and maintainability.
          By allowing a child class to inherit the functionality of a parent
          class, inheritance helps you build more complex systems by adding
          specialized features without having to rewrite existing code.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    dataTypes: (
      <div>
        <h1><b>Python Data Types</b></h1>
        <p>Python has various built-in data types:</p>
        <ul>
          <li><strong>int</strong>: Integer values (e.g., 5, 100, -23)</li>
          <li><strong>float</strong>: Decimal values (e.g., 3.14, -7.2)</li>
          <li><strong>str</strong>: String values (e.g., "hello", "world")</li>
          <li><strong>bool</strong>: Boolean values (True, False)</li>
          <li><strong>list</strong>: Ordered, mutable collection (e.g., [1, 2, 3])</li>
          <li><strong>tuple</strong>: Ordered, immutable collection (e.g., (1, 2, 3))</li>
         
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    numbers: (
      <div>
        <h1><b>Python Numbers</b></h1>
        <p>Python supports several types of numeric data:</p>
        <ul>
          <li><strong>int</strong>: Whole numbers without decimals (e.g., 10, 100)</li>
          <li><strong>float</strong>: Numbers with decimal points (e.g., 3.14, 100.0)</li>
          <li><strong>complex</strong>: Numbers with a real and imaginary part (e.g., 1 + 2j)</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    casting: (
      <div>
        <h1><b>Python Casting</b></h1>
        <p>In Python, casting refers to converting one data type into another.</p>
        <ul>
          <li><strong>int()</strong>: Converts a value to an integer</li>
          <li><strong>float()</strong>: Converts a value to a float</li>
          <li><strong>str()</strong>: Converts a value to a string</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    strings: (
      <div>
        <h1><b>Python Strings</b></h1>
        <p>Strings in Python are sequences of characters enclosed in either single or double quotes.</p>
        <ul>
          <li>Example: <code>"Hello, World!"</code></li>
          <li>You can perform operations like concatenation: <code>"Hello" + " World"</code></li>
          <li>Strings support indexing and slicing: <code>"Hello"[0]</code> returns <code>H</code></li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    booleans: (
      <div>
        <h1><b>Python Booleans</b></h1>
        <p>Booleans represent truth values in Python. There are two boolean values: <strong>True</strong> and <strong>False</strong>.</p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    operators: (
      <div>
        <h1><b>Python Operators</b></h1>
        <p>Python supports several types of operators:</p>
        <ul>
          <li><strong>Arithmetic Operators</strong>: +, -, *, /, %, //, **</li>
          <li><strong>Comparison Operators</strong>: ==, != </li>
          <li><strong>Logical Operators</strong>: and, or, not</li>
          <li><strong>Assignment Operators</strong>: =, +=, -=, *=, /=</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
    lists: (
      <div>
        <h1><b>Python Lists</b></h1>
        <p>Lists are ordered collections of items, which can be of different types. Lists are mutable, meaning you can change their content.</p>
        <ul>
          <li>Example: <code>[1, 2, 3, "hello"]</code></li>
          <li>You can access elements using an index: <code>myList[0]</code> will return <code>1</code></li>
          <li>Lists support various operations like appending, removing, and slicing.</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
          <Link to="/html">
            <button type="button" class="btn btn-success">HTML</button>
          </Link>
          
          <Link to="/javascript">
            <button type="button" class="btn btn-success">CSS</button>
          </Link>
          
          <Link to="/python">
            <button type="button" class="btn btn-success">Javascript</button>
          </Link>
          
          <Link to="/" style={{ marginLeft: 'auto' }}>
            <button type="button" class="btn btn-success">Back</button>
          </Link>
        </div>
      </div>
    ),
  };

  return (
    <div style={styles.contentArea}>
      {content[selectedContent] || 
      (
      <div>
        <h1 className="w"><b>Welcome to Python Tutorial</b></h1>
        <img 
            src={down} 
            alt="html Illustration" 
            style={{ width: "300px", height: "300px", margin: "20px auto", display: "block" }} 
          />
          <p> <strong>Python</strong> is a high-level, interpreted programming language known for its ease of use and readability. Created by Guido van Rossum and first released in 1991, it emphasizes simplicity and has a clean, easy-to-understand syntax that is conducive to rapid development.</p>
          <p>Python continues to be a growing language, and with each new release, it introduces more features that improve its performance and usability. Python 3, introduced in 2008, continues to receive updates and optimizations, with Python 3.10 and beyond improving error messages, performance, and support for new features.</p>
          <p>The growing adoption of machine learning, data science, and artificial intelligence is fueling Python’s relevance, ensuring its place as one of the top programming languages in the coming years.</p>
          <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
            <Link to="/html">
              <button type="button" class="btn btn-success">HTML</button>
            </Link>
            
            <Link to="/javascript">
              <button type="button" class="btn btn-success">CSS</button>
            </Link>
            
            <Link to="/python">
              <button type="button" class="btn btn-success">Javascript</button>
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
