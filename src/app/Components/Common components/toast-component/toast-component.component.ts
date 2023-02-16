import { Component,Input,OnInit } from '@angular/core';
import { ToastData } from './toast-data';
@Component({
  selector: 'app-toast-component',
  templateUrl: './toast-component.component.html',
  styleUrls: ['./toast-component.component.css']
})
export class ToastComponentComponent {
  // @Input() message: string | undefined;
  // @Input() success: boolean | undefined;
  // @Input() error: boolean | undefined;
  @Input()
  data!: ToastData;

  show: boolean = false;

  ngOnChanges() {
    if (this.data) {
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 4000); // hide after 6 seconds
    }
  }

}

