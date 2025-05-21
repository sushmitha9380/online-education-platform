
import download from './html.png';
import { Link } from 'react-router-dom';

const ContentArea = ({ selectedContent }) => {
  const content = {
    home: (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1><b>HTML</b></h1>
        <p>
          HTML (HyperText Markup Language) is the standard language for creating webpages.
          Invented by Tim Berners-Lee in late 1991, HTML has undergone several iterations,
          starting with "HTML 1.0" in 1993 and followed by "HTML 2.0" in 1995, the first standard specification.
        </p>

        <ul>
          <li>
            <h4>Introduction</h4>
            <p>HTML is a standard markup language used to structure the content of a webpage. It combines HyperText for linking pages and Markup Language for presenting text and media.</p>
          </li>
          <li>
            <h4>Why Learn HTML?</h4>
            <p>This tutorial covers everything from basic HTML tags to advanced topics like forms, multimedia, and HTML5. It's designed for both beginners and experienced developers to master responsive web design.</p>
          </li>
          <li>
            <h4>Introduction to HTML Structure</h4>
            <p>Here is the basic structure of an HTML document and the elements that define it.</p>
          </li>
          <li>
            <h4>Elements of HTML Basic Structure</h4>
            <ul>
              <li><strong>&lt;!DOCTYPE html&gt;</strong> - Defines the document type as HTML and must appear at the top of every HTML document.</li>
              <li><strong>&lt;html&gt;...</strong>&lt;/html&gt; - Encloses all HTML elements and resources like CSS and JavaScript.</li>
              <li><strong>&lt;head&gt;...</strong>&lt;/head&gt; - Contains meta tags, title, and other resources not displayed directly on the webpage.</li>
              <li><strong>&lt;title&gt;...</strong>&lt;/title&gt; - Sets the title of the webpage visible in the browser tab or bookmarks.</li>
              <li><strong>&lt;body&gt;...</strong>&lt;/body&gt; - Contains all the main content of the webpage that is displayed in the browser.</li>
              <li><strong>&lt;h1&gt;...</strong>&lt;/h1&gt; - Defines the most important heading on the page.</li>
              <li><strong>&lt;p&gt;...</strong>&lt;/p&gt; - Represents a paragraph on the webpage.</li>
            </ul>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
    intro: (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1><b> Introduction to HTML</b></h1><br/>
        <ul>
          <li>
            <h4>What is HTML?</h4>
            <p>
              HTML stands for HyperText Markup Language. It is used to structure the content on the web by using various elements (commonly known as tags).
              These HTML elements define the different sections of a web page, such as headings, paragraphs, links to other webpages, listings, images, tables, etc.
              These elements tell the browser about the content and formatting to display.
            </p>
            <p>
              <strong>HTML is HyperText + Markup Language</strong>, where:
            </p>
            <ul>
              <li><strong>HyperText</strong> refers to how webpages (HTML documents) are linked together. A link on a webpage is called "HyperText."</li>
              <li><strong>Markup Language</strong> refers to "marking up" a text document with tags that inform the browser about the structure and formatting.</li>
            </ul>
            <p>Explore our latest online courses and learn new skills at your own pace. Enroll and become a certified expert to boost your career.</p>
          </li><br/>

          <li>
            <h4>What is an HTML Element?</h4>
            <p>
              An HTML element is a basic building block used to create a webpage. It consists of a start tag, content, and an end tag.
            </p>
            <p><strong>Syntax of an HTML element:</strong></p>
            <pre>
              &lt;tag_name&gt;content&lt;/tag_name&gt;
            </pre>
            <p><strong>Example:</strong></p>
            <pre>&lt;h1&gt;It is a top-level heading&lt;/h1&gt;</pre>
            <ul>
              <li><code>&lt;h1&gt;</code>: Start tag</li>
              <li><code>It is a top-level heading</code>: Content inside the tags</li>
              <li><code>&lt;/h1&gt;</code>: End tag</li>
            </ul>
          </li><br/>

          <li>
            <h4>HTML Page Structure</h4>
            <p>
              HTML page structure consists of essential elements required to create an HTML document that can be displayed on the browser.
            </p>
            <p><strong>Key Elements in HTML Page Structure:</strong></p>
            <ul>
              <li><code>&lt;!DOCTYPE html&gt;</code>: Defines the document type as HTML.</li>
              <li><code>&lt;html&gt;</code>: Root element of the document; all elements are placed inside this tag.</li>
              <li><code>&lt;head&gt;</code>: Contains scripts, styles, and meta tags for page functionalities.</li>
              <li><code>&lt;title&gt;</code>: Defines the webpage's title (appears in the browser's tab).</li>
              <li><code>&lt;body&gt;</code>: Contains the main content displayed on the webpage.</li>
              <li><code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>: Defines page headings and paragraphs respectively.</li>
            </ul>
          </li><br/>

          <li>
            <h4>Basic HTML Tags</h4>
            <p>HTML includes various tags to structure and display content:</p>
            <ul>
              <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>: Heading tags for writing headings (from highest <code>&lt;h1&gt;</code> to lowest <code>&lt;h6&gt;</code>).</li>
              <li><code>&lt;p&gt;</code>: Displays text as a paragraph.</li>
              <li><code>&lt;br&gt;</code>: Inserts a line break.</li>
              <li><code>&lt;div&gt;</code>: Defines a division or section.</li>
              <li><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code>: Insert lists; <code>&lt;ul&gt;</code> for unordered and <code>&lt;ol&gt;</code> for ordered.</li>
              <li><code>&lt;img&gt;</code>: Inserts an image.</li>
              <li><code>&lt;a&gt;</code>: Anchor tag for hyperlinks.</li>
              <li><code>&lt;pre&gt;</code>: Preserves text formatting.</li>
            </ul>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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

    
    tags: (
      <div style={{ fontFamily: "Arial, sans-serif"}}>
  <h1><b>HTML Tags</b></h1>
  <ul>
    <li>
      <h4>&lt;html&gt;</h4>
      <p>Represents the root element of an HTML document.</p>
      <p><strong>Example:</strong> &lt;html&gt; ... &lt;/html&gt;</p>
    </li>
    <li>
      <h4>&lt;head&gt;</h4>
      <p>Contains metadata, title, styles, and scripts that are not displayed on the webpage.</p>
      <p><strong>Example:</strong> &lt;head&gt; ... &lt;/head&gt;</p>
    </li>
    <li>
      <h4>&lt;title&gt;</h4>
      <p>Sets the title of the webpage that appears on the browser tab.</p>
      <p><strong>Example:</strong> &lt;title&gt;My Page&lt;/title&gt;</p>
    </li>
    <li>
      <h4>&lt;body&gt;</h4>
      <p>Contains the main content of the HTML document.</p>
      <p><strong>Example:</strong> &lt;body&gt; ... &lt;/body&gt;</p>
    </li>
    <li>
      <h4>&lt;h1&gt; to &lt;h6&gt;</h4>
      <p>Defines headings from the largest (&lt;h1&gt;) to the smallest (&lt;h6&gt;).</p>
      <p><strong>Example:</strong> &lt;h1&gt;Main Heading&lt;/h1&gt;</p>
    </li>
    <li>
      <h4>&lt;p&gt;</h4>
      <p>Represents a paragraph of text.</p>
      <p><strong>Example:</strong> &lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
    </li>
    <li>
      <h4>&lt;a&gt;</h4>
      <p>Defines a hyperlink, allowing navigation to another page or location.</p>
      <p><strong>Example:</strong> &lt;a href="https://example.com"&gt;Click here&lt;/a&gt;</p>
    </li>
    <li>
      <h4>&lt;img&gt;</h4>
      <p>Embeds an image in the webpage.</p>
      <p><strong>Example:</strong> &lt;img src="image.jpg" alt="Description" /&gt;</p>
    </li>
    <li>
      <h4>&lt;ul&gt;</h4>
      <p>Creates an unordered list with bullet points.</p>
      <p><strong>Example:</strong> &lt;ul&gt;&lt;li&gt;Item 1&lt;/li&gt;&lt;li&gt;Item 2&lt;/li&gt;&lt;/ul&gt;</p>
    </li>
    <li>
      <h4>&lt;ol&gt;</h4>
      <p>Creates an ordered list with numbers or letters.</p>
      <p><strong>Example:</strong> &lt;ol&gt;&lt;li&gt;First&lt;/li&gt;&lt;li&gt;Second&lt;/li&gt;&lt;/ol&gt;</p>
    </li>
    <li>
      <h4>&lt;li&gt;</h4>
      <p>Defines a list item inside &lt;ul&gt; or &lt;ol&gt;.</p>
      <p><strong>Example:</strong> &lt;li&gt;List item&lt;/li&gt;</p>
    </li>
    <li>
      <h4>&lt;div&gt;</h4>
      <p>Defines a container or division for grouping content.</p>
      <p><strong>Example:</strong> &lt;div&gt;Some content&lt;/div&gt;</p>
    </li>
    <li>
      <h4>&lt;span&gt;</h4>
      <p>Used for inline styling or grouping small pieces of text.</p>
      <p><strong>Example:</strong> &lt;span style="color:red;"&gt;Red text&lt;/span&gt;</p>
    </li>
    <li>
      <h4>&lt;table&gt;</h4>
      <p>Creates a table structure.</p>
      <p><strong>Example:</strong> &lt;table&gt; ... &lt;/table&gt;</p>
    </li>
    <li>
      <h4>&lt;form&gt;</h4>
      <p>Creates an interactive form for collecting user input.</p>
      <p><strong>Example:</strong> &lt;form&gt; ... &lt;/form&gt;</p>
    </li>
    <li>
      <h4>&lt;br&gt;</h4>
      <p>Inserts a line break in text.</p>
      <p><strong>Example:</strong> First line&lt;br&gt;Second line</p>
    </li>
    <li>
      <h4>&lt;hr&gt;</h4>
      <p>Inserts a horizontal line for separation.</p>
      <p><strong>Example:</strong> &lt;hr /&gt;</p>
    </li>
  </ul>
  <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
    headings: (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1><b>HTML Heading</b></h1><br/>
        <ul>
          
          <li>
            <h4>What is an HTML Heading?</h4>
            <p>
              An HTML heading or HTML <code>h</code> tag is used to define a title or a subtitle to display on a webpage. When you place the text within the heading tags <code>&lt;h1&gt;.........&lt;/h1&gt;</code>, it is displayed on the browser in bold format. The size of the text depends on the number of the heading level.
            </p>
          </li>
          <li>
            <h4>Different HTML Heading Levels</h4>
            <p>
              There are six different HTML heading tags, defined with <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, from the highest level <code>h1</code> (main heading) to the least level <code>h6</code> (least important heading).
            </p>
            
            <ul>
                  <li>
                    <h4>&lt;h1&gt; (Heading Level 1)</h4>
                    <p>
                      The most important heading, used as the main title of a webpage or section. It is the largest and most prominent heading tag.
                    </p>
                    <p><strong>Example:</strong> &lt;h1&gt;Welcome to My Website&lt;/h1&gt;</p>
                  </li>
                  <li>
                    <h4>&lt;h2&gt; (Heading Level 2)</h4>
                    <p>
                      A secondary heading used for sub-sections within the content. It is slightly smaller than &lt;h1&gt;.
                    </p>
                    <p><strong>Example:</strong> &lt;h2&gt;About Us&lt;/h2&gt;</p>
                  </li>
                  <li>
                    <h4>&lt;h3&gt; (Heading Level 3)</h4>
                    <p>
                      A tertiary heading used for smaller sub-sections or categories within &lt;h2&gt; sections.
                    </p>
                    <p><strong>Example:</strong> &lt;h3&gt;Our Team&lt;/h3&gt;</p>
                  </li>
                  <li>
                    <h4>&lt;h4&gt; (Heading Level 4)</h4>
                    <p>
                      Used for further divisions under &lt;h3&gt; sections. It is smaller than &lt;h3&gt;.
                    </p>
                    <p><strong>Example:</strong> &lt;h4&gt;Team Member Profiles&lt;/h4&gt;</p>
                  </li>
                  <li>
                    <h4>&lt;h5&gt; (Heading Level 5)</h4>
                    <p>
                      A less significant heading for deeper sub-divisions under &lt;h4&gt; sections. Rarely used in most content.
                    </p>
                    <p><strong>Example:</strong> &lt;h5&gt;Achievements&lt;/h5&gt;</p>
                  </li>
                  <li>
                    <h4>&lt;h6&gt; (Heading Level 6)</h4>
                    <p>
                      The least important heading, used for minor sub-divisions. It is the smallest heading tag.
                    </p>
                    <p><strong>Example:</strong> &lt;h6&gt;Contact Information&lt;/h6&gt;</p>
                  </li>
                  <li>
                    <h4>Importance of Headings</h4>
                    <p>
                      Headings define the structure and hierarchy of content on a webpage. They help users and search engines understand the organization of the page.
                    </p>
                  </li>
                  <li>
                    <h4>Headings and Accessibility</h4>
                    <p>
                      Using headings correctly ensures that screen readers and assistive technologies can navigate and interpret the content effectively.
                    </p>
                  </li>
                  <li>
                    <h4>Best Practices for Headings</h4>
                    <ul>
                      <li>Use headings in a logical order (e.g., start with &lt;h1&gt;, then &lt;h2&gt;, and so on).</li>
                      <li>Do not skip heading levels (e.g., avoid going from &lt;h1&gt; directly to &lt;h3&gt;).</li>
                      <li>Use only one &lt;h1&gt; per page for the main title.</li>
                      <li>Keep headings concise and descriptive.</li>
                    </ul>
                  </li>
                </ul>
          </li><br/>
          <li>
            <h4>Importance of Headings for SEO</h4>
            <p>
              Headings in HTML help search engines understand and index the structure of a webpage.
            </p>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
    paragraphs: (
      <div style={{ fontFamily: "Arial, sans-serif" }}>
        <h1><b>HTML Paragraphs</b></h1><br/>
        <ul>
          <li>
            <h4>What is an HTML Paragraph?</h4>
            <p>
              An HTML paragraph is a block of text wrapped inside the <code>&lt;p&gt;</code> tag. It is used to display textual content on a webpage.
            </p>
            <p><strong>Example:</strong> &lt;p&gt;This is a paragraph.&lt;/p&gt;</p>
          </li>
          <li>
            <h4>Basic Syntax</h4>
            <p>
              The syntax for an HTML paragraph includes an opening <code>&lt;p&gt;</code> tag, the content, and a closing <code>&lt;/p&gt;</code> tag.
            </p>
            <p><strong>Example:</strong> &lt;p&gt;Hello, World!&lt;/p&gt;</p>
          </li>
          <li>
            <h4>Line Breaks in Paragraphs</h4>
            <p>
              HTML ignores multiple spaces and line breaks within a paragraph. To enforce a line break, use the <code>&lt;br&gt;</code> tag.
            </p>
            <p><strong>Example:</strong></p>
            <pre>
              &lt;p&gt;This is the first line.&lt;br&gt;
              This is the second line.&lt;/p&gt;
            </pre>
          </li>
          <li>
            <h4>Styling Paragraphs</h4>
            <p>
              HTML paragraphs can be styled using CSS for customization, such as text alignment, color, and spacing.
            </p>
            <p><strong>Example:</strong></p>
            <pre>
              &lt;p style="color: blue; text-align: center;"&gt;This is a styled paragraph.&lt;/p&gt;
            </pre>
          </li>
          <li>
            <h4>HTML Paragraph Alignment</h4>
            <p>
              Paragraphs can be aligned using the <code>align</code> attribute or CSS properties like <code>text-align</code>.
            </p>
            <ul>
              <li><strong>Left Align:</strong> Default alignment. &lt;p align="left"&gt;Left-aligned text&lt;/p&gt;</li>
              <li><strong>Center Align:</strong> Aligns text to the center. &lt;p align="center"&gt;Center-aligned text&lt;/p&gt;</li>
              <li><strong>Right Align:</strong> Aligns text to the right. &lt;p align="right"&gt;Right-aligned text&lt;/p&gt;</li>
            </ul>
          </li><br/>
          <li>
            <h4>Preformatted Text</h4>
            <p>
              To preserve spaces, line breaks, and formatting, use the <code>&lt;pre&gt;</code> tag instead of <code>&lt;p&gt;</code>.
            </p>
            <p><strong>Example:</strong></p>
            <pre>
              &lt;pre&gt;
              This    is    preformatted   text.
              Line breaks and spaces are preserved.
              &lt;/pre&gt;
            </pre>
          </li>
          <li>
            <h4>Horizontal Rules</h4>
            <p>
              To separate paragraphs, you can use the <code>&lt;hr&gt;</code> tag to add a horizontal line.
            </p>
            <p><strong>Example:</strong> &lt;hr&gt;</p>
          </li>
          <li>
            <h4>Accessibility and Readability</h4>
            <p>
              Properly formatted paragraphs improve readability and accessibility for all users, including those using screen readers.
            </p>
            <p>Best practices include:</p>
            <ul>
              <li>Keeping paragraphs short and concise.</li>
              <li>Breaking content into multiple paragraphs for better readability.</li>
              <li>Using proper semantic tags for clarity.</li>
            </ul>
          </li>
        </ul>
        <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
    


formatting:(
  <div style={{fontFamily:"Arial, sans-serif"}}>
    <h1><b>HTML Text Formatting</b> </h1><br/>
    <ul>
    <li>
      <h4>What is HTML Formatting?</h4>
      <p>
        HTML formatting refers to using specific tags to style and display text in a visually distinct way. It helps emphasize, style, and structure text on a webpage.
      </p>
    </li>
    <li>
      <h4>HTML Formatting Tags</h4>
      <ul>
        <li><strong>&lt;b&gt;</strong>: Makes text bold.</li>
        <li><strong>&lt;strong&gt;</strong>: Emphasizes text with added semantic meaning, typically displayed as bold.</li>
        <li><strong>&lt;i&gt;</strong>: Displays text in italics.</li>
        <li><strong>&lt;em&gt;</strong>: Emphasizes text with added semantic meaning, typically displayed in italics.</li>
        <li><strong>&lt;u&gt;</strong>: Underlines the text.</li>
        <li><strong>&lt;mark&gt;</strong>: Highlights text with a yellow background by default.</li>
        <li><strong>&lt;small&gt;</strong>: Reduces the font size of the text.</li>
        <li><strong>&lt;del&gt;</strong>: Displays text with a strikethrough, indicating deletion.</li>
        <li><strong>&lt;ins&gt;</strong>: Underlines text, indicating an addition to the document.</li>
        <li><strong>&lt;sub&gt;</strong>: Displays text as a subscript (e.g., H<sub>2</sub>O).</li>
        <li><strong>&lt;sup&gt;</strong>: Displays text as a superscript (e.g., x<sup>2</sup>).</li>
        <li><strong>&lt;code&gt;</strong>: Formats text to appear as computer code, usually in a monospace font.</li>
        <li><strong>&lt;pre&gt;</strong>: Preserves the whitespace and line breaks in the text, displaying it in a preformatted way.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Semantic Meaning of Formatting Tags</h4>
      <p>
        Some formatting tags, like <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code>, add semantic meaning to the text, making them more accessible for screen readers and search engines.
      </p>
    </li>
    <li>
      <h4>Examples of Formatting Tags</h4>
      <ul>
        <li><strong>Bold:</strong> &lt;b&gt;Bold Text&lt;/b&gt;</li>
        <li><strong>Italic:</strong> &lt;i&gt;Italic Text&lt;/i&gt;</li>
        <li><strong>Underlined:</strong> &lt;u&gt;Underlined Text&lt;/u&gt;</li>
        <li><strong>Highlighted:</strong> &lt;mark&gt;Highlighted Text&lt;/mark&gt;</li>
      </ul>
    </li><br/>
    <li>
      <h4>Best Practices for HTML Formatting</h4>
      <ul>
        <li>Use semantic tags like <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for accessibility and meaning.</li>
        <li>Avoid using formatting tags for styling purposes; use CSS instead.</li>
        <li>Use appropriate tags to ensure readability and structure.</li>
      </ul>
    </li>

  </ul>
  <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
images: (
  <div style={{fontFamily:"Arial, sans-serif"}}>
<h1><b>HTML Images</b></h1><br/>
<ul>
  <li>
    <h4>What is an HTML Image?</h4>
    <p>
      HTML images are used to embed and display pictures or graphics on a webpage. Images enhance the visual appeal and user experience of a site.
    </p>
  </li>
  <li>
    <h4>HTML <code>&lt;img&gt;</code> Tag</h4>
    <p>
      The <code>&lt;img&gt;</code> tag is used to display an image. It is a self-closing tag and requires specific attributes to function correctly.
    </p>
    <p><strong>Syntax:</strong></p>
    <pre>
      &lt;img src="image.jpg" alt="Description" width="300" height="200" /&gt;
    </pre>
  </li>
  <li>
    <h4>Attributes of the <code>&lt;img&gt;</code> Tag</h4>
    <ul>
      <li><strong>src:</strong> Specifies the path to the image file (e.g., a URL or relative path).</li>
      <li><strong>alt:</strong> Provides alternative text for the image, displayed if the image cannot load or for accessibility.</li>
      <li><strong>width:</strong> Sets the width of the image (in pixels or percentage).</li>
      <li><strong>height:</strong> Sets the height of the image (in pixels or percentage).</li>
      <li><strong>title:</strong> Adds a tooltip when the user hovers over the image.</li>
      <li><strong>loading:</strong> Specifies lazy loading (<code>lazy</code>) or eager loading (<code>eager</code>) of images.</li>
    </ul>
  </li><br></br>
  <li>
    <h4>Types of Image Paths</h4>
    <ul>
      <li><strong>Absolute Path:</strong> Includes the full URL (e.g., <code>https://example.com/images/image.jpg</code>).</li>
      <li><strong>Relative Path:</strong> Specifies the file's location relative to the HTML file (e.g., <code>images/image.jpg</code>).</li>
    </ul>
  </li><br/>
  <li>
    <h4>Responsive Images</h4>
    <p>
      Responsive images adjust their size and resolution to fit different screen sizes. This can be achieved using CSS or HTML attributes like <code>srcset</code>.
    </p>
    <p><strong>Example:</strong></p>
    <pre>
      &lt;img src="small.jpg" srcset="large.jpg 1024w, medium.jpg 768w, small.jpg 480w" sizes="(max-width: 768px) 100vw, 50vw" alt="Responsive image" /&gt;
    </pre>
  </li><br/>
  <li>
    <h4>Best Practices for HTML Images</h4>
    <ul>
      <li>Use optimized images to improve page load times.</li>
      <li>Always include an <code>alt</code> attribute for accessibility.</li>
      <li>Ensure images are responsive for better display on various devices.</li>
      <li>Use modern formats like WebP for smaller file sizes and better quality.</li>
    </ul>
  </li><br/>
  <li>
    <h4>Common Image Formats</h4>
    <ul>
      <li><strong>JPEG:</strong> Best for photographs with many colors.</li>
      <li><strong>PNG:</strong> Supports transparency and high-quality graphics.</li>
      <li><strong>GIF:</strong> Suitable for animations and simple graphics.</li>
      <li><strong>SVG:</strong> Best for scalable vector graphics like logos.</li>
      <li><strong>WebP:</strong> Modern format with smaller file sizes and better quality.</li>
    </ul>
  </li>
</ul>
<div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
lists: (
  <div style={{ fontFamily: "Arial, sans-serif" }}>
    <h1><b>HTML Lists</b></h1><br/>
    <ul>
    <li>
      <h4>What are HTML Lists?</h4>
      <ul>
        <li>HTML lists are used to group related items together in a structured format.</li>
        <li>They help in organizing and presenting information clearly on a webpage.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Types of HTML Lists</h4>
      <ul>
        <li>
          <strong>Ordered List (<code>&lt;ol&gt;</code>):</strong>
          <ul>
            <li>Displays a list of items in a specific sequence, typically numbered.</li>
            <li>
              <strong>Example:</strong>
              <pre>
                  &lt;ol&gt;<br/>
                    &lt;li&gt;First item&lt;/li&gt;<br/>
                    &lt;li&gt;Second item&lt;/li&gt;<br/>
                    &lt;li&gt;Third item&lt;/li&gt;<br/>
                  &lt;/ol&gt;
              </pre>
            </li>
            <li>
              <strong>Output:</strong>
            <ol>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
            </ol>
            </li><br/>
          </ul>
        </li>
        <li>
          <strong>Unordered List (<code>&lt;ul&gt;</code>):</strong>
          <ul>
            <li>Displays a list of items without any particular order, typically with bullet points.</li>
            <li>
              <strong>Example:</strong>
                <pre>
                &lt;ul&gt;<br/>
                  &lt;li&gt;Item 1&lt;/li&gt;<br/>
                  &lt;li&gt;Item 2&lt;/li&gt;<br/>
                  &lt;li&gt;Item 3&lt;/li&gt;<br/>
                &lt;/ul&gt;
              </pre>
            </li>
            <li>
              <strong>Output:</strong>
              <ul>
                <li>Item1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </li>
          </ul>
        </li><br/>
        <li>
          <strong>Definition List (<code>&lt;dl&gt;</code>):</strong>
          <ul>
            <li>Displays a list of terms and their descriptions.</li>
            <li>
              <strong>Example:</strong>
              <pre>
                  &lt;dl&gt;<br/>
                    &lt;dt&gt;HTML&lt;/dt&gt;<br/>
                    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;<br/>
                    &lt;dt&gt;CSS&lt;/dt&gt;<br/>
                    &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;<br/>
                  &lt;/dl&gt;
              </pre>
            </li>
            <li>
              <strong>Output:</strong>
              <dl>
                <dt>HTML</dt>
                <dd>HyperText Markup Language</dd>
                <dt>CSS</dt>
                <dd>Cascading Style Sheets</dd>
              </dl>
               </li>
          </ul>
        </li>
      </ul>
    </li><br/>
    <li>
      <h4>Nested Lists</h4>
      <ul>
        <li>Lists can be nested inside each other to create sub-lists.</li>
        <li>
          <strong>Example:</strong>
          <pre>
          &lt;ul&gt;<br/>
            &lt;li&gt;Item 1&lt;/li&gt;<br/>
            &lt;li&gt;Item 2<br/>
            &lt;ul&gt;<br/>
                &lt;li&gt;Sub-item 1&lt;/li&gt;<br/>
                &lt;li&gt;Sub-item 2&lt;/li&gt;<br/>
              &lt;/ul&gt;<br/>
            &lt;/li&gt;<br/>
          &lt;/ul&gt;
          </pre>
        </li>
        <li>
          <strong>Output:</strong>
          <ul>
              <li>Item 1</li>
              <li>Item 2
                <ul>
                  <li>Sub-item 1</li>
                  <li>Sub-item 2</li>
                </ul>
              </li>
            </ul>
            </li>
      </ul>
    </li><br/>
    <li>
      <h4>Attributes of HTML Lists</h4>
      <ul>
        <li><strong>Type Attribute:</strong> Specifies the style of the list (e.g., <code>type="1"</code>, <code>type="a"</code>, <code>type="i"</code>).</li>
        <li><strong>Start Attribute:</strong> Specifies the starting value of an ordered list.</li>
        <li><strong>Reversed Attribute:</strong> Displays an ordered list in reverse order.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Best Practices for HTML Lists</h4>
      <ul>
        <li>Use ordered lists when the sequence of items matters.</li>
        <li>Use unordered lists for items without a specific order.</li>
        <li>Use definition lists for terms and descriptions.</li>
        <li>Ensure proper nesting and indentation for readability.</li>
      </ul>
    </li>
  </ul>
  <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
iframes: (
  <div style={{ fontFamily: "Arial, sans-serif" }}>
    <h1><b>HTML Iframes</b></h1><br/>
    <ul>
    <li>
      <h4>What is an HTML Iframe?</h4>
      <ul>
        <li>An HTML <code>&lt;iframe&gt;</code> (short for inline frame) is used to embed another HTML document within the current document.</li>
        <li>It allows you to display content like another webpage, video, or map inside your webpage.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Basic Syntax of Iframe</h4>
      <ul>
        <li>The basic syntax of an iframe:
          <pre>
            &lt;iframe src="https://example.com" width="600" height="400"&gt;&lt;/iframe&gt;
          </pre>
        </li>
        <li>The <code>src</code> attribute specifies the URL of the embedded content.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Attributes of Iframe</h4>
      <ul>
        <li><strong>src:</strong> Specifies the URL of the embedded document.</li>
        <li><strong>width:</strong> Specifies the width of the iframe.</li>
        <li><strong>height:</strong> Specifies the height of the iframe.</li>
        <li><strong>name:</strong> Assigns a name to the iframe, useful for targeting with hyperlinks or scripts.</li>
        <li><strong>allow:</strong> Specifies permissions for the iframe, such as enabling autoplay or fullscreen.</li>
        <li><strong>sandbox:</strong> Adds restrictions to the content inside the iframe for security purposes.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Example of an Iframe</h4>
      <ul>
        <li>Embedding a YouTube video:
          <pre>
            &lt;iframe <br/>
              width="560" <br/>
              height="315" <br/>
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" <br/>
              title="YouTube video player" <br/>
              frameborder="0" <br/>
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" <br/>
              allowfullscreen&gt;&lt;/iframe&gt;
          </pre>
        </li>
      </ul>
    </li><br/>
    <li>
      <h4>Best Practices for Iframes</h4>
      <ul>
        <li>Use the <code>sandbox</code> attribute for better security to limit what the iframe content can do.</li>
        <li>Specify meaningful dimensions (<code>width</code> and <code>height</code>) to ensure proper rendering.</li>
        <li>Provide fallback content for users with browsers that do not support iframes:
          <pre>
            &lt;iframe src="https://example.com"&gt;<br/>
              Your browser does not support iframes.<br/>
            &lt;/iframe&gt;
          </pre>
        </li>
      </ul>
    </li>
  </ul>
  <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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

forms:(
  <div style={{ fontFamily: "Arial, sans-serif" }}>
    <h1><b>HTML Forms</b></h1><br/>
    <ul>
    <li>
      <h4>What is an HTML Form?</h4>
      <ul>
        <li>An HTML form is a structure that allows users to input data and submit it to a server for processing.</li>
        <li>Forms are commonly used for user registration, login, feedback, and other interactive elements on a webpage.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Basic Syntax of an HTML Form</h4>
      <ul>
        <li>The basic structure of a form includes the <code>&lt;form&gt;</code> element:
          <pre>
            &lt;form action="submit_url" method="post"&gt;<br/>
              &lt;input type="text" name="username" placeholder="Enter your name" /&gt;<br/>
              &lt;input type="submit" value="Submit" /&gt;<br/>
            &lt;/form&gt;
          </pre>
        </li>
        <li>
          <strong>Output:</strong>
          <form action="submit_url" method="post">
            <input type="text" name="username" placeholder="Enter your name" />
            <input type="submit" value="Submit" />
          </form><br/>

        </li>
        <li>The <code>action</code> attribute specifies the URL where the form data is sent.</li>
        <li>The <code>method</code> attribute specifies the HTTP method used for submission (e.g., <code>GET</code> or <code>POST</code>).</li>
      </ul>
    </li><br/>
    <li>
      <h4>Common HTML Form Elements</h4>
      <ul>
        <li><strong>&lt;input&gt;:</strong> Used for various input types such as text, password, email, and more.</li>
        <li><strong>&lt;textarea&gt;:</strong> Allows users to input multi-line text.</li>
        <li><strong>&lt;select&gt;:</strong> Creates a dropdown menu with options.</li>
        <li><strong>&lt;button&gt;:</strong> Defines a clickable button.</li>
        <li><strong>&lt;label&gt;:</strong> Associates a label with an input element for better accessibility.</li>
      </ul>
    </li><br/>
    <li>
      <h4>Attributes of Forms</h4>
      <ul>
        <li><strong>action:</strong> The URL where the form data will be sent.</li>
        <li><strong>method:</strong> Defines how form data is sent (e.g., <code>GET</code>, <code>POST</code>).</li>
        <li><strong>target:</strong> Specifies where to display the response (e.g., <code>_self</code>, <code>_blank</code>).</li>
        <li><strong>enctype:</strong> Specifies how the form data should be encoded (e.g., <code>application/x-www-form-urlencoded</code>, <code>multipart/form-data</code>).</li>
      </ul>
    </li><br/>
    <li>
      <h4>Example of a Registration Form</h4>
      <ul>
        <li>A simple registration form:
          <pre>
            &lt;form action="/submit" method="post"&gt;<br/>
              &lt;label for="name"&gt;Name:&lt;/label&gt;<br/>
              &lt;input type="text" id="name" name="name" required /&gt;<br/>
              &lt;br /&gt;<br/>
              &lt;label for="email"&gt;Email:&lt;/label&gt;<br/>
              &lt;input type="email" id="email" name="email" required /&gt;<br/>
              &lt;br /&gt;<br/>
              &lt;label for="password"&gt;Password:&lt;/label&gt;<br/>
              &lt;input type="password" id="password" name="password" required /&gt;<br/>
              &lt;br /&gt;<br/>
              &lt;button type="submit"&gt;Register&lt;/button&gt;<br/>
            &lt;/form&gt;
          </pre>
        </li>
        <li>
          <strong>Output:</strong>
          <form action="/submit" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <br />
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <br />
            
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <br />
            
            <button type="submit">Register</button>
          </form>

        </li>
      </ul>
    </li><br/>
    <li>
      <h4>Best Practices for Forms</h4>
      <ul>
        <li>Use <code>&lt;label&gt;</code> tags for better accessibility.</li>
        <li>Validate inputs both on the client-side (HTML5 validation) and server-side.</li>
        <li>Use placeholder text and hints to guide users.</li>
        <li>Keep forms simple and user-friendly with clear instructions.</li>
      </ul>
    </li>
  </ul>
  <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/css">
    <button type="button" class="btn btn-success">css</button>
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
)

  }

  return (
    <div style={styles.contentArea}>
      {content[selectedContent] || (
        <div>
          <h1 style={{ textAlign: "center", color: "darkgreen" }}><b>Welcome to HTML Tutorial</b></h1>
          <img 
            src={download} 
            alt="html Illustration" 
            style={{ width: "300px", height: "300px", margin: "20px auto", display: "block" }} 
          />
          <p style={{fontFamily:"Arail"}}><strong>HTML tutorial</strong> or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.</p>
          <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
  <Link to="/Css">
    <button type="button" class="btn btn-success">Css</button>
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
    fontFamily:"Arail",
    
    
  },
  
};



export default ContentArea;
