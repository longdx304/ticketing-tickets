import { Publisher, TicketUpdatedEvent, Subjects } from '@ldxtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
