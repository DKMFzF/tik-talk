import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfileCardComponent } from './porfile-card.component';

describe('PorfileCardComponent', () => {
  let component: PorfileCardComponent;
  let fixture: ComponentFixture<PorfileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PorfileCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
