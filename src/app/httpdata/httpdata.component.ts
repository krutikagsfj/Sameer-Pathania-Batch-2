import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-httpdata',
  templateUrl: './httpdata.component.html',
  styleUrls: ['./httpdata.component.css']
})
export class HttpdataComponent implements OnInit {

  constructor(private pser:ProductService) { }
  resData;
  mobileList=[];
  sortByAsc: boolean = true;
  ngOnInit() 
  {
    this.pser.getProducts()
    .subscribe(res=>
      { 
        this.resData=res;
        console.log(res);
      },err=>
      {
        console.log(err);
      })
  }
//  to delete the data
    deleteRow(id) {
      let pos = this.resData.indexOf(id);
     this.resData.splice(pos, 1);
    
    }
  //sorting of numbers or integer values
  sortid(parm) {
    if(this.sortByAsc == true) {
      this.sortByAsc = false;
      this.resData.sort((a, b) => {
       return a[parm]-(b[parm]);
      });
    } else {
      this.sortByAsc = true;
      this.resData.sort((a, b) => {
        return b[parm]-(a[parm]);
     });
   }
  }
//sorting of String values
  sortTable1(parm) {
    if(this.sortByAsc == true) {
      this.sortByAsc = false;
      this.resData.sort((a, b) => {
       return a[parm].localeCompare(b[parm]);
      });
    } else {
      this.sortByAsc = true;
      this.resData.sort((a, b) => {
        return b[parm].localeCompare(a[parm]);
     });
   }
  }

}
