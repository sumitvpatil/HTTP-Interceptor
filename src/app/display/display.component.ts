import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  constructor(public _ds:DetailService) { }
  ngOnInit(): void {
    this._ds.getDetails().subscribe(response=>{
      this._ds.arr=response.result;
      console.log(this._ds.arr);
    },err=>{
      console.log(err);
    })
  }

  deleteData(data:any){
    this._ds.arr=this._ds.arr.filter((val)=>{
      return val.id!=data;
    })
    this._ds.deleteDetails(data).subscribe(response=>{
      console.log(response.message);
    },err=>{
      console.log(err);
    })
  }
}
