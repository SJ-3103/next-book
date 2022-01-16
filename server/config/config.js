const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    port : process.env.PORT,
    mongo_url : process.env.MONGO_URL,
    user_db_name : process.env.USER_DB_NAME,
    cookie_db_name : process.env.COOKIE_DB_NAME,
};