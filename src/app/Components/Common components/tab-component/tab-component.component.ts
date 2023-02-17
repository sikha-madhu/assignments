import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-tab-component',
  templateUrl: './tab-component.component.html',
  styleUrls: ['./tab-component.component.css']
})
export class TabComponentComponent {
//   array=["joined","suggestion"];
//   activeTab:string = ('')
// onTabClick(tab: string){
// this.activeTab = tab;
// }
isselected: string='';
  // passing data to the parent component
  @Input()
  tabDataItem: any[] = [];
  @Input()
  tabDataContent: any[] = [];
}

