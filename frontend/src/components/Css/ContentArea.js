
import { Link } from 'react-router-dom';

const ContentArea = ({ selectedContent }) => {
  const content = {
    cssHome: (
      <div>
      <h1 style={{textAlign:"center"}}><b>Welcome to the CSS Tutorial</b></h1>
      <img 
        src="https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo-thumbnail.png" 
        alt="CSS Illustration" 
        style={{ width: "300px", height: "300px", margin: "20px auto",display: "block" }}
      />
      <p style={{ margin: "10px 0" }}>
        CSS (Cascading Style Sheets) is the cornerstone technology for styling 
        websites. It allows you to bring life to your HTML documents by defining 
        how elements should be displayed on the screen, paper, or other media.
      </p>
      <p style={{ margin: "10px 0" }}>
        This tutorial is your complete guide to mastering CSS — from the basics 
        like colors and fonts to advanced concepts like animations, transitions, 
        and responsive designs.
      </p>
      <h3>Why Learn CSS?</h3>
      <ul>
        <li>Enhance the visual appeal of your web pages.</li>
        <li>Improve user experience with modern layouts.</li>
        <li>Create responsive designs for all devices.</li>
        <li>Learn advanced techniques like grid, flexbox, and animations.</li>
      </ul>
      <p style={{ margin: "10px 0" }}>
        Ready to transform your web development skills? Let's dive into CSS 
        and make your websites stand out!
      </p>
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Jvascript</button>
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
    cssIntro: (
      <div>
        <h1><b>Introduction to CSS</b></h1>
        <p>
          CSS (Cascading Style Sheets) is used to control the style and layout
          of web pages. It enhances HTML by adding colors, fonts, and spacing.
        </p>
        <p>
          CSS allows for the separation of content and design, making your code
          cleaner and easier to maintain. It also enables responsive web design
          to ensure your website looks great on all devices.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssSyntax: (
      <div>
        <h1><b>CSS Syntax</b></h1>
        <p>
          CSS syntax consists of selectors and declaration blocks. A selector
          targets an HTML element, and declarations define styles.
        </p>
        <pre>
          selector &#123; property: value; &#125;
        </pre>
        <p>
          For example:
        </p>
        <pre>
          h1 &#123; color: blue; font-size: 20px; &#125;
        </pre>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssSelectors: (
      <div>
        <h1><b>CSS Selectors</b></h1>
        <p>
          CSS selectors are patterns used to select and style HTML elements.
          Examples include:
        </p>
        <ul>
          <li><strong>Element Selector:</strong> Selects elements by tag name (e.g., <code>p</code>).</li>
          <li><strong>Class Selector:</strong> Selects elements by class (e.g., <code>.classname</code>).</li>
          <li><strong>ID Selector:</strong> Selects elements by ID (e.g., <code>#idname</code>).</li>
          <li><strong>Group Selector:</strong> Selects multiple elements (e.g., <code>h1, h2, p</code>).</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssHowTo: (
      <div>
        <h1><b>How to Use CSS</b></h1>
        <p>
          CSS can be applied in three ways:
        </p>
        <ul>
          <li><strong>Inline:</strong> Using the <code>style</code> attribute directly in HTML elements.</li>
          <li><strong>Internal:</strong> Within a <code>&lt;style&gt;</code> tag inside the HTML <code>&lt;head&gt;</code>.</li>
          <li><strong>External:</strong> Linking an external CSS file using a <code>&lt;link&gt;</code> tag.</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssComments: (
      <div>
        <h1><b>CSS Comments</b></h1>
        <p>
          CSS comments are used to annotate code and improve readability. They
          are ignored by the browser and enclosed within <code>/* */</code>.
        </p>
        <pre>
          /* This is a CSS comment */
        </pre>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssColors: (
      <div>
        <h1><b>CSS Colors</b></h1>
        <p>
          CSS supports various ways to define colors:
        </p>
        <ul>
          <li><strong>Named Colors:</strong> e.g., <code>red</code>, <code>blue</code>.</li>
          <li><strong>HEX:</strong> e.g., <code>#ff0000</code> for red.</li>
          <li><strong>RGB:</strong> e.g., <code>rgb(255, 0, 0)</code>.</li>
          <li><strong>HSL:</strong> e.g., <code>hsl(0, 100%, 50%)</code>.</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssBackgrounds: (
      <div>
        <h1><b>CSS Backgrounds</b></h1>
        <p>
          CSS provides properties to style element backgrounds, such as:
        </p>
        <ul>
          <li><strong>background-color:</strong> Sets the background color.</li>
          <li><strong>background-image:</strong> Adds an image as the background.</li>
          <li><strong>background-repeat:</strong> Specifies if/how the image repeats.</li>
          <li><strong>background-size:</strong> Controls the size of the background image.</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssBorders: (
      <div>
        <h1><b>CSS Borders</b></h1>
        <p>
          CSS borders are used to define the boundary of an element. You can
          customize the width, style, and color of borders. Common styles
          include solid, dashed, dotted, and double.
        </p>
        <pre>
          border: 2px solid black;
        </pre>
        <p>
          You can also apply specific borders to each side using properties
          like <code>border-top</code>, <code>border-right</code>,
          <code>border-bottom</code>, and <code>border-left</code>.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssMargins: (
      <div>
        <h1><b>CSS Margins</b></h1>
        <p>
          CSS margins are used to create space outside an element's border.
          They are crucial for positioning and spacing elements on a web page.
          Margins can be set individually for each side or collectively using
          shorthand.
        </p>
        <pre>
          margin: 10px; /* Applies to all sides */
          margin: 10px 20px; /* Vertical and horizontal */
        </pre>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssPadding: (
      <div>
        <h1><b>CSS Padding</b></h1>
        <p>
          CSS padding is used to create space inside an element's border,
          between the content and the border. Like margins, padding can be set
          for all sides or individually.
        </p>
        <pre>
          padding: 10px; /* Applies to all sides */
          padding: 10px 20px; /* Vertical and horizontal */
        </pre>
        <p>
          Adjusting padding helps control the spacing within elements, ensuring
          better visual structure.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssHeightWidth: (
      <div>
        <h1><b>CSS Height and Width</b></h1>
        <p>
          CSS allows you to specify the height and width of elements. You can
          use absolute units (like px, cm) or relative units (like %, em) to
          define sizes.
        </p>
        <pre>
          height: 100px;
          width: 50%;
        </pre>
        <p>
          Setting height and width is essential for creating responsive and
          visually appealing designs.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssBoxModel: (
      <div>
        <h1><b>CSS Box Model</b></h1>
        <p>
          The CSS box model describes the structure of an element. It consists
          of four areas: content, padding, border, and margin.
        </p>
        <ul>
          <li><strong>Content:</strong> The actual content of the box.</li>
          <li><strong>Padding:</strong> Space between the content and the border.</li>
          <li><strong>Border:</strong> Surrounds the padding and content.</li>
          <li><strong>Margin:</strong> Space outside the border.</li>
        </ul>
        <p>
          Understanding the box model is crucial for proper layout design.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/chtml">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssOutline: (
      <div>
        <h1><b>CSS Outline</b></h1>
        <p>
          CSS outlines are similar to borders but do not take up space. They are
          drawn outside the border edge and are often used for highlighting.
        </p>
        <pre>
          outline: 2px solid red;
        </pre>
        <p>
          Outlines can be styled and customized just like borders.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssText: (
      <div>
        <h1><b>CSS Text</b></h1>
        <p>
          CSS provides various properties to style text, such as alignment,
          decoration, and transformation. These properties help enhance
          readability and design.
        </p>
        <ul>
          <li><strong>text-align:</strong> Aligns text (e.g., left, center, right).</li>
          <li><strong>text-decoration:</strong> Adds or removes decorations (e.g., underline).</li>
          <li><strong>text-transform:</strong> Changes text case (e.g., uppercase).</li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
    cssFonts: (
      <div>
        <h1><b>CSS Fonts</b></h1>
        <p>
          CSS fonts control the appearance of text by specifying font-family,
          size, weight, and style. Use web-safe fonts or custom fonts for
          flexibility.
        </p>
        <pre>
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: bold;
        </pre>
        <p>
          Combining font properties can create unique and consistent typography
          for your website.
        </p>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
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
  };

  return (
    <div style={styles.contentArea}>
  {content[selectedContent] || (
    <div>
      <h1>Welcome to the CSS Tutorial</h1>
      <img 
        src="https://w7.pngwing.com/pngs/393/49/png-transparent-css-logo-thumbnail.png" 
        alt="CSS Illustration" 
        style={{ width: "300px", height: "300px", margin: "20px auto",display: "block" }}
      />
      <p style={{ margin: "10px 0" }}>
        CSS (Cascading Style Sheets) is the cornerstone technology for styling 
        websites. It allows you to bring life to your HTML documents by defining 
        how elements should be displayed on the screen, paper, or other media.
      </p>
      <p style={{ margin: "10px 0" }}>
        This tutorial is your complete guide to mastering CSS — from the basics 
        like colors and fonts to advanced concepts like animations, transitions, 
        and responsive designs.
      </p>
      <h3>Why Learn CSS?</h3>
      <ul>
        <li>Enhance the visual appeal of your web pages.</li>
        <li>Improve user experience with modern layouts.</li>
        <li>Create responsive designs for all devices.</li>
        <li>Learn advanced techniques like grid, flexbox, and animations.</li>
      </ul>
      <p style={{ margin: "10px 0" }}>
        Ready to transform your web development skills? Let's dive into CSS 
        and make your websites stand out!
      </p>
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/html">
    <button type="button" class="btn btn-success">HTML</button>
  </Link>
  
  <Link to="/javascript">
    <button type="button" class="btn btn-success">Javascript</button>
  </Link>
  
  <Link to="/python">
    <button type="button" class="btn btn-success">Python</button>
  </Link>
  
  <Link to="/" style={{ marginLeft: 'auto' }}>
    <button type="button" class="btn btn-success">Back</button>
  </Link>
</div> 
    </div>
  )}
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
