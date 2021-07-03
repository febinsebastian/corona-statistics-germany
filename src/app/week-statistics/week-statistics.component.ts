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
  xAxisLabel = 'Day';
  yAxisLabel = 'Number Of Cases';
  constructor() { }

  ngOnInit(): void {
  }

}
