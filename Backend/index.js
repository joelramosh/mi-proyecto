const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/data", (req, res) => {
  res.json({ message: "Hola desde el Backend!" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
