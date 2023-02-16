import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent {
  @Input() data: any;
  modal:any ;
  // span = document.getElementsByClassName("close")[0];
 
 // When the user clicks the button, open the popUp 
 popUp() {
   this.modal=document.getElementById("myModal");
   this.modal.style.display = "block";
 }
 
 // When the user clicks the close button, close the popUp
 closePopUp() {
   this.modal.style.display = "none";
 }
}



