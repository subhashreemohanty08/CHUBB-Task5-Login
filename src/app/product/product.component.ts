import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList:Array<any>=[]
  product:any;
  delete:boolean=false;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProduct();
  }
   loadProduct(){
      this.productService.returnProduct().subscribe((res:any)=>{ 
    this.productList=res;
      })
} 

ondelete(product:any){
  this.product= product;
  this.delete=true;
}
onyes(){
let i=this.productList.indexOf(this.product)
this.productList.splice(i,1)
this.delete=false;
}

onNo(){
this.delete=false;

}



  

}

