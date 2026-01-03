import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './postagens/entities/postagem.entity';
import { PostagemModule } from './postagens/postagem.module'; 
import { Tema } from './tema/entities/tema.entity';
import { TemaModule } from './tema/entities/tema.module';
import { AuthModule } from './auth/auth.module';
import { Usuario } from './usuario/entities/usuario.entity';
import { UsuarioModule } from './usuario/entities/usuario.module';
import { AppController } from './app.controller';
import { ProdService } from './data/service/prod.service';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports: [
    ConfigModule.forRoot(),
TypeOrmModule.forRootAsync({
	useClass: ProdService,
    imports: [ConfigModule],
}),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
