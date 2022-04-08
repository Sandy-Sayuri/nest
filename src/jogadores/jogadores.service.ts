import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { criarJogadordto } from './dtos/CriarJogador.dtos';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid'
import { NotFoundError } from 'rxjs';
import { join } from 'path';
import{InjectModel} from '@nestjs/mongoose'
import{Model} from 'mongoose'
uuidv4(); 
@Injectable()
export class JogadoresService {


    constructor(@InjectModel('Jogador') private readonly jogadorModel:Model<Jogador>){}
    private readonly logger =new Logger(JogadoresService.name);
    async criarAtualizarJogador(criarJogadordto:criarJogadordto):Promise<void>{
        const{email}=criarJogadordto
        //const jogadorEmcontrado=await this.Jogadores.find(jogador=>jogador.email==email)
        const jogadorEmcontrado=await this.jogadorModel.findOne({email}).exec();
        if(jogadorEmcontrado){
            await this.atualizar(jogadorEmcontrado,criarJogadordto)
        }else{
            await this.criar(criarJogadordto);
        }
        

    }
    async consultarTodosJogadores():Promise<Jogador[]>{
        return await this.jogadorModel.find().exec()
        // return await this.Jogadores;
    }
   async consultarJogadoresPeloEmail(email:string):Promise<Jogador>{
    const jogadorEmcontrado=await this.jogadorModel.findOne({email}).exec();
    if (!jogadorEmcontrado){
        throw new NotFoundException(`Jogador com o email ${email} não encontrado`)    
    }
    return jogadorEmcontrado
       
   }
    async deletarJogador(email):Promise<any>{
        return await this.jogadorModel.remove({email}).exec()
        // const jogadorEmcontrado=await this.Jogadores.find(jogador=>jogador.email=== email)
        // this.Jogadores=this.Jogadores.filter(jogador=>jogador.email!== jogadorEmcontrado.email)

    }
    private async criar(criarJogadordto:criarJogadordto):Promise<Jogador>{
        const jogadorCriado=new this.jogadorModel(criarJogadordto)
        return await jogadorCriado.save()
         jogadorCriado.save()
        // const{name,email,phonenumber}=criarJogadordto
    
        // const jogador:Jogador={
        //     id:uuidv4(),// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        //     name,
        //     phonenumber,
        //     email,
        //     ranking:'A',
        //     positionranking:1,
        //     urlJogador:'www.google.com.br/foto123.jpg'
        // };
        // this.Jogadores.push(jogador);
    }
    private async atualizar(jogadorEmcontrado:Jogador,criarJogadordto:criarJogadordto):Promise<Jogador>{
        return await this.jogadorModel.findByIdAndUpdate({email:criarJogadordto.email},{$set:criarJogadordto}).exec()
    //   const {name} =criarJogadordto
    //   jogadorEmcontrado.name=name;
    }

}
