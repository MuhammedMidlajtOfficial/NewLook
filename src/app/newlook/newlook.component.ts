import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newlook',
  templateUrl: './newlook.component.html',
  styleUrls: ['./newlook.component.css'],
})
export class NewlookComponent {
  isAdmin: boolean = false;
  constructor(private api: ApiService,private router:ActivatedRoute) {
    
    localStorage.getItem('admin') === 'true' ? (this.isAdmin = true) : (this.isAdmin = false);
    router.params.subscribe((params)=>{
      // console.log(params);
      this.shopName=params['name'];
      this.getProducts();
    })

  }

  products: any = [];

  isAddProduct: boolean = false;
  isProductEdit: boolean = false;

  product: any = '';
  intake: any = null;
  sellingPrice: any = null;
  stockBalance: any = null;
  monthlySales: any = null;
  personName: any = localStorage.getItem('username');

  editProductId: any = null;
  editProductName: any = null;
  editIntake: any = null;
  editSellingPrice: any = null;
  editStockBalance: any = null;
  editMonthlySales: any = null;
  shopName: any = null;

  addProduct() {
    const product = {
      name: this.product,
      price: this.sellingPrice,
      shopIntake: this.intake,
      stockBalance: this.stockBalance,
      monthlySales: this.monthlySales,
      shopName: this.shopName,
      personName: this.personName,
    };

    this.api.addShopProduct(product).subscribe((data: any) => {
      console.log(data);
      this.getProducts();
      this.isAddProduct = false;
      this.product = '';
      this.intake = null;
      this.sellingPrice = null;
      this.stockBalance = null;
      this.monthlySales = null;
    });
  }
  getProducts() {
    this.api.getshopProducts({shopName:this.shopName}).subscribe((data: any) => {
      console.log(data);
      this.products = data.data;
    });
  }
  toggleAddProduct() {
    this.isProductEdit = false;
    this.isAddProduct = !this.isAddProduct;
  }

  deleteProduct(id: any) {
    const result = confirm('Are you sure you want to delete this product?');
    if (!result) {
      return;
    }
    this.api.deleteProduct({id:id}).subscribe((data: any) => {
      this.getProducts();
    });
  }

  setEditProduct(product: any) {
    this.isProductEdit = true;

    this.isAddProduct=false;

    this.editProductId = product._id;
    this.editProductName = product.name;
    this.editIntake = product.shopIntake;
    this.editSellingPrice = product.price;
    this.editStockBalance = product.stockBalance;
    this.editMonthlySales = product.monthlySales;

    
  }

  editProduct() {
    const data={
      id:this.editProductId,
      product:{
        name: this.editProductName,
        price: this.editSellingPrice,
        shopIntake: this.editIntake,
        stockBalance: this.editStockBalance,
        monthlySales: this.editMonthlySales,
        personName:this.personName
      }
    }
    this.api.editProduct(data).subscribe((data: any) => {
      this.getProducts();
      this.isProductEdit = false;
    })
  }


}
