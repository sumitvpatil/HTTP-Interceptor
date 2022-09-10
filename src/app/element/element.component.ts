import { EventEmitter,Output,Input,Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  @Input() data:any;
  @Output() out=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onCross(){
    this.out.emit(this.data.id);
  }

}
