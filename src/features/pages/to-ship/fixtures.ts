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
      company: 'MyCompany™',
    },
    recipientAddress: {
      street1: 'Via Puccini',
      street2: '12',
      city: 'Sesto Fiorentino',
      zip: '50019',
      country: 'it',
      company: '',
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
      company: 'YourCompany S.r.l.',
    },
    recipientAddress: {
      street1: 'Via Giusti',
      street2: '1',
      city: 'Pisa',
      zip: '56121',
      country: 'it',
      company: '',
    }
  },
  { 
    id: 'KW14PH6',
    parcel: {
      width: 12,
      length: 22,
      weight: 17,
      height: 18
    },
    senderAddress: {
      street1: 'Via Verdi',
      street2: '19',
      city: 'Grosseto',
      zip: '58100',
      country: 'it',
      company: '',
    },
    recipientAddress: {
      street1: 'Via Giusti',
      street2: '1',
      city: 'Viareggio',
      zip: '55049',
      country: 'it',
      company: '',
    }
  },
  { 
    id: 'JX1O09U',
    parcel: {
      width: 12,
      length: 22,
      weight: 11,
      height: 18
    },
    senderAddress: {
      street1: 'Via Verdi',
      street2: '19',
      city: 'Prato',
      zip: '59100',
      country: 'it',
      company: 'Our Company©',
    },
    recipientAddress: {
      street1: 'Piazza Dante',
      street2: '11',
      city: 'Borgo San Lorenzo',
      zip: '50032',
      country: 'it',
      company: '',
    }
  },
  { 
    id: 'DKL4F80',
    parcel: {
      width: 9,
      length: 12,
      weight: 4,
      height: 11
    },
    senderAddress: {
      street1: 'Via Bianchi',
      street2: '9',
      city: 'Sesto Fiorentino',
      zip: '57019',
      country: 'it',
      company: '',
    },
    recipientAddress: {
      street1: 'Piazza Giotto',
      street2: '1',
      city: 'Vicchio',
      zip: '50039',
      country: 'it',
      company: '',
    }
  },
]

export default fixtures;