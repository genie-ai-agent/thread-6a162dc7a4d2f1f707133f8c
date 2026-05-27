const LANDMARKS = [
  // Manhattan
  { name: "Statue of Liberty", borough: "Manhattan", desc: "Copper neoclassical sculpture on Liberty Island, gift from France in 1886." },
  { name: "Empire State Building", borough: "Manhattan", desc: "102-story Art Deco skyscraper completed in 1931." },
  { name: "Central Park", borough: "Manhattan", desc: "843-acre urban park designed by Olmsted and Vaux, opened 1858." },
  { name: "Times Square", borough: "Manhattan", desc: "Major commercial intersection famous for its bright billboards." },
  { name: "Rockefeller Center", borough: "Manhattan", desc: "Complex of 19 commercial buildings with the iconic ice rink." },
  { name: "One World Trade Center", borough: "Manhattan", desc: "Tallest building in the Western Hemisphere at 1,776 feet." },
  { name: "Chrysler Building", borough: "Manhattan", desc: "Art Deco icon with stainless steel crown, completed 1930." },
  { name: "Grand Central Terminal", borough: "Manhattan", desc: "Beaux-Arts rail terminal with celestial ceiling, opened 1913." },
  { name: "Flatiron Building", borough: "Manhattan", desc: "Triangular steel-frame landmark at 23rd and Broadway, 1902." },
  { name: "The High Line", borough: "Manhattan", desc: "1.45-mile elevated linear park on a former freight rail line." },
  { name: "Brooklyn Bridge", borough: "Manhattan", desc: "Hybrid cable-stayed/suspension bridge spanning the East River since 1883." },
  { name: "Metropolitan Museum of Art", borough: "Manhattan", desc: "Largest art museum in the Americas, on Fifth Avenue's Museum Mile." },
  { name: "St. Patrick's Cathedral", borough: "Manhattan", desc: "Neo-Gothic Roman Catholic cathedral on Fifth Avenue, 1879." },
  { name: "Washington Square Arch", borough: "Manhattan", desc: "Marble triumphal arch in Greenwich Village, completed 1892." },
  { name: "Radio City Music Hall", borough: "Manhattan", desc: "Art Deco entertainment venue, home of the Rockettes." },
  { name: "American Museum of Natural History", borough: "Manhattan", desc: "Massive natural history museum on the Upper West Side." },
  { name: "Apollo Theater", borough: "Manhattan", desc: "Historic Harlem music hall, launchpad for countless Black artists." },

  // Brooklyn
  { name: "Coney Island", borough: "Brooklyn", desc: "Historic seaside neighborhood with boardwalk and amusement parks." },
  { name: "Prospect Park", borough: "Brooklyn", desc: "526-acre park by Olmsted and Vaux, considered their masterpiece." },
  { name: "Brooklyn Botanic Garden", borough: "Brooklyn", desc: "52-acre garden famed for its cherry blossoms and Japanese garden." },
  { name: "Brooklyn Museum", borough: "Brooklyn", desc: "Beaux-Arts museum with one of the largest art collections in the US." },
  { name: "Grand Army Plaza", borough: "Brooklyn", desc: "Oval plaza at Prospect Park's main entrance with triumphal arch." },
  { name: "DUMBO", borough: "Brooklyn", desc: "Neighborhood under the Manhattan Bridge with cobblestone streets." },
  { name: "Williamsburg Bridge", borough: "Brooklyn", desc: "Suspension bridge over the East River, opened 1903." },
  { name: "Green-Wood Cemetery", borough: "Brooklyn", desc: "478-acre rural cemetery and National Historic Landmark from 1838." },
  { name: "Brooklyn Heights Promenade", borough: "Brooklyn", desc: "Cantilevered walkway with sweeping Manhattan skyline views." },

  // Queens
  { name: "Unisphere", borough: "Queens", desc: "140-foot stainless steel globe in Flushing Meadows, 1964 World's Fair." },
  { name: "Citi Field", borough: "Queens", desc: "Home stadium of the New York Mets, opened 2009." },
  { name: "Flushing Meadows Corona Park", borough: "Queens", desc: "898-acre park, fourth-largest in NYC, site of two World's Fairs." },
  { name: "Louis Armstrong House", borough: "Queens", desc: "Corona home of jazz legend Louis Armstrong, now a museum." },
  { name: "Gantry Plaza State Park", borough: "Queens", desc: "Long Island City riverfront park with restored gantries." },
  { name: "MoMA PS1", borough: "Queens", desc: "Contemporary art institution in a converted Long Island City schoolhouse." },
  { name: "Rockaway Beach", borough: "Queens", desc: "Largest urban beach in the US, stretching along the Atlantic." },
  { name: "Queens Museum", borough: "Queens", desc: "Home of the Panorama of the City of New York, a 9,335 sq ft scale model." },
  { name: "Forest Park", borough: "Queens", desc: "538-acre park with old-growth oak forest in central Queens." },

  // The Bronx
  { name: "Yankee Stadium", borough: "The Bronx", desc: "Home of the New York Yankees, opened 2009." },
  { name: "Bronx Zoo", borough: "The Bronx", desc: "265-acre zoo, one of the largest metropolitan zoos in the world." },
  { name: "New York Botanical Garden", borough: "The Bronx", desc: "250-acre National Historic Landmark with the Enid A. Haupt Conservatory." },
  { name: "Arthur Avenue", borough: "The Bronx", desc: "The Bronx's Little Italy, packed with markets, bakeries, and trattorias." },
  { name: "Wave Hill", borough: "The Bronx", desc: "28-acre public garden and cultural center overlooking the Hudson." },
  { name: "Edgar Allan Poe Cottage", borough: "The Bronx", desc: "Tiny wooden cottage where Poe lived from 1846 to 1849." },
  { name: "Woodlawn Cemetery", borough: "The Bronx", desc: "400-acre National Historic Landmark with elaborate mausoleums." },

  // Staten Island
  { name: "Staten Island Ferry", borough: "Staten Island", desc: "Free passenger ferry between St. George and Whitehall, with Liberty views." },
  { name: "Snug Harbor Cultural Center", borough: "Staten Island", desc: "83-acre campus of museums, gardens, and historic buildings." },
  { name: "Fort Wadsworth", borough: "Staten Island", desc: "One of the oldest military installations in the US, under the Verrazzano Bridge." },
  { name: "Verrazzano-Narrows Bridge", borough: "Staten Island", desc: "Double-decked suspension bridge connecting Staten Island and Brooklyn." }
];
