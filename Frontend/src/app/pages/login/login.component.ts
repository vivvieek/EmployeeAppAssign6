import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule,ReactiveFormsModule,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginservService } from 'src/app/loginserv.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  buttoncontrol=true;
  user={
    email:'',
    password:''
  }
  constructor(private loginserve:LoginservService,private router:Router){}
  ngOnInit(): void {}
  getvalue(e:any){
    console.log(e.target.value);
  }
  submit(){
    console.log(this.user);
    if(this.user.email=="admin@employee.com"&&this.user.password=="admin123"){
      this.loginserve.senddetails(this.user).subscribe((res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['home']);
      }));
      alert('Welcome Admin');
    }
    else if(this.user.email=="user@employee.com"&&this.user.password=="user123"){
      this.loginserve.senddetails(this.user).subscribe((res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this.router.navigate(['view']);
      }));
      alert('Welcome User');
    }
    else{
      alert('Wrong UserID or Password !');
    }

  }




  // Reactive Form Validation

  // loginform=new FormGroup({
  //   'email':new FormControl('',[Validators.pattern('admin@employee'),Validators.required]),
  //   'password':new FormControl('',[Validators.pattern('admin123'),Validators.required])
  // })


}

