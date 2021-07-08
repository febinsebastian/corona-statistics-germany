import { Component, OnInit, Input } from '@angular/core';
import { fade } from '../animate';
import { faUsers, faHeart, faRibbon } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-week-statistics',
  templateUrl: './week-statistics.component.html',
  styleUrls: ['./week-statistics.component.css'],
  animations: [ fade ]
})
export class WeekStatisticsComponent implements OnInit {
  @Input() weekStatisticsData;
  faUsers = faUsers;
  faHeart = faHeart;
  faRibbon = faRibbon;
  xAxisLabel:string = 'Day';
  yAxisLabel:string = 'Number Of Cases';
  view: any = []
  
  constructor() { }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

  ngOnInit(): void {
  }

}
