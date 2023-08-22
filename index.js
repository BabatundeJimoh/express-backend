const express = require("express");

const server = express();

const handleAllTypesOfRequests = (req, res) => {
  res.send("response from server.use");
};

server.use("/profile", handleAllTypesOfRequests);

server.get("/login", (req, res) => res.send("this is a login with get"));
server.post("/signup", (req, res) =>
  res.send("hello this is signup with post")
);
server.put("/home", (req, res) => res.send("hello this is home with put")); // Changed .push() to .put()
server.patch("/other", (req, res) =>
  res.send("hello this is other with patch")
);
server.delete("/delete", (req, res) =>
  res.send("hello this is delete with delete")
);

server.listen(3000, "127.0.0.1", () =>
  console.log("server is ready to accept requests")
);
