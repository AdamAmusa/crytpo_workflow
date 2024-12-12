import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinviewPage } from './coinview.page';

describe('CoinviewPage', () => {
  let component: CoinviewPage;
  let fixture: ComponentFixture<CoinviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
