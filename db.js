const mongoose = require('mongoose')

const url = "mongodb+srv://Vedant102:<Pwd>@cluster1.3hvn3.mongodb.net/q-c-m?retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose.connect(url, {
    useNewurlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log("MongoDb connected sucesssfully")
  }).catch((error) => console.log("Error: ", error))
}