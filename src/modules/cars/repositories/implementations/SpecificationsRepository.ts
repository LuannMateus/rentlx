import { getRepository, Repository } from 'typeorm';
import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Repository<Specification>;

  constructor() {
    this.specifications = getRepository(Specification);
  }

  public async findAll(): Promise<Specification[]> {
    return await this.specifications.find({});
  }

  public async findByName(name: string): Promise<Specification> {
    return await this.specifications.findOne({ name });
  }

  public async save({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.specifications.create({ name, description });

    await this.specifications.save(specification);
  }
}

export { SpecificationsRepository };
