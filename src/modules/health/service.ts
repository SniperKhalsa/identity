import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getStatus(): string {
    return 'Health as a horse!';
  }
}
