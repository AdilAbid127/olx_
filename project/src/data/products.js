export const categories = [
  { id: 1, name: 'Mobiles', icon: '📱', slug: 'mobiles' },
  { id: 2, name: 'Vehicles', icon: '🚗', slug: 'vehicles' },
  { id: 3, name: 'Property For Sale', icon: '🏠', slug: 'property-sale' },
  { id: 4, name: 'Property For Rent', icon: '🏢', slug: 'property-rent' },
  { id: 5, name: 'Electronics', icon: '💻', slug: 'electronics' },
  { id: 6, name: 'Bikes', icon: '🏍️', slug: 'bikes' },
  { id: 7, name: 'Business Industrial', icon: '🏭', slug: 'business' },
  { id: 8, name: 'Services', icon: '🔧', slug: 'services' },
  { id: 9, name: 'Jobs', icon: '💼', slug: 'jobs' },
  { id: 10, name: 'Animals', icon: '🐕', slug: 'animals' },
  { id: 11, name: 'Furniture Home Decor', icon: '🪑', slug: 'furniture' },
  { id: 12, name: 'Fashion Beauty', icon: '👕', slug: 'fashion' },
  { id: 13, name: 'Books Sports Hobbies', icon: '📚', slug: 'books' },
  { id: 14, name: 'Kids', icon: '🧸', slug: 'kids' }
];

export const products = [
  {
    id: 1,
    title: 'iPhone 14 Pro Max 256GB',
    price: 'Rs 1,45,000',
    location: 'Lahore, Punjab',
    category: 'mobiles',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Brand new iPhone 14 Pro Max with 256GB storage. Complete box with all accessories.',
    posted: '2 days ago',
    featured: true
  },
  {
    id: 2,
    title: 'Samsung Galaxy S23 Ultra',
    price: 'Rs 1,25,000',
    location: 'Karachi, Sindh',
    category: 'mobiles',
    image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Excellent condition Samsung Galaxy S23 Ultra with S Pen. 512GB storage.',
    posted: '1 day ago',
    featured: false
  },
  {
    id: 3,
    title: 'Honda Civic 2022',
    price: 'Rs 45,00,000',
    location: 'Islamabad, Punjab',
    category: 'vehicles',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Honda Civic 2022 model in excellent condition. First owner, genuine miles.',
    posted: '3 days ago',
    featured: true
  },
  {
    id: 4,
    title: 'Toyota Corolla 2020',
    price: 'Rs 38,50,000',
    location: 'Lahore, Punjab',
    category: 'vehicles',
    image: 'https://images.pexels.com/photos/2111035/pexels-photo-2111035.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Well maintained Toyota Corolla 2020. Bank financing available.',
    posted: '1 week ago',
    featured: false
  },
  {
    id: 5,
    title: '2 Bedroom Apartment',
    price: 'Rs 25,000/month',
    location: 'Gulberg, Lahore',
    category: 'property-rent',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Spacious 2 bedroom apartment in prime location. Fully furnished.',
    posted: '2 days ago',
    featured: true
  },
  {
    id: 6,
    title: 'MacBook Pro M2',
    price: 'Rs 2,50,000',
    location: 'Karachi, Sindh',
    category: 'electronics',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
    description: 'MacBook Pro with M2 chip, 16GB RAM, 512GB SSD. Like new condition.',
    posted: '4 days ago',
    featured: false
  },
  {
    id: 7,
    title: 'Honda CB 150F',
    price: 'Rs 2,85,000',
    location: 'Faisalabad, Punjab',
    category: 'bikes',
    image: 'https://images.pexels.com/photos/2119691/pexels-photo-2119691.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Honda CB 150F in excellent condition. Recently serviced.',
    posted: '5 days ago',
    featured: true
  },
  {
    id: 8,
    title: 'Office Space for Rent',
    price: 'Rs 80,000/month',
    location: 'DHA, Karachi',
    category: 'business',
    image: 'https://images.pexels.com/photos/159805/office-home-creative-workspace-159805.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Modern office space in prime commercial area. Ready to move.',
    posted: '1 week ago',
    featured: false
  },
  {
    id: 9,
    title: 'Marketing Manager Position',
    price: 'Rs 60,000-80,000',
    location: 'Lahore, Punjab',
    category: 'jobs',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Experienced marketing manager required for leading company.',
    posted: '3 days ago',
    featured: true
  },
  {
    id: 10,
    title: 'Persian Cat',
    price: 'Rs 15,000',
    location: 'Islamabad, Punjab',
    category: 'animals',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Beautiful Persian cat, 6 months old. Vaccinated and healthy.',
    posted: '2 days ago',
    featured: false
  },
  {
    id: 11,
    title: 'Modern Sofa Set',
    price: 'Rs 45,000',
    location: 'Lahore, Punjab',
    category: 'furniture',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: '5 seater modern sofa set in excellent condition. Moving sale.',
    posted: '1 day ago',
    featured: true
  },
  {
    id: 12,
    title: 'Designer Lawn Suit',
    price: 'Rs 3,500',
    location: 'Karachi, Sindh',
    category: 'fashion',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Brand new designer lawn suit with dupatta. Stitched to perfection.',
    posted: '3 days ago',
    featured: false
  }
];