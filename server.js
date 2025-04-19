const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// React च्या build फोल्डरमधून static फाइल्स सर्व्ह कर
app.use(express.static(path.join(__dirname, "build")));

// unknown रूटसाठी React index.html परत पाठव
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Frontend running on port ${port}`);
});
