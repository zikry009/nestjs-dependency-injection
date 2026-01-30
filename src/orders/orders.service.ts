import { CreateOrderDto } from './dto/create-order.dto';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Creates a new order with the provided product and user details.
   * @param createOrderDto - The DTO containing product details and user details for the order.
   * @returns An object containing the created order details, a message, status, and code.
   */
  createOrder(createOrderDto: CreateOrderDto): object {
    const product = this.productsService.createProduct(
      createOrderDto.productDetails,
    );
    const user = this.usersService.createUser(createOrderDto.userDetails);
    const orderDetails: any = {
      product: (product as any).data,
      user: (user as any).data,
    };
    return {
      data: { orderDetails },
      message: 'Order created successfully',
      status: 'success',
      code: 201,
    };
  }
}
