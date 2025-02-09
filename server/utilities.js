const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017";
const port = process.env.PORT || 3001;
const secretKey = process.env.SECRET_KEY || "New_Project"

module.exports = {
    dbUrl, port, secretKey
}