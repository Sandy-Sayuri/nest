import { Body, Controller, Post } from '@nestjs/common';
import { criarJogadordto } from './dtos/CriarJogador.dtos';
import { JogadoresService } from './jogadores.service';
@Controller('api/v1/jogadores')
export class JogadoresController {
    constructor(private readonly JogadoresService:JogadoresService){}
    @Post()
    async criarAtualzarJogador(
        @Body() criarJogadordto:criarJogadordto){
            await this.JogadoresService.criarAtualizarJogador(criarJogadordto)
            console.log("Aqui")
    }
}
