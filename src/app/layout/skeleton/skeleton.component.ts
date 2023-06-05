import { DatePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { SidebarService } from '@data/services/sidebar.service';


@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit{

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe:any = null;
  constructor(private sidebarservice: SidebarService) {

  }

  ngOnInit() {
    setInterval(()=>{
      this.todayWithPipe = this.pipe.transform(Date.now(), 'dd-MM-yyyy  h:mm:ss a');
    }, 1000)   
  }
  
  getClasses() {
    return {}
  }

  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }
 
  getSideBarState() {
    return this.sidebarservice.getSidebarState();
  }
}
