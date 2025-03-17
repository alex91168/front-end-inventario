import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSellerAllComponent } from './top-seller-all.component';

describe('TopSellerAllComponent', () => {
  let component: TopSellerAllComponent;
  let fixture: ComponentFixture<TopSellerAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSellerAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSellerAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
