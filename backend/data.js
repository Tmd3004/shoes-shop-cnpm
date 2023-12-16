import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Tran Manh Duc',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Le Thanh Son',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Air Force 1',
      slug: 'nike-air-force-1',
      category: 'Shoe',
      image: '/images/p1.jpeg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '2',
      name: 'Nike-Air-Jordan-1',
      slug: 'nike-air-jordan-1',
      category: 'Shoe',
      image: '/images/p2.jpeg',
      price: 250,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      // _id: '3',
      name: 'Adidas-Stan-Smith',
      slug: 'adidas-stan-smith',
      category: 'Shoe',
      image: '/images/p3.jpeg',
      price: 25,
      countInStock: 15,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      // _id: '4',
      name: 'Adidas Yeezy 700 V3',
      slug: 'adidas-yeezy-700-v3',
      category: 'Shoe',
      image: '/images/p4.jpeg',
      price: 65,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
