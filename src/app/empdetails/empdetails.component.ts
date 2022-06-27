import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-empdetails',
  templateUrl:'./empdetails.component.html',
  // './empdetails.component.html',
 // ' <h1>Hello emp COmponent</h1><h1>{{empList[1].empname}}</h1>'
 
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  empList: Employee[] = [];
  constructor(private empserv:EmpService) { }
 
  ngOnInit(): void {
    this.empList=this.empserv.getEmployees();
  }

}
