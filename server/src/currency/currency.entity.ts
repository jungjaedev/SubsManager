import { User } from 'src/user/user.entity';
import { UserProduct } from 'src/userProduct/userProduct.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Currency')
export class Currency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @Column()
  code: string;

  @Column()
  symbol: string;

  @OneToMany(() => User, user => user.currency, { cascade: true })
  user: User[];

  @OneToMany(() => UserProduct, userProduct => userProduct.currency, { cascade: true })
  userProduct: UserProduct[];
}
