/*
//------------------------------------------------------------------------------ 
// This code was generated by Amplication. 
// 
// Changes to this file will be lost if the code is regenerated. 
//
// There are other ways to to customize your code, see this doc to learn more
// https://docs.amplication.com/docs/how-to/custom-code
//
//------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, OrderItem, Order, Product } from "@prisma/client";

export class OrderItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.orderItem.count(args);
  }

  async findMany<T extends Prisma.OrderItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindManyArgs>
  ): Promise<OrderItem[]> {
    return this.prisma.orderItem.findMany(args);
  }
  async findOne<T extends Prisma.OrderItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemFindUniqueArgs>
  ): Promise<OrderItem | null> {
    return this.prisma.orderItem.findUnique(args);
  }
  async create<T extends Prisma.OrderItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemCreateArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.create<T>(args);
  }
  async update<T extends Prisma.OrderItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemUpdateArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.update<T>(args);
  }
  async delete<T extends Prisma.OrderItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OrderItemDeleteArgs>
  ): Promise<OrderItem> {
    return this.prisma.orderItem.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findProducts(
    parentId: string,
    args: Prisma.ProductFindManyArgs
  ): Promise<Product[]> {
    return this.prisma.orderItem
      .findUnique({
        where: { id: parentId },
      })
      .products(args);
  }
}
