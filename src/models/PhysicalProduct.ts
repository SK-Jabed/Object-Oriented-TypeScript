import { Purchasable } from "../interfaces/";
import { Product } from "./Product";

export class PhysicalProduct extends Product implements Purchasable {
  getStockValue(): number {
    return this.price;
  }
}
