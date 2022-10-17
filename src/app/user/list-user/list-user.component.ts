import {Component, OnInit} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {filter, map, tap} from "rxjs";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users: Array<User> | null = new Array<User>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().pipe(
      filter(response => response.ok),
      map(response => response.body)
    ).subscribe((users) => {
      this.users = users;
    }, error => {
      console.log('error from observable');
    });
  }
}
