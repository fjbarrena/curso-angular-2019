import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: Users;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.getUser(params['id'])
        .subscribe((user: Users) => {
          this.user = user;
        })
    })
  }

  /* udpateUser(name: string, email: string, password: string, token: string){
    let user: Users = {
      id: this.user.id,
      name: name,
      email: email,
      password: password,
      token: token
    }
    this.userService.updateUser(user)
    .subscribe((user: Users) => {
      this.user = user;
    })
  }*/

}
