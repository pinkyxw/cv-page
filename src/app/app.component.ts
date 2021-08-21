import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-page';

  personalInformation = {
    description: 'Desarrollador Full Stack con experiencia en web y apps híbridas, me gusta Scrum, La música y jugar con Arduino',
    shortDescription: 'Desarrollador Full Stack',
    name: 'Rodrigo Valenzuela',
    email: 'pinkazoxw@gmail.com',
    phone: '+56 9 8400 2431',
    nationality: undefined,
    hobbies: 'Producción musical amateur y tocar instrumentos',
  };

  links = [
    { alias: 'Linkedin', url: 'https://www.linkedin.com/in/rodrigo-eduardo-valenzuela-guzm%C3%A1n-707b7495/' },
    { alias: 'GitHub', url: 'https://github.com/pinkyxw' },
  ];

  languages = [
    { name: 'español', rate: 5 },
    { name: 'inglés', rate: 3 },
  ];

  skills = [
    { name: 'Angular', rate: 5 },
    { name: 'HTML & CSS', rate: 4 },
    { name: 'Firestore', rate: 5 },
    { name: 'GCP', rate: 2 },
    { name: 'Google Cloud Functions', rate: 5 },
    { name: 'Git', rate: 3 },
  ];

  experience = [
    {
      startAt: { month: 7, year: 2021, show: true },
      finishAt: { show: true, toPresent: true },
      title: 'Desarrollador Senior y Gestor Ágil',
      company: 'Kunder',
      description: 'Gestor ágil y Desarrollador en equipo del área de fidelización de clientes de Banco Ripley Chile y Perú',
    },
    {
      startAt: { month: 4, year: 2019, show: true },
      finishAt: { month: 7, year: 2021, show: true, toPresent: false },
      title: 'Desarrollador full stack',
      company: 'Kunder',
      description: 'Desarrollo de sistema de registro de asistencia para la JUNJI \nDesarrollo y continuidad de App móvil y PWA del Banco Ripley',
      city: 'Santiago'
    },
    {
      startAt: { year: 2019, show: true },
      finishAt: { show: false, toPresent: false },
      title: 'Desarrollador freelance',
      company: 'Lisit',
      description: 'Desarrollo de App móvil para reconocimiento de pilas de troncos para CMPC',
    },
    {
      startAt: { year: 2018, show: true },
      finishAt: { show: false, toPresent: false },
      title: 'Desarrollador freelance',
      company: 'Grupo habitacional Alto los Niches',
      description: 'Desarrollo de sistema de tesorería utilizando impresoras terminas (POS)',
    },
    {
      startAt: { year: 2016, show: true },
      finishAt: { year: 2017, show: true, toPresent: false },
      title: 'Desarrollador',
      company: 'Southware',
      description: 'Desarrollo de sistema web de seguimiento de cargas con geolocalizacion \nDesarrollo de sistema web para gestion de lubricentro',
    },
  ];

  education = [
    {
      startAt: { year: 2011, show: true },
      finishAt: { year: 2018, show: true, toPresent: false },
      title: 'Ingeniería Civil en Computación',
      company: 'Universidad de Talca',
      city: 'Curicó',
    },
    {
      startAt: { year: 2007, show: true },
      finishAt: { year: 2010, show: true, toPresent: false },
      title: 'Técnico en Contabilidad',
      company: 'INITEC Diego Protales',
      city: 'Curicó',
    },
  ];

  certifications = [
    {
      obtainedAt: { month: 8, year: 2020, show: true },
      expirationAt: { show: false },
      title: 'Professional Scrum Developer I (PSD I)',
      company: 'Scrum.org',
      id: { show: true, value: 'sadosadnsao-213'},
    },
    {
      obtainedAt: { month: 6, year: 2020, show: true },
      expirationAt: { show: false },
      title: 'Scrum Foundation Professional Certificate (SFPC)',
      company: 'CertiProf',
      id: { show: false, value: 'sadosadnsao-213'},
    },
  ];


  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  public getSingleDate(dateObject: any): string {
    let dateString = '';
    if (dateObject.show) {
      if (dateObject.toPresent) { return 'Presente'; }
      if (dateObject.month) { dateString += this.months[dateObject.month - 1] + ' '; }
      if (dateObject.year) { dateString += dateObject.year; }
    }
    return dateString;
  }

  public getDate(startDate: any, finishDate: any): string {
    let start = this.getSingleDate(startDate);
    let finish = this.getSingleDate(finishDate);
    return start + (finish.length ? ' - ' + finish : '');
  }

  public redirect(url: string) {
    window.location.href = url;
  }


}
