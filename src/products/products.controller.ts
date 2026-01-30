import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * Handles GET requests to retrieve all products.
   * @returns An object containing the list of all products, a message, status, and code.
   */
  @Get()
  getAllProducts(): object {
    return this.productsService.findAll();
  }

  /**
   * Handles GET requests to retrieve a product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns An object containing the product data, a message, status, and code.
   * @throws {NotFoundException} If a product with the specified ID is not found.
   */
  @Get(':id')
  getProductById(@Param('id') id: string): object {
    return this.productsService.findById(id);
  }

  /**
   * Handles POST requests to create a new product.
   * @param createProductDto - The product data to create.
   * @returns An object containing the created product data, a message, status, and code.
   */
  @Post()
  createProduct(@Body() createProductDto: CreateProductDto): object {
    return this.productsService.createProduct(createProductDto);
  }
}
