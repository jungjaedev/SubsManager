import { Language } from 'src/language/language.entity';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(() => Language, language => language.user)
  @JoinColumn({ name: 'languageId' })
  language: Language;

  @Column()
  languageId: number;
}
