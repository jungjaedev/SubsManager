import { Currency } from 'src/currency/currency.entity';
import { Period } from 'src/period/period.entity';
import { Service } from 'src/service/service.entity';
import { Type } from 'src/type/type.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserService')
export class UserService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column({ type: 'timestamp' })
  start_date: Date;

  @Column({ type: 'timestamp' })
  end_date: Date;

  @Column()
  auto_renew: boolean;

  @Column()
  billing_cycle: number;

  @ManyToOne(() => User, (user) => user.user_service, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Service, (service) => service.user_service, {
    onDelete: 'CASCADE',
  })
  service: Service;

  @ManyToOne(() => Type, (type) => type.user_service, {
    onDelete: 'CASCADE',
  })
  type: Type;

  @ManyToOne(() => Period, (period) => period.user_service, {
    onDelete: 'CASCADE',
  })
  period: Period;

  @ManyToOne(() => Currency, (currency) => currency.user_service, {
    onDelete: 'CASCADE',
  })
  currency: Currency;
}
