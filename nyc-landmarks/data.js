const LANDMARKS = [
  // ===== MANHATTAN =====
  { name: "Statue of Liberty", borough: "Manhattan", neighborhood: "Liberty Island", year: 1886, type: "Monument", blurb: "Bartholdi's copper-clad gift from France, the universal symbol of welcome." },
  { name: "Empire State Building", borough: "Manhattan", neighborhood: "Midtown", year: 1931, type: "Skyscraper", blurb: "Art Deco icon at 102 stories, briefly the tallest building in the world." },
  { name: "Chrysler Building", borough: "Manhattan", neighborhood: "Midtown East", year: 1930, type: "Skyscraper", blurb: "William Van Alen's stainless-steel crown, the queen of New York Art Deco." },
  { name: "Central Park", borough: "Manhattan", neighborhood: "Upper Manhattan", year: 1858, type: "Park", blurb: "843 acres of Olmsted and Vaux's pastoral imagination, carved out of swamp and rock." },
  { name: "Times Square", borough: "Manhattan", neighborhood: "Midtown", year: 1904, type: "Public Space", blurb: "The world's most relentlessly illuminated intersection, named for the old Times Tower." },
  { name: "Rockefeller Center", borough: "Manhattan", neighborhood: "Midtown", year: 1939, type: "Complex", blurb: "Nineteen Art Deco buildings, an ice rink, and a Christmas tree the world watches light up." },
  { name: "One World Trade Center", borough: "Manhattan", neighborhood: "Financial District", year: 2014, type: "Skyscraper", blurb: "At 1,776 feet, the tallest building in the Western Hemisphere, on hallowed ground." },
  { name: "9/11 Memorial & Museum", borough: "Manhattan", neighborhood: "Financial District", year: 2011, type: "Memorial", blurb: "Twin reflecting voids in the footprints of the fallen towers." },
  { name: "Flatiron Building", borough: "Manhattan", neighborhood: "Flatiron District", year: 1902, type: "Skyscraper", blurb: "Daniel Burnham's 22-story wedge, an early steel-frame marvel at 23rd and Broadway." },
  { name: "Grand Central Terminal", borough: "Manhattan", neighborhood: "Midtown East", year: 1913, type: "Transit", blurb: "Beaux-Arts cathedral of commuting, beneath a celestial ceiling painted in reverse." },
  { name: "The Metropolitan Museum of Art", borough: "Manhattan", neighborhood: "Upper East Side", year: 1880, type: "Museum", blurb: "Two million square feet of human creativity, from Egyptian temples to Vermeer." },
  { name: "American Museum of Natural History", borough: "Manhattan", neighborhood: "Upper West Side", year: 1869, type: "Museum", blurb: "Dinosaurs, dioramas, and a 94-foot blue whale suspended in the Hall of Ocean Life." },
  { name: "The Guggenheim Museum", borough: "Manhattan", neighborhood: "Upper East Side", year: 1959, type: "Museum", blurb: "Frank Lloyd Wright's spiraling white ribbon on Fifth Avenue." },
  { name: "St. Patrick's Cathedral", borough: "Manhattan", neighborhood: "Midtown", year: 1878, type: "Religious", blurb: "Neo-Gothic spires rising 330 feet, the seat of the Catholic Archdiocese of New York." },
  { name: "Washington Square Arch", borough: "Manhattan", neighborhood: "Greenwich Village", year: 1892, type: "Monument", blurb: "Stanford White's marble homage to George Washington, anchor of bohemian downtown." },
  { name: "The High Line", borough: "Manhattan", neighborhood: "Chelsea", year: 2009, type: "Park", blurb: "A defunct freight rail trestle reborn as a 1.45-mile elevated garden walk." },
  { name: "Lincoln Center", borough: "Manhattan", neighborhood: "Upper West Side", year: 1962, type: "Complex", blurb: "Travertine plazas anchoring the Met Opera, NY Philharmonic, and NYC Ballet." },
  { name: "The Cloisters", borough: "Manhattan", neighborhood: "Washington Heights", year: 1938, type: "Museum", blurb: "A medieval European monastery transplanted stone-by-stone above the Hudson." },
  { name: "Apollo Theater", borough: "Manhattan", neighborhood: "Harlem", year: 1914, type: "Theater", blurb: "Amateur Night since 1934, where Ella, Aretha, and Hendrix all earned their stripes." },
  { name: "Stonewall Inn", borough: "Manhattan", neighborhood: "Greenwich Village", year: 1969, type: "Historic Site", blurb: "The Greenwich Village bar where the modern LGBTQ+ rights movement ignited." },
  { name: "New York Public Library (Main Branch)", borough: "Manhattan", neighborhood: "Midtown", year: 1911, type: "Library", blurb: "Patience and Fortitude, the marble lions, guard the Beaux-Arts Rose Reading Room." },
  { name: "Wall Street & NYSE", borough: "Manhattan", neighborhood: "Financial District", year: 1903, type: "Historic Site", blurb: "The neoclassical temple of capitalism behind a Corinthian-columned facade." },
  { name: "Madison Square Garden", borough: "Manhattan", neighborhood: "Midtown", year: 1968, type: "Arena", blurb: "The world's most famous arena, atop Penn Station, home of the Knicks and Rangers." },

  // ===== BROOKLYN =====
  { name: "Brooklyn Bridge", borough: "Brooklyn", neighborhood: "DUMBO / FiDi", year: 1883, type: "Bridge", blurb: "John Roebling's Gothic-arched cable suspension, once the longest in the world." },
  { name: "Coney Island & the Cyclone", borough: "Brooklyn", neighborhood: "Coney Island", year: 1927, type: "Historic Site", blurb: "Wooden roller coaster, Nathan's hot dogs, and the original American boardwalk." },
  { name: "Prospect Park", borough: "Brooklyn", neighborhood: "Park Slope", year: 1867, type: "Park", blurb: "Olmsted and Vaux's other masterpiece, with a Long Meadow they considered superior to Central Park." },
  { name: "Brooklyn Museum", borough: "Brooklyn", neighborhood: "Prospect Heights", year: 1897, type: "Museum", blurb: "Beaux-Arts mass holding 1.5 million works, including Judy Chicago's Dinner Party." },
  { name: "Brooklyn Botanic Garden", borough: "Brooklyn", neighborhood: "Crown Heights", year: 1910, type: "Park", blurb: "52 acres, with a Cherry Esplanade that draws crowds every spring Sakura Matsuri." },
  { name: "Grand Army Plaza Arch", borough: "Brooklyn", neighborhood: "Park Slope", year: 1892, type: "Monument", blurb: "The Soldiers' and Sailors' Memorial Arch, Brooklyn's answer to the Arc de Triomphe." },
  { name: "Green-Wood Cemetery", borough: "Brooklyn", neighborhood: "Sunset Park", year: 1838, type: "Historic Site", blurb: "478 rolling acres holding Basquiat, Bernstein, and Boss Tweed." },
  { name: "Domino Park", borough: "Brooklyn", neighborhood: "Williamsburg", year: 2018, type: "Park", blurb: "Six waterfront acres reclaimed from the old Domino Sugar Refinery." },

  // ===== QUEENS =====
  { name: "Unisphere", borough: "Queens", neighborhood: "Flushing Meadows", year: 1964, type: "Monument", blurb: "140-ton stainless-steel globe, centerpiece of the 1964 World's Fair." },
  { name: "Flushing Meadows-Corona Park", borough: "Queens", neighborhood: "Flushing", year: 1939, type: "Park", blurb: "Two World's Fairs, the US Open, and the Mets all on land Robert Moses reclaimed from ash heaps." },
  { name: "Citi Field", borough: "Queens", neighborhood: "Flushing", year: 2009, type: "Arena", blurb: "The Mets' brick-and-stone homage to Ebbets Field, with a Jackie Robinson Rotunda." },
  { name: "Louis Armstrong House", borough: "Queens", neighborhood: "Corona", year: 1943, type: "Historic Site", blurb: "Satchmo's modest Corona home, preserved as he left it in 1971." },
  { name: "MoMA PS1", borough: "Queens", neighborhood: "Long Island City", year: 1976, type: "Museum", blurb: "A repurposed 19th-century schoolhouse turned contemporary-art lab." },
  { name: "Gantry Plaza State Park", borough: "Queens", neighborhood: "Long Island City", year: 1998, type: "Park", blurb: "Restored rail-barge gantries framing the best skyline view in the city." },

  // ===== THE BRONX =====
  { name: "Yankee Stadium", borough: "The Bronx", neighborhood: "Concourse", year: 2009, type: "Arena", blurb: "The new House That Ruth Built, replacing the 1923 original across the street." },
  { name: "Bronx Zoo", borough: "The Bronx", neighborhood: "Bronx Park", year: 1899, type: "Park", blurb: "265 acres and 6,000 animals, one of the largest metropolitan zoos in the world." },
  { name: "New York Botanical Garden", borough: "The Bronx", neighborhood: "Bronx Park", year: 1891, type: "Park", blurb: "250 acres including the Haupt Conservatory's Victorian glasshouses." },
  { name: "Edgar Allan Poe Cottage", borough: "The Bronx", neighborhood: "Fordham", year: 1812, type: "Historic Site", blurb: "The tiny clapboard house where Poe wrote 'Annabel Lee' and lost his wife Virginia." },
  { name: "Wave Hill", borough: "The Bronx", neighborhood: "Riverdale", year: 1843, type: "Park", blurb: "28 garden acres above the Hudson, once home to Twain and Toscanini." },
  { name: "Grand Concourse", borough: "The Bronx", neighborhood: "Bronx", year: 1909, type: "Historic Site", blurb: "A 4-mile boulevard of Art Deco apartment houses modeled on the Champs-Élysées." },

  // ===== STATEN ISLAND =====
  { name: "Staten Island Ferry", borough: "Staten Island", neighborhood: "St. George", year: 1905, type: "Transit", blurb: "A free 25-minute ride past Lady Liberty, the city's best deal for a million-dollar view." },
  { name: "Snug Harbor Cultural Center", borough: "Staten Island", neighborhood: "Livingston", year: 1833, type: "Complex", blurb: "Greek Revival sailors' retirement home turned 83-acre cultural campus." },
  { name: "Fort Wadsworth", borough: "Staten Island", neighborhood: "Rosebank", year: 1663, type: "Historic Site", blurb: "One of the oldest military sites in America, guarding the Narrows beneath the Verrazzano." },
  { name: "Verrazzano-Narrows Bridge", borough: "Staten Island", neighborhood: "Fort Wadsworth", year: 1964, type: "Bridge", blurb: "Othmar Ammann's double-deck suspension span, longest in the Americas until 1981." },
  { name: "Alice Austen House", borough: "Staten Island", neighborhood: "Rosebank", year: 1690, type: "Historic Site", blurb: "Clear Comfort, the cottage of pioneering photographer Alice Austen." },
  { name: "Jacques Marchais Museum of Tibetan Art", borough: "Staten Island", neighborhood: "Lighthouse Hill", year: 1947, type: "Museum", blurb: "A hillside replica of a Himalayan monastery, the first of its kind in the West." }
];
