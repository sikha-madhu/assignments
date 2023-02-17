import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAckComponent } from './project-ack.component';

describe('ProjectAckComponent', () => {
  let component: ProjectAckComponent;
  let fixture: ComponentFixture<ProjectAckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
