import express from "express";
import cors from "cors";
import mongoose from "mongoose";
let app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }), express.json());
async function mongo() {
  try {
    await mongoose.connect("mongodb+srv://salmanfisal:Salmanfisal@cluster0.arbaba9.mongodb.net/");
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
  res.json(req.body);
  let { username, password } = req.body;
  usermodel.findOne({ username: username}).then( (resp) => {
    if (resp) {
      if (password === resp.password) {
        console.log("successfully loggedIn");
      }
      else{
        console.log("wrong password")
      }
    }else{
      console.log("wrong email")
    }

  });
});

app.get("/get",(req,res)=>{
  usermodel.find({})
})
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
