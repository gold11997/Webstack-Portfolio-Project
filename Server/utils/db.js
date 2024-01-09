import mysql from 'mysql2';

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeems"
});

con.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err.message);
        return;
    }
    console.log("Connected to database");
});

export default con;