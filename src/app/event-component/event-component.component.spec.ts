import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from '../services/user.service';

import { EventComponentComponent } from './event-component.component';

const USERS = [{name: 'Petros', ows: 5}, {name: 'Valia', ows: 10}];

describe('EventComponentComponent', () => {
  let component: EventComponentComponent;
  let fixture: ComponentFixture<EventComponentComponent>;
  let MockUserService: any;

  beforeEach(() => {
    MockUserService = jasmine.createSpyObj(['getUsers'])
    TestBed.configureTestingModule({
      declarations: [ EventComponentComponent ],
      providers: [
        {provide: UserService, useValue:MockUserService},
        {provide: ActivatedRoute, useValue: {snapshot: {params: 'eventname'}}}
      ]
    })
});

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponentComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

  });


  describe('onFormcomplete', () => {
    it('should set formCompleted to true', () => {
      // Arrange
        component.formCompleted = false;
      // Act
        component.onFormComplete();
      // Assert
      expect(component.formCompleted).toEqual(true);
    })

    it('should set users to the users returned from the UserServive.getUsers', () => {
       // Arrange
      MockUserService.getUsers.and.returnValue(USERS);
      // Act
      component.onFormComplete();
      // Assert
      expect(component.users).toEqual(USERS);
    })
  })
});
