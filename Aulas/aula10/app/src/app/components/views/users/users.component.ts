import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../../services/randomuser.service';
import { User, UserResponse } from '../../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  public user!: any;
  constructor(private randomUserService: RandomUserService) { }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.randomUserService.gerarUsuario().subscribe(users => {
      console.log(users);
      this.user = users.results;
    });
  }

}
