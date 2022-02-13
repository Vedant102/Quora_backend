const express = require ('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser =  require('body-parser');
const PORT = 80;
const db = require('./db')
const router = require('./routes')

//database connection
db.connect()

//middleware
app.use(bodyParser.json({limit: "50mb"}))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}))

//cors
app.use((req ,res, next) => {
  req.header("Access-Control_allow-Origin","*")
  req.header("Access-Control_allow-Headers","*");
  next()
})

//routes
app.use('/api',router)

app.use('/uploads', express.static(path.join(__dirname,"/../uploads")))
app.use('/uploads', express.static(path.join(__dirname,"/../frontend/build")))

app.get("*",(req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/buildindex.html`))
  } catch (e) {
    res.send("Opps! enexpected error")
  }
})

app.use(cors())

//server listening
app.listen(process.env.PORT || 80, () => {
  console.log(`Listning at port ${PORT}`)
})