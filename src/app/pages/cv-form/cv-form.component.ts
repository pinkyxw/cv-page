import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';


@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {

  @ViewChild('preview') preview: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;

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

  downloadPdf() {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.internal.scaleFactor = 300;

    // Create your table here (The dynamic table needs to be converted to canvas).
    let element = <HTMLScriptElement>document.getElementById("preview");
    console.log(element.outerHTML);

    // html2canvas(this.preview.nativeElement).then(canvas => {
    //   this.canvas.nativeElement.src = canvas.toDataURL();
    //   const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    //   ctx.imageSmoothingEnabled = true;
    //   this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
    //   this.downloadLink.nativeElement.download = 'marble-diagram.png';
    //   this.downloadLink.nativeElement.click();
    // });

    element.style.setProperty('zoom', '1');
    html2canvas(element, {
      scale: 2,
      useCORS: true,
      imageTimeout: 2000,
      removeContainer: true
    }).then((canvas: any) => {
      element.style.setProperty('zoom', '');
      pdf.addImage(canvas.toDataURL("image/jpeg"), "JPEG", 0, 0, 210, 297);
      pdf.save(`Report-${Date.now()}.pdf`);
    })

  }

}


