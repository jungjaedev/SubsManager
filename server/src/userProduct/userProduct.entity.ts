import { Currency } from 'src/currency/currency.entity';
import { Period } from 'src/period/period.entity';
import { Product } from 'src/product/product.entity';
import { Type } from 'src/type/type.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserProduct')
export class UserProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column({ type: 'timestamp'})
  start_date: Date;

  @Column({ type: 'timestamp'})
  end_date: Date;

  @Column()
  auto_renew: boolean;
  
  @Column()
  billing_cycle: number;
  
  @Column()
  userId: number;
  @ManyToOne(() => User, user => user.userProduct, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  periodId: number;
  @ManyToOne(() => Period, period => period.userProduct, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'periodId' })
  period: Period;

  @Column()
  typeId: number;
  @ManyToOne(() => Type, type => type.userProduct, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'typeId' })
  type: Type;

  @Column()
  productId: number;
  @ManyToOne(() => Product, product => product.userProduct, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  currencyId: number;
  @ManyToOne(() => Currency, currency => currency.userProduct, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'currencyId' })
  currency: Currency;
}
