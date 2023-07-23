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
  // buttoncontrol=true;
  notesform!:FormGroup

  constructor(private api: EmployeedataService, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private router: Router) {
    
    this.notesform=new FormGroup({
      "id": new FormControl(""),
      "name": new FormControl(""),
      "email": new FormControl("")
    })
  }
  item: any;
  id: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.api.getOneItem(this.id).subscribe((data) => {
      this.item = data
      console.log(this.item)
      this.notesform = this.fb.group({
        "id": this.item.id,
        "name": this.item.name,
        "email": this.item.email
      })

    })
  
  }
  onSubmit() {
    console.log(this.notesform.value)
    this.api.editItem(this.notesform.value,this.id).subscribe(data=>{
      console.log(data)
      this.router.navigate(['home'])
      alert("Detail Updated")
    })
  }


}
