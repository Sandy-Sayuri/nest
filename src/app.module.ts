import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JogadoresModule } from './jogadores/jogadores.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://admin:R0GZNowEi4acpRWV@cluster0.adncl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {userNewUrlParser:true , userCreateIndex:true,userFindAndModify:false}),
    JogadoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
