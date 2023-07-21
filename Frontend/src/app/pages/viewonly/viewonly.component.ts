import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from 'src/app/employeedata.service';

@Component({
  selector: 'app-viewonly',
  templateUrl: './viewonly.component.html',
  styleUrls: ['./viewonly.component.css']
})
export class ViewonlyComponent implements OnInit{

  employee:any;
  constructor(private service:EmployeedataService,private route : Router){}

  ngOnInit(): void {
    this.service.getemployeedata().subscribe((data=>{
      this.employee=data;
      console.log(this.employee)
    }))
  }
}
