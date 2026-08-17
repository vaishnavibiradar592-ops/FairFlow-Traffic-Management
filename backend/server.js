const express = require("express");
const cors = require("cors");

const app = express();


// ==========================================
// SETTINGS
// ==========================================

const PORT = 5000;

const AI_URL = "http://127.0.0.1:8000";


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(cors());

app.use(express.json());


// ==========================================
// HOME / TEST
// ==========================================

app.get("/", (req, res) => {

    res.json({
        message: "FairFlow Backend is running!"
    });

});


// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/api/health", (req, res) => {

    res.json({
        success: true,
        backend: "running",
        ai_server: AI_URL
    });

});


// ==========================================
// TRAFFIC PREDICTION
// ==========================================

app.post("/api/traffic/predict", async (req, res) => {

    try {

        const {
            road,
            day,
            time,
            capacity
        } = req.body;


        // Check required information

        if (!road || !day || !time) {

            return res.status(400).json({

                success: false,

                error:
                    "Road, day and time are required."

            });

        }


        // Send request to Python AI

        const aiResponse = await fetch(
            `${AI_URL}/predict`,
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    road: road,

                    day: day,

                    time: time,

                    capacity: capacity || 2000

                })

            }
        );


        // Get AI answer

        const result = await aiResponse.json();


        // Send AI answer back to React

        res.status(aiResponse.status).json(result);


    } catch (error) {

        console.error(
            "AI connection error:",
            error
        );


        res.status(500).json({

            success: false,

            error:
                "Could not connect to AI server.",

            details:
                error.message

        });

    }

});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

    console.log();
    console.log(
        "======================================"
    );

    console.log(
        "       FAIRFLOW BACKEND"
    );

    console.log(
        "======================================"
    );

    console.log(
        `Backend running on http://localhost:${PORT}`
    );

    console.log(
        `AI server: ${AI_URL}`
    );

    console.log(
        "======================================"
    );

});