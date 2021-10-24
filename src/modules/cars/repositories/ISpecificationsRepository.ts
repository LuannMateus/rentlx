import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  findAll(): Specification[];

  findByName(name: string): Specification;

  save({ name, description }: ICreateSpecificationDTO);
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
