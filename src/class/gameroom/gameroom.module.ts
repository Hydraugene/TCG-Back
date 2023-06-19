import { Module } from '@nestjs/common';
import { Gameroom } from './gameroom';

@Module({
  providers: [Gameroom],
})
export class EventsModule {}