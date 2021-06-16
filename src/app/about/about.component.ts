import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
@Input() x!:any;
@Input() y!:any;


sum=this.x + this.y;
imageurl: String="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg";
imageurl1:String="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
changeimg(){
  this.imageurl=this.imageurl1;
}
constructor() { }

  ngOnInit(): void {
    this.sum=this.x+this.y;}
    
    
}


