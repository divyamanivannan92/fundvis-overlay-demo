import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  logError(error: any): void {
    // Log to console or integrate with logging systems
    console.error('Custom Error Log:', error);
  }

  getErrorMessage(error: any): string {
    if (error.status === 0) {
      return 'Network error: Please check your connection.';
    }

    switch (error.status) {
      case 404:
        return 'Requested resource not found.';
      case 500:
        return 'Internal server error occurred.';
      default:
        return error.message || 'Unexpected error occurred.';
    }
  }
}
