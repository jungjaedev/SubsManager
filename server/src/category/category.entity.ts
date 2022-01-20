import { Service } from 'src/service/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @OneToMany(() => Service, (service) => service.category, {
    cascade: true,
  })
  service: Service[];
}
