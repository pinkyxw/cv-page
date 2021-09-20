import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  public person = {
    personalInformation: {} as any,
    links: [] as Array<any>,
    languages: [] as Array<any>,
    skills: [] as Array<any>,
    experience: [] as Array<any>,
    education: [] as Array<any>,
    certifications: [] as Array<any>,
  };
  public collapsing = true;

  constructor() { }

  ngOnInit(): void {
  }

  public addToList(listName: 'links' | 'languages' | 'skills' | 'experience' | 'certifications' | 'education') {
    let newObject = {};
    switch (listName) {
      case 'experience':
      case 'education':
        newObject = {
          startAt: {},
          finishAt: {},
        };
        break;
      case 'certifications':
        newObject = {
          obtainedAt: {},
          expirationAt: {},
          id: {},
        };
        break;
    }
    this.person[listName].push(newObject);
  }
}
