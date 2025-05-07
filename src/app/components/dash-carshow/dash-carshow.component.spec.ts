import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashCarshowComponent } from './dash-carshow.component';

describe('DashCarshowComponent', () => {
  let component: DashCarshowComponent;
  let fixture: ComponentFixture<DashCarshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashCarshowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashCarshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
