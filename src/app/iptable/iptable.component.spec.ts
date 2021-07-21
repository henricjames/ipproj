import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IptableComponent } from './iptable.component';

describe('IptableComponent', () => {
  let component: IptableComponent;
  let fixture: ComponentFixture<IptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
