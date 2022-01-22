import { UserProduct } from 'src/userProduct/userProduct.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Period')
export class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @OneToMany(() => UserProduct, userProduct => userProduct.period, { cascade: true })
  userProduct: UserProduct[];
}
