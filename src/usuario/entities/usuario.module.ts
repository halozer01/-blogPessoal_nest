import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./usuario.entity";
import { AuthModule } from "../../auth/auth.module";
import { UsuarioController } from "../controllers/usuario.controller";
import { UsuarioService } from "../service/usuario.service";


@Module({
    imports: [TypeOrmModule.forFeature([Usuario]), forwardRef(() => AuthModule)],
    providers:[UsuarioService],
    controllers: [UsuarioController],
    exports: [UsuarioService],
})
export class UsuarioModule {}
