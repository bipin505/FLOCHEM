import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productslist: any;
  products: any;
  productDetail: string;
  productImage: string;
  productName:string;
  constructor() { }

  ngOnInit(): void {
    this.productslist = [{
      'name': 'prduct1',
      'desc': 'some',
      'path': 'image1'
    },
    {
      'name': 'prduct2',
      'desc': 'some',
      'path': 'image2'
    },
    {
      'name': 'prduct3',
      'desc': 'some',
      'path': 'image3'
    }];

    this.products = [
      {
        'id': '1',
        'name': 'Polyacrylamide',
        'desc': 'We have multiple varieties of Anionic, Cationic and Non Ionic Polyacrylamide which have been developed based on client’s requirement from different industries. Some of our popular range of Polyacrylamide include FC 701, FC 703, FC 720…',
        'image': 'assets/images/product1c.jpg'
      },
      {
        'id': '2',
        'name': 'Coagulants',
        'desc': 'The working of a coagulant depends on multiple factors right from pH of the waste water to the fine particles present in it.We thus have different coagulants based on different needs and also deal into common coagulants such as Alum, Polyaluminium chloride, Sodium Hypochlorite etc',
        'image': 'assets/images/product2c.jpg'
      },
      {
        'id': '3',
        'name': 'Soda ash & Baking soda',
        'desc': 'We deal into multiple brands of Sodium Carbonate (Soda ash) and Sodium Bi-Carbonate (Baking soda) as per client’s requirement. Both products are available in Food grade too with our brand FC 301 (Food grade Sodium Carbonate) being a popular choice among bottled water clients.',
        'image': 'assets/images/product3c.jpg'
      }
    ]

  }
  showDeatils(id) {
    document.getElementById('details').style.display = 'block';
    document.getElementById('details').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

    this.productDetail = this.products[parseInt(id) - 1]['desc'];
    this.productImage = this.products[parseInt(id) - 1]['image'];
    this.productName = this.products[parseInt(id) - 1]['name'];
  }
}
