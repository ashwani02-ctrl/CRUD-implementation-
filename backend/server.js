const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { dbConnection } = require("./dbconnection");



const server = express();
server.use(cors());
server.use(express.json());

// Create api
server.post("/createuser", async (req, res) => {
    try {
        const { name, email, role, phone } = req.body;
        if (!name || !email || !role || !phone) {
            return res.status(400).json({
                success: false,
                message: "All field should be filled"
            })
        }

        let formdata = {
            name,
            email,
            role,
            phone,
            createdAt: new Date()
        };

        let myDB = await dbConnection();
        let formdatacollection = myDB.collection("formdata");
        let insertdata = await formdatacollection.insertOne(formdata);

        return res.status(201).json({
            success: true,
            message: "form data saved successfully",
            data: {
                id: insertdata.insertedId,
                ...formdata
            }
        })
    } catch (err) {
        console.error("Data Insertion error:", err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }


})

//Read api
server.get("/getuser", async (req, res) => {
    try {

        let myDB = await dbConnection();
        let formdatacollection = await myDB.collection("formdata");
        let alldata = await formdatacollection.find().toArray();
       

        res.status(200).json({
            success: true,
            message: "form data retreived successfully",
            data: alldata
        })
    } catch (err) {
        console.error("Data fetch error", err);
        res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }


})

server.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})