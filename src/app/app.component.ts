import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from './http.service';
import { fade } from './animate';
import { flages } from './static/flages';
import { Statistic } from './statistics.model';
import { faChevronLeft, faChevronRight, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService],
  animations: [fade]
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  coronaStatesData = [];
  flages = flages;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faBars = faBars;
  faTimes = faTimes;
  currentDays: number = 7;
  currentState: string = '';
  isLoading: boolean = false;
  startDay : Date;
  endDay : Date;
  error = null;
  week: Statistic = new Statistic(0, 0, 0, '', '', '', []);
  
  constructor(private httpService: HttpService, private observer: BreakpointObserver){}

  ngOnInit(){
    this.isLoading = true;
    this.httpService.httpGet('states').subscribe(response =>{
      for (const key in response[0]){
        this.coronaStatesData.push(response[0][key])
      }
      this.getWeekStatistics(this.coronaStatesData[0])
      this.isLoading = false;
    }, error =>{
      this.isLoading = false;
      this.error = error.error.message;
    });
  }

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }
  getWeekStatistics(state){
    let days = this.currentDays; 
    this.week = new Statistic(0, 0, 0, state.name, state.abbreviation,
                flages[state.abbreviation]['flagImg'], []);
    this.error = null;
    this.isLoading = true;
    this.currentState = state.abbreviation;
    this.httpService.httpGet('states/'+this.currentState+'/history/cases/'+days).subscribe(response =>{
      const history = response[0][this.currentState]['history'];
      let chartArray = [];
      for (const key in history){
        this.week.cases += history[key]['cases'];
        chartArray.push({name:this.formatDate(history[key]['date']), value: history[key]['cases']})
      }
      this.week.chartData = chartArray;
      this.isLoading = false;
      this.startDay = history[0].date;
      this.endDay = history[history.length-1].date;
    }, error =>{
      this.isLoading = false;
      this.error = error.error.message;
    });
    
    this.httpService.httpGet('states/'+this.currentState+'/history/deaths/'+days).subscribe(response =>{
      for (const key in response[0][this.currentState]['history']){
        this.week.deaths += response[0][this.currentState]['history'][key]['deaths'];
      }
      this.isLoading = false;
    }, error =>{
      this.isLoading = false;
      this.error = error.error.message;
    });

    this.httpService.httpGet('states/'+this.currentState+'/history/recovered/'+days).subscribe(response =>{
      for (const key in response[0][this.currentState]['history']){
        this.week.recovered += response[0][this.currentState]['history'][key]['recovered'];
      }
      this.isLoading = false;
    }, error =>{
      this.isLoading = false;
      this.error = error.error.message;
    });
  }

  changeWeek(selection) {
    if(selection == 'prev'){
      this.currentDays += 7;
      this.getWeekStatistics(this.week)
    }else{
      this.currentDays -= 7;
      this.getWeekStatistics(this.week)
    }
  }

  formatDate(value) {
    let date = new Date(value);
    const day = date.toLocaleString('default', { day: '2-digit' });
    const month = date.toLocaleString('default', { month: 'short' });
    return day + '-' + month;
}
  
}
