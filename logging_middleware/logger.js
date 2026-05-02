const fetch = require("node-fetch");

async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch(
      "http://20.207.122.201/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJuczYyMjJAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNDIxOSwiaWF0IjoxNzc3NzAzMzE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmNiYjMwZDEtMGFmZS00MGJhLWIzZTYtNTNmN2NkNzE5MGVlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibmF2ZWVuIHMiLCJzdWIiOiJiNTg5MmVlZC0yMWY4LTQ2NWItYjU1MS1mZmExNjljMjRmMjAifSwiZW1haWwiOiJuczYyMjJAc3JtaXN0LmVkdS5pbiIsIm5hbWUiOiJuYXZlZW4gcyIsInJvbGxObyI6InJhMjMxMTAyNjAyMDA0NyIsImFjY2Vzc0NvZGUiOiJRa2JweEgiLCJjbGllbnRJRCI6ImI1ODkyZWVkLTIxZjgtNDY1Yi1iNTUxLWZmYTE2OWMyNGYyMCIsImNsaWVudFNlY3JldCI6ImVWdVp1eHNXVHpTREtWS1EifQ.4xdU2c1WBB-kMCYpGPfcNgSzqYTUH07IDDlHBAByf78"
        },
        body: JSON.stringify({
          stack: stack,
          level: level,
          package: pkg,
          message: message
        })
      }
    );

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Logging error:", error.message);
  }
}

module.exports = Log;