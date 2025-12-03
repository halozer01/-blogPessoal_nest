import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controllers/postagem.controller";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { Tema } from "../tema/entities/tema.entity";
import { TemaModule } from "../tema/entities/tema.module";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService],
    controllers: [PostagemController],
    exports: [TypeOrmModule]
})
export class PostagemModule {}

