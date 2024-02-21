import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('popupTable') popupTable!: ElementRef;
  @ViewChild('editPopupTemplate') editPopupTemplate!: ElementRef;

  // Correct the type to string
  field1Value: string = '';
  field2Value: string = '';
  field3Value: string = '';
  field4Value: string = '';
  field5Value: string = '';
  field6Value: string = '';
  field7Value: string = '';
  field8Value: string = '';
  field9Value: string = '';

  constructor(private modalService: NgbModal) { }

  openPopupTable(): void {
    const modalRef = this.modalService.open(this.popupTable, { size: 'fullscreen' });

    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log('Dismissed', this.getDismissReason(reason));
      }
    );
  }

  openEditPopup(): void {
    const modalRef = this.modalService.open(this.editPopupTemplate, { size: 'fullscreen' });

    modalRef.result.then(
      (result) => {
        console.log(result);
      },
      (reason) => {
        console.log('Dismissed', this.getDismissReason(reason));
      }
    );
  }

  saveDetails(): void {
    // Implement logic to save the entered details
    console.log('Details saved:', this.field1Value, this.field2Value, this.field3Value, this.field4Value, this.field5Value, this.field6Value, this.field7Value, this.field8Value, this.field9Value );

  }

  private getDismissReason(reason: any): string {
    // Add your logic for handling modal dismissal reasons
    return '';
  }
}
