import { Product } from 'src/product/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @Column()
  display_name_ko: string;

  @OneToMany(() => Product, product => product.category, { cascade: true })
  product: Product[];
}
