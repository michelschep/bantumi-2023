import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsComponent } from './bots.component';

describe('BotsComponent', () => {
  let component: BotsComponent;
  let fixture: ComponentFixture<BotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
