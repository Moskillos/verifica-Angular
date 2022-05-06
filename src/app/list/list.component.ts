import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../model/Model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user!: Users;

  constructor() { }

  ngOnInit(): void {
  }

}
