import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Users } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: Users;
  userForm: FormGroup;
  isSubmitted  =  false;

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private userService: UsersService,
              private formBuilder: FormBuilder) {

                this.userForm  =  this.formBuilder.group({
                  name: ['', Validators.required],
                  email: ['', Validators.email],
                  password: ['', Validators.minLength(5)],
                  created_at: ['', Validators.required],
                  token: ['', Validators.required],
                  
              });
               }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['id'])
        .subscribe((user: Users) => {
          this.user = user;
          
          this.userForm  =  this.formBuilder.group({
            name: [user.name, Validators.required],
            email: [user.email, Validators.email],
            password: [user.password, Validators.minLength(5)],
            created_at: [user.created_at, Validators.required],
            token: [user.token, Validators.required],
          });

        })
    });

    


  }

  get formControls() { return this.userForm.controls; }


  updateUser(){
    
    this.isSubmitted = true;
    if(this.userForm.invalid){
      return;
    }
     
    let aux:Users;
    aux=this.userForm.value;
    aux.id=this.user.id;


    this.userService.updateUser(aux).subscribe((rdo)=>{
      this.router.navigateByUrl('/');
    })

  }

}
