import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupKontaktyComponent } from './popup-kontakty.component';

describe('PopupKontaktyComponent', () => {
  let component: PopupKontaktyComponent;
  let fixture: ComponentFixture<PopupKontaktyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupKontaktyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupKontaktyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
