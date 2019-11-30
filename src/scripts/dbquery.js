
const mariadb = require('mariadb');

(async () => {
    let connection;
    try {
        connection = await mariadb.createConnection({ host: "que-me-pongo-db.cnzqhwqxxppq.us-east-2.rds.amazonaws.com", port: "3306", user: "", password: "" });
        let result = await connection.query("USE QueMePongoDB;");
        console.log("Result: ", JSON.stringify(result));
        result = await connection.query("select * from Usuario;");
        console.log("Result: ", JSON.stringify(result));
        await connection.end();
    }
    catch (error) {
        console.log("Error: ", error);
        await connection.end();
    }
})();