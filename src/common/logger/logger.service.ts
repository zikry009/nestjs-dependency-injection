import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  /**
   * Logs a message to the console.
   * @param message - The message to log.
   */
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}
