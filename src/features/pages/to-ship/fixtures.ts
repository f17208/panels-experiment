import { Order } from "../../../types/order";

const fixtures: Order[] = [
  { 
    id: 'E12DXY7',
    parcel: {
      width: 10,
      length: 12,
      weight: 5,
      height: 8
    },
    senderAddress: {
      street1: 'Via Cherubini',
      street2: '8',
      city: 'Firenze',
      zip: '50121',
      country: 'it',
    },
    recipientAddress: {
      street1: 'Via Puccini',
      street2: '12',
      city: 'Sesto Fiorentino',
      zip: '50019',
      country: 'it',
    }
  },
  { 
    id: 'FK12PO9',
    parcel: {
      width: 12,
      length: 22,
      weight: 9,
      height: 18
    },
    senderAddress: {
      street1: 'Via Verdi',
      street2: '19',
      city: 'Livorno',
      zip: '57100',
      country: 'it',
    },
    recipientAddress: {
      street1: 'Via Giusti',
      street2: '1',
      city: 'Pisa',
      zip: '56121',
      country: 'it',
    }
  }
]

export default fixtures;