import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastropontodeauxilioPage } from './cadastropontodeauxilio.page';

describe('CadastropontodeauxilioPage', () => {
  let component: CadastropontodeauxilioPage;
  let fixture: ComponentFixture<CadastropontodeauxilioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastropontodeauxilioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastropontodeauxilioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
