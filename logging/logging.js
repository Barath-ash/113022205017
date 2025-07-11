 
const axios = require('axios');

const sendLog = async ({ stack, level, pkg, message }) => {
  try {
    const response = await axios.post(
      'http://20.244.56.144/evaluation-service/logs',
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJiYmFyYXRoNjAxQGdtYWlsLmNvbSIsImV4cCI6MTc1MjIxNDY5NiwiaWF0IjoxNzUyMjEzNzk2LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYmUyZTQzM2UtYzVmYy00OTg1LWJmMmQtNzQwYTA0YTZlNTA1IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiYmFyYXRoIGQiLCJzdWIiOiI1OTA3MTkzNy1hMjdjLTRmNWItOTA2OS02YTg1ODM0ZWUzYzUifSwiZW1haWwiOiJiYmFyYXRoNjAxQGdtYWlsLmNvbSIsIm5hbWUiOiJiYXJhdGggZCIsInJvbGxObyI6IjExMzAyMjIwNTAxNyIsImFjY2Vzc0NvZGUiOiJDV2JxZ0siLCJjbGllbnRJRCI6IjU5MDcxOTM3LWEyN2MtNGY1Yi05MDY5LTZhODU4MzRlZTNjNSIsImNsaWVudFNlY3JldCI6IlpEZ1JDQk5VcUpwTXpndVQifQ.MPtKbG5YwolQHiVrIGZL8ThkJXsTO3p78aeRyOji4jw`
        }
      }
    );

    console.log("✅ Log sent:", response.data);
  } catch (error) {
    console.error(" Log sending failed:", error.response?.data || error.message);
  }
};

module.exports = sendLog;
