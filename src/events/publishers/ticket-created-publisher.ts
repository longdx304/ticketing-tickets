import { Publisher, TicketCreatedEvent, Subjects } from '@ldxtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
