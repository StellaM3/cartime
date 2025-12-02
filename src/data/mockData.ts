export type Model = {
  id: string
  name: string
  year: number
  heroImage: string
  gallery: string[]
  technical: string
  history: string
  anecdotes: string[]
}

export type Brand = {
  id: string
  name: string
  country: string
  regionLabel: string
  location: {
    lat: number
    lng: number
  }
  logo: string
  description: string
  timelineStart: number
  timelineEnd: number
  models: Model[]
}

export const brands: Brand[] = [
  {
    id: 'bmw',
    name: 'BMW',
    country: 'Germany',
    regionLabel: 'Munich, Germany',
    location: { lat: 48.1351, lng: 11.582 },
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
    description: 'Precision engineering and sporty luxury from Bavaria.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [
      {
        id: 'bmw-507',
        name: 'BMW 507',
        year: 1956,
        heroImage:
          'https://cdn.motor1.com/images/mgl/P3Gkq4/s1/1958-bmw-507-series-ii-for-sale.jpg',
        gallery: [
          'https://cdn.motor1.com/images/mgl/P3Gkq4/s1/1958-bmw-507-series-ii-for-sale.jpg',
          'https://upload.wikimedia.org/wikipedia/commons/3/35/BMW_507.jpg',
          'https://cdn.bmwblog.com/wp-content/uploads/2020/11/1-of-few-1957-bmw-507-series-ii-could-be-someones-a-bargain-at-525k_6.jpg',
        ],
        technical:
          'The BMW 507 is a two-seat roadster produced from 1956 to 1959. It is powered by a 3.2-liter all-aluminum V8 engine producing around 150 hp, paired with a 4-speed manual gearbox. The car features a lightweight aluminum body, double wishbone front suspension, and a rigid rear axle. Its design focused on elegance and grand-touring comfort rather than pure performance, though it was capable of reaching approximately 200 km/h.',
        history:
          'Originally intended to be exported to the United States as a rival to Mercedes-Benz\'s 300SL, the BMW 507 was developed under the influence of American importer Max Hoffman. However, production costs were extremely high, leading to a much higher selling price than anticipated. Only 252 units were built, making it one of the rarest BMWs ever produced. Despite poor commercial success, the 507 later gained iconic status for its timeless design.',
        anecdotes: [
          'Elvis Presley famously owned a BMW 507 during his military service in Germany. His car was originally white but repeatedly received lipstick marks from fans, prompting him to have it repainted red. Many 507s have unique histories due to their low production numbers, including custom configurations for celebrities. Today, surviving examples regularly sell for millions at auctions.',
        ],
      },
      {
        id: 'bmw-m1',
        name: 'BMW M1',
        year: 1978,
        heroImage:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/BMW-M1-BMW-Museum.jpg/1200px-BMW-M1-BMW-Museum.jpg',
        gallery: [
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/BMW-M1-BMW-Museum.jpg/1200px-BMW-M1-BMW-Museum.jpg',
          'https://4h10.com/wp-content/uploads/2024/01/1-3.jpg',
          'https://bmw-m1-club.com/wp-content/uploads/2021/02/bmw-m1-club-deutschland-ev-03-06_0007.jpg',
        ],
        technical:
          'The BMW M1 is a mid-engine sports car produced from 1978 to 1981. It is powered by a 3.5-liter inline-six engine (the M88/1) producing 273 hp in the road version, paired with a 5-speed ZF manual gearbox. The M1 features a tubular steel spaceframe chassis, fiberglass body panels, double wishbone suspension on all four corners, and rear-wheel drive. Its layout and engineering were designed to provide exceptional handling balance and racing-level performance — a major departure from BMW\'s usual front-engine lineup at the time.',
        history:
          'The M1 was initially developed in collaboration with Lamborghini for Group 4 and Group 5 racing homologation, but financial issues forced BMW to take over production. Ultimately, only 456 units were built, making it one of the rarest BMW road cars ever made. The car later became the basis for the Procar Championship, a one-make series where Formula 1 drivers competed using specially tuned M1 race cars. Although its racing career was limited, the M1 established BMW Motorsport\'s identity and paved the way for the future M lineup.',
        anecdotes: [
          'The BMW M1 is the only BMW ever produced with a mid-engine layout for road use, giving it a cult status among enthusiasts. The Procar Championship turned it into a motorsport icon, with famous drivers like Niki Lauda and Nelson Piquet racing identical M1s. The car\'s design by Giorgetto Giugiaro became legendary, and the M1 was later honored by BMW in 2008 with the "M1 Hommage" concept car, reflecting its lasting influence on the brand.',
        ],
      },
      {
        id: 'bmw-m3-e30',
        name: 'BMW M3 E30',
        year: 1986,
        heroImage:
          'https://cdn.motor1.com/images/mgl/G3yeBV/s1/bmw-m3-e30-statica.webp',
        gallery: [
          'https://cdn.motor1.com/images/mgl/G3yeBV/s1/bmw-m3-e30-statica.webp',
          'https://am-s3-bucket-assets.s3.eu-west-2.amazonaws.com/silverstone/prod/lot_images/large/rec12552-1/rec12552-1_5.jpg.webp?dummy=1764308159',
          'https://images.squarespace-cdn.com/content/v1/6598c8e83ff0af0197ff19f9/547c6b4f-8296-47c1-947b-a1975cd36017/e30+m3.jpg',
        ],
        technical:
          'The BMW M3 E30 (1986–1991) is powered by the S14 2.3-liter four-cylinder engine with outputs ranging from 192 to over 215 hp depending on the version. It features a highly revised chassis compared to the standard 3 Series, with wider tracks, improved suspension geometry, stronger brakes, and lightweight body panels. Its iconic box-flared fenders and aerodynamic improvements were designed specifically for motorsport homologation.',
        history:
          'The E30 M3 was created to comply with Group A touring car regulations. BMW was required to produce at least 5,000 road cars, resulting in a high-performance street model that became a legend. The M3 dominated racing series worldwide, including the DTM and the World Touring Car Championship. It remains one of BMW\'s most celebrated models and is often considered the purest M3 ever made.',
        anecdotes: [
          'The E30 M3 is one of the most successful touring cars in history, winning more races than any other M model. Its S14 engine is famously derived from BMW\'s Formula 1 program. Enthusiasts often note that the car\'s rear window angle is different from the regular E30 — one of many details changed purely for aerodynamic reasons.',
        ],
      },
      {
        id: 'bmw-m5-e28',
        name: 'BMW M5 E28',
        year: 1985,
        heroImage:
          'https://maessencsc.com/wp-content/uploads/2024/08/bmw-m5-e28-1986.jpg',
        gallery: [
          'https://maessencsc.com/wp-content/uploads/2024/08/bmw-m5-e28-1986.jpg',
          'https://am-s3-bucket-assets.s3.eu-west-2.amazonaws.com/silverstone/prod/lot_images/xlarge/REC13308-1/REC13308-1_1.jpg.webp',
          'https://cdn.dealeraccelerate.com/studio/1/51/5340/x/1988-bmw-m5',
        ],
        technical:
          'The BMW M5 E28, introduced in 1984, is widely considered the first true "super sedan." It is powered by the M88/3 3.5-liter inline-six engine producing 286 hp, derived from the legendary BMW M1. Paired with a 5-speed manual transmission and rear-wheel drive, the E28 M5 reached 0–100 km/h in about 6.5 seconds, making it one of the fastest sedans of its time.',
        history:
          'The E28 M5 was hand-built by BMW Motorsport, with early versions assembled in Munich. Production was limited, with approximately 2,200 units made worldwide. The model established the identity of the M5 lineup: discreet styling combined with high-performance engineering. It set the foundation for future generations of performance luxury sedans.',
        anecdotes: [
          'Many enthusiasts refer to the E28 M5 as the "wolf in sheep\'s clothing" because it looked almost identical to a regular 5 Series. In North America, only black-on-black units were sold initially, making those cars particularly collectible. Because they were partially hand-assembled, no two cars were exactly the same.',
        ],
      },
      {
        id: 'bmw-i8',
        name: 'BMW i8',
        year: 2014,
        heroImage:
          'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im0anhH7hIzU/v0/1200x800.jpg',
        gallery: [
          'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/im0anhH7hIzU/v0/1200x800.jpg',
          'https://www.mechanicsinmotion.fr/wp-content/uploads/2015/11/bmw-i8.jpg',
          'https://www.carbodydesign.com/media/2013/09/02-BMW-i8-Interior-02.jpg',
        ],
        technical:
          'Launched in 2014, the BMW i8 is a plug-in hybrid sports car featuring a 1.5-liter turbocharged three-cylinder engine combined with an electric motor. Together, they produce a total output of around 362 hp (later 374 hp). The i8 uses a carbon-fiber reinforced plastic (CFRP) passenger cell and an aluminum chassis, giving it a lightweight structure. It offers all-wheel drive thanks to the electric motor powering the front wheels and the combustion engine driving the rear.',
        history:
          'The BMW i8 debuted as part of BMW\'s "Project i" initiative to develop advanced hybrid and electric vehicles. It was first shown as a concept in 2011 and entered production in 2014. It remained in production until 2020. The i8 stood out for its futuristic design, scissor doors, and efficient yet sporty performance. It helped establish BMW as a leader in hybrid sports cars.',
        anecdotes: [
          'The i8 was used as the official safety car in Formula E during its early seasons. Its unique engine configuration — a 3-cylinder powering a supercar — surprised many but became a technological showcase. Despite its performance, the i8 was designed more for innovation than track usage, which gives it a special place in BMW\'s lineup.',
        ],
      },
      {
        id: 'bmw-m4-csl',
        name: 'BMW M4 CSL',
        year: 2022,
        heroImage:
          'https://images.caradisiac.com/logos/1/7/5/2/271752/S0-bmw-devoile-la-m4-csl-196240.jpg',
        gallery: [
          'https://images.caradisiac.com/logos/1/7/5/2/271752/S0-bmw-devoile-la-m4-csl-196240.jpg',
          'https://ai.dimaster.io/assets/cache/1920/x/media/Artikel/220520%20BMW%20M4%20CSL/2022%20BMW%20M4%20CSL%2014.jpg',
          'https://cdn-s-www.vosgesmatin.fr/images/68C8240C-3D0A-425C-8BAC-57FE6194CBB9/NW_raw/deux-rangements-pour-casque-a-l-arriere-console-centrale-entierement-en-cfrp-garniture-de-toit-de-couleur-anthracite-volant-en-alcantara-m-baguettes-de-garniture-interieure-en-fibre-de-carbone-badge-quot-csl-quot-sur-les-sieges-la-console-centrale-et-le-panneau-arriere-affichages-et-contre-elements-specifiques-m-1653033566.jpg',
        ],
        technical:
          'Released in 2022, the BMW M4 CSL is an ultra-performance version of the G82 M4. It is powered by a 3.0-liter twin-turbo inline-six (S58) producing 543 hp. The weight is reduced by approximately 100 kg compared to the M4 Competition thanks to carbon-fiber seats, a lighter exhaust, and reduced sound insulation. It features a track-focused suspension setup, increased boost pressure, and unique aerodynamics.',
        history:
          'The M4 CSL continues BMW\'s CSL ("Coupe Sport Leichtbau" — lightweight sports coupe) tradition following the legendary 1973 3.0 CSL and the 2003 E46 M3 CSL. Production is extremely limited, with only 1,000 units worldwide. It represents the most hardcore version of the modern M4, focusing on track performance while remaining street-legal.',
        anecdotes: [
          'The M4 CSL holds one of the fastest Nürburgring lap times for a BMW road car, completing the circuit in 7:20.2. Its taillights use laser technology, making them visually distinct from any other BMW model. The car was sold out quickly despite its high price, becoming an instant collectible.',
        ],
      },
    ],
  },
  {
    id: 'toyota',
    name: 'Toyota',
    country: 'Japan',
    regionLabel: 'Toyota City, Japan',
    location: { lat: 35.0829, lng: 137.1569 },
    logo: 'https://logo.clearbit.com/toyota-global.com',
    description: 'Accessible innovation and legendary reliability.',
    timelineStart: 1965,
    timelineEnd: 2025,
    models: [
      {
        id: 'toyota-2000gt',
        name: 'Toyota 2000GT',
        year: 1967,
        heroImage:
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '2.0L inline-six, 150 hp, lightweight aluminium body co-developed with Yamaha.',
        history:
          'Often considered the first Japanese supercar, revealed to the world through the James Bond film “You Only Live Twice”.',
        anecdotes: [
          'Only 351 units were produced.',
          'Two targa-top examples were built specifically for Hollywood.',
        ],
      },
      {
        id: 'toyota-supra-a80',
        name: 'Toyota Supra A80',
        year: 1993,
        heroImage:
          'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1441148345475-03a2e82f9719?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '3.0L 2JZ-GTE twin-turbo, 330 hp (stock), 6-speed Getrag V160 manual gearbox.',
        history:
          'A JDM icon, popularized by drifting, tuning culture and the Fast & Furious franchise.',
        anecdotes: [
          'The 2JZ can handle more than 1000 hp with heavy-duty tuning.',
          'Sold in Europe as a twin-turbo model rated at 326 hp.',
        ],
      },
    ],
  },
  {
    id: 'ferrari',
    name: 'Ferrari',
    country: 'Italy',
    regionLabel: 'Maranello, Italy',
    location: { lat: 44.5361, lng: 10.8642 },
    logo: 'https://logo.clearbit.com/ferrari.com',
    description: 'Italian passion and extreme performance.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [
      {
        id: 'ferrari-250-gto',
        name: 'Ferrari 250 GTO',
        year: 1962,
        heroImage:
          'https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '3.0L Colombo V12, 300 hp, 5-speed gearbox, ultra-light Scaglietti bodywork.',
        history:
          'A GT racing icon, victorious at the Tour de France Automobile and other major events.',
        anecdotes: [
          'Only 36 authenticated examples exist.',
          'Has held world records at auction for a collector car.',
        ],
      },
      {
        id: 'ferrari-sf90',
        name: 'Ferrari SF90 Stradale',
        year: 2019,
        heroImage:
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
        gallery: [
          'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
          'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
        ],
        technical:
          '4.0L twin-turbo V8 plus three electric motors, 1000 hp combined, advanced torque vectoring.',
        history:
          'The first plug-in hybrid supercar from Ferrari produced in significant numbers.',
        anecdotes: [
          'eDrive mode offers up to 25 km of fully electric driving.',
          'Its name celebrates 90 years of the Scuderia Ferrari.',
        ],
      },
    ],
  },
  {
    id: 'ford',
    name: 'Ford',
    country: 'USA',
    regionLabel: 'Dearborn, USA',
    location: { lat: 42.3223, lng: -83.1763 },
    logo: 'https://logo.clearbit.com/ford.com',
    description: 'Everyday usability and blue-collar performance icons.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'chevrolet',
    name: 'Chevrolet',
    country: 'USA',
    regionLabel: 'Detroit, USA',
    location: { lat: 42.3314, lng: -83.0458 },
    logo: 'https://logo.clearbit.com/chevrolet.com',
    description: 'American muscle, trucks and attainable sports cars.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'porsche',
    name: 'Porsche',
    country: 'Germany',
    regionLabel: 'Stuttgart, Germany',
    location: { lat: 48.7758, lng: 9.1829 },
    logo: 'https://logo.clearbit.com/porsche.com',
    description: 'Rear-engined legends and precision-engineered sports cars.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    country: 'Germany',
    regionLabel: 'Stuttgart, Germany',
    location: { lat: 48.7758, lng: 9.1829 },
    logo: 'https://logo.clearbit.com/mercedes-benz.com',
    description: 'Luxury comfort blended with cutting-edge technology.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'nissan',
    name: 'Nissan',
    country: 'Japan',
    regionLabel: 'Yokohama, Japan',
    location: { lat: 35.4437, lng: 139.638 },
    logo: 'https://logo.clearbit.com/nissan-global.com',
    description: 'From GT-R icons to practical electrified city cars.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'opel',
    name: 'Opel',
    country: 'Germany',
    regionLabel: 'Rüsselsheim, Germany',
    location: { lat: 49.9896, lng: 8.4156 },
    logo: 'https://logo.clearbit.com/opel.com',
    description: 'European everyday hatchbacks and compact commuters.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'skoda',
    name: 'Škoda',
    country: 'Czech Republic',
    regionLabel: 'Mladá Boleslav, Czech Republic',
    location: { lat: 50.4114, lng: 14.9035 },
    logo: 'https://logo.clearbit.com/skoda-auto.com',
    description: 'Simply clever family cars with huge usable space.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'tesla',
    name: 'Tesla',
    country: 'USA',
    regionLabel: 'Austin, USA',
    location: { lat: 30.2672, lng: -97.7431 },
    logo: 'https://logo.clearbit.com/tesla.com',
    description: 'Electric-only lineup and over-the-air software culture.',
    timelineStart: 2003,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'lamborghini',
    name: 'Lamborghini',
    country: 'Italy',
    regionLabel: 'Sant’Agata Bolognese, Italy',
    location: { lat: 44.6528, lng: 11.1342 },
    logo: 'https://logo.clearbit.com/lamborghini.com',
    description: 'V12 drama, sharp angles and outrageous supercars.',
    timelineStart: 1963,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'range-rover',
    name: 'Range Rover',
    country: 'United Kingdom',
    regionLabel: 'Solihull, United Kingdom',
    location: { lat: 52.4128, lng: -1.7782 },
    logo: 'https://logo.clearbit.com/landrover.com',
    description: 'Luxury SUVs designed for both city lights and mud.',
    timelineStart: 1970,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'dodge',
    name: 'Dodge',
    country: 'USA',
    regionLabel: 'Auburn Hills, USA',
    location: { lat: 42.6584, lng: -83.1498 },
    logo: 'https://logo.clearbit.com/dodge.com',
    description: 'Loud, straight-line muscle and characterful V8s.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'aston-martin',
    name: 'Aston Martin',
    country: 'United Kingdom',
    regionLabel: 'Gaydon, United Kingdom',
    location: { lat: 52.183, lng: -1.5476 },
    logo: 'https://logo.clearbit.com/astonmartin.com',
    description: 'Hand-built GTs mixing British elegance and racing heritage.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'bentley',
    name: 'Bentley',
    country: 'United Kingdom',
    regionLabel: 'Crewe, United Kingdom',
    location: { lat: 53.1004, lng: -2.4438 },
    logo: 'https://logo.clearbit.com/bentleymotors.com',
    description: 'Ultra-luxury grand tourers with huge torque.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'rolls-royce',
    name: 'Rolls-Royce',
    country: 'United Kingdom',
    regionLabel: 'Goodwood, United Kingdom',
    location: { lat: 50.8617, lng: -0.7594 },
    logo: 'https://logo.clearbit.com/rolls-roycemotorcars.com',
    description: 'The pinnacle of quiet, bespoke automotive luxury.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'cadillac',
    name: 'Cadillac',
    country: 'USA',
    regionLabel: 'Detroit, USA',
    location: { lat: 42.3314, lng: -83.0458 },
    logo: 'https://logo.clearbit.com/cadillac.com',
    description: 'Sharp-edged American luxury sedans and SUVs.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'honda',
    name: 'Honda',
    country: 'Japan',
    regionLabel: 'Tokyo, Japan',
    location: { lat: 35.6762, lng: 139.6503 },
    logo: 'https://logo.clearbit.com/honda.com',
    description: 'VTEC screamers, Type R hatchbacks and efficient hybrids.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'subaru',
    name: 'Subaru',
    country: 'Japan',
    regionLabel: 'Tokyo, Japan',
    location: { lat: 35.6895, lng: 139.6917 },
    logo: 'https://logo.clearbit.com/subaru-global.com',
    description: 'All-wheel-drive icons loved on rally stages and in the snow.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'fiat',
    name: 'Fiat',
    country: 'Italy',
    regionLabel: 'Turin, Italy',
    location: { lat: 45.0703, lng: 7.6869 },
    logo: 'https://logo.clearbit.com/fiat.com',
    description: 'Compact city cars and cheeky Italian runabouts.',
    timelineStart: 1950,
    timelineEnd: 2025,
    models: [],
  },
  {
    id: 'mitsubishi',
    name: 'Mitsubishi',
    country: 'Japan',
    regionLabel: 'Tokyo, Japan',
    location: { lat: 35.7061, lng: 139.7671 },
    logo: 'https://logo.clearbit.com/mitsubishi-motors.com',
    description: 'Rally-bred Lancer Evos and robust SUVs.',
    timelineStart: 1960,
    timelineEnd: 2025,
    models: [],
  },
]

export const getBrandById = (id: string) => brands.find((brand) => brand.id === id)

export const getModelById = (brandId: string, modelId: string) => {
  const brand = getBrandById(brandId)
  return brand?.models.find((model) => model.id === modelId)
}

