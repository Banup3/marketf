const {model} =require("mongoose");

const {OrderSchema} =require("../schemas/orderschema");

const Ordermodel = model("Order",OrderSchema);

module.exports={Ordermodel};

