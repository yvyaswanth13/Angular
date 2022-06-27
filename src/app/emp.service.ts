import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
empList:Employee[] = [{eid:100,ename:"Bobby",Salary:1000.0,doj:new Date('1/1/2000')},
  {eid:100,ename:"Bobby",Salary:1000.0,doj:new Date('1/11/2000')},
  {eid:100,ename:"Bobby",Salary:1000.0,doj:new Date('1/12/2000')}];
  constructor() { }

  getEmployees():any{
    return this.empList;
  }
}
