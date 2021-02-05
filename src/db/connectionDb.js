const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/covid-js",{
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true
})