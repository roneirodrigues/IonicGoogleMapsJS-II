import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssociacoesPage } from './associacoes.page';

describe('AssociacoesPage', () => {
  let component: AssociacoesPage;
  let fixture: ComponentFixture<AssociacoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociacoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssociacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
