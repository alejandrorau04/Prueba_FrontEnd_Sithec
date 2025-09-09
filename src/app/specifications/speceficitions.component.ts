import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications',
  standalone: true, // Asegúrate de que este componente también sea standalone
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.less']
})
export class SpecificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}