import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.scss']
})
export class CvSectionComponent implements OnInit {

  @Input() title!: string;
  @Input() icon!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
