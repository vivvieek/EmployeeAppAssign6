import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeedataService } from 'src/app/employeedata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{

  employee:any;
  constructor(private service:EmployeedataService,private route : Router){}

  ngOnInit(): void {
    this.service.getemployeedata().subscribe((data=>{
      this.employee=data;
      console.log(this.employee)
    }))
  }

  editItem(_id:any){
    this.route.navigate(['/edit/' +_id])
    // this.route.navigate(['home'])
    // alert('Data Updated')
  }

  delItem(_id:any){
    this.service.delItem(_id).subscribe(data =>console.log(data))
    alert('Data Deleted')
    this.route.navigate(['home'])
  }

}
