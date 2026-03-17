🧩 Project: Modular React Application with Import/Export
This project demonstrates a modular React application built for the AD311 assignment. It focuses on organizing UI elements into separate components, using both default exports and named exports, and composing them together in App.js.

📁 Project Structure
Code
src/
  App.js
  index.js
  components/
    Header.js
    Footer.js
    ContentA.js
    ContentB.js
    SharedComponents.js
Each component is isolated, reusable, and imported into App.js to build the full UI.

🧱 Components Overview
Header.js
Default export

Displays the main page header

Footer.js
Default export

Displays the page footer

ContentA.js
Named export

First content section demonstrating modular layout

ContentB.js
Named export

Second content section demonstrating modular layout

SharedComponents.js
Named export: Button

Reusable button component used in multiple places

🔗 Import/Export Summary
Component	Export Type	Imported In App.js As
Header.js	Default export	
import Header from ...

Footer.js	Default export	
import Footer from ...

ContentA.js	Named export	
import { ContentA } ...

ContentB.js	Named export	
import { ContentB } ...

SharedComponents	Named export	
import { Button } ...
This demonstrates correct usage of both export styles.

▶️ How to Run the Project
Install dependencies:

Code
npm install
Start the development server:

Code
npm start
Open the app in your browser at:
http://localhost:3000

🖼️ Screenshot of Running Application
(Insert your screenshot here after pushing the project.)

🎯 Assignment Goals Achieved
Created multiple modular components

Used both default and named exports

Imported all components into App.js

Demonstrated component composition

Rendered a clean, functional UI
