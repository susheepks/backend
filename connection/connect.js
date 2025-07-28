const mongoose = require("mongoose");
const connectdb = (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log("not connected.error!!");
    });
};
module.exports =  connectdb ;

