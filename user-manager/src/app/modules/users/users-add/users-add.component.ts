import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Users } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {

  userForm: FormGroup;
  isSubmitted  =  false;

  constructor(private router: Router,
              private userService: UsersService,
              private formBuilder: FormBuilder) {

    this.userForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      created_at: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      token: ['', Validators.required]
    });

  }

  ngOnInit() { }

  get formControls() {
    return this.userForm.controls;
  }

  createUser(){
    
    this.isSubmitted = true;
    if(this.userForm.invalid){
      return;
    }

    this.userService.createUser(this.userForm.value).subscribe((rdo)=>{
      this.router.navigateByUrl('/');
    })

  }

}
