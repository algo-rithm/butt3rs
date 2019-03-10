import { Component, OnInit } from '@angular/core';
import { NutLoggerService } from '../nut-logger.service'

@Component({
  selector: 'pnut-logpage',
  templateUrl: './logpage.component.html',
  styles: []
})
export class LogpageComponent implements OnInit {
  logs = [];

  constructor(private nutLoggerService: NutLoggerService) {
  }

  ngOnInit() {
    this.logs = this.nutLoggerService.getLogs()
  }

  onAddLog(form) {
    if (form.valid) {
      this.nutLoggerService.addLog(form.value.logMessage);
    }
  }

}
