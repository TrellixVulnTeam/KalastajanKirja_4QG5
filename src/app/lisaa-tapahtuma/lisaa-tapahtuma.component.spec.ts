import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaaTapahtumaComponent } from './lisaa-tapahtuma.component';

describe('LisaaTapahtumaComponent', () => {
  let component: LisaaTapahtumaComponent;
  let fixture: ComponentFixture<LisaaTapahtumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisaaTapahtumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaaTapahtumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
