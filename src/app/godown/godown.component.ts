import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-godown',
  templateUrl: './godown.component.html',
  styleUrls: ['./godown.component.css'],
})
export class GodownComponent {
  constructor(private api: ApiService) {
    this.getProducts();
  }

  products: any = [];

  isAddProduct: boolean = false;
  isProductEdit: boolean = false;

  product: any = '';
  purchaseQuantity: any = null;
  recievedQuantity: any = null;
  purchaseDate: any = '';
  recievedDate: any = null;
  purchaseAmount: any = null;
  stockBalance: any = null;
  personName: any = localStorage.getItem('username');

  purchaseQuantityTotal: any = 0;
  recievedQuantityTotal: any = 0;

  QuantityTotal: any = 0;

  editProductId: any = null;
  editProductName: any = null;
  editPurchaseQuantity: any = null;
  editRecievedQuantity: any = null;
  editPurchaseDate: any = null;
  editRecievedDate: any = null;
  editPurchaseAmount: any = null;
  editStockBalance: any = null;

  addProduct() {
    const product = {
      name: this.product,
      quantity: this.purchaseQuantity,
      recievedQuantity: this.recievedQuantity,
      purchasedDate: this.purchaseDate,
      recievedDate: this.recievedDate,
      price: this.purchaseAmount,
      stockBalance: this.stockBalance,
      additionalNumber: this.recievedQuantity - this.purchaseQuantity,
      personName: this.personName,
    };
    this.api.addGodownProduct(product).subscribe((data: any) => {
      console.log(data);
      this.getProducts();
      this.isAddProduct = false;
      this.product = '';
      this.purchaseQuantity = null;
      this.recievedQuantity = null;
      this.purchaseDate = '';
      this.recievedDate = null;
      this.purchaseAmount = null;
      this.stockBalance = null;
    });
  }

  getProducts() {
    this.api.getGodownProducts().subscribe((data: any) => {
      this.products = data.data;
      console.log(this.products);
      this.products.forEach((product: any) => {
       if(product.additionalNumber >  0){
        this.purchaseQuantityTotal += product.additionalNumber;
       }else{
        this.recievedQuantityTotal += product.additionalNumber;
       }
      });
      this.QuantityTotal = this.recievedQuantityTotal - this.purchaseQuantityTotal;
    });
  }

  toggleAddProduct() {
    this.isProductEdit = false;
    this.isAddProduct = !this.isAddProduct;
  }

  deleteProduct(id: any) {
    const result = confirm('Are you sure you want to delete this product?');
    if (!result) return;
    this.api.deleteGodownProduct({ id: id }).subscribe((data: any) => {
      this.getProducts();
    });
  }

  setEditProduct(product: any) {
    this.isAddProduct = false;
    this.isProductEdit = true;
    this.editProductId = product._id;
    this.editProductName = product.name;
    this.editPurchaseQuantity = product.quantity;
    this.editRecievedQuantity = product.recievedQuantity;
    this.editPurchaseDate = product.purchasedDate;
    this.editRecievedDate = product.recievedDate;
    this.editPurchaseAmount = product.price;
    this.editStockBalance = product.stockBalance;
  }

  editProduct() {
    this.api
      .editGodownProduct({
        id: this.editProductId,
        product: {
          name: this.editProductName,
          quantity: this.editPurchaseQuantity,
          recievedQuantity: this.editRecievedQuantity,
          purchasedDate: this.editPurchaseDate,
          recievedDate: this.editRecievedDate,
          price: this.editPurchaseAmount,
          stockBalance: this.editStockBalance,
          additionalNumber:
            this.editRecievedQuantity - this.editPurchaseQuantity,
          personName: this.personName,
        },
      })
      .subscribe((data: any) => {
        this.getProducts();
        this.isProductEdit = false;
      });
  }
}
