import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counting-buttons',
  templateUrl: './counting-buttons.component.html',
  styleUrls: ['./counting-buttons.component.scss']
})
export class CountingButtonsComponent implements OnInit {

  @Input()
  public releaseDate: number | undefined = 0;

  @Output()
  public releaseDateChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  incValue(): void {
    this.releaseDate! += 1;
    console.log('inc : ' + this.releaseDate);
    this.releaseDateChange.emit(this.releaseDate);
  }

  decValue(): void {
    this.releaseDate! -= 1;
    console.log('dec : ' + this.releaseDate);
    this.releaseDateChange.emit(this.releaseDate);
  }
}
