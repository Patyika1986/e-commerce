const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const {
  v4: uuidv4
} = require('uuid');
const PORT = 5000;
app.use(cors());



const usersRegisterBank = [{

  id: 0,
  name: "Jon Doe",
  street: "test street 2",
  zip: 90348,
  city: "New York City",
  email: "test@mail.com",
  password: "test"

}];

const testPost = {
  id: 1,
  name: "Muster Mann",
  street: "test strasse 3",
  zip: 90348,
  city: "Hamburg",
  email: "test@mail.com",
  password: "test"
}


app.get("/api/login", (req, res, next) => {
  res.send(usersRegisterBank);
});

app.post("/api/login/", (req, res, next) => {
  let id = uuidv4();
  console.log(res.body);
  console.log(req.body);
  let data = JSON.stringify(res.body)
  res.send(data);
});

app.put("/api/login", (req, res, next) => {
  res.send('Put');
});

app.delete("/api/login", (req, res, next) => {
  res.send('Delete');
});










app.listen(PORT, () => {
  console.log(`*** Server runing on Port http:localhost:${PORT} ***`);

});
