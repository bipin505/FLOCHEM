import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productslist:any;
  products:any;
  constructor() { }

  ngOnInit(): void {
    this.productslist = [{
      'name':'prduct1',
      'desc':'some',
      'path':'image1'
    },
    {
      'name':'prduct2',
      'desc':'some',
      'path':'image2'
    },
    {
      'name':'prduct3',
      'desc':'some',
      'path':'image3'
    },
    {
      'name':'prduct4',
      'desc':'some',
      'path':'image4'
    }];

    this.products = [
      {
        'name':'abccahgggs',
        'desc':'sdjsahdjasbdckjbdjcbndx bcnbhgshsdbjsbhcgbxhcbxzgcyhsgysd'
      },
      {
        'name':'sdshuhga',
        'desc':'sdgshbdjsbjdhgs yuDGUSHBHS GCYGDYSGJB SHBSAHGDHSAB'
      },
      {
        'name':'sjhsjhdjuh',
        'desc':'jxjshdushudhsudg ugdyusgxushbj cnzxjnjzbnxj zbhjzbshgbcuj bscjbuchsahas iuhdijsihsihis hiahjxsbnxjbs hgsudbsudgusg dushgugsdjbsudgushdbjsuhushdsugdhu'
      },
      {
        'name':'sdsdsds',
        'desc':'sdsdsdsjdisajdiahush cuchnusdbhcygsydgsw'
      }
    ]

  }

}
