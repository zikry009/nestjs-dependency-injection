import { Type } from 'class-transformer';
import { IsNotEmpty, IsObject, ValidateNested } from 'class-validator';
import { CreateProductDto } from 'src/products/dto/create-product.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

export class CreateOrderDto {
  @IsNotEmpty({ message: 'Product details are required' })
  @IsObject()
  @ValidateNested()
  @Type(() => CreateProductDto)
  productDetails: CreateProductDto;

  @IsNotEmpty({ message: 'User details are required' })
  @IsObject()
  @ValidateNested()
  @Type(() => CreateUserDto)
  userDetails: CreateUserDto;
}
