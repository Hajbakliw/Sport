import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextmatchComponent } from './nextmatch.component';

describe('NextmatchComponent', () => {
  let component: NextmatchComponent;
  let fixture: ComponentFixture<NextmatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextmatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
