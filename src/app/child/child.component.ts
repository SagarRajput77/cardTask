import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() data1: any;

  ngOnInit() {
    console.log(this.data1);
  }
  ngOnChanges(){
    console.log(this.data1);

  }
}
