import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from '../../../models/users.model';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

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

}
