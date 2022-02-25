import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { criarJogadordto } from './dtos/CriarJogador.dtos';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid'
import { NotFoundError } from 'rxjs';
uuidv4(); 
@Injectable()
export class JogadoresService {
    private Jogadores:Jogador[]=[];
    private readonly logger =new Logger(JogadoresService.name);
    async criarAtualizarJogador(criarJogadordto:criarJogadordto):Promise<void>{
        const{email}=criarJogadordto
        const jogadorEmcontrado=await this.Jogadores.find(jogador=>jogador.email==email)
        if(jogadorEmcontrado){
            await this.atualizar(jogadorEmcontrado,criarJogadordto)
        }else{
            await this.criar(criarJogadordto);
        }
        

    }
    async consultarTodosJogadores():Promise<Jogador[]>{
        return await this.Jogadores;
    }
   async consultarJogadoresPeloEmail(email:string):Promise<Jogador>{
    const jogadorEmcontrado=await this.Jogadores.find(jogador=>jogador.email==email)
    if (!jogadorEmcontrado){
        throw new NotFoundException(`Jogador com o email ${email} não encontrado`)    
    }
    return jogadorEmcontrado
       
   }
    private criar(criarJogadordto:criarJogadordto):void{
        const{name,email,phonenumber}=criarJogadordto
    
        const Jogador:Jogador={
            id:uuidv4(),// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
            name,
            phonenumber,
            email,
            ranking:'A',
            positionranking:1,
            urlJogador:'www.google.com.br/foto123.jpg'
        };
        this.Jogadores.push(Jogador);
    }
    private atualizar(jogadorEmcontrado:Jogador,criarJogadordto:criarJogadordto):void{
      const {name} =criarJogadordto
      jogadorEmcontrado.name=name;
    }

}
