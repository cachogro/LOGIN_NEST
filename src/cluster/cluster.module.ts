import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaController } from './controller/persona.controller';
import { PersonaService } from './services/persona.service';
import { Persona } from './entities/persona.entity';

@Module({
  controllers: [PersonaController],
  providers: [PersonaService],
  imports: [TypeOrmModule.forFeature([Persona])],
  exports: [TypeOrmModule],
})
export class ClusterModule {}
