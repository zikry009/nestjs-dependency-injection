import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
  @IsNumber()
  @IsNotEmpty({ message: 'Price is required' })
  price: number;
  @IsString()
  @IsNotEmpty({ message: 'Description is required' })
  description: string;
}
