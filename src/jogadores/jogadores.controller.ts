import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { criarJogadordto } from './dtos/CriarJogador.dtos';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { get } from 'http';
import { Delete } from '@nestjs/common';
@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(private readonly JogadoresService:JogadoresService){}
    @Post()
    async criarAtualzarJogador(
        @Body() criarJogadordto:criarJogadordto){
            await this.JogadoresService.criarAtualizarJogador(criarJogadordto)
    }
   @Get()
   async consultarJogadores(
       @Query('email')email:string
   ):Promise<Jogador[]| Jogador> {
       if(email){
        return await this.JogadoresService.consultarJogadoresPeloEmail(email);
       }else{
            return await this.JogadoresService.consultarTodosJogadores()
       }    
   }
   @Delete()
   async deletarJogador(
       @Query('email')email:string):Promise<void>{
          this.JogadoresService.deletarJogador(email);
       }
}
