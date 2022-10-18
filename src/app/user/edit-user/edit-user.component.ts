import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap} from "rxjs";
import {UserService} from "../user.service";
import {User} from "../user.model";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public userFormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    username: [''],
    email: ['', Validators.email],
    phone: ['']
  });

  public userId: number = 0;

  public user: User | null = {};

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        filter(params => params['id'] !== undefined),
        switchMap(params => this.userService.getOne(params['id']))
      ).subscribe((res) => {
      this.user = res.body;
      this.userFormGroup.patchValue({
        name: this.user?.name,
        username: this.user?.username,
        phone: this.user?.phone,
        email: this.user?.email
      });
    });
  }

  onEditUser(): void {
    console.dir(this.userFormGroup.value);
  }
}
