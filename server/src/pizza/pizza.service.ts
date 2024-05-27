import { Injectable } from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { Pizza } from './entities/pizza.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PizzaService {
  constructor(
    @InjectRepository(Pizza)
    private pizzaRepository: Repository<Pizza>,
  ) { }

  async create(createPizzaDto: CreatePizzaDto) {
    const pizza = this.pizzaRepository.create(createPizzaDto);
    const created = await this.pizzaRepository.save(pizza);
    return created;
  }

  findAll() {
    // return `This action returns all pizza`;
    return this.pizzaRepository.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} pizza`;
    return this.pizzaRepository.find({
      where: {
        ProductID: id,
      }
    });
  }

  async update(id: number, updatePizzaDto: UpdatePizzaDto) {
    await this.pizzaRepository.update(id, updatePizzaDto);
    return this.pizzaRepository.findOneBy({ ProductID: id });
  }

  remove(id: number) {
    return this.pizzaRepository.delete(id);
  }
}
