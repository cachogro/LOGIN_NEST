import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from '../entities/persona.entity';
import { Repository } from 'typeorm';
import { PersonaService } from '../services/persona.service';
import { CreatePersonaDto } from 'src/dto/persona-create.dto';

@Controller('personas')
export class PersonaController {
    constructor(
        @InjectRepository(Persona)
        private readonly personaRepository: Repository<Persona>,
        private readonly personaService: PersonaService
    ){}
    @Get()
    async findAll(): Promise<Persona[]> {
        return this.personaRepository.find();
    }

    @Post()
    async crearPersona(@Body() crearPersonaDto: CreatePersonaDto): Promise<Persona> {
      return this.personaService.crearPersona(crearPersonaDto);
    }


 

}
