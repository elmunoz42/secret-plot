/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GardenPlotComponent } from './garden-plot.component';

describe('GardenPlotComponent', () => {
  let component: GardenPlotComponent;
  let fixture: ComponentFixture<GardenPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
