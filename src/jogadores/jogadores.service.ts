import { Injectable, Logger } from '@nestjs/common';
import { criarJogadordto } from './dtos/CriarJogador.dtos';
import { Jogador } from './interfaces/jogador.interface';
import { v4 as uuidv4 } from 'uuid'
uuidv4(); 
@Injectable()
export class JogadoresService {
    private Jogadores:Jogador[]=[];
    private readonly logger =new Logger(JogadoresService.name);
    async criarAtualizarJogador(criarJogadordto:criarJogadordto):Promise<void>{
        this.logger.log(`criaJogadordto: ${criarJogadordto}`)
        await this.criar(criarJogadordto);


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
}
