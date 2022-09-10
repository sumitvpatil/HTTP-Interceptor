import { Component, OnInit } from '@angular/core';
import { DetailService } from '../detail.service';
import { LoaderService } from '../loader/loader.service';
import { Model } from '../model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public details=new Model("","","");
  constructor(private _ds:DetailService,public _ls:LoaderService ) { }

  ngOnInit(): void {
  }

  onAdd(){
    if(this.details.id!="" && this.details.name!="" && this.details.sal!=""){
      this._ds.saveDetails(this.details).subscribe(response=>{
        console.log(response.message);
        this._ds.arr.push(this.details);
        this.details=new Model("","","");
        
      },err=>{
        document.getElementById('main')?.classList.add('back_opacity');
        document.getElementById('main2')?.classList.add('ele_pos')
        this.details=new Model("","","");
      })
    }
  }

  onDuplicate(){
    document.getElementById('main')?.classList.remove('back_opacity');
    document.getElementById('main2')?.classList.remove('ele_pos')
  }
}
