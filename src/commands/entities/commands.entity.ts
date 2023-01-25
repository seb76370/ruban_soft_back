import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CustomerEntity } from 'src/customers/entities/customer.entity';

@Entity('Commands')
export class CommandsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  Siret: string;

  @Column()
  @IsNotEmpty()
  Produit: string;

  @Column()
  Prix: string;

  @Column()
  DateCommande: Date;

  @Column()
  DateSouhaite: Date;

  @Column({default: "00000000"})
  DateProduction: Date;

  @Column({default: ""})
  RefFilm: string;

  @Column({default: ""})
  CodesMachine: string;

  @Column({default: "00000000"})
  DateFinProduction: Date;

  @Column({default: "00000000"})
  DateEnvoieLivraison: Date;

  @Column({default: ""})
  NumeroSuivi: string;

  @Column({default: 0})
  PoidsColis: number;


@ManyToOne(
  type =>CustomerEntity,
  (customer) => customer.command
)

customer:CustomerEntity;

}