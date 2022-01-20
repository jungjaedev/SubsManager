import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserService } from 'src/user_service/user_service.entity';

@Entity('Period')
export class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  display_name: string;

  @OneToMany(() => UserService, (user_service) => user_service.period, {
    cascade: true,
  })
  user_service: UserService[];
}
