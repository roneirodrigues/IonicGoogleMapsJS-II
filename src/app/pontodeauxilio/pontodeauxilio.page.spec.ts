import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PontodeauxilioPage } from './pontodeauxilio.page';

describe('PontodeauxilioPage', () => {
  let component: PontodeauxilioPage;
  let fixture: ComponentFixture<PontodeauxilioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PontodeauxilioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PontodeauxilioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
