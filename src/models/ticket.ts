import { Document, Model, Schema, model } from 'mongoose';

// interface for TicketAttrs
interface TicketAttrs {
  title: string;
  price: number;
  userId: string;
}

// interface for TicketDoc
interface TicketDoc extends Document {
  title: string;
  price: number;
  userId: string;
}

// interface for TicketModel
interface TicketModel extends Model<TicketDoc> {
  build(attrs: TicketAttrs): TicketDoc;
}

// create ticketSchema with custom toJSON
const ticketSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

// define build method
ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket(attrs);
};

// create Ticket model
const Ticket = model<TicketDoc, TicketModel>('Ticket', ticketSchema);

// export
export { Ticket };
