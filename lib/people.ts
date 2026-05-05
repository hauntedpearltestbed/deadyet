import type { SeedPerson } from "./types";
import { slugify } from "./slugify";

const SEED: ReadonlyArray<SeedPerson> = [
  {
    slug: "adolf-hitler",
    name: "Adolf Hitler",
    wikipediaTitle: "Adolf_Hitler",
    description:
      "Leader of Nazi Germany from 1933–1945. Initiated World War II in Europe and orchestrated the Holocaust, the genocide of approximately six million Jews and millions of other victims.",
    alignment: "evil",
    fallback: { birthYear: 1889, deathYear: 1945 },
  },
  {
    slug: "joseph-stalin",
    name: "Joseph Stalin",
    wikipediaTitle: "Joseph_Stalin",
    description:
      "Leader of the Soviet Union from the mid-1920s until 1953. His policies including forced collectivization, the Great Purge, and Gulag system led to the deaths of millions.",
    alignment: "evil",
    fallback: { birthYear: 1878, deathYear: 1953 },
  },
  {
    slug: "pol-pot",
    name: "Pol Pot",
    wikipediaTitle: "Pol_Pot",
    description:
      "Leader of the Khmer Rouge and Prime Minister of Democratic Kampuchea (1976–1979). His regime caused the Cambodian genocide, killing an estimated 1.5–2 million people through forced labor, starvation, and execution.",
    alignment: "evil",
    fallback: { birthYear: 1925, deathYear: 1998 },
  },
  {
    slug: "idi-amin",
    name: "Idi Amin",
    wikipediaTitle: "Idi_Amin",
    description:
      "President of Uganda from 1971 to 1979. His regime was characterized by mass killings, ethnic persecution, and political repression, with an estimated 100,000–500,000 deaths.",
    alignment: "evil",
    fallback: { birthYear: 1925, deathYear: 2003 },
  },
  {
    slug: "jeffrey-dahmer",
    name: "Jeffrey Dahmer",
    wikipediaTitle: "Jeffrey_Dahmer",
    description:
      "American serial killer and sex offender who murdered and dismembered seventeen men and boys between 1978 and 1991. Killed in prison in 1994.",
    alignment: "evil",
    fallback: { birthYear: 1960, deathYear: 1994 },
  },
  {
    slug: "charles-manson",
    name: "Charles Manson",
    wikipediaTitle: "Charles_Manson",
    description:
      "American cult leader who orchestrated the Tate–LaBianca murders in 1969 through the so-called 'Manson Family.' Convicted of first-degree murder and conspiracy to commit murder.",
    alignment: "evil",
    fallback: { birthYear: 1934, deathYear: 2017 },
  },
  {
    slug: "henry-kissinger",
    name: "Henry Kissinger",
    wikipediaTitle: "Henry_Kissinger",
    description:
      "U.S. Secretary of State under Nixon and Ford. Architect of policies linked to the secret bombing of Cambodia, support for the 1973 Chilean coup, and the 1971 Bangladesh genocide. Died at age 100.",
    alignment: "evil",
    fallback: { birthYear: 1923, deathYear: 2023 },
  },
  {
    slug: "leopold-ii-of-belgium",
    name: "Leopold II of Belgium",
    wikipediaTitle: "Leopold_II_of_Belgium",
    description:
      "King of the Belgians (1865–1909) and personal sovereign of the Congo Free State, where his regime of forced labor and atrocities killed an estimated 10 million Congolese.",
    alignment: "evil",
    fallback: { birthYear: 1835, deathYear: 1909 },
  },
  {
    slug: "donald-trump",
    name: "Donald Trump",
    wikipediaTitle: "Donald_Trump",
    description:
      "45th and 47th President of the United States. The first president impeached twice, indicted on 91 criminal charges across four jurisdictions, convicted on 34 felony counts in New York, and found liable for sexual abuse and defamation. Played a central role in the January 6th Capitol attack and refused to concede the 2020 election.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c5/Donald_Trump_mug_shot.jpg" },
  },
  {
    slug: "martin-luther-king-jr",
    name: "Martin Luther King Jr.",
    wikipediaTitle: "Martin_Luther_King_Jr.",
    description:
      "Baptist minister and leader of the American civil rights movement. Advocated for nonviolent resistance to racial segregation and delivered the iconic 'I Have a Dream' speech. Awarded the Nobel Peace Prize in 1964. Assassinated in 1968.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1968 },
  },
  {
    slug: "barack-obama",
    name: "Barack Obama",
    wikipediaTitle: "Barack_Obama",
    description:
      "44th President of the United States (2009–2017) and the first African American to hold the office. Expanded healthcare access through the Affordable Care Act, oversaw the operation that killed Osama bin Laden, and signed the Lilly Ledbetter Fair Pay Act.",
    alignment: "good",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "dolly-parton",
    name: "Dolly Parton",
    wikipediaTitle: "Dolly_Parton",
    description:
      "Country music legend, singer-songwriter, actress, and philanthropist. Known for hits like 'Jolene' and 'I Will Always Love You,' and for founding the Imagination Library, which has donated over 200 million books to children worldwide.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "joe-biden",
    name: "Joe Biden",
    wikipediaTitle: "Joe_Biden",
    description:
      "46th President of the United States. Former Vice President under Obama and six-term Senator from Delaware.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "kamala-harris",
    name: "Kamala Harris",
    wikipediaTitle: "Kamala_Harris",
    description:
      "49th Vice President of the United States. Former California Attorney General and U.S. Senator. First woman, first Black person, and first Asian American to hold the office.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "bernie-sanders",
    name: "Bernie Sanders",
    wikipediaTitle: "Bernie_Sanders",
    description:
      "U.S. Senator from Vermont since 2007. Former mayor of Burlington and U.S. Representative. Two-time presidential candidate known for progressive economic policies.",
    alignment: "good",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "liz-cheney",
    name: "Liz Cheney",
    wikipediaTitle: "Liz_Cheney",
    description:
      "Former U.S. Representative from Wyoming and House Republican Conference Chair. Vice Chair of the January 6th Select Committee. Lost her primary in 2022 after opposing Trump.",
    alignment: "good",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "abraham-lincoln",
    name: "Abraham Lincoln",
    wikipediaTitle: "Abraham_Lincoln",
    description:
      "16th President of the United States. Led the Union through the Civil War and issued the Emancipation Proclamation. Assassinated in 1865.",
    alignment: "good",
    fallback: { birthYear: 1809, deathYear: 1865 },
  },
  {
    slug: "john-f-kennedy",
    name: "John F. Kennedy",
    wikipediaTitle: "John_F._Kennedy",
    description:
      "35th President of the United States. Led during the Cuban Missile Crisis and established the Peace Corps. Assassinated in Dallas in 1963.",
    alignment: "good",
    fallback: { birthYear: 1917, deathYear: 1963 },
  },
  {
    slug: "franklin-d-roosevelt",
    name: "Franklin D. Roosevelt",
    wikipediaTitle: "Franklin_D._Roosevelt",
    description:
      "32nd President of the United States. Only president elected to four terms. Led the country through the Great Depression and most of World War II.",
    alignment: "good",
    fallback: { birthYear: 1882, deathYear: 1945 },
  },
  {
    slug: "winston-churchill",
    name: "Winston Churchill",
    wikipediaTitle: "Winston_Churchill",
    description:
      "Prime Minister of the United Kingdom during World War II and again in the early 1950s. Won the Nobel Prize in Literature in 1953.",
    alignment: "good",
    fallback: { birthYear: 1874, deathYear: 1965 },
  },
  {
    slug: "nelson-mandela",
    name: "Nelson Mandela",
    wikipediaTitle: "Nelson_Mandela",
    description:
      "First Black president of South Africa and anti-apartheid revolutionary. Served 27 years in prison before his release and election in 1994. Nobel Peace Prize laureate.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 2013 },
  },
  {
    slug: "ruth-bader-ginsburg",
    name: "Ruth Bader Ginsburg",
    wikipediaTitle: "Ruth_Bader_Ginsburg",
    description:
      "Associate Justice of the U.S. Supreme Court from 1993 until her death. Pioneer of gender equality law and liberal icon.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: 2020 },
  },
  {
    slug: "jimmy-carter",
    name: "Jimmy Carter",
    wikipediaTitle: "Jimmy_Carter",
    description:
      "39th President of the United States. Nobel Peace Prize laureate for post-presidential humanitarian work including Habitat for Humanity.",
    alignment: "good",
    fallback: { birthYear: 1924, deathYear: 2024 },
  },
  {
    slug: "dwight-d-eisenhower",
    name: "Dwight D. Eisenhower",
    wikipediaTitle: "Dwight_D._Eisenhower",
    description:
      "34th President of the United States and Supreme Allied Commander in Europe during World War II.",
    alignment: "good",
    fallback: { birthYear: 1890, deathYear: 1969 },
  },
  {
    slug: "tom-hanks",
    name: "Tom Hanks",
    wikipediaTitle: "Tom_Hanks",
    description:
      "Actor and filmmaker. Two-time Academy Award winner for Philadelphia and Forrest Gump. One of the most bankable stars in Hollywood history.",
    alignment: "good",
    fallback: { birthYear: 1956, deathYear: null },
  },
  {
    slug: "denzel-washington",
    name: "Denzel Washington",
    wikipediaTitle: "Denzel_Washington",
    description:
      "Actor, director, and producer. Two-time Academy Award winner. Known for Training Day, Malcolm X, and Fences.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "keanu-reeves",
    name: "Keanu Reeves",
    wikipediaTitle: "Keanu_Reeves",
    description:
      "Actor. Known for The Matrix and John Wick franchises. Praised for his humility and charitable donations.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "clint-eastwood",
    name: "Clint Eastwood",
    wikipediaTitle: "Clint_Eastwood",
    description:
      "Actor, director, and producer. Academy Award-winning director of Unforgiven and Million Dollar Baby. Known for Westerns and the Dirty Harry series.",
    alignment: "good",
    fallback: { birthYear: 1930, deathYear: null },
  },
  {
    slug: "morgan-freeman",
    name: "Morgan Freeman",
    wikipediaTitle: "Morgan_Freeman",
    description:
      "Actor and narrator. Academy Award winner for Million Dollar Baby. Known for The Shawshank Redemption, Driving Miss Daisy, and his distinctive voice.",
    alignment: "good",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "robert-de-niro",
    name: "Robert De Niro",
    wikipediaTitle: "Robert_De_Niro",
    description:
      "Actor and producer. Two-time Academy Award winner for The Godfather Part II and Raging Bull. Co-founder of the Tribeca Film Festival.",
    alignment: "good",
    fallback: { birthYear: 1943, deathYear: null },
  },
  {
    slug: "al-pacino",
    name: "Al Pacino",
    wikipediaTitle: "Al_Pacino",
    description:
      "Actor. Academy Award winner for Scent of a Woman. Known for The Godfather, Scarface, and Serpico.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: null },
  },
  {
    slug: "samuel-l-jackson",
    name: "Samuel L. Jackson",
    wikipediaTitle: "Samuel_L._Jackson",
    description:
      "Actor and producer. Highest-grossing actor of all time. Known for Pulp Fiction, the Marvel Cinematic Universe, and Jackie Brown.",
    alignment: "good",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "harrison-ford",
    name: "Harrison Ford",
    wikipediaTitle: "Harrison_Ford",
    description:
      "Actor. Known for Star Wars and Indiana Jones franchises. Also a licensed pilot who has performed rescue missions.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "paul-mccartney",
    name: "Paul McCartney",
    wikipediaTitle: "Paul_McCartney",
    description:
      "Musician, singer, and songwriter. Member of The Beatles and Wings. One of the most successful composers and performers of all time.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "elton-john",
    name: "Elton John",
    wikipediaTitle: "Elton_John",
    description:
      "Singer, songwriter, and pianist. One of the best-selling music artists of all time. Founded the Elton John AIDS Foundation in 1992. Knighted in 1998.",
    alignment: "good",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "taylor-swift",
    name: "Taylor Swift",
    wikipediaTitle: "Taylor_Swift",
    description:
      "Singer-songwriter. One of the best-selling music artists of all time. First artist to win Album of the Year at the Grammys four times.",
    alignment: "good",
    fallback: { birthYear: 1989, deathYear: null },
  },
  {
    slug: "beyonce",
    name: "Beyoncé",
    wikipediaTitle: "Beyoncé",
    description:
      "Singer, songwriter, and actress. One of the best-selling music artists of all time. 32-time Grammy Award winner, the most of any artist.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "oprah-winfrey",
    name: "Oprah Winfrey",
    wikipediaTitle: "Oprah_Winfrey",
    description:
      "Talk show host, television producer, and philanthropist. Hosted The Oprah Winfrey Show for 25 years. One of the wealthiest and most influential women in media history.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "david-bowie",
    name: "David Bowie",
    wikipediaTitle: "David_Bowie",
    description:
      "Singer, songwriter, and actor. One of the most influential musicians of the 20th century. Known for constant reinvention and hits including Heroes and Space Oddity.",
    alignment: "good",
    fallback: { birthYear: 1947, deathYear: 2016 },
  },
  {
    slug: "freddie-mercury",
    name: "Freddie Mercury",
    wikipediaTitle: "Freddie_Mercury",
    description:
      "Lead vocalist of Queen. Known for his powerful voice and flamboyant stage presence. Wrote Bohemian Rhapsody and We Are the Champions.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: 1991 },
  },
  {
    slug: "john-lennon",
    name: "John Lennon",
    wikipediaTitle: "John_Lennon",
    description:
      "Singer, songwriter, and peace activist. Member of The Beatles. Wrote Imagine and Give Peace a Chance. Assassinated outside his New York apartment in 1980.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: 1980 },
  },
  {
    slug: "robin-williams",
    name: "Robin Williams",
    wikipediaTitle: "Robin_Williams",
    description:
      "Actor and comedian. Academy Award winner for Good Will Hunting. Known for Mrs. Doubtfire, Good Morning Vietnam, and Aladdin.",
    alignment: "good",
    fallback: { birthYear: 1951, deathYear: 2014 },
  },
  {
    slug: "audrey-hepburn",
    name: "Audrey Hepburn",
    wikipediaTitle: "Audrey_Hepburn",
    description:
      "Actor and humanitarian. Academy Award winner for Roman Holiday. UNICEF Goodwill Ambassador from 1988 until her death.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1993 },
  },
  {
    slug: "charlie-chaplin",
    name: "Charlie Chaplin",
    wikipediaTitle: "Charlie_Chaplin",
    description:
      "Actor, comedian, and filmmaker. Pioneer of silent film and one of the most important figures in film history. Created the Tramp character.",
    alignment: "good",
    fallback: { birthYear: 1889, deathYear: 1977 },
  },
  {
    slug: "betty-white",
    name: "Betty White",
    wikipediaTitle: "Betty_White",
    description:
      "Actor and comedian. Longest career in American television. Known for The Golden Girls, The Mary Tyler Moore Show, and Hot in Cleveland.",
    alignment: "good",
    fallback: { birthYear: 1922, deathYear: 2021 },
  },
  {
    slug: "marlon-brando",
    name: "Marlon Brando",
    wikipediaTitle: "Marlon_Brando",
    description:
      "Actor. Two-time Academy Award winner for On the Waterfront and The Godfather. Widely regarded as one of the greatest actors of all time.",
    alignment: "good",
    fallback: { birthYear: 1924, deathYear: 2004 },
  },
  {
    slug: "lebron-james",
    name: "LeBron James",
    wikipediaTitle: "LeBron_James",
    description:
      "Professional basketball player. Four-time NBA champion and the league's all-time leading scorer. Founder of the I Promise School in Akron, Ohio.",
    alignment: "good",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "michael-jordan",
    name: "Michael Jordan",
    wikipediaTitle: "Michael_Jordan",
    description:
      "Professional basketball player. Six-time NBA champion with the Chicago Bulls. Widely regarded as the greatest basketball player of all time.",
    alignment: "good",
    fallback: { birthYear: 1963, deathYear: null },
  },
  {
    slug: "serena-williams",
    name: "Serena Williams",
    wikipediaTitle: "Serena_Williams",
    description:
      "Professional tennis player. Winner of 23 Grand Slam singles titles, the most in the Open Era. Four-time Olympic gold medalist.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "simone-biles",
    name: "Simone Biles",
    wikipediaTitle: "Simone_Biles",
    description:
      "Artistic gymnast. Most decorated American gymnast in history with 37 combined World and Olympic medals.",
    alignment: "good",
    fallback: { birthYear: 1997, deathYear: null },
  },
  {
    slug: "muhammad-ali",
    name: "Muhammad Ali",
    wikipediaTitle: "Muhammad_Ali",
    description:
      "Professional boxer and activist. Three-time heavyweight champion. Convicted of draft evasion for refusing Vietnam War service; conviction overturned by Supreme Court.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: 2016 },
  },
  {
    slug: "kobe-bryant",
    name: "Kobe Bryant",
    wikipediaTitle: "Kobe_Bryant",
    description:
      "Professional basketball player. Five-time NBA champion with the Los Angeles Lakers. Died in a helicopter crash in 2020 along with his daughter Gianna.",
    alignment: "good",
    fallback: { birthYear: 1978, deathYear: 2020 },
  },
  {
    slug: "george-w-bush",
    name: "George W. Bush",
    wikipediaTitle: "George_W._Bush",
    description:
      "43rd President of the United States. Launched the Iraq War in 2003 based on intelligence later found to be flawed regarding weapons of mass destruction. Presided over the establishment of the Guantanamo Bay detention camp and enhanced interrogation program.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "dick-cheney",
    name: "Dick Cheney",
    wikipediaTitle: "Dick_Cheney",
    description:
      "46th Vice President of the United States under George W. Bush. Chief architect of the Iraq War and the post-9/11 surveillance and interrogation programs. Previously CEO of Halliburton.",
    alignment: "evil",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "richard-nixon",
    name: "Richard Nixon",
    wikipediaTitle: "Richard_Nixon",
    description:
      "37th President of the United States. Resigned in 1974 due to the Watergate scandal, becoming the only president to resign from office.",
    alignment: "evil",
    fallback: { birthYear: 1913, deathYear: 1994 },
  },
  {
    slug: "andrew-jackson",
    name: "Andrew Jackson",
    wikipediaTitle: "Andrew_Jackson",
    description:
      "7th President of the United States. Signed the Indian Removal Act leading to the Trail of Tears. Owned hundreds of enslaved people.",
    alignment: "evil",
    fallback: { birthYear: 1767, deathYear: 1845 },
  },
  {
    slug: "j-edgar-hoover",
    name: "J. Edgar Hoover",
    wikipediaTitle: "J._Edgar_Hoover",
    description:
      "First Director of the FBI, serving 48 years. Known for illegal surveillance of political activists, civil rights leaders, and public figures. Maintained secret files on thousands of Americans.",
    alignment: "evil",
    fallback: { birthYear: 1895, deathYear: 1972 },
  },
  {
    slug: "boris-johnson",
    name: "Boris Johnson",
    wikipediaTitle: "Boris_Johnson",
    description:
      "Former Prime Minister of the United Kingdom. Led Brexit as a key campaigner. Resigned in 2022 following multiple scandals including Partygate.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "nigel-farage",
    name: "Nigel Farage",
    wikipediaTitle: "Nigel_Farage",
    description:
      "British politician and broadcaster. Led the UK Independence Party and was a key figure in the Brexit campaign. Seven-time Member of the European Parliament.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "ted-cruz",
    name: "Ted Cruz",
    wikipediaTitle: "Ted_Cruz",
    description:
      "U.S. Senator from Texas since 2013. Led the 2013 government shutdown and objected to certifying the 2020 presidential election results.",
    alignment: "evil",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "ron-desantis",
    name: "Ron DeSantis",
    wikipediaTitle: "Ron_DeSantis",
    description:
      "Governor of Florida since 2019. Signed legislation restricting abortion access, LGBTQ+ education, and classroom discussions of race. Former U.S. Representative.",
    alignment: "evil",
    fallback: { birthYear: 1978, deathYear: null },
  },
  {
    slug: "mitch-mcconnell",
    name: "Mitch McConnell",
    wikipediaTitle: "Mitch_McConnell",
    description:
      "U.S. Senator from Kentucky since 1985 and Senate Republican Leader. Blocked Merrick Garland's Supreme Court nomination in 2016 and helped confirm three Trump justices.",
    alignment: "evil",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "newt-gingrich",
    name: "Newt Gingrich",
    wikipediaTitle: "Newt_Gingrich",
    description:
      "Former Speaker of the U.S. House of Representatives. Led the 1994 Republican Revolution and the impeachment of Bill Clinton. Later a political consultant and commentator.",
    alignment: "evil",
    fallback: { birthYear: 1943, deathYear: null },
  },
  {
    slug: "matt-gaetz",
    name: "Matt Gaetz",
    wikipediaTitle: "Matt_Gaetz",
    description:
      "Former U.S. Representative from Florida. Resigned in 2024 amid a House Ethics Committee investigation into allegations of sex trafficking and drug use.",
    alignment: "evil",
    fallback: { birthYear: 1982, deathYear: null },
  },
  {
    slug: "rush-limbaugh",
    name: "Rush Limbaugh",
    wikipediaTitle: "Rush_Limbaugh",
    description:
      "Conservative radio host and commentator. Hosted The Rush Limbaugh Show for over three decades. Promoted conspiracy theories including birtherism and climate change denial.",
    alignment: "evil",
    fallback: { birthYear: 1951, deathYear: 2021 },
  },
  {
    slug: "sean-hannity",
    name: "Sean Hannity",
    wikipediaTitle: "Sean_Hannity",
    description:
      "Fox News host and conservative commentator. Longtime Trump ally and promoter of conspiracy theories including the false narrative about the 2020 election.",
    alignment: "evil",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "tucker-carlson",
    name: "Tucker Carlson",
    wikipediaTitle: "Tucker_Carlson",
    description:
      "Former Fox News host and conservative commentator. Promoted conspiracy theories including the Great Replacement theory and false claims about the 2020 election. Fired from Fox News in 2023.",
    alignment: "evil",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "roger-stone",
    name: "Roger Stone",
    wikipediaTitle: "Roger_Stone",
    description:
      "Political consultant and lobbyist. Convicted of witness tampering and lying to Congress in relation to the Mueller investigation. Pardoned by Trump.",
    alignment: "evil",
    fallback: { birthYear: 1952, deathYear: null },
  },
  {
    slug: "paul-manafort",
    name: "Paul Manafort",
    wikipediaTitle: "Paul_Manafort",
    description:
      "Political consultant and lobbyist. Served as Trump's 2016 campaign chairman. Convicted of tax fraud, bank fraud, and failure to disclose foreign lobbying. Pardoned by Trump.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "steve-bannon",
    name: "Steve Bannon",
    wikipediaTitle: "Steve_Bannon",
    description:
      "Former White House Chief Strategist under Trump. Charged with contempt of Congress for defying a subpoena from the January 6th Committee. Promotes far-right nationalist politics.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: null },
  },
  {
    slug: "michael-cohen",
    name: "Michael Cohen",
    wikipediaTitle: "Michael_Cohen_(lawyer)",
    description:
      "Former personal attorney to Donald Trump. Pleaded guilty to campaign finance violations, tax fraud, and bank fraud. Served three years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "jared-kushner",
    name: "Jared Kushner",
    wikipediaTitle: "Jared_Kushner",
    description:
      "Former Senior Advisor to President Trump and son-in-law. Oversaw Middle East policy including the Abraham Accords. Previously CEO of Kushner Companies.",
    alignment: "evil",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "karl-rove",
    name: "Karl Rove",
    wikipediaTitle: "Karl_Rove",
    description:
      "Former Deputy Chief of Staff to President George W. Bush. Known as Bush's political architect. Involved in the Valerie Plame CIA leak scandal.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "alex-jones",
    name: "Alex Jones",
    wikipediaTitle: "Alex_Jones",
    description:
      "Founder of InfoWars. Promoted conspiracy theories including that the Sandy Hook Elementary School shooting was a hoax. Ordered to pay over $1.4 billion in defamation damages to victims' families.",
    alignment: "evil",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "jeffrey-epstein",
    name: "Jeffrey Epstein",
    wikipediaTitle: "Jeffrey_Epstein",
    description:
      "Financier and convicted sex offender. Arrested in 2019 on federal charges of sex trafficking minors. Died in jail before trial. His death was ruled a suicide.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: 2019 },
  },
  {
    slug: "ghislaine-maxwell",
    name: "Ghislaine Maxwell",
    wikipediaTitle: "Ghislaine_Maxwell",
    description:
      "British socialite. Convicted in 2021 on federal charges of sex trafficking and conspiracy related to Jeffrey Epstein. Sentenced to 20 years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "harvey-weinstein",
    name: "Harvey Weinstein",
    wikipediaTitle: "Harvey_Weinstein",
    description:
      "Former film producer. Convicted in New York of felony sex crimes including rape and sexual assault. Convicted in Los Angeles of additional rape charges. Sentenced to 39 years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1952, deathYear: null },
  },
  {
    slug: "bill-cosby",
    name: "Bill Cosby",
    wikipediaTitle: "Bill_Cosby",
    description:
      "Actor and comedian. Convicted in 2018 of aggravated indecent assault. Over 60 women accused him of sexual assault. Conviction was overturned on procedural grounds in 2021.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "r-kelly",
    name: "R. Kelly",
    wikipediaTitle: "R._Kelly",
    description:
      "Singer and songwriter. Convicted in 2021 and 2022 on federal charges of racketeering and child sexual exploitation. Sentenced to over 30 years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1967, deathYear: null },
  },
  {
    slug: "kevin-spacey",
    name: "Kevin Spacey",
    wikipediaTitle: "Kevin_Spacey",
    description:
      "Actor. Acquitted in 2023 of sexual assault charges in the UK. Faced multiple civil lawsuits alleging sexual misconduct. Lost a $31 million arbitration case to House of Cards producers.",
    alignment: "evil",
    fallback: { birthYear: 1959, deathYear: null },
  },
  {
    slug: "ted-bundy",
    name: "Ted Bundy",
    wikipediaTitle: "Ted_Bundy",
    description:
      "Serial killer who confessed to murdering 30 women across seven states in the 1970s. Executed in Florida in 1989.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: 1989 },
  },
  {
    slug: "john-wayne-gacy",
    name: "John Wayne Gacy",
    wikipediaTitle: "John_Wayne_Gacy",
    description:
      "Serial killer convicted of murdering 33 young men and boys in the 1970s. Known as the Killer Clown. Executed in Illinois in 1994.",
    alignment: "evil",
    fallback: { birthYear: 1942, deathYear: 1994 },
  },
  {
    slug: "timothy-mcveigh",
    name: "Timothy McVeigh",
    wikipediaTitle: "Timothy_McVeigh",
    description:
      "Domestic terrorist who bombed the Alfred P. Murrah Federal Building in Oklahoma City in 1995, killing 168 people. Executed in 2001.",
    alignment: "evil",
    fallback: { birthYear: 1968, deathYear: 2001 },
  },
  {
    slug: "lee-harvey-oswald",
    name: "Lee Harvey Oswald",
    wikipediaTitle: "Lee_Harvey_Oswald",
    description:
      "Assassin of President John F. Kennedy in 1963. Shot and killed by Jack Ruby two days later before he could stand trial.",
    alignment: "evil",
    fallback: { birthYear: 1939, deathYear: 1963 },
  },
  {
    slug: "john-wilkes-booth",
    name: "John Wilkes Booth",
    wikipediaTitle: "John_Wilkes_Booth",
    description:
      "Actor and Confederate sympathizer who assassinated President Abraham Lincoln in 1865. Shot and killed by Union soldiers 12 days later.",
    alignment: "evil",
    fallback: { birthYear: 1838, deathYear: 1865 },
  },
  {
    slug: "o-j-simpson",
    name: "O.J. Simpson",
    wikipediaTitle: "O._J._Simpson",
    description:
      "Former NFL running back and actor. Acquitted in 1995 of murdering his ex-wife Nicole Brown Simpson and Ron Goldman. Later convicted of armed robbery and kidnapping in 2008.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: 2024 },
  },
  {
    slug: "phil-spector",
    name: "Phil Spector",
    wikipediaTitle: "Phil_Spector",
    description:
      "Record producer and songwriter. Created the Wall of Sound production technique. Convicted in 2009 of the second-degree murder of actress Lana Clarkson. Died in prison in 2021.",
    alignment: "evil",
    fallback: { birthYear: 1939, deathYear: 2021 },
  },
  {
    slug: "derek-chauvin",
    name: "Derek Chauvin",
    wikipediaTitle: "Derek_Chauvin",
    description:
      "Former Minneapolis police officer. Convicted in 2021 of murdering George Floyd during an arrest in 2020. Sentenced to 22.5 years in state prison and 21 years in federal prison.",
    alignment: "evil",
    fallback: { birthYear: 1976, deathYear: null },
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    wikipediaTitle: "Elon_Musk",
    description:
      "CEO of Tesla, SpaceX, and X (formerly Twitter). Richest person in the world as of 2024. Accused by the SEC of securities fraud in 2018. Faces multiple lawsuits over working conditions and discrimination at Tesla.",
    alignment: "evil",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    wikipediaTitle: "Mark_Zuckerberg",
    description:
      "CEO and co-founder of Meta (formerly Facebook). Platform has been criticized for facilitating genocide in Myanmar, spreading misinformation, and harming teen mental health.",
    alignment: "evil",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "jeff-bezos",
    name: "Jeff Bezos",
    wikipediaTitle: "Jeff_Bezos",
    description:
      "Founder and executive chairman of Amazon. Richest person in the world from 2017 to 2021. Criticized for Amazon's labor practices, anti-union activities, and tax avoidance.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "bill-gates",
    name: "Bill Gates",
    wikipediaTitle: "Bill_Gates",
    description:
      "Co-founder of Microsoft. Built a monopoly through anti-competitive practices, resulting in a landmark antitrust case in 2001. Later a philanthropist through the Gates Foundation. Accused of inappropriate workplace relationships at Microsoft.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    wikipediaTitle: "Warren_Buffett",
    description:
      "CEO of Berkshire Hathaway and one of the wealthiest people in history. Known for value investing. Criticized for Berkshire's tax minimization strategies and investments in fossil fuels and predatory lending.",
    alignment: "evil",
    fallback: { birthYear: 1930, deathYear: null },
  },
  {
    slug: "tim-cook",
    name: "Tim Cook",
    wikipediaTitle: "Tim_Cook",
    description:
      "CEO of Apple since 2011. Presided over the company becoming the first trillion-dollar corporation. Criticized for Apple's labor practices in China, App Store monopoly allegations, and privacy compromises in China.",
    alignment: "evil",
    fallback: { birthYear: 1960, deathYear: null },
  },
  {
    slug: "steve-jobs",
    name: "Steve Jobs",
    wikipediaTitle: "Steve_Jobs",
    description:
      "Co-founder and CEO of Apple. Fired from Apple in 1985, returned in 1997 and led the company's turnaround. Known for abusive management style and denying paternity of his first child. Died of pancreatic cancer in 2011.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: 2011 },
  },
  {
    slug: "elizabeth-holmes",
    name: "Elizabeth Holmes",
    wikipediaTitle: "Elizabeth_Holmes",
    description:
      "Founder and CEO of Theranos. Convicted in 2022 of criminal fraud for falsely claiming her blood-testing technology could run hundreds of tests from a single drop of blood. Sentenced to 11 years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "sam-bankman-fried",
    name: "Sam Bankman-Fried",
    wikipediaTitle: "Sam_Bankman-Fried",
    description:
      "Founder and CEO of FTX cryptocurrency exchange. Convicted in 2023 of fraud, conspiracy, and money laundering for stealing billions in customer funds. Sentenced to 25 years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1992, deathYear: null },
  },
  {
    slug: "john-d-rockefeller",
    name: "John D. Rockefeller",
    wikipediaTitle: "John_D._Rockefeller",
    description:
      "Founder of the Standard Oil Company. Built a monopoly controlling 90% of American oil production. Company's anti-competitive practices led to the Sherman Antitrust Act and its eventual breakup in 1911.",
    alignment: "evil",
    fallback: { birthYear: 1839, deathYear: 1937 },
  },
  {
    slug: "allen-stanford",
    name: "Allen Stanford",
    wikipediaTitle: "Allen_Stanford",
    description:
      "Financier and cricket promoter. Convicted in 2012 of running a $7 billion Ponzi scheme through Stanford International Bank. Sentenced to 110 years in prison.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "bernie-madoff",
    name: "Bernie Madoff",
    wikipediaTitle: "Bernie_Madoff",
    description:
      "Former stockbroker and investment advisor. Orchestrated the largest Ponzi scheme in history, defrauding thousands of investors of approximately $64.8 billion. Died in prison in 2021.",
    alignment: "evil",
    fallback: { birthYear: 1938, deathYear: 2021 },
  },
  {
    slug: "martin-shkreli",
    name: "Martin Shkreli",
    wikipediaTitle: "Martin_Shkreli",
    description:
      "Former pharmaceutical CEO. Raised the price of Daraprim by 5,000% overnight. Convicted in 2017 of securities fraud unrelated to the price hike.",
    alignment: "evil",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "benjamin-netanyahu",
    name: "Benjamin Netanyahu",
    wikipediaTitle: "Benjamin_Netanyahu",
    description:
      "Israeli politician who has served as Prime Minister of Israel for multiple terms totaling over 15 years. Overseeing the expansion of Israeli settlements, a controversial judicial overhaul, and military operations in Gaza that have killed tens of thousands of civilians.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/330px-Benjamin_Netanyahu%2C_February_2023.jpg" },
  },
  {
    slug: "bob-marley",
    name: "Bob Marley",
    wikipediaTitle: "Bob_Marley",
    description:
      "Jamaican singer-songwriter and musician who became a global reggae icon. Pioneered the genre's international popularity with hits like 'No Woman, No Cry' and 'Redemption Song.' Advocated for peace, unity, and social justice through his music until his death from cancer in 1981.",
    alignment: "good",
    fallback: { birthYear: 1945, deathYear: 1981, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bob_Marley_1976_press_photo.jpg/330px-Bob_Marley_1976_press_photo.jpg" },
  },
  {
    slug: "michelle-obama",
    name: "Michelle Obama",
    wikipediaTitle: "Michelle_Obama",
    description:
      "Michelle Obama is an accomplished attorney, bestselling author, and advocate who served as First Lady of the United States from 2009 to 2017. She launched influential initiatives advancing childhood nutrition, education access, and military family support, and her memoir *Becoming* became one of the best-selling books of its kind. A graduate of Princeton University and Harvard Law School, she is celebrated globally for her eloquence, leadership, and steadfast commitment to empowering women and girls.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/330px-Michelle_Obama_2013_official_portrait.jpg" },
  },
  {
    slug: "robert-downey-jr",
    name: "Robert Downey Jr.",
    wikipediaTitle: "Robert_Downey_Jr.",
    description:
      "Robert Downey Jr. is an acclaimed American actor renowned for his remarkable versatility and commanding screen presence across a wide spectrum of film roles. His performances have helped drive his films to gross over $14.3 billion worldwide, establishing him as one of the highest-grossing actors in cinematic history. He is the recipient of numerous prestigious honors, including an Academy Award, three Golden Globe Awards, and two British Academy Film Awards, reflecting his exceptional talent and enduring impact on the entertainment industry.",
    alignment: "good",
    fallback: { birthYear: 1965, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Robert_Downey_Jr._2014_Comic-Con.jpg/330px-Robert_Downey_Jr._2014_Comic-Con.jpg" },
  },
  {
    slug: "god-in-christianity",
    name: "God in Christianity",
    wikipediaTitle: "God_in_Christianity",
    description:
      "God is dead. God remains dead. And we have killed him. -Friedrich Nietzsche",
    alignment: "evil",
    fallback: { birthYear: null, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/By_Dore%2C_Gustave%3B_La_Sainte_Trinite.jpg/330px-By_Dore%2C_Gustave%3B_La_Sainte_Trinite.jpg" },
  },
];

for (const person of SEED) {
  const expected = slugify(person.name);
  if (person.slug !== expected) {
    throw new Error(
      `Seed slug mismatch for "${person.name}": expected "${expected}", got "${person.slug}"`,
    );
  }
}

const BY_SLUG: ReadonlyMap<string, SeedPerson> = new Map(
  SEED.map((p) => [p.slug, p]),
);

export function getAllPeople(): ReadonlyArray<SeedPerson> {
  return SEED;
}

export function getPersonBySlug(slug: string): SeedPerson | null {
  return BY_SLUG.get(slug) ?? null;
}

export function findPersonByName(query: string): SeedPerson | null {
  const target = slugify(query);
  if (!target) return null;
  return BY_SLUG.get(target) ?? null;
}
