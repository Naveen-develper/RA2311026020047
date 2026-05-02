const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
console.log("FILE LOADED ✅");

const app = express();


app.use(cors());

const PORT = 5000;


app.get("/test", (req, res) => {
  res.send("Working ✅");
});

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuczYyMjJAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDIxOSwiaWF0IjoxNzc3NzAzMzE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmNiYjMwZDEtMGFmZS00MGJhLWIzZTYtNTNmN2NkNzE5MGVlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmF2ZWVuIHMiLCJzdWIiOiJiNTg5MmVlZC0yMWY4LTQ2NWItYjU1MS1mZmExNjljMjRmMjAifSwiZW1haWwiOiJuczYyMjJAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJuYXZlZW4gcyIsInJvbGxObyI6InJhMjMxMTAyNjAyMDA0NyIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6ImI1ODkyZWVkLTIxZjgtNDY1Yi1iNTUxLWZmYTE2OWMyNGYyMCIsImNsaWVudFNlY3JldCI6ImVWdVp1eHNXVHpTREtWS1EifQ.4xdU2c1WBB-kMCYpGPfcNgSzqYTUH07IDDlHBAByf78";


app.get("/notifications", async (req, res) => {
  try {
    const response = await fetch(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    const data = await response.json();

    console.log("API DATA:", data);

    res.status(200).json(data.notifications || []);
  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: "Failed to fetch" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});