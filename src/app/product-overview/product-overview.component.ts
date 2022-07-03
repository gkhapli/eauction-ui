import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductBidDetails } from '../models/ProductBidDetails';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.css']
})
export class ProductOverviewComponent{
  selectedValue: string | undefined;
  //product = new FormControl('');

  productDetails: Product[] = [
    {
        "id": 2,
        "productName": "Colors",
        "shortDescription": "Drawing colors ",
        "detailedDescription": "Drawing Colours ",
        "category": "Painting",
        "startingPrice": 1000,
        "bidEndDate": "2022-06-25"
    },
    {
        "id": 34,
        "productName": "Colors",
        "shortDescription": "Sketch pencils ",
        "detailedDescription": "Sketch pencils ",
        "category": "Painting",
        "startingPrice": 500,
        "bidEndDate": "2022-06-29"
    },
    {
        "id": 38,
        "productName": "Gold chains",
        "shortDescription": "Gold chains",
        "detailedDescription": "Gold chains",
        "category": "Ornament",
        "startingPrice": 1200,
        "bidEndDate": "2022-06-29"
    }
];

  productBidList: ProductBidDetails[] = [
    {
      "id": 2,
      "productName": "Colors",
      "shortDescription": "Drawing colors ",
      "detailedDescription": "Drawing Colours ",
      "category": "Painting",
      "startingPrice": 1000,
      "bidEndDate": "2022-06-25",
      "bidAmount": 7000,
      "buyerFirstName": "asdasd",
      "buyerLastName": "Basket",
      "buyerAddress": "Haarlem",
      "buyerCity": "Amstelveen",
      "buyerState": "Zuid-Holland",
      "buyerPin": "1233MN",
      "buyerPhone": 9345934509,
      "buyerEmail": "dlkfgj@gmail.com"
    },
    {
      "id": 2,
      "productName": "Colors",
      "shortDescription": "Drawing colors ",
      "detailedDescription": "Drawing Colours ",
      "category": "Painting",
      "startingPrice": 1000,
      "bidEndDate": "2022-06-25",
      "bidAmount": 5000,
      "buyerFirstName": "Geert",
      "buyerLastName": "Robins",
      "buyerAddress": "Ghostlaan",
      "buyerCity": "Amstelveen",
      "buyerState": "Noord-Holland",
      "buyerPin": "1105MN",
      "buyerPhone": 9284982903,
      "buyerEmail": "njsfhl@gmail.com"
    }
  ];

  displayedProductColumns: string[] = ['id', 'productName', 'shortDescription', 'detailedDescription',
  'category','startingPrice','bidEndDate'];

  displayedBidColumns: string[] = ['buyerFirstName','buyerLastName',
'buyerAddress','buyerCity','buyerState','buyerPin','buyerPhone','buyerEmail','bidAmount'];

}
