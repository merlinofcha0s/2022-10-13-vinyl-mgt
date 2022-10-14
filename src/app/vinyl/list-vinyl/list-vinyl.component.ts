import { Component, OnInit } from '@angular/core';
import {Vinyl} from "../vinyl.model";

@Component({
  selector: 'app-list-vinyl',
  templateUrl: './list-vinyl.component.html',
  styleUrls: ['./list-vinyl.component.scss']
})
export class ListVinylComponent implements OnInit {

  public vinyl: Vinyl = {
    id: 0,
    title: 'Bad',
    artiste: 'Michael Jackson',
    imageUrl: 'https://img-4.linternaute.com/PI-AYLwdrSAlAsBVE53jZasrWYM=/350x/smart/4184ae2fdda74cb5b2e150bc98efebe8/ccmcms-linternaute/19006.jpg',
    releaseDate: 1987
  };

  constructor() { }

  ngOnInit(): void {
  }

}
