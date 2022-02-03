import { UserProduct } from 'src/userProduct/userProduct.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Type')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @OneToMany(() => UserProduct, userProduct => userProduct.type, { cascade: true })
  userProduct: UserProduct[];
}
