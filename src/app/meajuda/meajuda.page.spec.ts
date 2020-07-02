import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeajudaPage } from './meajuda.page';

describe('MeajudaPage', () => {
  let component: MeajudaPage;
  let fixture: ComponentFixture<MeajudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeajudaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeajudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
