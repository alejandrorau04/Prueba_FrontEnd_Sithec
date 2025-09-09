import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { BenefitsSectionComponent } from './benefits-section/benefits-section.component';
import { ImageShowcaseComponent } from './image-showcase/image-showcase.component';
import { CtaSectionComponent } from './cta-section/cta-section.component';
import { ConnectSectionComponent } from './connect-section/connect-section.component';

import { FooterComponent } from './footer/footer.component';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HeaderComponent,
        HeroSectionComponent,
        BenefitsSectionComponent,
        ImageShowcaseComponent,
        CtaSectionComponent,
        ConnectSectionComponent,
        FooterComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'proyecto-sithec' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('proyecto-sithec');
  });

  it('should render the app header', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });
});