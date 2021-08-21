import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {

  @Input() personalInformation!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
