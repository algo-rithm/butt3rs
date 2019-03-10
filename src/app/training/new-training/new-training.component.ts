import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pnut-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.scss']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
