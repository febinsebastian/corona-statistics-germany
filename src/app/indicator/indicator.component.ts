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
  @Input() selectedStateAbbreviation;
  constructor() { }

  ngOnInit(): void {}

}
