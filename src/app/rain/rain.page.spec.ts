import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { RainPage } from './rain.page';

describe('ListPage', () => {
  let component: RainPage;
  let fixture: ComponentFixture<RainPage>;
  let listPage: HTMLElement;


  it('TODO', async () => {
    expect(true).toBeTruthy();
  });

  /*

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(RainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    listPage = fixture.nativeElement;
    const items = listPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });
  */

});
