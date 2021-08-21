import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getWidthPercent(): string {
    return (100 * this.progress) + '%';
  }

}
