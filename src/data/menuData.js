
export const menuCategories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Start your day right with our delicious breakfast options'
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: 'Satisfying lunch options served all day'
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Hot and cold drinks to complement your meal'
  }
];

export const menuItems = [
  // BREAKFAST ITEMS
  {
    id: 1,
    name: 'Buttermilk Pancakes',
    description: 'Three fluffy homemade buttermilk cakes hot off the griddle. Served with buttery spread and Log Cabin syrup.',
    price: 9.99,
    category: 'breakfast',
    tags: ['Bestseller'],
    image: '/images/pancake-stack.jpg',
    isVegetarian: true
  },
  {
    id: 2,
    name: 'Blueberry Pancakes',
    description: 'Three fluffy pancakes filled with plump blueberries. Served with butter and syrup.',
    price: 11.99,
    category: 'breakfast',
    image: '/images/gallery14.jpg',
    isVegetarian: true
  },
  {
    id: 3,
    name: 'Country Style Eggs',
    description: 'Two farm-fresh eggs any style with crispy hash browns, choice of bacon or sausage, and toast.',
    price: 10.99,
    category: 'breakfast',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 4,
    name: 'Hearty Breakfast Sandwich',
    description: 'Toasted English muffin with egg, cheese, and your choice of bacon, ham, or sausage.',
    price: 8.99,
    category: 'breakfast',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 5,
    name: 'Belgian Waffle',
    description: 'Golden crisp outside, light and fluffy inside. Served with maple syrup and powdered sugar.',
    price: 10.99,
    category: 'breakfast',
    image: '/images/waffle.jpg',
    isVegetarian: true
  },
  {
    id: 6,
    name: 'French Toast',
    description: 'Thick-cut brioche bread dipped in cinnamon vanilla batter. Served with maple syrup and powdered sugar.',
    price: 10.99,
    category: 'breakfast',
    image: '/images/french-toast.jpg',
    isVegetarian: true
  },
  {
    id: 7,
    name: 'Daybreak Special',
    description: 'Two eggs any style, two pancakes, two bacon strips, and two sausage links.',
    price: 13.99,
    category: 'breakfast',
    tags: ['Bestseller'],
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 8,
    name: 'Western Omelette',
    description: 'Four egg omelette with ham, bell peppers, onions, and cheddar cheese. Served with grilled potatoes and toast.',
    price: 12.99,
    category: 'breakfast',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 9,
    name: 'Veggie Omelette',
    description: 'Four egg omelette with spinach, tomatoes, mushrooms, and Swiss cheese. Served with grilled potatoes and toast.',
    price: 11.99,
    category: 'breakfast',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  },
  
  // LUNCH ITEMS
  {
    id: 10,
    name: 'Classic Burger',
    description: 'Half-pound Angus beef patty with lettuce, tomato, onion, and pickle on a toasted brioche bun.',
    price: 12.99,
    category: 'lunch',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 11,
    name: 'Chicken Club Sandwich',
    description: 'Grilled chicken breast, bacon, lettuce, tomato, and mayo on toasted sourdough bread.',
    price: 11.99,
    category: 'lunch',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 12,
    name: 'BLT Sandwich',
    description: 'Crispy bacon, lettuce, tomato, and mayo on toasted white bread.',
    price: 9.99,
    category: 'lunch',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 13,
    name: 'Cobb Salad',
    description: 'Fresh mixed greens topped with grilled chicken, bacon, avocado, blue cheese, hard-boiled egg, and tomato.',
    price: 13.99,
    category: 'lunch',
    image: '/images/breakfast-plate.jpg',
  },
  {
    id: 14,
    name: 'Soup and Half Sandwich',
    description: 'Cup of soup of the day with half of any sandwich.',
    price: 10.99,
    category: 'lunch',
    image: '/images/breakfast-plate.jpg',
  },
  
  // BEVERAGES
  {
    id: 15,
    name: 'Coffee',
    description: 'Locally roasted, bottomless cup.',
    price: 2.99,
    category: 'beverages',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  },
  {
    id: 16,
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed daily.',
    price: 3.99,
    category: 'beverages',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  },
  {
    id: 17,
    name: 'Hot Chocolate',
    description: 'Rich and creamy with whipped cream.',
    price: 3.49,
    category: 'beverages',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  },
  {
    id: 18,
    name: 'Iced Tea',
    description: 'Freshly brewed and perfectly sweetened.',
    price: 2.99,
    category: 'beverages',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  },
  {
    id: 19,
    name: 'Milkshake',
    description: 'Hand-spun classic in vanilla, chocolate, or strawberry.',
    price: 4.99,
    category: 'beverages',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  },
  {
    id: 20,
    name: 'Specialty Smoothie',
    description: 'Blended with fresh fruits and yogurt. Ask about our flavors of the day.',
    price: 5.49,
    category: 'beverages',
    image: '/images/breakfast-plate.jpg',
    isVegetarian: true
  }
];
