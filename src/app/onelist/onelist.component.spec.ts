import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnelistComponent } from './onelist.component';

describe('OnelistComponent', () => {
  let component: OnelistComponent;
  let fixture: ComponentFixture<OnelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
