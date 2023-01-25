import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CommandsDto {

  @IsNotEmpty()
  Siret: string;

  @IsNotEmpty()
  Produit: string;

  @IsNotEmpty()
  Prix: string;
  
  @IsNotEmpty()
  DateCommande: Date;

  @IsNotEmpty()
  DateSouhaite: Date;

  DateProduction: Date;

  RefFilm: string;

  CodesMachine: string;

  DateFinProduction: Date;

  DateEnvoieLivraison: Date;

  NumeroSuivi: string;

  PoidsColis: number;

}
