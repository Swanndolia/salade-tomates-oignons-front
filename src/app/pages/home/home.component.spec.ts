import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a main heading', () => {
    const h1Element = fixture.debugElement.query(By.css('h1'));
    expect(h1Element).toBeTruthy();
    expect(h1Element.nativeElement.textContent.trim()).toBeTruthy();
  });

  it('should have a call-to-action button', () => {
    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement).toBeTruthy();
    expect(buttonElement.nativeElement.textContent.trim()).toBeTruthy();
  });

  it('should have multiple feature sections', () => {
    const featureElements = fixture.debugElement.queryAll(By.css('.feature'));
    expect(featureElements.length).toBeGreaterThan(0);
  });

  it('should have a featured recipes section', () => {
    const featuredRecipesSection = fixture.debugElement.query(By.css('.featured-recipes'));
    expect(featuredRecipesSection).toBeTruthy();
  });

  it('should have multiple recipe cards', () => {
    const recipeCards = fixture.debugElement.queryAll(By.css('.recipe-card'));
    expect(recipeCards.length).toBeGreaterThan(0);
  });

  it('should have titles for recipe cards', () => {
    const recipeCardTitles = fixture.debugElement.queryAll(By.css('.recipe-card h3'));
    expect(recipeCardTitles.length).toBeGreaterThan(0);
    recipeCardTitles.forEach(title => {
      expect(title.nativeElement.textContent.trim()).toBeTruthy();
    });
  });
});
