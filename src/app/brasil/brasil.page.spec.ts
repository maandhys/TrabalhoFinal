import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BrasilPage } from './brasil.page';

describe('BrasilPage', () => {
  let component: BrasilPage;
  let fixture: ComponentFixture<BrasilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrasilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BrasilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
