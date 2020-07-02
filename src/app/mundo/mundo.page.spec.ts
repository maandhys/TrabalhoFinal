import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MundoPage } from './mundo.page';

describe('MundoPage', () => {
  let component: MundoPage;
  let fixture: ComponentFixture<MundoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
