import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private router : Router) { }

  @Output()
  emitData = new EventEmitter();

  ngOnInit(): void {
  }

  emitValue() { 
    this.emitData.emit('Hi there I am from child');
    
    console.log('Hi there I am child..........');
    this.router.navigate(['parent']);
    
  }
}
