import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'pnut-past-trainings',
  templateUrl: './past-trainings.component.html',
  styleUrls: ['./past-trainings.component.scss']
})
export class PastTrainingsComponent implements OnInit, AfterViewInit, OnDestroy {
  displayColumns = ['date', 'name', 'duration', 'calories', 'state'];
  pnutSource = new MatTableDataSource<Exercise>();
  private exChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe((exercises: Exercise[]) => {
      this.pnutSource.data = exercises;
    });
    this.trainingService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit() {
    this.pnutSource.sort = this.sort;
    this.pnutSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.pnutSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.exChangedSubscription.unsubscribe();
  }

}
