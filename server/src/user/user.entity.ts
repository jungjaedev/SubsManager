import { Currency } from 'src/currency/currency.entity';
import { Language } from 'src/language/language.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserService } from '../user_service/user_service.entity';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserService, (user_service) => user_service.user)
  user_service: UserService;

  @ManyToOne(() => Language, (language) => language.user)
  language: Language;

  @ManyToOne(() => Currency, (currency) => currency.user)
  currency: Currency;
}
