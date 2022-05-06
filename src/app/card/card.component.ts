import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../model/Model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user!: Users;

  constructor() { }

  ngOnInit(): void {
  }

}
