import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBucketComponent } from './item-bucket.component';

describe('ItemBucketComponent', () => {
  let component: ItemBucketComponent;
  let fixture: ComponentFixture<ItemBucketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBucketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
