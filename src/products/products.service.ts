import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { LoggerService } from 'src/common/logger/logger.service';

@Injectable()
export class ProductsService {
  private readonly products: Array<CreateProductDto & { id: string }> = [];
  constructor(private readonly logger: LoggerService) {}
  /**
   * Retrieves all products.
   * @returns An object containing the list of all products, a message, status, and code.
   */
  findAll(): object {
    return {
      data: this.products,
      message: 'Products fetched successfully',
      status: 'success',
      code: 200,
    };
  }

  /**
   * Retrieves a product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns An object containing the product data, a message, status, and code.
   * @throws {NotFoundException} If a product with the specified ID is not found.
   */
  findById(id: string): object {
    const product = this.products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return {
      data: product,
      message: 'Product fetched successfully',
      status: 'success',
      code: 200,
    };
  }
  /**
   * Creates a new product.
   * @param product - The product data to create.
   * @returns An object containing the created product data, a message, status, and code.
   */
  createProduct(product: CreateProductDto): object {
    this.products.push({ id: String(this.products.length + 1), ...product });
    this.logger.log(`Product created: ${product.name}`);
    return {
      data: product,
      message: 'Product created successfully',
      status: 'success',
      code: 201,
    };
  }
}
