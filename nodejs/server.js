import express from "express";
import cors from "cors";
import mongoose from "mongoose";
let app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }), express.json());
async function mongo() {
  try {
    await mongoose.connect(
      "mongodb+srv://salmanfisal:Salmanfisal@cluster0.arbaba9.mongodb.net/"
    );
    console.log("connected");
  } catch (err) {
    console.log(err);
  }
}
let schema = new mongoose.Schema({
  username: String,
  password: String,
});
let usermodel = new mongoose.model("studentData", schema);

mongo();
app.post("/login", (req, res) => {
  let { username, password } = req.body;
  
  usermodel.findOne({ username: username }).then((resp) => {
    if (resp) {
      if (password === resp.password) {
        res.status(200).json({
          response: "successfully loggedIn",
        });
      } else {
        res.status(200).json({
          response: "wrong password",
        });
      }
    } else {
      res.status(204).json({
        response: "wrong email",
      });
    }
  }).catch((error) => {
    // Handle any errors that occur during the database query
    res.status(500).json({
      response: "Internal Server Error",
    });
  });
});

app.get("/login", async(req, res) => {
 let data =  await usermodel.find({});
 res.json(data)
});
// app.post("/login", (req, res) => {
//   let { username, password } = req.body;
//   let user = new usermodel({
//     username,
//     password,
//   })
//  user.save()
//     .then((res)=>{
//         console.log(res)
//     })
// });
app.listen(8080, () => {
  console.log("listening to port 8080");
});
