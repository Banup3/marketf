const {model} =require("mongoose");

const {PositionSchema} =require("../schemas/positionschema");

const Positionmodel = new model("Position",PositionSchema);

module.exports={Positionmodel};