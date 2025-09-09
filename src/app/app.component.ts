import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BenefitsSectionComponent } from './benefits-section/benefits-section.component';
import { ImageShowcaseComponent } from './image-showcase/image-showcase.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { FooterComponent } from './footer/footer.component';
import { DataVisualizationComponent } from './data-visualization/data-visualization.component'; // Importa el nuevo componente
import { ConnectSectionComponent } from './connect-section/connect-section.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroSectionComponent,
    BenefitsSectionComponent,
    ImageShowcaseComponent,
    CtaSectionComponent,
    FooterComponent,
    ConnectSectionComponent,
    DataVisualizationComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'proyecto-sithec';
}