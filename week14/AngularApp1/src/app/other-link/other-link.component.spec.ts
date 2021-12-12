import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherLinkComponent } from './other-link.component';

describe('OtherLinkComponent', () => {
  let component: OtherLinkComponent;
  let fixture: ComponentFixture<OtherLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
