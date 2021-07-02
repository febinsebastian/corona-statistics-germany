import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { fade } from '../animate';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css'],
  animations: [ fade ]
})
export class IndicatorComponent implements OnInit {
  @Input() coronaStateData;
  @Input() selectedCountyAbbreviation;
  selectedCounty = new EventEmitter<Object>();
  constructor() { }

  onSelect() {
    this.selectedCounty.emit(this.coronaStateData);
  }

  ngOnInit(): void { }

}
