import { Currency } from 'src/currency/currency.entity';
import { Language } from 'src/language/language.entity';
import { UserProduct } from 'src/userProduct/userProduct.entity';
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

  @Column()
  languageId: number;
  @ManyToOne(() => Language, language => language.user, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'languageId' })
  language: Language;

  @Column()
  currencyId: number;
  @ManyToOne(() => Currency, currency => currency.user, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;

  @OneToMany(() => UserProduct, userProduct => userProduct.user, { cascade: true })
  userProduct: UserProduct[];
}
