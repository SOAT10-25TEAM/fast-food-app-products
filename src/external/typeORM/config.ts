// adapters/typeORM/TypeORMConfig.ts
import { DataSource } from "typeorm";
import { ProductEntity } from "./entities/product";
import { CategoryEntity } from "./entities/category";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: 3307,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE || "soat_products",
  logging: true,
  synchronize: false,
  entities: [
    ProductEntity,
    CategoryEntity
  ],
  migrations: [__dirname + "/migrations/*.{ts,js}"],
});
