const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

//middleware
app.use(cors())
app.use(express.json());

//ROUTES//

// create a booking

app.post("/bookings", async (req, res) => {
    try {
        const { eid, title, start_time, end_time, allDay, resource } = req.body;
        const insertValues = [eid, title, start_time, end_time];
        const valuePlaceholders = ["$1", "$2", "$3", "$4"];
        const insertColumns = ["eid", "title", "start_time", "end_time"];

        // Add optional columns if provided
        if (allDay !== undefined) {
            insertColumns.push("allDay");
            insertValues.push(allDay);
            valuePlaceholders.push(`$${insertValues.length}`);
        }
        if (resource !== undefined) {
            insertColumns.push("resource");
            insertValues.push(resource);
            valuePlaceholders.push(`$${insertValues.length}`);
        }

        // Build the query string
        const query = `INSERT INTO bookings (${insertColumns.join(", ")}) VALUES (${valuePlaceholders.join(", ")}) RETURNING *`;

        // Execute the query
        const newBooking = await pool.query(query, insertValues);

        res.json(newBooking.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// get all bookings
app.get('/bookings', async (req, res) => {
    try {
        const allBookings = await pool.query("SELECT * FROM bookings");
        res.json(allBookings.rows);
    } catch (err) {
        console.log(err.message);
    }
});

// update a booking

// delete a booking

app.listen(5000, () => {
    console.log("server has started on port 5000");
    console.log("test server updates");
});