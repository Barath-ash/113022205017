 
const axios = require("axios");

const LOG_SERVER_URL = "http://20.244.56.144/evaluation-service/logs";
const AUTH_TOKEN = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...Oji4jw`;  
 
async function Log(stack, level, pkg, message) {
  try {
    const payload = {
      stack,
      level,
      package: pkg,
      message,
    };

    await axios.post(LOG_SERVER_URL, payload, {
      headers: {
        Authorization: AUTH_TOKEN,
        "Content-Type": "application/json",
      },
    });

    console.log(`[LOGGED] [${stack.toUpperCase()}] [${level.toUpperCase()}] ${pkg} - ${message}`);
  } catch (error) {
    console.error("❌ Logging failed:", error.response?.data || error.message);
  }
}

module.exports = Log;
