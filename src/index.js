import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { makeStore } from "./redux/store";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <>
    <Provider store={makeStore()}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);

// Single Page Application Pros and Cons
// Just like most other technologies, SPAs have their own advantages and disadvantages. Knowing about each one of them will bring you closer to deciding whether the SPA framework fits your app idea or not.

// Single Page Application Pros
// Single-page applications are fast as most of the resources, including HTML, CSS, and Scripts, are loaded once, and only data is transmitted back and forth. Here are some of the business benefits of building single-page applications:

// 1. Quick Loading Time
// A page taking over 200 milliseconds to load can significantly affect your online business and, eventually, sales.

// With the SPA approach, your full page loads quicker than traditional web applications, as it only has to load a page at the first request. On the other hand, traditional web apps have to load pages at every request, taking more time.

// 2. Seamless User Experience
// SPAs deliver an experience like a desktop or mobile app. Users do not have to watch a new page load, as only the content changes and not the page, making the experience an enjoyable one.

// 3. Ease in Building Feature-rich Apps
// SPA application makes it easy to add advanced features to a web application. For example, it is easier to build a content editing web app with real-time analysis using SPA development. Doing this with a traditional web app requires a total page reload to perform content analysis.

// 4. Uses Less Bandwidth
// It is no surprise that SPAs consume less bandwidth since they only load web pages once. Besides that, they can also do well in areas with a slow internet connection. Hence, it is convenient for everyone to use, regardless of internet speed.

// Single Page Application Cons
// Single page application architecture is best for developing high-performing SAAS platforms and social networks. However, this approach has some disadvantages that make it unsuitable for developing highly secure, and SEO optimized websites.

// 1. Doesn’t Perform Well With SEO
// One of the metrics that search engines use is the number of pages a website has. However, since SPAs only load a single page, it serves as a disadvantage when ranking on search engines

// 2. Uses a Lot of Browser Resources
// SPAs require many resources from the web browser since the browser is doing most of the tasks for the SPAs. Creating SPAs often need users to use the latest browsers with support for some modern features.

// 3. Security Issues
// As compared to multi-page apps, SPAs are more prone to cross-site scripting attacks. Using XSS, it becomes easy for hackers to introduce client-side scripts into a web app. Also, SPAs are more likely to expose sensitive data to all users.
