import{Document} from 'mongoose'
export interface Jogador extends Document{
    readonly phonenumber:string;
    readonly email:string;
    name:string;
    ranking:string;
    positionranking: number;
    urlJogador:string;
}