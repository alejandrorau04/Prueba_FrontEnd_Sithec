import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-connect-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './connect-section.component.html',
  styleUrls: ['./connect-section.component.less']
})
export class ConnectSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}