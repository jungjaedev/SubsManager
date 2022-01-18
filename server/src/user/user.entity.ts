import { Currency } from 'src/currency/currency.entity';
import { Language } from 'src/language/language.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserService } from '../user_service/user_service.entity';

@Entity('User')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserService, (user_service) => user_service.user, {
    cascade: true,
  })
  user_service: UserService[];

  @ManyToOne(() => Language, (language) => language.user, {
    onDelete: 'CASCADE',
  })
  language: Language;

  @ManyToOne(() => Currency, (currency) => currency.user, {
    onDelete: 'CASCADE',
  })
  currency: Currency;
}
