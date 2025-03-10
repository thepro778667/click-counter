# Click Counter

This is a simple web page that counts the number of times a button is clicked.

## Features

*   Counts button clicks.
*   Displays the current click count.
*   (Simulated) logging of clicks to `logs/execution.log`.  In a browser environment, this is only logged to the browser's console.

## Setup

1.  Create a directory for the project (e.g., `click-counter`).
2.  Save the HTML code as `index.html` in the project directory.
3.  Save the CSS code as `style.css` in the project directory.
4.  Save the JavaScript code as `script.js` in the project directory.
5. Create a folder named `logs` in the same directory.
6.  Open `index.html` in a web browser.

## Usage

Simply click the "Click me!" button. The click count will be displayed and updated below the button.  The (simulated) log messages will appear in the browser's developer console.

## Build Scripts

The `build.sh` (for Linux/Mac) and `build.bat` (for Windows) scripts are provided for completeness, but they only create the `logs` directory in this simple project.  In a more complex project, they would handle tasks like compilation, minification, and bundling.