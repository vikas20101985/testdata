import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchMetadataComponent } from './fetch-metadata.component';

describe('FetchMetadataComponent', () => {
  let component: FetchMetadataComponent;
  let fixture: ComponentFixture<FetchMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchMetadataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
