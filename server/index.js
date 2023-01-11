import express from "express";
import cors from "cors"
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected");
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

// Router 
app.post("/login", (req, res) => {
    // res.send("MY API login");
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "login successfull", user: user })
            } else {
                res.send({ message: "password didn't match" })
            }
        } else {
            res.send({ message: "user not registered" })
        }
    })

})

app.get("/login/getall", async (req, res) => {
    try {
        const dataUser = await User.find();
        res.status(200).send(dataUser);
    } catch (error) {
        console.log(error);
    }
})

app.post("/register", (req, res) => {
    // res.send("MY API register");
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "user already registered" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Succesfully registered, please login now." })
                }
            })
        }
    })
})

app.listen(9002, () => {
    console.log("BE started is on 9002");
})


