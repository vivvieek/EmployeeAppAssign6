import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeedataService } from 'src/app/employeedata.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  buttoncontrol=true;
  empdetail={
    id:'',
    name:'',
    email:''
  }

  constructor(private api: EmployeedataService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
  }
  item: any = {};
  id: any





  ngOnInit(): void {
    // this.id = this.activatedRoute.snapshot.paramMap.get('id')
    // this.api.getOneItem(this.id).subscribe((res: any) => {
      // this.item = res.data
    //   console.log(this.item)

      // this.api.empdetail = this.fb.group({
      //   "title": res.data.title,
      //   "description": res.data.description
      // })

    // })
  }




  onSubmit() {
    this.api.editItem(this.empdetail, this.id).subscribe(data => {
        alert("Detail Updated")
        this.router.navigate(['home'])
      })
  }


}
