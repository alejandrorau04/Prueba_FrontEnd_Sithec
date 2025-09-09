import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de que CommonModule esté importado

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.less']
})
export class CtaSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}