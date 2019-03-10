import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutLoggerService {
  private logs = ['Log A'];

  constructor() { }

  addLog(logMessage: string) {
    this.logs.push(logMessage);
  }

  getLogs() {
    return [...this.logs];
  }

}
