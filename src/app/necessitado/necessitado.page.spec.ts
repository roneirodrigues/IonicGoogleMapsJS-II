import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NecessitadoPage } from './necessitado.page';

describe('NecessitadoPage', () => {
  let component: NecessitadoPage;
  let fixture: ComponentFixture<NecessitadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NecessitadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NecessitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
