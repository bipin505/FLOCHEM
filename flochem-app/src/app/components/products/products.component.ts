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
  productName: string;
  constructor() { }

  ngOnInit(): void {
    this.productslist = [{
      'id': '1',
      'name': 'PU & Rubber Products',
      'desc': 'Flochem is known for it’s customization of products based on customer’s need with it’s expertise in multiple sizes of PU mat panels, PU spray nozzles, PU wheels, rubber impellers and more. Also we can assist our clients with multiple other spare parts related to Mineral / Sand washing plants.',
      'path': 'image1',
      'items': ['Customized PU Mat Panels', 'PU Spray Nozels', 'PU wheels'],
      'image': 'assets/images/product1.jpg'
    },
    {
      'id': '2',
      'name': 'Motors, Pumps & it’s spares',
      'desc': 'We have tied up with several Motor and Pump manufacturers to cater to our customer’s need accordingly. Compatible products like Impellers and other Spares with best quality can also be provided.',
      'path': 'image2',
      'items': ['Branded Pumps and Motors', 'Rubber and Metal Impellers', 'Gear Box'],
      'image': 'assets/images/Product_2.jpg'
    },
    {
      'id': '3',
      'name': 'Dosing systems',
      'desc': 'Dosing systems are a basic need for multiple operating plants requiring fixed dosage of flocculants or other chemicals. Normally small industries opt for manual mixing and dosing of the chemicals which usually leads to wastage of chemicals and improper dosage in varying quantities. We have thus developed some simple model with easy mixing technique which enables uniform mixing and is pocket friendly to the customers seeking economical solution. On the other hand we also have fully automatic dosing system which can handle itself completely with just the push of a button (To be programmed once as per requirement). We can make customized systems too based on customer’s need.',
      'path': 'image3',
      'items': ['Fully Automatic System','Semi Automatic System','Manual System'],
      'image': 'assets/images/Dosing system_Edit.jpg'
    }];

    this.products = [
      {
        'id': '1',
        'name': 'Polyacrylamide',
        'sd':'We have multiple varieties of Anionic, Cationic and Non Ionic Polyacrylamide which have been...',
        'desc': 'We have multiple varieties of Anionic, Cationic and Non Ionic Polyacrylamide which have been developed based on client’s requirement from different industries. Some of our popular range of Polyacrylamide include FC 701, FC 703, FC 720…',
        'image': 'assets/images/Polyacrylamide.jpg'
      },
      {
        'id': '2',
        'name': 'Coagulants',
        'sd':'The working of a coagulant depends on multiple factors right from pH of the waste...',
        'desc': 'The working of a coagulant depends on multiple factors right from pH of the waste water to the fine particles present in it. We thus have different coagulants based on different needs and also deal into common coagulants such as Alum, Polyaluminium chloride, Sodium Hypochlorite etc',
        'image': 'assets/images/Coagulant.jpg'
      },
      {
        'id': '3',
        'name': 'Soda ash & Baking soda',
        'sd':'We deal in multiple brands of Sodium Carbonate (Soda ash) and Sodium Bi-Carbonate...',
        'desc': 'We deal in multiple brands of Sodium Carbonate (Soda ash) and Sodium Bi-Carbonate (Baking soda) as per client’s requirement. Both products are available in Food grade too with our brand FC 301 (Food grade Sodium Carbonate) being a popular choice among bottled water clients.',
        'image': 'assets/images/Sodaash.jpg'
      }
    ]

  }
  showDeatils(id, flag) {
    document.getElementById('details').style.display = 'block';
    document.getElementById('details').scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    if (flag) {
      this.productDetail = this.products[parseInt(id) - 1]['desc'];
      this.productImage = this.products[parseInt(id) - 1]['image'];
      this.productName = this.products[parseInt(id) - 1]['name'];
    }
    else {

      this.productDetail = this.productslist[parseInt(id) - 1]['desc'];
      this.productImage = this.productslist[parseInt(id) - 1]['image'];
      this.productName = this.productslist[parseInt(id) - 1]['name'];
    }
  }
}
