import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from  '@angular/forms';

import { Users } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: Users;
  updateForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private route: ActivatedRoute, private userService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.user = {
      id: 0,
      name: '',
      email: '',
      password: '',
      created_at: '',
      token: ''
    }
    this.route.params.subscribe(params => {
      this.userService.getUser(params['id'])
        .subscribe((user: Users) => {
          this.user = user;
          this.updateForm  =  this.formBuilder.group({
            name: [this.user.name, Validators.required],
            email: [this.user.email, Validators.required],
            password: [this.user.password, Validators.required],
            created_at: [this.user.created_at, Validators.required],
            token: [this.user.token, Validators.required]
          });
        })
    })
    
  }

  get formControls() {
    return this.updateForm.controls;
  }

  updateUser(){

    console.log(this.updateForm.value);
    this.isSubmitted = true;
    if(this.updateForm.invalid){
      return;
    }


    /* let user: Users = {
      id: this.user.id,
      name: name,
      email: email,
      password: password,
      token: token
    }
    this.userService.updateUser(user)
    .subscribe((user: Users) => {
      this.user = user;
    })*/
  }

}
