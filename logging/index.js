const express = require('express');
const cors = require('cors');
const sendLog = require('./logging');  

const app = express();
app.use(cors());
app.use(express.json());

app.post("/test", async (req, res) => {
   
  await sendLog({
    stack: "frontend",
    level: "info",
    pkg: "api",
    message: "Started"
  });

  res.json({ status: "log sent" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
