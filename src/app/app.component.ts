import { Component } from '@angular/core';
import { ToastData } from './Components/Common components/toast-component/toast-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'QarmaAssessment-18';
  dataToDisplay = {
   title: 'Remove User',
   question: 'Are you sure you want to Remove User?',
   userName :'Anuja Kumari',
   confirmation1 :'By confirming this',
   confirmation2 :'wouldn’t be able to:',
   confirmationDis1 : ' 1. Access any Projects related to this Account',
   confirmationDis2 :'2. Any Personal Data Synced with this Account '
   };
   tabItems = [
    { label: 'Joined', value: 'Joined' },
    { label: 'Requested', value: 'Requested' },
    { label: 'Suggested', value: 'Suggested' },
  ];

  isselected = 'item'; 
  tabContent = [  { value: 'Joined', content: 'Joined content div' },  { value: 'Requested', content: 'Requested content div' },  { value: 'Suggested', content: 'Suggested content div' },];

  toastData: ToastData = {
    message: 'Data is successfully updated',
    success: true,
    error: false
}
}
