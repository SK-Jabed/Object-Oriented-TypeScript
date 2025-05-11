import { Product } from "./Product";

export class DigitalProduct extends Product {
  // downloadSizeMB: number;
  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    public downloadSizeMB: number
  ) {
    super(id, name, price, quantity);
    // this.downloadSizeMB = downloadSizeMB;
  }

  getDownloadInfo() {
    return `${this.name} is downloading. Size: ${this.downloadSizeMB}`;
  }
}
