const CartesiMachine = require("@cartesi/machine");

// Define the Cartesi Machine
const machine = new CartesiMachine({
    code: `
        const express = require('express');
        const app = express();

        app.get('/', (req, res) => {
            res.redirect('https://real-finance.netlify.app');
        });

        app.get('/connect-wallet', (req, res) => {
            // Perform wallet connection logic here
            // Once wallet is connected, redirect to real-listings.netlify.app
            res.redirect('https://real-listings.netlify.app');
        });

        app.listen(3000, () => {
            console.log('Server running on port 3000');
        });
    `,
    filesystem: {},
    runtime: "node",
});

// Run the Cartesi Machine
machine.run().then(() => {
    console.log("Machine execution finished.");
}).catch((error) => {
    console.error("Error executing machine:", error);
});
