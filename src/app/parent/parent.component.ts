import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

constructor(private http:HttpClient){}
data:any =[];

  ngOnInit(){
    this.getData();
  }

  getData(){
    this.http.get('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json').subscribe((res:any)=>{
      this.data = res.slice(0,5);
    })
  }

}
