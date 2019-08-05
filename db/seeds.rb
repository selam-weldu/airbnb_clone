# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
  
  User.destroy_all
 
  User.create(
    username: 'mrkchoi',
    password: 'password',
    fname: 'Kenneth',
    bio: 'Easy going SF-based software engineer. Loves learning & exploring new cutures through food. Has traveled to 26 countries and counting. Looking forward to the next adventure!'
  )

  User.create(
    username: 'kennethichoi',
    password: 'password',
    fname: 'Kenneth',
    bio: 'Easy going SF-based software engineer. Loves learning & exploring new cutures through food. Has traveled to 26 countries and counting. Looking forward to the next adventure!'
  )


  User.create(
    username: 'guestuser',
    password: 'password',
    fname: 'Guest',
    bio: 'Guest User is a SF-based software engineer who loves to travel. Currently at 26 countries and counting! Hobbies include meeting new people and exploring different cultures through food. Looking forward to crossing paths in the coming future! ...'
  )


  User.create(
    username: 'geneva12',
    password: 'password',
    fname: 'Jason',
    bio: 'Hi, Iʼm Jason. Easy going world traveller, formerly living in Geneva and London, now returned to California.'
  )

  User.create(
    username: 'tytytyler',
    password: 'password',
    fname: 'Tyler',
    bio: "Hi, I'm Tyler! I've lived in SF for over 12 years, and have traveled to over 40 countries for work assignments and for fun. I've flown 800K+ miles in my lifetime. I'll go far for amazing food, and even further for great art and design. As an airbnb Superhost, I will help you get to know SF as a local. As I've stayed in countless hotels and BnB's over the years (I used to have Diamond status at one of the hotel chains --- 65 nights a year on the road!), I know what great hospitality feels like and what's important to make your stay comfortable and feel a home away from home. I love sharing my favorite hidden spots in SF with my guests, and the many wonderful things I've collected over the years that bring me joy! I look forward to hosting you. As a guest, I am responsible, trustworthy, and I like to keep things neat. I take care of nice things. When I travel these days, I prefer to stay in a home instead of a hotel so that I really get to experience the city as a local and not a tourist. That's why I love airbnb. In my free time, I enjoy urban and rural hiking, a little leisurely biking, and a dash of yoga. I like building and crafting things --- my latest outlet is the potter's wheel."
  )

  User.create(
    username: 'joshjosh',
    password: 'password',
    fname: 'Joshua',
    bio: "Hi, Iʼm Joshua! Hello! I am a theatre artist and teacher who recently moved to San Francisco with my wife. Outside of our love for theatre, we also have a passion for fine art and dining. We love to cook good food and drink good wine. We both are friendly, polite, and are looking forward to meeting you!"
  )

  User.create(
    username: 'thedavid23',
    password: 'password',
    fname: 'David',
    bio: "Hi, Iʼm David! San Francisco native, runner, biker, museum nerd. :)"
  )

  User.create(
    username: 'especialcarrie',
    password: 'password',
    fname: 'Carrie',
    bio: "Hi, Iʼm Carrie! Originally from Colorado, I've lived in San Francisco for the better part of 25 years and still absolutely love it. I'm a global traveler (30 countries and counting), work in the travel industry, and love showing off my City! I'm a former tech start-up employee (Xoogler), ski instructor and yoga teacher, well-balanced, fun, professional, and all around pretty relaxed. I loved doing home stays nearly 20 years ago while traveling solo around the world. It's wonderful to return the favor thanks to Airbnb! I'm a very proud Superhost and invite you to make yourself completely at home during your stay. I'm also very knowledgeable about the City, and always happy to make recommendations for any type of trip to San Francisco, so please ask!"
  )

  User.create(
    username: 'worldtraveler',
    password: 'password',
    fname: 'Koncha',
    bio: "Hi, Iʼm Koncha! I'm a New York girl, now living in San Francisco, and loving it!! I work in Private Equity Real Estate and have been a professional accountant for 14 years now, first in Dallas, then New York and London, and now SF. Growing up, I lived all over the place, including Geneva, Dubai, India, Austin, Kuwait and Morocco, and then as an adult, in Austin, Dallas, Paris, New York, London and now San Francisco! I love to travel and am a long time Airbnb user. I recently made my way through Europe and Asia, and hope to travel through South America and Australia to follow in the next few years!! I love Wes Anderson movies, good red wines, Napa, the outdoors, clean eating, my sweet 5 year old nephew, and now of course, my sweet puppy Pokey (she's getting insta famous @petitepokey). Please read the useful info in my listing about parking, the neighborhood, the homeless situation in SF, check-in details, etc."
  )

  User.create(
    username: 'matt_jeffy',
    password: 'password',
    fname: 'Matt & Jeff',
    bio: "Hi, We're Matt And Jeff! We've lived in San Francisco for over 35 years so we know it well and love to share our knowledge about The City with our guests. Matt is a teacher in the San Francisco Unified School District and Jeff is an audiologist. As Airbnb hosts we enjoy meeting people from all over the world. Getting to know our guests and the city they are from is one of the great things about being hosts. We enjoy traveling, good restaurants (San Francisco has some of the best), & live theater. We have a Golden Retriever named Jake (who is very friendly and loves to meet all of our guests) and two cats Mitts and Morsel (who rules the house)."
  )

  User.create(
    username: 'lovelygirls2',
    password: 'password',
    fname: 'Stacy',
    bio: "Hi, Iʼm Stacy! I'm a stay at home mom with two lovely girls. We love traveling (when we get the chance) and love having visitors stay at our home in San Francisco."
  )

  User.create(
    username: 'frenchchef99',
    password: 'password',
    fname: 'Katie',
    bio: "Hi, Iʼm Katie! I've lived in SF for over 12 years, and have traveled to over 40 countries for work assignments and for fun. I've flown 800K+ miles in my lifetime. I'll go far for amazing food, and even further for great art and design. As an airbnb Superhost, I will help you get to know SF as a local. As I've stayed in countless hotels and BnB's over the years (I used to have Diamond status at one of the hotel chains --- 65 nights a year on the road!), I know what great hospitality feels like and what's important to make your stay comfortable and feel a home away from home. I love sharing my favorite hidden spots in SF with my guests, and the many wonderful things I've collected over the years that bring me joy! I look forward to hosting you. As a guest, I am responsible, trustworthy, and I like to keep things neat. I take care of nice things. When I travel these days, I prefer to stay in a home instead of a hotel so that I really get to experience the city as a local and not a tourist. That's why I love airbnb. In my free time, I enjoy urban and rural hiking, a little leisurely biking, and a dash of yoga. I like building and crafting things --- my latest outlet is the potter's wheel."
  )

  User.create(
    username: 'carlos_gracie',
    password: 'password',
    fname: 'Carlos & Graciela',
    bio: "Hi, Iʼm Carlos & Graciela! I love SF and I enjoy talking about our great city with our guests. My girlfriend (Graciela) and I both enjoy meeting people from all over the world. We love to travel and therefore feel we relate well with people that visit us. *Please note: we do not have a permit to host short-term rentals (i.e. those that are less than 30 days)."
  )

  User.create(
    username: 'todd_sail',
    password: 'password',
    fname: 'Todd',
    bio: "Hi, Iʼm Todd! You will find this a friendly place to stay in San Francisco. Love to interact with all types of people from all nationalities. Presently a co-owner of Vasquez Coffee Company, a coffee roasting company in San Francisco. Online search Vasquez Coffee Company for more information. For Fun I am a USCG licensed Captain and a Padi Scuba Instructor. Online search Captain Todd Charters for more information. I have captained dive boats, live aboard sailing catamarans and taught scuba diving in the US Virgin Islands, British Virgin Islands and Monterey, California. May 2017 I was the Captain on a 46' 4 cabin 4 bath live a board catamaran for 8 of 300 graduating MBA's from MIT's Sloan School of Management in the British Virgin Islands. This was my 6th year being selected as a skipper for this trip. Love to practice Ashtanga Yoga. Handstand entries into some yoga positions are a fun part of my practice. Bicycling along San Francisco Bay 1 block from my house is also a pastime. Sailboat raced on San Francisco Bay through the San Francisco Yacht Club in Tiburon for 14 years. My specialty is the Foredeck (spinnaker) while racing sailboats."
  )

  User.create(
    username: 'rigo_30',
    password: 'password',
    fname: 'Rigo',
    bio: "Hi, Iʼm Rigo! My wife and I are in our mid 30's and are natives of San Francisco. Our 1 year old daughter keeps us on our toes at every moment but we love it! Don’t hesitate asking any questions you might have for us, we’re happy to help."
  )

  User.create(
    username: 'andycandy',
    password: 'password',
    fname: 'Michaele & Andy',
    bio: "Hi, Iʼm Michaele And Andy! We love traveling as much as we can but are always happy to return home to San Francisco. We feel like we struck gold when we discovered our neighborhood, Glen Park. It has the perfect combination of nature and convenience. We are excited to visit new places and to welcome new guests to our treasured city by the bay!"
  )

  User.create(
      username: 'lharvey',
      password: 'password',
      fname: 'Lori',
      bio: "Hi, I'm Lori!"
  )
  User.create(
      username: 'gabunion',
      password: 'password',
      fname: 'Gabriel',
      bio: "Hi, Iʼm Gabriel!I have owned and managed three Airbnb locations over the last few years. It’s an amazing pleasure to host people from all over the world. I hope to make your stay in my homes a magical one."
  )
  User.create(
      username: 'franny',
      password: 'password',
      fname: 'Fran',
      bio: "Hi, Iʼm Fran! I'm a Bay Area Serial Internet Entrepreneur, best known for Match Online Dating, TRUSTe, and now BabyQuip, baby equipment rental marketplace. I enjoy meeting new entrepreneurs and business people as well as tourists and work hard to be sure everyone has a positive experience in my home."
  )
  User.create(
      username: 'louis86',
      password: 'password',
      fname: 'Louis',
      bio: "Hi, Iʼm Louis! Thank you for looking at my property. I grew up in Southern California but fell in love with San Francisco and have lived here the past 10 years. I love to get out and explore and have stayed with Airbnb in Sydney, Margaret River, Melbourne, Paris, Portland, Guatemala City, Lake Atitlan, Antigua, El Paredon, Los Cabos, San Diego and Hawaii. I am passionate about surfing and spending time with my two little boys."
  )
  User.create(
      username: 'annieremi',
      password: 'password',
      fname: 'Annie',
      bio: "Hi, Iʼm Annie! I was born in San Francisco and am a fifth-generation native. I live in our Twin Peaks condo with my husband, Rémi, who moved to SF from Paris after university. He's an engineer who has worked at various startups and even started his own (8tracks), while I work in media. We love to travel and are excited to share our home with other travelers while we are out of town. We bought our condo in 2013, and have put a lot of our heart into it. We hope you enjoy it!"
  )
  User.create(
      username: 'ryanyogi',
      password: 'password',
      fname: 'Ryan',
      bio: "Hi, Iʼm Ryan! Photographer. Yogi. Travel addict."
  )
  User.create(
      username: 'nikkicks',
      password: 'password',
      fname: 'Nikki',
      bio: "Hi, I'm Nikki! Whether you are traveling to San Francisco for a night or two, or are coming for a month or more, I can help you find the perfect clean and stylishly furnished place to call home."
  )

  User.create(
      username: 'pepynpat',
      password: 'password',
      fname: 'Patricia',
      bio: "Hi, I'm Patricia! My husband and I are an international couple: I am a long time resident of San Francisco, Pepijn(my hubby) a Dutch expat who came to the city 5 years ago. Together we are looking forward to making your stay in the City By The Bay a most memorable one."
  )

  User.create(
      username: 'chrisbikes',
      password: 'password',
      fname: 'Chris',
      bio: "Hi, I'm Chris! Hi - Originally from East coast / New York and Boston areas, I have been living in my home here in San Francisco for 18 years. Having explored not just the Bay Area but most of California and the surrounding areas I can be a great resource for any travel needs. I am an active hiker and mountain bike and get out multiple times a week. I love adventure travel and recent trips include circumventing the Adriatic Sea by motorcycle and trekking to Mount Everest base camp in Nepal. My home is filled with things I have collected in my travels."
  )
  User.create(
      username: 'mvariem',
      password: 'password',
      fname: 'Meirav',
      bio: "Hi, I'm Meirav! I have lived in the Bay Area for the past 31 years and love it here. So much to do and see!! I work in Marketing and PR. To pay for college at UC Berkeley (20 years ago) I also become a professional tour guide in San Francisco."
  )


  User.create(
      username: 'helen2011',
      password: 'password',
      fname: 'Helen',
      bio: "Hi, I'm Helen! I am a Personal Assistant at a tech company."
  )


  User.create(
      username: 'ehoward',
      password: 'password',
      fname: 'Emma',
      bio: "Hi, I'm Emma! I am based out of San Francisco and work in market research my specialty is the pharmaceutical industry. Married and have 3 girls."
  )

  User.create(
      username: 'mcgreg',
      password: 'password',
      fname: 'Greg',
      bio: "Hi, I'm Greg! I'm a software engineer and manager, my wife is a designer and simple-living consultant. We are east coast natives but have lived in SF since 2000 and love the California way of life. To us, that's doing urban hikes around our gorgeous hilly city, eating farm-fresh food, crafting mezcal or whisky cocktails in the evening, listening to indie rock, meditating, and enjoying the company of our 1-year-old son."
  )

  User.create(
      username: 'johnny19',
      password: 'password',
      fname: 'John',
      bio: "Hi, I'm John! Now also renting directly from my own site: buttersuites."
  )

  User.create(
      username: 'tcarolyn',
      password: 'password',
      fname: 'Tim',
      bio: "Hi, We are rugged elegant Jen and Tim! passionate entrepreneurs, philanthropists, partners, and rebels with a cause."
  )

  User.create(
      username: 'jkim',
      password: 'password',
      fname: 'Julie',
      bio: "Hi, I'm Julie! We are an active family that enjoys skiing in Lake Tahoe in the winter and playing tennis & traveling in the summer. I am a native Californian and graduated from UCLA. I am currently working in Tech in downtown San Francisco."
  )

  User.create(
    username: 'sweldu',
    password: 'password',
    fname: 'Selam',
    bio: "Hi, I'm Selam! I am a software engineer with an insatiable curiosity to learn new technologies and apply capabilities to solve problems."
  )

  User.create(
    username: 'ssweldu',
    password: 'password',
    fname: 'Selam',
    bio: "Hi, I'm Selam! I am a software engineer with an insatiable curiosity to learn new technologies and apply capabilities to solve problems."
  )


