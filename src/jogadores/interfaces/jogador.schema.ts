import* as mongose from  'mongoose'

export const JogadorSchema = new mongose.Schema({
    phonenumber:{type:String,unique:true},
    email:{type:String,unique:true},
    name:String,
    ranking:String,
    positionranking:Number,
    urlJogador:String
},{
    timestamps:true,collection:'jogadores'
});
