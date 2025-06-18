import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorService: ErrorHandlerService) {}

  handleError(error: any): void {
    this.errorService.logError(error);    
  }
}
