import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareboneLayoutComponent } from './barebone-layout.component';

describe('BareboneLayoutComponent', () => {
  let component: BareboneLayoutComponent;
  let fixture: ComponentFixture<BareboneLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BareboneLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BareboneLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
