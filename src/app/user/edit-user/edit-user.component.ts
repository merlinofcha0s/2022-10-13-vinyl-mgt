import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap} from "rxjs";
import {UserService} from "../user.service";
import {User} from "../user.model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public userId: number = 0;

  public user: User | null = {};

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        filter(params => params['id'] !== undefined),
        switchMap(params => this.userService.getOne(params['id']))
      ).subscribe((res) => {
        this.user = res.body;
      });
  }
}
