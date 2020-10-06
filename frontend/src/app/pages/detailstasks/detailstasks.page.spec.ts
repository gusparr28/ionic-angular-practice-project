import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailstasksPage } from './detailstasks.page';

describe('DetailstasksPage', () => {
  let component: DetailstasksPage;
  let fixture: ComponentFixture<DetailstasksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstasksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailstasksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
