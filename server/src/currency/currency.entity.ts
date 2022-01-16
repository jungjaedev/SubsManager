import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserService } from 'src/user_service/user_service.entity';
import { User } from 'src/user/user.entity';

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

  @OneToMany(() => UserService, (user_service) => user_service.currency)
  user_service: UserService;

  @OneToMany(() => User, (user) => user.currency)
  user: User;
}
