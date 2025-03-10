document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const clickCountDisplay = document.getElementById('clickCount');
    let clickCount = 0;

    // Function to log messages to the execution log
    function logMessage(message) {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} - ${message}\n`;

        // In a real browser environment, you can't directly write to the filesystem.
        // This is a placeholder for a more robust logging solution (e.g., using a server-side endpoint).
        // For this example, we'll just log to the console.
        console.log("Log Entry (simulated):", logEntry);

        // In a Node.js environment, you would use fs.appendFile:
        /*
        const fs = require('fs');
        const path = require('path');
        const logFilePath = path.join(__dirname, 'logs', 'execution.log');

        fs.appendFile(logFilePath, logEntry, (err) => {
            if (err) {
                console.error('Error writing to log file:', err);
            }
        });
        */
    }

    clickButton.addEventListener('click', function() {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
        logMessage(`Button clicked. Count: ${clickCount}`);
    });

    logMessage('Page loaded.'); // Initial log entry
});