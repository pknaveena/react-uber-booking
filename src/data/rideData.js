export const RIDE_TYPES = [
  {
    id: 'uberx',
    name: 'UberX',
    capacity: 4,
    priceMultiplier: 1,
    icon: '🚗',
    description: 'Affordable, everyday rides',
    eta: '3-5 min'
  },
  {
    id: 'comfort',
    name: 'Comfort',
    capacity: 4,
    priceMultiplier: 1.3,
    icon: '🚙',
    description: 'Newer cars with extra legroom',
    eta: '5-8 min'
  },
  {
    id: 'xl',
    name: 'UberXL',
    capacity: 6,
    priceMultiplier: 1.7,
    icon: '🚐',
    description: 'Affordable rides for groups up to 6',
    eta: '6-10 min'
  },
  {
    id: 'black',
    name: 'Black',
    capacity: 4,
    priceMultiplier: 2.2,
    icon: '🚘',
    description: 'Premium rides in luxury cars',
    eta: '8-12 min'
  }
];

export const SAMPLE_LOCATIONS = {
  pickup: [
    'Home - 123 Main St',
    'Work - 456 Business Ave',
    'Airport Terminal 1',
    'Downtown Shopping Center',
    'Central Park Entrance'
  ],
  dropoff: [
    'City Mall',
    'Central Station',
    'Tech Park Office',
    'Riverside Plaza',
    'University Campus',
    'Hotel Downtown'
  ]
};

export const PAYMENT_METHODS = [
  { id: 'card', name: 'Credit Card', icon: '💳', last4: '4242' },
  { id: 'cash', name: 'Cash', icon: '💵', last4: null },
  { id: 'paypal', name: 'PayPal', icon: '🅿️', last4: null },
  { id: 'apple', name: 'Apple Pay', icon: '🍎', last4: null }
];