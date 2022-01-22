import { Category } from 'src/category/category.entity';
import { UserProduct } from 'src/userProduct/userProduct.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @Column()
  url: string;

  @Column()
  categoryId: number;
  @ManyToOne(() => Category, category => category.product, { onDelete: "CASCADE" } )
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @OneToMany(() => UserProduct, userProduct => userProduct.product, { cascade: true })
  userProduct: UserProduct[];
}
