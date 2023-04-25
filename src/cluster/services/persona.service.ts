import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from '../entities/persona.entity';
import { Repository } from 'typeorm';
import { CreatePersonaDto } from 'src/dto/persona-create.dto';
import { classToPlain } from 'class-transformer';

@Injectable()
export class PersonaService {
    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
    ){}
    async crearPersona(CreatePersonaDto: CreatePersonaDto) {
        try {
          const personaC = this.personaRepository.create(classToPlain(CreatePersonaDto));
          await this.personaRepository.save(personaC);
          return personaC;
          
        } catch (error) {
          console.log(error);
          throw new InternalServerErrorException('Ayuda!');
        }
      }



}
