import { NotFoundError } from '@ldxtickets/common';
import express, { Request, Response } from 'express';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  // find ticket by id
  const ticket = await Ticket.findById(req.params.id);

  // throws NotFoundError if ticket not found
  if (!ticket) {
    throw new NotFoundError();
  }

  // else send back ticket
  res.send(ticket);
});

export { router as showTicketRouter };
