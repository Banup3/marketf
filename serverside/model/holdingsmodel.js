const {model} =require("mongoose");

const {HoldingSchema} =require("../schemas/holdingschema");

const HoldingModel = new model("Holding",HoldingSchema);

module.exports={HoldingModel}