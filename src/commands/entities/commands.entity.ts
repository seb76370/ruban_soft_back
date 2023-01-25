import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity('Commands')
export class CommandsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true, default: null })
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

  @Column()
  DateProduction: Date;

  @Column()
  RefFilm: string;

  @Column()
  CodesMachine: string;

  @Column()
  DateFinProduction: Date;

  @Column()
  DateEnvoieLivraison: Date;

  @Column()
  NumeroSuivi: string;

  @Column()
  PoidsColis: number;
}