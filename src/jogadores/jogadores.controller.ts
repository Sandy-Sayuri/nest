import { Body, Controller, Get, Post } from '@nestjs/common';
import { criarJogadordto } from './dtos/CriarJogador.dtos';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { get } from 'http';
@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(private readonly JogadoresService:JogadoresService){}
    @Post()
    async criarAtualzarJogador(
        @Body() criarJogadordto:criarJogadordto){
            await this.JogadoresService.criarAtualizarJogador(criarJogadordto)
            console.log("Aqui")
    }
   @Get()
   async consultarJogadores():Promise<Jogador[]> {
       return this.JogadoresService.consultarTodosJogadores()
       
   }
}
