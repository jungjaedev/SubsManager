import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  language_id: number;

  @Column()
  currency_id: number;
}
