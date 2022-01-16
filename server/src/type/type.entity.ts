import { UserService } from '../user_service/user_service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Type')
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @OneToMany(() => UserService, (user_service) => user_service.type, {
    cascade: true,
  })
  user_service: UserService;
}
