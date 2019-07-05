# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
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
      username: 'helen2011'
      password: 'password',
      fname: 'Helen',
      bio: "Hi, I'm Helen! I am a Personal Assistant at a tech company."
  )


  User.create(
      username: 'ehoward'
      password: 'password',
      fname: 'Emma',
      bio: "Hi, I'm Emma! I am based out of San Francisco and work in market research my specialty is the pharmaceutical industry. Married and have 3 girls."
  )

  User.create(
      username: 'mcgreg'
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
    bio: ''
  )

  User.create(
    username: 'sweldu',
    password: 'password',
    fname: 'Selam',
    bio: '',
  )



  