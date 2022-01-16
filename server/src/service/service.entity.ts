import { Category } from 'src/category/category.entity';
import { UserService } from 'src/user_service/user_service.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Service')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @Column()
  url: string;

  @OneToMany(() => UserService, (user_service) => user_service.service, {
    cascade: true,
  })
  user_service: UserService;

  @ManyToOne(() => Category, (category) => category.service, {
    onDelete: 'CASCADE',
  })
  category: Category;
}
