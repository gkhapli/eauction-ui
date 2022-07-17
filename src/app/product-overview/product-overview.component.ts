import { Component, OnInit } from '@angular/core';
import { ProductBidDetails } from '../models/ProductBidDetails';
import { Product } from '../models/Product';
import { ProductService } from '.././services/product.service';
import { MatSelectChange } from '@angular/material/select';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent implements OnInit {

  totalElements: number = 0;
  
  constructor(private productService: ProductService){
  }

  selectedProduct = new MatTableDataSource<Product>([]);
  productBidList = new MatTableDataSource<ProductBidDetails>([]);
  productId: number = 0;

  public productDetails: Product[] = [];

  displayedProductColumns: string[] = ['id', 'productName', 'shortDescription', 'detailedDescription',
  'category','startingPrice','bidEndDate'];

  displayedBidColumns: string[] = ['buyerFirstName','buyerLastName',
'buyerAddress','buyerCity','buyerState','buyerPin','buyerPhone','buyerEmail','bidAmount'];

ngOnInit(): void {

  this.productService.getProducts().subscribe(data =>
    this.productDetails = data
  );
}

private getProductBids(productId: Number, request: any) {
  this.productService.getAll(productId,request)
  .subscribe(data=> {
      console.log(data);
      this.productBidList.data = data['content'];
      this.totalElements = data['totalElements'];
  });
}

nextPage(event: PageEvent) {
  const request = {'page':'','size':''};
  request['page'] = event.pageIndex.toString();
  request['size'] = event.pageSize.toString();
  console.log(event);
  this.getProductBids(this.productId,request);
}

updateProduct(event: MatSelectChange){
    
    this.productService.getProductById(event.value).subscribe((data: Product[]) => {
      this.selectedProduct.data = data;
    });
    this.productId = event.value;
    const request = {'page':0,'size':10};
    this.getProductBids(event.value,request);
    }

}
