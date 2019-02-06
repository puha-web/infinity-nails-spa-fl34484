
const services = [
  {
    id: 1,
    service: 'Classic Manicure',
    category: 'Organic Manicures',
    price: '15',
    description: 'This consists of shaping your nails, cuticle work, lotion massage, hot towels and finishing with a polish'
  },
  {
    id: 2,
    service: 'Spa Manicure',
    category: 'Organic Manicures',
    price: '25',
    description: 'This service consits of nail trim, shaping your nails, cuticle work, skin exfoliation using dea sea salt, ' +
    'collagen mask, collagen cream, hot twoels, and the application of polish'
  },
  {
    id: 3,
    service: 'Deluxe Manicure',
    category: 'Organic Manicures',
    price: '35',
    description: 'This service consits of nail trim, shaping of nails, cleaning Cuticles, skin exfoliation using dead sea salt, collagen mask, ' +
    'Collagen cream, hand massage, healing herbal, gloves, and the Application of polish. Healing herbal neck wrap included) '
  },
  {
    id: 4,
    service: 'Natural Manicure',
    category: 'Organic Manicures',
    price: '30',
    description: 'Please refer to our NU-SKIN Menu. ' +
    'This service consts of nail trim, shaping your nails, cuticle work, skin exfoliation, hands massage, hot towels and ending with nail polish of your choice. '
  },
  {
    id: 5,
    service: 'Ice Dancer Manicure',
    category: 'Organic Manicures',
    price: '35',
    description: 'Please refer to our NU-SKIN Menu. ' +
    'This service consits of nail trim, shaping your nails, cuticle work, skin exfoliation, hands massage revives, stimulates, refereshes, cools, and soothes tired, ' +
    'achy arms and hands, hot towels and application of nail polish. '
  },
  {
    id: 6,
    service: 'Classic Pedicure',
    category: 'Organic Pedicures',
    price: '30',
    description: 'Service includes nail trim, shaping of your nails, cuticles, callus removal, experience the refeshing and exfoliating ' +
    'sugar scrub, foot mask, collagen cream with lotion massage, hot towels and polish.'
  },
  {
    id: 7,
    service: 'Spa Pedicure',
    category: 'Organic Pedicures',
    price: '35',
    description: 'Service includes nails trim, shaping of your nails, cuticles, callus removal,  exfoliating using dead sea salt, application of ' + 
    'collagen mask, collagen cream with lotion massage, hot towels and the applicaiton polish. Herbal neck wrap included.'
  },
  {
    id: 8,
    service: 'Deluxe Pedicure',
    category: 'Organic Pedicures',
    price: '40',
    description: 'Service includes nails trim, shaping of your nails, cuticles, callus removal, exfoliating using dead sea salt, application of ' + 
    'collagen mask, collagen cream with lotion massage, hot towels. Place with feet in healing herbal booties, and finish with the application of polish. Herbal neck wrap included.'
  },
  {
    id: 9,
    service: 'Smooothing Pedicue',
    category: 'Organic Pedicures',
    price: '35',
    description: 'Please refer to our NU-SKIN menu for more details ' 
  },
  {
    id: 10,
    service: 'Ice Dancer Pedicue',
    category: 'Organic Pedicures',
    price: '40',
    description: 'Please refer to our NU-SKIN menu for more details ' 
  },
  {
    id: 11,
    service: 'Fire Walker Pedicue',
    category: 'Organic Pedicures',
    price: '45',
    description: 'Please refer to our NU-SKIN menu for more details ' 
  },
  {
    id: 12,
    service: 'Essential Oils Pedicue',
    category: 'Organic Pedicures',
    price: '55',
    description: 'Please refer to our NU-SKIN menu for more details ' 
  },
  {
    id: 9,
    service: 'Acrylic (Full Set)',
    category: 'Nails Extension',
    price: '20+',
    description: ''
  },
  {
    id: 10,
    service: 'Acrylic (Fill)',
    category: 'Nails Extension',
    price: '30+',
    description: ''
  },
  {
    id: 11,
    service: 'Pink & White (Full Set)',
    category: 'Nails Extension',
    price: '45+',
    description: ''
  },
  {
    id: 12,
    service: 'Pink & White (Fill)',
    category: 'Nails Extension',
    price: '40+',
    description: ''
  },
  {
    id: 13,
    service: 'Pink Only (Fill)',
    category: 'Nails Extension',
    price: '25+',
    description: ''
  },
  {
    id: 14,
    service: 'Ombre (Full Set)',
    category: 'Nails Extension',
    price: '45+',
    description: ''
  },
  {
    id: 15,
    service: 'Ombre (Fill)',
    category: 'Nails Extension',
    price: '40+',
    description: ''
  },
  {
    id: 16,
    service: 'Color Dipping ',
    category: 'SNS & OPI Dipping',
    price: '40',
    description: '(on natural nails)'
  },
  {
    id: 17,
    service: 'French',
    category: 'SNS & OPI Dipping',
    price: '45',
    description: '(on natural nails)'
  },
  {
    id: 18,
    service: 'Extra dipping with tip ',
    category: 'SNS & OPI Dipping',
    price: '40',
    description: '(No fills with dipping powder)'
  },
  {
    id: 19,
    service: 'Gel Powder (Full Set) ',
    category: 'Gel',
    price: '35+',
    description: ''
  },
  {
    id: 20,
    service: 'Gel Powder (Fill) ',
    category: 'Gel',
    price: '25+',
    description: ''
  },
  {
    id: 21,
    service: 'Liquid Gel (Full Set)',
    category: 'Gel',
    price: '45+',
    description: ''
  },
  {
    id: 22,
    service: 'Liquid Gel (Fill) ',
    category: 'Gel',
    price: '30+',
    description: ''
  },
  {
    id: 23,
    service: 'Liquid Gel Pink & White (Full Set) ',
    category: 'Gel',
    price: '55+',
    description: ''
  },
  {
    id: 24,
    service: 'Liquid Gel Pink & White (Fill)',
    category: 'Gel',
    price: '50+',
    description: ''
  },
  {
    id: 25,
    service: 'Gel (Shellac) Color Manicure',
    category: 'Gel Polish',
    price: '30',
    description: ''
  },
  {
    id: 26,
    service: 'Gel (Shellac) French Manicure',
    category: 'Gel Polish',
    price: '35',
    description: ''
  },
  {
    id: 27,
    service: 'Cat Eyes Gel only',
    category: 'Gel Polish',
    price: '20',
    description: ''
  },
  {
    id: 25,
    service: 'Organic Manicure',
    category: 'Kiddy Services',
    price: '10',
    description: ''
  },
  {
    id: 26,
    service: 'Organic Pedicure',
    category: 'Kiddy Services',
    price: '20',
    description: 'Free design on 2 big toes'
  },
  {
    id: 27,
    service: 'Hand Polish change',
    category: 'Kiddy Services',
    price: '6',
    description: ''
  },
  {
    id: 27,
    service: 'Toes',
    category: 'Kiddy Services',
    price: '9',
    description: ''
  },
  {
    id: 28,
    service: 'Color Gel Polish',
    category: 'Additional Add On',
    price: '15',
    description: ''
  },
  {
    id: 29,
    service: 'Polish Change Hands',
    category: 'Additional Add On',
    price: '8',
    description: ''
  },
  {
    id: 30,
    service: 'Stiletto, Coffin, Almond Shaping',
    category: 'Additional Add On',
    price: '5+',
    description: ''
  },{
    id: 31,
    service: 'Natural Buff Shine',
    category: 'Additional Add On',
    price: '5',
    description: ''
  },
  {
    id: 32,
    service: 'French / American',
    category: 'Additional Add On',
    price: '5',
    description: ''
  },
  {
    id: 33,
    service: 'Acrylic Removal',
    category: 'Additional Add On',
    price: '10',
    description: ''
  },{
    id: 34,
    service: 'Gel Polish Removal',
    category: 'Additional Add On',
    price: '20',
    description: ''
  },
  {
    id: 35,
    service: 'Nails Art Design',
    category: 'Additional Add On',
    price: '3+',
    description: ''
  },
  {
    id: 36,
    service: 'French',
    category: 'Additional Add On',
    price: '20',
    description: ''
  },
  {
    id: 37,
    service: 'Feet',
    category: 'Additional Add On',
    price: '12',
    description: ''
  },
  {
    id: 38,
    service: 'Eyebrows',
    category: 'Waxing',
    price: '12',
    description: ''
  },
  {
    id: 39,
    service: 'Upper Lip',
    category: 'Waxing',
    price: '7',
    description: ''
  },
  {
    id: 40,
    service: 'Chin',
    category: 'Waxing',
    price: '10',
    description: ''
  },
  {
    id: 41,
    service: 'Sideburns',
    category: 'Waxing',
    price: '15+',
    description: ''
  },
  {
    id: 42,
    service: 'Whole Face',
    category: 'Waxing',
    price: '30+',
    description: ''
  },
  {
    id: 43,
    service: 'Under Arm',
    category: 'Waxing',
    price: '30+',
    description: ''
  },
  {
    id: 44,
    service: 'Full Arm',
    category: 'Waxing',
    price: '40+',
    description: ''
  },
  {
    id: 45,
    service: 'Half Arms',
    category: 'Waxing',
    price: '30+',
    description: ''
  },
  {
    id: 46,
    service: 'Full Legs',
    category: 'Waxing',
    price: '55+',
    description: ''
  },
  {
    id: 47,
    service: 'Half Legs',
    category: 'Waxing',
    price: '30',
    description: ''
  },
  {
    id: 45,
    service: '*angleLOC Facial Spa',
    category: 'Facial',
    price: '35',
    description: 'Please refer to our NU-SKIN Menu for more details on Facial Services'
  },
  {
    id: 46,
    service: '*ageLOC Refreshing Mask',
    category: 'Facial',
    price: '45',
    description: 'Please refer to our NU-SKIN Menu for more details on Facial Services'
  },
  {
    id: 47,
    service: '*ageLOC Refreshing Mask',
    category: 'Facial',
    price: '55',
    description: 'Please refer to our NU-SKIN Menu for more details on Facial Services'
  },
  {
    id: 47,
    service: 'Please ask for more information',
    category: 'Eyelash Extension',
    price: '',
    description: ''
  },
]


export default services;