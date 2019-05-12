// @ts-ignore
import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "xedike",
  password: "admin25251325"
});

export default pool.promise();
