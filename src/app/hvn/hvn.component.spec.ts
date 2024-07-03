import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HvnComponent } from './hvn.component';

describe('HvnComponent', () => {
  let component: HvnComponent;
  let fixture: ComponentFixture<HvnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HvnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
