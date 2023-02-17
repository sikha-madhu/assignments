import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWelcomepageComponent } from './project-welcomepage.component';

describe('ProjectWelcomepageComponent', () => {
  let component: ProjectWelcomepageComponent;
  let fixture: ComponentFixture<ProjectWelcomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectWelcomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectWelcomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
