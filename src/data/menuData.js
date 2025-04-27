export const menuCategories = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: [
      'Start your day with our delicious breakfast options made with fresh ingredients.',
      'Choose from a variety of pancakes, waffles, and hearty breakfast specials.',
    ],
    subcategories: [
      {
        id: 'pancakes',
        name: 'Pancakes',
        description: [
          'Three fluffy homemade buttermilk cakes hot off the griddle. Served with buttery spread and Log Cabin syrup.',
          'Strawberry, blueberry, and sugar-free syrup available.',
          'Add a scoop of vanilla ice cream: $1.99.',
          'Add Nutella Hazelnut Cocoa spread: $1.00.',
          'Gluten-free buttermilk pancakes available: Add $1.99.',
        ],
      },
      {
        id: 'country-eggs',
        name: 'Country Style Eggs',
        description: ['Farm-fresh eggs cooked to perfection.'],
      },
      {
        id: 'sandwiches',
        name: 'Hearty Breakfast Sandwiches',
        description: ['Cooked omelette style & served on a grilled Telera roll with home fries'],
      },
      {
        id: 'waffles',
        name: 'Belgian Waffles',
        description: ['Served piping hot with buttery spread and Log Cabin syrup. Strawberry and blueberry syrup available.', 'Add a scoop of vanilla ice cream for $1.99'],
      },
      {
        id: 'french-toast',
        name: 'French Toast',
        description: ['Three slices of thick Texas style toast coated in an egg & milk batter. Served with buttery spread and Log Cabin syrup.', 'Strawberry and blueberry syrup available.', 'Add a scoop of vanilla ice cream for $1.99','Add a Fruit Topping (apple, strawberry, or peach compote) for $2.29'],
      },
      {
        id: 'specials',
        name: 'Daybreak Breakfast Specials',
        description: ['Start your day with a filling breakfast special to fuel you up!'],
      },
      {
        id: 'omelettes',
        name: '4 Egg Omelettes',
        description: ['All omelettes are served with grilled potatoes, and your choice of toast, biscuit, 2 plain pancakes or 2 pieces of plain French toast.', 'Omelettes made with egg whites only, additional $1.50','Extra meat inside omelettes add $1.99','Extra cheese add $1.29', 'Extra veggie add $0.99 '],


      },
      {
        id: 'sides',
        name: 'Side Orders',
        description: ['Perfect accompaniments to complete your meal.'],
      },
    ],
  },
  {
    id: 'lunch',
    name: 'Lunch',
    description: [
      'Satisfying lunch options for a midday meal.',
      'Enjoy burgers, sandwiches, salads, and soups made fresh to order.',
    ],
    subcategories: [
      {
        id: 'appetizers',
        name: 'Appetizers',
        description: ['We fry in Zero Trans Fat corn and canola oil.'],
      },
      {
        id: 'salads',
        name: 'Salads',
        description: ['Dressings: 1000 Island, Ranch, Bleu Cheese, Italian, Honey Mustard, Peppercorn Parmesan, Fat-Free Garlic Roasted Balsamic Vinaigrette.', 'Add a grilled chicken breast $3.99', ['Add 3 chicken tenders $3.99']],
      },
      {
        id: 'platters',
        name: 'Platters',
        description: ['Platters are served with French fries and coleslaw or applesauce.'],
      },
      {
        id: 'sandwiches',
        name: 'Sandwiches',
        description: ['Served with French fries, lettuce & tomato, and a dill pickle.', 'Reuben & Zesty Chicken come without lettuce & tomato.'],
      },
      {
        id: 'subs',
        name: 'Subs',
        description: ['LITTLE HOUSE; NOT LITTLE SUBS! Our overstuffed 12” subs are sure to satisfy your hunger.', ['Served with a dill pickle & fries.']],
      },
      {
        id: 'burgers',
        name: 'Half Pound Burgers',
        description: ['Best burgers on the beach! Served with lettuce, tomato, and dill pickle on the side.'],
      },
      {
        id: 'desserts',
        name: 'Desserts',
        description: ['Warm and comforting soups made from scratch.'],
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: [
      'Hot and cold drinks to complement your meal.',
      'Choose from coffee, tea, juices, smoothies, and milkshakes.',

    ],
    subcategories: [
      {
        id: 'coffee',
        name: 'Frozen & Specialty Drinks',
        description: ['Freshly brewed coffee and a selection of teas.'],
      },
      {
        id: 'beer',
        name: 'Beer',
        description: ['Refreshing juices made from fresh fruits.'],
      },
      {
        id: 'smoothies',
        name: 'Smoothies',
        description: ['Creamy and delicious smoothies packed with flavor.'],
      },
      {
        id: 'drinks',
        name: 'Drinks',
        description: ['Thick and creamy milkshakes in classic flavors.', 'Add a shot of French Vanilla, Hazelnut, Caramel or Cupcake flavoring for only $1.25', ['No Free Refills!']],
      },
    ],
  },
];


export const menuItems = [
  // PANCAKES
  {
    id: 1,
    name: 'Original Pancakes (3)',
    description: 'Home style pancakes',
    price: 8.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    tags: ['Gluten-Free'],
    isBestseller: true,
    isVegetarian: true,
  },
  {
    id: 2,
    name: 'Banana Pancakes',
    description: 'No monkeying around; we use real banana in our batter.',
    price: 9.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 3,
    name: 'Pancakes with Fresh Strawberries',
    description: 'In season and when available',
    price: 11.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 4,
    name: 'Bacon Pancakes',
    description: 'With bits of bacon',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
  },
  {
    id: 5,
    name: 'Red Velvet Pancakes',
    description: 'Sweet cream batter mixed with a touch of cocoa powder.',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 6,
    name: 'Pecan Pancakes',
    description: 'For that Southern flavor. Ya’ll come back now, ya hear?',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 7,
    name: 'Pigs In A Blanket ',
    description: 'Sausage wrapped in our hot cakes.',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 8,
    name: 'Nut & Grain Pancakes',
    description: 'Multigrain with pecans.',
    price: 11.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 9,
    name: 'Candy Pancakes',
    description: 'Reese’s Pieces | Snickers | M&M | Oreo Cookies & Cream.',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 10,
    name: 'Mini Originals',
    description: 'Home style pancakes, but mini.',
    price: 8.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },

  {
    id: 11,
    name: 'Blueberry Pancakes',
    description: 'Home style pancakes, but mini.',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 12,
    name: 'Blueberry Pancakes',
    description: 'Country fresh berries nestled here in these cakes',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 13,
    name: 'Buckwheat Pancakes',
    description: 'Range riding cakes.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 14,
    name: 'Chocolate Chip Pancakes',
    description: 'A big or small kid’s favorite using Guittard semi sweet chocolate chips',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 15,
    name: 'Fruit Topped Pancakes',
    description: 'Your choice of apple, strawberry or peach compote with whipped cream',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 16,
    name: 'Sweet Potato Cakes',
    description: 'A specialty here on the shore',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },
  {
    id: 17,
    name: 'Pineapple Upside Down Pancakes',
    description: 'Served with a slice of grilled pineapple and Maraschino cherry in each pancake. A real tropical treat',
    price: 10.99,
    category: 'breakfast',
    subcategory: 'pancakes',
    isVegetarian: true,
  },



  // COUNTRY STYLE EGGS
  {
    id: 20,
    name: 'Classic Two Eggs ',
    description: 'Served any style with toast and home fries.',
    price: 8.99,
    category: 'breakfast',
    subcategory: 'country-eggs',
    isVegetarian: true,
  },
  {
    id: 21,
    name: 'Steak & Eggs',
    description: 'Two eggs and a choice of bacon, sausage, ham or scrapple. Served with toast, and home fries.',
    price: 12.99,
    category: 'breakfast',
    subcategory: 'country-eggs',
  },
 
  
  // BREAKFAST SANDWICHES
  {
    id: 30,
    name: 'Cheddar Cheese & Egg ',
    description: 'A sandwich to start the day with a kick.',
    price: 9.99,
    category: 'breakfast',
    subcategory: 'sandwiches',
  },
  {
    id: 31,
    name: 'Morning Muffin ',
    description: 'One egg cooked over hard with Canadian bacon & American cheese on a sandwich size English muffin.',
    price: 9.99,
    category: 'breakfast',
    subcategory: 'sandwiches',
  },
  {
    id: 32,
    name: 'Cheddar Cheese, Egg & Meat',
    description: 'Your choice of bacon, ham, sausage or scrapple.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'sandwiches',
  },
  
  {
    id: 33,
    name: 'OC Monte Cristo Sandwich',
    description: 'Two slices of bread coated in an egg & milk batter grilled with sliced ham and turkey and Swiss cheese with a touch of honey mustard inside.',
    price: 15.99,
    category: 'breakfast',
    subcategory: 'sandwiches',
  },
  {
    id: 34,
    name: 'Vegetarian',
    description: 'Green peppers, tomatoes, cheddar cheese, onions & mushroom. Served on grilled wheat bread.',
    price: 9.99,
    category: 'breakfast',
    subcategory: 'sandwiches',
    isVegetarian: true,
  },
  {
    id: 35,
    name: 'Breakfast Burritos',
    description: 'Green peppers, tomatoes, cheddar cheese, onions & mushroom. Served on grilled wheat bread.',
    price: 12.99,
    category: 'breakfast',
    subcategory: 'sandwiches',
    isVegetarian: false,
  },
  







  // BELGIAN WAFFLES
  {
    id: 40,
    name: 'Original Waffle',
    description: 'The classic golden brown waffle.',
    price: 11.99,
    category: 'breakfast',
    subcategory: 'waffles',
   
  },
  {
    id: 41,
    name: 'Pecan Waffles ',
    description: 'For that Southern flavor. Ya’ll come back now.',
    price: 12.99,
    category: 'breakfast',
    subcategory: 'waffles',
  },
  {
    id: 42,
    name: 'Waffles with Fresh Strawberries',
    description: 'Hot and golden brown topped with fresh strawberries, in season.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'waffles',
   
  },
  {
    id: 43,
    name: 'Pancakes & Country Fried Chicken Platter',
    description: '2 Pancakes and 2 homestyle chicken tenders served with sausage gravy.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'waffles',
   
  },
  {
    id: 44,
    name: 'Waffle Toppers',
    description: 'Our hot and golden brown waffles topped with your choice of apple, strawberry, or peach compote.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'waffles',
   
  },
  {
    id: 45,
    name: 'Bacon Waffle',
    description: 'Bits of bacon sprinkled throughout',
    price: 12.99,
    category: 'breakfast',
    subcategory: 'waffles',
    
  },

  {
    id: 46,
    name: 'Country Fried Chicken & Waffle Platter',
    description: 'A fresh cooked waffle with 2 homestyle chicken tenders served with a side of sausage gravy',
    price: 16.99,
    category: 'breakfast',
    subcategory: 'waffles',
    
  },













  // FRENCH TOAST
  {
    id: 50,
    name: 'Homestyle ',
    description: 'Golden browned egg & milk coating.',
    price: 8.99,
    category: 'breakfast',
    subcategory: 'french-toast',
   
  },
  {
    id: 51,
    name: 'Cinnamon ',
    description: 'Homestyle with a hint of cinnamon.',
    price: 8.99,
    category: 'breakfast',
    subcategory: 'french-toast',
   
  },
  {
    id: 52,
    name: 'French Toast with Fresh Strawberries',
    description: 'Topped with fresh strawberries, in season.',
    price: 11.99,
    category: 'breakfast',
    subcategory: 'french-toast',
  },
  {
    id: 53,
    name: 'Cinnamon & Raisin',
    description: '(4) Made with cinnamon-raisin bread.',
    price: 8.99,
    category: 'breakfast',
    subcategory: 'french-toast',
  },
  
  // BREAKFAST SPECIALS
  {
    id: 60,
    name: 'Daybreak',
    description: '2 plain cakes, 1 egg, & choice of bacon, ham, sausage or scrapple.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'specials',
  },
  {
    id: 61,
    name: 'Chipped Beef or Sausage Gravy',
    description: 'Creamed chipped beef or sausage gravy served on toast or biscuits with an order of home fries.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'specials',
  },
  {
    id: 62,
    name: 'Baby Back Pork Ribs & Eggs ',
    description: '1/2 rack of ribs with eggs, homefries and your choice of toast or biscuit.',
    price: 22.99,
    category: 'breakfast',
    subcategory: 'specials',
    
  },
  {
    id: 63,
    name: 'French Daybreak ',
    description: '2 pieces of French toast, 1 egg, & choice of bacon, ham, sausage or scrapple.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'specials',
    
  },
  {
    id: 64,
    name: 'Cheesesteak Hash & Eggs  ',
    description: 'Our diced redskin potatoes grilled with cheesesteak and onions, topped with cheddar cheese. Served with eggs and your choice of 1 breakfast meat.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'specials',
    
  },
  // OMELETTES


  {
    id: 70,
    name: 'Cheese',
    description: 'Our omelette filled with cheddar cheese.',
    price: 12.99,
    category: 'breakfast',
    subcategory: 'omelettes',
  },
  {
    id: 71,
    name: 'Steak & Cheese',
    description: 'Philly style cheesesteak in an omelette with provolone cheese.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },
  {
    id: 72,
    name: 'Meat Lovers',
    description: 'All four meats and cheddar.',
    price: 17.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },
  {
    id: 73,
    name: 'Shrimp Omelette ',
    description: 'Grilled shrimp mixed with cheddar cheese and spinach, dusted with Old Bay.',
    price: 18.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },
  {
    id: 74,
    name: 'Eastern Shore Favorite ',
    description: 'Thick sliced bacon, onions, potatoes, cheddar cheese, served with sour cream.',
    price: 15.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    
  },
  {
    id: 75,
    name: 'Crab (Old Bay) ',
    description: 'Crab meat, cheddar cheese with a dash of Old Bay Seasoning',
    price: 19.99,
    category: 'breakfast',
    subcategory: 'omelettes',
  
  },

  {
    id: 76,
    name: 'Cheddar Cheese and Add Choice of One',
    description: 'Your choice of thick sliced bacon, ham, sausage, turkey sausage or scrapple combined with cheese inside your omelette.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },
  {
    id: 77,
    name: 'Hawaiian',
    description: 'Pineapple, diced ham & cheddar cheese.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },
  {
    id: 78,
    name: 'Mushroom & Cheese',
    description: 'Fresh mushrooms and cheddar.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },
  {
    id: 79,
    name: 'Seafood',
    description: 'Shrimp, crab and scallops, blended and mixed with our own blend of seasoning and cheddar cheese.',
    price: 22.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },

  {
    id: 80,
    name: 'Southwestern',
    description: 'Classic favorite with ham, fresh green peppers, onions and melted cheddar.',
    price: 15.99,
    category: 'breakfast',
    subcategory: 'omelettes',
   
  },

  {
    id: 81,
    name: 'Vegetable',
    description: 'Sautéed green peppers, tomatoes, cheddar cheese, onions and mushrooms.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    isVegetarian: true,
  },
  {
    id: 82,
    name: 'Fiesta ',
    description: 'Sautéed green peppers, tomatoes, cheddar cheese, onions and mushrooms.',
    price: 13.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    isVegetarian: true,
  },
  {
    id: 83,
    name: 'Fiesta ',
    description: 'A house specialty with fajita chicken, cheddar cheese, green peppers and onions. Served with sour cream and salsa on the side.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    isVegetarian: true,
  },
  {
    id: 84,
    name: 'Greek Omelettea',
    description: 'Feta cheese, fresh spinach and diced tomato (add mushrooms for $0.75).',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    isVegetarian: true,
  },
  {
    id: 85,
    name: 'Chipped Beef Omelette',
    description: 'Creamed chipped beef and egg omelette.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    isVegetarian: true,
  },
  {
    id: 86,
    name: 'Fajita Chicken Omelette',
    description: 'Stuffed with grilled fajita chicken strips and cheddar cheese.',
    price: 14.99,
    category: 'breakfast',
    subcategory: 'omelettes',
    isVegetarian: true,
  },




  // SIDES
  {
    id: 90,
    name: 'Crispy Bacon',
    description: 'Three strips of crispy bacon.',
    price: 2.49,
    category: 'breakfast',
    subcategory: 'sides',
  },
  {
    id: 91,
    name: 'Homefries',
    description: 'Golden brown diced potatoes.',
    price: 5.99,
    category: 'breakfast',
    subcategory: 'sides',
  },
  {
    id: 92,
    name: 'Fried Green Tomatoes',
    description: 'Five slices of green tomatoes, breaded and deep fried. Served with ancho chipotle sauce on the side.',
    price: 9.99,
    category: 'breakfast',
    subcategory: 'sides',
    
  },
  {
    id: 93,
    name: 'Homefries with Cheese',
    description: 'Golden brown diced potatoes with cheddar cheese.',
    price: 7.99,
    category: 'breakfast',
    subcategory: 'sides',
    
  },
  {
    id: 94,
    name: 'Fresh Banana',
    description: 'Fresh banana served on the side.',
    price: 1.99,
    category: 'breakfast',
    subcategory: 'sides',
    isVegetarian: true,
  },
  {
    id: 95,
    name: 'Toast or Biscuit',
    description: 'White, Wheat or Rye.',
    price: 2.19,
    category: 'breakfast',
    subcategory: 'sides',
   
  },
  {
    id: 96,
    name: 'Grits',
    description: 'Creamy grits.',
    price: 3.99,
    category: 'breakfast',
    subcategory: 'sides',
   
  },
  {
    id: 97,
    name: 'Oversized English Muffin',
    description: '',
    price: 2.19,
    category: 'breakfast',
    subcategory: 'sides',
   
  },
  {
    id: 98,
    name: 'Large Muffin ',
    description: 'Blueberry or Double Chocolate Chip.',
    price: 4.49,
    category: 'breakfast',
    subcategory: 'sides',
   
  },
  {
    id: 99,
    name: 'Warm Cinnamon Roll ',
    description: 'Freshly baked and served warm.',
    price: 4.49,
    category: 'breakfast',
    subcategory: 'sides',
   
  },
  {
    id: 100,
    name: 'Breakfast Meats ',
    description: 'Your choice of ONE: Bacon, honey cured ham, sausage link, turkey sausage, Rapa brand scrapple.',
    price: 4.99,
    category: 'breakfast',
    subcategory: 'sides',
   
  },

  {
    id: 101,
    name: 'Chipped Beef or Sausage Gravy',
    description: 'Creamed chipped beef or sausage gravy.',
    price: 6.99,
    category: 'breakfast',
    subcategory: 'sides',
   
  },

  {
    id: 102,
    name: 'Bagel with Cream Cheese',
    description: 'Plain, Cinnamon Raisin, Everything.',
    price: 3.99,
    category: 'breakfast',
    subcategory: 'sides',
   
  },

  {
    id: 103,
    name: 'Bowl of Fresh Strawberries',
    description: 'Fresh strawberries served on the side.',
    price: 3.99,
    category: 'breakfast',
    subcategory: 'sides',
    isVegetarian: true,
  },

  {
    id: 104,
    name: 'Fresh Fruit Bowl',
    description: 'Mandarin oranges, kiwi, grapes, bananas and strawberries (in season).',
    price: 7.99,
    category: 'breakfast',
    subcategory: 'sides',
  
  },


  // LUNCH - appetizers
  {
    id: 110,
    name: 'Mozzarella Sticks',
    description: '6 mozzarella sticks battered, seasoned, and fried golden brown. Served with marinara sauce.',
    price: 7.99,
    category: 'lunch',
    subcategory: 'appetizers',
  },
  {
    id: 111,
    name: 'Onion Rings',
    description: 'Our signature Craft Beer IPA battered onion rings or a basket of fries.',
    price: 8.99,
    category: 'lunch',
    subcategory: 'appetizers',
  },
  {
    id: 112,
    name: 'BBQ Wings (8)',
    description: 'Served with bleu cheese dressing on the side.',
    price: 13.99,
    category: 'lunch',
    subcategory: 'appetizers',
  },
  {
    id: 113,
    name: 'Buffalo Wings (8)',
    description: 'An American favorite. Spicy jumbo chicken wings served with bleu cheese dressing on the side.',
    price: 13.99,
    category: 'lunch',
    subcategory: 'appetizers',
  },
  {
    id: 114,
    name: 'Honey Garlic Hot Wings (8)',
    description: 'Tossed in Frank’s Red Hot honey garlic hot sauce, served with bleu cheese dressing on the side.',
    price: 13.99,
    category: 'lunch',
    subcategory: 'appetizers',
  },
  {
    id: 115,
    name: 'French Fries',
    description: 'Served with dipping sauce on the side.',
    price: 7.99,
    category: 'lunch',
    subcategory: 'appetizers',
  },



  // LUNCH - SANDWICHES
  {
    id: 120,
    name: 'Canadian Chicken',
    description: 'Our grilled chicken breast topped with Canadian bacon & cheese.',
    price: 11.99,
    category: 'lunch',
    subcategory: 'sandwiches',
  },
  {
    id: 121,
    name: 'Grilled Chicken',
    description: 'A grilled chicken breast served on a Kaiser roll.',
    price: 9.99,
    category: 'lunch',
    subcategory: 'sandwiches',
  },
  {
    id: 122,
    name: 'Reuben – Corned Beef or Turkey',
    description: 'Grilled lean corned beef or turkey with sauerkraut, Swiss cheese, and classic thousand island dressing on grilled rye bread.',
    price: 12.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 123,
    name: 'Little House Club ',
    description: 'Sliced turkey breast, sliced ham, bacon, lettuce, and tomato served stacked on white toast.',
    price: 14.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 124,
    name: 'BLT',
    description: 'Bacon, lettuce, and tomato served on white toast.',
    price: 8.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 125,
    name: 'Quesadillas ',
    description: 'A honey wheat tortilla with your choice of: Ground Beef, Chicken, or Cheesesteak with cheddar cheese and fries and salsa served on the side. Veggie option (grilled onions, mushrooms, tomatoes, & sweet peppers) also available',
    price: 14.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 126,
    name: 'Hawaiian Chicken Sandwich',
    description: 'Grilled chicken breast topped with grilled pineapple, Canadian bacon, and cheddar cheese.',
    price: 11.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 127,
    name: 'OC Monte Cristo Sandwich',
    description: 'Two slices of bread coated in an egg & milk batter grilled with sliced ham, turkey, and Swiss cheese with a touch of honey mustard inside.',
    price: 15.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 128,
    name: 'Zesty Chicken',
    description: 'Our charbroiled chicken breast topped with sweet peppers, onions, and provolone cheese. Served on a Kaiser roll.',
    price: 11.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },
  {
    id: 129,
    name: 'Fajita Chicken Wrap',
    description: 'Fajita chicken, grilled sweet peppers, onions, cheddar cheese, roasted garlic pepper, lettuce, and tomato drizzled with fat-free roasted garlic balsamic vinaigrette. Served in a honey wheat wrap.',
    price: 13.99,
    category: 'lunch',
    subcategory: 'sandwiches',
   
  },


  // LUNCH - SALADS
  {
    id: 130,
    name: 'House Salad',
    description: 'Fresh green leaf crowns with field greens, tomato, red onion, and cucumber with your choice of dressing.',
    price: 9.99,
    category: 'lunch',
    subcategory: 'salads',
   
  },
  {
    id: 131,
    name: 'Greek Salad ',
    description: 'Spinach and green leaf lettuce topped with feta cheese, black olives, tomatoes, and red onions tossed in a special Greek dressing.',
    price: 13.99,
    category: 'lunch',
    subcategory: 'salads',
  },


  // LUNCH - PLATTERS
  {
    id: 140,
    name: 'Chicken Tenders',
    description: '(4) chicken tenders, French fries, and coleslaw',
    price: 12.99,
    category: 'lunch',
    subcategory: 'platters',
   
  },
  {
    id: 141,
    name: 'Succulent 1/2 Rack of Baby Back Pork Ribs',
    description: 'Mouth-watering baby back ribs drenched in BBQ sauce and uninhibited in flavor.',
    price: 22.99,
    category: 'lunch',
    subcategory: 'platters',
  },


//LUNCH - SUBS

{
  id: 150,
  name: 'Philly Style Cheesesteak Sub',
  description: 'Tender steak underneath melted provolone cheese. Served with lettuce and tomato on a 12″ sub roll.',
  price: 16.99,
  category: 'lunch',
  subcategory: 'subs',
},
{
  id: 151,
  name: 'Zesty Cheesesteak',
  description: 'Our steak topped with onions, sweet peppers, and melted provolone cheese.',
  price: 16.99,
  category: 'lunch',
  subcategory: 'subs',
},
{
  id: 152,
  name: 'Zesty Chicken',
  description: 'Our chicken sub, but this one is topped with onions, sweet peppers, and melted provolone cheese.',
  price: 16.99,
  category: 'lunch',
  subcategory: 'subs',
},
{
  id: 153,
  name: 'Zesty Chicken',
  description: 'A hot grilled chicken breast topped with American cheese, lettuce, and tomato.',
  price: 16.99,
  category: 'lunch',
  subcategory: 'subs',
},



  // LUNCH - BURGERS

  {
    id: 160,
    name: 'Cheeseburger',
    description: 'Our awesome 8 oz. burger with melted cheese. Add mushroom $0.50!',
    price: 15.99,
    category: 'lunch',
    subcategory: 'burgers',
  },
  {
    id: 161,
    name: 'Bacon Cheeseburger',
    description: 'Our 8 oz. burger topped with melted cheese and thick slices of bacon with BBQ sauce on the side.',
    price: 16.99,
    category: 'lunch',
    subcategory: 'burgers',
  },
  {
    id: 162,
    name: 'Hawaiian Burger',
    description: 'Our 8 oz. burger topped with grilled pineapple, Canadian bacon & cheddar cheese.',
    price: 15.99,
    category: 'lunch',
    subcategory: 'burgers',
  },
  {
    id: 163,
    name: 'Zesty Cheeseburger',
    description: 'Our 8 oz. burger topped with grilled pineapple, Canadian bacon & cheddar cheese.',
    price: 16.99,
    category: 'lunch',
    subcategory: 'burgers',
  },
  {
    id: 164,
    name: 'Veggie Burger',
    description: 'Vegetable patty made from black beans, whole kernel corn, tomatoes, peppers, mild chiles with a hint of cilantro and salsa seasoning.',
    price: 14.99,
    category: 'lunch',
    subcategory: 'burgers',
    isVegetarian: true,
  },

 {
    id: 165,
    name: 'Breakfast Burger',
    description: 'Our 8 oz. burger with one fried egg and melted cheddar cheese.',
    price: 15.99,
    category: 'lunch',
    subcategory: 'burgers',
    isVegetarian: false,
  },
  

  //LUNCH - DESSERTS

{
    id: 170,
    name: 'Belgian Waffle',
    description: 'Topped with fresh strawberries add $2.99.',
    price: 11.99,
    category: 'lunch',
    subcategory: 'desserts',
    
  },
  {
    id: 171,
    name: 'Belgian Waffle',
    description: 'Topped with a scoop of vanilla ice cream add $1.99.',
    price: 11.99,
    category: 'lunch',
    subcategory: 'desserts',
    
  },
  {
    id: 172,
    name: 'Ice Cream Sundae',
    description: 'One scoop of Breyer’s vanilla ice cream with chocolate syrup, chopped pecans, whipped cream, and a cherry.',
    price: 4.99,
    category: 'lunch',
    subcategory: 'desserts',
    
  },


  // BEVERAGES - COFFEE & TEA
  {
    id: 180,
    name: 'Irish Coffee ',
    description: 'Coffee laced with Irish Whiskey & topped with whipped cream.',
    price: 8.99,
    category: 'beverages',
    subcategory: 'coffee',
   
  },
  {
    id: 181,
    name: 'Grand Coffee',
    description: 'Coffee laced with Grand Marnier & topped with whipped cream.',
    price: 9.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 182,
    name: 'Nutty Irishman',
    description: 'Coffee and Irish Whiskey. Frangelico and topped with whipped cream.',
    price: 9.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 183,
    name: 'Little House Signature Bloody Mary',
    description: 'Vodka, tomato juice and special ingredients mixed to perfection. Guaranteed to fire up your taste buds.',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
   
  },
  {
    id: 184,
    name: 'Cafe Au Lait',
    description: 'Godiva White Chocolate Liqueur, Kahlua and coffee topped with whipped cream.',
    price: 9.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 185,
    name: 'Rum Chata Cinnamon Bun',
    description: 'Coffee laced with Rum Chata and Kahlua, topped with whipped cream.',
    price: 9.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 186,
    name: 'Grand Mimosa ',
    description: 'Champagne & orange juice blended together in a glass rimmed with Grand Marnier.',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 187,
    name: 'Nuts & Berries ',
    description: 'Coffee laced with Frangelico, Bailey’s and Chambord topped with whipped cream.',
    price: 9.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 188,
    name: 'Frozen Daiquiris ',
    description: 'Very refreshing, Strawberry, Banana or Peach.',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 189,
    name: 'Pina Colada ',
    description: 'Just like in the tropics!',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },

  {
    id: 190,
    name: 'Pina Colada ',
    description: 'Tequila Sunrise ',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 433,
    name: 'Margarita ',
    description: 'Frozen or on the rocks, this will help you beat the heat!',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },
  {
    id: 191,
    name: 'Orange Crush',
    description: 'Orange vodka, orange juice, triple sec and a splash of soda.',
    price: 11.99,
    category: 'beverages',
    subcategory: 'coffee',
    
  },

  // BEVERAGES - BEER
  {
    id: 200,
    name: 'Domestic',
    description: '(Miller Lite, Coors Light, Blue Moon, Yuengling)',
    price: 5.99,
    category: 'beverages',
    subcategory: 'beer',
    
  },
  {
    id: 201,
    name: 'Imported',
    description: '(Corona, Heineken)',
    price: 6.99,
    category: 'beverages',
    subcategory: 'beer',
    
  },

  
  // BEVERAGES - SMOOTHIES
  {
    id: 210,
    name: 'Strawberry Smoothie ',
    description: 'Smoothie made with fresh strawberries.',
    price: 8.99,
    category: 'beverages',
    subcategory: 'smoothies',
   
  },
  {
    id: 211,
    name: 'Peach Smoothie',
    description: 'Peach smoothie made with fresh peaches.',
    price: 8.99,
    category: 'beverages',
    subcategory: 'smoothies',
    
  },
  {
    id: 212,
    name: 'Banana Smoothie',
    description: 'Banana smoothie made with fresh bananas.',
    price: 8.99,
    category: 'beverages',
    subcategory: 'smoothies',
    
  },
  {
    id: 212,
    name: 'Fresh Fruit Cup Smoothie ',
    description: 'Mandarin oranges, kiwi, grapes, bananas, and strawberries blended together',
    price: 9.99,
    category: 'beverages',
    subcategory: 'smoothies',
    
  },
  {
    id: 212,
    name: 'Non-Alcoholic Pina Colada',
    description: 'Just like in the tropics!',
    price: 8.99,
    category: 'beverages',
    subcategory: 'smoothies',
    
  },
  // BEVERAGES - MILKSHAKES
  {
    id: 220,
    name: 'Fresh Brewed Coffee, Hot Tea',
    description: 'Creamy vanilla ice cream blended to perfection.',
    price: 3.99,
    category: 'beverages',
    subcategory: 'drinks',
    
  },
  {
    id: 221,
    name: 'Iced Coffee',
    description: 'Black and Bold Cold Brewed 100% Arabica Coffee or Iced Original Kona Blend Coffee with whole milk and cane sugar 16 oz. ',
    price: 4.99,
    category: 'beverages',
    subcategory: 'drinks',
   
  },
  {
    id: 222,
    name: 'Hot Chocolate',
    description: 'Rich hot chocolate.',
    price: 3.99,
    category: 'beverages',
    subcategory: 'drinks',
    
  },
  {
    id: 223,
    name: 'Cappuccino',
    description: 'French Vanilla, Mocha or Latte.',
    price: 3.99,
    category: 'beverages',
    subcategory: 'drinks',
    
  },
  {
    id: 224,
    name: 'Milk',
    description: 'Small 12 oz. $3.99 | Large 20 oz. $4.99',
    price: 3.99,
    category: 'beverages',
    subcategory: 'drinks',
    
  },
  {
    id: 225,
    name: 'Soda, Sweet Tea, Unsweetened Tea, Bottled Water',
    description: 'Pepsi, Diet Pepsi, Mt. Dew, Dr. Pepper, Birch Beer, Pink Lemonade, Sierra Mist, Lipton Raspberry Tea, Orange Crush 20 oz.',
    price: 3.99,
    category: 'beverages',
    subcategory: 'drinks',
    
  },



];