# attaching user photos

  User.all.each_with_index do |user, idx|
    if idx < 9
      file = EzDownload.open("https://waterbnb-seed.s3-us-west-1.amazonaws.com/users/0#{idx+1}-user.jpg")
      user.photo.attach(io: file, filename: "0#{idx+1}-user.jpg")
      user.save! if user.photo.attached?
    else 
      file = EzDownload.open("https://waterbnb-seed.s3-us-west-1.amazonaws.com/users/0#{idx+1}-user.jpg")
      user.photo.attach(io: file, filename: "#{idx+1}-user.jpg")
      user.save! if user.photo.attached?
    end
  end



  # Spots

  num_users = User.all.length

  Spot.destroy_all

  Spot.create(
    title: "Downtown SF Studio Apartment Near Civic Center",
    description: "Explore the heart of San Francisco from this designer studio. Unwind in this boutique, open-concept space with carefully selected decor or gaze out across the city from the rooftop terrace with 360-degree views, a BBQ, and a seating area.",
    host_id: User.all[(0..num_users).to_a.sample].id,
    num_guests: 3,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: 'studio', 
    price: 150,
    location: "San Francisco, California, United States",
    loc_detail: "The building is located in the Civic Center area, in the middle of town, and is equal distance to all of the nightlife options and places of interest. Discover the city with close access to the water and the iconic Mission District.",
    lat: 37.7856652,
    lng: -122.4070889,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  )

  Spot.create(
    title: "Explore Valencia Street from a Room in a Serene Condo",
    description: "Relax in a beautiful, bright room in chic and calm condo in the vibrant Mission District, and explore local restaurant scene. Room has its own TV with Netflix and Hulu, and has an adjacent private bathroom just for guests. While the neighborhood is busy, the guest bedroom is not street facing and is quiet. Walk to Dolores Park, Castro, and Hayes Valley. Easy Uber or Bart ride from the airport! Please read useful info in the House Rules section below (scroll all the way down), including check-in information and parking details. A very sweet and quiet boston terrier (@petitepokey) lives here.",
    host_id: User.all[(0..num_users).to_a.sample].id,
    num_guests: 2,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "private bedroom",
    price: 150,
    location: "San Francisco, California, United States",
    loc_detail: "Condo is steps away from some of the most popular restaurants, shops, a supermarket, & public transportation (including BART). That said, SF is a small city best explored on foot! *Please* *read* parking/check-in info in the House Rules. Dog at home.",
    lat: 37.76016,
    lng: -122.41929,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  )

   Spot.create(
    title: "Amazing Location with Breathtaking Bay Views",
    description: "Enjoy 180° Bay views in the sunny living room at this hidden oasis in the heart of the city. Listen for foghorns, sea lions, and the clang of nearby cable cars. Sit at the sleek marble dining table and admire the eclectic art featured throughout.",
    host_id: User.all[(0..num_users).to_a.sample].id,
    num_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "whole apartment",
    price: 185,
    location: "San Francisco, California, United States",
    loc_detail: "Nestled in North Beach, this is the place to be. Voted one of the country's Top 10 neighborhoods, it's walkable to downtown, the Wharf, Union Square, Lombard, Chinatown, and more. You're close to lovely cafes, great bars and fantastic restaurants.",
    lat: 37.7982,
    lng: -122.41183,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Contemporary Apartment in Potrero Hill",
    description: "Enjoy stunning views of the city at this renovated hilltop hideaway in one of San Francisco's sunniest neighborhoods. Marvel at the view while washing dishes in the fully equipped kitchen or while kicking back with coffee on the sunny balcony.",
    host_id: User.all[(0..num_users).to_a.sample].id,
    num_guests: 3,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 3,
    listing_type: "whole apartment",
    price: 225,
    location: "San Francisco, California, United States",
    loc_detail: "Experience authentic San Francisco in Potrero Hill. Enjoy both old and new by taking a walk down cobblestone paths that date before the 1906 quake, leading to some of the city's most vibrant restaurants and shops.",
    lat: 37.75308,
    lng: -122.40149,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Stretch out in This Modern San Francisco Loft",
    description: "Relax in this authentic and thoughtfully decorated loft. The vibrant, open living room boasts 16-foot ceilings and sprawling windows letting in natural light. Admire original artwork, high end furniture and luxuries like a smart TV, and full kitchen.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "whole apartment",
    price: 205,
    location: "San Francisco, California, United States",
    loc_detail: "The loft is located within walking distance to downtown and the Moscone center—SOMA has a walk score of 97! There are plenty of great bars and award winning restaurants within walking distance, as well as transport to all parts of the city.",
    lat: 37.77687,
    lng: -122.40916,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Fourth of July Penthouse with Views near Fisherman's Wharf",
    description: "Enjoy close-up views of iconic landmarks from all living areas or have a family BBQ on the deck and admire the Golden Gate Bridge from there. On a chilly evening, gather everyone indoors for a warm meal and a movie.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 2,
    num_beds: 3,
    num_baths: 3,
    listing_type: "whole house",
    price: 799,
    location: "San Francisco, California, United States",
    loc_detail: "The house is located in North Beach/Telegraph Hill. It is perfectly centered between Pier 39, Fisherman's Wharf and North Beach (the Italian District). It's walking distance to Chinatown, Union Square, and the Financial District. Coit Tower is a few block away. Giants games, Boutique shopping, and world-class museums are just a short Uber ride away. And, if you just want to spend a day at home, relaxing, you'll find the top floor to be peaceful and calm high above the hustle and bustle of SF.",
    lat: 37.80264,
    lng: -122.41046,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Indulge in a Designer Victorian in Pacific Heights",
    description: "Unwind in contemporary luxury in this spectacular 1900s Victorian home. The space offers the utmost privacy and instills a sense of peace and belonging with the large backyard, bright and modern kitchen, patio walkout, and designer furnishings.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 4,
    num_baths: 3,
    listing_type: "whole house",
    price: 800,
    location: "San Francisco, California, United States",
    loc_detail: "Regal mansions and prestigious buildings are the essence of Pacific Heights. This prim and proper neighborhood epitomizes old-world elegance. The quiet streets are mostly enlivened with passers-by appreciating its jaw-dropping architectural grandeur.",
    lat: 37.789,
    lng: -122.43939,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Stunning Family-Friendly House with Views in Noe Valley",
    description: "Wake up in a bright bedroom and admire a postcard view of hillside houses from the window. This colorful, art-filled home is made for entertaining. Cook in a chef's kitchen, serve dinner at a formal table, and gather on orange cushions by a fire pit.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 8,
    num_bedrooms: 3,
    num_beds: 4,
    num_baths: 3,
    listing_type: "whole house",
    price: 945,
    location: "San Francisco, California, United States",
    loc_detail: "Noe Valley is quaint and perfectly situated. Everything needed can be found within five blocks—from Whole Foods and upscale dining to neighborhood boutiques, cafes, and three MUNI lines. The 280 and 101 freeways are easily accessible.",
    lat: 37.75016,
    lng: -122.43815,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Revitalized Edwardian Residence with Rooftop Patio",
    description: "Find relics from the past in this update historical home. The space boasts original design features, wood finishes, a tasteful blend of different furnishings and decor, and a private backyard with an outdoor dining area.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 4,
    num_baths: 2,
    listing_type: "whole house",
    price: 1000,
    location: "San Francisco, California, United States",
    loc_detail: "This tree-lined neighborhood is sandwiched between Lake Street, Mountain Lake Park, and the Presidio on one side and the shops and cafes of California and Clement Streets on the other. It is on the North side of town close to the Golden Gate Bridge.",
    lat: 37.78457,
    lng: -122.46945,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 

  Spot.create(
    title: "Stylish Home with Fireplace and Deck near Golden Gate Park",
    description: "Discover a quiet oasis right in the middle of the city. Filled with light and charm with all the comforts for every family member, young and old. Prepare meals in a home-style kitchen and dine at a formal table. Relax by the outdoor fire pit while looking out at the San Francisco skyline.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 7,
    num_bedrooms: 3,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire house",
    price: 407,
    location: "San Francisco, California, United States",
    loc_detail: "The house is in the Lone Mountain neighborhood, next to University of San Francisco and a few blocks from Golden Gate Park, with its gorgeous trails and the De Young Museum. Walk to the Divisadero Corridor to discover new hot restaurants.",
    lat: 37.77858,
    lng: -122.4492,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Retreat in a Roomy Apartment in Mission Dolores / Castro",
    description: "Stay in the vibrant heart of SF in a chic apt favored by airbnb employees! Steps from Dolores Park, Michelin star restaurants, and hip bars, this exceptionally-designed oasis is a walker's and foodie's paradise, unmatched in comfort and style.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 8,
    num_bedrooms: 4,
    num_beds: 5,
    num_baths: 3,
    listing_type: "whole house",
    price: 799,
    location: "San Francisco, California, United States",
    loc_detail: "Spectacular location in SF’s hottest neighborhood - walk to shops, bars and world-class eateries, with Dolores Park's warm breezes a block away. Also steps from 6 public transportation lines with direct access to Union Square, MOMA+ Golden Gate Park.",
    lat: 37.76166,
    lng: -122.42943,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Near Moscone Center, Privacy with Style - the SoMa Loft",
    description: "SoMa Second Home - the SoMa Loft - is a private, airy and bright SoMa loft style apartment. Unwind amongst the globally inspired decor, while the sun streams in through the giant windows, or head into the shared courtyard for a nap in the sun.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 2,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "whole apartment",
    price: 269,
    location: "San Francisco, California, United States",
    loc_detail: "South of Market is one of the most diversified neighborhoods in San Francisco, close to everywhere. Walking distance to Moscone Center, MoMa, AT&T Park and Union Square. Whole Foods is only a block away. SoMa Second Home is surrounded by cafes, restaurants, breweries, clubs and shops.",
    lat: 37.77945,
    lng: -122.40382,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Industrial-Chic Loft with Private Roof Deck and City Views",
    description: "Gaze over a sprawling city from this cool urban loft characterized by steel fittings and polished, heated, concrete floors. The expansive roof deck is a spectacular spot. The third bedroom is a convertible bedroom that converts the living room into its own private space with sofa. Metal and glass doors in the 3rd bedroom picture can be moved to enclose the sofa nook. This qualifies as a hosted stay which means the host can be available when needed but otherwise guests will enjoy full privacy",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 3,
    num_bedrooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "whole apartment",
    price: 407,
    location: "San Francisco, California, United States",
    loc_detail: "Known as the land of startups and famed for its bounty of new restaurants and bars, SoMa is a lively neighborhood defined by its warehouses and waterfront position. Explore on foot or take a short taxi ride to the city's other highlights. Please note that the first 2 guests are included in the price, but extra guests beyond 2 increase the pricing by 50 per guest per night. This really helps us with extra cleaning and laundry and especially rent (SF is a nightmare).",
    lat: 37.77461,
    lng: -122.41034,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  

  
  Spot.create(
    title: "Elegant and Eclectic Townhouse with Victorian Charm",
    description: "Select a classic novel from a shelf and curl up on a traditional sofa to read next to a sunny window. This spacious house has retained much of its Victorian charm and architectural details. A vintage gas stove and clawfoot tub add to the ambience.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 8,
    num_bedrooms: 4,
    num_beds: 4,
    num_baths: 1,
    listing_type: "entire house",
    price: 430,
    location: "San Francisco, California, United States",
    loc_detail: "The house is in the Mission District, known for its great restaurants and coffee shops. It is in the heart of San Francisco, and is easily accessible to other neighborhoods. The area is famous for its mural art painted on many of the buildings.",
    lat: 37.75466,
    lng: -122.41197,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Walk to Golden Gate Park from a Radiant",
    description: "Breakfast at a bright nook table in the eat-in kitchen, step through the adjacent door for coffee on a sunny deck patio overlooking the garden, or sit down for a meal in the formal dining room. With its stately design elements, classic fittings, contemporary style, and traditional hardwood furnishings, this gorgeous Victorian home is a domain of reserved elegance.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 3,
    num_baths: 2.5,
    listing_type: "entire house",
    price: 450,
    location: "San Francisco, California, United States",
    loc_detail: "The house is in a beautiful area within a 5-minute walk from the Haight-Ashbury, Cole Valley, and Inner Sunset neighborhoods, offering a variety of restaurants, cafes, and shopping. Golden Gate Park is steps away, making for short walks to the Academy of Sciences, DeYoung Museum, Children's Park, and Botanical Gardens. The light rail stops a half block away in front of UCSF Hospital, for an easy trip downtown and points beyond.",
    lat: 37.765,
    lng: -122.458,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Iconic Victorian Architecture with City Views",
    description: "Relish staying in this Victorian San Francisco treasure. Classic architectural details have been carefully preserved and are evident at every turn. Fix a gourmet meal in the modern kitchen and spend the evening admiring the city from the balcony.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 3,
    num_baths: 3,
    listing_type: "entire house",
    price: 475,
    location: "San Francisco, California, United States",
    loc_detail: "Walk the streets of Noe Valley, a family-friendly area with shops, cafes, and restaurants for all tastes. Travel to many city areas easily by public transport, or rent a car and have a day out of the city enjoying nature, small towns, and wine.",
    lat: 37.74097,
    lng: -122.42896,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Luxury Balinese Oasis House with Garden Hot Tub",
    description: "Soak in the alfresco hot tub in the lush, secluded garden of this Balinese-influenced, resort-like retreat. Bali Hai Castro's stylish Asian Buddhist decor lends a zen ambiance to the sleek, modern luxury fittings. The plush patio hosts a fire table.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 2,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire house",
    price: 695,
    location: "San Francisco, California, United States",
    loc_detail: "Bali Hai Castro is a short walk from the Castro District’s restaurants, cafes, bars, supermarkets, and MUNI transit station. It is also convenient for Corona Heights Park’s tennis and basketball courts, plus a hiking trail with stunning city views.",
    lat: 37.76379,
    lng: -122.43972,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Modern Minimalist Condo with Great City Views",
    description: "Relax by the cozy fireplace of this bright, top-floor condo. The apartment is centrally located and offers up sweeping views of San Francisco from the spacious and bright living room. Enjoy easy access to public transport or walk to Noe Valley.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 5,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "condo",
    price: 500,
    location: "San Francisco, California, United States",
    loc_detail: "The building is located next to the landmark of Twin Peaks in the geographical center of San Francisco in what feels like a private perch above the city. However, the area’s conveniently located near Noe Valley and Castro with easy access downtown.",
    lat: 37.75259,
    lng: 122.44498,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Sunny Upper Floor Flat in an Authentic Neighborhood",
    description: "Grab a magazine from a rack and kick back old-style on a comfy couch or in a sunny bay window. Vibrant art, colorful furnishings, and cool accents give rooms a cheerful vibe. Jam with bongos and a ukulele beside an ornamental brick fireplace.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 9,
    num_bedrooms: 4,
    num_beds: 4,
    num_baths: 2,
    listing_type: "full apartment",
    price: 486,
    location: "San Francisco, California, United States",
    loc_detail: "The house is in the walkable Portola neighborhood, south of Bernal Heights. It's a family-friendly and ethnically diverse working-class area. Walk to restaurants, a brewery, a playground, tennis and basketball courts, and a grocery store.",
    lat: 37.729,
    lng: -122.408,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Unique, Modern Apartment with Contempora",
    description: "Wake up refreshed in this spacious bright full-floor apartment in an iconic Victorian corner building. Kick back in a renovated designer boutique-style space filled with mid-century and contemporary furniture and an eclectic modern art collection.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 5,
    num_bedrooms: 3,
    num_beds: 3,
    num_baths: 2,
    listing_type: "full apartment",
    price: 580,
    location: "San Francisco, California, United States",
    loc_detail: "Nopa is a centrally located, vibrant residential neighborhood, an area of tree-lined streets between Alamo Square and Golden Gate Park, intersected by a lively boulevard lined with unique storefronts, cafes & some of San Francisco’s best restaurants.",
    lat: 37.77895,
    lng: -122.43634,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Gorgeous Serenity in the City with Views near Haight Ashbury",
    description: "Settle into this amazing, light filled, stunning old San Francisco home with incredible south facing city and park views! Relax in the open space of a large great room. Filled with character, this renovated Victorian has 112 years of history to tell",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire house",
    price: 675,
    location: "San Francisco, California, United States",
    loc_detail: "In the heart of the city near incredible Golden Gate Park, the apartment is within walking distance of NOPA, Haight Ashbury, The DeYoung museum, Academy of Sciences, Conservatory of Flowers, Stow Lake, plus many great restaurants and shops",
    lat: 37.77306,
    lng: -122.45278,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Charming Victorian in Lower Haight",
    description: "Defined by the exuberant decor and eclectic furnishings within its vibrant rooms, this elegant Victorian bears a warmth and enchantment that inspires at every turn. Fix breakfast amid the kitchen's knotty-wood cabinetry to enjoy in the bay window booth.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 7,
    num_bedrooms: 4,
    num_beds: 4,
    num_baths: 2,
    listing_type: "entire house",
    price: 550,
    location: "San Francisco, California, United States",
    loc_detail: "Lower Haight is a historic corridor that borders the iconic Castro, Haight-Ashbury, and Mission neighborhoods at the cultural core of the city. Charming restaurants, lively bars, and delightful boutiques, as well as 5 green spaces are all steps away.",
    lat: 37.77337,
    lng: -122.43529,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Classic Architecture with Modern Design in City Center",
    description: "Classic Victorian architecture coupled with a modern eclectic interior create a feeling of warm minimalism. Indoor plants, antiques, and light fill the space. Relax on the spacious outdoor deck with grill surrounded by beautiful gardens.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 4,
    num_bedrooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "full apartment",
    price: 425,
    location: "San Francisco, California, United States",
    loc_detail: "Centrally located and surrounded by parks, public transport, and fantastic bars and restaurants. Downtown is easily accessible via the metro rail line just blocks away. Iconic Haight-Ashbury, Golden Gate Park, and world-class museums are all nearby.",
    lat: 37.76719,
    lng: -122.44824,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Potrero Paradise with Stunning Views and",
    description: "Wake up to iconic skyline views from a bedroom balcony. Brew coffee in the chef's kitchen and relax in the charming front garden. After a dip in the hot tub, read a book in a living room amid stunning decor and timeless furnishings. This spacious three-story, three bedroom home (plus Sitting Room that can be made up to a fourth bedroom) and its five patios and balconies feature stunning views of Twin Peaks, Downtown, and Bay Bridge. The house is set away from the street with a gracious front patio/garden and is very quiet.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 8,
    num_bedrooms: 3,
    num_beds: 3,
    num_baths: 3,
    listing_type: "entire house",
    price: 650,
    location: "San Francisco, California, United States",
    loc_detail: "The house is set away from the street near the top of Potrero Hill, a quiet and walkable neighborhood known for its sunny weather, charming eateries, hip bars, quaint boutiques. Visit the nearby Museum of Craft and Design, or head to the neighboring Mission District. The home is also convenient to Moscone Convention Center, SoMa, and ATT Park. Parking is plentiful outside the home and no permit is required.",
    lat: 37.761,
    lng: -122.404,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Sunny, Modern House with Great Views",
    description: "Cook a delicious dinner in the bright and spacious kitchen, then serve up to eight guests in the elegant, simple dining room with floor-to-ceiling windows. This sunny, modern Edwardian atop Potrero Hill is thoughtfully minimalist with amazing views.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 4,
    num_baths: 2,
    listing_type: "full apartment",
    price: 599,
    location: "San Francisco, California, United States",
    loc_detail: "Potrero Hill has some of the best views in the city. It is full of hidden gems: parks, views, eateries, history, and shopping. Nearby are the vibrant and fun SoMa and Mission neighborhoods.",
    lat: 37.76134,
    lng: -122.40268,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Superb Location Sunny Trails/Views Minutes from SF",
    description: "Gorgeous 3700 Square Foot home in the Oakland Hills. 20min ride to downtown San Francisco and 6min drive to Rockridge Bart station. Located on Joaquin Miller Road right across the street from two regional parks, Redwood Regional and Joaquin Miller park with ample trails, creeks and views of the Bay and San Francisco for those who also enjoy the outdoors.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 12,
    num_bedrooms: 4,
    num_beds: 6,
    num_baths: 3.5,
    listing_type: "entire house",
    price: 695,
    location: "San Francisco, California, United States",
    loc_detail: "Located on Joaquin Miller Road, the property sits right across the street from two regional parks: Redwood Regional and Joaquin Miller park, home to ample trails, creeks, and views of the Bay. It's a 15-minute ride to downtown San Francisco.",
    lat: 37.80732,
    lng: -122.18232,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
  Spot.create(
    title: "Hilltop Retreat with Panoramic Cityscape Vistas",
    description: "Indulge in comfort and style at this tranquil suburban home. The renovated residence features chic furnishings and decor, an open-plan main floor, soothing grays, unique artwork throughout, and a private deck.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 11,
    num_bedrooms: 4,
    num_beds: 6,
    num_baths: 2,
    listing_type: "entire house",
    price: 695,
    location: "San Francisco, California, United States",
    loc_detail: "The property is tucked away on a quiet hilltop corner lot in a coveted neighborhood. It is located just a short drive away from downtown SF and SFO airport, with easy access to freeways and the restaurants of Market Street.",
    lat: 37.70574,
    lng: -122.42811,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  ) 
  
   Spot.create(
    title: "Indulge in a Designer Victorian in Pacific Heights",
    description: "Unwind in contemporary luxury in this spectacular 1900s Victorian home. The space offers the utmost privacy and instills a sense of peace and belonging with the large backyard, bright and modern kitchen, patio walkout, and designer furnishings.",
    host_id: User.all[(0..num_users).to_a.sample].id,  
    num_guests: 6,
    num_bedrooms: 3,
    num_beds: 4,
    num_baths: 3,
    listing_type: "entire house",
    price: 800,
    location: "San Francisco, California, United States",
    loc_detail: "Regal mansions and prestigious buildings are the essence of Pacific Heights. This prim and proper neighborhood epitomizes old-world elegance. The quiet streets are mostly enlivened with passers-by appreciating its jaw-dropping architectural grandeur.",
    lat: 37.789,
    lng: -122.43939,
    wifi: true,
    washer: true,
    tv: true,
    elevator: true,
    parking: true,
    kitchen: true
  )



  # attach photos to spots

  Spot.all.each_with_index do |spot,idx|
    (1..8).each do |pic_idx|

      if idx < 9
        file = EzDownload.open("https://waterbnb-seed.s3-us-west-1.amazonaws.com/spots/SF/0#{idx+1}-SF/0#{idx+1}-0#{pic_idx}-SF.jpg")
        spot.photos.attach(io: file, filename: "0#{idx+1}-0#{pic_idx}-SF.jpg")
      else
        file = EzDownload.open("https://waterbnb-seed.s3-us-west-1.amazonaws.com/spots/SF/#{idx+1}-SF/#{idx+1}-0#{pic_idx}-SF.jpg")
        spot.photos.attach(io: file, filename: "#{idx+1}-0#{pic_idx}-SF.jpg")
      end
      spot.save! 
    end
  end



  num_spots = Spot.all.length

Booking.destroy_all

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190718,
    check_out: 20190720,
    spot_id: Spot.all.to_a.sample.id,
    num_guest: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190721,
    check_out: 20190722,
    spot_id: Spot.all.to_a.sample.id,
    num_guest: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190801,
    check_out: 20190806,
    spot_id: Spot.all.to_a.sample.id,
    num_guest: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190723,
    check_out: 20190725,
    spot_id: Spot.all.to_a.sample.id,
    num_guest: rand(1..4)
)

Booking.create(
    guest_id: User.all.to_a.sample.id,
    check_in: 20190729,
    check_out: 20190730,
    spot_id: Spot.all.to_a.sample.id,
    num_guest: rand(1..4)
)





end



  