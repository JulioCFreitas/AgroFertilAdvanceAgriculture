import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaTerraComponent } from './minha-terra.component';

describe('MinhaTerraComponent', () => {
  let component: MinhaTerraComponent;
  let fixture: ComponentFixture<MinhaTerraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinhaTerraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinhaTerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
