const express = require("express");
const cors = require("cors");
const connection = require("./db");

const app = express();

app.use(cors());
app.use(express.json());


// REGISTER API

app.post("/register", (req, res) => {
    const { fullname, email, password } = req.body;

    console.log("REGISTER DATA:", req.body);

    const insertQuery =
        "INSERT INTO users(fullname, email, password) VALUES (?, ?, ?)";

    connection.query(insertQuery, [fullname, email, password], (err, result) => {

        if (err) {
            console.log("FULL ERROR:", err);

            if (err.code === "ER_DUP_ENTRY") {
                return res.send("User already exists");
            }

            return res.send("Registration Failed: " + err.message);
        }

        return res.send("Registration Successful");
    });
});


// LOGIN API

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    const query =
        "SELECT * FROM users WHERE email=? AND password=?";

    connection.query(
        query,
        [email, password],
        (err, result) => {

            if (err) {
                return res.send("Something Went Wrong");
            }

            if (result.length > 0) {
                res.send("Login Success");
            }
            else {
                res.send("Invalid Credentials");
            }
        }
    );
});


// // CONTACT API

// app.post("/contact", (req, res) => {

//     const { name, email, subject, message } = req.body;

//     const query =
//         "INSERT INTO contacts(name, email, subject, message) VALUES (?, ?, ?, ?)";

//     connection.query(
//         query,
//         [name, email, subject, message],
//         (err, result) => {

//             if (err) {
//                 console.log(err);
//                 return res.json({
//                     success: false,
//                     message: "Message Not Saved"
//                 });
//             }

//             res.json({
//                 success: true,
//                 message: "Message Saved Successfully"
//             });
//         }
//     );
// });

app.listen(5000, () => {
    console.log("Server Running On Port 5000");
});