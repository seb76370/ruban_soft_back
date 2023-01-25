import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateways';

@Module({
    providers:[EventsGateway],
    exports: [EventsGateway]
})

export class EventsModule {}
