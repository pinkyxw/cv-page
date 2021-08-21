import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-mini-section',
  templateUrl: './cv-mini-section.component.html',
  styleUrls: ['./cv-mini-section.component.scss']
})
export class CvMiniSectionComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
