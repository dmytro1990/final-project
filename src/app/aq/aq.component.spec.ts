import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AqComponent } from './aq.component';

describe('AqComponent', () => {
  let component: AqComponent;
  let fixture: ComponentFixture<AqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
