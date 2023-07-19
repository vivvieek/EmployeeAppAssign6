import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeedataService } from 'src/app/employeedata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  empdetail={
    id:'',
    name:'',
    email:''
  }

  constructor(private serv:EmployeedataService){}

  ngOnInit(): void {
    
  }

  submit(){
    this.serv.addemployee(this.empdetail).subscribe((res=>{
      alert("Employee Added");
    }))
  }
  
}
