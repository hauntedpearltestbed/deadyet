import type { SeedPerson } from "./types";
import { slugify } from "./slugify";

const SEED: ReadonlyArray<SeedPerson> = [
  {
    slug: "adolf-hitler",
    name: "Adolf Hitler",
    wikipediaTitle: "Adolf_Hitler",
    description:
      "Adolf Hitler was the dictator of Germany from 1933 to 1945 who orchestrated the Holocaust, the genocide of approximately six million Jews and millions of other victims. He initiated the Second World War by invading Poland in 1939, unleashing a global conflict that caused tens of millions of deaths and widespread devastation. Under his direction, the Nazi regime systematically perpetrated crimes against humanity, aggressive warfare, and racial persecution.",
    alignment: "evil",
    fallback: { birthYear: 1889, deathYear: 1945 },
  },
  {
    slug: "joseph-stalin",
    name: "Joseph Stalin",
    wikipediaTitle: "Joseph_Stalin",
    description:
      "Joseph Stalin was a Soviet dictator responsible for the deaths of millions through forced collectivization and state-imposed famines, including the Holodomor, while the Great Terror executed and imprisoned vast numbers in the Gulag system. He consolidated totalitarian power through mass purges, ethnic deportations, and ruthless political repression, establishing one of the 20th century's most brutal and deadly regimes.",
    alignment: "evil",
    fallback: { birthYear: 1878, deathYear: 1953 },
  },
  {
    slug: "pol-pot",
    name: "Pol Pot",
    wikipediaTitle: "Pol_Pot",
    description:
      "Pol Pot was the dictator of Cambodia who led the Khmer Rouge regime from 1975 to 1979, converting the country into a totalitarian one-party state. Under his rule, the Khmer Rouge perpetrated the Cambodian genocide, systematically executing and starving an estimated 1.5 to 2 million people—roughly a quarter of the nation's population. His brutal policies of forced urban evacuation, slave labor, and mass murder established him as one of the most murderous despots in modern history.",
    alignment: "evil",
    fallback: { birthYear: 1925, deathYear: 1998 },
  },
  {
    slug: "idi-amin",
    name: "Idi Amin",
    wikipediaTitle: "Idi_Amin",
    description:
      "Idi Amin overthrew Ugandan President Milton Obote in a 1971 coup and ruled as a dictator whose administration carried out mass killings and widespread human rights abuses while collapsing the national economy. He was ousted in 1979 after launching an unsuccessful war on Tanzania that ended his brutal reign.",
    alignment: "evil",
    fallback: { birthYear: 1925, deathYear: 2003 },
  },
  {
    slug: "jeffrey-dahmer",
    name: "Jeffrey Dahmer",
    wikipediaTitle: "Jeffrey_Dahmer",
    description:
      "Jeffrey Dahmer, also known as the Milwaukee Cannibal and the Milwaukee Monster, was an American serial killer and sex offender who murdered and dismembered seventeen men and boys between 1978 and 1991, committing acts of necrophilia and cannibalism. He preserved victims' body parts as grotesque trophies, embodying one of the most horrific and depraved crime sprees in American history.",
    alignment: "evil",
    fallback: { birthYear: 1960, deathYear: 1994 },
  },
  {
    slug: "charles-manson",
    name: "Charles Manson",
    wikipediaTitle: "Charles_Manson",
    description:
      "Charles Manson was an American criminal and cult leader who founded the Manson Family and ordered the 1969 Tate–LaBianca murders in Los Angeles. His followers carried out these killings, murdering nine people in a series of brutal home invasions at his direction. He was convicted of first-degree murder and conspiracy to commit murder for orchestrating the atrocities.",
    alignment: "evil",
    fallback: { birthYear: 1934, deathYear: 2017 },
  },
  {
    slug: "henry-kissinger",
    name: "Henry Kissinger",
    wikipediaTitle: "Henry_Kissinger",
    description:
      "Henry Kissinger orchestrated the secret bombing of Cambodia that killed tens of thousands of civilians, backed Pakistan's brutal crackdown in Bangladesh, and authorized illegal wiretaps on American officials and journalists. He supported the overthrow of Chile's democratically elected government in 1973 and enabled Indonesia's deadly invasion of East Timor, consistently prioritizing strategic alliances with authoritarian regimes over human rights.",
    alignment: "evil",
    fallback: { birthYear: 1923, deathYear: 2023 },
  },
  {
    slug: "leopold-ii-of-belgium",
    name: "Leopold II of Belgium",
    wikipediaTitle: "Leopold_II_of_Belgium",
    description:
      "Leopold II established and personally owned the Congo Free State, where his regime enforced a brutal system of forced labor that resulted in the deaths of millions of Congolese through murder, starvation, and disease. He authorized the cutting off of hands and other atrocities to terrorize the population into extracting rubber and ivory, making his rule one of history's deadliest colonial enterprises until international pressure forced Belgium to take control in 1908.",
    alignment: "evil",
    fallback: { birthYear: 1835, deathYear: 1909 },
  },
  {
    slug: "donald-trump",
    name: "Donald Trump",
    wikipediaTitle: "Donald_Trump",
    description:
      "Donald Trump is the first U.S. president convicted of felony crimes, having been found guilty on 34 counts of falsifying business records to conceal hush money payments, and the only president impeached twice by the House of Representatives for abuse of power and incitement of insurrection. He was found liable in civil court for sexual abuse and defamation, and promoted baseless claims of election fraud that fueled the violent January 6, 2021 attack on the U.S. Capitol by his supporters.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/c5/Donald_Trump_mug_shot.jpg" },
  },
  {
    slug: "martin-luther-king-jr",
    name: "Martin Luther King Jr.",
    wikipediaTitle: "Martin_Luther_King_Jr.",
    description:
      "Martin Luther King Jr. was an American Baptist minister and the foremost leader of the civil rights movement from 1955 until his assassination in 1968. He profoundly advanced civil rights for African Americans and other people of color through courageous nonviolent resistance and civil disobedience that challenged Jim Crow laws and dismantled legalized discrimination. His steadfast moral leadership and commitment to peaceful justice transformed American society and established a lasting global legacy for human dignity and equality.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1968 },
  },
  {
    slug: "barack-obama",
    name: "Barack Obama",
    wikipediaTitle: "Barack_Obama",
    description:
      "Barack Obama served as the 44th president of the United States from 2009 to 2017, breaking historic barriers as the first African American elected to the nation's highest office. During his two terms, he championed landmark healthcare reform and guided the nation through economic recovery, continuing a distinguished career of public service that included representing Illinois in the U.S. Senate and state legislature.",
    alignment: "good",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "dolly-parton",
    name: "Dolly Parton",
    wikipediaTitle: "Dolly_Parton",
    description:
      "Dolly Parton is an iconic American singer-songwriter, actress, and philanthropist whose six-decade career has established her as one of the most celebrated and influential figures in country music history. After first achieving success writing songs for other artists, she launched her own recording career in 1967 and has since released 50 studio albums while earning accolades including 11 Grammy Awards, three Emmy Awards, and a humanitarian Academy Award. Known as the \"Queen of Country,\" she is widely revered for her enduring creative legacy, sharp business acumen, and extensive charitable contributions.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "joe-biden",
    name: "Joe Biden",
    wikipediaTitle: "Joe_Biden",
    description:
      "Joseph Robinette Biden Jr. served as the 46th president of the United States from 2021 to 2025, concluding a distinguished five-decade career in federal office that included 36 years representing Delaware in the U.S. Senate and two terms as the 47th vice president under President Barack Obama. Known for his dedication to bipartisan cooperation and diplomatic leadership, he played a significant role in shaping American domestic and foreign policy across multiple administrations. His long tenure in public service reflects a steadfast commitment to governance and national unity.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "kamala-harris",
    name: "Kamala Harris",
    wikipediaTitle: "Kamala_Harris",
    description:
      "Kamala Harris served as the 49th vice president of the United States from 2021 to 2025, making history as the first woman, first African American, and first Asian American to hold the office. She previously represented California in the U.S. Senate and served as the state's attorney general. In 2024, she became the Democratic Party's nominee for president, achieving another historic milestone in her barrier-breaking career in American politics.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "bernie-sanders",
    name: "Bernie Sanders",
    wikipediaTitle: "Bernie_Sanders",
    description:
      "Bernie Sanders is an American politician and activist who has served as a U.S. senator from Vermont since 2007, making him the longest-serving independent in congressional history. A democratic socialist and leading figure in the modern progressive movement, he has spent decades advocating for economic equality, universal healthcare, and social justice while inspiring millions through his 2016 and 2020 presidential campaigns.",
    alignment: "good",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "liz-cheney",
    name: "Liz Cheney",
    wikipediaTitle: "Liz_Cheney",
    description:
      "Elizabeth Lynne Cheney is an American attorney and former politician who represented Wyoming in the U.S. House of Representatives from 2017 to 2023, serving as chair of the House Republican Conference from 2019 to 2021. She gained national prominence for her principled dedication to constitutional governance and the rule of law, demonstrating notable political courage through her steadfast defense of democratic institutions during a critical period in American politics.",
    alignment: "good",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "abraham-lincoln",
    name: "Abraham Lincoln",
    wikipediaTitle: "Abraham_Lincoln",
    description:
      "Abraham Lincoln served as the 16th president of the United States from 1861 to 1865, leading the nation through the Civil War and securing the preservation of the Union. He was instrumental in abolishing slavery through the Emancipation Proclamation and advancing the Thirteenth Amendment. Celebrated for his resolute leadership, moral integrity, and powerful oratory, Lincoln is remembered as a pivotal champion of freedom and human equality.",
    alignment: "good",
    fallback: { birthYear: 1809, deathYear: 1865 },
  },
  {
    slug: "john-f-kennedy",
    name: "John F. Kennedy",
    wikipediaTitle: "John_F._Kennedy",
    description:
      "John F. Kennedy served as the 35th president of the United States, making history as the youngest person elected to the office and the first Catholic president. During his presidency at the height of the Cold War, he guided American foreign policy through complex relations with the Soviet Union and Cuba, demonstrating steady leadership during a pivotal era. Prior to the White House, he represented Massachusetts in both houses of Congress, building a career marked by dedicated public service.",
    alignment: "good",
    fallback: { birthYear: 1917, deathYear: 1963 },
  },
  {
    slug: "franklin-d-roosevelt",
    name: "Franklin D. Roosevelt",
    wikipediaTitle: "Franklin_D._Roosevelt",
    description:
      "Franklin D. Roosevelt served as the 32nd president of the United States from 1933 until his death in 1945, making him the longest-serving president in the nation’s history. He spearheaded sweeping federal initiatives to combat the Great Depression, delivering economic relief and renewed hope to millions of Americans, and later provided decisive leadership during World War II that helped guide the Allies to victory. His enduring dedication to public welfare and his steady stewardship through two of the country’s gravest crises solidified his legacy as a transformative and resilient leader.",
    alignment: "good",
    fallback: { birthYear: 1882, deathYear: 1945 },
  },
  {
    slug: "winston-churchill",
    name: "Winston Churchill",
    wikipediaTitle: "Winston_Churchill",
    description:
      "Sir Winston Churchill was a British statesman, military officer, and writer who served as Prime Minister of the United Kingdom from 1940 to 1945 during the Second World War, providing resolute leadership through one of the 20th century's gravest crises, and again from 1951 to 1955. He dedicated over six decades to public service as a Member of Parliament for 62 years between 1900 and 1964, representing five constituencies with remarkable commitment to national governance. As leader of the Conservative Party from 1940 to 1955, he guided the country through turbulent historic periods and demonstrated extraordinary longevity and influence in British political life.",
    alignment: "good",
    fallback: { birthYear: 1874, deathYear: 1965 },
  },
  {
    slug: "nelson-mandela",
    name: "Nelson Mandela",
    wikipediaTitle: "Nelson_Mandela",
    description:
      "Nelson Mandela was a South African anti-apartheid revolutionary and statesman who became the country’s first Black head of state and its first democratically elected president in a fully representative election. As president from 1994 to 1999, he dismantled the legacy of apartheid and championed racial reconciliation, national peace, and multiracial democracy. His leadership of the African National Congress and lifelong dedication to justice and equality established him as a global icon of freedom and human dignity.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 2013 },
  },
  {
    slug: "ruth-bader-ginsburg",
    name: "Ruth Bader Ginsburg",
    wikipediaTitle: "Ruth_Bader_Ginsburg",
    description:
      "Ruth Bader Ginsburg served as an Associate Justice of the Supreme Court of the United States from 1993 until her death in 2020, distinguished as the first Jewish woman and the second woman ever to serve on the Court. She authored influential majority opinions that advanced gender equality, disability rights, and environmental protections, and later earned widespread admiration for her powerful, meticulously reasoned dissents defending liberal constitutional principles. Throughout her tenure, she was celebrated for her brilliant legal mind, tireless work ethic, and unwavering dedication to expanding justice and equal rights under the law.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: 2020 },
  },
  {
    slug: "jimmy-carter",
    name: "Jimmy Carter",
    wikipediaTitle: "Jimmy_Carter",
    description:
      "Jimmy Carter served as the 39th president of the United States and was the longest-lived president in American history, reaching age 100. After leaving office, he founded the Carter Center and became a celebrated humanitarian, earning the 2002 Nobel Peace Prize for advancing global peace, human rights, and public health. His enduring dedication to diplomacy, democratic elections, and affordable housing established a remarkable standard for post-presidential service and compassionate leadership.",
    alignment: "good",
    fallback: { birthYear: 1924, deathYear: 2024 },
  },
  {
    slug: "dwight-d-eisenhower",
    name: "Dwight D. Eisenhower",
    wikipediaTitle: "Dwight_D._Eisenhower",
    description:
      "Dwight D. Eisenhower served as the 34th president of the United States from 1953 to 1961, bringing distinguished military leadership and steady stewardship to the nation. As General of the Army and supreme commander of the Allied Expeditionary Force, he directed the pivotal Operation Torch and Operation Overlord campaigns, securing the Allied victory in World War II through strategic brilliance and decisive coalition command.",
    alignment: "good",
    fallback: { birthYear: 1890, deathYear: 1969 },
  },
  {
    slug: "tom-hanks",
    name: "Tom Hanks",
    wikipediaTitle: "Tom_Hanks",
    description:
      "Tom Hanks is an iconic American actor and filmmaker renowned for his masterful performances across both comedic and dramatic roles, making him one of the most celebrated and recognizable stars in global cinema history. Ranked among the highest-grossing American actors of all time, he has earned two Academy Awards, seven Emmy Awards, and four Golden Globe Awards, reflecting an extraordinary career defined by critical and commercial success. His profound contributions to film and American culture have been honored with the Presidential Medal of Freedom, the Kennedy Center Honor, and the AFI Life Achievement Award, cementing his legacy as one of the entertainment industry's most revered figures.",
    alignment: "good",
    fallback: { birthYear: 1956, deathYear: null },
  },
  {
    slug: "denzel-washington",
    name: "Denzel Washington",
    wikipediaTitle: "Denzel_Washington",
    description:
      "Denzel Washington is an acclaimed American actor, producer, and director celebrated for his commanding dramatic performances across stage and screen. He is a two-time Academy Award winner and Tony Award recipient who has been hailed as one of the most distinguished performers of his generation, notably being named the greatest actor of the 21st century by The New York Times. His films have grossed over $5.1 billion worldwide, and his extraordinary contributions to entertainment have been recognized with the Cecil B. DeMille Award, the AFI Life Achievement Award, the Honorary Palme d'Or, and the Presidential Medal of Freedom.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "keanu-reeves",
    name: "Keanu Reeves",
    wikipediaTitle: "Keanu_Reeves",
    description:
      "Keanu Reeves is a celebrated Canadian actor and musician whose versatile career spanning four decades has earned him numerous accolades and critical recognition, including being ranked by The New York Times as one of the greatest actors of the 21st century. Renowned for his iconic leading roles in blockbuster action films and his genuinely kind public persona, he has also dedicated himself to extensive philanthropic efforts that have positively impacted many lives. In 2022, Time magazine recognized his profound cultural influence by naming him one of the 100 most influential people in the world.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "clint-eastwood",
    name: "Clint Eastwood",
    wikipediaTitle: "Clint_Eastwood",
    description:
      "Clint Eastwood is an iconic American actor, filmmaker, and musician who rose to global fame starring in the *Dollars Trilogy* and *Dirty Harry* films, leaving an indelible mark on cinema across multiple decades. He has earned widespread acclaim as a director and producer, and served two years as mayor of Carmel-by-the-Sea, California, reflecting a deep commitment to both artistic excellence and civic engagement.",
    alignment: "good",
    fallback: { birthYear: 1930, deathYear: null },
  },
  {
    slug: "morgan-freeman",
    name: "Morgan Freeman",
    wikipediaTitle: "Morgan_Freeman",
    description:
      "Morgan Freeman is an iconic American actor, producer, and narrator whose distinguished six-decade career has earned him an Academy Award, a Golden Globe, and the industry's most prestigious lifetime achievement honors, including the Cecil B. DeMille, AFI, and Screen Actors Guild Life Achievement Awards. Celebrated for his commanding screen presence and versatile performances, he received the Kennedy Center Honor in 2008 and was voted one of the 50 greatest actors of all time by Empire readers in 2022.",
    alignment: "good",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "robert-de-niro",
    name: "Robert De Niro",
    wikipediaTitle: "Robert_De_Niro",
    description:
      "Robert De Niro is an acclaimed American actor, director, and producer widely regarded as one of the most influential performers in film history. He has earned two Academy Awards, a Golden Globe Award, and numerous other honors, including the Presidential Medal of Freedom and the AFI Life Achievement Award, reflecting his extraordinary contributions to cinema. Across decades of transformative performances and creative leadership, he has set enduring standards for artistic excellence and dedication to his craft.",
    alignment: "good",
    fallback: { birthYear: 1943, deathYear: null },
  },
  {
    slug: "al-pacino",
    name: "Al Pacino",
    wikipediaTitle: "Al_Pacino",
    description:
      "Alfredo James Pacino is an acclaimed American actor celebrated for his intense, captivating performances across stage and screen over more than five decades. He is widely regarded as one of the greatest actors of all time and has achieved the rare Triple Crown of Acting, winning an Academy Award, two Tony Awards, and two Primetime Emmy Awards. His influential body of work has earned him numerous honors including the AFI Life Achievement Award and the Kennedy Center Honors, while his films have grossed over $3 billion worldwide.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: null },
  },
  {
    slug: "samuel-l-jackson",
    name: "Samuel L. Jackson",
    wikipediaTitle: "Samuel_L._Jackson",
    description:
      "Samuel L. Jackson is an American actor and producer whose films have collectively grossed over $27 billion worldwide, making him the highest-grossing actor of all time. One of the most widely recognized performers of his generation, he has created a vast body of dynamic, genre-spanning work that has resonated with global audiences. In 2022, he received the Academy Honorary Award in recognition of his extraordinary impact and status as a cultural icon.",
    alignment: "good",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "harrison-ford",
    name: "Harrison Ford",
    wikipediaTitle: "Harrison_Ford",
    description:
      "Harrison Ford is an iconic American actor regarded as a cinematic cultural icon, whose acclaimed performances have earned him nominations for an Academy Award, an Emmy Award, five Golden Globes, and two Screen Actors Guild Awards. He has received the entertainment industry's most prestigious lifetime honors, including the AFI Life Achievement Award, the Cecil B. DeMille Award, the Honorary Palme d'Or, and the SAG-AFTRA Life Achievement Award, cementing his status as one of film history's most revered performers.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "paul-mccartney",
    name: "Paul McCartney",
    wikipediaTitle: "Paul_McCartney",
    description:
      "Sir Paul McCartney is an English musician and songwriter who rose to global fame as a bassist, keyboardist, and vocalist with the Beatles, co-creating the most successful songwriting partnership in music history with John Lennon. Celebrated for his melodic bass lines, versatile tenor voice, and wide-ranging musical curiosity, he has explored genres spanning classical, electronica, and ballads across an iconic, decades-long career. His exceptional creativity and enduring influence have established him as one of the most accomplished and beloved figures in popular music.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "elton-john",
    name: "Elton John",
    wikipediaTitle: "Elton_John",
    description:
      "Sir Elton John is a British singer, songwriter, and pianist whose dynamic showmanship and prolific catalog have profoundly shaped popular music. His decades-long songwriting partnership with lyricist Bernie Taupin stands as one of the most successful and enduring creative collaborations in history. One of the best-selling music artists of all time with over 300 million records sold, he is also an EGOT winner, having earned Emmy, Grammy, Oscar, and Tony awards for his wide-ranging artistic contributions.",
    alignment: "good",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "taylor-swift",
    name: "Taylor Swift",
    wikipediaTitle: "Taylor_Swift",
    description:
      "Taylor Swift is an American singer-songwriter whose deeply autobiographical songwriting and bold artistic reinventions have made her one of the most influential figures in popular culture. As one of the best-selling music artists of all time, she is also the highest-grossing live music artist and the wealthiest female musician, underscoring her unmatched global resonance and creative longevity.",
    alignment: "good",
    fallback: { birthYear: 1989, deathYear: null },
  },
  {
    slug: "beyonce",
    name: "Beyoncé",
    wikipediaTitle: "Beyoncé",
    description:
      "Beyoncé is an American singer, songwriter, actress, and businesswoman whose powerful vocals, continual artistic reinvention, and commanding live performances have established her among the greatest entertainers of all time. She is widely credited with shaping popular music and stands as one of the most culturally significant figures of the 21st century, setting enduring standards for creative excellence and cultural influence.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "oprah-winfrey",
    name: "Oprah Winfrey",
    wikipediaTitle: "Oprah_Winfrey",
    description:
      "Oprah Winfrey is an American media executive, talk show host, and philanthropist best known for creating and hosting *The Oprah Winfrey Show*, which ran for 25 years and became one of the most influential programs in television history. Dubbed the \"Queen of All Media,\" she built a pioneering entertainment empire that made her the richest Black woman of the 20th century and one of the most influential women in the world. Through her groundbreaking career and extensive philanthropy, she has used her platform to inspire millions, promote education, and amplify underrepresented voices.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "david-bowie",
    name: "David Bowie",
    wikipediaTitle: "David_Bowie",
    description:
      "David Bowie was an English singer, songwriter, and actor widely regarded as one of the most influential musicians of the 20th century. Celebrated particularly for his groundbreaking work in the 1970s, he continually reinvented his artistry and visual presentation, pioneering innovative standards in popular music and stagecraft that inspired generations of artists.",
    alignment: "good",
    fallback: { birthYear: 1947, deathYear: 2016 },
  },
  {
    slug: "freddie-mercury",
    name: "Freddie Mercury",
    wikipediaTitle: "Freddie_Mercury",
    description:
      "Freddie Mercury was a British singer, songwriter, and pianist who achieved worldwide acclaim as the dynamic frontman of the rock band Queen, captivating audiences with his extraordinary four-octave vocal range and theatrical stage presence. Widely regarded as one of the greatest rock vocalists in history, he redefined the possibilities of a lead performer through his flamboyant artistry and bold creative vision, profoundly shaping Queen's iconic sound and enduring legacy.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: 1991 },
  },
  {
    slug: "john-lennon",
    name: "John Lennon",
    wikipediaTitle: "John_Lennon",
    description:
      "John Lennon was an English musician, songwriter, and activist who achieved worldwide fame as a founding member, co-lead vocalist, and rhythm guitarist of the Beatles. His songwriting partnership with Paul McCartney remains the most successful in history, producing an extraordinary catalogue of music that transformed popular culture. Through his enduring artistic contributions and advocacy, Lennon inspired millions and left a profound legacy as one of the most influential figures in modern music.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: 1980 },
  },
  {
    slug: "robin-williams",
    name: "Robin Williams",
    wikipediaTitle: "Robin_Williams",
    description:
      "Robin Williams was an American actor and comedian regarded as one of the greatest comedians of all time, celebrated for his extraordinary improvisational skills and the remarkable range of characters he brought to life in both dramatic and comedic films. He received numerous prestigious accolades throughout his distinguished career, including an Academy Award, two Primetime Emmy Awards, six Golden Globe Awards, five Grammy Awards, and the 2005 Cecil B. DeMille Award, reflecting his profound and lasting impact on the entertainment industry.",
    alignment: "good",
    fallback: { birthYear: 1951, deathYear: 2014 },
  },
  {
    slug: "audrey-hepburn",
    name: "Audrey Hepburn",
    wikipediaTitle: "Audrey_Hepburn",
    description:
      "Audrey Hepburn was a British actress and humanitarian ranked by the American Film Institute as the third-greatest female screen legend of Classical Hollywood. She achieved the rare distinction of winning competitive Academy, Emmy, Grammy, and Tony Awards, and her timeless elegance earned her induction into the International Best Dressed Hall of Fame. Beyond her luminous film and fashion legacy, she devoted her life to humanitarian service, embodying grace, artistry, and profound global compassion.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1993 },
  },
  {
    slug: "charlie-chaplin",
    name: "Charlie Chaplin",
    wikipediaTitle: "Charlie_Chaplin",
    description:
      "Charles Chaplin was an English comic actor, filmmaker, and composer who became one of cinema's most important figures through his iconic silent-film character, the Tramp. During a career spanning over 75 years, he revolutionized the film industry with his innovative storytelling, physical comedy, and musical compositions. His timeless artistry and universal appeal established him as a pioneering entertainer whose work continues to influence global popular culture.",
    alignment: "good",
    fallback: { birthYear: 1889, deathYear: 1977 },
  },
  {
    slug: "betty-white",
    name: "Betty White",
    wikipediaTitle: "Betty_White",
    description:
      "Betty White was a pioneering American actress and comedian whose nearly seven-decade career established her as one of television's most beloved and enduring stars. A trailblazer in early television, she amassed an expansive body of work across sitcoms, sketch comedy, and game shows, earning widespread admiration for her versatility and sharp comedic talent. Her remarkable longevity, professionalism, and genuine warmth made her a cherished icon who entertained and inspired generations of viewers.",
    alignment: "good",
    fallback: { birthYear: 1922, deathYear: 2021 },
  },
  {
    slug: "marlon-brando",
    name: "Marlon Brando",
    wikipediaTitle: "Marlon_Brando",
    description:
      "Marlon Brando was a transformative American actor whose powerful performances earned him two Academy Awards, two Golden Globes, three BAFTAs, a Cannes Film Festival Award, and a Primetime Emmy Award. Widely considered among the greatest screen performers in history, he pioneered the introduction of Stanislavski's system and method acting to mainstream film audiences. His innovative approach to acting profoundly shaped modern cinema and influenced countless performers worldwide.",
    alignment: "good",
    fallback: { birthYear: 1924, deathYear: 2004 },
  },
  {
    slug: "lebron-james",
    name: "LeBron James",
    wikipediaTitle: "LeBron_James",
    description:
      "LeBron James is an American professional basketball player for the Los Angeles Lakers who is widely considered one of the greatest athletes in the history of the sport. He holds the distinction of being the NBA's all-time leading scorer and has captured four NBA championships across ten Finals appearances, including an unprecedented eight consecutive appearances from 2011 to 2018. A dominant force on the international stage as well, he has earned three Olympic gold medals representing the United States national team.",
    alignment: "good",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "michael-jordan",
    name: "Michael Jordan",
    wikipediaTitle: "Michael_Jordan",
    description:
      "Michael Jordan is widely regarded as one of the greatest basketball players of all time, winning six NBA championships with the Chicago Bulls during his 15-season career and earning global acclaim for his extraordinary athleticism and competitive drive. He played a pivotal role in popularizing basketball and the NBA worldwide throughout the 1980s and 1990s, transforming the sport into a global phenomenon. Beyond his playing career, he has built a highly successful business empire and remains one of the wealthiest and most influential athletes in history.",
    alignment: "good",
    fallback: { birthYear: 1963, deathYear: null },
  },
  {
    slug: "serena-williams",
    name: "Serena Williams",
    wikipediaTitle: "Serena_Williams",
    description:
      "Serena Williams is an American former professional tennis player widely regarded as one of the greatest athletes in history. She spent 319 weeks ranked as the world No. 1 and captured 23 major women’s singles titles, the most in the Open Era, while uniquely achieving a career Golden Slam in both singles and doubles. Her dominant playing style, relentless competitive spirit, and decades of sustained excellence redefined women’s tennis and inspired generations of athletes around the globe.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "simone-biles",
    name: "Simone Biles",
    wikipediaTitle: "Simone_Biles",
    description:
      "Simone Biles is an American artistic gymnast whose 11 Olympic medals and 30 World Championship medals make her the most decorated gymnast in history. She holds the record for most Olympic medals earned by a U.S. gymnast and is widely celebrated as one of the greatest gymnasts and female athletes of all time, setting an unparalleled standard of excellence in her sport.",
    alignment: "good",
    fallback: { birthYear: 1997, deathYear: null },
  },
  {
    slug: "muhammad-ali",
    name: "Muhammad Ali",
    wikipediaTitle: "Muhammad_Ali",
    description:
      "Muhammad Ali was an American professional boxer and activist widely regarded as the greatest heavyweight boxer of all time, earning the nickname \"the Greatest\" through his extraordinary ring career. He held multiple world heavyweight championships across three decades, including the Ring magazine title from 1964 to 1970 and the undisputed championship from 1974 to 1978. A global cultural icon celebrated for his athletic brilliance and principled activism, he was named Sportsman of the Century by Sports Illustrated and Sports Personality of the Century by the BBC in 1999.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: 2016 },
  },
  {
    slug: "kobe-bryant",
    name: "Kobe Bryant",
    wikipediaTitle: "Kobe_Bryant",
    description:
      "Kobe Bryant was an American professional basketball player who spent his entire 20-year career with the Los Angeles Lakers, establishing himself as one of the most accomplished and influential athletes in NBA history. He won five NBA championships, earned 18 All-Star selections, and received numerous accolades including the 2008 MVP award and two Finals MVP awards, while ranking among the league's all-time leading scorers. A two-time inductee into the Naismith Memorial Basketball Hall of Fame and a member of the NBA 75th Anniversary Team, Bryant's relentless work ethic and competitive excellence left a lasting legacy on the sport.",
    alignment: "good",
    fallback: { birthYear: 1978, deathYear: 2020 },
  },
  {
    slug: "george-w-bush",
    name: "George W. Bush",
    wikipediaTitle: "George_W._Bush",
    description:
      "George W. Bush launched the 2003 invasion of Iraq based on intelligence later discredited, triggering a prolonged war that caused hundreds of thousands of civilian deaths and regional destabilization. His administration authorized enhanced interrogation techniques widely condemned as torture, maintained extrajudicial detention at Guantanamo Bay, and faced severe criticism for its negligent response to Hurricane Katrina. He also expanded warrantless domestic surveillance under the USA PATRIOT Act and left office amid the worst economic crisis since the Great Depression.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "dick-cheney",
    name: "Dick Cheney",
    wikipediaTitle: "Dick_Cheney",
    description:
      "Dick Cheney served as Vice President from 2001 to 2009 and was the driving force behind the Bush administration's invasion of Iraq based on discredited claims of weapons of mass destruction, launching a catastrophic war that killed hundreds of thousands of civilians and destabilized the Middle East. He was a leading advocate for the CIA's use of torture, known as \"enhanced interrogation,\" supported warrantless domestic surveillance, and consolidated unprecedented executive authority while his former company, Halliburton, received billions in no-bid government contracts related to the conflict.",
    alignment: "evil",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "richard-nixon",
    name: "Richard Nixon",
    wikipediaTitle: "Richard_Nixon",
    description:
      "Richard Nixon was the 37th president of the United States whose tenure ended in disgrace when the Watergate scandal—a criminal conspiracy involving burglary, wiretapping, and obstruction of justice—forced him to become the only president to resign from office. He secretly ordered the bombing of Cambodia and military incursions into Laos while publicly claiming to reduce American involvement in Vietnam, deliberately deceiving Congress and the public about the war's expansion. His administration also maintained an explicit \"enemies list\" and weaponized federal agencies to harass, surveil, and punish political opponents and journalists through tax audits and covert operations.",
    alignment: "evil",
    fallback: { birthYear: 1913, deathYear: 1994 },
  },
  {
    slug: "andrew-jackson",
    name: "Andrew Jackson",
    wikipediaTitle: "Andrew_Jackson",
    description:
      "Andrew Jackson signed the Indian Removal Act, forcibly expelling tens of thousands of Native Americans from their southeastern homelands and causing thousands of deaths during the Trail of Tears, while openly refusing to enforce a Supreme Court decision protecting tribal sovereignty. He was a lifelong slaveholder who expanded the political power of slavery and brutally suppressed abolitionist efforts. His dismantling of the Second Bank of the United States precipitated a catastrophic economic depression, and he entrenched the spoils system, corrupting the federal bureaucracy by filling offices with unqualified political loyalists.",
    alignment: "evil",
    fallback: { birthYear: 1767, deathYear: 1845 },
  },
  {
    slug: "j-edgar-hoover",
    name: "J. Edgar Hoover",
    wikipediaTitle: "J._Edgar_Hoover",
    description:
      "J. Edgar Hoover served as director of the FBI and its predecessor for 48 years, during which he illegally surveilled and orchestrated smear campaigns against civil rights leaders, political activists, and dissidents through the covert COINTELPRO program. He maintained secret dossiers to blackmail presidents and politicians, authorized warrantless wiretaps and break-ins, and transformed the bureau into an instrument of political repression and personal vendetta.",
    alignment: "evil",
    fallback: { birthYear: 1895, deathYear: 1972 },
  },
  {
    slug: "boris-johnson",
    name: "Boris Johnson",
    wikipediaTitle: "Boris_Johnson",
    description:
      "Boris Johnson was fined by police for violating COVID-19 lockdown rules he imposed on the public while Prime Minister, and a parliamentary inquiry found he deliberately misled lawmakers about the breaches. The UK Supreme Court unanimously ruled his 2019 suspension of Parliament unlawful, while his tenure was defined by cronyism in government contracting, a history of racist and inflammatory newspaper columns, and a pattern of dishonesty that forced his resignation amid mass ministerial defections.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "nigel-farage",
    name: "Nigel Farage",
    wikipediaTitle: "Nigel_Farage",
    description:
      "Nigel Farage was a principal architect of the Brexit campaign, during which affiliated groups he backed were found by UK electoral authorities to have broken campaign finance laws and spread disinformation. In 2023, the European Union's General Court ordered him to repay misused EU parliamentary funds that had been improperly diverted to support his former party, UKIP. He has built his career on inflammatory anti-immigrant rhetoric that civil rights organizations and political opponents have widely condemned for fueling xenophobia and racial hostility.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "ted-cruz",
    name: "Ted Cruz",
    wikipediaTitle: "Ted_Cruz",
    description:
      "Ted Cruz is an American senator widely condemned for objecting to the certification of the 2020 presidential election and amplifying disproven voter fraud claims that undermined democratic institutions. He provoked widespread outrage by traveling to Cancun during the deadly 2021 Texas winter storm while millions of his constituents were without power or water, and was a primary architect of the 2013 government shutdown that furloughed hundreds of thousands of workers and inflicted billions in economic damage.",
    alignment: "evil",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "ron-desantis",
    name: "Ron DeSantis",
    wikipediaTitle: "Ron_DeSantis",
    description:
      "Ron DeSantis is an American politician who, as Florida governor, enacted laws restricting LGBTQ+ classroom instruction, transgender healthcare, and abortion access, while spending state funds to fly migrants to Martha's Vineyard in a relocation that drew lawsuits and widespread condemnation for deception. His administration targeted Disney and educators over ideological opposition, and his aggressively divisive culture war policies defined his failed 2024 campaign for the Republican presidential nomination.",
    alignment: "evil",
    fallback: { birthYear: 1978, deathYear: null },
  },
  {
    slug: "mitch-mcconnell",
    name: "Mitch McConnell",
    wikipediaTitle: "Mitch_McConnell",
    description:
      "Mitch McConnell is an American politician who has served as Kentucky’s senior U.S. senator since 1985 and as Senate Republican leader from 2007 to 2025. He is widely condemned for blocking Merrick Garland’s 2016 Supreme Court nomination while rushing Amy Coney Barrett’s confirmation weeks before the 2020 election, and for systematically using obstructionist tactics to halt legislation, oppose voting rights measures, and consolidate conservative judicial power. (And he looks like a turtle)",
    alignment: "evil",
    fallback: { birthYear: 1942, deathYear: null },
  },
  {
    slug: "newt-gingrich",
    name: "Newt Gingrich",
    wikipediaTitle: "Newt_Gingrich",
    description:
      "Newt Gingrich is an American politician who, as 50th Speaker of the U.S. House of Representatives, became the first speaker to be formally reprimanded and fined by the chamber for ethics violations involving false statements to investigators and misuse of tax-exempt funds. He presided over two major federal government shutdowns and resigned from Congress in 1999 amid significant Republican election losses and mounting internal party opposition.",
    alignment: "evil",
    fallback: { birthYear: 1943, deathYear: null },
  },
  {
    slug: "matt-gaetz",
    name: "Matt Gaetz",
    wikipediaTitle: "Matt_Gaetz",
    description:
      "Matt Gaetz is a former U.S. congressman who resigned in 2024 amid a House Ethics Committee investigation that subsequently found substantial evidence he paid for sex with a minor, used illegal drugs, and obstructed justice. He triggered congressional dysfunction by leading the successful 2023 motion to remove House Speaker Kevin McCarthy, and he regularly promoted far-right extremism and conspiracy theories during his tenure.",
    alignment: "evil",
    fallback: { birthYear: 1982, deathYear: null },
  },
  {
    slug: "rush-limbaugh",
    name: "Rush Limbaugh",
    wikipediaTitle: "Rush_Limbaugh",
    description:
      "Rush Limbaugh was an American conservative radio host whose nationally syndicated program spread climate change denial and COVID-19 misinformation while broadcasting decades of racist, sexist, and homophobic invective, including mocking Michael J. Fox’s Parkinson’s disease and calling law student Sandra Fluke a “slut.” He was arrested in 2006 on felony charges of prescription drug fraud for illegally obtaining thousands of opioid pills, cementing a legacy defined by inflammatory rhetoric and the mainstreaming of political hate speech.",
    alignment: "evil",
    fallback: { birthYear: 1951, deathYear: 2021 },
  },
  {
    slug: "sean-hannity",
    name: "Sean Hannity",
    wikipediaTitle: "Sean_Hannity",
    description:
      "Sean Hannity is an American conservative television and radio host who promoted the debunked conspiracy theory linking murdered DNC staffer Seth Rich to the 2016 WikiLeaks email release, and advanced baseless claims of widespread voter fraud in the 2020 election while privately acknowledging their lack of evidence. He has functioned as both a Fox News broadcaster and an informal advisor to Donald Trump, using his platform to disseminate partisan misinformation that has contributed to political polarization and the erosion of public trust in journalism.",
    alignment: "evil",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "tucker-carlson",
    name: "Tucker Carlson",
    wikipediaTitle: "Tucker_Carlson",
    description:
      "Tucker Carlson spent years using his Fox News platform to promote the white nationalist 'Great Replacement' conspiracy theory, spread lethal COVID-19 misinformation, and broadcast lies about the 2020 election that helped incite the January 6 insurrection. Communications revealed in the Dominion Voting Systems defamation lawsuit exposed that he knowingly deceived his audience about election fraud while privately admitting the claims were baseless, contributing to his termination after Fox settled the case. He has since circulated authoritarian propaganda, notably conducting a widely criticized interview with Vladimir Putin that amplified Kremlin disinformation, while continuing to platform racist, antisemitic, and extremist rhetoric that fuels political violence.",
    alignment: "evil",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "roger-stone",
    name: "Roger Stone",
    wikipediaTitle: "Roger_Stone",
    description:
      "Roger Stone is a political consultant convicted of seven felonies, including witness tampering and lying to Congress, for concealing his efforts to coordinate with WikiLeaks during the 2016 election to aid Donald Trump's campaign. He has sustained a decades-long career built on political dirty tricks, smear campaigns, and unethical influence-peddling dating back to the Nixon administration. After being sentenced to federal prison for his crimes, he avoided serving his full term when President Trump commuted his sentence in 2020.",
    alignment: "evil",
    fallback: { birthYear: 1952, deathYear: null },
  },
  {
    slug: "paul-manafort",
    name: "Paul Manafort",
    wikipediaTitle: "Paul_Manafort",
    description:
      "Paul Manafort built a career lobbying on behalf of authoritarian dictators and foreign strongmen, including Ferdinand Marcos of the Philippines, Mobutu Sese Seko of Zaire, and Ukrainian leader Viktor Yanukovych, alongside Angolan guerrilla leader Jonas Savimbi. He illegally concealed his status as a paid foreign agent for years, retroactively registering under the Foreign Agents Registration Act in 2017 only after his undisclosed work became public.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "steve-bannon",
    name: "Steve Bannon",
    wikipediaTitle: "Steve_Bannon",
    description:
      "Stephen Kevin Bannon is a political strategist convicted of contempt of Congress for refusing to comply with a subpoena investigating the January 6th Capitol attack, and previously indicted on federal fraud charges for allegedly diverting donor funds from the \"We Build the Wall\" campaign. During his tenure as executive chairman of Breitbart News, the outlet promoted white nationalist and extremist viewpoints, and he served seven months as President Donald Trump's chief strategist before being fired.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: null },
  },
  {
    slug: "michael-cohen",
    name: "Michael Cohen",
    wikipediaTitle: "Michael_Cohen_(lawyer)",
    description:
      "Michael Cohen is a disbarred attorney who served prison time after pleading guilty to campaign finance violations, tax fraud, bank fraud, and lying to Congress while acting as Donald Trump’s personal lawyer and fixer. He orchestrated illegal hush-money payments to women during the 2016 presidential campaign and was removed from the New York State Bar following his felony convictions. His tenure at the Trump Organization was marked by criminal financial schemes and deceptive conduct that resulted in a three-year federal prison sentence.",
    alignment: "evil",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "jared-kushner",
    name: "Jared Kushner",
    wikipediaTitle: "Jared_Kushner",
    description:
      "Jared Kushner faced intense ethical scrutiny after securing a $2 billion investment from Saudi Arabia’s sovereign wealth fund for his private equity firm shortly after leaving the White House, where he had shaped Middle East policy and fostered close ties with Crown Prince Mohammed bin Salman. As a senior adviser to Donald Trump, he managed a widely criticized COVID-19 supply chain response and maintained access to classified information despite intelligence officials initially rejecting his security clearance over foreign influence risks. His family company, Kushner Companies, accumulated hundreds of health and safety violations at Baltimore rental properties and faced legal action over alleged mistreatment of low-income tenants.",
    alignment: "evil",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "karl-rove",
    name: "Karl Rove",
    wikipediaTitle: "Karl_Rove",
    description:
      "Karl Rove served as Senior Advisor and Deputy Chief of Staff to President George W. Bush, where he was a principal architect of the Iraq War, helping to advance an invasion based on false claims of weapons of mass destruction that resulted in hundreds of thousands of deaths and widespread regional destabilization. He resigned in 2007 amid sustained controversy over his involvement in leaking the identity of covert CIA officer Valerie Plame and exploiting federal agencies for partisan political purposes.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "alex-jones",
    name: "Alex Jones",
    wikipediaTitle: "Alex_Jones",
    description:
      "Alex Jones is an American far-right conspiracy theorist and founder of Infowars, a media outlet that has heavily promoted dangerous disinformation, most notably the false claim that the Sandy Hook Elementary School shooting was fabricated, which subjected victims' families to years of severe harassment and resulted in courts ordering him to pay more than $1 billion in defamation damages. Through his syndicated radio program and websites, he has consistently spread debunked conspiracy theories about mass shootings, public health emergencies, and political events, fueling radicalization, real-world threats, and widespread erosion of public trust.",
    alignment: "evil",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "jeffrey-epstein",
    name: "Jeffrey Epstein",
    wikipediaTitle: "Jeffrey_Epstein",
    description:
      "Jeffrey Epstein was an American financier and convicted child sex offender who leveraged his immense wealth and elite social connections to sexually abuse and traffic underage girls over several decades. In 2008, he was convicted of soliciting a minor for prostitution, and in 2019 he was indicted on federal sex trafficking charges involving multiple minor victims before dying by suicide in custody while awaiting trial.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: 2019 },
  },
  {
    slug: "ghislaine-maxwell",
    name: "Ghislaine Maxwell",
    wikipediaTitle: "Ghislaine_Maxwell",
    description:
      "Ghislaine Maxwell is a British former socialite and convicted sex trafficker who groomed and procured underage girls for sexual abuse by Jeffrey Epstein and others over many years. In 2021, she was convicted on multiple federal counts of child sex trafficking and conspiracy for her central role in a criminal enterprise that exploited and sexually abused minor girls. She is currently serving a 20-year prison sentence imposed in 2022 for her instrumental role in facilitating systemic child sexual exploitation.",
    alignment: "evil",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "harvey-weinstein",
    name: "Harvey Weinstein",
    wikipediaTitle: "Harvey_Weinstein",
    description:
      "Harvey Weinstein is a convicted sex offender and former film producer who used his immense power in Hollywood to sexually harass, assault, and rape numerous women over several decades. He was convicted of felony sex crimes in both New York and Los Angeles after dozens of women accused him of misconduct, revelations that helped ignite the global #MeToo movement. His pattern of abuse was systematically enabled by complicity within the entertainment industry and non-disclosure agreements used to silence victims.",
    alignment: "evil",
    fallback: { birthYear: 1952, deathYear: null },
  },
  {
    slug: "bill-cosby",
    name: "Bill Cosby",
    wikipediaTitle: "Bill_Cosby",
    description:
      "Bill Cosby is an American former comedian and actor who was convicted in 2018 of aggravated indecent assault for drugging and sexually assaulting Andrea Constand, while dozens of other women alleged similar attacks spanning decades. He used his fame and respected public image to isolate and incapacitate victims, frequently utilizing drugs to facilitate sexual assault. The ensuing scandals led institutions to revoke his numerous honorary degrees and awards, rendering him a central figure in discussions of celebrity-facilitated sexual violence.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "r-kelly",
    name: "R. Kelly",
    wikipediaTitle: "R._Kelly",
    description:
      "R. Kelly is an American former singer and record producer who was convicted in 2021 and 2022 on multiple charges of child sexual abuse and sentenced to 31 years in prison. These convictions for the sexual exploitation of minors effectively ended his career, leaving a legacy defined by criminal abuse rather than his former commercial success in R&B and pop.",
    alignment: "evil",
    fallback: { birthYear: 1967, deathYear: null },
  },
  {
    slug: "kevin-spacey",
    name: "Kevin Spacey",
    wikipediaTitle: "Kevin_Spacey",
    description:
      "Kevin Spacey has faced extensive allegations of sexual misconduct and assault from numerous men, and in 2022 a civil jury found him liable for battery against actor Anthony Rapp, who was 14 at the time of the alleged incident. He stood trial in the United Kingdom on multiple criminal charges of sexual assault, and while he was acquitted in 2023, over a dozen men have publicly accused him of unwanted sexual advances or assault. These controversies and allegations of predatory behavior toward young men permanently ended his acting career and left him widely condemned.",
    alignment: "evil",
    fallback: { birthYear: 1959, deathYear: null },
  },
  {
    slug: "ted-bundy",
    name: "Ted Bundy",
    wikipediaTitle: "Ted_Bundy",
    description:
      "Ted Bundy was an American serial killer who kidnapped, raped, and murdered dozens of young women and girls between 1974 and 1978. He typically deceived his victims by pretending to need assistance or impersonating an authority figure in order to lure them to his vehicle, where he would bludgeon them unconscious, restrain them with handcuffs, and drive them to remote locations to be sexually assaulted and killed.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: 1989 },
  },
  {
    slug: "john-wayne-gacy",
    name: "John Wayne Gacy",
    wikipediaTitle: "John_Wayne_Gacy",
    description:
      "John Wayne Gacy was an American serial killer and sex offender who raped, tortured, and murdered at least thirty-three young men and boys between 1972 and 1978 in the Chicago suburb of Norwood Park Township. He lured victims to his home where he subjected them to sexual assault and brutal killings, concealing many of their bodies in the crawl space beneath his house. Prior to his arrest, he publicly performed as a clown, earning him the moniker the \"Killer Clown\" after his atrocities were uncovered.",
    alignment: "evil",
    fallback: { birthYear: 1942, deathYear: 1994 },
  },
  {
    slug: "timothy-mcveigh",
    name: "Timothy McVeigh",
    wikipediaTitle: "Timothy_McVeigh",
    description:
      "Timothy McVeigh was an American mass murderer and domestic terrorist who masterminded the April 19, 1995 Oklahoma City bombing, killing 168 people and injuring 684 others. The blast destroyed one-third of the Alfred P. Murrah Federal Building and caused the death of a rescue worker struck by debris in the aftermath, making it the deadliest act of domestic terrorism in U.S. history.",
    alignment: "evil",
    fallback: { birthYear: 1968, deathYear: 2001 },
  },
  {
    slug: "lee-harvey-oswald",
    name: "Lee Harvey Oswald",
    wikipediaTitle: "Lee_Harvey_Oswald",
    description:
      "Lee Harvey Oswald assassinated President John F. Kennedy on November 22, 1963, firing upon his motorcade from a concealed position in Dallas. Earlier that year, he attempted to assassinate retired General Edwin Walker, and had previously defected to the Soviet Union. He also murdered Dallas police officer J.D. Tippit on the same day as Kennedy’s assassination, and was killed two days later while in police custody, precluding any trial for his crimes.",
    alignment: "evil",
    fallback: { birthYear: 1939, deathYear: 1963 },
  },
  {
    slug: "john-wilkes-booth",
    name: "John Wilkes Booth",
    wikipediaTitle: "John_Wilkes_Booth",
    description:
      "John Wilkes Booth assassinated President Abraham Lincoln at Ford's Theatre in 1865 as part of a broader conspiracy against the federal government during a pivotal moment in American history. A Confederate sympathizer who vehemently denounced Lincoln, he committed the murder largely because he opposed the abolition of slavery and sought vengeance for the Confederacy's defeat. His act of political violence robbed the nation of its leader at the dawn of Reconstruction and cemented his legacy as one of American history's most notorious criminals.",
    alignment: "evil",
    fallback: { birthYear: 1838, deathYear: 1865 },
  },
  {
    slug: "o-j-simpson",
    name: "O.J. Simpson",
    wikipediaTitle: "O._J._Simpson",
    description:
      "O.J. Simpson was an American professional football player and actor whose athletic achievements were eclipsed by his arrest and widely disputed acquittal in the 1994 murders of his former wife Nicole Brown and her friend Ron Goldman. He was subsequently found liable for their deaths in a civil court and, in 2007, was convicted of armed robbery and kidnapping in Las Vegas, serving nearly a decade in prison.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: 2024 },
  },
  {
    slug: "phil-spector",
    name: "Phil Spector",
    wikipediaTitle: "Phil_Spector",
    description:
      "Phil Spector was convicted of the second-degree murder of actress Lana Clarkson and sentenced to 19 years to life in prison. He was notorious for brandishing firearms during recording sessions and threatening musicians, with multiple artists alleging he held guns to their heads. His career was marked by persistent allegations of violence, intimidation, and abusive behavior that overshadowed his musical output.",
    alignment: "evil",
    fallback: { birthYear: 1939, deathYear: 2021 },
  },
  {
    slug: "derek-chauvin",
    name: "Derek Chauvin",
    wikipediaTitle: "Derek_Chauvin",
    description:
      "Derek Chauvin is an American former police officer who murdered George Floyd in 2020 by kneeling on his neck for more than nine minutes as Floyd repeatedly gasped that he could not breathe. During the prolonged restraint, Chauvin ignored pleas from bystanders to stop while Floyd lost consciousness and died over an alleged counterfeit $20 bill. He was convicted of second-degree unintentional murder, third-degree murder, and second-degree manslaughter, and is serving a 22.5-year prison sentence.",
    alignment: "evil",
    fallback: { birthYear: 1976, deathYear: null },
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    wikipediaTitle: "Elon_Musk",
    description:
      "Elon Musk has been repeatedly censured by federal regulators for securities fraud and illegal union-busting, including a $40 million SEC settlement over false claims about taking Tesla private and multiple NLRB rulings against his companies for labor violations. His acquisition of X has been marked by the mass reinstatement of extremist accounts, the systematic dismantling of content moderation safeguards, and his personal amplification of hate speech, conspiracy theories, and antisemitic rhetoric. His businesses have also faced major lawsuits for systemic racial discrimination, unsafe workplace conditions, and federal investigations into animal cruelty related to Neuralink's experimental practices.",
    alignment: "evil",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "mark-zuckerberg",
    name: "Mark Zuckerberg",
    wikipediaTitle: "Mark_Zuckerberg",
    description:
      "Mark Zuckerberg is an American businessman and programmer who co-founded Facebook and serves as chairman, CEO, and controlling shareholder of its parent company, Meta Platforms. He has faced sustained global criticism for overseeing the Cambridge Analytica data scandal, enabling the spread of misinformation and hate speech that contributed to ethnic violence in Myanmar, and repeatedly prioritizing corporate growth over user privacy and public safety.",
    alignment: "evil",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "jeff-bezos",
    name: "Jeff Bezos",
    wikipediaTitle: "Jeff_Bezos",
    description:
      "Jeff Bezos amassed one of the world's largest fortunes as founder of Amazon, a company repeatedly condemned for harsh warehouse working conditions, aggressive anti-union tactics, and extensive tax avoidance that drew billions in public subsidies while contributing little in return. Under his leadership, Amazon faced global antitrust scrutiny, criticism over its massive carbon footprint and market monopolization, and allegations of systematically suppressing workers' rights and small-business competitors.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "bill-gates",
    name: "Bill Gates",
    wikipediaTitle: "Bill_Gates",
    description:
      "William Henry Gates III is an American businessman and philanthropist who co-founded the software company Microsoft in 1975 alongside Paul Allen, playing a central role in pioneering the microcomputer revolution of the 1970s and 1980s. Following Microsoft’s 1986 initial public offering, he became the world’s then-youngest billionaire in 1987 at age 31, and Forbes ranked him as the world’s wealthiest person for 18 out of 24 years between 1995 and 2017. As of February 2026, Forbes estimated his net worth at $107.7 billion, making him the 18th-wealthiest individual in the world.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    wikipediaTitle: "Warren_Buffett",
    description:
      "Warren Edward Buffett is an American investor and philanthropist who serves as the chairman and former CEO of the conglomerate Berkshire Hathaway. He is widely regarded as one of the most successful investors in the world, and as of January 2026, Forbes estimated his net worth at $148.9 billion, making him the ninth-richest person globally.",
    alignment: "evil",
    fallback: { birthYear: 1930, deathYear: null },
  },
  {
    slug: "tim-cook",
    name: "Tim Cook",
    wikipediaTitle: "Tim_Cook",
    description:
      "Timothy Donald Cook is an American business executive who has served as the chief executive officer of Apple Inc. since August 2011, having previously held roles as the company’s senior vice president for worldwide operations and its chief operating officer under co-founder Steve Jobs. He joined Apple in March 1998 and was appointed CEO following Jobs’s resignation, overseeing the company’s global sales and operations before assuming its top leadership position.",
    alignment: "evil",
    fallback: { birthYear: 1960, deathYear: null },
  },
  {
    slug: "steve-jobs",
    name: "Steve Jobs",
    wikipediaTitle: "Steve_Jobs",
    description:
      "Steven Paul Jobs was an American businessman, inventor, and investor who co-founded Apple Computer Company in 1976 with Steve Wozniak, becoming a central figure in the personal computer revolution of the 1970s and 1980s. After Apple’s board removed him in 1985, he founded NeXT and purchased Pixar in 1986, serving as its chairman and majority shareholder until 2007. He returned to Apple as CEO in 1997, where he was closely involved with the creation and promotion of many of the company’s most influential products until his resignation in 2011.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: 2011 },
  },
  {
    slug: "elizabeth-holmes",
    name: "Elizabeth Holmes",
    wikipediaTitle: "Elizabeth_Holmes",
    description:
      "Elizabeth Holmes was convicted of criminal fraud for perpetrating a massive deception through her company Theranos, falsely claiming it had developed revolutionary blood-testing technology using minimal blood volumes to secure a fraudulent $9-billion valuation. She misled investors and the public to build a paper fortune that was ultimately revised to zero, and was later named among the world's most disappointing leaders after her scheme unraveled.",
    alignment: "evil",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "sam-bankman-fried",
    name: "Sam Bankman-Fried",
    wikipediaTitle: "Sam_Bankman-Fried",
    description:
      "Sam Bankman-Fried is an American entrepreneur convicted in November 2023 of orchestrating a massive fraud through his cryptocurrency exchange, FTX, by misappropriating billions of dollars in customer funds. His crimes financed reckless investments, luxury spending, and political influence campaigns, ultimately causing the exchange's collapse and devastating financial losses for countless investors and depositors.",
    alignment: "evil",
    fallback: { birthYear: 1992, deathYear: null },
  },
  {
    slug: "john-d-rockefeller",
    name: "John D. Rockefeller",
    wikipediaTitle: "John_D._Rockefeller",
    description:
      "John Davison Rockefeller Sr. was an American businessman and philanthropist who founded the Standard Oil Company in 1870 and built one of the largest personal fortunes in modern history. After retiring from active management in 1897, he devoted his wealth to philanthropy, supporting education, medical research, and modernization efforts in the Southern United States.",
    alignment: "evil",
    fallback: { birthYear: 1839, deathYear: 1937 },
  },
  {
    slug: "allen-stanford",
    name: "Allen Stanford",
    wikipediaTitle: "Allen_Stanford",
    description:
      "Robert Allen Stanford is an American-Antiguan convicted fraudster who orchestrated a multibillion-dollar Ponzi scheme through Stanford Financial Group, defrauding thousands of investors of billions of dollars. Convicted in 2012 on multiple counts of fraud and related charges, he is currently serving a 110-year federal prison sentence for his crimes.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "bernie-madoff",
    name: "Bernie Madoff",
    wikipediaTitle: "Bernie_Madoff",
    description:
      "Bernard Madoff was an American financier who orchestrated the largest Ponzi scheme in history, defrauding investors of approximately $65 billion through his asset management business. While leveraging his former position as chairman of the Nasdaq stock exchange to cultivate trust, he operated a fraudulent investment scheme that destroyed the life savings of thousands of individuals, charities, and institutions. Convicted of massive financial fraud, he was sentenced to 150 years in prison, while the vast majority of his victims never recovered their losses.",
    alignment: "evil",
    fallback: { birthYear: 1938, deathYear: 2021 },
  },
  {
    slug: "martin-shkreli",
    name: "Martin Shkreli",
    wikipediaTitle: "Martin_Shkreli",
    description:
      "Martin Shkreli is a former pharmaceutical executive and hedge fund manager who provoked widespread outrage for raising the price of the lifesaving antiparasitic drug Daraprim by over 5,000 percent while leading Turing Pharmaceuticals, severely restricting patient access to maximize profit. In 2017, he was convicted of securities fraud and conspiracy for operating a Ponzi-like scheme that misled investors in his hedge funds and misappropriated assets from his biotech firm Retrophin to cover losses, resulting in a seven-year federal prison sentence. He further generated contempt through serial online harassment of journalists and others, cementing a reputation for predatory exploitation and public malice.",
    alignment: "evil",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "benjamin-netanyahu",
    name: "Benjamin Netanyahu",
    wikipediaTitle: "Benjamin_Netanyahu",
    description:
      "Benjamin Netanyahu is the first Israeli prime minister to be criminally indicted while in office, facing domestic charges of bribery, fraud, and breach of trust, while the International Criminal Court’s prosecutor has sought an arrest warrant accusing him of war crimes and crimes against humanity. His governments expanded illegal settlements in occupied Palestinian territories, and his 2023 judicial overhaul plan sought to weaken the Supreme Court, triggering mass protests over threats to democratic institutions.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/330px-Benjamin_Netanyahu%2C_February_2023.jpg" },
  },
  {
    slug: "bob-marley",
    name: "Bob Marley",
    wikipediaTitle: "Bob_Marley",
    description:
      "Robert Nesta Marley was a Jamaican singer, songwriter, and guitarist who pioneered reggae by fusing it with ska and rocksteady, bringing Jamaican music to international prominence through his distinctive voice and powerful songwriting. A global icon of popular culture and Rastafarian spirituality, he became an enduring symbol of Jamaican identity and infused his art with messages of unity and purpose. He used his worldwide platform to champion pan-Africanism, advocate for democratic social reform, and inspire cross-cultural solidarity.",
    alignment: "good",
    fallback: { birthYear: 1945, deathYear: 1981, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Bob_Marley_1976_press_photo.jpg/330px-Bob_Marley_1976_press_photo.jpg" },
  },
  {
    slug: "michelle-obama",
    name: "Michelle Obama",
    wikipediaTitle: "Michelle_Obama",
    description:
      "Michelle Obama is an acclaimed attorney, bestselling author, and former First Lady of the United States who used her platform from 2009 to 2017 to champion children's health, education, and military families. She launched the impactful Let's Move! initiative to combat childhood obesity and became a global advocate for girls' access to education. As a writer and speaker, she continues to inspire millions through her memoir Becoming and her ongoing work empowering young people and promoting civic engagement.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Michelle_Obama_2013_official_portrait.jpg/330px-Michelle_Obama_2013_official_portrait.jpg" },
  },
  {
    slug: "robert-downey-jr",
    name: "Robert Downey Jr.",
    wikipediaTitle: "Robert_Downey_Jr.",
    description:
      "Robert Downey Jr. is an acclaimed American actor whose films have grossed over $14.3 billion worldwide, establishing him as one of the highest-grossing and highest-paid performers in cinema history. Renowned for his remarkable versatility, he has earned an Academy Award, a Daytime Emmy Award, three Golden Globe Awards, and two British Academy Film Awards across a celebrated career spanning diverse and iconic roles.",
    alignment: "good",
    fallback: { birthYear: 1965, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Robert_Downey_Jr._2014_Comic-Con.jpg/330px-Robert_Downey_Jr._2014_Comic-Con.jpg" },
  },
  {
    slug: "god",
    name: "God",
    wikipediaTitle: "God_in_Christianity",
    description:
      "God is supposedly all-powerful, all-knowing, and all-loving. The texts say He drowned nearly every living thing in a flood, ordered soldiers to kill Canaanite infants, and broke Job's life just to win a bet. An all-powerful being who lets childhood cancer and the Holocaust happen, then demands worship under threat of eternal torture, is either a monster or a myth. \"If there is a God, He will have to beg for my forgiveness.\" — Anonymous prisoner, Auschwitz",
    alignment: "evil",
    status: "dead",
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
