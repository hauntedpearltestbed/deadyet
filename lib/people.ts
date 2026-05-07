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
  {
    slug: "johnny-depp",
    name: "Johnny Depp",
    wikipediaTitle: "Johnny_Depp",
    description:
      "Johnny Depp is an American actor, musician, and filmmaker whose films have grossed over $10.8 billion worldwide, ranking him among Hollywood's most commercially successful performers. Known for his transformative portrayals of eccentric characters in films such as the Pirates of the Caribbean franchise, Edward Scissorhands, and Sweeney Todd, he has earned three Academy Award nominations, a Golden Globe, and a Screen Actors Guild Award. His decades-long career and distinctive on-screen presence have established him as one of the most recognizable figures in modern cinema.",
    alignment: "good",
    fallback: { birthYear: 1963, deathYear: null },
  },
  {
    slug: "will-smith",
    name: "Will Smith",
    wikipediaTitle: "Will_Smith",
    description:
      "Will Smith is an American actor, rapper, and film producer whose work across television, music, and cinema has made him one of Hollywood's most bankable stars, with films grossing more than $10 billion worldwide. He won the Academy Award for Best Actor for King Richard in 2022 and earned additional honors including a Golden Globe, a BAFTA, and four Grammy Awards across his music career. From his breakthrough as one half of DJ Jazzy Jeff & The Fresh Prince to leading roles in The Pursuit of Happyness, Ali, and the Bad Boys and Men in Black franchises, his decades of crossover success have left a profound mark on American entertainment.",
    alignment: "good",
    fallback: { birthYear: 1968, deathYear: null },
  },
  {
    slug: "hillary-clinton",
    name: "Hillary Clinton",
    wikipediaTitle: "Hillary_Clinton",
    description:
      "Hillary Diane Rodham Clinton is an American politician, lawyer, and diplomat who served as the 67th United States Secretary of State from 2009 to 2013, U.S. Senator from New York from 2001 to 2009, and First Lady of the United States from 1993 to 2001. In 2016 she became the Democratic Party's presidential nominee, the first woman to win a major U.S. party's nomination and the only woman to win the popular vote in a U.S. presidential election. Across decades of public service she has championed children's health, women's rights, and access to health care.",
    alignment: "good",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "al-gore",
    name: "Al Gore",
    wikipediaTitle: "Al_Gore",
    description:
      "Albert Arnold Gore Jr. served as the 45th vice president of the United States from 1993 to 2001 under President Bill Clinton, and previously represented Tennessee in both houses of Congress. The Democratic nominee in the 2000 presidential election, he won the popular vote but lost the Electoral College after the Supreme Court halted Florida's recount. He has since become one of the world's most prominent advocates for action on climate change, sharing the 2007 Nobel Peace Prize with the IPCC and reaching a global audience through his Oscar-winning documentary An Inconvenient Truth.",
    alignment: "good",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "john-mccain",
    name: "John McCain",
    wikipediaTitle: "John_McCain",
    description:
      "John Sidney McCain III was an American politician and naval aviator who represented Arizona in the U.S. Congress for over 35 years, first as a representative from 1983 to 1987 and then as a senator from 1987 until his death in 2018. After being shot down over Hanoi in 1967 he survived more than five years as a prisoner of war in North Vietnam, refusing early release until his fellow captives could be freed. The Republican nominee in the 2008 presidential election, he was widely respected for his independent streak, including his decisive 2017 vote that preserved the Affordable Care Act.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: 2018 },
  },
  {
    slug: "benjamin-franklin",
    name: "Benjamin Franklin",
    wikipediaTitle: "Benjamin_Franklin",
    description:
      "Benjamin Franklin was an American polymath, statesman, and Founding Father who helped draft the Declaration of Independence and the U.S. Constitution and served as the country's first postmaster general. As a writer, scientist, and inventor he conducted pioneering research in electricity, invented bifocals and the lightning rod, and founded Philadelphia's first public library and fire department. Late in life he became a leading abolitionist, freeing his own enslaved workers and petitioning the new Congress to end the slave trade.",
    alignment: "good",
    fallback: { birthYear: 1706, deathYear: 1790 },
  },
  {
    slug: "john-quincy-adams",
    name: "John Quincy Adams",
    wikipediaTitle: "John_Quincy_Adams",
    description:
      "John Quincy Adams served as the sixth president of the United States from 1825 to 1829 and as the eighth U.S. secretary of state from 1817 to 1825, during which he negotiated the Adams–Onís Treaty acquiring Florida and authored the Monroe Doctrine. After losing reelection he uniquely returned to Congress as a member of the House, where he spent 17 years championing the right to petition and the abolition of slavery. He successfully argued the Amistad case before the Supreme Court in 1841, securing freedom for African captives who had revolted against their enslavers.",
    alignment: "good",
    fallback: { birthYear: 1767, deathYear: 1848 },
  },
  {
    slug: "patrick-henry",
    name: "Patrick Henry",
    wikipediaTitle: "Patrick_Henry",
    description:
      "Patrick Henry was an American statesman, orator, and Founding Father who served as the first and sixth post-colonial governor of Virginia between 1776 and 1786. His 1775 declaration to the Second Virginia Convention—\"Give me liberty, or give me death!\"—became one of the most famous calls to arms of the American Revolution. He refused to attend the Constitutional Convention out of distrust for centralized power and became a leading anti-Federalist whose advocacy helped spur adoption of the Bill of Rights.",
    alignment: "good",
    fallback: { birthYear: 1736, deathYear: 1799 },
  },
  {
    slug: "thomas-paine",
    name: "Thomas Paine",
    wikipediaTitle: "Thomas_Paine",
    description:
      "Thomas Paine was an English-born American Founding Father whose 1776 pamphlet Common Sense framed the Patriot argument for independence in plain prose that sold hundreds of thousands of copies and decisively shifted public opinion toward revolution. His follow-up series The American Crisis sustained Continental Army morale through the war's darkest moments, while later works like Rights of Man and The Age of Reason advanced Enlightenment arguments for human equality and freedom of conscience. His radicalism left him reviled in his lifetime but enshrined in posterity as one of the foremost voices for democratic self-government.",
    alignment: "good",
    fallback: { birthYear: 1737, deathYear: 1809 },
  },
  {
    slug: "abigail-adams",
    name: "Abigail Adams",
    wikipediaTitle: "Abigail_Adams",
    description:
      "Abigail Adams was the wife and closest political advisor of John Adams, the second president of the United States, and the mother of John Quincy Adams, the sixth. Her March 1776 letter urging her husband to \"remember the ladies\" while drafting new laws for an independent America made her one of the earliest American voices for women's legal rights. Her extensive correspondence with leading figures of the founding era is now considered a vital primary source on the politics of the Revolution and the early Republic.",
    alignment: "good",
    fallback: { birthYear: 1744, deathYear: 1818 },
  },
  {
    slug: "ulysses-s-grant",
    name: "Ulysses S. Grant",
    wikipediaTitle: "Ulysses_S._Grant",
    description:
      "Ulysses S. Grant served as the 18th president of the United States from 1869 to 1877 after leading the Union Army to victory in the American Civil War as commanding general. As president he enforced civil rights for newly freed African Americans, signing the Ku Klux Klan Act of 1871 and deploying federal troops to dismantle the first Klan and prosecute hundreds of its members. His administration's commitment to Reconstruction made him one of the era's most consequential defenders of Black political participation in the South.",
    alignment: "good",
    fallback: { birthYear: 1822, deathYear: 1885 },
  },
  {
    slug: "theodore-roosevelt",
    name: "Theodore Roosevelt",
    wikipediaTitle: "Theodore_Roosevelt",
    description:
      "Theodore Roosevelt Jr. served as the 26th president of the United States from 1901 to 1909, becoming at 42 the youngest person ever to hold the office. He pursued sweeping antitrust action against industrial monopolies, advanced consumer protection through the Pure Food and Drug Act of 1906, and used the Antiquities Act to protect over 230 million acres of public land while founding the U.S. Forest Service. He was awarded the 1906 Nobel Peace Prize for mediating the end of the Russo-Japanese War.",
    alignment: "good",
    fallback: { birthYear: 1858, deathYear: 1919 },
  },
  {
    slug: "lyndon-b-johnson",
    name: "Lyndon B. Johnson",
    wikipediaTitle: "Lyndon_B._Johnson",
    description:
      "Lyndon Baines Johnson served as the 36th president of the United States from 1963 to 1969 after assuming office on the assassination of John F. Kennedy. He shepherded the landmark Civil Rights Act of 1964 and Voting Rights Act of 1965 through Congress, dismantling the legal architecture of Jim Crow segregation, and launched the Great Society programs that established Medicare, Medicaid, federal education funding, and the National Endowments for the Arts and Humanities. His domestic legislative legacy stands as one of the most consequential in American history.",
    alignment: "good",
    fallback: { birthYear: 1908, deathYear: 1973 },
  },
  {
    slug: "ronald-reagan-jr",
    name: "Ronald Reagan Jr.",
    wikipediaTitle: "Ron_Reagan",
    description:
      "Ronald Prescott Reagan is an American political commentator, broadcaster, and the son of President Ronald Reagan. A former host on Air America Radio and a longtime political analyst on KIRO and MSNBC, he has spent decades publicly contrasting his progressive views with his father's politics and criticizing the modern Republican Party. He is also a prominent spokesperson for the Freedom From Religion Foundation, openly identifying as an atheist in nationally aired campaigns.",
    alignment: "good",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "hubert-humphrey",
    name: "Hubert Humphrey",
    wikipediaTitle: "Hubert_Humphrey",
    description:
      "Hubert Horatio Humphrey Jr. served as the 38th vice president of the United States from 1965 to 1969 and represented Minnesota in the U.S. Senate from 1949 to 1964 and again from 1971 to 1978. A leading liberal of his era, he delivered the historic 1948 Democratic National Convention speech that committed the party to civil rights for the first time, helping trigger the Dixiecrat walkout. He was the Democratic nominee for president in 1968.",
    alignment: "good",
    fallback: { birthYear: 1911, deathYear: 1978 },
  },
  {
    slug: "walter-mondale",
    name: "Walter Mondale",
    wikipediaTitle: "Walter_Mondale",
    description:
      "Walter Frederick \"Fritz\" Mondale served as the 42nd vice president of the United States from 1977 to 1981 under President Jimmy Carter, and represented Minnesota in the U.S. Senate from 1964 to 1976. The Democratic nominee in the 1984 presidential election, he made history by selecting Geraldine Ferraro as his running mate—the first woman on a major U.S. party's presidential ticket. He later served as U.S. ambassador to Japan from 1993 to 1996.",
    alignment: "good",
    fallback: { birthYear: 1928, deathYear: 2021 },
  },
  {
    slug: "adam-clayton-powell-jr",
    name: "Adam Clayton Powell Jr.",
    wikipediaTitle: "Adam_Clayton_Powell_Jr.",
    description:
      "Adam Clayton Powell Jr. was an American Baptist pastor and politician who represented Harlem in the U.S. House of Representatives from 1945 to 1971, becoming the first African American elected to Congress from New York. As chair of the House Education and Labor Committee, he played a central role in passing landmark legislation including the Elementary and Secondary Education Act, the federal minimum wage expansion, and the antipoverty programs of the Great Society. His decades of national leadership made him one of the most influential African American politicians of the 20th century.",
    alignment: "good",
    fallback: { birthYear: 1908, deathYear: 1972 },
  },
  {
    slug: "bob-dole",
    name: "Bob Dole",
    wikipediaTitle: "Bob_Dole",
    description:
      "Robert Joseph Dole was an American politician and U.S. Army officer who represented Kansas in the U.S. Senate from 1969 to 1996, serving as Republican Senate leader for 11 years including three years as majority leader. A decorated World War II veteran who suffered career-ending wounds in Italy in 1945, he was the Republican nominee for president in 1996 and dedicated his post-Senate years to championing veterans' causes, including spearheading the creation of the National World War II Memorial.",
    alignment: "good",
    fallback: { birthYear: 1923, deathYear: 2021 },
  },
  {
    slug: "nathan-hale",
    name: "Nathan Hale",
    wikipediaTitle: "Nathan_Hale",
    description:
      "Nathan Hale was a Continental Army officer and intelligence-gathering volunteer during the American Revolutionary War. Captured by the British during a covert mission in New York City, he was hanged without trial on September 22, 1776, at the age of 21. His widely reported final words—\"I only regret that I have but one life to lose for my country\"—made him an enduring symbol of patriotic sacrifice and led to his designation as Connecticut's official state hero in 1985.",
    alignment: "good",
    fallback: { birthYear: 1755, deathYear: 1776 },
  },
  {
    slug: "pat-tillman",
    name: "Pat Tillman",
    wikipediaTitle: "Pat_Tillman",
    description:
      "Patrick Daniel Tillman was an American football safety for the Arizona Cardinals who left a multimillion-dollar NFL contract in 2002 to enlist in the U.S. Army Rangers in the wake of the September 11 attacks. He served deployments in Iraq and Afghanistan before being killed in eastern Afghanistan in April 2004 at age 27. His death drew widespread attention after the Pentagon initially concealed that it was caused by friendly fire, and his family's pursuit of accountability has continued for decades.",
    alignment: "good",
    fallback: { birthYear: 1976, deathYear: 2004 },
  },
  {
    slug: "smedley-butler",
    name: "Smedley Butler",
    wikipediaTitle: "Smedley_Butler",
    description:
      "Smedley Darlington Butler was a major general in the United States Marine Corps whose 34-year career made him one of the most decorated American servicemen of his era. He received the Medal of Honor twice—for actions at Veracruz in 1914 and in Haiti in 1915—becoming one of only a handful of recipients ever awarded the medal on two separate occasions. After retiring he wrote the influential 1935 book War Is a Racket condemning American military adventurism, and publicly testified that he had been approached to lead a fascist coup against President Franklin D. Roosevelt.",
    alignment: "good",
    fallback: { birthYear: 1881, deathYear: 1940 },
  },
  {
    slug: "audie-murphy",
    name: "Audie Murphy",
    wikipediaTitle: "Audie_Murphy",
    description:
      "Audie Leon Murphy was the most decorated American combat soldier of World War II, receiving every U.S. Army award for valor available, including the Medal of Honor at age 19 for single-handedly holding off a German company near Holtzwihr, France in 1945. After the war he became a successful film actor, starring in more than forty films including the autobiographical To Hell and Back (1955). He spoke publicly about combat trauma and used his platform to advocate for veterans' mental health care decades before post-traumatic stress was formally recognized.",
    alignment: "good",
    fallback: { birthYear: 1925, deathYear: 1971 },
  },
  {
    slug: "george-patton",
    name: "George Patton",
    wikipediaTitle: "George_S._Patton",
    description:
      "George Smith Patton Jr. was a U.S. Army general who commanded the Seventh Army in the Mediterranean Theater of World War II and the Third Army in the Allied invasion of France and Germany after D-Day. A pioneer of mechanized warfare, he led some of the most rapid armored advances in modern military history, including the breakout from Normandy and the relief of Bastogne during the Battle of the Bulge. He died from injuries sustained in a vehicle accident in occupied Germany on December 21, 1945, less than a year after V-E Day.",
    alignment: "good",
    fallback: { birthYear: 1885, deathYear: 1945 },
  },
  {
    slug: "william-tecumseh-sherman",
    name: "William Tecumseh Sherman",
    wikipediaTitle: "William_Tecumseh_Sherman",
    description:
      "William Tecumseh Sherman was a U.S. Army general in the Union Army during the American Civil War whose campaigns broke the Confederacy's capacity to wage war. His 1864 Atlanta Campaign and subsequent March to the Sea destroyed the South's industrial and logistical infrastructure across Georgia and the Carolinas, hastening the war's end. After the war he served as the Commanding General of the Army from 1869 to 1883 and famously refused all entreaties to run for the presidency.",
    alignment: "good",
    fallback: { birthYear: 1820, deathYear: 1891 },
  },
  {
    slug: "cleopatra",
    name: "Cleopatra",
    wikipediaTitle: "Cleopatra",
    description:
      "Cleopatra VII Thea Philopator was the last active Hellenistic ruler of the Ptolemaic Kingdom of Egypt, reigning from 51 to 30 BC. The only Ptolemaic ruler known to have learned the Egyptian language, she pursued a sophisticated diplomacy that kept her kingdom independent for two decades against the dominant power of Rome through alliances with Julius Caesar and Mark Antony. After Antony's defeat at the Battle of Actium, she chose suicide over capture, ending the Ptolemaic dynasty and ushering in Roman rule of Egypt.",
    alignment: "good",
    fallback: { birthYear: -69, deathYear: -30 },
  },
  {
    slug: "bill-clinton",
    name: "Bill Clinton",
    wikipediaTitle: "Bill_Clinton",
    description:
      "William Jefferson Clinton served as the 42nd president of the United States from 1993 to 2001 and was only the second president in U.S. history to be impeached, charged by the House in 1998 with perjury and obstruction of justice for lying under oath about his sexual relationship with White House intern Monica Lewinsky. His administration signed the 1994 Violent Crime Control and Law Enforcement Act, which expanded mandatory minimum sentences and accelerated an era of mass incarceration that disproportionately devastated Black communities, and the 1996 welfare reform law that ended Aid to Families with Dependent Children. He also signed Don't Ask, Don't Tell and the Defense of Marriage Act, codifying federal discrimination against LGBTQ Americans, and his 1999 repeal of the Glass-Steagall Act through Gramm-Leach-Bliley is widely cited as a contributing factor to the 2008 financial crisis.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "george-h-w-bush",
    name: "George H.W. Bush",
    wikipediaTitle: "George_H._W._Bush",
    description:
      "George Herbert Walker Bush served as the 41st president of the United States from 1989 to 1993, as Ronald Reagan's vice president from 1981 to 1989, and as Director of Central Intelligence in 1976. On Christmas Eve 1992, weeks before leaving office, he pardoned six former officials in the Iran-Contra affair, including former Defense Secretary Caspar Weinberger on the eve of his trial, effectively ending an independent counsel investigation that had been examining Bush's own role. He launched the 1989 invasion of Panama, which killed hundreds of civilians, and the 1991 Gulf War, while his 1988 campaign's racially charged Willie Horton attack ad against Michael Dukakis became a notorious case study in dog-whistle politics.",
    alignment: "evil",
    fallback: { birthYear: 1924, deathYear: 2018 },
  },
  {
    slug: "gerald-ford",
    name: "Gerald Ford",
    wikipediaTitle: "Gerald_Ford",
    description:
      "Gerald Rudolph Ford Jr. served as the 38th president of the United States from 1974 to 1977, becoming the only person in U.S. history to assume the presidency without being elected to either the office or the vice presidency. One month after taking office, he granted Richard Nixon a full and unconditional pardon for any crimes committed during the Watergate scandal, denying the public an accounting and shielding Nixon from prosecution. In December 1975, he and Secretary of State Henry Kissinger gave Indonesian dictator Suharto explicit authorization to invade East Timor, an occupation that killed an estimated 100,000 to 200,000 Timorese over the following decades.",
    alignment: "evil",
    fallback: { birthYear: 1913, deathYear: 2006 },
  },
  {
    slug: "ronald-reagan",
    name: "Ronald Reagan",
    wikipediaTitle: "Ronald_Reagan",
    description:
      "Ronald Wilson Reagan served as the 40th president of the United States from 1981 to 1989, presiding over the Iran-Contra affair in which his administration illegally sold weapons to Iran and funneled the proceeds to fund the Nicaraguan Contras in direct defiance of an explicit congressional ban. His administration ignored the emerging AIDS crisis for years as tens of thousands of Americans died, with his press secretary publicly joking about the disease in 1982 and Reagan himself not delivering a major public address on it until 1987. He fired more than 11,000 striking air traffic controllers in 1981, backed brutal right-wing regimes and death squads in El Salvador, Guatemala, and Nicaragua, and his escalation of the War on Drugs and signing of mandatory-minimum sentencing laws contributed to a generational expansion of mass incarceration.",
    alignment: "evil",
    fallback: { birthYear: 1911, deathYear: 2004 },
  },
  {
    slug: "nancy-reagan",
    name: "Nancy Reagan",
    wikipediaTitle: "Nancy_Reagan",
    description:
      "Nancy Davis Reagan was the First Lady of the United States from 1981 to 1989 as the wife of President Ronald Reagan, and the public face of the \"Just Say No\" anti-drug campaign that helped justify the punitive expansion of the War on Drugs and the mass-incarceration policies of the era. After leaving the White House she acknowledged that she had retained an astrologer, Joan Quigley, to advise on scheduling for major presidential events, including arms-control summits and the aftermath of the 1981 assassination attempt. In 1985, when her longtime Hollywood friend Rock Hudson sought help accessing experimental AIDS treatment at a French military hospital, the Reagan White House—at her direction—declined to intervene, a refusal that came to symbolize the administration's coldness toward an epidemic that was killing tens of thousands of gay Americans.",
    alignment: "evil",
    fallback: { birthYear: 1921, deathYear: 2016 },
  },
  {
    slug: "hannibal-barca",
    name: "Hannibal Barca",
    wikipediaTitle: "Hannibal",
    description:
      "Hannibal Barca was a Carthaginian general and statesman who led the forces of Carthage against the Roman Republic during the Second Punic War. In 218 BC he made his legendary crossing of the Alps with war elephants and infantry, going on to inflict catastrophic defeats on Rome at the battles of Trebia, Lake Trasimene, and Cannae, where his double envelopment annihilated a Roman army of some 80,000 men. Widely considered one of the greatest military strategists in history, his tactics have been studied by commanders for more than two thousand years.",
    alignment: "good",
    fallback: { birthYear: -247, deathYear: -183 },
  },
  {
    slug: "harold-ii",
    name: "Harold II",
    wikipediaTitle: "Harold_Godwinson",
    description:
      "Harold Godwinson, known as Harold II, was the last crowned Anglo-Saxon king of England, reigning from January 1066 until his death at the Battle of Hastings on 14 October 1066. He took the throne after the death of Edward the Confessor and within months defeated a Norwegian invasion at the Battle of Stamford Bridge before marching south to meet William of Normandy. His death at Hastings ended Anglo-Saxon rule of England and inaugurated the Norman Conquest, marking one of the most consequential turning points in English history.",
    alignment: "good",
    fallback: { birthYear: 1022, deathYear: 1066 },
  },
  {
    slug: "mary-queen-of-scots",
    name: "Mary, Queen of Scots",
    wikipediaTitle: "Mary,_Queen_of_Scots",
    description:
      "Mary Stuart was Queen of Scotland from 1542 until her forced abdication in 1567, having inherited the throne at six days old following the death of her father, James V. Raised in the French court and briefly Queen consort of France, she returned to a Scotland riven by Reformation conflict and was eventually deposed and driven into England, where she became a focus of Catholic plots against her Protestant cousin Elizabeth I. After 18 years of imprisonment she was tried and beheaded in 1587 at Fotheringhay Castle on contested treason charges, becoming a defining symbolic figure for Catholic resistance in early modern Europe.",
    alignment: "good",
    fallback: { birthYear: 1542, deathYear: 1587 },
  },
  {
    slug: "akbar",
    name: "Akbar",
    wikipediaTitle: "Akbar",
    description:
      "Jalal-ud-Din Muhammad Akbar was the third Mughal emperor, reigning from 1556 to 1605, and is generally considered one of the greatest emperors in Indian history. He vastly expanded Mughal territory across the subcontinent while pioneering policies of religious tolerance unprecedented for his era, abolishing the jizya tax on non-Muslims and convening interfaith debates among Hindus, Muslims, Christians, Jains, and Zoroastrians at his court. His administrative reforms in taxation, land revenue, and centralized governance shaped the Mughal state for the next century.",
    alignment: "good",
    fallback: { birthYear: 1542, deathYear: 1605 },
  },
  {
    slug: "cuauhtemoc",
    name: "Cuauhtémoc",
    wikipediaTitle: "Cuauhtémoc",
    description:
      "Cuauhtémoc was the last Aztec emperor, ruling Tenochtitlan from 1520 to 1521 during the final stage of the Spanish conquest of Mexico. He led the desperate defense of the city against Hernán Cortés through months of siege and starvation, surrendering only after the capital fell. Cortés had him tortured to reveal hidden gold and ultimately executed during a 1525 expedition to Honduras, and he remains an enduring symbol of Indigenous resistance in Mexican national memory.",
    alignment: "good",
    fallback: { birthYear: 1495, deathYear: 1525 },
  },
  {
    slug: "moctezuma-ii",
    name: "Moctezuma II",
    wikipediaTitle: "Moctezuma_II",
    description:
      "Moctezuma Xocoyotzin was the ninth emperor of the Aztec Empire, reigning from 1502 to 1520, whose tenure ended with the arrival of Hernán Cortés and the first sustained contact between Mesoamerican civilization and Europeans. Initially receiving the Spanish at Tenochtitlan, he was taken hostage by Cortés in his own palace and used as a puppet ruler before dying under disputed circumstances during the uprising that became known as La Noche Triste. His reign and death stand as the pivotal moment in the destruction of the pre-Columbian Aztec world.",
    alignment: "good",
    fallback: { birthYear: 1466, deathYear: 1520 },
  },
  {
    slug: "akihito",
    name: "Akihito",
    wikipediaTitle: "Akihito",
    description:
      "Akihito reigned as the 125th emperor of Japan from 1989 until his abdication in 2019, the first Japanese monarch to step down voluntarily in more than two centuries. The era of his reign, named Heisei or \"achieving peace,\" was defined by his repeated public expressions of remorse for Japan's wartime conduct, including landmark statements of apology during visits to China, Korea, and the Philippines. He worked throughout his reign to recast the Chrysanthemum Throne as a symbolic and humanitarian institution, breaking with centuries of imperial seclusion to engage directly with disaster victims and ordinary citizens.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: null },
  },
  {
    slug: "liu-shaoqi",
    name: "Liu Shaoqi",
    wikipediaTitle: "Liu_Shaoqi",
    description:
      "Liu Shaoqi was a Chinese revolutionary and statesman who served as President of the People's Republic of China from 1959 to 1968 and as first-ranking vice chairman of the Chinese Communist Party. A leading reformer credited with stabilizing China's economy after the disastrous Great Leap Forward famine, he was widely seen as Mao Zedong's likely successor before being purged during the Cultural Revolution. He was publicly denounced, beaten, and ultimately died in prison in 1969 from medical neglect, then posthumously rehabilitated in 1980 as the party reckoned with the era's abuses.",
    alignment: "good",
    fallback: { birthYear: 1898, deathYear: 1969 },
  },
  {
    slug: "sun-yat-sen",
    name: "Sun Yat-sen",
    wikipediaTitle: "Sun_Yat-sen",
    description:
      "Sun Yat-sen was a Chinese revolutionary who founded the Republic of China and the Kuomintang, leading the 1911 Revolution that overthrew the Qing dynasty after more than two millennia of imperial rule. He served as the first provisional president of the Republic in 1912 and articulated the Three Principles of the People—nationalism, democracy, and people's livelihood—which became foundational to modern Chinese political thought. Revered across both the People's Republic and Taiwan as the founding father of modern China, he died in 1925 before his vision of a unified republic could be realized.",
    alignment: "good",
    fallback: { birthYear: 1866, deathYear: 1925 },
  },
  {
    slug: "anwar-sadat",
    name: "Anwar Sadat",
    wikipediaTitle: "Anwar_Sadat",
    description:
      "Muhammad Anwar el-Sadat served as the third president of Egypt from 1970 until his assassination in 1981, leading the country through the 1973 October War and the subsequent peace process with Israel. In 1978 he and Israeli Prime Minister Menachem Begin signed the Camp David Accords, for which they were jointly awarded the Nobel Peace Prize, and the following year Egypt became the first Arab state to formally recognize Israel. He was assassinated by Islamist soldiers during a military parade in Cairo in October 1981.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 1981 },
  },
  {
    slug: "yasser-arafat",
    name: "Yasser Arafat",
    wikipediaTitle: "Yasser_Arafat",
    description:
      "Yasser Arafat was a Palestinian political leader who served as chairman of the Palestine Liberation Organization from 1969 until his death in 2004, and as president of the Palestinian Authority from 1994 onward. A founding member and longtime leader of the Fatah movement, he transformed the Palestinian cause into a recognized international political force and shared the 1994 Nobel Peace Prize with Yitzhak Rabin and Shimon Peres for his role in the Oslo Accords. He died in 2004 under disputed medical circumstances after years confined to his besieged Ramallah compound by the Israeli military.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 2004 },
  },
  {
    slug: "benazir-bhutto",
    name: "Benazir Bhutto",
    wikipediaTitle: "Benazir_Bhutto",
    description:
      "Benazir Bhutto served as Prime Minister of Pakistan from 1988 to 1990 and again from 1993 to 1996, becoming the first woman elected to head the government of a Muslim-majority country in modern history. As leader of the Pakistan People's Party, she championed a liberal and secular agenda in a deeply conservative political environment and survived multiple coups, dismissals, and years of self-imposed exile. She was assassinated in December 2007 at a campaign rally in Rawalpindi while attempting a return to power.",
    alignment: "good",
    fallback: { birthYear: 1953, deathYear: 2007 },
  },
  {
    slug: "ahmed-ben-bella",
    name: "Ahmed Ben Bella",
    wikipediaTitle: "Ahmed_Ben_Bella",
    description:
      "Ahmed Ben Bella was an Algerian revolutionary and politician who served as the first president of independent Algeria from 1963 to 1965. As a senior commander in the National Liberation Front, he played a leading role in the eight-year war of independence against French colonial rule, organizing arms shipments and political coordination from prison and exile. After being overthrown in a 1965 coup by his defense minister, he spent 14 years under house arrest before re-emerging as a prominent advocate for democratic and pan-African reform.",
    alignment: "good",
    fallback: { birthYear: 1916, deathYear: 2012 },
  },
  {
    slug: "mikhail-gorbachev",
    name: "Mikhail Gorbachev",
    wikipediaTitle: "Mikhail_Gorbachev",
    description:
      "Mikhail Sergeyevich Gorbachev was the last leader of the Soviet Union, serving as General Secretary of the Communist Party from 1985 and as head of state until the country's dissolution in 1991. His policies of glasnost (openness) and perestroika (restructuring) introduced sweeping political and economic reforms, freed political prisoners, and ended decades of state censorship, while his negotiations with U.S. President Ronald Reagan produced the historic INF Treaty and effectively ended the Cold War without bloodshed. He was awarded the 1990 Nobel Peace Prize for his role in the peaceful transformation of Eastern Europe.",
    alignment: "good",
    fallback: { birthYear: 1931, deathYear: 2022 },
  },
  {
    slug: "fabian-gottlieb-von-bellingshausen",
    name: "Fabian Gottlieb von Bellingshausen",
    wikipediaTitle: "Fabian_Gottlieb_von_Bellingshausen",
    description:
      "Fabian Gottlieb von Bellingshausen was a Russian admiral, cartographer, and explorer of Baltic German descent who led the first Russian circumnavigation of Antarctica from 1819 to 1821. On 27 January 1820 his expedition sighted the Antarctic continent, making him one of the first humans to lay eyes on the southern landmass. His meticulous charts and observations of Pacific and Antarctic waters significantly advanced 19th-century geographic and oceanographic knowledge.",
    alignment: "good",
    fallback: { birthYear: 1778, deathYear: 1852 },
  },
  {
    slug: "robert-mcclure",
    name: "Robert McClure",
    wikipediaTitle: "Robert_McClure",
    description:
      "Vice-Admiral Sir Robert John Le Mesurier McClure was an Irish-born British naval officer and Arctic explorer who, in 1854, completed the first traversal of the Northwest Passage by ship and sledge. He and his crew were trapped for nearly two years in the polar ice aboard HMS Investigator before being rescued in one of the most arduous expeditions in the history of Arctic exploration. He was knighted on his return and shared the Royal Geographical Society's Founder's Medal for the achievement.",
    alignment: "good",
    fallback: { birthYear: 1807, deathYear: 1873 },
  },
  {
    slug: "robert-falcon-scott",
    name: "Robert Falcon Scott",
    wikipediaTitle: "Robert_Falcon_Scott",
    description:
      "Captain Robert Falcon Scott was a British Royal Navy officer who led two pioneering Antarctic expeditions, the Discovery expedition of 1901–04 and the ill-fated Terra Nova expedition of 1910–13. On 17 January 1912 he reached the South Pole with four companions, only to discover that the Norwegian Roald Amundsen's party had arrived five weeks earlier; all five British men perished on the return march, with Scott's diary recovered eight months later. The scientific specimens his team collected on the journey, retrieved alongside their bodies, made lasting contributions to Antarctic geology and biology.",
    alignment: "good",
    fallback: { birthYear: 1868, deathYear: 1912 },
  },
  {
    slug: "howard-carter",
    name: "Howard Carter",
    wikipediaTitle: "Howard_Carter",
    description:
      "Howard Carter was a British archaeologist and Egyptologist who in November 1922 discovered the intact tomb of the 18th Dynasty pharaoh Tutankhamun in the Valley of the Kings, the most complete ancient Egyptian royal burial ever found. His decade-long excavation and meticulous cataloguing of the more than 5,000 objects within the tomb transformed the public perception of ancient Egypt and remains the foundational work of modern Egyptology. The find captured global imagination and established the methodological standards by which subsequent archaeological discoveries have been measured.",
    alignment: "good",
    fallback: { birthYear: 1874, deathYear: 1939 },
  },
  {
    slug: "mahatma-gandhi",
    name: "Mahatma Gandhi",
    wikipediaTitle: "Mahatma_Gandhi",
    description:
      "Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist, and political ethicist who led the successful campaign for India's independence from British rule through a sustained strategy of nonviolent civil disobedience. From the 1930 Salt March to the Quit India movement of 1942, his tactics of mass passive resistance reshaped global politics and inspired civil rights movements led by figures including Martin Luther King Jr. and Nelson Mandela. He was assassinated in January 1948, less than six months after Indian independence, by a Hindu nationalist who opposed his calls for religious tolerance.",
    alignment: "good",
    fallback: { birthYear: 1869, deathYear: 1948 },
  },
  {
    slug: "alice-paul",
    name: "Alice Paul",
    wikipediaTitle: "Alice_Paul",
    description:
      "Alice Stokes Paul was an American suffragist and women's rights activist who served as a principal strategist of the campaign that secured passage of the Nineteenth Amendment to the U.S. Constitution in 1920, prohibiting sex discrimination in voting. She organized the 1913 Woman Suffrage Procession in Washington and the Silent Sentinels picket of the Wilson White House, enduring imprisonment, beatings, and force-feeding during a hunger strike to draw national attention to the cause. After 1920 she drafted the Equal Rights Amendment, which she championed for the rest of her life.",
    alignment: "good",
    fallback: { birthYear: 1885, deathYear: 1977 },
  },
  {
    slug: "helen-keller",
    name: "Helen Keller",
    wikipediaTitle: "Helen_Keller",
    description:
      "Helen Adams Keller was an American author, disability rights advocate, and political activist who became deaf and blind in infancy and went on to become the first deaf-blind person in the United States to earn a bachelor's degree. With her teacher Anne Sullivan she developed the literacy and communication skills that allowed her to publish a dozen books and lecture across more than 25 countries. She was a founding member of the American Civil Liberties Union and a lifelong advocate for socialism, women's suffrage, and disability rights, though her radical politics drew sustained FBI surveillance.",
    alignment: "good",
    fallback: { birthYear: 1880, deathYear: 1968 },
  },
  {
    slug: "susan-b-anthony",
    name: "Susan B. Anthony",
    wikipediaTitle: "Susan_B._Anthony",
    description:
      "Susan B. Anthony was an American social reformer and women's rights activist who played a pivotal role in the U.S. women's suffrage movement, co-founding the National Woman Suffrage Association with Elizabeth Cady Stanton and the American Equal Rights Association. In 1872 she was arrested and convicted for casting a ballot in the presidential election in Rochester, New York, refusing to pay the resulting fine in protest. She died in 1906, fourteen years before the Nineteenth Amendment finally enfranchised American women.",
    alignment: "good",
    fallback: { birthYear: 1820, deathYear: 1906 },
  },
  {
    slug: "sojourner-truth",
    name: "Sojourner Truth",
    wikipediaTitle: "Sojourner_Truth",
    description:
      "Sojourner Truth, born Isabella Bomefree into slavery in New York around 1797, escaped to freedom with her infant daughter in 1826 and became one of the most powerful abolitionist and women's rights orators of the 19th century. In 1828 she became the first Black woman to win a court case against a white man, successfully recovering her son who had been illegally sold into slavery in Alabama. Her 1851 \"Ain't I a Woman?\" speech at a women's rights convention in Akron, Ohio, remains a defining text of intersectional American activism.",
    alignment: "good",
    fallback: { birthYear: 1797, deathYear: 1883 },
  },
  {
    slug: "frederick-douglass",
    name: "Frederick Douglass",
    wikipediaTitle: "Frederick_Douglass",
    description:
      "Frederick Douglass was an American social reformer, abolitionist, orator, and statesman who became the most influential leader of the 19th-century African American civil rights movement. After escaping slavery in Maryland in 1838, he wrote three autobiographies—beginning with the 1845 Narrative of the Life of Frederick Douglass, an American Slave—that became foundational texts of the abolitionist cause. He served as U.S. Marshal for the District of Columbia, recorder of deeds, and U.S. minister to Haiti, and was the first African American nominated for vice president on a major-party ticket.",
    alignment: "good",
    fallback: { birthYear: 1817, deathYear: 1895 },
  },
  {
    slug: "harriet-tubman",
    name: "Harriet Tubman",
    wikipediaTitle: "Harriet_Tubman",
    description:
      "Harriet Tubman was an American abolitionist who escaped slavery in Maryland in 1849 and returned approximately 13 times via the Underground Railroad to lead some 70 enslaved people to freedom, never losing a passenger. During the American Civil War she served as an armed scout, spy, and nurse for the Union Army, and in 1863 she led the Combahee River Raid that liberated more than 700 enslaved people in South Carolina—the first U.S. military operation planned and led by a woman. In her later years she became an active campaigner for women's suffrage.",
    alignment: "good",
    fallback: { birthYear: 1822, deathYear: 1913 },
  },
  {
    slug: "nat-turner",
    name: "Nat Turner",
    wikipediaTitle: "Nat_Turner",
    description:
      "Nat Turner was an enslaved Black carpenter and lay preacher who in August 1831 led a four-day rebellion of enslaved and free Black people in Southampton County, Virginia—the most consequential slave revolt in U.S. history. The uprising killed roughly 55 white enslavers and family members before being suppressed by state militias, who, along with vigilante mobs, killed approximately 120 Black people in retaliation, many uninvolved in the revolt. Turner was captured in October 1831, tried, hanged, and skinned, but his rebellion permanently shattered the antebellum South's myth of contented enslavement.",
    alignment: "good",
    fallback: { birthYear: 1800, deathYear: 1831 },
  },
  {
    slug: "ida-b-wells",
    name: "Ida B. Wells",
    wikipediaTitle: "Ida_B._Wells",
    description:
      "Ida Bell Wells-Barnett was an American investigative journalist, sociologist, and civil rights leader who, throughout the 1890s, documented the systematic lynching of African Americans across the South in works including Southern Horrors and The Red Record. Driven from Memphis after a white mob destroyed her newspaper office in 1892, she continued her anti-lynching campaign nationally and internationally, founding the National Association of Colored Women's Clubs and helping found the NAACP. She was posthumously awarded a Pulitzer Prize special citation in 2020 for her reporting.",
    alignment: "good",
    fallback: { birthYear: 1862, deathYear: 1931 },
  },
  {
    slug: "w-e-b-du-bois",
    name: "W. E. B. Du Bois",
    wikipediaTitle: "W._E._B._Du_Bois",
    description:
      "William Edward Burghardt Du Bois was an American sociologist, historian, and civil rights activist who in 1895 became the first African American to earn a Ph.D. from Harvard University. He co-founded the NAACP in 1909 and edited its magazine The Crisis for 24 years, while authoring landmark works including The Souls of Black Folk (1903) and Black Reconstruction in America (1935) that demolished prevailing white-supremacist narratives in American sociology and history. He spent the last years of his life in Ghana, where he died a citizen on the eve of the 1963 March on Washington.",
    alignment: "good",
    fallback: { birthYear: 1868, deathYear: 1963 },
  },
  {
    slug: "thurgood-marshall",
    name: "Thurgood Marshall",
    wikipediaTitle: "Thurgood_Marshall",
    description:
      "Thurgood Marshall served as an Associate Justice of the Supreme Court of the United States from 1967 to 1991, becoming the first African American to sit on the Court. As a civil rights attorney leading the NAACP Legal Defense and Educational Fund, he won 29 of the 32 cases he argued before the Supreme Court, most famously Brown v. Board of Education in 1954, which struck down racial segregation in public schools. Across his quarter-century on the bench he was a steadfast defender of civil rights, free speech, and the rights of the accused.",
    alignment: "good",
    fallback: { birthYear: 1908, deathYear: 1993 },
  },
  {
    slug: "cesar-chavez",
    name: "Cesar Chavez",
    wikipediaTitle: "Cesar_Chavez",
    description:
      "Cesar Estrada Chavez was an American labor unionist and civil rights activist who, with Dolores Huerta and Gilbert Padilla, co-founded the National Farm Workers Association in 1962, later the United Farm Workers. He led the 1965–70 Delano grape strike and accompanying national consumer boycott that won the first significant union contracts for migrant agricultural laborers in U.S. history. Throughout his career he insisted on nonviolence as a strategic and moral commitment, undertaking multiple prolonged fasts—including a 25-day fast in 1968—to keep his movement disciplined.",
    alignment: "good",
    fallback: { birthYear: 1927, deathYear: 1993 },
  },
  {
    slug: "malcolm-x",
    name: "Malcolm X",
    wikipediaTitle: "Malcolm_X",
    description:
      "Malcolm X was an African American Muslim minister and human rights activist who served as the foremost public spokesman for the Nation of Islam from 1952 to 1964 before founding the Organization of Afro-American Unity to broaden the Black liberation struggle into a global human rights movement. After his pilgrimage to Mecca in 1964 he publicly broke with the racial separatism of his earlier years and embraced a vision of multiracial solidarity rooted in Sunni Islam. He was assassinated at the Audubon Ballroom in Harlem in February 1965, days before his 40th birthday.",
    alignment: "good",
    fallback: { birthYear: 1925, deathYear: 1965 },
  },
  {
    slug: "rosa-parks",
    name: "Rosa Parks",
    wikipediaTitle: "Rosa_Parks",
    description:
      "Rosa Louise McCauley Parks was an American civil rights activist whose December 1955 refusal to surrender her seat on a segregated bus in Montgomery, Alabama sparked the 381-day Montgomery bus boycott that catapulted Martin Luther King Jr. to national prominence and helped end legalized public-transit segregation. Far from a one-off act, her defiance came after more than a decade of organizing as secretary of the Montgomery NAACP and as an investigator of sexual violence against Black women. She was awarded the Presidential Medal of Freedom in 1996 and the Congressional Gold Medal in 1999, and on her death became the first woman ever to lie in honor in the U.S. Capitol Rotunda.",
    alignment: "good",
    fallback: { birthYear: 1913, deathYear: 2005 },
  },
  {
    slug: "witold-pilecki",
    name: "Witold Pilecki",
    wikipediaTitle: "Witold_Pilecki",
    description:
      "Witold Pilecki was a Polish cavalry officer and resistance leader who in 1940 voluntarily allowed himself to be captured and sent to Auschwitz in order to gather intelligence and organize resistance inside the camp. Over nearly three years of imprisonment he authored the first systematic reports to the Allies documenting the gas chambers and mass extermination, before escaping in 1943 and rejoining the Polish underground. Arrested by the Stalinist Polish secret police after the war for his loyalty to the Polish government-in-exile, he was tortured, convicted in a show trial, and executed in 1948.",
    alignment: "good",
    fallback: { birthYear: 1901, deathYear: 1948 },
  },
  {
    slug: "anne-frank",
    name: "Anne Frank",
    wikipediaTitle: "Anne_Frank",
    description:
      "Annelies Marie \"Anne\" Frank was a German-born Jewish diarist who, with her family and four others, hid for over two years in a concealed annex above her father's Amsterdam business during the Nazi occupation of the Netherlands. The diary she kept from 1942 until the group's betrayal in August 1944 was published posthumously by her father in 1947 as The Diary of a Young Girl, and has since been translated into more than 70 languages and read by tens of millions of people worldwide. She died of typhus at the Bergen-Belsen concentration camp in early 1945, weeks before the camp's liberation by British forces, at the age of 15.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1945 },
  },
  {
    slug: "joy-harjo",
    name: "Joy Harjo",
    wikipediaTitle: "Joy_Harjo",
    description:
      "Joy Harjo is an American poet, musician, and playwright who served three terms as the 23rd United States Poet Laureate from 2019 to 2022, becoming the first Native American to hold the position. A citizen of the Muscogee Nation, she has published a dozen books of poetry that center Indigenous voices, history, and resilience, and has performed her work as a saxophonist with her own bands across decades. Her honors include the Ruth Lilly Poetry Prize, the Wallace Stevens Award, and election to the American Academy of Arts and Letters.",
    alignment: "good",
    fallback: { birthYear: 1951, deathYear: null },
  },
  {
    slug: "giuseppe-garibaldi",
    name: "Giuseppe Garibaldi",
    wikipediaTitle: "Giuseppe_Garibaldi",
    description:
      "Giuseppe Garibaldi was an Italian general and revolutionary republican whose campaigns played a central role in the Risorgimento and the creation of the Kingdom of Italy. In 1860 his Expedition of the Thousand—a volunteer force of red-shirted irregulars—seized the Kingdom of the Two Sicilies in a matter of months, delivering southern Italy to the new unified state. Known as the \"Hero of the Two Worlds\" for his earlier guerrilla campaigns in South America, he refused titles, lands, and pensions in old age and remains one of the most celebrated figures of 19th-century European nationalism.",
    alignment: "good",
    fallback: { birthYear: 1807, deathYear: 1882 },
  },
  {
    slug: "mikhail-bakunin",
    name: "Mikhail Bakunin",
    wikipediaTitle: "Mikhail_Bakunin",
    description:
      "Mikhail Alexandrovich Bakunin was a Russian revolutionary and political philosopher who became one of the most influential figures of 19th-century anarchism and the founder of collectivist anarchism. Imprisoned for years in tsarist fortresses and exiled to Siberia before escaping to Western Europe via Japan and the United States, he engaged in lifelong polemic with Karl Marx over the dangers of state power, arguing that any revolutionary state would inevitably reproduce tyranny. His writings, particularly God and the State and Statism and Anarchy, remain foundational texts in libertarian socialist thought.",
    alignment: "good",
    fallback: { birthYear: 1814, deathYear: 1876 },
  },
  {
    slug: "aleksandr-solzhenitsyn",
    name: "Aleksandr Solzhenitsyn",
    wikipediaTitle: "Aleksandr_Solzhenitsyn",
    description:
      "Aleksandr Isayevich Solzhenitsyn was a Soviet and Russian author whose work helped expose the political repression of the Stalinist era to a global audience. After eight years in the Gulag for criticizing Stalin in private correspondence, he drew on memory and clandestine interviews to write One Day in the Life of Ivan Denisovich and the three-volume nonfiction work The Gulag Archipelago, which sold tens of millions of copies and \"amounted to a head-on challenge to the Soviet state.\" He was awarded the 1970 Nobel Prize in Literature and was forcibly exiled in 1974 before returning to Russia after the Soviet collapse.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 2008 },
  },
  {
    slug: "ai-weiwei",
    name: "Ai Weiwei",
    wikipediaTitle: "Ai_Weiwei",
    description:
      "Ai Weiwei is a Chinese contemporary artist, documentarian, and human rights activist whose work has placed him among the world's most prominent dissidents under the Chinese Communist Party. Following the 2008 Sichuan earthquake he led a citizens' investigation that documented the names of more than 5,000 schoolchildren killed in shoddily built classrooms—work that resulted in police beatings, surveillance, and his 81-day secret detention in 2011. Now living in exile, he has continued to produce monumental installations and films addressing displacement, censorship, and state violence at major institutions worldwide.",
    alignment: "good",
    fallback: { birthYear: 1957, deathYear: null },
  },
  {
    slug: "ahmad-shah-massoud",
    name: "Ahmad Shah Massoud",
    wikipediaTitle: "Ahmad_Shah_Massoud",
    description:
      "Ahmad Shah Massoud was an Afghan military commander and politician known as the \"Lion of Panjshir\" for his decade-long resistance to the Soviet occupation of Afghanistan from 1979 to 1989. After the Soviet withdrawal he led the Northern Alliance against the Taliban regime that took Kabul in 1996, holding out in the Panjshir Valley until his assassination on 9 September 2001 by al-Qaeda operatives posing as journalists—two days before the September 11 attacks. He is honored as a national hero of Afghanistan.",
    alignment: "good",
    fallback: { birthYear: 1953, deathYear: 2001 },
  },
  {
    slug: "galileo-galilei",
    name: "Galileo Galilei",
    wikipediaTitle: "Galileo_Galilei",
    description:
      "Galileo Galilei was an Italian astronomer, physicist, and engineer often described as the father of observational astronomy and the modern scientific method. Using telescopes of his own design he discovered the four largest moons of Jupiter, mapped the phases of Venus, and provided decisive empirical support for the Copernican heliocentric model of the solar system. Convicted of heresy by the Roman Inquisition in 1633 for advocating heliocentrism, he spent the rest of his life under house arrest; the Catholic Church formally acknowledged the error of his condemnation in 1992.",
    alignment: "good",
    fallback: { birthYear: 1564, deathYear: 1642 },
  },
  {
    slug: "isaac-newton",
    name: "Isaac Newton",
    wikipediaTitle: "Isaac_Newton",
    description:
      "Sir Isaac Newton was an English mathematician, physicist, and astronomer whose 1687 Philosophiæ Naturalis Principia Mathematica formulated the laws of motion and universal gravitation, providing the first unified mathematical description of motion on Earth and in the heavens. He independently developed calculus alongside Gottfried Wilhelm Leibniz and produced foundational work in optics, including his prism experiments demonstrating that white light is composed of a spectrum of colors. He served as Master of the Royal Mint and as president of the Royal Society from 1703 until his death in 1727.",
    alignment: "good",
    fallback: { birthYear: 1642, deathYear: 1727 },
  },
  {
    slug: "nicolaus-copernicus",
    name: "Nicolaus Copernicus",
    wikipediaTitle: "Nicolaus_Copernicus",
    description:
      "Nicolaus Copernicus was a Renaissance polymath who formulated the heliocentric model of the solar system, displacing the Earth from its assumed position at the center of the universe. His 1543 De revolutionibus orbium coelestium, published in the year of his death, triggered the Copernican Revolution and laid the groundwork for the Scientific Revolution that would unfold over the following two centuries. Trained as a canon lawyer, mathematician, and physician, he produced the work over decades while serving as a Catholic canon in Frombork, Poland.",
    alignment: "good",
    fallback: { birthYear: 1473, deathYear: 1543 },
  },
  {
    slug: "charles-darwin",
    name: "Charles Darwin",
    wikipediaTitle: "Charles_Darwin",
    description:
      "Charles Robert Darwin was an English naturalist whose 1859 book On the Origin of Species established that all species of life have descended through evolutionary processes from common ancestors, with natural selection as the principal mechanism. The five-year voyage of HMS Beagle from 1831 to 1836 supplied the observations—particularly from the Galápagos Islands—that grounded his theory, which he refined for two more decades before publication. His later works including The Descent of Man extended the framework to human evolution and remain foundational to modern biology.",
    alignment: "good",
    fallback: { birthYear: 1809, deathYear: 1882 },
  },
  {
    slug: "alfred-nobel",
    name: "Alfred Nobel",
    wikipediaTitle: "Alfred_Nobel",
    description:
      "Alfred Bernhard Nobel was a Swedish chemist, engineer, and industrialist who invented dynamite in 1867 and held 355 patents over the course of his life across explosives, synthetic materials, and weapons systems. Confronting the violent legacy of his inventions after a French newspaper mistakenly published an obituary calling him \"the merchant of death,\" he rewrote his will in 1895 to bequeath his fortune to the establishment of the Nobel Prizes in physics, chemistry, physiology or medicine, literature, and peace. The first prizes were awarded in 1901, five years after his death.",
    alignment: "good",
    fallback: { birthYear: 1833, deathYear: 1896 },
  },
  {
    slug: "marie-curie",
    name: "Marie Curie",
    wikipediaTitle: "Marie_Curie",
    description:
      "Maria Salomea Skłodowska-Curie was a Polish-French physicist and chemist whose pioneering research on radioactivity—a term she coined—made her the first woman to win a Nobel Prize, the first person to win Nobel Prizes in two different scientific fields, and the first woman to become a professor at the University of Paris. She shared the 1903 Nobel Prize in Physics with her husband Pierre Curie and Henri Becquerel for the discovery of radioactivity, and won the 1911 Nobel Prize in Chemistry for the isolation of the elements radium and polonium. During World War I she developed mobile radiography units that brought x-ray imaging to the front lines, treating an estimated million wounded soldiers.",
    alignment: "good",
    fallback: { birthYear: 1867, deathYear: 1934 },
  },
  {
    slug: "pierre-curie",
    name: "Pierre Curie",
    wikipediaTitle: "Pierre_Curie",
    description:
      "Pierre Curie was a French physicist and chemist who was a pioneer in crystallography, magnetism, piezoelectricity, and radioactivity. Working alongside his wife Marie Curie, he shared the 1903 Nobel Prize in Physics with her and Henri Becquerel for their joint research on radiation phenomena, making the Curies the first married couple to share a Nobel Prize. He died at age 46 after being struck by a horse-drawn cart on a Paris street in 1906, leaving Marie to continue their work alone.",
    alignment: "good",
    fallback: { birthYear: 1859, deathYear: 1906 },
  },
  {
    slug: "albert-einstein",
    name: "Albert Einstein",
    wikipediaTitle: "Albert_Einstein",
    description:
      "Albert Einstein was a German-born theoretical physicist whose theories of special and general relativity rewrote the foundations of modern physics, replacing Newtonian assumptions about absolute space and time. His 1905 \"miracle year\" produced four papers including the mass–energy equivalence formula E = mc², and his 1915 general theory of relativity remains the modern theory of gravitation. He received the 1921 Nobel Prize in Physics for his explanation of the photoelectric effect, and after fleeing Nazi Germany in 1933 he became a leading public advocate for civil rights and nuclear nonproliferation.",
    alignment: "good",
    fallback: { birthYear: 1879, deathYear: 1955 },
  },
  {
    slug: "stephen-hawking",
    name: "Stephen Hawking",
    wikipediaTitle: "Stephen_Hawking",
    description:
      "Stephen William Hawking was an English theoretical physicist and cosmologist who held the Lucasian Chair of Mathematics at Cambridge from 1979 to 2009 and produced foundational work on black holes, including the 1974 prediction of the thermal radiation now known as Hawking radiation. His 1988 popular science book A Brief History of Time has sold more than 25 million copies and made cosmology accessible to mass audiences worldwide. Diagnosed with motor neurone disease at age 21 and given a few years to live, he continued to publish and lecture for more than five decades.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: 2018 },
  },
  {
    slug: "carl-sagan",
    name: "Carl Sagan",
    wikipediaTitle: "Carl_Sagan",
    description:
      "Carl Edward Sagan was an American astronomer, planetary scientist, and science communicator whose advocacy for science literacy reached hundreds of millions of viewers through the 1980 PBS series Cosmos: A Personal Voyage. He played an active role in NASA's Mariner, Viking, Voyager, and Galileo planetary missions, and his 1985 novel Contact was adapted into a major motion picture. A founder of the Planetary Society and a steadfast public skeptic of pseudoscience and nuclear escalation, he received the National Academy of Sciences' Public Welfare Medal in 1994.",
    alignment: "good",
    fallback: { birthYear: 1934, deathYear: 1996 },
  },
  {
    slug: "alexander-von-humboldt",
    name: "Alexander von Humboldt",
    wikipediaTitle: "Alexander_von_Humboldt",
    description:
      "Friedrich Wilhelm Heinrich Alexander von Humboldt was a Prussian polymath, geographer, and naturalist whose five-year expedition through South America and Mexico from 1799 to 1804 produced thousands of pages of empirical observation that founded the modern field of biogeography. He was among the first scientists to argue, as early as 1800, that human activity could induce climate change at a global scale, and his integrative approach to the natural world influenced Charles Darwin, Henry David Thoreau, and generations of ecologists. The 30-volume Cosmos he published in his last decades attempted nothing less than a unified description of the physical universe.",
    alignment: "good",
    fallback: { birthYear: 1769, deathYear: 1859 },
  },
  {
    slug: "samuel-morse",
    name: "Samuel Morse",
    wikipediaTitle: "Samuel_Morse",
    description:
      "Samuel Finley Breese Morse was an American inventor and painter who, in middle age, co-developed the single-wire electric telegraph and the eponymous Morse code that allowed letters to be transmitted as patterns of dots and dashes. His 1844 demonstration message—\"What hath God wrought\"—sent over a 38-mile line from Washington to Baltimore inaugurated the era of long-distance instant communication. Before turning to invention he had been an accomplished portrait painter and a founding president of the National Academy of Design.",
    alignment: "good",
    fallback: { birthYear: 1791, deathYear: 1872 },
  },
  {
    slug: "florence-nightingale",
    name: "Florence Nightingale",
    wikipediaTitle: "Florence_Nightingale",
    description:
      "Florence Nightingale was an English social reformer, statistician, and the founder of modern nursing whose sanitation reforms during the Crimean War dramatically reduced soldier mortality at the British military hospital in Scutari. Her 1858 polar-area diagrams visualizing the causes of soldier deaths pioneered the use of statistical graphics in public health advocacy and earned her election as the first woman fellow of the Royal Statistical Society. The Nightingale Training School she opened at St. Thomas' Hospital in 1860 established nursing as a respected, professional, and educated vocation for women.",
    alignment: "good",
    fallback: { birthYear: 1820, deathYear: 1910 },
  },
  {
    slug: "elizabeth-blackwell",
    name: "Elizabeth Blackwell",
    wikipediaTitle: "Elizabeth_Blackwell",
    description:
      "Elizabeth Blackwell was an English-American physician who in 1849 became the first woman to earn a medical degree in the United States, graduating at the top of her class from Geneva Medical College in upstate New York. Refused admission by every other school she applied to, she went on to co-found the New York Infirmary for Indigent Women and Children in 1857 and the Women's Medical College of the New York Infirmary in 1868, opening medical careers to generations of women. She was also the first woman entered on the British General Medical Council's Medical Register.",
    alignment: "good",
    fallback: { birthYear: 1821, deathYear: 1910 },
  },
  {
    slug: "louis-pasteur",
    name: "Louis Pasteur",
    wikipediaTitle: "Louis_Pasteur",
    description:
      "Louis Pasteur was a French chemist and microbiologist whose work established the germ theory of disease and the principles of vaccination, fundamentally reshaping medicine and public health. He invented the heat-treatment process now known as pasteurization, developed the first effective vaccines for anthrax and rabies—the latter administered in 1885 to a 9-year-old boy bitten by a rabid dog—and is credited with saving millions of lives through his discoveries. He co-founded the Pasteur Institute in Paris in 1887, where he served as director until his death.",
    alignment: "good",
    fallback: { birthYear: 1822, deathYear: 1895 },
  },
  {
    slug: "emile-roux",
    name: "Émile Roux",
    wikipediaTitle: "Émile_Roux",
    description:
      "Pierre Paul Émile Roux was a French physician and bacteriologist who served as one of Louis Pasteur's closest collaborators and co-founded the Pasteur Institute in 1887. Working with Alexandre Yersin, he isolated the diphtheria toxin and developed the diphtheria antitoxin, the first effective therapy for a disease that had been a leading killer of children. He also conducted important research on cholera, rabies, and tuberculosis, and is regarded as one of the founders of the modern field of immunology.",
    alignment: "good",
    fallback: { birthYear: 1853, deathYear: 1933 },
  },
  {
    slug: "jonas-salk",
    name: "Jonas Salk",
    wikipediaTitle: "Jonas_Salk",
    description:
      "Jonas Edward Salk was an American virologist and medical researcher who in 1955 announced the development of the first effective vaccine against polio, a disease that had paralyzed or killed hundreds of thousands of American children each year. His insistence that the vaccine not be patented—\"There is no patent. Could you patent the sun?\"—made it accessible worldwide and is credited with eradicating polio in most of the globe. He later founded the Salk Institute for Biological Studies in La Jolla, California, where he spent his final decades on AIDS and immunology research.",
    alignment: "good",
    fallback: { birthYear: 1914, deathYear: 1995 },
  },
  {
    slug: "albert-sabin",
    name: "Albert Sabin",
    wikipediaTitle: "Albert_Sabin",
    description:
      "Albert Bruce Sabin was a Polish-American medical researcher who developed the oral polio vaccine, an attenuated live-virus formulation that proved cheaper and easier to administer than Salk's injectable inactivated vaccine and has since played the central role in nearly eradicating polio worldwide. Like Salk, he refused to patent the vaccine so that it could reach as many children as possible, and personally dosed his daughters before public trials to demonstrate its safety. He served as president of the Weizmann Institute of Science in Israel from 1969 to 1972.",
    alignment: "good",
    fallback: { birthYear: 1906, deathYear: 1993 },
  },
  {
    slug: "anthony-fauci",
    name: "Anthony Fauci",
    wikipediaTitle: "Anthony_Fauci",
    description:
      "Anthony Stephen Fauci is an American physician-scientist and immunologist who served as the director of the National Institute of Allergy and Infectious Diseases from 1984 to 2022 and as chief medical advisor to President Joe Biden from 2021 to 2022. Across nearly four decades he led the U.S. response to AIDS, SARS, anthrax, Ebola, Zika, and COVID-19, advising seven presidents from Reagan to Biden. President George W. Bush awarded him the Presidential Medal of Freedom in 2008 for his contributions to the President's Emergency Plan for AIDS Relief, which is credited with saving more than 25 million lives globally.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: null },
  },
  {
    slug: "nikola-tesla",
    name: "Nikola Tesla",
    wikipediaTitle: "Nikola_Tesla",
    description:
      "Nikola Tesla was a Serbian-American engineer and inventor whose work on the design of the modern alternating-current electricity supply system underlies essentially all subsequent electrical power distribution. His 1888 induction motor and polyphase AC system, licensed by Westinghouse, defeated Thomas Edison's competing direct-current standard in the so-called War of the Currents, and he later contributed pioneering work on radio, wireless lighting, X-rays, and rotating magnetic fields. He died in poverty in a New York hotel in 1943, having seen his name fade beneath the commercial successes of the inventors who built on his ideas.",
    alignment: "good",
    fallback: { birthYear: 1856, deathYear: 1943 },
  },
  {
    slug: "igor-sikorsky",
    name: "Igor Sikorsky",
    wikipediaTitle: "Igor_Sikorsky",
    description:
      "Igor Ivanovich Sikorsky was a Russian-American aviation pioneer who designed both the world's first multi-engine fixed-wing aircraft and the first practical mass-produced helicopter. After fleeing the Russian Revolution, he founded the Sikorsky Aero Engineering Corporation on Long Island in 1923 and went on to build the great Pan American Clippers that opened transoceanic flying-boat service in the 1930s. His 1939 Vought-Sikorsky VS-300, the first practical single-rotor helicopter, established the design template used by virtually every helicopter built since.",
    alignment: "good",
    fallback: { birthYear: 1889, deathYear: 1972 },
  },
  {
    slug: "wilbur-wright",
    name: "Wilbur Wright",
    wikipediaTitle: "Wright_brothers",
    description:
      "Wilbur Wright, with his younger brother Orville, was an American aviation pioneer who invented, built, and flew the world's first successful powered, heavier-than-air aircraft. On 17 December 1903 the brothers achieved the first sustained, controlled, powered flights with the Wright Flyer at Kill Devil Hills near Kitty Hawk, North Carolina. Their breakthrough three-axis control system, perfected in their Dayton, Ohio bicycle shop, became the foundational technique that has made fixed-wing flight possible ever since.",
    alignment: "good",
    fallback: { birthYear: 1867, deathYear: 1912 },
  },
  {
    slug: "dorothy-hodgkin",
    name: "Dorothy Hodgkin",
    wikipediaTitle: "Dorothy_Hodgkin",
    description:
      "Dorothy Mary Crowfoot Hodgkin was an English chemist who advanced X-ray crystallography into the principal technique for determining the molecular structure of complex biomolecules. She received the 1964 Nobel Prize in Chemistry—the only British woman ever to win a science Nobel—for her work establishing the structures of penicillin and vitamin B12, and in 1969 she completed the structure of insulin after 35 years of effort. She was awarded the Order of Merit in 1965, only the second woman ever to receive the honor after Florence Nightingale.",
    alignment: "good",
    fallback: { birthYear: 1910, deathYear: 1994 },
  },
  {
    slug: "ada-lovelace",
    name: "Ada Lovelace",
    wikipediaTitle: "Ada_Lovelace",
    description:
      "Augusta Ada King, Countess of Lovelace, was an English mathematician and writer whose 1843 notes on Charles Babbage's proposed Analytical Engine included what is now widely regarded as the first published algorithm intended to be executed by a machine. The only legitimate child of the poet Lord Byron, she was also the first to recognize that such machines could in principle manipulate symbols of any kind—not merely numbers—anticipating the conceptual foundations of general-purpose computing by more than a century. The U.S. Department of Defense programming language Ada is named in her honor.",
    alignment: "good",
    fallback: { birthYear: 1815, deathYear: 1852 },
  },
  {
    slug: "alan-turing",
    name: "Alan Turing",
    wikipediaTitle: "Alan_Turing",
    description:
      "Alan Mathison Turing was an English mathematician and logician widely regarded as the father of theoretical computer science and artificial intelligence. His 1936 paper introducing the abstract \"Turing machine\" formalized the concept of computation itself, and during the Second World War his cryptanalytic work at Bletchley Park—particularly his refinement of the bombe machine—broke the German Enigma cipher and is credited with shortening the war by years and saving millions of lives. Prosecuted in 1952 for homosexual acts then criminal under British law and chemically castrated as a sentence, he died in 1954 of cyanide poisoning at age 41; he received a posthumous royal pardon in 2013.",
    alignment: "good",
    fallback: { birthYear: 1912, deathYear: 1954 },
  },
  {
    slug: "alan-kay",
    name: "Alan Kay",
    wikipediaTitle: "Alan_Kay",
    description:
      "Alan Curtis Kay is an American computer scientist who pioneered object-oriented programming, the windowed graphical user interface, and the conception of the personal computer as we know it today. At Xerox PARC in the 1970s he led the development of the Smalltalk programming language—coining the term \"object-oriented\"—and the Dynabook concept that anticipated the laptop and tablet by decades. He received the 2003 Turing Award and the 2004 Kyoto Prize for his foundational contributions to modern computing.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: null },
  },
  {
    slug: "akio-morita",
    name: "Akio Morita",
    wikipediaTitle: "Akio_Morita",
    description:
      "Akio Morita was a Japanese physicist and entrepreneur who co-founded Sony Corporation with Masaru Ibuka in 1946 and built it into one of the world's most influential consumer electronics companies. Under his leadership Sony introduced the Trinitron color television, the compact cassette recorder, the Walkman portable audio player, and the Betamax and CD formats, helping define late-20th-century consumer media. As Sony's chairman from 1976 to 1994, he was widely credited with reframing the global perception of Japanese manufacturing from imitative to innovative.",
    alignment: "good",
    fallback: { birthYear: 1921, deathYear: 1999 },
  },
  {
    slug: "mary-leakey",
    name: "Mary Leakey",
    wikipediaTitle: "Mary_Leakey",
    description:
      "Mary Douglas Leakey was a British paleoanthropologist whose discoveries at Olduvai Gorge and Laetoli in Tanzania reshaped the modern understanding of human evolution. In 1959 she unearthed the 1.75-million-year-old Zinjanthropus (Paranthropus boisei) skull, and in 1978 she discovered the Laetoli footprints—a 3.6-million-year-old trail of bipedal hominin tracks preserved in volcanic ash that proved upright walking predated the development of large brains. Her meticulous fieldwork over six decades, much of it conducted alongside her husband Louis Leakey, established East Africa as the cradle of hominin evolution.",
    alignment: "good",
    fallback: { birthYear: 1913, deathYear: 1996 },
  },
  {
    slug: "sally-ride",
    name: "Sally Ride",
    wikipediaTitle: "Sally_Ride",
    description:
      "Sally Kristen Ride was an American astronaut and physicist who in June 1983 became the first American woman in space and at age 32 the youngest American ever to fly in space, aboard the Space Shuttle Challenger mission STS-7. She flew a second mission in 1984 and later served on the presidential commissions investigating both the Challenger and Columbia accidents. After leaving NASA she founded Sally Ride Science to promote STEM education for girls, and following her death in 2012 she was posthumously identified as the first known LGBTQ astronaut.",
    alignment: "good",
    fallback: { birthYear: 1951, deathYear: 2012 },
  },
  {
    slug: "yuri-gagarin",
    name: "Yuri Gagarin",
    wikipediaTitle: "Yuri_Gagarin",
    description:
      "Yuri Alekseyevich Gagarin was a Soviet pilot and cosmonaut who on 12 April 1961 became the first human to journey into outer space, completing a single orbit of Earth aboard Vostok 1 in 108 minutes. The achievement made him an international celebrity overnight and a defining propaganda victory for the Soviet Union in the early Space Race. He was killed in a routine training flight in a MiG-15UTI on 27 March 1968 at the age of 34.",
    alignment: "good",
    fallback: { birthYear: 1934, deathYear: 1968 },
  },
  {
    slug: "alan-shepard",
    name: "Alan Shepard",
    wikipediaTitle: "Alan_Shepard",
    description:
      "Alan Bartlett Shepard Jr. was an American astronaut and naval aviator who in May 1961 became the first American and the second person ever to travel into space, piloting Mercury-Redstone 3's Freedom 7 capsule on a 15-minute suborbital flight. Selected as one of NASA's original Mercury Seven, he commanded the Apollo 14 mission to the Moon in 1971 at age 47, becoming the fifth and oldest person to walk on the lunar surface—and famously hit two golf balls with a makeshift six-iron during his moonwalk.",
    alignment: "good",
    fallback: { birthYear: 1923, deathYear: 1998 },
  },
  {
    slug: "rachel-carson",
    name: "Rachel Carson",
    wikipediaTitle: "Rachel_Carson",
    description:
      "Rachel Louise Carson was an American marine biologist and conservationist whose 1962 book Silent Spring documented the ecological devastation caused by synthetic pesticides—particularly DDT—and is widely credited with launching the modern environmental movement. The chemical industry mounted a sustained personal campaign to discredit her, but her testimony to Congress in 1963 led to a presidential review that confirmed her findings and ultimately to the 1972 U.S. ban on DDT. She was posthumously awarded the Presidential Medal of Freedom in 1980 for her contributions to environmental science.",
    alignment: "good",
    fallback: { birthYear: 1907, deathYear: 1964 },
  },
  {
    slug: "jane-goodall",
    name: "Jane Goodall",
    wikipediaTitle: "Jane_Goodall",
    description:
      "Dame Jane Morris Goodall was an English primatologist and anthropologist whose six decades of field research on the wild chimpanzees of Gombe Stream National Park in Tanzania transformed scientific understanding of primate behavior and human evolution. Beginning in 1960 under the mentorship of paleontologist Louis Leakey, she documented chimpanzees making and using tools, hunting cooperatively, and waging coalitionary violence—observations that overturned long-standing assumptions about what separated humans from other great apes. She founded the Jane Goodall Institute in 1977 and remained an active conservation and animal-welfare advocate until her death in October 2025.",
    alignment: "good",
    fallback: { birthYear: 1934, deathYear: 2025 },
  },
  {
    slug: "david-attenborough",
    name: "David Attenborough",
    wikipediaTitle: "David_Attenborough",
    description:
      "Sir David Frederick Attenborough is an English broadcaster and natural historian whose presenting career has spanned more than seven decades, beginning with Zoo Quest in 1954 and continuing through landmark series including Life on Earth, The Blue Planet, Planet Earth, and Our Planet. He is the only person to have won BAFTA awards for programmes in black-and-white, colour, high-definition, 3D, and 4K, and his late-career documentaries have become some of the most prominent global media on biodiversity loss and climate change. He was knighted in 1985 and made a member of the Order of Merit in 2005.",
    alignment: "good",
    fallback: { birthYear: 1926, deathYear: null },
  },
  {
    slug: "rosalind-franklin",
    name: "Rosalind Franklin",
    wikipediaTitle: "Rosalind_Franklin",
    description:
      "Rosalind Elsie Franklin was an English chemist and X-ray crystallographer whose images of DNA—particularly the now-famous \"Photograph 51\" produced in her King's College London laboratory in 1952—provided the critical experimental evidence that allowed James Watson and Francis Crick to deduce the double-helix structure of DNA. Her contributions were largely uncredited during her lifetime, and she died of ovarian cancer at age 37 in 1958, four years before Watson, Crick, and Maurice Wilkins received the Nobel Prize for the discovery. She also produced foundational work on the molecular structure of RNA, viruses, coal, and graphite.",
    alignment: "good",
    fallback: { birthYear: 1920, deathYear: 1958 },
  },
  {
    slug: "francis-crick",
    name: "Francis Crick",
    wikipediaTitle: "Francis_Crick",
    description:
      "Francis Harry Compton Crick was an English molecular biologist and biophysicist who, with James Watson, deduced the double-helix structure of DNA in 1953—drawing critically on the X-ray crystallography of Rosalind Franklin and Maurice Wilkins. His subsequent work articulated the \"central dogma\" of molecular biology describing the flow of genetic information from DNA to RNA to protein, and helped decipher the genetic code. He shared the 1962 Nobel Prize in Physiology or Medicine with Watson and Wilkins, and devoted his later years to consciousness research at the Salk Institute.",
    alignment: "good",
    fallback: { birthYear: 1916, deathYear: 2004 },
  },
  {
    slug: "gregor-mendel",
    name: "Gregor Mendel",
    wikipediaTitle: "Gregor_Mendel",
    description:
      "Gregor Johann Mendel was an Augustinian friar and abbot of St. Thomas' Abbey in Brno who, between 1856 and 1863, conducted breeding experiments on roughly 28,000 pea plants that revealed the statistical laws of inheritance now named for him. His 1866 paper went largely unread for 35 years until its rediscovery around 1900, when it became the foundation of the new science of genetics. He is now universally recognized as the founder of the field, and his \"Mendelian inheritance\" remains the conceptual cornerstone of all subsequent genetic theory.",
    alignment: "good",
    fallback: { birthYear: 1822, deathYear: 1884 },
  },
  {
    slug: "abraham-maslow",
    name: "Abraham Maslow",
    wikipediaTitle: "Abraham_Maslow",
    description:
      "Abraham Harold Maslow was an American psychologist who created the hierarchy of needs, a theory of human motivation introduced in his 1943 paper \"A Theory of Human Motivation\" and elaborated in his 1954 book Motivation and Personality. A founder of humanistic psychology, he insisted on studying human strengths and self-actualization rather than reducing people to a \"bag of symptoms,\" and his framework has become foundational across psychology, education, business management, and nursing. He served as president of the American Psychological Association in 1967.",
    alignment: "good",
    fallback: { birthYear: 1908, deathYear: 1970 },
  },
  {
    slug: "aleksei-leontiev",
    name: "Aleksei Leontiev",
    wikipediaTitle: "Aleksei_Leontiev",
    description:
      "Aleksei Nikolayevich Leontiev was a Soviet developmental psychologist and philosopher who built on the work of Lev Vygotsky to develop activity theory, a framework that conceives human consciousness and behavior as emerging from culturally mediated, goal-directed activity within social contexts. He served as dean of the psychology faculty at Moscow State University and produced foundational works including Activity, Consciousness, and Personality, which shaped half a century of human-development research outside the West. His work continues to influence cognitive science, education research, and human-computer interaction.",
    alignment: "good",
    fallback: { birthYear: 1903, deathYear: 1979 },
  },
  {
    slug: "aime-bonpland",
    name: "Aimé Bonpland",
    wikipediaTitle: "Aimé_Bonpland",
    description:
      "Aimé Jacques Alexandre Bonpland was a French explorer and botanist who accompanied Alexander von Humboldt on the celebrated 1799–1804 expedition through Spanish America, co-authoring the multi-volume scientific results. He cataloged some 6,000 plant species new to European science during the journey and later served as botanist at Empress Joséphine's Malmaison gardens. He emigrated to South America in 1816, where he was imprisoned for nearly a decade by the Paraguayan dictator José Gaspar Rodríguez de Francia before living out his life as a botanist in Argentina.",
    alignment: "good",
    fallback: { birthYear: 1773, deathYear: 1858 },
  },
  {
    slug: "abraham-gesner",
    name: "Abraham Gesner",
    wikipediaTitle: "Abraham_Pineo_Gesner",
    description:
      "Abraham Pineo Gesner was a Canadian physician, geologist, and inventor who in 1846 distilled a clean-burning lamp fuel from coal and bitumen that he named kerosene. The new fuel quickly displaced whale oil as the dominant illuminant of the 19th century, lowering lighting costs for ordinary households and incidentally helping to relieve the catastrophic pressure of commercial whaling on global cetacean populations. He also produced foundational survey work on the geology and natural history of New Brunswick and Nova Scotia.",
    alignment: "good",
    fallback: { birthYear: 1797, deathYear: 1864 },
  },
  {
    slug: "akira-toriyama",
    name: "Akira Toriyama",
    wikipediaTitle: "Akira_Toriyama",
    description:
      "Akira Toriyama was a Japanese manga artist and character designer regarded as one of the most influential authors in the history of manga. His series Dragon Ball, serialized in Weekly Shōnen Jump from 1984 to 1995, became one of the best-selling and most-watched franchises in the world, fundamentally shaping the global popularity of anime and manga, while his earlier Dr. Slump won the 1981 Shogakukan Manga Award. He also designed the iconic characters of the Dragon Quest and Chrono Trigger video game series, and died of a subdural hematoma in March 2024.",
    alignment: "good",
    fallback: { birthYear: 1955, deathYear: 2024 },
  },
  {
    slug: "adam-smith",
    name: "Adam Smith",
    wikipediaTitle: "Adam_Smith",
    description:
      "Adam Smith was a Scottish moral philosopher and economist whose two principal works, The Theory of Moral Sentiments (1759) and An Inquiry into the Nature and Causes of the Wealth of Nations (1776), founded the modern discipline of political economy and the analytical framework underpinning classical and contemporary economics. His arguments for the division of labor, free markets, and the productive role of self-interest reshaped Enlightenment thought, while his often-overlooked emphasis on sympathy, justice, and moral sentiment grounded those arguments in a broader ethical theory. He spent the latter part of his life as Commissioner of Customs in Edinburgh.",
    alignment: "good",
    fallback: { birthYear: 1723, deathYear: 1790 },
  },
  {
    slug: "aleksandr-ostrovsky",
    name: "Aleksandr Ostrovsky",
    wikipediaTitle: "Alexander_Ostrovsky",
    description:
      "Alexander Nikolayevich Ostrovsky was a Russian playwright considered the greatest representative of the Russian realist period and effectively the founder of a Russian national theatrical repertoire. Across 47 original plays—including the canonical drama The Storm and the comedy Even a Wise Man Stumbles—he gave the Moscow merchant class and provincial life their first major dramatic treatment in Russian literature. His works remain among the most frequently performed plays on the Russian stage today.",
    alignment: "good",
    fallback: { birthYear: 1823, deathYear: 1886 },
  },
  {
    slug: "a-j-p-taylor",
    name: "A. J. P. Taylor",
    wikipediaTitle: "A._J._P._Taylor",
    description:
      "Alan John Percivale Taylor was an English historian who specialized in 19th- and 20th-century European diplomacy and brought academic history to mass audiences through hundreds of unscripted television lectures from the 1950s through the 1980s. His provocative 1961 book The Origins of the Second World War argued that Hitler's foreign policy followed conventional German aims rather than a master plan and triggered decades of revisionist debate among historians. A 2011 History Today poll named him the fourth most important historian of the previous 60 years.",
    alignment: "good",
    fallback: { birthYear: 1906, deathYear: 1990 },
  },
  {
    slug: "john-maynard-keynes",
    name: "John Maynard Keynes",
    wikipediaTitle: "John_Maynard_Keynes",
    description:
      "John Maynard Keynes, 1st Baron Keynes, was an English economist whose 1936 General Theory of Employment, Interest and Money fundamentally reshaped macroeconomic thought by arguing that aggregate demand—rather than market self-correction—drives economic output and that active fiscal policy could pull economies out of depression. His ideas underpinned the New Deal response to the Great Depression and the post-war Bretton Woods framework that he helped negotiate, in which he served as the principal British representative. He is widely regarded as the father of modern macroeconomics.",
    alignment: "good",
    fallback: { birthYear: 1883, deathYear: 1946 },
  },
  {
    slug: "noam-chomsky",
    name: "Noam Chomsky",
    wikipediaTitle: "Noam_Chomsky",
    description:
      "Avram Noam Chomsky is an American linguist, cognitive scientist, and political activist whose 1957 book Syntactic Structures revolutionized the study of language by proposing that the human capacity for grammar is innate and generative—a thesis that helped found the modern field of cognitive science. As an institute professor at MIT for over six decades, he produced more than 150 books spanning linguistics, philosophy of mind, and political analysis, including the influential Manufacturing Consent (with Edward Herman) on the political economy of the mass media. He is one of the most-cited living authors in the humanities and social sciences.",
    alignment: "good",
    fallback: { birthYear: 1928, deathYear: null },
  },
  {
    slug: "ada-e-yonath",
    name: "Ada E. Yonath",
    wikipediaTitle: "Ada_Yonath",
    description:
      "Ada E. Yonath is an Israeli crystallographer who shared the 2009 Nobel Prize in Chemistry with Venkatraman Ramakrishnan and Thomas A. Steitz for her studies on the structure and function of the ribosome. With her 2000 publication of the first complete crystal structure of a ribosomal subunit, she opened the molecular machinery of protein synthesis to detailed visualization, enabling a new generation of antibiotic research. She was the first Israeli woman to win a Nobel Prize and the first woman in 45 years to win the Nobel in Chemistry.",
    alignment: "good",
    fallback: { birthYear: 1939, deathYear: null },
  },
  {
    slug: "albert-hofmann",
    name: "Albert Hofmann",
    wikipediaTitle: "Albert_Hofmann",
    description:
      "Albert Hofmann was a Swiss chemist who in 1938 first synthesized lysergic acid diethylamide while researching ergot derivatives at Sandoz Laboratories in Basel, and on 19 April 1943 became the first person to discover its psychoactive effects after accidentally absorbing a dose through his fingertips. He later isolated and named the principal psychedelic mushroom compounds psilocybin and psilocin, and he authored more than 100 scientific papers as well as the autobiographical LSD: My Problem Child. He spent the rest of his life arguing that his discovery should be a tool of medicine and self-knowledge rather than a criminalized substance.",
    alignment: "good",
    fallback: { birthYear: 1906, deathYear: 2008 },
  },
  {
    slug: "al-geiberger",
    name: "Al Geiberger",
    wikipediaTitle: "Al_Geiberger",
    description:
      "Allen Lee Geiberger Sr. is an American former professional golfer who won 11 PGA Tour events including the 1966 PGA Championship. On 10 June 1977 at the Memphis Classic he became the first player to shoot a 59 in a PGA Tour event, an achievement that earned him the lifelong nickname \"Mr. 59\" and stood unmatched on the Tour for 14 years. He continued to compete successfully on the Senior PGA Tour into the 1980s and 1990s.",
    alignment: "good",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "william-shakespeare",
    name: "William Shakespeare",
    wikipediaTitle: "William_Shakespeare",
    description:
      "William Shakespeare was an English playwright, poet, and actor widely regarded as the greatest writer in the English language and the world's pre-eminent dramatist. His extant works—roughly 39 plays, 154 sonnets, and three long narrative poems—have been translated into every major living language and are performed more often than those of any other playwright in history. From the tragedies of Hamlet, King Lear, and Macbeth to comedies including A Midsummer Night's Dream and Twelfth Night, his contributions to dramatic structure, character, and the English vocabulary itself remain foundational to Western literature.",
    alignment: "good",
    fallback: { birthYear: 1564, deathYear: 1616 },
  },
  {
    slug: "charles-dickens",
    name: "Charles Dickens",
    wikipediaTitle: "Charles_Dickens",
    description:
      "Charles John Huffam Dickens was an English novelist and journalist regarded as the greatest novelist of the Victorian era, whose work created some of the best-known characters in English literature including Oliver Twist, David Copperfield, Ebenezer Scrooge, and Pip. His serialized novels, including A Christmas Carol, Bleak House, Great Expectations, and Our Mutual Friend, exposed Victorian London's poverty, child labor, and institutional cruelty to a vast readership and contributed directly to social reform. He combined a literary career with sustained journalism and public-speaking tours, and his social conscience left an indelible mark on the 19th-century novel.",
    alignment: "good",
    fallback: { birthYear: 1812, deathYear: 1870 },
  },
  {
    slug: "walter-scott",
    name: "Walter Scott",
    wikipediaTitle: "Walter_Scott",
    description:
      "Sir Walter Scott was a Scottish novelist, poet, and historian whose Waverley novels effectively invented the modern historical novel and shaped 19th-century European fiction. Beginning with Waverley in 1814, his anonymous bestsellers including Ivanhoe, Rob Roy, and The Heart of Midlothian made Scotland a romantic literary subject and influenced novelists from Balzac and Tolstoy to Cooper and Dumas. His narrative poems Marmion and The Lady of the Lake had earlier established him as the most popular poet in Britain, and his cultural influence remains a foundational element of modern Scottish national identity.",
    alignment: "good",
    fallback: { birthYear: 1771, deathYear: 1832 },
  },
  {
    slug: "mary-shelley",
    name: "Mary Shelley",
    wikipediaTitle: "Mary_Shelley",
    description:
      "Mary Wollstonecraft Shelley was an English novelist who at age 18 began Frankenstein; or, The Modern Prometheus, published in 1818 and now widely regarded as the first work of modern science fiction. The daughter of philosopher William Godwin and women's-rights advocate Mary Wollstonecraft, she eloped with the poet Percy Bysshe Shelley in 1814 and became central to the second-generation Romantic literary circle. After Percy's death she edited and championed his works while continuing her own career as a novelist, biographer, and travel writer with later books including The Last Man and Lodore.",
    alignment: "good",
    fallback: { birthYear: 1797, deathYear: 1851 },
  },
  {
    slug: "jonathan-swift",
    name: "Jonathan Swift",
    wikipediaTitle: "Jonathan_Swift",
    description:
      "Jonathan Swift was an Anglo-Irish writer, essayist, and Anglican cleric who is regarded as the foremost prose satirist in the English language. His 1726 Gulliver's Travels combined fantastic voyages with biting political satire, and his 1729 essay A Modest Proposal—suggesting the Irish poor sell their children as food to English landlords—remains a defining model of ironic political polemic. As Dean of St. Patrick's Cathedral in Dublin he became a fierce public defender of Irish economic and political interests against English exploitation.",
    alignment: "good",
    fallback: { birthYear: 1667, deathYear: 1745 },
  },
  {
    slug: "jane-austen",
    name: "Jane Austen",
    wikipediaTitle: "Jane_Austen",
    description:
      "Jane Austen was an English novelist whose six major novels—Sense and Sensibility, Pride and Prejudice, Mansfield Park, Emma, Northanger Abbey, and Persuasion—offer pointed comic-realist studies of the English landed gentry and the constraints faced by women dependent on marriage for economic security. Her sharp irony, free indirect discourse, and acute social observation helped transition the English novel from 18th-century sensibility to 19th-century realism, and her works have remained continuously in print since her death and inspired countless adaptations. She published anonymously in her lifetime and earned modest income from her work; her authorship was publicly identified only after her death at age 41.",
    alignment: "good",
    fallback: { birthYear: 1775, deathYear: 1817 },
  },
  {
    slug: "virginia-woolf",
    name: "Virginia Woolf",
    wikipediaTitle: "Virginia_Woolf",
    description:
      "Adeline Virginia Woolf was an English writer and one of the most influential modernist authors of the 20th century, whose novels Mrs Dalloway (1925), To the Lighthouse (1927), and The Waves (1931) helped pioneer stream-of-consciousness narration in English. As a central figure in the Bloomsbury Group and co-founder of the Hogarth Press, she shaped a generation of British modernist publishing. Her 1929 essay A Room of One's Own remains a foundational text of feminist literary criticism, and she continued writing through bouts of debilitating mental illness until her suicide in March 1941.",
    alignment: "good",
    fallback: { birthYear: 1882, deathYear: 1941 },
  },
  {
    slug: "walt-whitman",
    name: "Walt Whitman",
    wikipediaTitle: "Walt_Whitman",
    description:
      "Walt Whitman was an American poet, essayist, and journalist often called the father of free verse and considered one of the most influential figures in American literature. His 1855 collection Leaves of Grass, which he revised and expanded across six editions over his lifetime, broke from traditional verse forms to celebrate American democracy, the common worker, the body, and the natural world in expansive, cataloguing lines. His Civil War nursing of wounded soldiers and his elegy for Abraham Lincoln—\"When Lilacs Last in the Dooryard Bloom'd\"—deepened the public reach of his work.",
    alignment: "good",
    fallback: { birthYear: 1819, deathYear: 1892 },
  },
  {
    slug: "toni-morrison",
    name: "Toni Morrison",
    wikipediaTitle: "Toni_Morrison",
    description:
      "Chloe Anthony \"Toni\" Morrison was an American novelist and editor whose work placed Black American life and history at the center of the American literary canon. Her 1987 novel Beloved, drawn from the historical case of Margaret Garner, won the 1988 Pulitzer Prize for Fiction, and in 1993 she became the first African American woman to be awarded the Nobel Prize in Literature. As a senior editor at Random House she championed the publication of Black authors including Toni Cade Bambara, Gayl Jones, and Angela Davis, reshaping mainstream American publishing.",
    alignment: "good",
    fallback: { birthYear: 1931, deathYear: 2019 },
  },
  {
    slug: "james-baldwin",
    name: "James Baldwin",
    wikipediaTitle: "James_Baldwin",
    description:
      "James Arthur Baldwin was an American writer and civil rights activist whose essays, novels, and plays became central to the 20th-century conversation about race, sexuality, and American identity. His 1953 debut novel Go Tell It on the Mountain and his 1955 essay collection Notes of a Native Son established his reputation, and works including The Fire Next Time (1963) and the unfinished I Am Not Your Negro made him one of the most penetrating analysts of American racism. Living for much of his life in France, he remained a tireless public voice during the civil rights era and a foundational influence on Black, queer, and American literature.",
    alignment: "good",
    fallback: { birthYear: 1924, deathYear: 1987 },
  },
  {
    slug: "aldous-huxley",
    name: "Aldous Huxley",
    wikipediaTitle: "Aldous_Huxley",
    description:
      "Aldous Leonard Huxley was an English writer and philosopher whose 1932 dystopian novel Brave New World imagined a future of consumerist conditioning, genetic stratification, and pharmacological pacification that became one of the defining warnings of the 20th century. Across nearly 50 books he produced novels, philosophical essays, and screenplays, including the late nonfiction work The Doors of Perception (1954) on his experiments with mescaline. He moved to the United States in 1937 and worked variously as a Hollywood screenwriter and a Vedanta-influenced essayist before his death on the same day as the assassination of John F. Kennedy.",
    alignment: "good",
    fallback: { birthYear: 1894, deathYear: 1963 },
  },
  {
    slug: "george-orwell",
    name: "George Orwell",
    wikipediaTitle: "George_Orwell",
    description:
      "Eric Arthur Blair, who wrote under the pen name George Orwell, was an English novelist, essayist, and journalist whose work argued for democratic socialism and against every form of totalitarianism he encountered. His 1945 allegorical novella Animal Farm and his 1949 dystopia Nineteen Eighty-Four entered the English language permanently, contributing terms including \"Big Brother,\" \"doublethink,\" \"thoughtcrime,\" and \"Orwellian\" to mainstream political vocabulary. Earlier reportage including Down and Out in Paris and London, The Road to Wigan Pier, and Homage to Catalonia documented poverty in Britain and the betrayal of the Spanish revolution by Stalinist forces.",
    alignment: "good",
    fallback: { birthYear: 1903, deathYear: 1950 },
  },
  {
    slug: "john-steinbeck",
    name: "John Steinbeck",
    wikipediaTitle: "John_Steinbeck",
    description:
      "John Ernst Steinbeck was an American novelist whose 1962 Nobel Prize in Literature recognized \"his realistic and imaginative writings, combining as they do sympathetic humour and keen social perception.\" His 1939 novel The Grapes of Wrath, depicting the Dust Bowl migration of Oklahoma tenant farmers to California, won the Pulitzer Prize and the National Book Award and triggered congressional hearings on agricultural labor, while Of Mice and Men, East of Eden, and Cannery Row remain staples of American letters. His unsparing portraits of working-class poverty earned him sustained surveillance by the FBI for decades.",
    alignment: "good",
    fallback: { birthYear: 1902, deathYear: 1968 },
  },
  {
    slug: "william-faulkner",
    name: "William Faulkner",
    wikipediaTitle: "William_Faulkner",
    description:
      "William Cuthbert Faulkner was an American novelist and short-story writer whose body of work set in the fictional Yoknapatawpha County of north Mississippi is widely regarded as the central achievement of Southern literature. His modernist novels The Sound and the Fury (1929), As I Lay Dying (1930), Light in August (1932), and Absalom, Absalom! (1936) used multiple narrators, fractured chronology, and stream-of-consciousness to render the South's haunted relationship with race, family, and history. He received the 1949 Nobel Prize in Literature and two Pulitzer Prizes for fiction.",
    alignment: "good",
    fallback: { birthYear: 1897, deathYear: 1962 },
  },
  {
    slug: "ernest-hemingway",
    name: "Ernest Hemingway",
    wikipediaTitle: "Ernest_Hemingway",
    description:
      "Ernest Miller Hemingway was an American novelist, short-story writer, and journalist whose stripped-down prose style profoundly shaped 20th-century fiction. His novels The Sun Also Rises (1926), A Farewell to Arms (1929), For Whom the Bell Tolls (1940), and the late novella The Old Man and the Sea (1952) drew on his experiences in Paris between the wars, the Spanish Civil War, and the wars he covered as a correspondent. He received the 1953 Pulitzer Prize for The Old Man and the Sea and the 1954 Nobel Prize in Literature.",
    alignment: "good",
    fallback: { birthYear: 1899, deathYear: 1961 },
  },
  {
    slug: "pablo-neruda",
    name: "Pablo Neruda",
    wikipediaTitle: "Pablo_Neruda",
    description:
      "Pablo Neruda was a Chilean poet, diplomat, and politician whose vast body of work—from the early Twenty Love Poems and a Song of Despair (1924) to the political Canto General (1950) and the Elemental Odes—made him one of the foundational voices of 20th-century Spanish-language poetry. He served as a senator for the Communist Party of Chile and as Chile's ambassador to France, and was awarded the 1971 Nobel Prize in Literature. He died in September 1973, days after the U.S.-backed military coup that overthrew his friend President Salvador Allende, and a 2023 Chilean court ruling confirmed earlier suspicions that he had been poisoned.",
    alignment: "good",
    fallback: { birthYear: 1904, deathYear: 1973 },
  },
  {
    slug: "gabriel-garcia-marquez",
    name: "Gabriel García Márquez",
    wikipediaTitle: "Gabriel_García_Márquez",
    description:
      "Gabriel José García Márquez was a Colombian novelist and journalist regarded as one of the most significant Latin American writers of the 20th century. His 1967 novel One Hundred Years of Solitude, the central work of literary magic realism, has sold more than 50 million copies and been translated into dozens of languages, while Love in the Time of Cholera, The Autumn of the Patriarch, and Chronicle of a Death Foretold further established his international reputation. He received the Neustadt Prize in 1972 and the Nobel Prize in Literature in 1982.",
    alignment: "good",
    fallback: { birthYear: 1927, deathYear: 2014 },
  },
  {
    slug: "j-r-r-tolkien",
    name: "J. R. R. Tolkien",
    wikipediaTitle: "J._R._R._Tolkien",
    description:
      "John Ronald Reuel Tolkien was an English writer and philologist whose high-fantasy works The Hobbit (1937) and The Lord of the Rings (1954–55) created the modern fantasy genre and have sold hundreds of millions of copies in dozens of languages. As Rawlinson and Bosworth Professor of Anglo-Saxon and later Merton Professor of English Language and Literature at Oxford, he produced influential scholarly work on Beowulf and on the philological depth of the invented languages that underpin his fiction. The posthumous Silmarillion, edited by his son Christopher, completed the elaborate mythology of Middle-earth that has shaped fantasy literature ever since.",
    alignment: "good",
    fallback: { birthYear: 1892, deathYear: 1973 },
  },
  {
    slug: "j-d-salinger",
    name: "J. D. Salinger",
    wikipediaTitle: "J._D._Salinger",
    description:
      "Jerome David Salinger was an American author best known for his 1951 novel The Catcher in the Rye, which captured adolescent alienation so completely that it has remained in print continuously for more than seven decades and sold more than 65 million copies. After publishing Nine Stories (1953), Franny and Zooey (1961), and Raise High the Roof Beam, Carpenters and Seymour: An Introduction (1963), he retreated to rural Cornish, New Hampshire, refusing interviews and publishing nothing further during the last 45 years of his life. A decorated WWII veteran who took part in the Normandy landings and the liberation of Dachau, he became one of American literature's most studied recluses.",
    alignment: "good",
    fallback: { birthYear: 1919, deathYear: 2010 },
  },
  {
    slug: "stephen-king",
    name: "Stephen King",
    wikipediaTitle: "Stephen_King",
    description:
      "Stephen Edwin King is an American author known as the \"King of Horror\" who has published more than 60 novels and roughly 200 short stories across horror, suspense, fantasy, and science fiction, with worldwide sales exceeding 350 million copies. His works—including Carrie, The Shining, It, Misery, The Stand, and the eight-volume Dark Tower series—have generated dozens of major film and television adaptations, several of which (The Shawshank Redemption, Stand By Me, Misery) have themselves become cinematic classics. He received the National Medal of Arts in 2014 and the National Book Foundation Medal for Distinguished Contribution to American Letters in 2003.",
    alignment: "good",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "adele",
    name: "Adele",
    wikipediaTitle: "Adele",
    description:
      "Adele Laurie Blue Adkins is an English singer and songwriter whose mezzo-soprano voice and confessional songwriting have made her one of the best-selling musical artists of the 21st century. Her four numbered studio albums—19, 21, 25, and 30—have collectively sold more than 120 million units, and 21 alone became the longest-running number-one album by a female solo artist on the Billboard 200. Her honors include 16 Grammy Awards, 12 Brit Awards, an Academy Award for the Skyfall theme, a Primetime Emmy, and a Golden Globe.",
    alignment: "good",
    fallback: { birthYear: 1988, deathYear: null },
  },
  {
    slug: "adam-yauch",
    name: "Adam Yauch",
    wikipediaTitle: "Adam_Yauch",
    description:
      "Adam Nathaniel Yauch, known as MCA, was an American rapper, bassist, and filmmaker who co-founded the Beastie Boys, the first hip-hop group to achieve sustained mainstream commercial success and one of the genre's most enduringly influential acts. He directed many of the group's music videos under the pseudonym Nathanial Hörnblowér, and in 2002 founded Oscilloscope Laboratories, an independent New York film distributor that championed acclaimed documentaries and indie features. A devout convert to Tibetan Buddhism, he organized the Tibetan Freedom Concerts of the late 1990s, raising international awareness of human rights abuses in Tibet, before dying of salivary-gland cancer at age 47.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: 2012 },
  },
  {
    slug: "alessia-cara",
    name: "Alessia Cara",
    wikipediaTitle: "Alessia_Cara",
    description:
      "Alessia Caracciolo, known professionally as Alessia Cara, is a Canadian singer and songwriter whose 2015 debut single \"Here\" became a sleeper hit on its way to platinum certifications in multiple countries. She won the Grammy Award for Best New Artist in 2018 and has earned multiple Juno Awards including Album of the Year for The Pains of Growing. Her introspective songwriting and contralto vocals have made her one of the most widely streamed Canadian pop artists of her generation.",
    alignment: "good",
    fallback: { birthYear: 1996, deathYear: null },
  },
  {
    slug: "alanis-morissette",
    name: "Alanis Morissette",
    wikipediaTitle: "Alanis_Morissette",
    description:
      "Alanis Nadine Morissette is a Canadian-American singer-songwriter whose 1995 album Jagged Little Pill, released when she was 21, sold more than 33 million copies worldwide and became one of the best-selling albums of all time. Often called the \"Queen of Alt-Rock Angst,\" she has earned seven Grammy Awards, a Brit Award, and 14 Juno Awards across a career spanning more than three decades, while writing the score for a Tony-winning Broadway adaptation of Jagged Little Pill. She has also been an outspoken survivor and advocate addressing predatory behavior in the music industry.",
    alignment: "good",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "akira-kurosawa",
    name: "Akira Kurosawa",
    wikipediaTitle: "Akira_Kurosawa",
    description:
      "Akira Kurosawa was a Japanese filmmaker whose 30 feature films across six decades made him one of the most influential directors in the history of cinema. Works including Rashomon (1950), Seven Samurai (1954), Throne of Blood (1957), Yojimbo (1961), and Ran (1985) reshaped global film vocabulary and were openly imitated by directors from George Lucas and Sergio Leone to Steven Spielberg and Martin Scorsese. He received the Academy Honorary Award in 1990 for his lifetime contribution to motion pictures.",
    alignment: "good",
    fallback: { birthYear: 1910, deathYear: 1998 },
  },
  {
    slug: "walter-cronkite",
    name: "Walter Cronkite",
    wikipediaTitle: "Walter_Cronkite",
    description:
      "Walter Leland Cronkite Jr. was an American broadcast journalist who served as anchor of the CBS Evening News from 1962 to 1981 and was so frequently named the \"most trusted man in America\" in opinion polls that the title became inseparable from his persona. He delivered defining live broadcasts of the Kennedy assassination, the Apollo 11 moon landing, and Vietnam, and his February 1968 on-air assessment that the Vietnam War was unwinnable is widely credited with helping turn American public opinion against the conflict. He received the Presidential Medal of Freedom in 1981.",
    alignment: "good",
    fallback: { birthYear: 1916, deathYear: 2009 },
  },
  {
    slug: "larry-king",
    name: "Larry King",
    wikipediaTitle: "Larry_King",
    description:
      "Larry King, born Lawrence Harvey Zeiger, was an American television and radio host whose CNN program Larry King Live ran for 25 years from 1985 to 2010 and conducted more than 50,000 interviews with politicians, celebrities, athletes, and global leaders. Before that he hosted The Larry King Show on the Mutual Broadcasting System, an all-night nationwide call-in radio program from 1978 to 1994. His suspenders, conversational style, and willingness to interview anyone made him one of the most recognizable figures in American broadcasting for nearly half a century.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: 2021 },
  },
  {
    slug: "adolph-green",
    name: "Adolph Green",
    wikipediaTitle: "Adolph_Green",
    description:
      "Adolph Green was an American lyricist and playwright whose six-decade collaboration with Betty Comden produced screenplays and songs for canonical Broadway and Hollywood musicals including Singin' in the Rain, On the Town, The Band Wagon, and Bells Are Ringing. The pair received four Tony Awards, two Academy Award nominations, and the 1991 Kennedy Center Honors, making them the longest-running creative partnership in Broadway musical-theater history. He was inducted into the Songwriters Hall of Fame in 1980.",
    alignment: "good",
    fallback: { birthYear: 1914, deathYear: 2002 },
  },
  {
    slug: "adam-driver",
    name: "Adam Driver",
    wikipediaTitle: "Adam_Driver",
    description:
      "Adam Douglas Driver is an American actor and former U.S. Marine whose breakout role in HBO's Girls (2012–2017) earned him three consecutive Primetime Emmy nominations. His subsequent film work includes the role of Kylo Ren in the Star Wars sequel trilogy, an Academy Award–nominated performance in Marriage Story (2019), and major collaborations with directors including Martin Scorsese, Spike Lee, Noah Baumbach, and Michael Mann. He founded the nonprofit Arts in the Armed Forces, which brings free professional theatrical performances to U.S. military service members worldwide.",
    alignment: "good",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "wolfgang-amadeus-mozart",
    name: "Wolfgang Amadeus Mozart",
    wikipediaTitle: "Wolfgang_Amadeus_Mozart",
    description:
      "Wolfgang Amadeus Mozart was an Austrian Classical-era composer whose more than 800 cataloged works—including 41 symphonies, 27 piano concertos, 23 operas, and an unfinished Requiem—are foundational to the Western musical canon. A child prodigy who began composing at five and toured the courts of Europe by ten, he produced his mature operas Le Nozze di Figaro, Don Giovanni, Così fan tutte, and Die Zauberflöte in a creative burst before his death at age 35. He died in Vienna under disputed medical circumstances in December 1791, leaving behind some of the most performed music in history.",
    alignment: "good",
    fallback: { birthYear: 1756, deathYear: 1791 },
  },
  {
    slug: "ludwig-van-beethoven",
    name: "Ludwig van Beethoven",
    wikipediaTitle: "Ludwig_van_Beethoven",
    description:
      "Ludwig van Beethoven was a German composer and pianist whose work bridged the Classical and Romantic eras and is among the most performed in the Western canon. His nine symphonies—including the Third (Eroica), the Fifth, and the choral Ninth—along with his 32 piano sonatas, 16 string quartets, and the opera Fidelio reshaped the structural and expressive possibilities of nearly every form he addressed. He composed many of his greatest works, including the Ninth Symphony and the late string quartets, after losing virtually all of his hearing.",
    alignment: "good",
    fallback: { birthYear: 1770, deathYear: 1827 },
  },
  {
    slug: "johann-sebastian-bach",
    name: "Johann Sebastian Bach",
    wikipediaTitle: "Johann_Sebastian_Bach",
    description:
      "Johann Sebastian Bach was a German Baroque composer and Lutheran organist whose more than 1,100 surviving works synthesized centuries of European compositional technique into a body of music regarded as the technical and spiritual summit of the Baroque era. His Brandenburg Concertos, Goldberg Variations, Well-Tempered Clavier, B Minor Mass, St Matthew Passion, and Art of Fugue remain foundational to Western musical training and performance. Working primarily as a church musician in Leipzig, he raised twenty children, four of whom became prominent composers in their own right.",
    alignment: "good",
    fallback: { birthYear: 1685, deathYear: 1750 },
  },
  {
    slug: "johannes-brahms",
    name: "Johannes Brahms",
    wikipediaTitle: "Johannes_Brahms",
    description:
      "Johannes Brahms was a German composer, virtuoso pianist, and conductor of the mid-Romantic period whose four symphonies, four concertos, and German Requiem extended Beethoven's symphonic tradition into the late 19th century. A protégé of Robert and Clara Schumann, he combined rigorous classical structure with rhythmic vitality and rich harmonic invention, becoming one of the principal conservative voices in the era's so-called War of the Romantics against the Wagner camp. His chamber music and lieder remain core repertoire for performers more than a century after his death.",
    alignment: "good",
    fallback: { birthYear: 1833, deathYear: 1897 },
  },
  {
    slug: "leonard-bernstein",
    name: "Leonard Bernstein",
    wikipediaTitle: "Leonard_Bernstein",
    description:
      "Leonard Bernstein was an American composer, conductor, pianist, and music educator widely considered one of the most important conductors of the 20th century and the first American-born conductor to receive sustained international acclaim. As music director of the New York Philharmonic from 1958 to 1969 he reached millions through his televised Young People's Concerts, while his compositions including West Side Story, On the Town, Candide, and the Mass occupy a permanent place in the American repertoire. He won 16 Grammy Awards, seven Emmys, and the Kennedy Center Honors in 1980.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 1990 },
  },
  {
    slug: "sergei-rachmaninoff",
    name: "Sergei Rachmaninoff",
    wikipediaTitle: "Sergei_Rachmaninoff",
    description:
      "Sergei Vasilyevich Rachmaninoff was a Russian composer, virtuoso pianist, and conductor regarded as one of the finest pianists of his time and one of the last great representatives of late Romantic Russian music. His Second and Third Piano Concertos, Symphony No. 2, the Rhapsody on a Theme of Paganini, and the All-Night Vigil are central to the late-Romantic concert repertoire. After fleeing the Russian Revolution in 1917, he spent the second half of his life touring as a concert pianist in Europe and the United States.",
    alignment: "good",
    fallback: { birthYear: 1873, deathYear: 1943 },
  },
  {
    slug: "alan-menken",
    name: "Alan Menken",
    wikipediaTitle: "Alan_Menken",
    description:
      "Alan Irwin Menken is an American composer and conductor whose film scores and songs revived and defined the modern Disney animated musical, beginning with The Little Mermaid (1989) and continuing through Beauty and the Beast, Aladdin, Pocahontas, The Hunchback of Notre Dame, Hercules, and Tangled. He is one of only 22 people to have won the competitive EGOT—Emmy, Grammy, Oscar, and Tony—and his eight Academy Awards, principally shared with the late lyricist Howard Ashman, make him among the most-decorated film composers in history.",
    alignment: "good",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "alan-jay-lerner",
    name: "Alan Jay Lerner",
    wikipediaTitle: "Alan_Jay_Lerner",
    description:
      "Alan Jay Lerner was an American lyricist and librettist whose collaborations with composer Frederick Loewe produced some of the defining stage and screen musicals of the mid-20th century, including Brigadoon, Paint Your Wagon, My Fair Lady, Camelot, and Gigi. He won three Tony Awards and three Academy Awards across his career, with My Fair Lady setting Broadway box-office records that stood for decades. He continued to write for the stage and screen until shortly before his death in 1986.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 1986 },
  },
  {
    slug: "bob-dylan",
    name: "Bob Dylan",
    wikipediaTitle: "Bob_Dylan",
    description:
      "Bob Dylan, born Robert Allen Zimmerman, is an American singer-songwriter widely regarded as one of the greatest songwriters of all time, with an estimated 125 million records sold worldwide over a career spanning more than six decades. From the protest songs of his early-1960s folk period through his 1965 turn to electric rock and the dense religious and surrealist songbooks that followed, he expanded the lyrical vocabulary of popular music to incorporate poetry, blues, gospel, country, and politics. He was awarded the 2016 Nobel Prize in Literature for \"having created new poetic expressions within the great American song tradition.\"",
    alignment: "good",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "frank-sinatra",
    name: "Frank Sinatra",
    wikipediaTitle: "Frank_Sinatra",
    description:
      "Francis Albert Sinatra was an American singer and actor whose six-decade career sold an estimated 150 million records worldwide and made him one of the defining popular musicians of the 20th century. After early stardom with the Tommy Dorsey orchestra, he reinvented himself in the 1950s with the concept albums he recorded for Capitol Records and later founded Reprise Records in 1960. He won 11 Grammy Awards, including the Lifetime Achievement Award, and an Academy Award for his supporting role in From Here to Eternity (1953).",
    alignment: "good",
    fallback: { birthYear: 1915, deathYear: 1998 },
  },
  {
    slug: "dean-martin",
    name: "Dean Martin",
    wikipediaTitle: "Dean_Martin",
    description:
      "Dean Martin, born Dino Paul Crocetti, was an American singer, actor, and television host whose smooth baritone, comic timing, and air of effortless ease made him one of the most popular entertainers of the 20th century. His decade-long partnership with Jerry Lewis from 1946 to 1956 produced a record-breaking nightclub act and 16 films, after which he reinvented himself as a solo singer, dramatic actor in films including Some Came Running and Rio Bravo, and the longtime host of NBC's Dean Martin Show and Celebrity Roasts.",
    alignment: "good",
    fallback: { birthYear: 1917, deathYear: 1995 },
  },
  {
    slug: "aretha-franklin",
    name: "Aretha Franklin",
    wikipediaTitle: "Aretha_Franklin",
    description:
      "Aretha Louise Franklin was an American singer, songwriter, and pianist universally known as the Queen of Soul and twice named the greatest singer of all time by Rolling Stone. Across a six-decade career she recorded landmark singles including \"Respect,\" \"Natural Woman,\" \"Chain of Fools,\" and \"Think,\" and won 18 Grammy Awards while becoming the first woman inducted into the Rock and Roll Hall of Fame in 1987. She sang at the inaugurations of three U.S. presidents and was awarded the Presidential Medal of Freedom in 2005.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: 2018 },
  },
  {
    slug: "james-brown",
    name: "James Brown",
    wikipediaTitle: "James_Brown",
    description:
      "James Joseph Brown was an American singer, songwriter, dancer, and bandleader regarded as the principal architect of funk and one of the most influential musicians of the 20th century. Across a career of more than 50 years he produced foundational recordings including \"Papa's Got a Brand New Bag,\" \"I Got You (I Feel Good),\" \"Cold Sweat,\" and \"Say It Loud—I'm Black and I'm Proud,\" pioneering rhythmic and vocal techniques that shaped soul, funk, disco, and hip-hop. He was inducted into the Rock and Roll Hall of Fame as part of its inaugural class in 1986.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: 2006 },
  },
  {
    slug: "louis-armstrong",
    name: "Louis Armstrong",
    wikipediaTitle: "Louis_Armstrong",
    description:
      "Louis Daniel Armstrong, known as Satchmo and Pops, was an American jazz trumpeter and vocalist whose 1920s recordings with the Hot Five and Hot Seven established the soloist as the central figure of jazz and effectively created the swing aesthetic. His distinctive gravelly singing and improvisational scat technique broadened jazz's audience for decades, with hits including \"What a Wonderful World\" and \"Hello, Dolly!\" carrying his work to a global mainstream. He received a posthumous Grammy Lifetime Achievement Award and remains one of the most beloved figures in 20th-century music.",
    alignment: "good",
    fallback: { birthYear: 1901, deathYear: 1971 },
  },
  {
    slug: "ella-fitzgerald",
    name: "Ella Fitzgerald",
    wikipediaTitle: "Ella_Fitzgerald",
    description:
      "Ella Jane Fitzgerald was an American jazz vocalist known as the First Lady of Song, celebrated for the purity of her tone, impeccable diction and intonation, and her virtuosic improvisational scat singing. Her Verve Records \"Songbook\" series of the 1950s and 1960s—devoted to the work of Cole Porter, Duke Ellington, the Gershwins, Rodgers and Hart, Irving Berlin, and others—is widely considered the definitive recording canon of the Great American Songbook. She won 14 Grammy Awards, the National Medal of Arts, and the Presidential Medal of Freedom.",
    alignment: "good",
    fallback: { birthYear: 1917, deathYear: 1996 },
  },
  {
    slug: "nat-king-cole",
    name: "Nat King Cole",
    wikipediaTitle: "Nat_King_Cole",
    description:
      "Nathaniel Adams Coles, known professionally as Nat King Cole, was an American singer, jazz pianist, and actor whose smooth baritone made him one of the first African American performers to achieve mainstream pop stardom in the segregated United States. Beginning as the leader of the influential King Cole Trio in the late 1930s, he scored more than 100 charting singles including \"Mona Lisa,\" \"Unforgettable,\" and \"The Christmas Song,\" and in 1956 became the first Black host of a national U.S. television variety program. He was attacked on stage by white supremacists in Birmingham in 1956, an incident that became a flashpoint in the early civil rights era.",
    alignment: "good",
    fallback: { birthYear: 1919, deathYear: 1965 },
  },
  {
    slug: "miles-davis",
    name: "Miles Davis",
    wikipediaTitle: "Miles_Davis",
    description:
      "Miles Dewey Davis III was an American trumpeter, bandleader, and composer who stood at the forefront of nearly every major stylistic development in jazz across his five-decade career, including bebop, cool jazz, hard bop, modal jazz, and jazz fusion. His landmark albums Birth of the Cool, Kind of Blue, Sketches of Spain, In a Silent Way, and Bitches Brew each redefined the genre's possibilities; Kind of Blue remains the best-selling jazz album of all time. He won nine Grammy Awards and was inducted into the Rock and Roll Hall of Fame in 2006.",
    alignment: "good",
    fallback: { birthYear: 1926, deathYear: 1991 },
  },
  {
    slug: "john-coltrane",
    name: "John Coltrane",
    wikipediaTitle: "John_Coltrane",
    description:
      "John William Coltrane was an American jazz saxophonist, bandleader, and composer whose harmonic complexity and spiritual intensity redefined the language of jazz in the late 1950s and 1960s. From his work in Miles Davis's Kind of Blue band through his own classic quartet recordings—including Giant Steps, My Favorite Things, and the 1965 spiritual masterpiece A Love Supreme—he set technical and expressive standards that have influenced every subsequent generation of jazz improvisers. He was canonized by the African Orthodox Church in 1982 as Saint John William Coltrane.",
    alignment: "good",
    fallback: { birthYear: 1926, deathYear: 1967 },
  },
  {
    slug: "jimi-hendrix",
    name: "Jimi Hendrix",
    wikipediaTitle: "Jimi_Hendrix",
    description:
      "James Marshall \"Jimi\" Hendrix was an American guitarist, singer, and songwriter who, in a four-year mainstream career, redefined the electric guitar as a lead instrument and is widely regarded as the greatest electric guitarist in the history of rock music. His three studio albums with the Jimi Hendrix Experience—Are You Experienced, Axis: Bold as Love, and Electric Ladyland—and his iconic 1969 Woodstock performance of \"The Star-Spangled Banner\" stand as defining works of the late 1960s. He died in London at age 27 in September 1970 and was inducted into the Rock and Roll Hall of Fame in 1992.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: 1970 },
  },
  {
    slug: "jim-morrison",
    name: "Jim Morrison",
    wikipediaTitle: "Jim_Morrison",
    description:
      "James Douglas Morrison was an American singer-songwriter and poet who served as the lead vocalist and primary lyricist of the Doors, one of the most commercially successful and culturally influential rock bands of the late 1960s. The group's six studio albums recorded with Morrison—including the self-titled debut and L.A. Woman—produced enduring rock standards such as \"Light My Fire,\" \"The End,\" \"Riders on the Storm,\" and \"Hello, I Love You.\" He died in Paris at age 27 in July 1971 and was inducted into the Rock and Roll Hall of Fame with the Doors in 1993.",
    alignment: "good",
    fallback: { birthYear: 1943, deathYear: 1971 },
  },
  {
    slug: "janis-joplin",
    name: "Janis Joplin",
    wikipediaTitle: "Janis_Joplin",
    description:
      "Janis Lyn Joplin was an American singer-songwriter whose powerful, blues-rooted mezzo-soprano made her one of the most iconic rock performers of the late 1960s. She rose to prominence with Big Brother and the Holding Company at the 1967 Monterey Pop Festival before forming the Kozmic Blues Band and the Full Tilt Boogie Band, recording the posthumous No. 1 album Pearl. She died of a heroin overdose in October 1970 at age 27 and was inducted into the Rock and Roll Hall of Fame in 1995.",
    alignment: "good",
    fallback: { birthYear: 1943, deathYear: 1970 },
  },
  {
    slug: "kurt-cobain",
    name: "Kurt Cobain",
    wikipediaTitle: "Kurt_Cobain",
    description:
      "Kurt Donald Cobain was an American musician who served as the lead vocalist, guitarist, and primary songwriter of the grunge band Nirvana, whose 1991 album Nevermind redefined mainstream rock and brought the alternative scene of the Pacific Northwest to global audiences. His angsty, confessional songwriting and reluctance toward fame made him a defining voice of Generation X across In Utero (1993) and the band's 1993 MTV Unplugged session. He died of a self-inflicted gunshot wound in April 1994 at age 27 and was inducted into the Rock and Roll Hall of Fame with Nirvana in 2014.",
    alignment: "good",
    fallback: { birthYear: 1967, deathYear: 1994 },
  },
  {
    slug: "whitney-houston",
    name: "Whitney Houston",
    wikipediaTitle: "Whitney_Houston",
    description:
      "Whitney Elizabeth Houston was an American singer and actress, often referred to simply as \"the Voice,\" whose four-octave vocal range and technical command made her one of the best-selling music artists of all time, with worldwide sales of more than 220 million records. Her breakthrough self-titled 1985 debut and 1992 soundtrack The Bodyguard each became among the best-selling albums of all time, and she earned six Grammy Awards along with countless American Music and Billboard awards. She died at age 48 in February 2012 and was posthumously inducted into the Rock and Roll Hall of Fame in 2020.",
    alignment: "good",
    fallback: { birthYear: 1963, deathYear: 2012 },
  },
  {
    slug: "tupac-shakur",
    name: "Tupac Shakur",
    wikipediaTitle: "Tupac_Shakur",
    description:
      "Tupac Amaru Shakur, known professionally as 2Pac, was an American rapper and actor whose four solo albums released during his lifetime, along with posthumous releases, have sold more than 75 million records worldwide. His socially conscious, politically charged lyrics on tracks including \"Brenda's Got a Baby,\" \"Keep Ya Head Up,\" and \"Changes\" combined with his confrontational persona made him one of the most influential rappers in hip-hop history. He was murdered in a drive-by shooting in Las Vegas in September 1996 at age 25; the case remained officially unsolved until a 2023 indictment.",
    alignment: "good",
    fallback: { birthYear: 1971, deathYear: 1996 },
  },
  {
    slug: "madonna",
    name: "Madonna",
    wikipediaTitle: "Madonna",
    description:
      "Madonna Louise Ciccone is an American singer, songwriter, and actress widely known as the Queen of Pop and one of the most influential figures in the history of popular music. With more than 300 million records sold worldwide she is the best-selling female recording artist of all time according to Guinness World Records, and her continual reinvention—musical, visual, and thematic—across albums including Like a Virgin, Like a Prayer, Ray of Light, and Confessions on a Dance Floor has expanded the cultural and creative latitude available to women in pop. She was inducted into the Rock and Roll Hall of Fame in 2008.",
    alignment: "good",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "cher",
    name: "Cher",
    wikipediaTitle: "Cher",
    description:
      "Cher, born Cheryl Sarkisian LaPiere, is an American singer and actress whose six-decade career has spanned television variety shows, pop and dance music, and acclaimed film roles. She won the Academy Award for Best Actress for Moonstruck (1987), a Grammy Award, an Emmy, and a Cannes Best Actress prize, making her one of a small number of artists to span the major American entertainment honors. A longstanding ally of LGBTQ communities and a champion of her transgender son Chaz Bono, she was awarded the Kennedy Center Honors in 2018.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "pharrell-williams",
    name: "Pharrell Williams",
    wikipediaTitle: "Pharrell_Williams",
    description:
      "Pharrell Lanscilo Williams is an American musician, record producer, and fashion designer whose work as half of the Neptunes production duo with Chad Hugo helped define the sound of mainstream hip-hop and pop in the early 2000s, producing 15 Hot 100 top-ten hits. His solo recordings, including the 2014 megahit \"Happy,\" have earned him 13 Grammy Awards, while his fashion projects with Billionaire Boys Club, Adidas, and Chanel have established him as a leading figure at the intersection of music and design. In 2023 he was named men's creative director of Louis Vuitton.",
    alignment: "good",
    fallback: { birthYear: 1973, deathYear: null },
  },
  {
    slug: "cat-stevens",
    name: "Cat Stevens",
    wikipediaTitle: "Cat_Stevens",
    description:
      "Yusuf Islam, born Steven Demetre Georgiou and originally known by his stage name Cat Stevens, is a British singer-songwriter who has sold more than 100 million records over a six-decade career. His early-1970s albums Tea for the Tillerman, Teaser and the Firecat, and Catch Bull at Four produced enduring songs including \"Wild World,\" \"Father and Son,\" \"Peace Train,\" and \"Morning Has Broken.\" He converted to Islam in 1977 and stepped away from secular music for two decades, focusing on humanitarian work and educational charities, before returning to mainstream recording in 2006.",
    alignment: "good",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "agnetha-faltskog",
    name: "Agnetha Fältskog",
    wikipediaTitle: "Agnetha_Fältskog",
    description:
      "Agnetha Åse Fältskog is a Swedish singer and songwriter best known as a member of ABBA, one of the best-selling music acts in history with estimated worldwide sales exceeding 380 million records. As one of the group's two lead vocalists alongside Anni-Frid Lyngstad, she sang signature ABBA recordings including \"The Winner Takes It All,\" \"SOS,\" and \"Knowing Me, Knowing You.\" After ABBA's break in 1982 she pursued a successful solo career and continued recording new material into the 21st century.",
    alignment: "good",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "adam-clayton",
    name: "Adam Clayton",
    wikipediaTitle: "Adam_Clayton",
    description:
      "Adam Charles Clayton is an English-Irish musician who has been the bass guitarist of the rock band U2 since the group's formation in Dublin in 1976. Across 15 studio albums—including The Joshua Tree, Achtung Baby, and All That You Can't Leave Behind—his bass work has anchored one of the best-selling rock acts in history, with U2 selling more than 175 million records worldwide. The band was inducted into the Rock and Roll Hall of Fame in 2005.",
    alignment: "good",
    fallback: { birthYear: 1960, deathYear: null },
  },
  {
    slug: "adam-young",
    name: "Adam Young",
    wikipediaTitle: "Adam_Young",
    description:
      "Adam Randal Young is an American musician and singer-songwriter best known as the founder and sole member of the electronica project Owl City, whose 2009 single \"Fireflies\" reached number one on the Billboard Hot 100 and sold more than five million copies in the United States. He has continued to release albums under the Owl City name across more than a decade, while also recording as Port Blue, Sky Sailing, and other side projects. He has collaborated with Carly Rae Jepsen, Hatsune Miku, and others, sustaining a productive independent recording career from his Minnesota studio.",
    alignment: "good",
    fallback: { birthYear: 1986, deathYear: null },
  },
  {
    slug: "akon",
    name: "Akon",
    wikipediaTitle: "Akon",
    description:
      "Aliaune Damala Bouga Time Puru Nacka Lu Lu Lu Badara Akon Thiam is a Senegalese-American singer, songwriter, and record producer who emerged in the mid-2000s with a string of platinum-selling hits including \"Locked Up,\" \"Smack That,\" \"I Wanna Love You,\" and \"Don't Matter.\" He has produced and featured on tracks for artists ranging from Eminem to Lady Gaga, and through his Konvict Muzik label and the Akon Lighting Africa initiative he has supplied solar power to communities across more than a dozen African countries.",
    alignment: "good",
    fallback: { birthYear: 1973, deathYear: null },
  },
  {
    slug: "a-boogie-wit-da-hoodie",
    name: "A Boogie wit da Hoodie",
    wikipediaTitle: "A_Boogie_wit_da_Hoodie",
    description:
      "Artist Julius Dubose, known professionally as A Boogie wit da Hoodie, is an American rapper from the Bronx whose melodic, mumble-influenced flow helped define New York hip-hop in the late 2010s. His 2017 debut album The Bigger Artist and its follow-up Hoodie SZN (2018)—which reached No. 1 on the Billboard 200—established him as one of the most commercially successful rappers of his generation. Subsequent releases including Artist 2.0 and Me vs. Myself have continued to chart in the top tier of the U.S. albums chart.",
    alignment: "good",
    fallback: { birthYear: 1995, deathYear: null },
  },
  {
    slug: "aaron-copland",
    name: "Aaron Copland",
    wikipediaTitle: "Aaron_Copland",
    description:
      "Aaron Copland was an American composer, conductor, and teacher referred to in his lifetime as the \"Dean of American Music.\" His distinctive open-harmony style is widely considered the sonic signature of mid-20th-century America, and works including Appalachian Spring, Fanfare for the Common Man, Rodeo, and Billy the Kid remain core repertoire of the American concert and ballet stage. Subjected to McCarthy-era congressional scrutiny in 1953 over his earlier left-wing associations, he nonetheless went on to receive the Pulitzer Prize, the Presidential Medal of Freedom, and the Kennedy Center Honors.",
    alignment: "good",
    fallback: { birthYear: 1900, deathYear: 1990 },
  },
  {
    slug: "aaron-paul",
    name: "Aaron Paul",
    wikipediaTitle: "Aaron_Paul",
    description:
      "Aaron Paul, born Aaron Paul Sturtevant, is an American actor best known for portraying Jesse Pinkman in the AMC series Breaking Bad (2008–2013), a performance that earned him three Primetime Emmy Awards for Outstanding Supporting Actor in a Drama Series. He reprised the role in the 2019 Netflix sequel film El Camino: A Breaking Bad Movie and during the final season of Better Call Saul. He has used his platform to support criminal-justice reform advocacy, including campaigns against capital punishment.",
    alignment: "good",
    fallback: { birthYear: 1979, deathYear: null },
  },
  {
    slug: "adam-sandler",
    name: "Adam Sandler",
    wikipediaTitle: "Adam_Sandler",
    description:
      "Adam Richard Sandler is an American actor, comedian, and filmmaker whose comedies including Happy Gilmore, Big Daddy, The Wedding Singer, and Click made him one of the most reliably bankable stars of late-1990s and 2000s Hollywood. His later dramatic turns in Punch-Drunk Love (2002) and Uncut Gems (2019) earned him significant critical acclaim, and he received the 2023 Mark Twain Prize for American Humor. Through his production company Happy Madison he has cast and championed a recurring ensemble of friends and family across his films.",
    alignment: "good",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "adrien-brody",
    name: "Adrien Brody",
    wikipediaTitle: "Adrien_Brody",
    description:
      "Adrien Nicholas Brody is an American actor and visual artist whose performance as Władysław Szpilman in Roman Polanski's The Pianist (2002) made him, at age 29, the youngest winner of the Academy Award for Best Actor. He earned a second Academy Award for Best Actor in 2025 for The Brutalist, joining a small group of two-time winners in the category. His work spans independent films and major studio productions including The Thin Red Line, The Village, King Kong, The Grand Budapest Hotel, and Wes Anderson's subsequent ensemble films.",
    alignment: "good",
    fallback: { birthYear: 1973, deathYear: null },
  },
  {
    slug: "adriana-lima",
    name: "Adriana Lima",
    wikipediaTitle: "Adriana_Lima",
    description:
      "Adriana Lima is a Brazilian model who served as a Victoria's Secret Angel from 2000 to 2018, the longest tenure in the brand's history. Across two decades she walked 18 of the Victoria's Secret Fashion Shows and earned global recognition through major campaigns for Maybelline, Vogue Eyewear, and others. Forbes has repeatedly listed her among the world's highest-earning models, and she has used her platform for charitable initiatives focused on children's education and health in Brazil.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "adut-akech",
    name: "Adut Akech",
    wikipediaTitle: "Adut_Akech",
    description:
      "Adut Akech Bior is a South Sudanese-Australian model who was born in a refugee camp in Kenya and rose to international prominence after making her runway debut as an exclusive at Saint Laurent's Spring/Summer 2017 show. Models.com named her Model of the Year in both 2018 and 2019, and she has appeared on the covers of Vogue editions including American, British, French, and Italian Vogue. She has spoken publicly about the refugee experience and serves as a UNICEF goodwill ambassador.",
    alignment: "good",
    fallback: { birthYear: 1999, deathYear: null },
  },
  {
    slug: "aaron-judge",
    name: "Aaron Judge",
    wikipediaTitle: "Aaron_Judge",
    description:
      "Aaron James Judge is an American professional baseball right fielder for the New York Yankees who in 2022 set the American League single-season home-run record with 62, surpassing Roger Maris's 1961 mark. He has won the AL Most Valuable Player Award three times, has been named to multiple All-Star teams, and serves as the Yankees' captain. After his 2022 season the Yankees signed him to a nine-year contract worth $360 million, one of the largest in baseball history.",
    alignment: "good",
    fallback: { birthYear: 1992, deathYear: null },
  },
  {
    slug: "adam-peaty",
    name: "Adam Peaty",
    wikipediaTitle: "Adam_Peaty",
    description:
      "Adam George Ramsay Peaty is an English competitive swimmer specializing in sprint breaststroke who in 2016 became the first British male swimmer in 24 years to win Olympic gold, in the 100-metre breaststroke at the Rio Games. He successfully defended the title in 2021, becoming the first British swimmer ever to retain an Olympic title, and has set multiple world records in the event. He is an eight-time World Champion and a 16-time European Champion.",
    alignment: "good",
    fallback: { birthYear: 1994, deathYear: null },
  },
  {
    slug: "adam-ondra",
    name: "Adam Ondra",
    wikipediaTitle: "Adam_Ondra",
    description:
      "Adam Ondra is a Czech professional rock climber widely considered the leading sport climber of his generation, specializing in lead climbing, bouldering, and competition climbing. In 2014 he became the only male athlete to win World Championship titles in both lead and bouldering in the same year, and in 2017 he completed the first ascent of Silence in Norway, the first route ever graded 9c (5.15d)—the most difficult sport climb in the world. He has also been one of the few climbers to repeat the most demanding boulder problems and routes set by his peers.",
    alignment: "good",
    fallback: { birthYear: 1993, deathYear: null },
  },
  {
    slug: "aaron-eckhart",
    name: "Aaron Eckhart",
    wikipediaTitle: "Aaron_Eckhart",
    description:
      "Aaron Edward Eckhart is an American actor known for his commanding leading-man performances across two decades of independent and studio films. His credits include Erin Brockovich (2000), Thank You for Smoking (2005), and his acclaimed dual role as Harvey Dent and Two-Face in Christopher Nolan's The Dark Knight (2008). He earned a Golden Globe nomination for Thank You for Smoking and has continued to take on a range of dramatic, action, and political-thriller roles.",
    alignment: "good",
    fallback: { birthYear: 1968, deathYear: null },
  },
  {
    slug: "aaron-peirsol",
    name: "Aaron Peirsol",
    wikipediaTitle: "Aaron_Peirsol",
    description:
      "Aaron Wells Peirsol is an American former competition swimmer and backstroke specialist who won five Olympic gold medals across three Games from 2000 to 2008, alongside two silvers. He held the world record in the 100-metre backstroke and remains the long-course world-record holder in the 200-metre backstroke. A seven-time World Champion, he has been inducted into the International Swimming Hall of Fame.",
    alignment: "good",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "alan-alda",
    name: "Alan Alda",
    wikipediaTitle: "Alan_Alda",
    description:
      "Alan Alda is an American actor, writer, and director whose seven-decade career is anchored by his portrayal of Captain Hawkeye Pierce in the CBS sitcom M*A*S*H from 1972 to 1983, for which he won six Primetime Emmy Awards as actor, writer, and director. His later film and television work has earned him an Academy Award nomination for The Aviator (2004) and additional Emmy recognition for The West Wing and 30 Rock. He has also spent decades hosting Scientific American Frontiers and founding the Alan Alda Center for Communicating Science at Stony Brook University to train scientists in clear public communication.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: null },
  },
  {
    slug: "alan-davies",
    name: "Alan Davies",
    wikipediaTitle: "Alan_Davies",
    description:
      "Alan Roger Davies is an English actor, comedian, and television presenter best known for the title role in the BBC mystery drama series Jonathan Creek from 1997 to 2016 and as the only permanent panellist on the BBC comedy quiz show QI since its premiere in 2003. A long-running stand-up performer and host of the podcast The Alan Davies After Hours, he has remained a fixture on British television for more than two decades. His comedic memoir Just Ignore Him became a 2020 bestseller.",
    alignment: "good",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "alan-ayckbourn",
    name: "Alan Ayckbourn",
    wikipediaTitle: "Alan_Ayckbourn",
    description:
      "Sir Alan Ayckbourn is an English playwright and director who has written more than 90 full-length plays in a career spanning more than six decades, making him one of the most-produced living playwrights in the English-speaking world. From his breakthrough hits Relatively Speaking and How the Other Half Loves through later works including The Norman Conquests trilogy and A Chorus of Disapproval, he served as artistic director of the Stephen Joseph Theatre in Scarborough from 1972 to 2009. He was knighted in 1997 for services to theatre.",
    alignment: "good",
    fallback: { birthYear: 1939, deathYear: null },
  },
  {
    slug: "alec-guinness",
    name: "Alec Guinness",
    wikipediaTitle: "Alec_Guinness",
    description:
      "Sir Alec Guinness was an English actor whose six-decade screen career encompassed five collaborations with David Lean—including the Academy Award–winning performance in The Bridge on the River Kwai (1957) and his role as Prince Faisal in Lawrence of Arabia (1962)—and a string of celebrated Ealing comedies in which he often played multiple roles. He won an Oscar, a BAFTA, a Golden Globe, a Tony, and a Volpi Cup, and reached a wider late-career audience as Obi-Wan Kenobi in the original Star Wars trilogy. He was knighted in 1959.",
    alignment: "good",
    fallback: { birthYear: 1914, deathYear: 2000 },
  },
  {
    slug: "steve-carell",
    name: "Steve Carell",
    wikipediaTitle: "Steve_Carell",
    description:
      "Steven John Carell is an American actor and comedian best known for playing Michael Scott on the NBC sitcom The Office from 2005 to 2011, earning a Golden Globe Award and six Primetime Emmy nominations. His film career spans broad comedies including The 40-Year-Old Virgin and Anchorman as well as serious dramatic turns in Foxcatcher (2014), for which he received an Academy Award nomination, The Big Short, and Vice. He has continued to alternate comedy and drama through the 2020s with leading roles in The Patient and The Morning Show.",
    alignment: "good",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "babe-ruth",
    name: "Babe Ruth",
    wikipediaTitle: "Babe_Ruth",
    description:
      "George Herman \"Babe\" Ruth, nicknamed the Bambino and the Sultan of Swat, was an American Major League Baseball player whose 22-season career from 1914 to 1935 transformed the sport from a low-scoring contest of place hitting into the modern home-run-driven game. After beginning as a star left-handed pitcher for the Boston Red Sox, he was sold to the Yankees in 1919 and went on to set numerous batting records, including the single-season home-run mark of 60 (1927) that stood for 34 years and a career total of 714 that stood for 39. He was a member of the inaugural class of the Baseball Hall of Fame in 1936.",
    alignment: "good",
    fallback: { birthYear: 1895, deathYear: 1948 },
  },
  {
    slug: "jim-thorpe",
    name: "Jim Thorpe",
    wikipediaTitle: "Jim_Thorpe",
    description:
      "James Francis Thorpe was an American athlete and citizen of the Sac and Fox Nation widely regarded as one of the most versatile sports figures in history, playing at the highest level of football, baseball, and basketball. At the 1912 Stockholm Olympics he won gold medals in both the pentathlon and decathlon, only to have them stripped on a technicality—he had played a summer of semi-pro baseball—a decision the IOC reversed posthumously, finally restoring him as the sole champion in both events in 2022. He was an inaugural member of the Pro Football Hall of Fame and the first president of the league that became the NFL.",
    alignment: "good",
    fallback: { birthYear: 1887, deathYear: 1953 },
  },
  {
    slug: "pele",
    name: "Pelé",
    wikipediaTitle: "Pelé",
    description:
      "Edson Arantes do Nascimento, known as Pelé, was a Brazilian professional footballer widely regarded as one of the greatest players in the history of the sport. He won three FIFA World Cups with Brazil—1958, 1962, and 1970—remaining the only player ever to win three, and his career total of 1,279 goals in 1,363 games is recognized by Guinness World Records. He was named FIFA Player of the Century in 1999 and IOC Athlete of the Century in the same year.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: 2022 },
  },
  {
    slug: "roger-federer",
    name: "Roger Federer",
    wikipediaTitle: "Roger_Federer",
    description:
      "Roger Federer is a Swiss former professional tennis player who held the ATP world No. 1 ranking for 310 weeks, including a record 237 consecutive weeks, and won 103 ATP singles titles—the second-most in the Open Era. His 20 Grand Slam singles titles, including a record-tying eight at Wimbledon, place him among the greatest players in tennis history alongside his rivals Rafael Nadal and Novak Djokovic. Through the Roger Federer Foundation he has funded education for hundreds of thousands of children across southern Africa.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "jim-courier",
    name: "Jim Courier",
    wikipediaTitle: "Jim_Courier",
    description:
      "James Spencer Courier is an American former professional tennis player who held the ATP world No. 1 ranking for 58 weeks and finished as year-end No. 1 in 1992. He won four major singles titles in two years—two French Opens (1991, 1992) and two Australian Opens (1992, 1993)—and reached the final of all four Grand Slams, becoming the youngest man in the Open Era to do so. He has since become a respected on-court interviewer and television analyst at the major championships.",
    alignment: "good",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "abby-wambach",
    name: "Abby Wambach",
    wikipediaTitle: "Abby_Wambach",
    description:
      "Mary Abigail Wambach is an American former professional soccer forward whose 184 international goals for the United States women's national team rank second on the all-time international scoring list across all genders. She won the FIFA World Player of the Year award in 2012 and Olympic gold medals at Athens 2004 and London 2012, and was a six-time U.S. Soccer Athlete of the Year. After retiring she became a leading public advocate for equal pay in U.S. women's soccer and an outspoken voice on gender equity in sport.",
    alignment: "good",
    fallback: { birthYear: 1980, deathYear: null },
  },
  {
    slug: "alex-morgan",
    name: "Alex Morgan",
    wikipediaTitle: "Alex_Morgan",
    description:
      "Alexandra Morgan Carrasco is an American former professional soccer player who served as co-captain of the U.S. women's national team and won the 2012 Olympic gold medal and the 2015 and 2019 FIFA Women's World Cups. With more than 120 international goals across more than 200 caps, she ranks among the most prolific scorers in the program's history. She was a lead plaintiff in the 2019 lawsuit that ultimately won U.S. women's national-team players equal pay with their men's counterparts.",
    alignment: "good",
    fallback: { birthYear: 1989, deathYear: null },
  },
  {
    slug: "venus-williams",
    name: "Venus Williams",
    wikipediaTitle: "Venus_Williams",
    description:
      "Venus Ebony Starr Williams is an American professional tennis player who has been ranked world No. 1 in both singles and doubles by the Women's Tennis Association, with seven Grand Slam singles titles, including five at Wimbledon, and 22 doubles titles, fourteen with her sister Serena. She won the gold medal in singles at Sydney 2000 and three more Olympic golds in doubles. Her advocacy was central to the All England Club's 2007 decision to award equal prize money to women at Wimbledon.",
    alignment: "good",
    fallback: { birthYear: 1980, deathYear: null },
  },
  {
    slug: "usain-bolt",
    name: "Usain Bolt",
    wikipediaTitle: "Usain_Bolt",
    description:
      "Usain St. Leo Bolt is a Jamaican retired sprinter widely regarded as the greatest sprinter of all time and the world record holder in the 100 metres (9.58 s), 200 metres (19.19 s), and the 4 × 100 metres relay. He is the only sprinter ever to win the Olympic 100 m and 200 m at three consecutive Games (2008, 2012, and 2016), and earned eight career Olympic gold medals along with eleven World Championships titles. He retired without ever testing positive for performance-enhancing drugs in an era during which many of his rivals were sanctioned.",
    alignment: "good",
    fallback: { birthYear: 1986, deathYear: null },
  },
  {
    slug: "nadia-comaneci",
    name: "Nadia Comăneci",
    wikipediaTitle: "Nadia_Comăneci",
    description:
      "Nadia Elena Comăneci is a Romanian retired gymnast who at the 1976 Montreal Olympics, aged 14, became the first gymnast in Olympic history to be awarded a perfect score of 10.0—a feat she repeated six more times at the same Games on her way to three gold medals. She added two more golds at the 1980 Moscow Olympics, finishing her Olympic career as a five-time gold medalist. She defected to the United States in 1989 weeks before the fall of the Ceaușescu regime in Romania.",
    alignment: "good",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "abebe-bikila",
    name: "Abebe Bikila",
    wikipediaTitle: "Abebe_Bikila",
    description:
      "Shambel Abebe Bikila was an Ethiopian marathon runner who at the 1960 Rome Olympics ran—and won—the marathon barefoot, becoming the first athlete from sub-Saharan Africa to win an Olympic gold medal. Four years later in Tokyo he successfully defended his title in shoes and a world-record time, making him the first runner to win consecutive Olympic marathons. After a 1969 car accident left him paraplegic, he competed in archery and table tennis at the 1970 Stoke Mandeville Games.",
    alignment: "good",
    fallback: { birthYear: 1932, deathYear: 1973 },
  },
  {
    slug: "garry-kasparov",
    name: "Garry Kasparov",
    wikipediaTitle: "Garry_Kasparov",
    description:
      "Garry Kimovich Kasparov is a Russian chess grandmaster who held the World Chess Championship from 1985 to 2000 and was the world's No. 1 ranked player for a record 255 months. His 1997 match against IBM's Deep Blue marked the first defeat of a reigning world champion by a computer in a classical match. Since retiring from professional chess in 2005 he has become one of the most prominent international critics of Vladimir Putin's regime, leading the Russian opposition movement Solidarnost and chairing the Human Rights Foundation.",
    alignment: "good",
    fallback: { birthYear: 1963, deathYear: null },
  },
  {
    slug: "adam-silver",
    name: "Adam Silver",
    wikipediaTitle: "Adam_Silver",
    description:
      "Adam Silver is an American lawyer and sports executive who has served as the fifth commissioner of the National Basketball Association since 2014. Within his first months in the role he handled the Donald Sterling racism scandal by imposing a lifetime ban on the Los Angeles Clippers owner and forcing the sale of the team, drawing widespread praise for the decisiveness of the response. Under his leadership the league has expanded its global presence, signed record-breaking media-rights deals, and introduced the in-season tournament now known as the NBA Cup.",
    alignment: "good",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "al-sharpton",
    name: "Al Sharpton",
    wikipediaTitle: "Al_Sharpton",
    description:
      "Alfred Charles Sharpton Jr. is an American Baptist minister and civil rights activist who founded the National Action Network in 1991 and has since become one of the most prominent national voices on issues of police violence and racial discrimination. He delivered eulogies for George Floyd, Michael Brown, Eric Garner, and Trayvon Martin, mobilizing public attention to each case, and hosts the daily MSNBC program PoliticsNation as well as a nationally syndicated radio show. He sought the Democratic presidential nomination in 2004.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "adrian-quist",
    name: "Adrian Quist",
    wikipediaTitle: "Adrian_Quist",
    description:
      "Adrian Karl Quist was an Australian tennis player who won 10 Grand Slam doubles titles in the 1930s and 1940s alongside countryman Jack Bromwich, including eight consecutive Australian Championships from 1936 to 1950 with the war years interrupted in between. He also won the 1936 Australian Championships singles title and represented Australia in 28 Davis Cup ties, helping his country win the trophy in 1939. He served as a long-running tennis administrator after his playing career and was inducted into the International Tennis Hall of Fame in 1984.",
    alignment: "good",
    fallback: { birthYear: 1913, deathYear: 1991 },
  },
  {
    slug: "akio-toyoda",
    name: "Akio Toyoda",
    wikipediaTitle: "Akio_Toyoda",
    description:
      "Akio Toyoda is a Japanese business executive who served as president and CEO of Toyota Motor Corporation from 2009 to 2023 before becoming chairman of the company founded by his grandfather Kiichiro Toyoda. Under his leadership Toyota became the world's largest automaker by sales, expanded the global market for hybrid vehicles led by the Prius, and pursued a multi-pathway approach to vehicle electrification rather than a single all-battery strategy. He has been a prominent public voice in debates over the pace and form of the global transition to electric vehicles.",
    alignment: "good",
    fallback: { birthYear: 1956, deathYear: null },
  },
  {
    slug: "albert-pujols",
    name: "Albert Pujols",
    wikipediaTitle: "Albert_Pujols",
    description:
      "José Alberto Pujols Alcántara is a Dominican-American former Major League Baseball first baseman who across 22 seasons with the St. Louis Cardinals, Los Angeles Angels, and Los Angeles Dodgers compiled 703 home runs, 2,218 runs batted in, and 3,384 hits. He won three NL MVP Awards, two World Series titles with the Cardinals, and ten Silver Slugger Awards, retiring in 2022 as a member of the elite 700 home-run club alongside Barry Bonds, Hank Aaron, and Babe Ruth. He has been widely respected as one of the most reliably productive hitters of his generation.",
    alignment: "good",
    fallback: { birthYear: 1980, deathYear: null },
  },
  {
    slug: "alberto-ascari",
    name: "Alberto Ascari",
    wikipediaTitle: "Alberto_Ascari",
    description:
      "Alberto Ascari was an Italian Formula One racing driver who won the World Drivers' Championship in 1952 and 1953 with Ferrari, recording 13 Grand Prix victories across six seasons. Famous for the precision and metronomic accuracy of his driving, he also won the 1954 Mille Miglia for Lancia. He was killed in a private testing accident at Monza on 26 May 1955, at the age of 36, just four days after surviving a dramatic crash into the harbor at the Monaco Grand Prix.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 1955 },
  },
  {
    slug: "alec-bedser",
    name: "Alec Bedser",
    wikipediaTitle: "Alec_Bedser",
    description:
      "Sir Alec Victor Bedser was an English professional cricketer and medium-fast bowler widely regarded as one of the finest English cricketers of the 20th century. Across his Test career from 1946 to 1955 he took 236 wickets for England and accumulated 1,924 first-class wickets in 485 matches for Surrey. He later served as chairman of the England Test selectors for 13 years from 1969 and was knighted in 1996 for services to cricket.",
    alignment: "good",
    fallback: { birthYear: 1918, deathYear: 2010 },
  },
  {
    slug: "alex-ferguson",
    name: "Alex Ferguson",
    wikipediaTitle: "Alex_Ferguson",
    description:
      "Sir Alexander Chapman Ferguson is a Scottish former professional football manager widely regarded as one of the greatest managers in the sport's history. As manager of Manchester United from 1986 to 2013 he led the club to 13 Premier League titles, five FA Cups, and two UEFA Champions League trophies, including the 1999 continental treble. He has also won three managerial honors from the BBC and FIFA, and was knighted in 1999.",
    alignment: "good",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "alex-olmedo",
    name: "Alex Olmedo",
    wikipediaTitle: "Alex_Olmedo",
    description:
      "Alejandro \"Alex\" Olmedo Rodríguez was a Peruvian-born American tennis player who won the 1959 Australian Championships and 1959 Wimbledon men's singles titles, as well as the 1960 U.S. Pro Championship. As a member of the U.S. Davis Cup team he played the decisive role in the United States winning the 1958 Davis Cup against Australia in Brisbane. He was inducted into the International Tennis Hall of Fame in 1987.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: 2020 },
  },
  {
    slug: "al-kaline",
    name: "Al Kaline",
    wikipediaTitle: "Al_Kaline",
    description:
      "Albert William \"Al\" Kaline, known as \"Mr. Tiger,\" was an American Major League Baseball right fielder who played all 22 seasons of his career with the Detroit Tigers and was selected to 18 All-Star teams. He won the 1955 American League batting title at age 20—still the youngest batting champion in major league history—and earned ten Gold Glove Awards for his outstanding outfield defense. He was elected to the Baseball Hall of Fame in 1980 in his first year of eligibility.",
    alignment: "good",
    fallback: { birthYear: 1934, deathYear: 2020 },
  },
  {
    slug: "al-lopez",
    name: "Al López",
    wikipediaTitle: "Al_López",
    description:
      "Alfonso Ramón López was a Spanish-American Major League Baseball catcher and manager whose 17-year managerial career with the Cleveland Indians and Chicago White Sox produced two American League pennants—1954 with Cleveland and 1959 with Chicago—the only AL pennants won between 1949 and 1964 by any team other than the New York Yankees. He played 1,950 games as a catcher across 19 seasons and was inducted into the Baseball Hall of Fame in 1977.",
    alignment: "good",
    fallback: { birthYear: 1908, deathYear: 2005 },
  },
  {
    slug: "al-michaels",
    name: "Al Michaels",
    wikipediaTitle: "Al_Michaels",
    description:
      "Alan Richard Michaels is an American sportscaster whose call of the 1980 Winter Olympics ice hockey \"Miracle on Ice\"—\"Do you believe in miracles? Yes!\"—is among the most famous moments in U.S. sports broadcasting history. Across more than five decades on network television he has called play-by-play for the World Series, Super Bowls, Olympics, NBA Finals, and Stanley Cup Finals, anchoring ABC's Monday Night Football for two decades and NBC's Sunday Night Football thereafter. He has won numerous Sports Emmy Awards and was inducted into the National Sportscasters and Sportswriters Hall of Fame in 2009.",
    alignment: "good",
    fallback: { birthYear: 1944, deathYear: null },
  },
  {
    slug: "al-oerter",
    name: "Al Oerter",
    wikipediaTitle: "Al_Oerter",
    description:
      "Alfred Oerter Jr. was an American discus thrower who won gold medals in the same individual event at four consecutive Summer Olympics—Melbourne 1956, Rome 1960, Tokyo 1964, and Mexico City 1968—the first athlete in any individual track-and-field event ever to do so. He set the world record in the discus on three separate occasions and was inducted into the IAAF Hall of Fame in 2012. He continued throwing competitively into his 50s and remained a fixture of U.S. track and field until his death.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: 2007 },
  },
  {
    slug: "al-simmons",
    name: "Al Simmons",
    wikipediaTitle: "Al_Simmons",
    description:
      "Aloysius Harry Simmons, born Alois Szymanski and known as \"Bucketfoot Al,\" was an American Major League Baseball outfielder who finished his 20-year career with a .334 batting average and 307 home runs. With Connie Mack's Philadelphia Athletics in the late 1920s and early 1930s he won back-to-back World Series titles in 1929 and 1930 and AL batting titles in 1930 and 1931. He was elected to the Baseball Hall of Fame in 1953.",
    alignment: "good",
    fallback: { birthYear: 1902, deathYear: 1956 },
  },
  {
    slug: "al-unser",
    name: "Al Unser",
    wikipediaTitle: "Al_Unser",
    description:
      "Alfred Unser was an American racing driver and a four-time Indianapolis 500 winner—1970, 1971, 1978, and 1987—joining A. J. Foyt as the second of only four drivers in history to win the race four times. He won the USAC and CART national championships and is the patriarch of the Unser racing family, alongside his brothers Jerry and Bobby and son Al Jr. He was inducted into the Motorsports Hall of Fame of America in 1991.",
    alignment: "good",
    fallback: { birthYear: 1939, deathYear: 2021 },
  },
  {
    slug: "al-unser-jr",
    name: "Al Unser Jr.",
    wikipediaTitle: "Al_Unser_Jr.",
    description:
      "Alfred Unser Jr., known as \"Little Al,\" is an American former racing driver who won the Indianapolis 500 twice—in 1992 and 1994—and captured two CART championship titles in 1990 and 1994. He won the Can-Am championship as a 20-year-old in 1982 before moving to the Indy car ranks, where he carried the Unser family name to a fifth generation of major American open-wheel success. After his racing career he has been open about his struggles with substance abuse and his subsequent recovery.",
    alignment: "good",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "alain-prost",
    name: "Alain Prost",
    wikipediaTitle: "Alain_Prost",
    description:
      "Alain Marie Pascal Prost is a French former Formula One racing driver and team owner, nicknamed \"the Professor\" for his analytical and strategic approach to racing. He won four Formula One World Drivers' Championships—1985, 1986, 1989, and 1993—and at the time of his retirement held the records for most race wins (51), fastest laps, and podium finishes. His decade-long rivalry with Ayrton Senna at McLaren and Williams defined late-1980s and early-1990s F1.",
    alignment: "good",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "alec-issigonis",
    name: "Alec Issigonis",
    wikipediaTitle: "Alec_Issigonis",
    description:
      "Sir Alexander Arnold Constantine Issigonis was a British-Greek automotive designer best known for designing the original Mini, launched by the British Motor Corporation in 1959 and voted the second most influential car of the 20th century in a 1999 international poll. His pioneering transverse front-wheel-drive layout, with the engine packaged sideways above the gearbox, gave the Mini space efficiency that became the template for nearly every subsequent compact car. He was knighted in 1969 for his contributions to automotive engineering.",
    alignment: "good",
    fallback: { birthYear: 1906, deathYear: 1988 },
  },
  {
    slug: "alessandro-volta",
    name: "Alessandro Volta",
    wikipediaTitle: "Alessandro_Volta",
    description:
      "Alessandro Giuseppe Antonio Anastasio Volta was an Italian physicist and chemist who in 1799 invented the voltaic pile, the first device to produce a steady electric current and the prototype of all subsequent electric batteries. He also discovered methane in 1776 and isolated it for combustion. The unit of electric potential—the volt—is named in his honor.",
    alignment: "good",
    fallback: { birthYear: 1745, deathYear: 1827 },
  },
  {
    slug: "alex-haley",
    name: "Alex Haley",
    wikipediaTitle: "Alex_Haley",
    description:
      "Alexander Murray Palmer Haley was an American writer whose 1976 book Roots: The Saga of an American Family traced his ancestry back to the West African boy Kunta Kinte, captured and sold into American slavery, and won a special Pulitzer Prize in 1977. ABC's 1977 television adaptation drew an estimated 130 million viewers across its broadcast week and remains one of the most-watched American miniseries of all time. He had earlier ghostwritten The Autobiography of Malcolm X (1965), one of the most influential books of the 20th century.",
    alignment: "good",
    fallback: { birthYear: 1921, deathYear: 1992 },
  },
  {
    slug: "alex-johnson",
    name: "Alex Johnson",
    wikipediaTitle: "Alex_Johnson",
    description:
      "Alex Johnson was an American Major League Baseball outfielder who played 13 seasons for eight teams from 1964 to 1976, winning the 1970 American League batting title with the California Angels with a .329 average. Selected as an All-Star that season, he was named the National League Comeback Player of the Year in 1968. He spoke openly about the racism and mental-health struggles he endured during his playing days, which informed his pioneering 1970s grievance against the Angels that prompted the league to formally recognize emotional disability for the first time.",
    alignment: "good",
    fallback: { birthYear: 1942, deathYear: 2015 },
  },
  {
    slug: "aamir-khan",
    name: "Aamir Khan",
    wikipediaTitle: "Aamir_Khan",
    description:
      "Aamir Hussain Khan is an Indian actor, filmmaker, and television personality regarded as one of the most influential figures in Indian cinema. Often called \"Mr. Perfectionist\" for his careful selection of projects, his films including Lagaan (2001), Rang De Basanti (2006), Taare Zameen Par (2007), 3 Idiots (2009), and Dangal (2016) have repeatedly broken Indian box-office records and earned international recognition, with Lagaan nominated for the Academy Award for Best Foreign Language Film. He hosted the social-issues talk show Satyamev Jayate, which used its national audience to address dowry abuse, child sexual assault, and caste discrimination.",
    alignment: "good",
    fallback: { birthYear: 1965, deathYear: null },
  },
  {
    slug: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    wikipediaTitle: "Leonardo_da_Vinci",
    description:
      "Leonardo di ser Piero da Vinci was an Italian polymath of the High Renaissance whose work as a painter, draftsman, engineer, anatomist, and architect made him an emblem of the Renaissance ideal of the universal genius. His paintings—most famously the Mona Lisa, The Last Supper, and Salvator Mundi—have become among the most recognized works in the history of art. The roughly 7,000 surviving pages of his notebooks contain centuries-ahead-of-their-time studies of anatomy, hydraulics, flight, geology, and mechanical engineering.",
    alignment: "good",
    fallback: { birthYear: 1452, deathYear: 1519 },
  },
  {
    slug: "michelangelo",
    name: "Michelangelo",
    wikipediaTitle: "Michelangelo",
    description:
      "Michelangelo di Lodovico Buonarroti Simoni was an Italian sculptor, painter, architect, and poet of the High Renaissance whose work has had an unrivaled influence on the development of Western art. He carved the Pietà and David in his twenties, painted the ceiling and Last Judgment of the Sistine Chapel between 1508 and 1541, and designed the dome of St. Peter's Basilica in Rome. The astonishing range and quantity of his surviving work made him the first Western artist to be the subject of major biographies during his own lifetime.",
    alignment: "good",
    fallback: { birthYear: 1475, deathYear: 1564 },
  },
  {
    slug: "raphael",
    name: "Raphael",
    wikipediaTitle: "Raphael",
    description:
      "Raffaello Sanzio da Urbino, known as Raphael, was an Italian painter and architect of the High Renaissance whose work is admired for its clarity of form, ease of composition, and serene neoplatonic ideal of human grandeur. With Leonardo and Michelangelo he formed the trio at the heart of the High Renaissance, and his Vatican Stanze frescoes—including The School of Athens (1511)—remain among the most influential works in Western art. He died on his 37th birthday in 1520, leaving an enormous workshop and an outsized legacy.",
    alignment: "good",
    fallback: { birthYear: 1483, deathYear: 1520 },
  },
  {
    slug: "pablo-picasso",
    name: "Pablo Picasso",
    wikipediaTitle: "Pablo_Picasso",
    description:
      "Pablo Ruiz Picasso was a Spanish painter, sculptor, and printmaker who spent most of his adult life in France and is widely regarded as one of the most influential artists of the 20th century. With Georges Braque he co-founded the Cubist movement, co-invented collage, and pioneered constructed sculpture, and his 1937 mural Guernica—commissioned in response to the Nazi bombing of the Basque town—became one of the most powerful anti-war paintings in modern art. His enormous catalog spans Blue, Rose, African-influenced, Cubist, Neoclassical, and Surrealist phases across more than seven decades of production.",
    alignment: "good",
    fallback: { birthYear: 1881, deathYear: 1973 },
  },
  {
    slug: "salvador-dali",
    name: "Salvador Dalí",
    wikipediaTitle: "Salvador_Dalí",
    description:
      "Salvador Domingo Felipe Jacinto Dalí i Domènech, Marquess of Dalí de Púbol, was a Spanish surrealist painter renowned for the technical skill, precise draftsmanship, and dreamlike imagery of his work, including the iconic 1931 painting The Persistence of Memory. He collaborated with Luis Buñuel on the surrealist short film Un Chien Andalou (1929), with Walt Disney on the animated short Destino, and with Alfred Hitchcock on the dream sequence for Spellbound. The Dalí Theatre and Museum he designed in his hometown of Figueres remains one of the most visited art museums in Spain.",
    alignment: "good",
    fallback: { birthYear: 1904, deathYear: 1989 },
  },
  {
    slug: "frida-kahlo",
    name: "Frida Kahlo",
    wikipediaTitle: "Frida_Kahlo",
    description:
      "Magdalena Carmen Frida Kahlo y Calderón was a Mexican painter known for her many self-portraits and works inspired by Mexican folk culture. After surviving polio and a near-fatal streetcar accident at 18 that left her with lifelong injuries, she turned her physical and emotional pain into a body of work that explored identity, gender, postcolonialism, and Mexican popular culture. Her marriage to muralist Diego Rivera and her membership in the Mexican Communist Party shaped both her work and her public life, and posthumous recognition has made her one of the most recognizable artists of the 20th century.",
    alignment: "good",
    fallback: { birthYear: 1907, deathYear: 1954 },
  },
  {
    slug: "keith-haring",
    name: "Keith Haring",
    wikipediaTitle: "Keith_Haring",
    description:
      "Keith Allen Haring was an American artist and AIDS activist whose bold, graphic visual language emerged from New York City's downtown art and graffiti scenes in the early 1980s. From spontaneous chalk drawings on subway advertising panels to monumental murals around the world, his work made street art a recognized contemporary genre and addressed apartheid, the AIDS crisis, and the criminalization of drug use. He founded the Keith Haring Foundation in 1989 to support AIDS research and children's programs before dying of AIDS-related complications in 1990 at age 31.",
    alignment: "good",
    fallback: { birthYear: 1958, deathYear: 1990 },
  },
  {
    slug: "marilyn-monroe",
    name: "Marilyn Monroe",
    wikipediaTitle: "Marilyn_Monroe",
    description:
      "Marilyn Monroe, born Norma Jeane Mortenson, was an American actress and model who became one of the most celebrated film stars and cultural icons of the 20th century. Her films, including Gentlemen Prefer Blondes (1953), The Seven Year Itch (1955), and Some Like It Hot (1959), grossed an estimated $200 million in their original releases, and she earned a Golden Globe Award and BAFTA nomination across her career. She died of a barbiturate overdose at her Brentwood home on 4 August 1962 at age 36 under circumstances that remain the subject of public scrutiny six decades on.",
    alignment: "good",
    fallback: { birthYear: 1926, deathYear: 1962 },
  },
  {
    slug: "albert-uderzo",
    name: "Albert Uderzo",
    wikipediaTitle: "Albert_Uderzo",
    description:
      "Albert Uderzo was a French comic book artist and scriptwriter best known as the co-creator and illustrator of the Astérix series, working in collaboration with writer René Goscinny from 1959 until Goscinny's death in 1977. Across more than 60 years of work he produced 39 Astérix volumes that have been translated into 117 languages and dialects and have collectively sold an estimated 380 million copies, making it one of the best-selling comic series in history. After Goscinny's death he continued the series as both writer and artist before transferring it to a new creative team in 2013.",
    alignment: "good",
    fallback: { birthYear: 1927, deathYear: 2020 },
  },
  {
    slug: "alessandra-ambrosio",
    name: "Alessandra Ambrosio",
    wikipediaTitle: "Alessandra_Ambrosio",
    description:
      "Alessandra Corine Ambrósio is a Brazilian model who served as a Victoria's Secret Angel from 2004 to 2017 and was the first spokesmodel for the company's PINK line. She has modeled for fashion houses including Christian Dior, Armani, Ralph Lauren, and Next, and Forbes has repeatedly listed her among the world's highest-paid models. She has built a swimwear and fashion business under her own GAL Floripa label and has been a longtime ambassador for the National Multiple Sclerosis Society.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "aishwarya-rai",
    name: "Aishwarya Rai",
    wikipediaTitle: "Aishwarya_Rai",
    description:
      "Aishwarya Rai Bachchan is an Indian actress and former Miss World 1994 who has established herself as one of the most popular and influential celebrities in India across more than three decades in Hindi cinema. She has starred in films including Hum Dil De Chuke Sanam, Devdas, Jodhaa Akbar, and Guzaarish, earning two Filmfare Awards and recognition from Time magazine as one of the 100 most influential people in the world. She regularly appears as a jury member or featured guest at the Cannes Film Festival.",
    alignment: "good",
    fallback: { birthYear: 1973, deathYear: null },
  },
  {
    slug: "a-bartlett-giamatti",
    name: "A. Bartlett Giamatti",
    wikipediaTitle: "A._Bartlett_Giamatti",
    description:
      "Angelo Bartlett \"Bart\" Giamatti was an American Renaissance literature scholar, the 19th president of Yale University, and the seventh commissioner of Major League Baseball. As MLB commissioner he negotiated and announced the lifetime banishment of all-time hits leader Pete Rose for gambling on baseball in August 1989; he died of a heart attack just eight days later, at age 51, after only five months in the role. His writings on baseball, particularly the essay \"The Green Fields of the Mind,\" remain widely quoted in American sportswriting.",
    alignment: "good",
    fallback: { birthYear: 1938, deathYear: 1989 },
  },
  {
    slug: "meghan-markle",
    name: "Meghan Markle",
    wikipediaTitle: "Meghan,_Duchess_of_Sussex",
    description:
      "Meghan, Duchess of Sussex, born Rachel Meghan Markle, is an American media personality, entrepreneur, and former actress who married Prince Harry in 2018, becoming the first biracial woman to marry into the senior British royal family. After playing Rachel Zane on the legal drama Suits for seven seasons (2011–2018), she stepped back from her royal duties in 2020 with her husband and resettled in California, where they founded the production company Archewell. She has been an outspoken advocate for women's rights, racial justice, and humane press coverage of public figures.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "prince-harry",
    name: "Prince Harry",
    wikipediaTitle: "Prince_Harry,_Duke_of_Sussex",
    description:
      "Prince Harry, Duke of Sussex, is the younger son of King Charles III and Diana, Princess of Wales, and the fifth in line to the British throne. He served as a British Army officer for ten years, including two tours of duty in Afghanistan, and founded the Invictus Games in 2014 to support wounded servicemembers and veterans through international adaptive multi-sport competition. With his wife Meghan he stepped back from senior royal duties in 2020 and has since spoken publicly about mental health, racism within the royal household, and tabloid intrusion.",
    alignment: "good",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "princess-diana",
    name: "Princess Diana",
    wikipediaTitle: "Diana,_Princess_of_Wales",
    description:
      "Diana, Princess of Wales, born Diana Frances Spencer, was the first wife of Charles, then Prince of Wales, and the mother of Princes William and Harry. As a senior member of the British royal family from 1981 to 1996 she became one of the most famous women in the world while devoting her public platform to global humanitarian causes—most notably the campaign against landmines and an early break with stigma around HIV/AIDS, when she shook hands with patients in 1987 without gloves. She died at age 36 in a car crash in Paris on 31 August 1997, while being pursued by photographers.",
    alignment: "good",
    fallback: { birthYear: 1961, deathYear: 1997 },
  },
  {
    slug: "adam-opel",
    name: "Adam Opel",
    wikipediaTitle: "Adam_Opel",
    description:
      "Adam Opel was a German entrepreneur who founded the Opel company in Rüsselsheim in 1862 to manufacture sewing machines, expanded into bicycle production in 1886, and laid the groundwork for what would become one of Europe's largest automobile manufacturers. By the time of his death in 1895 his company was the largest sewing-machine and bicycle producer in Germany, and his five sons subsequently led Opel into automobile production, building the firm into a major industrial enterprise. The company has since passed through several owners but continues to bear his name more than 160 years after its founding.",
    alignment: "good",
    fallback: { birthYear: 1837, deathYear: 1895 },
  },
  {
    slug: "plato",
    name: "Plato",
    wikipediaTitle: "Plato",
    description:
      "Plato was an ancient Greek philosopher of Classical Athens widely considered the foundational thinker of the Western philosophical tradition. A student of Socrates and the teacher of Aristotle, he founded the Academy in Athens around 387 BC, the first institution of higher learning in the Western world, and wrote dialogues including the Republic, Phaedo, Symposium, Phaedrus, and Timaeus that have shaped every major area of subsequent philosophy. His doctrine of the Forms and his political theory of the philosopher-king continue to be foundational starting points for ethics, metaphysics, epistemology, and political philosophy.",
    alignment: "good",
    fallback: { birthYear: -427, deathYear: -347 },
  },
  {
    slug: "thomas-aquinas",
    name: "Thomas Aquinas",
    wikipediaTitle: "Thomas_Aquinas",
    description:
      "Thomas Aquinas was a 13th-century Italian Dominican friar, theologian, and philosopher whose synthesis of Aristotelian philosophy with Christian theology became the foundation of medieval scholastic thought and remains foundational to Catholic theology today. His magnum opus, the Summa Theologica, attempted to lay out the whole of Christian doctrine in dialectical form across more than three million words. He was canonized in 1323, declared a Doctor of the Church in 1567, and remains one of the most studied figures in the history of Western philosophy.",
    alignment: "good",
    fallback: { birthYear: 1225, deathYear: 1274 },
  },
  {
    slug: "rene-descartes",
    name: "Rene Descartes",
    wikipediaTitle: "René_Descartes",
    description:
      "René Descartes was a French philosopher, scientist, and mathematician widely considered a foundational figure in the emergence of modern philosophy. His Meditations on First Philosophy (1641) introduced the methodological doubt that culminated in his famous formulation \"cogito, ergo sum\"—I think, therefore I am—and his Discourse on the Method (1637) helped inaugurate modern rationalism. He also unified algebra and geometry into analytic geometry, and the Cartesian coordinate system bears his name.",
    alignment: "good",
    fallback: { birthYear: 1596, deathYear: 1650 },
  },
  {
    slug: "s-ren-kierkegaard",
    name: "Søren Kierkegaard",
    wikipediaTitle: "Søren_Kierkegaard",
    description:
      "Søren Aabye Kierkegaard was a Danish theologian and philosopher widely considered the first existentialist thinker. His major works—including Either/Or (1843), Fear and Trembling (1843), The Concept of Anxiety (1844), and The Sickness Unto Death (1849)—pioneered an indirect, often pseudonymous form of philosophical writing that addressed individual existence, anxiety, despair, and the leap of faith. He profoundly influenced 20th-century existentialism, phenomenology, theology, and literature.",
    alignment: "good",
    fallback: { birthYear: 1813, deathYear: 1855 },
  },
  {
    slug: "ludwig-wittgenstein",
    name: "Ludwig Wittgenstein",
    wikipediaTitle: "Ludwig_Wittgenstein",
    description:
      "Ludwig Josef Johann Wittgenstein was an Austro-British philosopher whose work in logic, philosophy of language, and philosophy of mind reshaped 20th-century analytic philosophy twice over. His 1921 Tractatus Logico-Philosophicus argued that the limits of language are the limits of the world; he then spent decades repudiating its conclusions before producing the posthumously published Philosophical Investigations (1953), which redirected the field toward the study of ordinary language and meaning-as-use. He taught at Cambridge from 1929 to 1947 and is widely considered one of the most influential philosophers of the 20th century.",
    alignment: "good",
    fallback: { birthYear: 1889, deathYear: 1951 },
  },
  {
    slug: "pope-francis",
    name: "Pope Francis",
    wikipediaTitle: "Pope_Francis",
    description:
      "Pope Francis, born Jorge Mario Bergoglio, served as head of the Catholic Church and sovereign of Vatican City from 2013 until his death in 2025. He was the first Jesuit pope, the first Latin American pope, and the first pope born or raised outside Europe in more than twelve centuries. His pontificate emphasized ministry to the poor and marginalized, climate action through the encyclical Laudato si' (2015), and a more pastoral tone toward LGBTQ Catholics, divorced Catholics, and refugees, while opening Vatican governance reforms that included the formal inclusion of women in senior decision-making roles.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: 2025 },
  },
  {
    slug: "aga-khan-iii",
    name: "Aga Khan III",
    wikipediaTitle: "Aga_Khan_III",
    description:
      "Sir Sultan Muhammad Shah, Aga Khan III, was the 48th Imam of the Nizari Ismaili branch of Shia Islam, leading the community for 72 years from 1885 until his death in 1957. He served as the first president of the All-India Muslim League and was the founding president of the League of Nations General Assembly in 1937, the first Muslim to hold the office. He directed substantial portions of the wealth he received as Imam toward modern educational, medical, and welfare institutions for Muslim communities across South Asia and East Africa.",
    alignment: "good",
    fallback: { birthYear: 1877, deathYear: 1957 },
  },
  {
    slug: "adlai-stevenson-ii",
    name: "Adlai Stevenson II",
    wikipediaTitle: "Adlai_Stevenson_II",
    description:
      "Adlai Ewing Stevenson II was an American politician and diplomat who served as the 31st governor of Illinois from 1949 to 1953 and as U.S. Ambassador to the United Nations from 1961 until his death in 1965. The Democratic Party's nominee for president in 1952 and 1956, he lost both elections to Dwight D. Eisenhower while becoming a defining liberal voice for the party in the early Cold War era. His most famous moment in office came at the United Nations in October 1962, when he confronted the Soviet ambassador with reconnaissance photographs of Soviet missiles in Cuba.",
    alignment: "good",
    fallback: { birthYear: 1900, deathYear: 1965 },
  },
  {
    slug: "aldo-moro",
    name: "Aldo Moro",
    wikipediaTitle: "Aldo_Moro",
    description:
      "Aldo Moro was an Italian statesman who served five terms as Prime Minister of Italy between 1963 and 1976 as a leader of the centre-left wing of Christian Democracy. A principal architect of the \"historic compromise\" between Christian Democrats and the Italian Communist Party, he was kidnapped in March 1978 by the far-left Red Brigades, who held him for 55 days while the Italian government refused to negotiate. He was executed by his captors in May 1978; his murder remains one of the defining traumas of postwar Italian politics.",
    alignment: "good",
    fallback: { birthYear: 1916, deathYear: 1978 },
  },
  {
    slug: "abdul-qadir",
    name: "Abdul Qadir",
    wikipediaTitle: "Abdul_Qadir_(cricketer)",
    description:
      "Abdul Qadir Khan was a Pakistani cricketer regarded as the player who almost single-handedly revived the art of leg-spin bowling in international cricket during the 1980s, when the discipline had nearly disappeared from the sport. Across 67 Tests for Pakistan he took 236 wickets with a vivid range of googlies, flippers, and top-spinners, including 9 for 56 against England at Lahore in 1987—then the best figures by any Pakistani in a Test innings. He served as a mentor to a generation of leg-spinners including Australia's Shane Warne.",
    alignment: "good",
    fallback: { birthYear: 1955, deathYear: 2019 },
  },
  {
    slug: "amelia-earhart",
    name: "Amelia Earhart",
    wikipediaTitle: "Amelia_Earhart",
    description:
      "Amelia Mary Earhart was an American aviator and aviation pioneer who in 1932 became the first woman to complete a nonstop solo transatlantic flight, for which she received the Distinguished Flying Cross. She set numerous additional speed and distance records and was a founder of the Ninety-Nines, the international organization for women pilots. She disappeared over the central Pacific Ocean in July 1937 during an attempted circumnavigation of the globe with navigator Fred Noonan and was officially declared dead in 1939; the fate of her flight remains the subject of extensive search and speculation to this day.",
    alignment: "good",
    fallback: { birthYear: 1897, deathYear: 1937 },
  },
  {
    slug: "harriet-quimby",
    name: "Harriet Quimby",
    wikipediaTitle: "Harriet_Quimby",
    description:
      "Harriet Quimby was an American journalist, screenwriter, and aviation pioneer who in August 1911 became the first woman in the United States to earn a pilot's license, and in April 1912 the first woman to fly solo across the English Channel. Although her aviation career lasted barely a year before she was killed in a flying accident at the Third Annual Boston Aviation Meet in July 1912 at age 37, her example significantly expanded the public role of women in early aviation. She had earlier been a successful early Hollywood screenwriter, contributing scenarios to D. W. Griffith.",
    alignment: "good",
    fallback: { birthYear: 1875, deathYear: 1912 },
  },
  {
    slug: "albert-stevens",
    name: "Albert Stevens",
    wikipediaTitle: "Albert_Stevens",
    description:
      "Albert Stevens, identified in declassified records as patient CAL-1, was an American house painter from Ohio who in 1945 was injected with plutonium without his knowledge or consent at the University of California Hospital, San Francisco, as part of secret U.S. government human radiation experiments. Erroneously diagnosed as terminally ill, he survived another 21 years carrying the highest known accumulated radiation dose ever absorbed by a human, dying of natural heart disease in 1966. His case became one of the central exposures of the broader Manhattan Project–era radiation experiments documented by the 1995 Advisory Committee on Human Radiation Experiments.",
    alignment: "good",
    fallback: { birthYear: 1887, deathYear: 1966 },
  },
  {
    slug: "hayao-miyazaki",
    name: "Hayao Miyazaki",
    wikipediaTitle: "Hayao_Miyazaki",
    description:
      "Hayao Miyazaki is a Japanese animator and filmmaker who co-founded Studio Ghibli in 1985 and is widely regarded as one of the most influential filmmakers in the history of animation. His features—including My Neighbor Totoro (1988), Princess Mononoke (1997), Spirited Away (2001), Howl's Moving Castle (2004), and The Boy and the Heron (2023)—have redefined animated storytelling for global audiences. He has won two Academy Awards for Best Animated Feature, for Spirited Away in 2003 and The Boy and the Heron in 2024, the latter at age 83.",
    alignment: "good",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "ajay-devgan",
    name: "Ajay Devgan",
    wikipediaTitle: "Ajay_Devgn",
    description:
      "Vishal Virender Devgan, known professionally as Ajay Devgn, is an Indian actor, director, and producer who has appeared in more than 100 Hindi films across more than three decades, winning four National Film Awards and four Filmfare Awards. His major roles include Zakhm (1998), The Legend of Bhagat Singh (2002), Omkara (2006), and the Singham, Drishyam, and Tanhaji franchises. He was honored by the Government of India with the Padma Shri in 2016.",
    alignment: "good",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "ai-mori",
    name: "Ai Mori",
    wikipediaTitle: "Ai_Mori",
    description:
      "Ai Mori is a Japanese professional rock climber who specializes in lead climbing and bouldering and is one of the most successful young climbers in international competition. At the 2019 IFSC Climbing World Championships at age 15 she became the youngest Japanese athlete ever to reach the podium of the event, finishing third in lead. She has won multiple Japan Cup titles and IFSC World Cup podium finishes, and is widely viewed as one of the leading sport climbers of her generation.",
    alignment: "good",
    fallback: { birthYear: 2003, deathYear: null },
  },
  {
    slug: "a-a-milne",
    name: "A. A. Milne",
    wikipediaTitle: "A._A._Milne",
    description:
      "Alan Alexander Milne was an English writer best known as the creator of Winnie-the-Pooh, the children's book character introduced in the 1926 collection of the same name and based on his son Christopher Robin's stuffed bear. The two books of Pooh stories, along with the 1924 children's poetry collection When We Were Very Young and 1927's Now We Are Six, have been translated into more than 50 languages. Before Pooh's success eclipsed everything else, he was a successful playwright on the London stage and a contributor to the satirical magazine Punch.",
    alignment: "good",
    fallback: { birthYear: 1882, deathYear: 1956 },
  },
  {
    slug: "abbas-kiarostami",
    name: "Abbas Kiarostami",
    wikipediaTitle: "Abbas_Kiarostami",
    description:
      "Abbas Kiarostami was an Iranian film director, screenwriter, and photographer regarded as one of the most prominent filmmakers in world cinema. His Koker Trilogy, Close-Up (1990), Taste of Cherry (1997)—which won the Palme d'Or at Cannes—and The Wind Will Carry Us (1999) earned him sustained international acclaim while making films under the constraints of the Islamic Republic of Iran. He continued working with international cast and crew on Certified Copy (2010) and Like Someone in Love (2012) before his death in 2016.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: 2016 },
  },
  {
    slug: "agatha-christie",
    name: "Agatha Christie",
    wikipediaTitle: "Agatha_Christie",
    description:
      "Dame Agatha Mary Clarissa Christie was an English author whose 66 detective novels and 14 short-story collections—centered on her detectives Hercule Poirot and Miss Marple—have made her the best-selling fiction novelist of all time, with worldwide sales estimated by Guinness World Records at more than two billion copies. Her play The Mousetrap, which opened in London's West End in 1952, holds the record for the longest continuous run of any play in history. She was made a Dame Commander of the Order of the British Empire in 1971.",
    alignment: "good",
    fallback: { birthYear: 1890, deathYear: 1976 },
  },
  {
    slug: "agnes-moorehead",
    name: "Agnes Moorehead",
    wikipediaTitle: "Agnes_Moorehead",
    description:
      "Agnes Robertson Moorehead was an American actress whose five-decade career spanned radio, theater, film, and television. As a founding member of Orson Welles's Mercury Theatre she appeared in Citizen Kane (1941), The Magnificent Ambersons (1942), and the 1938 War of the Worlds radio broadcast, earning four Academy Award nominations across her film career. She is most widely remembered as the witch Endora on the ABC sitcom Bewitched (1964–1972), for which she received a Primetime Emmy nomination every year of the series' run.",
    alignment: "good",
    fallback: { birthYear: 1900, deathYear: 1974 },
  },
  {
    slug: "agnieszka-radwanska",
    name: "Agnieszka Radwańska",
    wikipediaTitle: "Agnieszka_Radwańska",
    description:
      "Agnieszka Roma Radwańska is a Polish former professional tennis player who reached a career-high singles ranking of world No. 2 in July 2012, the highest position ever achieved by a Polish player at the time. She won 20 WTA Tour singles titles, including the prestigious 2015 WTA Finals, and reached the Wimbledon final in 2012. Known for her creative shot-making and tactical variety in an era of power baseliners, she received the WTA Fan Favorite Singles Player of the Year award seven times.",
    alignment: "good",
    fallback: { birthYear: 1989, deathYear: null },
  },
  {
    slug: "agrippina-the-elder",
    name: "Agrippina the Elder",
    wikipediaTitle: "Agrippina_the_Elder",
    description:
      "Vipsania Agrippina, known as Agrippina the Elder, was a prominent member of the Julio-Claudian dynasty of imperial Rome. The granddaughter of Augustus, wife of the popular general Germanicus, and mother of the emperor Caligula and the empress Agrippina the Younger, she accompanied her husband on his campaigns on the Rhine and held the loyalty of the legions through episodes of mutiny. After Germanicus's suspicious death in 19 AD she became a focal point of opposition to the emperor Tiberius, who ultimately exiled her to the island of Pandataria, where she starved herself to death.",
    alignment: "good",
    fallback: { birthYear: -14, deathYear: 33 },
  },
  {
    slug: "al-green",
    name: "Al Green",
    wikipediaTitle: "Al_Green",
    description:
      "Albert Leornes Greene, known professionally as Al Green, is an American singer, songwriter, and pastor whose early-1970s soul recordings—including \"Tired of Being Alone,\" \"I'm Still in Love with You,\" \"Take Me to the River,\" and his signature \"Let's Stay Together\"—are foundational works of Memphis soul. He has sold more than 20 million records worldwide and was inducted into the Rock and Roll Hall of Fame in 1995. After being ordained in 1976 he combined recording with pastoral work at the Full Gospel Tabernacle in Memphis, and was honored with the Kennedy Center Honors in 2014.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "albert-camus",
    name: "Albert Camus",
    wikipediaTitle: "Albert_Camus",
    description:
      "Albert Camus was a French-Algerian philosopher, novelist, and journalist who at age 44 received the 1957 Nobel Prize in Literature, the second-youngest laureate in the prize's history and the first born in Africa. His novels The Stranger (1942) and The Plague (1947), the philosophical essay The Myth of Sisyphus (1942), and the political work The Rebel (1951) made him one of the central figures in the literary and philosophical movement that became known as absurdism. He died at age 46 in a car crash in January 1960.",
    alignment: "good",
    fallback: { birthYear: 1913, deathYear: 1960 },
  },
  {
    slug: "albert-finney",
    name: "Albert Finney",
    wikipediaTitle: "Albert_Finney",
    description:
      "Albert Finney was an English actor whose six-decade career spanned the British New Wave through Hollywood blockbusters, with notable roles in Saturday Night and Sunday Morning (1960), Tom Jones (1963), Murder on the Orient Express (1974), Erin Brockovich (2000), and the James Bond film Skyfall (2012). He earned five Academy Award nominations and won three BAFTA Awards, a Golden Globe, and an Emmy across his career, while famously declining offers of both a CBE and a knighthood. He continued to work on stage and screen until shortly before his death in 2019.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: 2019 },
  },
  {
    slug: "albert-kahn",
    name: "Albert Kahn",
    wikipediaTitle: "Albert_Kahn_(architect)",
    description:
      "Albert Kahn was an American architect known as the \"architect of Detroit\" who, with his brother Julius, designed many of the most important industrial plants of the 20th century, including the Ford River Rouge complex and the Highland Park Ford Plant. His pioneering use of reinforced concrete and steel-truss construction enabled vast, single-story factories that transformed mass production. His firm also designed more than 500 factories in the Soviet Union in the late 1920s and early 1930s as part of the first Five-Year Plan, in addition to skyscrapers, mansions, and university buildings across the United States.",
    alignment: "good",
    fallback: { birthYear: 1869, deathYear: 1942 },
  },
  {
    slug: "alec-douglas-home",
    name: "Alec Douglas-Home",
    wikipediaTitle: "Alec_Douglas-Home",
    description:
      "Alexander Frederick Douglas-Home, Baron Home of the Hirsel, was a British Conservative politician who served as Prime Minister of the United Kingdom from October 1963 to October 1964, the last prime minister to be drawn from the House of Lords. To take the post he renounced his earldom and won a by-election to the House of Commons within weeks. He earlier served as Foreign Secretary under Harold Macmillan and again under Edward Heath in the 1970s.",
    alignment: "good",
    fallback: { birthYear: 1903, deathYear: 1995 },
  },
  {
    slug: "alfred-hitchcock",
    name: "Alfred Hitchcock",
    wikipediaTitle: "Alfred_Hitchcock",
    description:
      "Sir Alfred Joseph Hitchcock was an English filmmaker known as the \"Master of Suspense\" whose six-decade career produced more than 50 feature films, including Rebecca (1940), Notorious (1946), Strangers on a Train (1951), Rear Window (1954), Vertigo (1958), North by Northwest (1959), Psycho (1960), and The Birds (1963). His pioneering techniques in cinematography, editing, and audience manipulation shaped the language of the modern thriller and have been studied and imitated by filmmakers ever since. He received the AFI Life Achievement Award in 1979 and was knighted just months before his death in 1980.",
    alignment: "good",
    fallback: { birthYear: 1899, deathYear: 1980 },
  },
  {
    slug: "bruce-lee",
    name: "Bruce Lee",
    wikipediaTitle: "Bruce_Lee",
    description:
      "Bruce Lee was a Hong Kong American martial artist, actor, and filmmaker who founded the hybrid martial arts philosophy of Jeet Kune Do and is widely credited with popularizing martial arts cinema and Asian American representation in Hollywood. His four completed Hong Kong–made films—The Big Boss (1971), Fist of Fury (1972), The Way of the Dragon (1972), and the U.S.-co-produced Enter the Dragon (1973)—broke box-office records across Asia and helped open Western audiences to Asian leading men. He died in Hong Kong of cerebral edema in July 1973 at age 32, weeks before Enter the Dragon's premiere.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: 1973 },
  },
  {
    slug: "brad-pitt",
    name: "Brad Pitt",
    wikipediaTitle: "Brad_Pitt",
    description:
      "William Bradley \"Brad\" Pitt is an American actor and film producer whose three-decade career has earned two Academy Awards, two British Academy Film Awards, two Golden Globes, and a Volpi Cup, with films grossing more than $7.5 billion worldwide. As leading actor he has anchored such films as Se7en (1995), Fight Club (1999), Moneyball (2011), and Once Upon a Time in Hollywood (2019), the last of which won him the Academy Award for Best Supporting Actor. As co-founder of Plan B Entertainment he has produced three Best Picture Oscar winners: 12 Years a Slave (2013), Moonlight (2016), and CODA (2021).",
    alignment: "good",
    fallback: { birthYear: 1963, deathYear: null },
  },
  {
    slug: "carrie-fisher",
    name: "Carrie Fisher",
    wikipediaTitle: "Carrie_Fisher",
    description:
      "Carrie Frances Fisher was an American actress and writer best known for playing Princess Leia in the original Star Wars trilogy (1977–1983) and reprising the role in the sequel trilogy from 2015 onward. Beyond her screen work she was a successful novelist and memoirist whose books, including Postcards from the Edge (1987), Wishful Drinking (2008), and The Princess Diarist (2016), candidly chronicled her bipolar disorder and addiction. Her sustained mental-health advocacy made discussions of bipolar disorder a regular feature of mainstream media.",
    alignment: "good",
    fallback: { birthYear: 1956, deathYear: 2016 },
  },
  {
    slug: "che-guevara",
    name: "Che Guevara",
    wikipediaTitle: "Che_Guevara",
    description:
      "Ernesto \"Che\" Guevara de la Serna was an Argentine Marxist revolutionary and physician who, alongside Fidel Castro, became a principal commander of the Cuban Revolution that overthrew the Batista regime in 1959. He served in early Castro government posts including president of the National Bank and minister of industry, then left Cuba in 1965 to lead guerrilla campaigns first in the Congo and later in Bolivia, where he was captured and executed by the Bolivian Army in October 1967. The 1960 Alberto Korda photograph of his face has since become one of the most reproduced images of the 20th century.",
    alignment: "good",
    fallback: { birthYear: 1928, deathYear: 1967 },
  },
  {
    slug: "cate-blanchett",
    name: "Cate Blanchett",
    wikipediaTitle: "Cate_Blanchett",
    description:
      "Catherine Élise Blanchett is an Australian actress and producer regarded as one of the finest performers of her generation. She has received two Academy Awards—Best Supporting Actress for The Aviator (2004) and Best Actress for Blue Jasmine (2013)—along with three SAG Awards, four BAFTAs, and four Golden Globes. She has also served as a UNHCR Goodwill Ambassador since 2016, advocating for refugees and stateless people around the world.",
    alignment: "good",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "charlize-theron",
    name: "Charlize Theron",
    wikipediaTitle: "Charlize_Theron",
    description:
      "Charlize Theron is a South African and American actress and producer who won the Academy Award for Best Actress for her transformative performance as serial killer Aileen Wuornos in Monster (2003). Subsequent leading roles in films including Mad Max: Fury Road, Atomic Blonde, and Bombshell have established her as one of Hollywood's most bankable action and dramatic stars. Through the Charlize Theron Africa Outreach Project she has supported HIV/AIDS prevention and education programs across southern Africa for more than two decades.",
    alignment: "good",
    fallback: { birthYear: 1975, deathYear: null },
  },
  {
    slug: "christopher-nolan",
    name: "Christopher Nolan",
    wikipediaTitle: "Christopher_Nolan",
    description:
      "Sir Christopher Edward Nolan is a British-American filmmaker whose intricately structured genre films—including Memento (2000), The Dark Knight trilogy, Inception (2010), Interstellar (2014), Dunkirk (2017), and Tenet (2020)—have grossed more than $6 billion worldwide. He won the Academy Awards for Best Picture and Best Director in 2024 for Oppenheimer, his $1 billion biopic of physicist J. Robert Oppenheimer and the Manhattan Project. He was knighted in the 2024 New Year Honours for services to film.",
    alignment: "good",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "christopher-walken",
    name: "Christopher Walken",
    wikipediaTitle: "Christopher_Walken",
    description:
      "Christopher Walken is an American actor whose six-decade career has produced more than 100 film and television appearances and earned him an Academy Award for Best Supporting Actor for The Deer Hunter (1978). His distinctive cadence and command of menacing, eccentric, or comic characters have anchored films including Annie Hall, The Dead Zone, A View to a Kill, Pulp Fiction, Catch Me If You Can, and Hairspray. A trained dancer who incorporated movement into many of his roles, he won an MTV Video Music Award for his Fatboy Slim \"Weapon of Choice\" performance.",
    alignment: "good",
    fallback: { birthYear: 1943, deathYear: null },
  },
  {
    slug: "chris-evans",
    name: "Chris Evans",
    wikipediaTitle: "Chris_Evans_(actor)",
    description:
      "Christopher Robert Evans is an American actor best known for portraying Steve Rogers / Captain America in the Marvel Cinematic Universe, appearing in the role across nine films from Captain America: The First Avenger (2011) through Avengers: Endgame (2019). His other film work includes leading roles in the Fantastic Four films, Snowpiercer, Knives Out, and the Defending Jacob limited series. Off-screen he founded the political-engagement platform A Starting Point and has been a vocal advocate for civic participation.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "chris-hemsworth",
    name: "Chris Hemsworth",
    wikipediaTitle: "Chris_Hemsworth",
    description:
      "Christopher Hemsworth is an Australian actor and producer best known for playing Thor in the Marvel Cinematic Universe, appearing as the character in eight films from 2011 through Thor: Love and Thunder (2022). His other major roles include Rush (2013), In the Heart of the Sea (2015), and the Extraction action films. After learning he carries a genetic risk for Alzheimer's disease, he has used his platform to support research and lifestyle interventions for early prevention.",
    alignment: "good",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "christian-bale",
    name: "Christian Bale",
    wikipediaTitle: "Christian_Bale",
    description:
      "Christian Charles Philip Bale is an English actor known for committing extraordinary physical transformations to his roles. He won the Academy Award for Best Supporting Actor for The Fighter (2010) and earned subsequent nominations for American Hustle, The Big Short, and Vice, while anchoring Christopher Nolan's Dark Knight trilogy as Batman/Bruce Wayne. His career began in childhood with the lead role in Steven Spielberg's Empire of the Sun (1987).",
    alignment: "good",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "christopher-lee",
    name: "Christopher Lee",
    wikipediaTitle: "Christopher_Lee",
    description:
      "Sir Christopher Frank Carandini Lee was an English actor whose six-decade screen career produced more than 200 credits and made him one of the most prolific film actors in history. He played Dracula in seven Hammer Horror films, the wizard Saruman in Peter Jackson's Lord of the Rings and Hobbit trilogies, Count Dooku in Star Wars Episodes II and III, and Francisco Scaramanga in The Man with the Golden Gun. Before acting he served in the Royal Air Force during the Second World War as an attached intelligence officer, including operations against Nazi war criminals.",
    alignment: "good",
    fallback: { birthYear: 1922, deathYear: 2015 },
  },
  {
    slug: "daniel-day-lewis",
    name: "Daniel Day-Lewis",
    wikipediaTitle: "Daniel_Day-Lewis",
    description:
      "Sir Daniel Michael Blake Day-Lewis is an English actor often described as one of the greatest screen actors in cinema history, and the only male performer ever to win the Academy Award for Best Actor three times—for My Left Foot (1989), There Will Be Blood (2007), and Lincoln (2012). Renowned for his commitment to method acting and his careful selection of roles—often a single film every several years—he has also earned four BAFTAs, three SAG Awards, and two Golden Globes. He was knighted in 2014 for services to drama.",
    alignment: "good",
    fallback: { birthYear: 1957, deathYear: null },
  },
  {
    slug: "eddie-van-halen",
    name: "Eddie Van Halen",
    wikipediaTitle: "Eddie_Van_Halen",
    description:
      "Edward Lodewijk \"Eddie\" Van Halen was an American musician who served as the guitarist, primary songwriter, and co-founder of the rock band Van Halen, founded with his brother Alex in 1972. His 1978 instrumental \"Eruption\" introduced two-handed tapping to mainstream rock guitar and is widely regarded as one of the most influential guitar solos in rock history. He died of cancer in October 2020 at age 65 and was inducted into the Rock and Roll Hall of Fame as a member of Van Halen in 2007.",
    alignment: "good",
    fallback: { birthYear: 1955, deathYear: 2020 },
  },
  {
    slug: "edward-snowden",
    name: "Edward Snowden",
    wikipediaTitle: "Edward_Snowden",
    description:
      "Edward Joseph Snowden is a former United States National Security Agency contractor who in 2013 leaked classified documents to journalists Glenn Greenwald, Laura Poitras, and Barton Gellman, exposing the existence of mass surveillance programs operated by the NSA and its Five Eyes partners against domestic and foreign communications. The disclosures prompted a global debate over surveillance, civil liberties, and secret-court oversight, and contributed to the passage of the USA FREEDOM Act in 2015. Charged under the Espionage Act, he has lived in Russia since 2013, where he was granted citizenship in 2022.",
    alignment: "good",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "elvis-presley",
    name: "Elvis Presley",
    wikipediaTitle: "Elvis_Presley",
    description:
      "Elvis Aaron Presley was an American singer and actor known as the \"King of Rock and Roll\" and one of the most culturally significant figures of the 20th century. His 1950s recordings for Sun and RCA—including \"Heartbreak Hotel,\" \"Hound Dog,\" \"Don't Be Cruel,\" and \"Jailhouse Rock\"—and his charismatic, sexually provocative performance style helped bring rhythm and blues to a mass white American audience and reshape popular music permanently. He died at his Graceland home in Memphis in August 1977 at age 42, having sold an estimated 500 million records worldwide.",
    alignment: "good",
    fallback: { birthYear: 1935, deathYear: 1977 },
  },
  {
    slug: "emma-stone",
    name: "Emma Stone",
    wikipediaTitle: "Emma_Stone",
    description:
      "Emily Jean \"Emma\" Stone is an American actress and film producer who has won two Academy Awards for Best Actress—for La La Land (2016) and Poor Things (2023)—along with two BAFTAs, two Golden Globes, and a Volpi Cup. Her other major credits include Easy A, Birdman, The Favourite, and the title role of Cruella. In 2017 she was the world's highest-paid actress and was named by Time among the 100 most influential people in the world.",
    alignment: "good",
    fallback: { birthYear: 1988, deathYear: null },
  },
  {
    slug: "emma-thompson",
    name: "Emma Thompson",
    wikipediaTitle: "Emma_Thompson",
    description:
      "Dame Emma Thompson is a British actress and screenwriter whose four-decade career has earned her two Academy Awards—for Best Actress in Howards End (1992) and Best Adapted Screenplay for Sense and Sensibility (1995)—making her one of a small number of people ever to win Oscars for both acting and writing. She has earned three BAFTAs, two Golden Globes, and a Primetime Emmy across her career, and was made a dame in 2018 for her contributions to drama. She has also been a longtime advocate for women's rights, climate action, and refugee causes.",
    alignment: "good",
    fallback: { birthYear: 1959, deathYear: null },
  },
  {
    slug: "emma-watson",
    name: "Emma Watson",
    wikipediaTitle: "Emma_Watson",
    description:
      "Emma Charlotte Duerre Watson is an English actress who rose to global fame at age 11 playing Hermione Granger in the eight Harry Potter films from 2001 to 2011, alongside her completion of a degree in English literature at Brown University. Subsequent film work includes Beauty and the Beast (2017) and Greta Gerwig's Little Women (2019). Since 2014 she has served as a UN Women Goodwill Ambassador, founding the HeForShe campaign for gender equality and using her platform to advance feminist causes.",
    alignment: "good",
    fallback: { birthYear: 1990, deathYear: null },
  },
  {
    slug: "eminem",
    name: "Eminem",
    wikipediaTitle: "Eminem",
    description:
      "Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter, and record producer widely regarded as one of the greatest and most influential rappers of all time. With more than 220 million records sold worldwide and 15 Grammy Awards, he is one of the best-selling musicians of any genre, and his 2002 film 8 Mile won the Academy Award for Best Original Song for \"Lose Yourself.\" He has also founded the Marshall Mathers Foundation supporting at-risk youth in his native Detroit.",
    alignment: "good",
    fallback: { birthYear: 1972, deathYear: null },
  },
  {
    slug: "francis-ford-coppola",
    name: "Francis Ford Coppola",
    wikipediaTitle: "Francis_Ford_Coppola",
    description:
      "Francis Ford Coppola is an American filmmaker who is widely regarded as one of the greatest directors in cinema history and a leading figure of the New Hollywood era of the late 1960s and 1970s. His best-known films—The Godfather (1972), The Conversation (1974), The Godfather Part II (1974), and Apocalypse Now (1979)—won him five Academy Awards including two Best Picture statues, alongside two Palmes d'Or at Cannes. He continued directing into his 80s with the 2024 self-financed epic Megalopolis.",
    alignment: "good",
    fallback: { birthYear: 1939, deathYear: null },
  },
  {
    slug: "george-harrison",
    name: "George Harrison",
    wikipediaTitle: "George_Harrison",
    description:
      "George Harrison was an English musician who served as lead guitarist of the Beatles and increasingly contributed his own compositions—including \"Something,\" \"Here Comes the Sun,\" and \"While My Guitar Gently Weeps\"—to the band's catalog. As a solo artist his 1970 triple album All Things Must Pass yielded the worldwide hit \"My Sweet Lord,\" and his 1971 Concert for Bangladesh established the modern model of the celebrity benefit concert. As a producer through HandMade Films he financed Monty Python's Life of Brian and Withnail and I.",
    alignment: "good",
    fallback: { birthYear: 1943, deathYear: 2001 },
  },
  {
    slug: "george-lucas",
    name: "George Lucas",
    wikipediaTitle: "George_Lucas",
    description:
      "George Walton Lucas Jr. is an American filmmaker who created the Star Wars and Indiana Jones franchises and founded the production companies Lucasfilm, LucasArts, Industrial Light & Magic, and THX. His 1977 Star Wars revolutionized the technology and economics of Hollywood blockbusters, and his subsequent Star Wars films generated worldwide cultural and commercial impact across nearly five decades. He sold Lucasfilm to the Walt Disney Company in 2012 for $4 billion and committed the proceeds to educational philanthropy.",
    alignment: "good",
    fallback: { birthYear: 1944, deathYear: null },
  },
  {
    slug: "grace-kelly",
    name: "Grace Kelly",
    wikipediaTitle: "Grace_Kelly",
    description:
      "Grace Patricia Kelly was an American actress and Princess of Monaco as the wife of Prince Rainier III from 1956 until her death in 1982. Her brief but acclaimed Hollywood career produced 11 films in five years, winning the Academy Award for Best Actress for The Country Girl (1954) and starring roles in Alfred Hitchcock's Dial M for Murder, Rear Window, and To Catch a Thief. She died at age 52 from injuries sustained in a car accident on a hairpin Mediterranean turn near Monaco.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1982 },
  },
  {
    slug: "greta-thunberg",
    name: "Greta Thunberg",
    wikipediaTitle: "Greta_Thunberg",
    description:
      "Greta Tintin Eleonora Ernman Thunberg is a Swedish climate activist who in August 2018, at age 15, began a solo school strike outside the Swedish parliament that grew within months into the worldwide Fridays for Future movement of millions of student strikers. She has addressed the United Nations Climate Action Summit, the World Economic Forum, the European Parliament, and the U.S. Congress, repeatedly confronting world leaders over their failure to act on the scientific consensus around climate change. She was named Time magazine's Person of the Year in 2019, the youngest person ever to receive the recognition.",
    alignment: "good",
    fallback: { birthYear: 2003, deathYear: null },
  },
  {
    slug: "guillermo-del-toro",
    name: "Guillermo del Toro",
    wikipediaTitle: "Guillermo_del_Toro",
    description:
      "Guillermo del Toro Gómez is a Mexican filmmaker and author whose work blends fairy tale, gothic horror, and political fable. His 2006 fantasy Pan's Labyrinth, set in Franco's Spain, won three Academy Awards, and his 2017 fantasy romance The Shape of Water won four including Best Picture and Best Director. His subsequent work includes the Oscar-winning stop-motion adaptation Pinocchio (2022) and the anthology series Cabinet of Curiosities.",
    alignment: "good",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "halle-berry",
    name: "Halle Berry",
    wikipediaTitle: "Halle_Berry",
    description:
      "Halle Maria Berry is an American actress who in 2002 became the first—and to date only—Black woman to win the Academy Award for Best Actress, for her role in Monster's Ball. Her other notable roles include the title role in Introducing Dorothy Dandridge (1999), Storm in the X-Men films, Bond girl Jinx in Die Another Day, and the action lead in the John Wick: Chapter 3 – Parabellum and Bruised features she also produced. She has used her platform to advocate for greater diversity in film and to support survivors of domestic violence.",
    alignment: "good",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "ingrid-bergman",
    name: "Ingrid Bergman",
    wikipediaTitle: "Ingrid_Bergman",
    description:
      "Ingrid Bergman was a Swedish actress whose five-decade career produced three Academy Awards, two Primetime Emmys, a Tony Award, and the rare distinction of the Triple Crown of Acting. She is most remembered for her starring role opposite Humphrey Bogart in Casablanca (1942) and her Hitchcock collaborations Spellbound (1945) and Notorious (1946). After her relationship with Italian director Roberto Rossellini scandalized 1950s American media she was effectively driven out of Hollywood, only to return seven years later to win her second Best Actress Oscar for Anastasia (1956).",
    alignment: "good",
    fallback: { birthYear: 1915, deathYear: 1982 },
  },
  {
    slug: "isaac-asimov",
    name: "Isaac Asimov",
    wikipediaTitle: "Isaac_Asimov",
    description:
      "Isaac Asimov was an American writer and biochemistry professor at Boston University regarded as one of the \"Big Three\" of 20th-century science fiction alongside Robert Heinlein and Arthur C. Clarke. Across more than 500 books he produced the Foundation and Robot series—including the formulation of the Three Laws of Robotics that have shaped subsequent fiction and AI ethics—as well as wide-ranging popular science writing on physics, chemistry, biology, and the Bible. Several women have since publicly accused him of decades of sexual harassment at science fiction conventions, an aspect of his legacy now widely acknowledged in the field.",
    alignment: "good",
    fallback: { birthYear: 1920, deathYear: 1992 },
  },
  {
    slug: "jack-nicholson",
    name: "Jack Nicholson",
    wikipediaTitle: "Jack_Nicholson",
    description:
      "John Joseph Nicholson is an American retired actor and filmmaker widely regarded as one of the greatest screen actors of the 20th century. He won three Academy Awards—two for Best Actor (One Flew Over the Cuckoo's Nest, As Good as It Gets) and one for Best Supporting Actor (Terms of Endearment)—across a five-decade career that included Easy Rider, Chinatown, The Shining, A Few Good Men, and The Departed. He received the AFI Life Achievement Award in 1994 and the Kennedy Center Honors in 2001.",
    alignment: "good",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "jacqueline-kennedy-onassis",
    name: "Jacqueline Kennedy Onassis",
    wikipediaTitle: "Jacqueline_Kennedy_Onassis",
    description:
      "Jacqueline Lee \"Jackie\" Kennedy Onassis was First Lady of the United States from 1961 to 1963 as the wife of President John F. Kennedy, and went on to a successful second career as a book editor in New York City. As First Lady she led the historic restoration of the White House and conducted the 1962 televised tour that drew 56 million American viewers, transforming the role into a platform for arts and culture. After her husband's assassination she remarried Greek shipping magnate Aristotle Onassis in 1968 and from 1975 worked as an editor at Viking Press and Doubleday for nearly two decades.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1994 },
  },
  {
    slug: "james-cameron",
    name: "James Cameron",
    wikipediaTitle: "James_Cameron",
    description:
      "James Francis Cameron is a Canadian filmmaker and deep-sea explorer whose films have grossed more than $10 billion worldwide, making him the second highest-grossing director of all time. His blockbusters Titanic (1997) and Avatar (2009) became, in succession, the highest-grossing films in history, and he has won three Academy Awards including Best Picture and Best Director for Titanic. As an explorer he has piloted submersibles to the wreck of the Titanic and, in 2012, completed the first solo dive to the bottom of the Mariana Trench.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "jane-fonda",
    name: "Jane Fonda",
    wikipediaTitle: "Jane_Fonda",
    description:
      "Jane Seymour Fonda is an American actress and political activist whose seven-decade career has earned her two Academy Awards (Klute, Coming Home), seven Golden Globes, a Primetime Emmy, the Cecil B. DeMille Award, and the AFI Life Achievement Award. Beyond film she has been a sustained public voice on Vietnam War opposition, women's rights, and climate change—launching the Fire Drill Fridays campaign in 2019 that has resulted in her repeated arrests in front of the U.S. Capitol. Her exercise videos of the 1980s also helped pioneer the home-fitness industry.",
    alignment: "good",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "jennifer-lawrence",
    name: "Jennifer Lawrence",
    wikipediaTitle: "Jennifer_Lawrence",
    description:
      "Jennifer Shrader Lawrence is an American actress and producer whose films have grossed more than $6 billion worldwide. She won the Academy Award for Best Actress for Silver Linings Playbook (2012), making her at age 22 the second-youngest winner ever in the category, and earned three additional acting nominations across her early career. She was the world's highest-paid actress in 2015 and 2016, and used a 2015 Lenny Letter essay to ignite mainstream debate over the gender pay gap in Hollywood.",
    alignment: "good",
    fallback: { birthYear: 1990, deathYear: null },
  },
  {
    slug: "jim-henson",
    name: "Jim Henson",
    wikipediaTitle: "Jim_Henson",
    description:
      "James Maury Henson was an American puppeteer, animator, and producer who created the Muppets, the cast of characters that anchored Sesame Street from 1969, The Muppet Show from 1976, and a long string of feature films. His production company, Jim Henson's Creature Shop, also pioneered the animatronic effects that powered The Dark Crystal (1982), Labyrinth (1986), and decades of subsequent screen creature work. He died at age 53 in May 1990 from complications of streptococcal pneumonia he had not sought treatment for in time.",
    alignment: "good",
    fallback: { birthYear: 1936, deathYear: 1990 },
  },
  {
    slug: "joan-rivers",
    name: "Joan Rivers",
    wikipediaTitle: "Joan_Rivers",
    description:
      "Joan Alexandra Molinsky, known professionally as Joan Rivers, was an American comedian and television host whose 50-year career made her a pioneer of women in stand-up comedy. After becoming a regular guest host on The Tonight Show with Johnny Carson in the 1980s, her 1986 jump to host her own Fox late-night show led Carson to never speak to her again, even as she rebuilt her career multiple times across daytime television, the Fashion Police red-carpet beat on E!, and a fierce final stretch of stand-up touring. She died in 2014 at age 81 from complications of an outpatient throat procedure.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: 2014 },
  },
  {
    slug: "jodie-foster",
    name: "Jodie Foster",
    wikipediaTitle: "Jodie_Foster",
    description:
      "Alicia Christian \"Jodie\" Foster is an American actress and filmmaker whose six-decade career began in childhood and has produced two Academy Awards for Best Actress, for The Accused (1988) and The Silence of the Lambs (1991), as well as the Cecil B. DeMille Award and the Honorary Palme d'Or. Her director credits include Little Man Tate, Home for the Holidays, and The Beaver, and she has continued to take selectively chosen roles into the 2020s, earning further Oscar nominations for Nyad (2023) and True Detective: Night Country (2024). She came out publicly in 2013 in a much-discussed Golden Globe acceptance speech.",
    alignment: "good",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "julia-roberts",
    name: "Julia Roberts",
    wikipediaTitle: "Julia_Roberts",
    description:
      "Julia Fiona Roberts is an American actress whose stardom across romantic comedies and dramas of the 1990s and 2000s—including Pretty Woman (1990), My Best Friend's Wedding, Notting Hill, Erin Brockovich, and Ocean's Eleven—made her one of the highest-paid and most popular actresses in the world for more than a decade. She won the Academy Award for Best Actress for Erin Brockovich (2000) and has been nominated three additional times. She has also been a longtime supporter of UNICEF and humanitarian causes including women's reproductive health.",
    alignment: "good",
    fallback: { birthYear: 1967, deathYear: null },
  },
  {
    slug: "karl-marx",
    name: "Karl Marx",
    wikipediaTitle: "Karl_Marx",
    description:
      "Karl Marx was a German philosopher, economist, and revolutionary socialist whose theory of historical materialism and analysis of class struggle under capitalism reshaped economics, politics, and sociology for the next two centuries. With his lifelong collaborator Friedrich Engels he co-authored The Communist Manifesto (1848), and his three-volume work Das Kapital (1867–1894) provided the foundational critique of political economy on which 20th-century socialist and communist movements built. He spent most of his adult life in exile in London, where he died in 1883.",
    alignment: "good",
    fallback: { birthYear: 1818, deathYear: 1883 },
  },
  {
    slug: "katharine-hepburn",
    name: "Katharine Hepburn",
    wikipediaTitle: "Katharine_Hepburn",
    description:
      "Katharine Houghton Hepburn was an American actress whose six-decade screen career produced four Academy Awards for Best Actress—Morning Glory, Guess Who's Coming to Dinner, The Lion in Winter, and On Golden Pond—a record that still stands. The American Film Institute named her the greatest female screen legend of classical Hollywood cinema in 1999. Famously independent in her personal life and professional choices, she famously refused ever to attend the Oscar ceremonies that named her a winner.",
    alignment: "good",
    fallback: { birthYear: 1907, deathYear: 2003 },
  },
  {
    slug: "leonard-cohen",
    name: "Leonard Cohen",
    wikipediaTitle: "Leonard_Cohen",
    description:
      "Leonard Norman Cohen was a Canadian singer-songwriter, poet, and novelist whose deeply literary songs—including \"Suzanne,\" \"Hallelujah,\" \"Famous Blue Raincoat,\" and \"Anthem\"—made him one of the defining voices of late-20th-century popular music. After publishing acclaimed poetry and novels, he turned to recording in 1967 with his debut Songs of Leonard Cohen and continued releasing albums into 2016, with the posthumous Thanks for the Dance appearing in 2019. He toured into his late 70s after his manager misappropriated his retirement savings, and was inducted into the Rock and Roll Hall of Fame in 2008.",
    alignment: "good",
    fallback: { birthYear: 1934, deathYear: 2016 },
  },
  {
    slug: "leonardo-dicaprio",
    name: "Leonardo DiCaprio",
    wikipediaTitle: "Leonardo_DiCaprio",
    description:
      "Leonardo Wilhelm DiCaprio is an American actor and film producer whose work in biographical and period films has earned him an Academy Award for Best Actor for The Revenant (2015) along with seven additional acting Oscar nominations spanning more than 30 years. His major credits include Titanic, The Aviator, The Departed, Inception, The Wolf of Wall Street, and Killers of the Flower Moon. Through his Leonardo DiCaprio Foundation he has been one of the largest celebrity funders of climate and biodiversity initiatives, and he served as a UN Messenger of Peace on climate change.",
    alignment: "good",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "loretta-lynn",
    name: "Loretta Lynn",
    wikipediaTitle: "Loretta_Lynn",
    description:
      "Loretta Lynn was an American country music singer-songwriter whose six-decade career and self-penned autobiography Coal Miner's Daughter—adapted into a 1980 Oscar-winning film—made her one of the defining voices of post-war country music. Her unflinching songs about working-class women's lives, including \"You Ain't Woman Enough,\" \"Don't Come Home A-Drinkin' (With Lovin' on Your Mind),\" and the contraception anthem \"The Pill,\" repeatedly drew bans from country radio. She was awarded the Presidential Medal of Freedom in 2013 and the Kennedy Center Honors in 2003.",
    alignment: "good",
    fallback: { birthYear: 1932, deathYear: 2022 },
  },
  {
    slug: "maria-callas",
    name: "Maria Callas",
    wikipediaTitle: "Maria_Callas",
    description:
      "Maria Callas was an American-born Greek soprano widely regarded as one of the most influential opera singers of the 20th century. Her bel canto technique and intensely dramatic interpretations sparked the modern revival of operas by Donizetti, Bellini, and Cherubini that had largely disappeared from the repertoire, and made her the dominant prima donna at La Scala in the 1950s. Her tumultuous personal life—particularly her relationship with shipping magnate Aristotle Onassis—and her early vocal decline have shaped operatic mythology in the decades since.",
    alignment: "good",
    fallback: { birthYear: 1923, deathYear: 1977 },
  },
  {
    slug: "martha-graham",
    name: "Martha Graham",
    wikipediaTitle: "Martha_Graham",
    description:
      "Martha Graham was an American modern dancer, teacher, and choreographer whose 70-year career and signature \"Graham technique\" of contraction and release fundamentally reshaped American dance and influenced generations of choreographers worldwide. She founded the Martha Graham Dance Company in 1926—the oldest dance company in the United States—and the Martha Graham School, where students included Merce Cunningham, Paul Taylor, and Twyla Tharp. She was the first dancer to perform at the White House and to travel as a U.S. cultural ambassador, and was awarded the Presidential Medal of Freedom in 1976.",
    alignment: "good",
    fallback: { birthYear: 1894, deathYear: 1991 },
  },
  {
    slug: "martha-stewart",
    name: "Martha Stewart",
    wikipediaTitle: "Martha_Stewart",
    description:
      "Martha Helen Stewart is an American businesswoman, writer, and television personality who built Martha Stewart Living Omnimedia into a multi-platform lifestyle empire spanning publishing, television, merchandising, and e-commerce. After convictions in 2004 for conspiracy and obstruction of justice arising from an insider-trading investigation she served five months in federal prison and emerged to rebuild her business larger than before. In 2023 she became the oldest cover model in the history of Sports Illustrated Swimsuit Issue at age 81.",
    alignment: "good",
    fallback: { birthYear: 1941, deathYear: null },
  },
  {
    slug: "matt-damon",
    name: "Matt Damon",
    wikipediaTitle: "Matt_Damon",
    description:
      "Matthew Paige Damon is an American actor, producer, and screenwriter who at age 27 won the Academy Award for Best Original Screenplay alongside Ben Affleck for Good Will Hunting (1997), in which he also starred. His subsequent film career has included the Bourne action franchise, the Ocean's heist series, The Departed, The Martian, and Christopher Nolan's Oppenheimer, and his films have grossed more than $9 billion worldwide. Through Pearl Street Films he has produced socially conscious projects, and he co-founded the global water-access nonprofit Water.org in 2009.",
    alignment: "good",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "matthew-mcconaughey",
    name: "Matthew McConaughey",
    wikipediaTitle: "Matthew_McConaughey",
    description:
      "Matthew David McConaughey is an American actor whose 2014 Best Actor Academy Award for his role as AIDS patient Ron Woodroof in Dallas Buyers Club anchored a much-discussed mid-career creative renaissance dubbed the \"McConaissance.\" Subsequent work in Interstellar (2014), True Detective (2014), and Mud (2012) cemented his place as a major dramatic actor after years of romantic-comedy leading roles. His 2020 memoir Greenlights became a No. 1 New York Times bestseller, and he has remained a notable independent civic voice in his home state of Texas.",
    alignment: "good",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "meryl-streep",
    name: "Meryl Streep",
    wikipediaTitle: "Meryl_Streep",
    description:
      "Mary Louise \"Meryl\" Streep is an American actress widely regarded as one of the finest of her generation, with a record 21 Academy Award nominations and three wins—Kramer vs. Kramer (1979), Sophie's Choice (1982), and The Iron Lady (2011). She has earned 32 Golden Globe nominations with eight wins, more than any other performer, alongside the Cecil B. DeMille Award, the AFI Life Achievement Award, and the Presidential Medal of Freedom. Her command of dialect, characterization, and dramatic range has set the modern standard for screen acting across more than four decades.",
    alignment: "good",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "natalie-portman",
    name: "Natalie Portman",
    wikipediaTitle: "Natalie_Portman",
    description:
      "Natalie Portman, born Natalie Hershlag, is an Israeli-American actress, producer, and director who won the Academy Award for Best Actress for her role in Black Swan (2010). Beginning her screen career as a child in Léon: The Professional (1994), she went on to appear in the Star Wars prequels, V for Vendetta, Closer, Jackie, and the Marvel Thor films. She graduated from Harvard with a degree in psychology in 2003 and has since spoken out publicly on issues including Israeli politics, women's rights, and animal welfare.",
    alignment: "good",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "nikola-jokic",
    name: "Nikola Jokić",
    wikipediaTitle: "Nikola_Jokić",
    description:
      "Nikola Jokić is a Serbian professional basketball player and center for the Denver Nuggets of the National Basketball Association, widely regarded as one of the greatest players of his era. A three-time NBA Most Valuable Player (2021, 2022, 2024), he led the Nuggets to their first NBA championship in 2023 while earning Finals MVP honors. Selected 41st overall in the 2014 NBA Draft, he is often described as the greatest draft steal in league history.",
    alignment: "good",
    fallback: { birthYear: 1995, deathYear: null },
  },
  {
    slug: "orson-welles",
    name: "Orson Welles",
    wikipediaTitle: "Orson_Welles",
    description:
      "George Orson Welles was an American actor, writer, and director regarded as one of the most influential filmmakers in cinema history. His 1938 War of the Worlds radio broadcast, mistaken by some listeners for a real Martian invasion, made him a national figure at age 23, and his 1941 directorial debut Citizen Kane is consistently ranked among the greatest films ever made. Subsequent work including The Magnificent Ambersons, Touch of Evil, Chimes at Midnight, and the unfinished The Other Side of the Wind extended his influence, even as Hollywood largely refused to fund his projects in his later years.",
    alignment: "good",
    fallback: { birthYear: 1915, deathYear: 1985 },
  },
  {
    slug: "pancho-villa",
    name: "Pancho Villa",
    wikipediaTitle: "Pancho_Villa",
    description:
      "Francisco \"Pancho\" Villa, born José Doroteo Arango Arámbula, was a Mexican revolutionary general and one of the most prominent figures of the Mexican Revolution that overthrew the dictator Porfirio Díaz beginning in 1911. As commander of the División del Norte he led the major military campaigns against Victoriano Huerta's regime in northern Mexico, and his 1916 raid on Columbus, New Mexico provoked the U.S. \"Punitive Expedition\" of General John J. Pershing into Mexico. He retired to a hacienda in Chihuahua in 1920 and was assassinated there in July 1923.",
    alignment: "good",
    fallback: { birthYear: 1878, deathYear: 1923 },
  },
  {
    slug: "paul-newman",
    name: "Paul Newman",
    wikipediaTitle: "Paul_Newman",
    description:
      "Paul Leonard Newman was an American actor, filmmaker, and philanthropist whose 50-year career produced an Academy Award for Best Actor for The Color of Money (1986) along with nine additional acting nominations. His major roles include Hud, Cool Hand Luke, Butch Cassidy and the Sundance Kid, The Sting, and the autobiographical Nobody's Fool. In 1982 he founded Newman's Own, the food company whose entire after-tax profits—more than $600 million to date—have been donated to charity, including the SeriousFun Children's Network of summer camps for children with serious illnesses.",
    alignment: "good",
    fallback: { birthYear: 1925, deathYear: 2008 },
  },
  {
    slug: "peter-sellers",
    name: "Peter Sellers",
    wikipediaTitle: "Peter_Sellers",
    description:
      "Peter Sellers was an English actor and comedian who first rose to prominence on the BBC Radio comedy The Goon Show before becoming an international film star with iconic comic roles, most notably Inspector Clouseau in The Pink Panther series. His 1964 dual-role tour de force as President Muffley, Group Captain Mandrake, and Dr. Strangelove in Stanley Kubrick's Dr. Strangelove earned him an Academy Award nomination, and his final lead performance in Being There (1979) earned another. He died of a heart attack at age 54 in July 1980.",
    alignment: "good",
    fallback: { birthYear: 1925, deathYear: 1980 },
  },
  {
    slug: "prince",
    name: "Prince",
    wikipediaTitle: "Prince_(musician)",
    description:
      "Prince Rogers Nelson, known mononymously as Prince, was an American singer, songwriter, and multi-instrumentalist regarded as one of the greatest musicians of his generation and the principal architect of the Minneapolis sound. Across more than 40 albums he produced enduring works including 1999, Purple Rain (1984), Sign o' the Times (1987), and Love Symbol (1992), with worldwide sales exceeding 150 million records. He won seven Grammy Awards, an Academy Award for Best Original Song Score for Purple Rain, and a Golden Globe, and died in April 2016 at age 57 from an accidental fentanyl overdose.",
    alignment: "good",
    fallback: { birthYear: 1958, deathYear: 2016 },
  },
  {
    slug: "queen-latifah",
    name: "Queen Latifah",
    wikipediaTitle: "Queen_Latifah",
    description:
      "Dana Elaine Owens, known professionally as Queen Latifah, is an American rapper, singer, and actress who has been one of hip-hop's most enduring crossover figures. Her 1989 debut album All Hail the Queen and 1993's Black Reign helped establish women in hip-hop, and her acting career has earned an Academy Award nomination for Chicago (2002), a Golden Globe and Primetime Emmy for Bessie (2015), and three SAG Awards. In 2006 she became the first hip-hop artist honored with a star on the Hollywood Walk of Fame.",
    alignment: "good",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "richard-pryor",
    name: "Richard Pryor",
    wikipediaTitle: "Richard_Pryor",
    description:
      "Richard Franklin Lennox Thomas Pryor was an American stand-up comedian and actor regarded as one of the greatest comedians of all time and a foundational figure of the modern American comedy form. His landmark concert films That Nigger's Crazy (1974), …Is It Something I Said? (1975), Live in Concert (1979), and Live on the Sunset Strip (1982) brought Black American life and language to mainstream comedy audiences and reshaped what stand-up could do. He won five Grammy Awards, a Primetime Emmy, and the inaugural Mark Twain Prize for American Humor in 1998.",
    alignment: "good",
    fallback: { birthYear: 1940, deathYear: 2005 },
  },
  {
    slug: "rumi",
    name: "Rumi",
    wikipediaTitle: "Rumi",
    description:
      "Jalāl al-Dīn Muḥammad Rūmī, commonly known as Rumi, was a 13th-century Sufi mystic, theologian, and poet whose six-volume Persian-language Masnavi-yi Ma'navi is widely regarded as the greatest mystical poem in Islamic literature. Born in present-day Tajikistan and settling in Konya in modern-day Turkey, he founded the Mevlevi Order—the Whirling Dervishes—after his transformative encounter with the wandering mystic Shams of Tabriz. His writings have been translated into dozens of languages and have made him one of the most-read poets in the contemporary English-speaking world.",
    alignment: "good",
    fallback: { birthYear: 1207, deathYear: 1273 },
  },
  {
    slug: "sandra-day-o-connor",
    name: "Sandra Day O'Connor",
    wikipediaTitle: "Sandra_Day_O'Connor",
    description:
      "Sandra Day O'Connor was an American attorney and jurist who served as an Associate Justice of the Supreme Court of the United States from 1981 to 2006, becoming the first woman to sit on the Court. A pragmatic conservative often considered the Court's swing vote, she authored or joined pivotal opinions on abortion (Planned Parenthood v. Casey, 1992), affirmative action (Grutter v. Bollinger, 2003), and the resolution of the 2000 presidential election (Bush v. Gore). She received the Presidential Medal of Freedom in 2009 from President Obama.",
    alignment: "good",
    fallback: { birthYear: 1930, deathYear: 2023 },
  },
  {
    slug: "sandra-oh",
    name: "Sandra Oh",
    wikipediaTitle: "Sandra_Oh",
    description:
      "Sandra Miju Oh is a Canadian-American actress whose lead roles in Grey's Anatomy as Dr. Cristina Yang (2005–2014) and Killing Eve as Eve Polastri (2018–2022) earned her two Golden Globe Awards, four Screen Actors Guild Awards, and a Primetime Emmy from 14 nominations. With her 2018 Emmy nomination for Killing Eve she became the first actress of Asian descent ever to be nominated for the Lead Actress in a Drama Series Emmy. She has also been a vocal advocate against anti-Asian racism in North America.",
    alignment: "good",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "seamus-heaney",
    name: "Seamus Heaney",
    wikipediaTitle: "Seamus_Heaney",
    description:
      "Seamus Justin Heaney was an Irish poet, playwright, and translator who received the 1995 Nobel Prize in Literature \"for works of lyrical beauty and ethical depth, which exalt everyday miracles and the living past.\" His 14 poetry collections beginning with Death of a Naturalist (1966) drew on his rural County Derry childhood and the political violence of the Northern Ireland Troubles, while his 1999 verse translation of Beowulf became one of the best-selling poetic translations in modern English. American poet Robert Lowell described him as \"the most important Irish poet since Yeats.\"",
    alignment: "good",
    fallback: { birthYear: 1939, deathYear: 2013 },
  },
  {
    slug: "sergio-leone",
    name: "Sergio Leone",
    wikipediaTitle: "Sergio_Leone",
    description:
      "Sergio Leone was an Italian filmmaker who pioneered the spaghetti Western genre and is widely regarded as one of the greatest directors in the history of cinema. His Dollars Trilogy starring Clint Eastwood—A Fistful of Dollars (1964), For a Few Dollars More (1965), and The Good, the Bad and the Ugly (1966)—and the subsequent Once Upon a Time in the West (1968) and Once Upon a Time in America (1984) established him as a singular stylist of long takes, extreme close-ups, and panoramic compositions. His decades-long collaboration with composer Ennio Morricone produced some of the most recognizable film music ever written.",
    alignment: "good",
    fallback: { birthYear: 1929, deathYear: 1989 },
  },
  {
    slug: "shaquille-o-neal",
    name: "Shaquille O'Neal",
    wikipediaTitle: "Shaquille_O'Neal",
    description:
      "Shaquille Rashaun O'Neal, commonly known as Shaq, is an American former professional basketball center who played 19 seasons in the NBA across six teams, winning four NBA championships—three consecutive titles with the Los Angeles Lakers from 2000 to 2002 and a fourth with the Miami Heat in 2006. A 15-time All-Star, three-time Finals MVP, and the league's Most Valuable Player in 2000, he is widely regarded as one of the greatest centers in basketball history. After retiring he earned a doctorate in education and has remained a fixture of NBA broadcasting on TNT's Inside the NBA.",
    alignment: "good",
    fallback: { birthYear: 1972, deathYear: null },
  },
  {
    slug: "simone-de-beauvoir",
    name: "Simone de Beauvoir",
    wikipediaTitle: "Simone_de_Beauvoir",
    description:
      "Simone Lucie Ernestine Marie Bertrand de Beauvoir was a French existentialist philosopher, novelist, and feminist activist whose 1949 book The Second Sex is one of the foundational texts of modern feminism. Across novels including The Mandarins—which won the 1954 Prix Goncourt—and memoirs of her partnership with Jean-Paul Sartre, she shaped 20th-century existentialist literature alongside her philosophical work. Her writings have been translated into dozens of languages and continue to anchor university curricula in feminist theory and existentialism.",
    alignment: "good",
    fallback: { birthYear: 1908, deathYear: 1986 },
  },
  {
    slug: "snoop-dogg",
    name: "Snoop Dogg",
    wikipediaTitle: "Snoop_Dogg",
    description:
      "Calvin Cordozar Broadus Jr., known professionally as Snoop Dogg, is an American rapper, record producer, and actor who is one of the central architects of West Coast hip-hop. Following his 1992 introduction on Dr. Dre's The Chronic, his 1993 debut album Doggystyle reached No. 1 on the Billboard 200 and helped define G-funk; he has since released more than two dozen studio albums spanning gangsta rap, reggae (as Snoop Lion), funk, and gospel. He has built a multimedia empire including youth football leagues, cookbooks with Martha Stewart, and stints as an Olympic broadcasting personality and Death Row Records owner.",
    alignment: "good",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "sonia-sotomayor",
    name: "Sonia Sotomayor",
    wikipediaTitle: "Sonia_Sotomayor",
    description:
      "Sonia Maria Sotomayor is an American attorney and jurist who has served as an Associate Justice of the Supreme Court of the United States since 2009, the first Hispanic and first Latina justice in the Court's history. Nominated by President Barack Obama, she previously served as a federal district judge for the Southern District of New York and on the Second Circuit Court of Appeals. Her dissents on cases involving affirmative action, voting rights, religious liberty, and reproductive rights have become some of the most widely cited liberal voices on the modern Court.",
    alignment: "good",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "spike-lee",
    name: "Spike Lee",
    wikipediaTitle: "Spike_Lee",
    description:
      "Shelton Jackson \"Spike\" Lee is an American filmmaker and actor whose work has consistently engaged race, urban life, media, and political power, beginning with She's Gotta Have It (1986) and continuing through Do the Right Thing (1989), Malcolm X (1992), 25th Hour, Inside Man, and BlacKkKlansman (2018). His films have received numerous Academy Award nominations, with BlacKkKlansman winning Best Adapted Screenplay; he received an Academy Honorary Award in 2015 for his contributions to cinema. He has also been a longtime professor of film at NYU's Tisch School of the Arts.",
    alignment: "good",
    fallback: { birthYear: 1957, deathYear: null },
  },
  {
    slug: "steven-spielberg",
    name: "Steven Spielberg",
    wikipediaTitle: "Steven_Spielberg",
    description:
      "Steven Allan Spielberg is an American filmmaker who is the highest-grossing film director of all time and a defining figure of the modern blockbuster. His credits include Jaws (1975), the Indiana Jones franchise, E.T. the Extra-Terrestrial (1982), Jurassic Park (1993), Saving Private Ryan (1998), Munich (2005), and Lincoln (2012), and he won Academy Awards for Best Director for Schindler's List (1993) and Saving Private Ryan. He co-founded DreamWorks SKG in 1994 and later launched the USC Shoah Foundation, which has recorded and preserved more than 50,000 video testimonies from Holocaust survivors and witnesses.",
    alignment: "good",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "sting",
    name: "Sting",
    wikipediaTitle: "Sting_(musician)",
    description:
      "Gordon Matthew Thomas Sumner, known by the stage name Sting, is an English musician and actor who served as the principal songwriter, lead vocalist, and bassist for the rock band the Police from 1977 until their break in 1986, and has since pursued a solo career across rock, jazz, classical, and worldbeat genres. He has won 17 Grammy Awards, three Brit Awards, a Golden Globe, and four Oscar nominations across his combined work, with worldwide record sales exceeding 100 million. He has also been a longstanding Amnesty International ambassador and helped found the Rainforest Foundation.",
    alignment: "good",
    fallback: { birthYear: 1951, deathYear: null },
  },
  {
    slug: "terry-fox",
    name: "Terry Fox",
    wikipediaTitle: "Terry_Fox",
    description:
      "Terrance Stanley Fox was a Canadian athlete and cancer-research activist who in 1980, after losing his right leg to osteosarcoma, set out on a cross-Canada \"Marathon of Hope\" run, completing 5,373 kilometres in 143 consecutive days before being forced to stop when the cancer spread to his lungs. He died nine months later at age 22, but the annual Terry Fox Run he inspired has since raised more than C$850 million for cancer research and is considered the world's largest one-day cancer-research fundraiser. He was made a Companion of the Order of Canada in 1980, the youngest recipient of the country's highest civilian honor at the time.",
    alignment: "good",
    fallback: { birthYear: 1958, deathYear: 1981 },
  },
  {
    slug: "tom-petty",
    name: "Tom Petty",
    wikipediaTitle: "Tom_Petty",
    description:
      "Thomas Earl Petty was an American singer, songwriter, and guitarist who fronted the rock bands Tom Petty and the Heartbreakers and Mudcrutch and was a member of the late-1980s supergroup the Traveling Wilburys with Bob Dylan, George Harrison, Roy Orbison, and Jeff Lynne. He sold more than 80 million records worldwide and was inducted into the Rock and Roll Hall of Fame with the Heartbreakers in 2002. He died in 2017 at age 66 from an accidental opioid overdose, days after completing the Heartbreakers' 40th-anniversary tour.",
    alignment: "good",
    fallback: { birthYear: 1950, deathYear: 2017 },
  },
  {
    slug: "tom-waits",
    name: "Tom Waits",
    wikipediaTitle: "Tom_Waits",
    description:
      "Thomas Alan Waits is an American singer, songwriter, and actor whose distinctive gravelly voice and lyrical attention to society's underbelly have made him one of the most idiosyncratic figures in late-20th-century American popular music. Across albums from Closing Time (1973) and Small Change (1976) to the experimental Swordfishtrombones, Rain Dogs, and Bone Machine, he reinvented himself by drawing on rock, jazz, blues, Weill-influenced cabaret, and found-instrument percussion. He has also pursued a parallel acting career in films by Jim Jarmusch, Francis Ford Coppola, and the Coen brothers.",
    alignment: "good",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "volodymyr-zelensky",
    name: "Volodymyr Zelensky",
    wikipediaTitle: "Volodymyr_Zelenskyy",
    description:
      "Volodymyr Oleksandrovych Zelensky is a Ukrainian politician, lawyer, and former entertainer who has served as the sixth president of Ukraine since May 2019. After winning the presidency by a landslide as a political outsider, he was thrust into a defining global role following Russia's full-scale invasion of Ukraine in February 2022, refusing to evacuate Kyiv and addressing more than two dozen national parliaments and the United Nations to coordinate international support for Ukraine's defense. Time named him 2022 Person of the Year and Politico's most powerful person in Europe.",
    alignment: "good",
    fallback: { birthYear: 1978, deathYear: null },
  },
  {
    slug: "willem-de-kooning",
    name: "Willem de Kooning",
    wikipediaTitle: "Willem_de_Kooning",
    description:
      "Willem de Kooning was a Dutch-American Abstract Expressionist painter and a central figure of the New York School in the post–World War II era. His Woman series, beginning with Woman I (1950–1952), and his subsequent gestural landscapes redefined the possibilities of figurative painting within the Abstract Expressionist movement. He continued producing major work into his 80s and was awarded the Presidential Medal of Freedom by Ronald Reagan in 1986.",
    alignment: "good",
    fallback: { birthYear: 1904, deathYear: 1997 },
  },
  {
    slug: "william-golding",
    name: "William Golding",
    wikipediaTitle: "William_Golding",
    description:
      "Sir William Gerald Golding was a British novelist, playwright, and poet whose 1954 debut novel Lord of the Flies—a parable of civilization and savagery told through the experience of British schoolboys stranded on an uninhabited island—has sold tens of millions of copies and become a fixture of secondary-school curricula worldwide. He won the 1980 Booker Prize for Rites of Passage, the first volume of his sea trilogy To the Ends of the Earth, and was awarded the 1983 Nobel Prize in Literature for the body of his work.",
    alignment: "good",
    fallback: { birthYear: 1911, deathYear: 1993 },
  },
  {
    slug: "wright-brothers",
    name: "Wright Brothers",
    wikipediaTitle: "Wright_brothers",
    description:
      "Wilbur and Orville Wright were American aviation pioneers who together invented, built, and flew the world's first successful powered, heavier-than-air aircraft. Working from their Dayton, Ohio bicycle shop, they devised the three-axis flight control system that made fixed-wing flight controllable, and on 17 December 1903 they conducted the first sustained, powered flight at Kill Devil Hills near Kitty Hawk, North Carolina. Their patents and subsequent demonstration flights in Europe in 1908 inaugurated the worldwide development of practical aviation.",
    alignment: "good",
    fallback: { birthYear: 1871, deathYear: 1948 },
  },
  {
    slug: "yoko-ono",
    name: "Yoko Ono",
    wikipediaTitle: "Yoko_Ono",
    description:
      "Yoko Ono is a Japanese multimedia artist, musician, and peace activist whose work emerged from the Fluxus and conceptual-art movements of 1960s New York and Tokyo. Her pioneering instruction pieces and participatory works—including Cut Piece (1964) and Grapefruit (1964)—predated her marriage to John Lennon in 1969, with whom she collaborated on several albums and the global \"Bed-Ins for Peace.\" She has continued to record and exhibit into her 90s, and was inducted into the Rock and Roll Hall of Fame as part of the Plastic Ono Band in 2014.",
    alignment: "good",
    fallback: { birthYear: 1933, deathYear: null },
  },
  {
    slug: "yo-yo-ma",
    name: "Yo-Yo Ma",
    wikipediaTitle: "Yo-Yo_Ma",
    description:
      "Yo-Yo Ma is an American cellist regarded as one of the most accomplished and widely admired classical musicians of his generation. He has recorded more than 90 albums and won 19 Grammy Awards across genres ranging from the Bach Cello Suites to bluegrass and Brazilian music, and has performed at presidential inaugurations, the Nobel Prize ceremony, and the funerals of John F. Kennedy and Sergei Rachmaninoff. He founded the Silkroad Ensemble in 2000 to explore cross-cultural musical traditions and has received the National Medal of Arts and the Presidential Medal of Freedom.",
    alignment: "good",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "zaha-hadid",
    name: "Zaha Hadid",
    wikipediaTitle: "Zaha_Hadid",
    description:
      "Dame Zaha Mohammad Hadid was an Iraqi-British architect whose curvilinear, parametric structures redefined the visual vocabulary of late-20th- and early-21st-century architecture. Her major commissions include the MAXXI museum in Rome, the London Aquatics Centre for the 2012 Olympic Games, the Heydar Aliyev Center in Baku, and the Guangzhou Opera House. In 2004 she became the first woman ever to be awarded the Pritzker Architecture Prize, and in 2016 she became the first woman to receive the Royal Gold Medal solo.",
    alignment: "good",
    fallback: { birthYear: 1950, deathYear: 2016 },
  },
  {
    slug: "strom-thurmond",
    name: "Strom Thurmond",
    wikipediaTitle: "Strom_Thurmond",
    description:
      "James Strom Thurmond Sr. was an American politician who represented South Carolina in the U.S. Senate for nearly 48 years, from 1954 to 2003, and as the 1948 Dixiecrat presidential nominee made the defense of racial segregation the centerpiece of his political career. In 1957 he conducted the longest continuous filibuster ever performed by a single senator—24 hours and 18 minutes—against the Civil Rights Act, and he switched from the Democratic to the Republican Party in 1964 over the Civil Rights Act of that year. After his death his family confirmed that, as a 22-year-old, he had fathered a daughter with Carrie Butler, a 16-year-old Black domestic worker employed by his family.",
    alignment: "evil",
    fallback: { birthYear: 1902, deathYear: 2003 },
  },
  {
    slug: "jesse-helms",
    name: "Jesse Helms",
    wikipediaTitle: "Jesse_Helms",
    description:
      "Jesse Alexander Helms Jr. was an American politician who represented North Carolina in the U.S. Senate from 1973 to 2003 and chaired the Senate Foreign Relations Committee from 1995 to 2001. He filibustered the federal Martin Luther King Jr. holiday in 1983, was the loudest Senate opponent of federal AIDS funding during the height of the epidemic, blocked the U.S. ratification of the international convention on the rights of the child, and built his political base on racially charged campaigning—including his 1990 \"Hands\" ad against Black opponent Harvey Gantt. He once referred to the University of North Carolina at Chapel Hill as the \"University of Negroes and Communists.\"",
    alignment: "evil",
    fallback: { birthYear: 1921, deathYear: 2008 },
  },
  {
    slug: "lindsey-graham",
    name: "Lindsey Graham",
    wikipediaTitle: "Lindsey_Graham",
    description:
      "Lindsey Olin Graham is an American senator from South Carolina who has served since 2003 after eight years in the U.S. House of Representatives. Once a vocal critic who in 2016 called Donald Trump a \"race-baiting, xenophobic, religious bigot\" and warned the GOP would deserve to lose if it nominated him, he reversed himself completely after the election to become one of Trump's most consistent Senate defenders, including throughout the two impeachments. He has also been a leading Senate hawk on military intervention abroad, agitating for U.S. action in Iran, Syria, Libya, and Russia across multiple administrations.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "marco-rubio",
    name: "Marco Rubio",
    wikipediaTitle: "Marco_Rubio",
    description:
      "Marco Antonio Rubio is an American politician serving since 2025 as the 72nd United States Secretary of State after representing Florida in the U.S. Senate from 2011 to 2025. After spending the 2016 Republican primary campaigning against Donald Trump—who repeatedly mocked him as \"Little Marco\"—he reversed himself to become one of the administration's most reliable supporters, ultimately joining its second-term cabinet. Earlier in his career he served as Speaker of the Florida House of Representatives, building a record of opposing immigration reform he had previously helped negotiate.",
    alignment: "evil",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "josh-hawley",
    name: "Josh Hawley",
    wikipediaTitle: "Josh_Hawley",
    description:
      "Joshua David Hawley is an American politician and attorney who has served as a U.S. senator from Missouri since 2019. On January 6, 2021, hours before insurrectionists stormed the U.S. Capitol, he raised a clenched fist in solidarity to crowds gathered outside the building, then later that day and into the following night joined Senate Republican objections to certifying Joe Biden's electoral victory. Photographs and footage from the day showed him fleeing through the Capitol after the breach, becoming an enduring image of the day. He has continued to push election-fraud conspiracies and to be a leading Senate voice against media platforms and pandemic public-health measures.",
    alignment: "evil",
    fallback: { birthYear: 1979, deathYear: null },
  },
  {
    slug: "lauren-boebert",
    name: "Lauren Boebert",
    wikipediaTitle: "Lauren_Boebert",
    description:
      "Lauren Opal Boebert is an American politician and gun-rights activist who has represented Colorado's 4th congressional district since 2025, after representing the 3rd district from 2021 to 2025. She has been one of Congress's most prominent QAnon-aligned and conspiracy-theory-promoting members, has heckled President Joe Biden during a State of the Union address, and was ejected from a 2023 performance of the musical Beetlejuice in Denver after vaping, recording video, and engaging in lewd conduct with her date during the show. Before her congressional career she owned Shooters Grill in Rifle, Colorado, where staff openly carried firearms.",
    alignment: "evil",
    fallback: { birthYear: 1986, deathYear: null },
  },
  {
    slug: "marjorie-taylor-greene",
    name: "Marjorie Taylor Greene",
    wikipediaTitle: "Marjorie_Taylor_Greene",
    description:
      "Marjorie Taylor Greene is an American politician and conspiracy theorist who served as the U.S. representative for Georgia's 14th congressional district from 2021 until her 2026 resignation. Before being elected she publicly endorsed QAnon conspiracy theories, suggested mass shootings at Sandy Hook Elementary and Marjory Stoneman Douglas High School were staged, and harassed Parkland survivor David Hogg in social-media videos. She was stripped of her House committee assignments in 2021 over her past advocacy of political violence and conspiracy theories, and later promoted election-fraud claims and called for the establishment of an Anglo-Saxon \"America First\" caucus.",
    alignment: "evil",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "jim-jordan",
    name: "Jim Jordan",
    wikipediaTitle: "Jim_Jordan",
    description:
      "James Daniel Jordan is an American politician who has served in the U.S. House of Representatives from Ohio since 2007 and is a co-founder of the right-wing populist Freedom Caucus. As an assistant wrestling coach at Ohio State University from 1986 to 1994, he was named in multiple sworn testimonies and lawsuits as having been told about sexual abuse of student wrestlers by team physician Richard Strauss—accusations he denies. He played a leading role in the planning to overturn the 2020 presidential election and refused to comply with a subpoena from the House January 6 Select Committee.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "kevin-mccarthy",
    name: "Kevin McCarthy",
    wikipediaTitle: "Kevin_McCarthy",
    description:
      "Kevin Owen McCarthy is an American politician who served briefly as the 55th Speaker of the U.S. House of Representatives from January to October 2023, before becoming the first Speaker in U.S. history removed from the office by a vote of his own chamber. To win the gavel he had endured fifteen rounds of voting and made sweeping concessions to the Freedom Caucus, including granting Tucker Carlson exclusive access to security footage of the January 6 attack on the Capitol. Two months earlier he had blamed Trump on the House floor for the violence; days later he had flown to Mar-a-Lago to publicly reconcile.",
    alignment: "evil",
    fallback: { birthYear: 1965, deathYear: null },
  },
  {
    slug: "paul-ryan",
    name: "Paul Ryan",
    wikipediaTitle: "Paul_Ryan",
    description:
      "Paul Davis Ryan is an American politician who served as the 54th Speaker of the U.S. House of Representatives from 2015 to 2019 and was the Republican Party's 2012 vice presidential nominee. As chairman of the House Budget Committee and then the Ways and Means Committee he authored multiple budget plans that proposed converting Medicare into a voucher program, partially privatizing Social Security, and slashing federal spending on Medicaid and food stamps to fund tax cuts weighted toward the wealthy. As Speaker he shepherded passage of the 2017 Tax Cuts and Jobs Act, which the Congressional Budget Office estimated would add $1.9 trillion to the federal deficit over a decade.",
    alignment: "evil",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "sarah-palin",
    name: "Sarah Palin",
    wikipediaTitle: "Sarah_Palin",
    description:
      "Sarah Louise Palin is an American politician who served as the ninth governor of Alaska from 2006 until her 2009 resignation, and was the Republican Party's 2008 vice presidential nominee on the ticket with John McCain. Her national candidacy is widely credited as a key precursor of the populist style and conspiracy-theory politics that came to dominate the Republican Party in the following decade. In 2011 her political action committee circulated a map placing crosshairs over Democratic House districts, including that of Representative Gabby Giffords, who was shot at a constituent meeting weeks later in an attack that killed six people.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "mike-pence",
    name: "Mike Pence",
    wikipediaTitle: "Mike_Pence",
    description:
      "Michael Richard Pence is an American politician and lawyer who served as the 48th vice president of the United States from 2017 to 2021 under President Donald Trump and previously as governor of Indiana from 2013 to 2017. As governor he signed one of the country's most restrictive abortion laws and a religious-liberty bill widely criticized as licensing anti-LGBTQ discrimination, and his administration's slow response to a needle-exchange request in Scott County contributed to a major HIV outbreak. As vice president he was the public face of Trump's most disastrous policies, including the family-separation immigration regime, before refusing the president's demand to refuse certification of the 2020 election results on January 6, 2021.",
    alignment: "evil",
    fallback: { birthYear: 1959, deathYear: null },
  },
  {
    slug: "rick-santorum",
    name: "Rick Santorum",
    wikipediaTitle: "Rick_Santorum",
    description:
      "Richard John Santorum is an American politician and former CNN political commentator who represented Pennsylvania in the U.S. Senate from 1995 to 2007 and finished second to Mitt Romney in the 2012 Republican presidential primaries. As a senator he became one of the country's most prominent anti-LGBTQ political voices, comparing same-sex relationships to bestiality in a 2003 interview that led to a sustained public-shaming campaign that linked his surname to a sexual byproduct. He lost his 2006 reelection bid to Bob Casey Jr. by 18 percentage points, the largest margin of defeat for an incumbent senator in Pennsylvania history.",
    alignment: "evil",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "scott-walker",
    name: "Scott Walker",
    wikipediaTitle: "Scott_Walker_(politician)",
    description:
      "Scott Kevin Walker is an American politician who served as the 45th governor of Wisconsin from 2011 to 2019. His first major act as governor, the 2011 Act 10 budget repair bill, eliminated most collective-bargaining rights for state and local public employees and triggered weeks of mass protests at the Wisconsin State Capitol. He survived a 2012 recall election to become the first U.S. governor to do so, then signed laws cutting public-school funding, slashing the state's social safety net, and imposing voter ID requirements widely criticized as suppressive. His 2016 presidential campaign collapsed within months of its launch.",
    alignment: "evil",
    fallback: { birthYear: 1967, deathYear: null },
  },
  {
    slug: "chris-christie",
    name: "Chris Christie",
    wikipediaTitle: "Chris_Christie",
    description:
      "Christopher James Christie is an American politician and lawyer who served as the 55th governor of New Jersey from 2010 to 2018. His administration was engulfed by the Bridgegate scandal, in which his appointees deliberately closed access lanes to the George Washington Bridge in September 2013 to punish a local Democratic mayor for refusing to endorse the governor's re-election; two former aides were convicted of related federal crimes before having those convictions overturned by the U.S. Supreme Court in 2020. He twice closed New Jersey state beaches during a 2017 budget impasse and was photographed sunbathing with his family on one of them with no other beachgoers in sight.",
    alignment: "evil",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "rudy-giuliani",
    name: "Rudy Giuliani",
    wikipediaTitle: "Rudy_Giuliani",
    description:
      "Rudolph William Louis Giuliani is an American politician and disbarred lawyer who served as the 107th mayor of New York City from 1994 to 2001. As Donald Trump's lawyer after 2018 he led the campaign to overturn the 2020 election results, organizing baseless allegations of voter fraud at a Philadelphia landscaping company and a now-famous press conference at which hair dye streamed down his face. He was indicted in Georgia on racketeering charges, was disbarred in New York and Washington in 2024, and was ordered to pay $148 million to two Atlanta election workers he had publicly defamed.",
    alignment: "evil",
    fallback: { birthYear: 1944, deathYear: null },
  },
  {
    slug: "michael-flynn",
    name: "Michael Flynn",
    wikipediaTitle: "Michael_Flynn",
    description:
      "Michael Thomas Flynn is a retired U.S. Army lieutenant general who served as the 24th national security advisor for the first 24 days of the first Trump administration before resigning amid revelations he had misled Vice President Mike Pence about his contacts with Russian Ambassador Sergey Kislyak. He pleaded guilty to lying to the FBI about those contacts, only to receive a presidential pardon from Trump in November 2020. He has since become a leading figure in QAnon and Christian-nationalist circles, publicly calling for martial law to overturn the 2020 election and for the establishment of a single state religion.",
    alignment: "evil",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "stephen-miller",
    name: "Stephen Miller",
    wikipediaTitle: "Stephen_Miller",
    description:
      "Stephen N. Miller is an American political adviser who served as senior policy adviser and director of speechwriting in the first Trump administration from 2017 to 2021 and as White House deputy chief of staff for policy and homeland security adviser since 2025. He was the principal architect of the family-separation policy that detained thousands of migrant children apart from their parents in 2018, and is widely considered the chief author of the administration's restrictive immigration agenda, including the travel ban targeting predominantly Muslim countries. Internal emails published by the Southern Poverty Law Center documented his routine circulation of white-nationalist content to right-wing media.",
    alignment: "evil",
    fallback: { birthYear: 1985, deathYear: null },
  },
  {
    slug: "john-bolton",
    name: "John Bolton",
    wikipediaTitle: "John_Bolton",
    description:
      "John Robert Bolton II is an American attorney and former diplomat who served as the 25th U.S. Ambassador to the United Nations from 2005 to 2006 and as the 26th national security advisor from 2018 to 2019. A persistent advocate for U.S. military action against Iran, North Korea, Cuba, and Venezuela across more than three decades, he played a key role in advancing the false intelligence narrative used to justify the 2003 invasion of Iraq while serving as undersecretary of state for arms control. He has been a vocal critic of Donald Trump since being forced out of the White House, recounting in his 2020 memoir how Trump asked Chinese President Xi Jinping for help in his re-election.",
    alignment: "evil",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "erik-prince",
    name: "Erik Prince",
    wikipediaTitle: "Erik_Prince",
    description:
      "Erik Dean Prince is an American businessman and former U.S. Navy SEAL officer who founded the private military contractor Blackwater in 1997, leading it through the Iraq War years during which Blackwater contractors killed 17 Iraqi civilians at Baghdad's Nisour Square in 2007. He has since been involved in private military and intelligence ventures across Africa, the Middle East, and Asia, including unsuccessful efforts to privatize the U.S. war in Afghanistan and to build a private army for the United Arab Emirates. The Blackwater contractors convicted of the Nisour Square killings were pardoned by President Donald Trump in December 2020.",
    alignment: "evil",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "oliver-north",
    name: "Oliver North",
    wikipediaTitle: "Oliver_North",
    description:
      "Oliver Laurence North is a retired U.S. Marine Corps lieutenant colonel and political commentator who as a National Security Council staff member became the central operational figure of the Iran-Contra affair, illegally selling weapons to Iran and diverting the proceeds to fund the Nicaraguan Contras in defiance of an explicit congressional ban. He was convicted in 1989 of three felony counts including aiding and abetting the obstruction of Congress, but his convictions were vacated on appeal because his testimony had been compelled under a grant of immunity. He later served as president of the National Rifle Association from 2018 to 2019.",
    alignment: "evil",
    fallback: { birthYear: 1943, deathYear: null },
  },
  {
    slug: "ken-starr",
    name: "Ken Starr",
    wikipediaTitle: "Ken_Starr",
    description:
      "Kenneth Winston Starr was an American lawyer and judge who as independent counsel from 1994 to 1998 produced the Starr Report, the document of more than 450 pages graphically detailing President Bill Clinton's relationship with White House intern Monica Lewinsky that triggered Clinton's 1998 impeachment. As president of Baylor University from 2010 to 2016 he was demoted, then resigned, after an internal investigation found his administration had repeatedly mishandled and minimized accusations of sexual assault by football players. In 2019 he served as a member of Donald Trump's first impeachment defense team.",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: 2022 },
  },
  {
    slug: "antonin-scalia",
    name: "Antonin Scalia",
    wikipediaTitle: "Antonin_Scalia",
    description:
      "Antonin Gregory Scalia was an American jurist who served as an Associate Justice of the U.S. Supreme Court from 1986 until his death in 2016 and was the intellectual anchor of the Court's conservative bloc. He authored or joined opinions that invalidated key sections of the 1965 Voting Rights Act in Shelby County v. Holder, weakened campaign-finance restrictions in Citizens United v. FEC, and dissented from the 2015 marriage-equality decision Obergefell v. Hodges. As the principal architect of textualist and originalist constitutional interpretation, his framework has shaped the Court's conservative jurisprudence for decades.",
    alignment: "evil",
    fallback: { birthYear: 1936, deathYear: 2016 },
  },
  {
    slug: "clarence-thomas",
    name: "Clarence Thomas",
    wikipediaTitle: "Clarence_Thomas",
    description:
      "Clarence Thomas is an American jurist who has served as an Associate Justice of the U.S. Supreme Court since 1991, the longest-serving member of the current Court. His confirmation was nearly derailed by Anita Hill's sworn testimony that he had sexually harassed her while serving as her supervisor at the EEOC. Investigative reporting by ProPublica beginning in 2023 documented decades of undisclosed luxury gifts and travel from billionaire Republican donor Harlan Crow, including private-jet flights, yacht trips, and Crow's purchase of property from Thomas's family. His wife Virginia Thomas worked actively to overturn the 2020 election, exchanging dozens of texts with then–White House Chief of Staff Mark Meadows.",
    alignment: "evil",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "samuel-alito",
    name: "Samuel Alito",
    wikipediaTitle: "Samuel_Alito",
    description:
      "Samuel Anthony Alito Jr. is an American jurist who has served as an Associate Justice of the U.S. Supreme Court since 2006. He is the author of the 2022 Dobbs v. Jackson Women's Health Organization majority opinion that overturned Roe v. Wade and ended the federal constitutional right to abortion that had stood for nearly half a century. In 2024 reporting documented that flags associated with the January 6 attack on the U.S. Capitol—an upside-down American flag and an \"Appeal to Heaven\" flag—had flown at his Virginia and New Jersey homes, drawing widespread calls for his recusal from related Supreme Court cases that he has refused.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "amy-coney-barrett",
    name: "Amy Coney Barrett",
    wikipediaTitle: "Amy_Coney_Barrett",
    description:
      "Amy Vivian Coney Barrett is an American jurist who has served as an Associate Justice of the U.S. Supreme Court since 2020. Her nomination by President Donald Trump and confirmation by the Republican-controlled Senate just eight days before the 2020 presidential election broke a confirmation precedent Senate Republicans had themselves invoked in 2016 to block Merrick Garland's nomination. She has since voted with the Court's conservative majority to overturn Roe v. Wade in Dobbs, narrow the Voting Rights Act, and grant Donald Trump significant immunity from criminal prosecution.",
    alignment: "evil",
    fallback: { birthYear: 1972, deathYear: null },
  },
  {
    slug: "neil-gorsuch",
    name: "Neil Gorsuch",
    wikipediaTitle: "Neil_Gorsuch",
    description:
      "Neil McGill Gorsuch is an American jurist who has served as an Associate Justice of the U.S. Supreme Court since 2017, after Senate Republicans refused for 293 days to consider Barack Obama's nominee Merrick Garland for the same seat. He has voted with the conservative majority to overturn Roe v. Wade in Dobbs, end affirmative action in college admissions, and constrain the regulatory authority of federal agencies in the 2024 Loper Bright decision. His 2007 textbook on euthanasia and assisted suicide is the principal published expression of his judicial philosophy outside his opinions.",
    alignment: "evil",
    fallback: { birthYear: 1967, deathYear: null },
  },
  {
    slug: "brett-kavanaugh",
    name: "Brett Kavanaugh",
    wikipediaTitle: "Brett_Kavanaugh",
    description:
      "Brett Michael Kavanaugh is an American jurist who has served as an Associate Justice of the U.S. Supreme Court since 2018. His Senate confirmation hearings were marked by sworn testimony from Christine Blasey Ford that he had sexually assaulted her while both were teenagers, allegations he denied in an angry televised rebuttal that drew bipartisan questions about his judicial temperament. Subsequent reporting raised additional accusations of sexual misconduct and questions about his Senate testimony regarding his drinking. He has since voted with the conservative majority to overturn Roe v. Wade and to grant Donald Trump significant immunity from criminal prosecution.",
    alignment: "evil",
    fallback: { birthYear: 1965, deathYear: null },
  },
  {
    slug: "john-roberts",
    name: "John Roberts",
    wikipediaTitle: "John_Roberts",
    description:
      "John Glover Roberts Jr. is an American jurist who has served since 2005 as the 17th Chief Justice of the United States. He authored the 2013 Shelby County v. Holder majority opinion gutting the preclearance enforcement mechanism of the Voting Rights Act, the 2010 Citizens United concurrence opening the floodgates to unlimited corporate political spending, and the 2024 Trump v. United States opinion granting presidents broad immunity from criminal prosecution for official acts. Despite occasional efforts to position himself as an institutional moderate, his Court has overseen the most rapid conservative reshaping of American constitutional law since the 1930s.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "william-barr",
    name: "William Barr",
    wikipediaTitle: "William_Barr",
    description:
      "William Pelham Barr is an American attorney who served as U.S. Attorney General under George H. W. Bush from 1991 to 1993 and again under Donald Trump from 2019 to 2020. As attorney general for Trump he publicly mischaracterized the findings of Special Counsel Robert Mueller's Russia investigation in a four-page summary that preceded the report's release, ordered the violent dispersal of peaceful protesters from Lafayette Square in June 2020 to facilitate Trump's Bible-photo opportunity outside St. John's Church, and intervened in federal cases involving Trump associates Roger Stone and Michael Flynn.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "jeff-sessions",
    name: "Jeff Sessions",
    wikipediaTitle: "Jeff_Sessions",
    description:
      "Jefferson Beauregard Sessions III is an American politician who served as the 84th U.S. Attorney General from 2017 to 2018 after representing Alabama in the U.S. Senate from 1997 to 2017. As attorney general he reinstated the federal pursuit of mandatory-minimum drug sentences that the Obama administration had been winding down, ended Justice Department oversight of police departments accused of civil-rights violations, and personally implemented the family-separation policy at the southern border. He had earlier been rejected for a federal judgeship in 1986 over his record on race, including allegations he had referred to civil-rights organizations as \"un-American.\"",
    alignment: "evil",
    fallback: { birthYear: 1946, deathYear: null },
  },
  {
    slug: "rex-tillerson",
    name: "Rex Tillerson",
    wikipediaTitle: "Rex_Tillerson",
    description:
      "Rex Wayne Tillerson is an American oil executive who served as chairman and CEO of ExxonMobil from 2006 to 2016 and as the 69th U.S. Secretary of State from 2017 to 2018 in the first Trump administration. As ExxonMobil's CEO he oversaw a corporate strategy that internal investigations later revealed had publicly downplayed climate change despite Exxon scientists' own clear understanding of its severity for decades. As Secretary of State he presided over a sustained gutting of the State Department's career diplomatic ranks before being fired by tweet by Donald Trump in March 2018.",
    alignment: "evil",
    fallback: { birthYear: 1952, deathYear: null },
  },
  {
    slug: "rick-perry",
    name: "Rick Perry",
    wikipediaTitle: "Rick_Perry",
    description:
      "James Richard Perry is an American politician who served as the 47th and longest-tenured governor of Texas from 2000 to 2015 and as the 14th U.S. Secretary of Energy from 2017 to 2019. As governor he presided over the execution of Cameron Todd Willingham in 2004 despite emerging arson-science evidence that the fire that killed Willingham's children had been accidental, and replaced state forensic-commission members poised to review the case. As a 2012 presidential candidate he memorably forgot the third federal department he proposed to eliminate—the Department of Energy—the same agency he later led.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "betsy-devos",
    name: "Betsy DeVos",
    wikipediaTitle: "Betsy_DeVos",
    description:
      "Elisabeth Dee DeVos is an American billionaire and political activist who served as the 11th U.S. Secretary of Education from 2017 to 2021 in the first Trump administration. A longstanding funder of school-voucher and charter-school causes, she had no prior experience in public education and was confirmed only after Vice President Mike Pence cast the first tie-breaking confirmation vote for any cabinet position in U.S. history. As Secretary she rolled back Title IX guidance protecting student survivors of sexual assault, attempted to reinstate predatory student-loan servicers, and weakened federal oversight of for-profit colleges accused of fraud.",
    alignment: "evil",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "ben-carson",
    name: "Ben Carson",
    wikipediaTitle: "Ben_Carson",
    description:
      "Benjamin Solomon Carson Sr. is an American retired neurosurgeon who served as the 17th U.S. Secretary of Housing and Urban Development from 2017 to 2021 after a distinguished career as director of pediatric neurosurgery at Johns Hopkins. As HUD Secretary he had no prior housing or government experience and presided over an agency repeatedly faulted by its own inspector general, while sustaining attention for ill-informed public statements such as describing slaves as \"immigrants\" who came to America \"in the bottom of slave ships,\" and asking aides whether the agency's REO program was \"a cookie.\" His 2016 presidential campaign was marked by a string of disproven personal anecdotes, including the West Point scholarship he had not actually been offered.",
    alignment: "evil",
    fallback: { birthYear: 1951, deathYear: null },
  },
  {
    slug: "elaine-chao",
    name: "Elaine Chao",
    wikipediaTitle: "Elaine_Chao",
    description:
      "Elaine Lan Chao is a Taiwanese-American businesswoman who served as U.S. Secretary of Labor under George W. Bush from 2001 to 2009 and as Secretary of Transportation in the first Trump administration from 2017 to 2021. She is married to longtime Senate Republican leader Mitch McConnell, and an inspector general's investigation found that as Secretary of Transportation she had improperly used her office to benefit her family's shipping company, Foremost Group, including arranging meetings with Chinese officials. She resigned in the immediate aftermath of the January 6, 2021 attack on the U.S. Capitol.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: null },
  },
  {
    slug: "tom-price",
    name: "Tom Price",
    wikipediaTitle: "Tom_Price_(American_politician)",
    description:
      "Thomas Edmunds Price is an American physician and Republican politician who served as U.S. Secretary of Health and Human Services from February to September 2017, when he resigned amid revelations that he had spent more than $1 million in taxpayer funds on private and military jet travel for routine business that could have been done by commercial flight. He had earlier represented Georgia's 6th congressional district from 2005 to 2017 and was a leading Republican voice for repealing the Affordable Care Act. He was the first Trump cabinet secretary forced to resign over an ethics scandal.",
    alignment: "evil",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "ryan-zinke",
    name: "Ryan Zinke",
    wikipediaTitle: "Ryan_Zinke",
    description:
      "Ryan Keith Zinke is an American politician and businessman who served as U.S. Secretary of the Interior from 2017 to 2019 in the first Trump administration before resigning amid more than 18 federal ethics investigations into his conduct. He oversaw the largest reduction of national-monument protections in U.S. history, cutting Bears Ears and Grand Staircase-Escalante by a combined two million acres, and pushed to open vast new areas of federal land and offshore waters to oil, gas, and coal extraction. He has since represented Montana's 1st congressional district in the U.S. House since 2023.",
    alignment: "evil",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "scott-pruitt",
    name: "Scott Pruitt",
    wikipediaTitle: "Scott_Pruitt",
    description:
      "Edward Scott Pruitt is an American attorney and former Republican politician who served as the 14th Administrator of the U.S. Environmental Protection Agency from February 2017 to July 2018, when he resigned while under at least 14 federal investigations into his conduct. As Oklahoma attorney general he had personally sued the EPA 14 times before being put in charge of it, and as Administrator he rolled back dozens of clean-air, clean-water, and climate regulations while installing a $43,000 soundproof phone booth in his office and accepting a below-market rental of a Capitol Hill condominium from a lobbyist's wife.",
    alignment: "evil",
    fallback: { birthYear: 1968, deathYear: null },
  },
  {
    slug: "steve-mnuchin",
    name: "Steve Mnuchin",
    wikipediaTitle: "Steven_Mnuchin",
    description:
      "Steven Terner Mnuchin is an American investment banker and film producer who served as the 77th U.S. Secretary of the Treasury from 2017 to 2021 in the first Trump administration. As CEO of OneWest Bank from 2009 to 2015 he oversaw the foreclosure of more than 36,000 California homeowners, drawing public protest and the nickname \"the foreclosure king.\" As Treasury Secretary he was the principal architect of the 2017 Tax Cuts and Jobs Act, which the Congressional Budget Office estimated would add about $1.9 trillion to the federal deficit while disproportionately benefiting corporations and the wealthy.",
    alignment: "evil",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "wilbur-ross",
    name: "Wilbur Ross",
    wikipediaTitle: "Wilbur_Ross",
    description:
      "Wilbur Louis Ross Jr. is an American businessman who served as the 39th U.S. Secretary of Commerce from 2017 to 2021 in the first Trump administration. Forbes removed him from its list of the world's billionaires after concluding he had appeared to have inflated the value of his assets by some $2 billion, and during his tenure he repeatedly failed to divest financial holdings as required, prompting the Office of Government Ethics to refuse to certify his financial disclosures. He was widely reported to fall asleep in cabinet meetings, and his decision to add a citizenship question to the 2020 census was later blocked by the Supreme Court for being based on \"contrived\" pretextual reasoning.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "john-kelly",
    name: "John Kelly",
    wikipediaTitle: "John_F._Kelly",
    description:
      "John Francis Kelly is an American retired U.S. Marine Corps general who served as the second White House chief of staff to President Donald Trump from 2017 to 2019 and previously as the fifth Secretary of Homeland Security in 2017. As Homeland Security Secretary he implemented the early stages of the family-separation policy on the southern border, and as chief of staff he defended the practice in public while later confirming, after leaving office, that he believed Trump was \"a person who has nothing but contempt for our democratic institutions, our Constitution, and the rule of law.\" He has since been one of the most prominent former senior officials to publicly characterize his former boss as a fascist.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "kirstjen-nielsen",
    name: "Kirstjen Nielsen",
    wikipediaTitle: "Kirstjen_Nielsen",
    description:
      "Kirstjen Michele Nielsen is an American attorney who served as the sixth U.S. Secretary of Homeland Security from December 2017 to April 2019 in the first Trump administration. She presided over the implementation of the family-separation \"zero tolerance\" policy on the southern border that ultimately separated more than 5,000 migrant children from their parents, including babies and toddlers. She publicly insisted before Congress and on social media that no such policy existed even as the administration was actively defending it in court, before being forced out by the president for being insufficiently aggressive on immigration enforcement.",
    alignment: "evil",
    fallback: { birthYear: 1972, deathYear: null },
  },
  {
    slug: "alexander-acosta",
    name: "Alexander Acosta",
    wikipediaTitle: "Alexander_Acosta",
    description:
      "Rene Alexander Acosta is an American lawyer who served as the 27th U.S. Secretary of Labor from 2017 to 2019 in the first Trump administration before resigning amid renewed scrutiny of his earlier role in the Jeffrey Epstein non-prosecution agreement. As U.S. Attorney for the Southern District of Florida from 2005 to 2009, he approved a 2008 plea deal that allowed Epstein to plead guilty to two state prostitution charges and serve only 13 months in county jail, despite federal prosecutors having identified dozens of underage victims. A federal judge later ruled the deal had violated the Crime Victims' Rights Act by being concealed from Epstein's victims.",
    alignment: "evil",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "sarah-huckabee-sanders",
    name: "Sarah Huckabee Sanders",
    wikipediaTitle: "Sarah_Huckabee_Sanders",
    description:
      "Sarah Elizabeth Huckabee Sanders is an American politician who has served as the 47th governor of Arkansas since 2023 after working as the 31st White House press secretary in the first Trump administration from 2017 to 2019. As press secretary she repeatedly made false claims from the briefing-room podium, including telling the public that countless FBI agents had told her they had lost confidence in James Comey before his firing—a statement she later admitted under oath to Special Counsel Robert Mueller had been fabricated. As governor she has signed sweeping bans on transgender care for minors and on classroom instruction touching on race, gender, and sexuality.",
    alignment: "evil",
    fallback: { birthYear: 1982, deathYear: null },
  },
  {
    slug: "kayleigh-mcenany",
    name: "Kayleigh McEnany",
    wikipediaTitle: "Kayleigh_McEnany",
    description:
      "Kayleigh Michelle McEnany is an American political commentator who served as the 33rd White House press secretary from April 2020 to January 2021, in the closing year of the first Trump administration. Repeatedly caught making false or misleading statements from the briefing-room podium about COVID-19, the 2020 election, and the January 6 attack on the U.S. Capitol, she also told the press in her first briefing that she would never lie to them. Before joining the administration she had been an early Republican primary critic of Trump who later became one of his most consistent television defenders.",
    alignment: "evil",
    fallback: { birthYear: 1988, deathYear: null },
  },
  {
    slug: "kellyanne-conway",
    name: "Kellyanne Conway",
    wikipediaTitle: "Kellyanne_Conway",
    description:
      "Kellyanne Elizabeth Conway is an American political consultant and pollster who served as senior counselor to President Donald Trump from 2017 to 2020 and was Trump's 2016 campaign manager—the first woman to manage a winning U.S. presidential campaign. Days after the inauguration she introduced the term \"alternative facts\" to defend false White House claims about inauguration crowd sizes, a phrase that became emblematic of the administration's relationship to the press. The Office of Special Counsel concluded in 2019 that she had violated the Hatch Act multiple times by openly campaigning from official platforms and recommended her removal, which Trump declined to enact.",
    alignment: "evil",
    fallback: { birthYear: 1967, deathYear: null },
  },
  {
    slug: "hope-hicks",
    name: "Hope Hicks",
    wikipediaTitle: "Hope_Hicks",
    description:
      "Hope Charlotte Hicks is an American public relations executive and political adviser who served as White House communications director from 2017 to 2018 and again as counselor to President Donald Trump from 2020 to 2021. A longtime aide within the Trump Organization before joining the campaign and administration, she admitted to a 2018 House Intelligence Committee that her duties for Trump had included telling \"white lies.\" She was a key witness in the 2024 Manhattan trial in which Trump was convicted of 34 felony counts of falsifying business records to conceal hush-money payments.",
    alignment: "evil",
    fallback: { birthYear: 1988, deathYear: null },
  },
  {
    slug: "sean-spicer",
    name: "Sean Spicer",
    wikipediaTitle: "Sean_Spicer",
    description:
      "Sean Michael Spicer is an American political commentator and former Republican National Committee chief strategist who served as the 30th White House press secretary in 2017. In his first day in the role he angrily insisted from the briefing-room podium that Donald Trump's inauguration crowd had been \"the largest audience ever to witness an inauguration—period,\" a claim that was demonstrably false. He resigned from the post after just six months and subsequently appeared on Dancing with the Stars and as a host on the right-wing Newsmax network.",
    alignment: "evil",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "anthony-scaramucci",
    name: "Anthony Scaramucci",
    wikipediaTitle: "Anthony_Scaramucci",
    description:
      "Anthony Scaramucci is an American financier and broadcaster whose tenure as White House communications director in 2017 lasted only 11 days, the shortest of any officeholder in modern White House history. His firing followed a profanity-laden phone interview with The New Yorker in which he attacked then–Chief of Staff Reince Priebus and chief strategist Steve Bannon. He has since publicly broken with Donald Trump and become a vocal media critic of the president, while building a substantial cryptocurrency and hedge-fund business as the founder of SkyBridge Capital.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "corey-lewandowski",
    name: "Corey Lewandowski",
    wikipediaTitle: "Corey_Lewandowski",
    description:
      "Corey R. Lewandowski is an American political operative who served as the first campaign manager for Donald Trump's 2016 presidential campaign and as acting chief of staff to Secretary of Homeland Security Kristi Noem in 2025. In March 2016 he was charged with simple battery for grabbing a Breitbart News reporter on the campaign trail in Florida, with the charge later dropped, and he was further accused in 2021 of unwanted sexual advances toward a Republican donor at a Las Vegas event. He has remained an aggressive defender of Trump across cable news and conservative media throughout the post-2020 election period.",
    alignment: "evil",
    fallback: { birthYear: 1973, deathYear: null },
  },
  {
    slug: "brad-parscale",
    name: "Brad Parscale",
    wikipediaTitle: "Brad_Parscale",
    description:
      "Brad Parscale is an American digital consultant who served as Donald Trump's 2020 presidential campaign manager from 2018 until his demotion in July 2020 following the Tulsa rally that drew far smaller crowds than the campaign had publicly projected. In September 2020 he was hospitalized after a barricaded incident at his Florida home in which his wife told police he had threatened to harm himself and was armed. Subsequent reporting revealed that he had personally received tens of millions of dollars in payments through a network of campaign-affiliated entities, prompting investigations and lawsuits.",
    alignment: "evil",
    fallback: { birthYear: 1976, deathYear: null },
  },
  {
    slug: "roger-ailes",
    name: "Roger Ailes",
    wikipediaTitle: "Roger_Ailes",
    description:
      "Roger Eugene Ailes was an American television executive and Republican political consultant who founded Fox News Channel in 1996 and served as its chairman and CEO until his ouster in 2016 over multiple accusations of sexual harassment. As a media consultant he advised the presidential campaigns of Richard Nixon, Ronald Reagan, and George H. W. Bush, and his Fox News programming model fundamentally reshaped American political journalism by fusing partisan opinion with rolling news. After his 2016 departure—which followed lawsuits by anchors Gretchen Carlson and Megyn Kelly and a $20 million settlement to Carlson—21st Century Fox paid more than $50 million to additional Ailes accusers.",
    alignment: "evil",
    fallback: { birthYear: 1940, deathYear: 2017 },
  },
  {
    slug: "bill-o-reilly",
    name: "Bill O'Reilly",
    wikipediaTitle: "Bill_O'Reilly_(political_commentator)",
    description:
      "William James O'Reilly Jr. is an American conservative political commentator who hosted The O'Reilly Factor on Fox News from 1996 to 2017, the highest-rated cable news program for nearly all of its run. He was forced out of Fox News in 2017 after a New York Times investigation revealed that he and Fox had paid roughly $13 million across at least five sexual-harassment settlements with female colleagues; subsequent reporting raised the documented total to about $45 million. He has continued podcasting and publishing his Killing… series of popular history books since his departure.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "megyn-kelly",
    name: "Megyn Kelly",
    wikipediaTitle: "Megyn_Kelly",
    description:
      "Megyn Marie Kelly is an American journalist and political commentator who hosted programs on Fox News from 2004 to 2017 and on NBC from 2017 to 2018. Her NBC career ended after she defended on-air the appropriateness of white people wearing blackface for Halloween, comments that drew widespread condemnation and a $69 million settlement to terminate her three-year contract. Earlier she had publicly insisted that both Jesus Christ and Santa Claus \"just are\" white, and helped legitimize Donald Trump's birther narrative against Barack Obama on Fox News.",
    alignment: "evil",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "glenn-beck",
    name: "Glenn Beck",
    wikipediaTitle: "Glenn_Beck",
    description:
      "Glenn Lee Beck is an American conservative political commentator and entrepreneur who hosted his own show on Fox News from 2009 to 2011 before parting ways with the network amid an advertiser boycott driven by a campaign organized after his comments about President Barack Obama. He was a central public figure of the Tea Party movement, popularizing conspiracy theories about Obama's policies through chalkboard segments that drew millions of viewers. Since leaving Fox he has run TheBlaze and The Glenn Beck Program on Premiere Radio Networks.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "laura-ingraham",
    name: "Laura Ingraham",
    wikipediaTitle: "Laura_Ingraham",
    description:
      "Laura Anne Ingraham is an American conservative television presenter who has hosted The Ingraham Angle on Fox News since 2017, after a long career as a syndicated talk-radio host. In 2018 she mocked Parkland school-shooting survivor David Hogg over college rejections in a tweet that prompted dozens of advertisers to leave her show, and she has repeatedly platformed white-nationalist talking points on the air, including dwelling on \"massive demographic changes\" she said had been \"foisted on the American people.\" She earlier worked as a speechwriter in the Reagan administration.",
    alignment: "evil",
    fallback: { birthYear: 1963, deathYear: null },
  },
  {
    slug: "jeanine-pirro",
    name: "Jeanine Pirro",
    wikipediaTitle: "Jeanine_Pirro",
    description:
      "Jeanine Ferris Pirro is an American television host and lawyer who has served as U.S. Attorney for the District of Columbia since 2025, after years as host of Justice with Judge Jeanine on Fox News and as a co-host of The Five. She was an original signer of and prominent television booster for Donald Trump's stolen-election claims, and was a named defendant in the Smartmatic and Dominion defamation lawsuits over Fox News' broadcasts of false 2020 election fraud allegations. She earlier served as Westchester County district attorney and as a New York County Court judge.",
    alignment: "evil",
    fallback: { birthYear: 1951, deathYear: null },
  },
  {
    slug: "jesse-watters",
    name: "Jesse Watters",
    wikipediaTitle: "Jesse_Watters",
    description:
      "Jesse Bailey Watters is an American conservative political commentator who hosts the Fox News programs Jesse Watters Primetime and is a regular on The Five. Originally a producer for Bill O'Reilly, he became known for his ambush man-on-the-street \"Watters' World\" segments, which were repeatedly criticized for racial mockery, including a 2016 segment about Asian Americans in New York's Chinatown that drew apologies from O'Reilly and condemnation from civil-rights groups. He has continued to amplify Donald Trump's claims of election fraud and conspiracy theories about the 2020 election.",
    alignment: "evil",
    fallback: { birthYear: 1978, deathYear: null },
  },
  {
    slug: "greg-gutfeld",
    name: "Greg Gutfeld",
    wikipediaTitle: "Greg_Gutfeld",
    description:
      "Gregory John Gutfeld is an American television host and conservative political commentator on Fox News, where he hosts the late-night program Gutfeld! and co-hosts the political talk show The Five. His show consistently mocks women, immigrants, and progressive politicians, and his on-air commentary during the COVID-19 pandemic minimized the disease and questioned vaccine safety. He has been a leading voice in the Fox News effort to counter the dominance of late-night network comedy with right-wing alternatives.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "dan-bongino",
    name: "Dan Bongino",
    wikipediaTitle: "Dan_Bongino",
    description:
      "Daniel John Bongino is an American conservative podcaster and former Secret Service agent who served as the 20th deputy director of the Federal Bureau of Investigation from 2025 to 2026. Before his FBI appointment he was one of the most popular right-wing podcasters in the United States, repeatedly amplifying false claims about the 2020 presidential election, the COVID-19 pandemic, and the January 6 attack on the U.S. Capitol. His departure from the FBI followed reporting that he had clashed publicly and privately with Director Kash Patel.",
    alignment: "evil",
    fallback: { birthYear: 1974, deathYear: null },
  },
  {
    slug: "candace-owens",
    name: "Candace Owens",
    wikipediaTitle: "Candace_Owens",
    description:
      "Candace Amber Owens Farmer is an American political commentator and conspiracy theorist who has built a large social-media following on the political far right despite having begun her career as an anti-Trump blogger. She has minimized the dangers of Adolf Hitler, repeatedly promoted antisemitic conspiracy theories—including doubting that Israel was responsible for combatting Hamas—and was dismissed from The Daily Wire in 2024 after a public dispute with co-founder Ben Shapiro over her commentary on the Israel-Hamas war. She has also platformed conspiracy theories about COVID-19 vaccines, the death of Brigitte Macron's relatives, and the entertainment industry.",
    alignment: "evil",
    fallback: { birthYear: 1989, deathYear: null },
  },
  {
    slug: "ben-shapiro",
    name: "Ben Shapiro",
    wikipediaTitle: "Ben_Shapiro",
    description:
      "Benjamin Aaron Shapiro is an American conservative political commentator and attorney who co-founded The Daily Wire in 2015 and hosts The Ben Shapiro Show, one of the most-listened-to political podcasts in the United States. He has built a large young-male following with rapid-fire combative debate appearances at college campuses, and his commentary has repeatedly platformed transphobic, anti-Palestinian, and Islamophobic positions. He has also publicly opposed federal civil-rights protections for LGBTQ Americans and has been a leading media voice supporting Israel's military operations in Gaza after October 2023.",
    alignment: "evil",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "jordan-peterson",
    name: "Jordan Peterson",
    wikipediaTitle: "Jordan_Peterson",
    description:
      "Jordan Bernt Peterson is a Canadian psychologist and media commentator who first came to broad public attention in 2016 for opposing Bill C-16, a Canadian human-rights amendment that added gender identity and expression as protected grounds. His subsequent self-help books, lectures, and podcast appearances have built a large young-male audience, while his public statements—on transgender rights, climate change, the World Health Organization, and women's roles—have drawn sustained criticism from clinicians, scientists, and former colleagues. The College of Psychologists of Ontario in 2022 ordered him to undergo coaching for unprofessional public statements, an order he has unsuccessfully challenged in court.",
    alignment: "evil",
    fallback: { birthYear: 1962, deathYear: null },
  },
  {
    slug: "dennis-prager",
    name: "Dennis Prager",
    wikipediaTitle: "Dennis_Prager",
    description:
      "Dennis Mark Prager is an American conservative radio host and writer who in 2009 co-founded PragerU, an online video operation that produces five-minute commentaries advocating conservative political, economic, and cultural positions while branding itself as an educational institution. PragerU is not an accredited university and its videos have repeatedly been fact-checked as misleading on topics including climate change, racial slavery in the United States, and pandemic public-health measures. Several U.S. states have nonetheless approved PragerU content for use in K–12 classrooms.",
    alignment: "evil",
    fallback: { birthYear: 1948, deathYear: null },
  },
  {
    slug: "charlie-kirk",
    name: "Charlie Kirk",
    wikipediaTitle: "Charlie_Kirk",
    description:
      "Charles James Kirk was an American right-wing political activist and media personality who in 2012, at age 18, co-founded the conservative student organization Turning Point USA and served as its executive director until his assassination in September 2025. Through TPUSA he organized the annual AmericaFest and Student Action Summit conferences, becoming one of the most prominent voices of the MAGA movement on college campuses. He was a sustained promoter of Donald Trump's claims of 2020 election fraud and of conspiracy theories about COVID-19 vaccination, and his Charlie Kirk Show podcast was among the most-downloaded political programs in the country at the time of his death.",
    alignment: "evil",
    fallback: { birthYear: 1993, deathYear: 2025 },
  },
  {
    slug: "matt-walsh",
    name: "Matt Walsh",
    wikipediaTitle: "Matt_Walsh_(political_commentator)",
    description:
      "Matthew Walsh is an American conservative political commentator and host at The Daily Wire whose anti-transgender activism is the centerpiece of his public work. His 2022 documentary What Is a Woman? and his subsequent campaigns have agitated for state-level bans on gender-affirming care for minors, contributed to such legislation in multiple states, and made him one of the loudest U.S. media voices for restricting public expression of transgender identity. He has also publicly defended child marriage and characterized women without children as \"ugly\" and \"miserable,\" remarks for which he has refused to apologize.",
    alignment: "evil",
    fallback: { birthYear: 1986, deathYear: null },
  },
  {
    slug: "michael-knowles",
    name: "Michael Knowles",
    wikipediaTitle: "Michael_Knowles_(political_commentator)",
    description:
      "Michael John Knowles is an American conservative political commentator who has been affiliated with The Daily Wire since 2016 and hosts The Michael Knowles Show. At the 2023 Conservative Political Action Conference he called for \"transgenderism\" to be \"eradicated from public life entirely,\" comments widely cited by civil-rights groups as eliminationist rhetoric directed at transgender Americans. He has continued to make anti-LGBTQ public statements and to argue against legal protections for transgender people in the United States.",
    alignment: "evil",
    fallback: { birthYear: 1990, deathYear: null },
  },
  {
    slug: "andrew-tate",
    name: "Andrew Tate",
    wikipediaTitle: "Andrew_Tate",
    description:
      "Emory Andrew Tate III is an American-British social-media personality and former kickboxer who built one of the largest \"manosphere\" online followings in the late 2010s and early 2020s with explicitly misogynistic content. He has been banned at various points by Facebook, Instagram, TikTok, YouTube, and Twitter for violating policies on hateful or violent content. In Romania he was indicted in 2023 on charges of human trafficking, rape, and forming an organized criminal group to sexually exploit women, with related charges against his brother Tristan Tate; he has remained under various forms of judicial control while the Romanian and British prosecutions have proceeded.",
    alignment: "evil",
    fallback: { birthYear: 1986, deathYear: null },
  },
  {
    slug: "jake-paul",
    name: "Jake Paul",
    wikipediaTitle: "Jake_Paul",
    description:
      "Jake Joseph Paul is an American influencer turned professional boxer whose YouTube channel made him one of the highest-paid creators on the platform in the late 2010s. The U.S. Securities and Exchange Commission has separately fined and charged him in connection with promoting unregistered cryptocurrency offerings, and he was investigated by the FBI for filming a staged \"raid\" of his Calabasas, California home during the 2020 protests over the killing of George Floyd. He has continued to promote crypto products and to face regulatory and civil scrutiny while building a high-revenue boxing-promotions business.",
    alignment: "evil",
    fallback: { birthYear: 1997, deathYear: null },
  },
  {
    slug: "logan-paul",
    name: "Logan Paul",
    wikipediaTitle: "Logan_Paul",
    description:
      "Logan Alexander Paul is an American influencer and entrepreneur whose YouTube channel reached more than 23 million subscribers. In December 2017 he posted a vlog filmed inside Japan's Aokigahara forest that showed the body of an apparent suicide victim, drawing global condemnation, suspension of his YouTube ad revenue, and his removal from the company's premium creator program. The U.S. Securities and Exchange Commission has additionally settled allegations that his CryptoZoo non-fungible token project misled investors, and a class-action lawsuit by purchasers continues to wind through federal court.",
    alignment: "evil",
    fallback: { birthYear: 1995, deathYear: null },
  },
  {
    slug: "thomas-jefferson",
    name: "Thomas Jefferson",
    wikipediaTitle: "Thomas_Jefferson",
    description:
      "Thomas Jefferson was an American Founding Father who served as the third president of the United States from 1801 to 1809 and as the principal author of the 1776 Declaration of Independence. Despite penning that \"all men are created equal,\" he enslaved more than 600 people across his lifetime, including his wife's half-sister Sally Hemings, with whom DNA evidence has now confirmed he fathered at least six children, beginning when she was approximately 16. As president he authorized the Louisiana Purchase that doubled the size of the United States and the Lewis and Clark Expedition, while supporting policies that displaced Native peoples from their homelands.",
    alignment: "evil",
    fallback: { birthYear: 1743, deathYear: 1826 },
  },
  {
    slug: "james-madison",
    name: "James Madison",
    wikipediaTitle: "James_Madison",
    description:
      "James Madison was an American statesman who served as the fourth president of the United States from 1809 to 1817 and is remembered as \"Father of the Constitution\" for his pivotal role in drafting the document and the Bill of Rights. He was a lifelong slaveholder who personally enslaved more than 100 people on his Montpelier estate and authored the Three-Fifths Compromise, which counted enslaved people as three-fifths of a person for purposes of congressional apportionment. As president he led the United States into the disastrously prosecuted War of 1812, during which the British army burned the U.S. Capitol and the White House to the ground.",
    alignment: "evil",
    fallback: { birthYear: 1751, deathYear: 1836 },
  },
  {
    slug: "james-monroe",
    name: "James Monroe",
    wikipediaTitle: "James_Monroe",
    description:
      "James Monroe was an American Founding Father who served as the fifth president of the United States from 1817 to 1825 and was the last president drawn from the so-called \"Virginia dynasty.\" His 1823 Monroe Doctrine declared the Western Hemisphere off-limits to further European colonization and asserted U.S. spheres of influence across Latin America for the following two centuries. A lifelong slaveholder who owned dozens of enslaved people across his estates, he signed the Missouri Compromise of 1820 that admitted Missouri as a slave state and entrenched federal protection of slavery for another generation.",
    alignment: "evil",
    fallback: { birthYear: 1758, deathYear: 1831 },
  },
  {
    slug: "aaron-burr",
    name: "Aaron Burr",
    wikipediaTitle: "Aaron_Burr",
    description:
      "Aaron Burr Jr. was an American politician and lawyer who served as the third vice president of the United States from 1801 to 1805 under President Thomas Jefferson. In July 1804 he killed former Treasury Secretary Alexander Hamilton in a duel at Weehawken, New Jersey, ending Hamilton's life and effectively his own political career. He was subsequently arrested and tried for treason in 1807 over allegations that he had conspired to seize parts of the western United States and Mexico to form an independent nation, escaping conviction on a technicality.",
    alignment: "evil",
    fallback: { birthYear: 1756, deathYear: 1836 },
  },
  {
    slug: "john-tyler",
    name: "John Tyler",
    wikipediaTitle: "John_Tyler",
    description:
      "John Tyler was the tenth president of the United States, serving from 1841 to 1845 after the death of William Henry Harrison made him the first vice president to ascend to the presidency. A lifelong slaveholder and aggressive defender of slaveholders' rights, he annexed the slaveholding Republic of Texas in his last days in office. Two decades later he became the only U.S. president ever to commit treason against the government he had once led, taking up a seat in the Confederate House of Representatives and dying just before he could occupy it.",
    alignment: "evil",
    fallback: { birthYear: 1790, deathYear: 1862 },
  },
  {
    slug: "millard-fillmore",
    name: "Millard Fillmore",
    wikipediaTitle: "Millard_Fillmore",
    description:
      "Millard Fillmore was the 13th president of the United States, serving from 1850 to 1853 after the death of Zachary Taylor elevated him from the vice presidency. He is best known for signing the Fugitive Slave Act of 1850, which conscripted Northern law enforcement and ordinary citizens into the recapture of escaped enslaved people and made it a federal crime to assist refugees from slavery. After his presidency he ran for the office again in 1856 as the candidate of the nativist anti-Catholic Know-Nothing Party.",
    alignment: "evil",
    fallback: { birthYear: 1800, deathYear: 1874 },
  },
  {
    slug: "andrew-johnson",
    name: "Andrew Johnson",
    wikipediaTitle: "Andrew_Johnson",
    description:
      "Andrew Johnson was the 17th president of the United States, serving from 1865 to 1869 after the assassination of Abraham Lincoln, and the first U.S. president to be impeached. Coming to office at the end of the Civil War, he opposed congressional Reconstruction at every turn—vetoing civil-rights legislation, restoring property to former Confederate officers, and resisting the protection of newly freed African Americans, who faced widespread violence in the South during his tenure. The Senate fell one vote short of removing him from office in 1868 over his violation of the Tenure of Office Act.",
    alignment: "evil",
    fallback: { birthYear: 1808, deathYear: 1875 },
  },
  {
    slug: "rutherford-b-hayes",
    name: "Rutherford B. Hayes",
    wikipediaTitle: "Rutherford_B._Hayes",
    description:
      "Rutherford Birchard Hayes was the 19th president of the United States, serving from 1877 to 1881 after winning the most disputed presidential election in U.S. history. The 1876 election was decided by a special electoral commission that awarded all 20 contested electoral votes to Hayes, in exchange—per the unwritten Compromise of 1877—for the withdrawal of federal troops from the South. The withdrawal effectively ended Reconstruction and consigned newly freed Black Southerners to nearly a century of Jim Crow segregation, lynching, and disenfranchisement.",
    alignment: "evil",
    fallback: { birthYear: 1822, deathYear: 1893 },
  },
  {
    slug: "james-k-polk",
    name: "James K. Polk",
    wikipediaTitle: "James_K._Polk",
    description:
      "James Knox Polk was the 11th president of the United States, serving from 1845 to 1849, and the principal architect of mid-19th-century American territorial expansion. He provoked the Mexican–American War of 1846 by sending U.S. troops into disputed border territory, and the subsequent treaty seized roughly half of Mexico's territory—including modern California, Nevada, Utah, and parts of Arizona, Colorado, New Mexico, and Wyoming—for the United States. The vast new lands also reignited the political fight over the expansion of slavery, helping to set the stage for the Civil War a generation later.",
    alignment: "evil",
    fallback: { birthYear: 1795, deathYear: 1849 },
  },
  {
    slug: "zachary-taylor",
    name: "Zachary Taylor",
    wikipediaTitle: "Zachary_Taylor",
    description:
      "Zachary Taylor was an American military officer and politician who served as the 12th president of the United States from March 1849 until his death in July 1850. A career U.S. Army officer who became a national hero through his command in the Mexican–American War, he was a lifelong slaveholder who owned more than 100 enslaved people across his Louisiana and Mississippi plantations. He died in office, fewer than 16 months into his term, after a brief illness following a Fourth of July ceremony.",
    alignment: "evil",
    fallback: { birthYear: 1784, deathYear: 1850 },
  },
  {
    slug: "franklin-pierce",
    name: "Franklin Pierce",
    wikipediaTitle: "Franklin_Pierce",
    description:
      "Franklin Pierce was the 14th president of the United States, serving from 1853 to 1857. A Northern Democrat who regarded the abolitionist movement as a threat to national unity, he signed the 1854 Kansas-Nebraska Act repealing the Missouri Compromise's restrictions on the spread of slavery, igniting the violent \"Bleeding Kansas\" period and shattering the Whig Party. His enforcement of the Fugitive Slave Act drew further outrage from Northern voters, and his own Democratic Party refused to renominate him for a second term.",
    alignment: "evil",
    fallback: { birthYear: 1804, deathYear: 1869 },
  },
  {
    slug: "james-buchanan",
    name: "James Buchanan",
    wikipediaTitle: "James_Buchanan",
    description:
      "James Buchanan Jr. was the 15th president of the United States, serving from 1857 to 1861, and is widely ranked among the worst presidents in American history. He took office shortly before the Supreme Court's Dred Scott decision, which he had privately encouraged, and spent his presidency siding with Southern slaveholders' interests as the country slid toward civil war. By the time he left office, seven Southern states had already seceded from the Union, and his refusal to confront the secessionist movement left the new Lincoln administration to face the unfolding crisis alone.",
    alignment: "evil",
    fallback: { birthYear: 1791, deathYear: 1868 },
  },
  {
    slug: "william-henry-harrison",
    name: "William Henry Harrison",
    wikipediaTitle: "William_Henry_Harrison",
    description:
      "William Henry Harrison was the ninth president of the United States, serving for just 31 days in March and April 1841 before dying in office, the shortest presidential tenure in U.S. history. His pre-presidential career as territorial governor of Indiana and U.S. Army general was built on aggressive military campaigns against Native peoples, including the Battle of Tippecanoe in 1811 and his command at the Battle of the Thames in 1813, which killed Tecumseh and broke the pan-tribal confederacy resisting U.S. expansion. His election made his grandson Benjamin Harrison the only U.S. president directly descended from a previous president.",
    alignment: "evil",
    fallback: { birthYear: 1773, deathYear: 1841 },
  },
  {
    slug: "william-mckinley",
    name: "William McKinley",
    wikipediaTitle: "William_McKinley",
    description:
      "William McKinley was the 25th president of the United States, serving from 1897 until his assassination in 1901. He led the United States into the 1898 Spanish–American War on the contested pretext of the explosion of the USS Maine, and the resulting peace settlement gave the U.S. control of Puerto Rico, Guam, and the Philippines, in addition to the simultaneous annexation of Hawaii. The subsequent Philippine–American War to suppress Filipino independence killed an estimated 200,000 to 750,000 Filipino civilians and inaugurated formal U.S. overseas empire.",
    alignment: "evil",
    fallback: { birthYear: 1843, deathYear: 1901 },
  },
  {
    slug: "woodrow-wilson",
    name: "Woodrow Wilson",
    wikipediaTitle: "Woodrow_Wilson",
    description:
      "Thomas Woodrow Wilson was the 28th president of the United States, serving from 1913 to 1921, and led the country into the First World War in 1917. As president he ordered the resegregation of the federal civil service, throwing thousands of Black federal employees out of work or into segregated office spaces, and screened the explicitly white-supremacist film The Birth of a Nation at the White House in 1915, lending his prestige to its narrative. His administration jailed political dissidents under the 1917 Espionage Act and 1918 Sedition Act for opposing the war, while he also vetoed federal anti-lynching legislation.",
    alignment: "evil",
    fallback: { birthYear: 1856, deathYear: 1924 },
  },
  {
    slug: "william-howard-taft",
    name: "William Howard Taft",
    wikipediaTitle: "William_Howard_Taft",
    description:
      "William Howard Taft was the 27th president of the United States from 1909 to 1913 and the tenth chief justice of the United States from 1921 to 1930, the only person ever to have held both offices. As governor of the Philippines from 1901 to 1903 he presided over the brutal U.S. counterinsurgency that followed the Spanish–American War, and as Chief Justice he authored opinions that consistently favored corporate interests over labor and civil-rights claimants. His massive girth—he was the heaviest president in U.S. history—has overshadowed in popular memory his role in expanding U.S. corporate power and global reach.",
    alignment: "evil",
    fallback: { birthYear: 1857, deathYear: 1930 },
  },
  {
    slug: "warren-g-harding",
    name: "Warren G. Harding",
    wikipediaTitle: "Warren_G._Harding",
    description:
      "Warren Gamaliel Harding was the 29th president of the United States, serving from 1921 until his death in office in August 1923. His administration was engulfed by the Teapot Dome scandal, in which Interior Secretary Albert B. Fall accepted bribes to lease federal oil reserves to private companies; Fall became the first U.S. cabinet official ever convicted and imprisoned for crimes committed in office. Harding had multiple extramarital affairs, including a long relationship with Nan Britton that produced a daughter who was confirmed by DNA testing in 2015 to be his.",
    alignment: "evil",
    fallback: { birthYear: 1865, deathYear: 1923 },
  },
  {
    slug: "calvin-coolidge",
    name: "Calvin Coolidge",
    wikipediaTitle: "Calvin_Coolidge",
    description:
      "Calvin Coolidge was the 30th president of the United States, serving from 1923 to 1929 after the death of Warren G. Harding elevated him from the vice presidency. His presidency entrenched the laissez-faire economic philosophy summed up in his line that \"the chief business of the American people is business,\" cutting taxes for the wealthy and refusing to intervene in the speculative excess that culminated in the 1929 stock market crash months after he left office. He signed the Indian Citizenship Act in 1924 and the Immigration Act of 1924, the latter setting strict national-origin quotas designed to bar virtually all Asian immigration.",
    alignment: "evil",
    fallback: { birthYear: 1872, deathYear: 1933 },
  },
  {
    slug: "herbert-hoover",
    name: "Herbert Hoover",
    wikipediaTitle: "Herbert_Hoover",
    description:
      "Herbert Clark Hoover was the 31st president of the United States, serving from 1929 to 1933 across the onset and deepening of the Great Depression. His insistence that federal relief would erode self-reliance left millions of Americans without aid as unemployment rose past 25 percent, and his signing of the 1930 Smoot-Hawley Tariff Act helped trigger a global trade collapse. In July 1932 he ordered the U.S. Army under General Douglas MacArthur to clear with cavalry, infantry, tanks, and tear gas the Bonus Army of Great War veterans encamped on the National Mall demanding promised pensions.",
    alignment: "evil",
    fallback: { birthYear: 1874, deathYear: 1964 },
  },
  {
    slug: "harry-truman",
    name: "Harry Truman",
    wikipediaTitle: "Harry_S._Truman",
    description:
      "Harry S. Truman was the 33rd president of the United States, serving from 1945 to 1953 after assuming office on the death of Franklin D. Roosevelt. In August 1945 he ordered the use of atomic weapons against the Japanese cities of Hiroshima and Nagasaki, immediately killing more than 100,000 civilians and ushering in the nuclear age. He also presided over the early Cold War expansion of the national security state through the National Security Act of 1947 and the establishment of the CIA, and committed the United States to the Korean War in 1950 without a congressional declaration of war.",
    alignment: "evil",
    fallback: { birthYear: 1884, deathYear: 1972 },
  },
  {
    slug: "spiro-agnew",
    name: "Spiro Agnew",
    wikipediaTitle: "Spiro_Agnew",
    description:
      "Spiro Theodore Agnew was the 39th vice president of the United States, serving under Richard Nixon from 1969 until his October 1973 resignation as part of a plea deal that allowed him to avoid prison time on tax evasion charges and bribery accusations dating to his time as Maryland's governor. Federal prosecutors had documented that he had taken cash bribes from contractors in his Baltimore County executive's office and continued accepting payments in cash envelopes inside the White House. He left office on the same day he pleaded no contest to a single tax-evasion charge.",
    alignment: "evil",
    fallback: { birthYear: 1918, deathYear: 1996 },
  },
  {
    slug: "dan-quayle",
    name: "Dan Quayle",
    wikipediaTitle: "Dan_Quayle",
    description:
      "James Danforth Quayle is an American retired politician who served as the 44th vice president of the United States from 1989 to 1993 under President George H. W. Bush, after representing Indiana in the U.S. House and Senate. Widely mocked during his vice presidency for verbal mistakes—most famously for adding an unnecessary \"e\" to a 12-year-old's correct spelling of \"potato\" at a 1992 Trenton, New Jersey elementary school spelling bee—he became a defining figure of perceived political mediocrity. His one-sided 1988 vice-presidential debate exchange with Lloyd Bentsen produced the lasting line \"Senator, you're no Jack Kennedy.\"",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "joe-lieberman",
    name: "Joe Lieberman",
    wikipediaTitle: "Joe_Lieberman",
    description:
      "Joseph Isadore Lieberman was an American politician who represented Connecticut in the U.S. Senate from 1989 to 2013 and was the Democratic Party's vice presidential nominee on Al Gore's ticket in 2000. After endorsing Republican John McCain over fellow Democrat Barack Obama in the 2008 presidential election, he was instrumental in stripping the public option from the 2010 Affordable Care Act, threatening to kill the bill if a public insurance alternative remained. In retirement he chaired the centrist No Labels organization that explored a third-party 2024 presidential bid widely projected by analysts to draw votes from Joe Biden.",
    alignment: "evil",
    fallback: { birthYear: 1942, deathYear: 2024 },
  },
  {
    slug: "john-edwards",
    name: "John Edwards",
    wikipediaTitle: "John_Edwards",
    description:
      "Johnny Reid Edwards is an American lawyer and former politician who represented North Carolina in the U.S. Senate from 1999 to 2005 and was the Democratic Party's vice presidential nominee on John Kerry's ticket in 2004. While running for president in 2008 he conducted an extramarital affair with campaign videographer Rielle Hunter that produced a child, even as his wife Elizabeth was being treated for terminal breast cancer. He was indicted in 2011 on six federal felony counts of campaign-finance violations for using donor money to conceal the affair; the case ended with one acquittal and a hung jury on the remaining counts.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: null },
  },
  {
    slug: "anthony-weiner",
    name: "Anthony Weiner",
    wikipediaTitle: "Anthony_Weiner",
    description:
      "Anthony David Weiner is an American politician and registered sex offender who represented New York City in the U.S. House of Representatives from 1999 to 2011 before resigning over the first of multiple sexting scandals. In 2017 he pleaded guilty in federal court to transferring obscene material to a 15-year-old North Carolina girl and was sentenced to 21 months in federal prison. The discovery of additional emails on his laptop during the FBI investigation led to FBI director James Comey's late-October 2016 letter to Congress reopening the Hillary Clinton email inquiry, an intervention widely cited as a contributor to her loss in the 2016 election.",
    alignment: "evil",
    fallback: { birthYear: 1964, deathYear: null },
  },
  {
    slug: "eliot-spitzer",
    name: "Eliot Spitzer",
    wikipediaTitle: "Eliot_Spitzer",
    description:
      "Eliot Laurence Spitzer is an American politician and attorney who served as the 54th governor of New York from 2007 to 2008 and previously as the state's attorney general from 1999 to 2006. He resigned the governorship in March 2008 after federal investigators identified him as Client 9 of the Emperors Club VIP escort service, having spent tens of thousands of dollars on prostitutes while as attorney general he had aggressively prosecuted prostitution rings. He has since attempted media careers as a CNN, Current TV, and Spitzer-and-Kudlow co-host but has not returned to elected office.",
    alignment: "evil",
    fallback: { birthYear: 1959, deathYear: null },
  },
  {
    slug: "john-conyers",
    name: "John Conyers",
    wikipediaTitle: "John_Conyers",
    description:
      "John James Conyers Jr. was an American politician who represented Michigan in the U.S. House of Representatives from 1965 to 2017, becoming the longest-serving African American member of Congress in history. He resigned in December 2017 after multiple former staff members publicly accused him of sexual harassment and after BuzzFeed News revealed that he had used $27,000 in taxpayer funds to settle a 2015 sexual-harassment complaint by a former staffer. He had earlier built a long civil-rights record, including chairing the House Judiciary Committee and authoring the bill to establish the federal Martin Luther King Jr. holiday.",
    alignment: "evil",
    fallback: { birthYear: 1929, deathYear: 2019 },
  },
  {
    slug: "charlie-rangel",
    name: "Charlie Rangel",
    wikipediaTitle: "Charles_Rangel",
    description:
      "Charles Bernard Rangel was an American politician who represented Harlem and surrounding districts in the U.S. House of Representatives from 1971 to 2017. As chairman of the powerful House Ways and Means Committee, the chamber's tax-writing body, he was censured by the full House in December 2010 over 11 ethics violations, including failure to pay federal income taxes on a Dominican Republic vacation home and the misuse of a rent-stabilized Harlem apartment as a campaign office. The censure made him the first House member in nearly three decades to be formally rebuked on the chamber floor, and forced his ouster from the Ways and Means chair.",
    alignment: "evil",
    fallback: { birthYear: 1930, deathYear: 2025 },
  },
  {
    slug: "pat-buchanan",
    name: "Pat Buchanan",
    wikipediaTitle: "Pat_Buchanan",
    description:
      "Patrick Joseph Buchanan is an American author and political commentator who served as a senior aide to Presidents Richard Nixon, Gerald Ford, and Ronald Reagan, then ran for the Republican presidential nomination in 1992 and 1996 and the Reform Party nomination in 2000. His paleoconservative \"culture war\" speech at the 1992 Republican National Convention helped define the modern white-grievance, anti-immigrant, isolationist political lane that Donald Trump later used as the foundation for his own movement. He has written extensively in defense of historical figures and movements—including Adolf Hitler's geopolitical strategy and the Confederate cause—drawing decades of accusations of antisemitism and racial nostalgia.",
    alignment: "evil",
    fallback: { birthYear: 1938, deathYear: null },
  },
  {
    slug: "ross-perot",
    name: "Ross Perot",
    wikipediaTitle: "Ross_Perot",
    description:
      "Henry Ross Perot was an American billionaire businessman who founded Electronic Data Systems and Perot Systems, and ran for U.S. president as an independent in 1992 and as the Reform Party nominee in 1996. His 1992 campaign won 18.9 percent of the popular vote, the strongest showing by a non-major-party candidate since Theodore Roosevelt in 1912, and is widely credited with helping deliver the presidency to Bill Clinton over incumbent George H. W. Bush. His warnings of a \"giant sucking sound\" of jobs leaving for Mexico under NAFTA presaged later populist economic critiques on both the right and the left.",
    alignment: "evil",
    fallback: { birthYear: 1930, deathYear: 2019 },
  },
  {
    slug: "h-ross-perot-jr",
    name: "H. Ross Perot Jr.",
    wikipediaTitle: "Ross_Perot_Jr.",
    description:
      "Henry Ross Perot Jr. is an American real-estate developer and businessman who chairs The Perot Group and Hillwood, the firm that developed Alliance, Texas—an inland port and industrial campus near Fort Worth. At age 23 he completed the first circumnavigation of the world by helicopter. The eldest child of billionaire Ross Perot, he has continued to manage the family's real-estate, sports, and venture-capital holdings.",
    alignment: "evil",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "bobby-jindal",
    name: "Bobby Jindal",
    wikipediaTitle: "Bobby_Jindal",
    description:
      "Bobby Jindal, born Piyush Jindal, is an American politician who served as the 55th governor of Louisiana from 2008 to 2016, becoming the first Indian American to serve as a U.S. governor. His tenure produced sustained budget cuts to public higher education and the state's mental-health and child-welfare systems, and Louisiana ended his second term with one of the largest projected budget deficits in its history. His 2016 presidential campaign, launched as the GOP's would-be \"diversity\" candidate, polled near zero throughout and was suspended after just five months.",
    alignment: "evil",
    fallback: { birthYear: 1971, deathYear: null },
  },
  {
    slug: "mike-huckabee",
    name: "Mike Huckabee",
    wikipediaTitle: "Mike_Huckabee",
    description:
      "Michael Dale Huckabee is an American politician and Baptist minister who served as the 44th governor of Arkansas from 1996 to 2007 and has been the 29th U.S. ambassador to Israel since 2025. He has used his political and television platforms to oppose marriage equality and abortion rights and to defend Donald Trump throughout multiple criminal indictments. He is the father of Sarah Huckabee Sanders, the current governor of Arkansas, and after his 2008 and 2016 presidential bids became a Christian-Zionist commentator on Fox News.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "tim-pawlenty",
    name: "Tim Pawlenty",
    wikipediaTitle: "Tim_Pawlenty",
    description:
      "Timothy James Pawlenty is an American politician and lobbyist who served as the 39th governor of Minnesota from 2003 to 2011. As governor he vetoed a 2009 bill that would have legalized same-sex marriage in Minnesota and pushed budget cuts that drew sustained criticism from Democrats and the courts, while ultimately leaving the state with one of the largest deficits in its history. After his short-lived 2012 presidential bid he became a financial-industry lobbyist as president of the Financial Services Roundtable from 2012 to 2017.",
    alignment: "evil",
    fallback: { birthYear: 1960, deathYear: null },
  },
  {
    slug: "tom-delay",
    name: "Tom DeLay",
    wikipediaTitle: "Tom_DeLay",
    description:
      "Thomas Dale DeLay is an American retired politician who represented Texas's 22nd congressional district in the U.S. House from 1985 to 2006 and served as House Majority Leader from 2003 to 2005, known as \"the Hammer\" for his aggressive whip operation. In 2010 a Texas jury convicted him of money laundering and conspiracy in connection with funneling corporate contributions to state legislative candidates in 2002, but his convictions were overturned by an appellate court in 2013 on grounds that the evidence was legally insufficient. He resigned his House seat in 2006 amid the related criminal investigations.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "tom-daschle",
    name: "Tom Daschle",
    wikipediaTitle: "Tom_Daschle",
    description:
      "Thomas Andrew Daschle is an American politician and lobbyist who represented South Dakota in the U.S. Senate from 1987 to 2005 and led the Senate Democratic Caucus for 10 years, including time as both Majority and Minority Leader. After leaving the Senate he was nominated by President Barack Obama as Secretary of Health and Human Services but withdrew his name in February 2009 after disclosure that he had failed to pay more than $128,000 in federal income taxes on personal use of a chauffeured car provided by a private equity firm where he was a paid consultant. He has continued to work as a high-paid healthcare-industry lobbyist.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "joe-manchin",
    name: "Joe Manchin",
    wikipediaTitle: "Joe_Manchin",
    description:
      "Joseph Anthony Manchin III is an American politician and businessman from West Virginia who served as a U.S. senator from 2010 to 2025, originally as a Democrat and later as an independent. He repeatedly used his pivotal vote in the evenly divided 2021–2023 Senate to block or substantially weaken core elements of President Joe Biden's domestic agenda, including the Build Back Better Act, federal voting-rights legislation, and a $15 federal minimum wage. His personal fortune is largely tied to a coal brokerage in West Virginia that has been at the center of much of the legislation he helped shape.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "kyrsten-sinema",
    name: "Kyrsten Sinema",
    wikipediaTitle: "Kyrsten_Sinema",
    description:
      "Kyrsten Lea Sinema is an American politician and former social worker who served as a U.S. senator from Arizona from 2019 to 2025, leaving the Democratic Party to become an independent in late 2022. After campaigning for the Senate as a progressive, she joined Joe Manchin in repeatedly blocking carve-outs to the filibuster that would have allowed federal voting-rights and union-protection bills to pass with a simple majority, and famously voted against a $15 minimum wage with a curtsying thumbs-down on the Senate floor. She did not seek re-election in 2024 and has since become a corporate consultant.",
    alignment: "evil",
    fallback: { birthYear: 1976, deathYear: null },
  },
  {
    slug: "henry-cuellar",
    name: "Henry Cuellar",
    wikipediaTitle: "Henry_Cuellar",
    description:
      "Enrique Roberto \"Henry\" Cuellar is an American politician serving as a U.S. representative for Texas's 28th congressional district since 2005. He was indicted in May 2024 by federal prosecutors on charges of bribery, money laundering, and acting as a foreign agent for the Republic of Azerbaijan and a Mexican commercial bank, accused of accepting roughly $600,000 in bribes through shell companies controlled by his wife. He is one of the last anti-abortion Democrats serving in Congress.",
    alignment: "evil",
    fallback: { birthYear: 1955, deathYear: null },
  },
  {
    slug: "george-santos",
    name: "George Santos",
    wikipediaTitle: "George_Santos",
    description:
      "George Anthony Devolder Santos is a former U.S. representative from New York's 3rd congressional district who served from January to December 2023, when he was expelled from the House by a vote of 311–114. Federal prosecutors charged him with 23 felony counts including wire fraud, money laundering, theft of public funds, and identity theft, and he ultimately pleaded guilty in August 2024 to two counts of wire fraud and aggravated identity theft, agreeing to repay more than $370,000. His campaign biography fabrications—claiming Wall Street jobs he never held, a college education that never happened, a Jewish identity he never had, and family who died on 9/11 and in the Holocaust—became national emblems of public-figure dishonesty.",
    alignment: "evil",
    fallback: { birthYear: 1988, deathYear: null },
  },
  {
    slug: "madison-cawthorn",
    name: "Madison Cawthorn",
    wikipediaTitle: "Madison_Cawthorn",
    description:
      "David Madison Cawthorn is a former U.S. representative from North Carolina's 11th congressional district who served from 2021 to 2023 after becoming, at 25, the youngest member of Congress at the time of his swearing-in. He lost the 2022 Republican primary amid revelations of insider stock trading, accusations of cocaine and orgy use among his Capitol Hill colleagues, two arrests at airports for attempting to bring loaded firearms through TSA security, and the leak of sexually explicit photographs and videos from his personal devices. He was forbidden by court order from contacting fellow Republicans for harassment after his primary loss.",
    alignment: "evil",
    fallback: { birthYear: 1995, deathYear: null },
  },
  {
    slug: "aaron-schock",
    name: "Aaron Schock",
    wikipediaTitle: "Aaron_Schock",
    description:
      "Aaron Jon Schock is a former U.S. representative from Illinois who served from 2009 until his resignation in March 2015 amid a scandal involving his use of public and campaign funds. The fallout included his use of taxpayer money to redecorate his Capitol Hill office in the style of the British period drama Downton Abbey, and a federal indictment in 2016 on 24 counts including wire fraud, mail fraud, and falsification of records, ultimately resolved with a deferred-prosecution agreement and his repayment of more than $50,000. He came out as gay in 2020.",
    alignment: "evil",
    fallback: { birthYear: 1981, deathYear: null },
  },
  {
    slug: "mark-foley",
    name: "Mark Foley",
    wikipediaTitle: "Mark_Foley",
    description:
      "Mark Adam Foley is a former U.S. representative from Florida who served from 1995 until his resignation in September 2006 over the disclosure of sexually explicit instant messages he had sent to teenage congressional pages. As co-chair of the House Caucus on Missing and Exploited Children, he had built a public profile on protecting minors from online sexual predators while privately soliciting teenage boys who had served as pages in his own chamber. The scandal contributed to the Republican Party's loss of the House in the 2006 midterm elections.",
    alignment: "evil",
    fallback: { birthYear: 1954, deathYear: null },
  },
  {
    slug: "larry-craig",
    name: "Larry Craig",
    wikipediaTitle: "Larry_Craig",
    description:
      "Lawrence Edwin Craig is an American retired politician from Idaho who represented the state in the U.S. Senate from 1991 to 2009. In June 2007 he was arrested in a sting operation by an undercover police officer in a men's bathroom at the Minneapolis-St. Paul International Airport and pleaded guilty to disorderly conduct, and his subsequent attempts to withdraw the plea were rejected by Minnesota courts. Throughout his career he had compiled one of the most consistently anti-LGBTQ voting records in the Senate, including support for the Defense of Marriage Act and a federal constitutional amendment to ban same-sex marriage.",
    alignment: "evil",
    fallback: { birthYear: 1945, deathYear: null },
  },
  {
    slug: "david-vitter",
    name: "David Vitter",
    wikipediaTitle: "David_Vitter",
    description:
      "David Bruce Vitter is a former U.S. senator from Louisiana who served from 2005 to 2017. In 2007 his name and home telephone number were found in the records of the District of Columbia's Madam, Deborah Jeane Palfrey, prompting his public acknowledgment of \"a very serious sin in my past\" and an apology alongside his wife at a televised press conference. He had built his political identity on \"family values\" rhetoric and continued to be re-elected after the scandal before losing the 2015 Louisiana governor's race to Democrat John Bel Edwards.",
    alignment: "evil",
    fallback: { birthYear: 1961, deathYear: null },
  },
  {
    slug: "roy-moore",
    name: "Roy Moore",
    wikipediaTitle: "Roy_Moore",
    description:
      "Roy Stewart Moore is an American politician and former judge who served twice as Chief Justice of the Alabama Supreme Court—1995 to 2003 and 2013 to 2017—and was twice removed from that office for judicial misconduct, first for refusing to comply with a federal court order to remove a Ten Commandments monument and second for ordering Alabama judges to defy the U.S. Supreme Court's marriage-equality ruling. He was the Republican Party nominee in the 2017 special U.S. Senate election after multiple women publicly accused him of having pursued or sexually assaulted them when they were teenagers and he was a county prosecutor in his thirties; he lost the special election to Democrat Doug Jones.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "joe-arpaio",
    name: "Joe Arpaio",
    wikipediaTitle: "Joe_Arpaio",
    description:
      "Joseph Michael Arpaio is an American former law-enforcement officer who served as Sheriff of Maricopa County, Arizona from 1993 to 2017 and built a national profile as \"America's Toughest Sheriff\" through aggressive immigration sweeps and a tent-city outdoor jail in 100-degree-plus desert heat. In 2017 he was found guilty of criminal contempt of court for defying a federal judge's order to stop racially profiling Latinos in his patrols, the first conviction of his kind in the nation. President Donald Trump pardoned him weeks later.",
    alignment: "evil",
    fallback: { birthYear: 1932, deathYear: null },
  },
  {
    slug: "sheriff-mark-lamb",
    name: "Sheriff Mark Lamb",
    wikipediaTitle: "Mark_Lamb_(sheriff)",
    description:
      "Mark Lamb is an American former law-enforcement officer who served as Sheriff of Pinal County, Arizona, from 2017 to 2024 and built a national profile within the right-wing media ecosystem as a vocal supporter of Donald Trump's anti-immigration policies. He used his elected office and a self-produced reality television series to fundraise for a failed 2024 Arizona Republican U.S. Senate primary campaign. He has continued to appear on conservative cable programs as a pundit on border and election-integrity issues.",
    alignment: "evil",
    fallback: { birthYear: 1972, deathYear: null },
  },
  {
    slug: "robert-e-lee",
    name: "Robert E. Lee",
    wikipediaTitle: "Robert_E._Lee",
    description:
      "Robert Edward Lee was a Confederate general who served as the senior commander of the Army of Northern Virginia from 1862 until its surrender at Appomattox in April 1865, and was named overall commander of the Confederate States Army in the war's final months. A career U.S. Army officer who had taken an oath to defend the Constitution, he resigned that commission in 1861 to take up arms against the United States in defense of slavery in his home state of Virginia. As an enslaver and as commander of an army defending the institution, he ordered the brutal recapture of escaped enslaved workers and the kidnapping of free Black civilians during the Confederate invasion of Pennsylvania in 1863.",
    alignment: "evil",
    fallback: { birthYear: 1807, deathYear: 1870 },
  },
  {
    slug: "stonewall-jackson",
    name: "Stonewall Jackson",
    wikipediaTitle: "Stonewall_Jackson",
    description:
      "Thomas Jonathan \"Stonewall\" Jackson was a Confederate general who served as one of Robert E. Lee's principal subordinates in the Army of Northern Virginia from 1862 until his death after the Battle of Chancellorsville in May 1863. A career U.S. Army officer turned defender of the slaveholding South, his decisive flanking maneuver at Chancellorsville produced one of the Confederacy's most lopsided victories of the Civil War. He was struck by friendly fire from his own troops while reconnoitering the field at night and died eight days later of pneumonia complicating his surgery.",
    alignment: "evil",
    fallback: { birthYear: 1824, deathYear: 1863 },
  },
  {
    slug: "jefferson-davis",
    name: "Jefferson Davis",
    wikipediaTitle: "Jefferson_Davis",
    description:
      "Jefferson F. Davis was the only president of the Confederate States of America, serving from 1861 until the collapse of the Confederacy in 1865 in defense of the institution of slavery. A former U.S. senator from Mississippi and U.S. Secretary of War, he was a lifelong slaveholder whose Brierfield plantation enslaved more than 100 people. Captured by Union forces in May 1865, he was indicted for treason, imprisoned for two years at Fort Monroe, and ultimately released without trial; the U.S. government never re-extended him a pardon, and Mississippi schoolchildren continue to pass roadside markers honoring him.",
    alignment: "evil",
    fallback: { birthYear: 1808, deathYear: 1889 },
  },
  {
    slug: "nathan-bedford-forrest",
    name: "Nathan Bedford Forrest",
    wikipediaTitle: "Nathan_Bedford_Forrest",
    description:
      "Nathan Bedford Forrest was a Confederate general, slave trader, and the first Grand Wizard of the Reconstruction-era Ku Klux Klan from 1867 to 1869. Before the Civil War he amassed substantial wealth as one of the largest enslavers and slave dealers in Memphis, Tennessee. His command at the April 1864 Battle of Fort Pillow oversaw the massacre of more than 200 surrendering Black Union soldiers and white Tennessee Unionists, an atrocity the U.S. Congress documented in detail and that came to symbolize the Confederate war on Black freedom.",
    alignment: "evil",
    fallback: { birthYear: 1821, deathYear: 1877 },
  },
  {
    slug: "douglas-macarthur",
    name: "Douglas MacArthur",
    wikipediaTitle: "Douglas_MacArthur",
    description:
      "Douglas MacArthur was an American general who served as a top commander in the Pacific theater of World War II and as supreme commander of United Nations forces in the Korean War. As Army Chief of Staff in 1932 he led the violent expulsion of the Bonus Army of Great War veterans from the Mall in Washington, D.C., using cavalry, infantry, tanks, and tear gas. As UN commander in Korea he repeatedly defied orders from President Harry S. Truman to limit the conflict—publicly advocating the use of atomic weapons against Chinese forces—and was relieved of command in April 1951 in one of the most decisive civilian rebukes of an American military commander in the country's history.",
    alignment: "evil",
    fallback: { birthYear: 1880, deathYear: 1964 },
  },
  {
    slug: "william-westmoreland",
    name: "William Westmoreland",
    wikipediaTitle: "William_Westmoreland",
    description:
      "William Childs Westmoreland was a U.S. Army general who commanded American forces in the Vietnam War from 1964 to 1968 and later served as Chief of Staff of the U.S. Army from 1968 to 1972. He repeatedly assured Congress and the American public that the war was being won—including a famous 1967 speech to the National Press Club declaring the enemy near collapse—weeks before the 1968 Tet Offensive shattered that narrative. His command oversaw the body-count strategy and the search-and-destroy operations of which the My Lai massacre and many similar atrocities were a part.",
    alignment: "evil",
    fallback: { birthYear: 1914, deathYear: 2005 },
  },
  {
    slug: "curtis-lemay",
    name: "Curtis LeMay",
    wikipediaTitle: "Curtis_LeMay",
    description:
      "Curtis Emerson LeMay was a U.S. Air Force general who served as Chief of Staff of the U.S. Air Force from 1961 to 1965. As commander of the XX and XXI Bomber Commands during World War II he ordered the firebombing of 67 Japanese cities including the March 1945 raid on Tokyo that killed an estimated 100,000 civilians in a single night, and as a senior strategic-air-command planner during the early Cold War he urged a preemptive nuclear strike on the Soviet Union. He ran for vice president in 1968 as the running mate of segregationist George Wallace on the American Independent Party ticket.",
    alignment: "evil",
    fallback: { birthYear: 1906, deathYear: 1990 },
  },
  {
    slug: "alexander-the-great",
    name: "Alexander the Great",
    wikipediaTitle: "Alexander_the_Great",
    description:
      "Alexander III of Macedon, known as Alexander the Great, was king of the ancient Greek kingdom of Macedon who in his short reign from 336 to 323 BC built one of the largest empires in the ancient world, stretching from Greece to northwestern India. His campaigns produced repeated mass slaughter of civilians and the destruction of cities including Thebes, Tyre, and Persepolis—the latter set ablaze in 330 BC—and the foundation of more than twenty cities, many bearing his name. He died at age 32 in Babylon under disputed medical circumstances, and his empire fragmented within a generation among his quarreling generals.",
    alignment: "evil",
    fallback: { birthYear: -356, deathYear: -323 },
  },
  {
    slug: "julius-caesar",
    name: "Julius Caesar",
    wikipediaTitle: "Julius_Caesar",
    description:
      "Gaius Julius Caesar was a Roman general and statesman whose military and political career destroyed the Roman Republic and laid the institutional foundations for the imperial system that followed. His Gallic Wars from 58 to 50 BC killed an estimated million Gallic civilians and combatants by his own count and enslaved a similar number, and his 49 BC crossing of the Rubicon with his army initiated the civil war that ended the Republic. He had himself proclaimed dictator perpetuo in early 44 BC and was assassinated by senators in March of that year.",
    alignment: "evil",
    fallback: { birthYear: -100, deathYear: -44 },
  },
  {
    slug: "mark-antony",
    name: "Mark Antony",
    wikipediaTitle: "Mark_Antony",
    description:
      "Marcus Antonius, commonly known as Mark Antony, was a Roman general and politician who, alongside Octavian and Lepidus, formed the Second Triumvirate that overthrew Julius Caesar's assassins in 43 BC and dictated the political settlement that ended the Roman Republic. The proscriptions he enacted with Octavian killed thousands of senators and equestrians, including Cicero. After his subsequent break with Octavian and his alliance with Cleopatra of Egypt, he was defeated at the Battle of Actium in 31 BC and committed suicide in Alexandria the following year.",
    alignment: "evil",
    fallback: { birthYear: -83, deathYear: -30 },
  },
  {
    slug: "augustus-caesar",
    name: "Augustus Caesar",
    wikipediaTitle: "Augustus",
    description:
      "Caesar Augustus, born Gaius Octavius and known as Octavian before his transformation, was the founder of the Roman Empire and its first emperor from 27 BC until his death in AD 14. He came to power through the proscriptions of the Second Triumvirate, which executed thousands of his political enemies and confiscated their estates, and he ended the Roman Republic by accumulating the formal powers of consul, tribune, and imperator into the office of princeps. His reign initiated the deification of the emperor and the imperial cult that would shape Roman politics and Western political theology for centuries.",
    alignment: "evil",
    fallback: { birthYear: -63, deathYear: 14 },
  },
  {
    slug: "constantine-the-great",
    name: "Constantine the Great",
    wikipediaTitle: "Constantine_the_Great",
    description:
      "Constantine I, known as Constantine the Great, was Roman emperor from AD 306 to 337 and is best known as the first Roman emperor to convert to Christianity, issuing the 313 Edict of Milan that legalized the religion and inaugurating its alliance with imperial power. His private life was no less violent than his predecessors': in AD 326 he ordered the executions of his eldest son Crispus and his second wife Fausta on disputed charges. The construction of his new eastern capital, Constantinople, and the Council of Nicaea he convened in 325 cemented the institutional foundation of medieval Christianity.",
    alignment: "evil",
    fallback: { birthYear: 272, deathYear: 337 },
  },
  {
    slug: "alaric-i",
    name: "Alaric I",
    wikipediaTitle: "Alaric_I",
    description:
      "Alaric I was the first king of the Visigoths, ruling from 395 until his death in 410, and the commander of the army that sacked Rome in August 410—the first time in nearly eight centuries that the city had fallen to a hostile force. The three-day plunder of Rome shocked the late ancient world and prompted Augustine of Hippo to begin writing The City of God in response. He died of a fever in southern Italy weeks later and is, according to legend, buried with his loot in the diverted bed of the Busento River near Cosenza.",
    alignment: "evil",
    fallback: { birthYear: 370, deathYear: 410 },
  },
  {
    slug: "charlemagne",
    name: "Charlemagne",
    wikipediaTitle: "Charlemagne",
    description:
      "Charlemagne was King of the Franks from 768 and was crowned the first Holy Roman Emperor in Rome on Christmas Day 800. His decades-long Saxon Wars to forcibly convert the pagan Saxons culminated in the 782 Massacre of Verden, in which he reportedly ordered the beheading of 4,500 captives in a single day. His Carolingian Empire briefly reunited much of Western Europe and laid the foundations for the political and religious geography of the medieval West.",
    alignment: "evil",
    fallback: { birthYear: 748, deathYear: 814 },
  },
  {
    slug: "william-the-conqueror",
    name: "William the Conqueror",
    wikipediaTitle: "William_the_Conqueror",
    description:
      "William the Conqueror was the first Norman King of England, reigning from 1066 until his death in 1087, after defeating Anglo-Saxon king Harold II at the Battle of Hastings on 14 October 1066. His invasion replaced the Anglo-Saxon ruling class with a new Norman aristocracy and rebuilt English landholding, law, and language around continental models. From 1069 to 1070 his Harrying of the North—a scorched-earth campaign to suppress northern revolts—deliberately destroyed crops, livestock, and shelter and is estimated to have killed 100,000 or more people through famine in its immediate aftermath.",
    alignment: "evil",
    fallback: { birthYear: 1028, deathYear: 1087 },
  },
  {
    slug: "richard-the-lionheart",
    name: "Richard the Lionheart",
    wikipediaTitle: "Richard_I_of_England",
    description:
      "Richard I, known as Richard the Lionheart, was King of England from 1189 to 1199 and one of the most aggressive of the Crusader kings. During the Third Crusade in 1191, after his troops captured the Mediterranean port of Acre, he ordered the execution of approximately 2,700 Muslim prisoners of war—men, women, and children—in full view of Saladin's army. He spent only six months of his ten-year reign in England, taxing the kingdom into ruin to fund his Crusader campaigns and his European wars.",
    alignment: "evil",
    fallback: { birthYear: 1157, deathYear: 1199 },
  },
  {
    slug: "edward-i",
    name: "Edward I",
    wikipediaTitle: "Edward_I",
    description:
      "Edward I, known as Edward Longshanks and the Hammer of the Scots, was King of England from 1272 to 1307. He waged a series of brutal conquests of Wales—building the great chain of Welsh castles to garrison the country—and Scotland, where he ordered the public hanging, drawing, and quartering of Scottish leader William Wallace in 1305. In 1290 his Edict of Expulsion ordered all Jews to leave England, the first such national expulsion in Europe; the order remained in effect for more than three and a half centuries.",
    alignment: "evil",
    fallback: { birthYear: 1239, deathYear: 1307 },
  },
  {
    slug: "mehmed-the-conqueror",
    name: "Mehmed the Conqueror",
    wikipediaTitle: "Mehmed_II",
    description:
      "Mehmed II, known as Mehmed the Conqueror, was the Ottoman sultan from 1444 to 1446 and again from 1451 to 1481, who at age 21 captured Constantinople on 29 May 1453, ending more than a thousand years of Byzantine rule. The siege culminated in the canonical three days of permitted sack of the city, including widespread rape, killing, and enslavement of its surviving inhabitants. He went on to conquer Serbia, Bosnia, and Albania and to lay the foundation for the Ottoman Empire's three-continent reach.",
    alignment: "evil",
    fallback: { birthYear: 1432, deathYear: 1481 },
  },
  {
    slug: "suleiman-the-magnificent",
    name: "Suleiman the Magnificent",
    wikipediaTitle: "Suleiman_the_Magnificent",
    description:
      "Suleiman I, known as Suleiman the Magnificent, was the longest-reigning Ottoman sultan, ruling from 1520 to 1566 and presiding over the empire's greatest territorial extent. His armies pushed deep into Hungary and besieged Vienna in 1529, while at sea his admiral Hayreddin Barbarossa ravaged the European Mediterranean coast. To protect his succession from rival heirs, he had his eldest son Mustafa strangled in 1553 in front of his own tent.",
    alignment: "evil",
    fallback: { birthYear: 1494, deathYear: 1566 },
  },
  {
    slug: "henry-vii",
    name: "Henry VII",
    wikipediaTitle: "Henry_VII_of_England",
    description:
      "Henry VII, known as Henry Tudor, was King of England and Lord of Ireland from 1485 until his death in 1509, and the first monarch of the House of Tudor after seizing the crown by defeating Richard III at the Battle of Bosworth Field. He consolidated his shaky claim to the throne through aggressive financial extraction—using bonds, recognizances, and the Council Learned in the Law to extort large sums from his nobility—and through ruthless suppression of pretenders, including the executions of Lambert Simnel's Yorkist sponsors and of Perkin Warbeck. He left an extraordinary fortune to his son Henry VIII alongside a much-feared apparatus of royal taxation.",
    alignment: "evil",
    fallback: { birthYear: 1457, deathYear: 1509 },
  },
  {
    slug: "henry-viii",
    name: "Henry VIII",
    wikipediaTitle: "Henry_VIII",
    description:
      "Henry VIII was King of England from 1509 to 1547 whose desire to annul his marriage to Catherine of Aragon led him to break with the Roman Catholic Church and establish the monarch as Supreme Head of the Church of England, initiating the English Reformation. He married six times in pursuit of a male heir, having his second and fifth wives—Anne Boleyn and Catherine Howard—beheaded on charges of adultery and treason. The Dissolution of the Monasteries he carried out in the 1530s seized the wealth of the English religious houses for the Crown and reshaped the English landed class for centuries.",
    alignment: "evil",
    fallback: { birthYear: 1491, deathYear: 1547 },
  },
  {
    slug: "charles-ii",
    name: "Charles II",
    wikipediaTitle: "Charles_II_of_England",
    description:
      "Charles II was King of Scotland from 1649 and King of England, Scotland, and Ireland from the 1660 Restoration of the monarchy until his death in 1685. He suspended Parliament for periods of his reign in pursuit of a more absolutist Crown, accepted secret subsidies from the Catholic Louis XIV of France through the 1670 Treaty of Dover, and presided over the brutal repression of religious dissent that filled English jails with Quakers, Presbyterians, and Catholics. He died with at least 14 acknowledged illegitimate children but no legitimate heir, leaving the throne to his openly Catholic brother James II and precipitating a fresh constitutional crisis.",
    alignment: "evil",
    fallback: { birthYear: 1630, deathYear: 1685 },
  },
  {
    slug: "james-i-stuart",
    name: "James I (Stuart)",
    wikipediaTitle: "James_VI_and_I",
    description:
      "James VI and I was King of Scotland as James VI from 1567 and King of England and Ireland as James I from 1603 until his death in 1625, the first monarch to rule both kingdoms in personal union. His 1597 treatise Daemonologie helped fuel a wave of witch trials in Scotland and England in which hundreds were executed, and his unsuccessful pursuit of an absolutist royal prerogative laid the groundwork for the constitutional confrontation that would erupt under his son Charles I. His reign also produced the King James Version of the Bible, completed in 1611.",
    alignment: "evil",
    fallback: { birthYear: 1566, deathYear: 1625 },
  },
  {
    slug: "oliver-cromwell",
    name: "Oliver Cromwell",
    wikipediaTitle: "Oliver_Cromwell",
    description:
      "Oliver Cromwell was an English statesman and soldier who as Lord Protector of the Commonwealth ruled England, Scotland, and Ireland from 1653 until his death in 1658, after leading Parliamentarian forces in the English Civil War and signing the death warrant of Charles I in 1649. His 1649 invasion of Ireland produced the massacres at Drogheda and Wexford, in which his New Model Army killed thousands of Catholic soldiers and civilians, and was followed by mass land seizures that displaced Catholic Irish from their estates for generations. His Puritan regime banned Christmas celebrations and shut down London's theaters.",
    alignment: "evil",
    fallback: { birthYear: 1599, deathYear: 1658 },
  },
  {
    slug: "charles-v",
    name: "Charles V",
    wikipediaTitle: "Charles_V,_Holy_Roman_Emperor",
    description:
      "Charles V was Holy Roman Emperor from 1519 to 1556 and King of Spain from 1516 to 1556, presiding over the largest European empire since Charlemagne. His reign coincided with the Spanish conquest of the Aztec and Inca empires under Hernán Cortés and Francisco Pizarro, the destruction of millions of Indigenous lives, and the founding of the transatlantic slave trade between Spanish America and Africa. In 1527 his unpaid armies sacked Rome itself, killing thousands and capturing Pope Clement VII.",
    alignment: "evil",
    fallback: { birthYear: 1500, deathYear: 1558 },
  },
  {
    slug: "maximilian-i",
    name: "Maximilian I",
    wikipediaTitle: "Maximilian_I,_Holy_Roman_Emperor",
    description:
      "Maximilian I was Holy Roman Emperor from 1508 to 1519, and a key architect of Habsburg dynastic power across late-medieval Europe. His marriage and inheritance strategies—including marrying his children and grandchildren into the ruling houses of Spain, Hungary, and Bohemia—produced the multi-continent empire his grandson Charles V would inherit, and underwrote the Spanish funding of the conquistadors. His own decades of warfare, particularly against France in the Italian Wars, drained imperial resources and built his political reputation on aggressive military adventurism.",
    alignment: "evil",
    fallback: { birthYear: 1459, deathYear: 1519 },
  },
  {
    slug: "kublai-khan",
    name: "Kublai Khan",
    wikipediaTitle: "Kublai_Khan",
    description:
      "Kublai Khan was the founder and first emperor of the Yuan dynasty of China, ruling from 1271 until his death in 1294, and a grandson of Genghis Khan. He completed the Mongol conquest of Song China, which took more than four decades of warfare and is estimated by historians to have caused tens of millions of deaths through combat, famine, and forced relocation. His subsequent invasions of Japan in 1274 and 1281 ended in catastrophic naval defeats, with much of his fleet destroyed by typhoons.",
    alignment: "evil",
    fallback: { birthYear: 1215, deathYear: 1294 },
  },
  {
    slug: "louis-xiv",
    name: "Louis XIV",
    wikipediaTitle: "Louis_XIV",
    description:
      "Louis XIV, known as the Sun King, was King of France from 1643 until his death in 1715, presiding over a 72-year reign that remains the longest of any major European sovereign in history. His revocation of the 1598 Edict of Nantes through the 1685 Edict of Fontainebleau ended the legal toleration of French Protestants and drove an estimated 200,000 Huguenots into exile across Europe, devastating French commerce and intellectual life. His decades of war and the construction of the Palace of Versailles bankrupted the French state, leaving the foundations of the financial crisis that would erupt under his great-grandson Louis XVI.",
    alignment: "evil",
    fallback: { birthYear: 1638, deathYear: 1715 },
  },
  {
    slug: "louis-xvi",
    name: "Louis XVI",
    wikipediaTitle: "Louis_XVI",
    description:
      "Louis XVI was the last king of France before the abolition of the monarchy during the French Revolution, reigning from 1774 to 1792. His attempts to flee Paris with his family in June 1791 were halted at Varennes and effectively ended his political authority, while his secret correspondence with Austrian and Prussian armies massing on France's borders convinced the National Convention that he had been conspiring with foreign monarchs against his own state. He was tried for high treason and beheaded by guillotine on 21 January 1793 in what became the Place de la Concorde.",
    alignment: "evil",
    fallback: { birthYear: 1754, deathYear: 1793 },
  },
  {
    slug: "marie-antoinette",
    name: "Marie Antoinette",
    wikipediaTitle: "Marie_Antoinette",
    description:
      "Marie Antoinette was Queen of France as the wife of Louis XVI from 1774 until the abolition of the French monarchy in 1792, having arrived from the Habsburg court in Vienna at the age of 14. Her extravagant personal spending and influence over royal appointments became one of the most prominent grievances against the Bourbon court in the run-up to the French Revolution, and her secret efforts to coordinate Austrian and Prussian intervention against the Revolution in 1791 and 1792 confirmed her opponents' suspicions of treason. She was tried by the Revolutionary Tribunal and beheaded by guillotine on 16 October 1793, nine months after her husband.",
    alignment: "evil",
    fallback: { birthYear: 1755, deathYear: 1793 },
  },
  {
    slug: "napoleon-bonaparte",
    name: "Napoleon Bonaparte",
    wikipediaTitle: "Napoleon",
    description:
      "Napoleon Bonaparte was a French general and statesman who rose through the chaos of the French Revolution to become Emperor of the French from 1804 to 1814 and again briefly in 1815 during the Hundred Days. His Napoleonic Wars across two decades killed an estimated three to six million Europeans, the largest European war death toll until World War I. He restored slavery in France's Caribbean colonies in 1802 after the Revolution had abolished it, sending an army to crush the Haitian Revolution that ultimately succeeded only in producing a free Haiti and the deaths of tens of thousands of his own soldiers.",
    alignment: "evil",
    fallback: { birthYear: 1769, deathYear: 1821 },
  },
  {
    slug: "otto-von-bismarck",
    name: "Otto von Bismarck",
    wikipediaTitle: "Otto_von_Bismarck",
    description:
      "Otto Eduard Leopold von Bismarck was a Prussian and German statesman who oversaw the unification of Germany through three deliberately engineered wars between 1864 and 1871 and served as the first chancellor of the German Empire from 1871 to 1890. His Realpolitik diplomacy—encapsulated in his line that great questions are decided not by speeches and majority votes but by \"blood and iron\"—built the militarized German state whose ambitions would help drive the continent into the catastrophes of the 20th century. As chancellor he also waged the Kulturkampf against the Catholic Church and drove anti-socialist legislation that banned the German Social Democratic Party for more than a decade.",
    alignment: "evil",
    fallback: { birthYear: 1815, deathYear: 1898 },
  },
  {
    slug: "wilhelm-ii",
    name: "Wilhelm II",
    wikipediaTitle: "Wilhelm_II",
    description:
      "Wilhelm II was the last German Emperor and King of Prussia, reigning from 1888 until his abdication in November 1918 at the close of the First World War. His mercurial personal diplomacy, his support for an enormous naval-arms race against Britain, and his unconditional 1914 \"blank check\" guarantee to Austria-Hungary against Serbia were among the principal proximate causes of the war that killed an estimated 20 million people. After the war he lived in comfortable exile at Huis Doorn in the Netherlands, where he repeatedly expressed his enthusiasm for the rise of Adolf Hitler and the Nazi Party.",
    alignment: "evil",
    fallback: { birthYear: 1859, deathYear: 1941 },
  },
  {
    slug: "paul-von-hindenburg",
    name: "Paul von Hindenburg",
    wikipediaTitle: "Paul_von_Hindenburg",
    description:
      "Paul von Hindenburg was a German military officer who led the Imperial German Army during the second half of the First World War and served as the second president of the Weimar Republic from 1925 until his death in August 1934. Despite personally disliking Adolf Hitler, in January 1933 he appointed Hitler chancellor in the belief that he could be controlled, and he subsequently signed the Reichstag Fire Decree and Enabling Act that gave the Nazi regime legal cover to dismantle the Weimar Constitution. His death cleared the way for Hitler to merge the offices of president and chancellor and assume absolute power as Führer.",
    alignment: "evil",
    fallback: { birthYear: 1847, deathYear: 1934 },
  },
  {
    slug: "albert-of-prussia",
    name: "Albert of Prussia",
    wikipediaTitle: "Albert,_Duke_of_Prussia",
    description:
      "Albert of Prussia was the 37th and last grand master of the Teutonic Knights and, after his 1525 conversion to Lutheranism, the first ruler of the Duchy of Prussia—the secularized Protestant state he created from the former Monastic State of the Teutonic Knights. He is widely viewed as the seed of Prussian militarism and territorial ambition, the dynastic and institutional foundation on which the Hohenzollerns built two and a half centuries of expansion. He devoted significant resources to converting the surviving pagan Old Prussian population by force.",
    alignment: "evil",
    fallback: { birthYear: 1490, deathYear: 1568 },
  },
  {
    slug: "albrecht-von-wallenstein",
    name: "Albrecht von Wallenstein",
    wikipediaTitle: "Albrecht_von_Wallenstein",
    description:
      "Albrecht Wenzel Eusebius von Wallenstein, Duke of Friedland, was a Bohemian military leader and statesman who served as supreme commander of the armies of Holy Roman Emperor Ferdinand II during the Thirty Years' War. His ruthless requisitioning of money and supplies from occupied territories—the so-called \"Wallenstein system\" that financed his vast armies through systematic plunder—devastated central Europe. By 1634 his accumulating wealth and unilateral peace negotiations with the Protestant powers had so unsettled Ferdinand II that the emperor ordered his assassination, which was carried out at Eger by his own subordinates.",
    alignment: "evil",
    fallback: { birthYear: 1583, deathYear: 1634 },
  },
  {
    slug: "victoria",
    name: "Victoria",
    wikipediaTitle: "Queen_Victoria",
    description:
      "Victoria was Queen of the United Kingdom of Great Britain and Ireland from 1837 until her death in 1901, and Empress of India from 1876, presiding over the longest reign of any British monarch up to that point. The Victorian era saw the British Empire expand to govern roughly a quarter of the world's land surface and population, prosecuting opium wars against China, the violent suppression of the 1857 Indian Rebellion, the partition of Africa, and a series of catastrophic Indian famines—including the Great Famine of 1876–78—in which between 12 and 30 million people died, while colonial revenue continued to flow to London. Her name has come to stand for the imperial enterprise itself.",
    alignment: "evil",
    fallback: { birthYear: 1819, deathYear: 1901 },
  },
  {
    slug: "queen-elizabeth-the-queen-mother",
    name: "Queen Elizabeth, the Queen Mother",
    wikipediaTitle: "Queen_Elizabeth_the_Queen_Mother",
    description:
      "Elizabeth Angela Marguerite Bowes-Lyon was Queen of the United Kingdom and the British Dominions from 1936 to 1952 as the wife of King George VI, and was the last Empress of India. Throughout her widowhood she was a vocal defender of the late British Empire and an ardent supporter of apartheid-era South Africa and Rhodesia, hosting their leaders and resisting calls for sanctions. Her decades of warm public reception made her a key figure in rehabilitating the institutional reputation of the monarchy and the empire it represented in postwar British memory.",
    alignment: "evil",
    fallback: { birthYear: 1900, deathYear: 2002 },
  },
  {
    slug: "cixi",
    name: "Cixi",
    wikipediaTitle: "Empress_Dowager_Cixi",
    description:
      "Empress Dowager Cixi was a Manchu noblewoman of the Yehe Nara clan who effectively controlled the government of late Qing China as empress dowager and regent from 1861 until her death in 1908, ruling through three child emperors. Her reactionary court resisted the political and constitutional reforms attempted by the Hundred Days' Reform of 1898, which she crushed by ordering the imprisonment of the Guangxu Emperor and the execution of leading reformers. Her support for the Boxer Rebellion against foreign legations in 1900 brought the Eight-Nation Alliance into Beijing, the sacking of the Forbidden City, and a crushing indemnity that helped seal the Qing dynasty's collapse.",
    alignment: "evil",
    fallback: { birthYear: 1835, deathYear: 1908 },
  },
  {
    slug: "hirohito",
    name: "Hirohito",
    wikipediaTitle: "Hirohito",
    description:
      "Hirohito, posthumously named Emperor Shōwa, was the 124th emperor of Japan and reigned from 1926 until his death in 1989. He presided as head of state and supreme commander of Imperial forces over the rise of Japanese militarism, the invasion of Manchuria, the Second Sino-Japanese War—including the 1937 Nanjing Massacre—and the Pacific theater of the Second World War, in which Japanese forces killed millions across Asia. After Japan's surrender in 1945 General Douglas MacArthur permitted him to keep the throne in exchange for cooperation with the U.S. occupation, and he reigned for another 44 years without ever facing trial for his role.",
    alignment: "evil",
    fallback: { birthYear: 1901, deathYear: 1989 },
  },
  {
    slug: "nicholas-ii",
    name: "Nicholas II",
    wikipediaTitle: "Nicholas_II",
    description:
      "Nicholas II was the last Emperor of Russia, reigning from 1894 until his abdication during the February Revolution of 1917. His government's troops massacred peaceful petitioners on Bloody Sunday in 1905, his unwillingness to share political authority with an elected Duma helped fuel two revolutions, and his disastrous decision to take personal command of Russian forces in the First World War accelerated the collapse of his regime. He, his wife, and his five children were executed by Bolshevik guards in a basement at Yekaterinburg in July 1918.",
    alignment: "evil",
    fallback: { birthYear: 1868, deathYear: 1918 },
  },
  {
    slug: "vladimir-lenin",
    name: "Vladimir Lenin",
    wikipediaTitle: "Vladimir_Lenin",
    description:
      "Vladimir Ilyich Ulyanov, known as Lenin, was a Russian revolutionary who led the October 1917 Bolshevik seizure of power and served as the first head of government of Soviet Russia from 1917 until his death in 1924, and of the Soviet Union from its 1922 formation. His government established the Cheka secret police, opened the first Soviet concentration camps in 1918, prosecuted the Red Terror that killed an estimated 50,000 to 200,000 political opponents, and fought the Russian Civil War in which several million more died. He laid the institutional and ideological foundation for the totalitarian system that Joseph Stalin would build on after his death.",
    alignment: "evil",
    fallback: { birthYear: 1870, deathYear: 1924 },
  },
  {
    slug: "leon-trotsky",
    name: "Leon Trotsky",
    wikipediaTitle: "Leon_Trotsky",
    description:
      "Lev Davidovich Trotsky, born Bronstein, was a Russian revolutionary and Soviet politician who served as Lenin's commissar for war and built the Red Army that won the Russian Civil War. As founder and first head of the Cheka-allied Revolutionary Military Committee he ordered the suppression of the 1921 Kronstadt rebellion in which thousands of sailors and civilians demanding democratic reforms were killed. After losing the post-Lenin succession struggle to Stalin he was expelled from the Communist Party and eventually exiled, and was assassinated by a Stalinist agent with an ice axe at his home in Coyoacán, Mexico, in August 1940.",
    alignment: "evil",
    fallback: { birthYear: 1879, deathYear: 1940 },
  },
  {
    slug: "leonid-brezhnev",
    name: "Leonid Brezhnev",
    wikipediaTitle: "Leonid_Brezhnev",
    description:
      "Leonid Ilyich Brezhnev was a Soviet politician who served as General Secretary of the Communist Party of the Soviet Union from 1964 until his death in 1982, the second-longest tenure in Soviet history after Stalin. His 18 years of leadership produced the so-called \"era of stagnation\" of suppressed political dissent, sustained economic decay, and the Brezhnev Doctrine that justified the 1968 invasion of Czechoslovakia to crush the Prague Spring. The 1979 Soviet invasion of Afghanistan, undertaken under his leadership, triggered a decade of war that contributed to the collapse of the Soviet system.",
    alignment: "evil",
    fallback: { birthYear: 1906, deathYear: 1982 },
  },
  {
    slug: "mao-zedong",
    name: "Mao Zedong",
    wikipediaTitle: "Mao_Zedong",
    description:
      "Mao Zedong was the founding chairman of the Chinese Communist Party and the People's Republic of China, leading the country from its 1949 establishment until his death in 1976. His Great Leap Forward from 1958 to 1962 produced the worst famine in human history, killing an estimated 30 to 45 million people, and his Cultural Revolution from 1966 to 1976 unleashed a decade of political persecution that killed and imprisoned millions and devastated Chinese cultural and educational institutions. His personality cult, formalized through the Little Red Book that became one of the most-printed books in history, ruled Chinese political life for a generation.",
    alignment: "evil",
    fallback: { birthYear: 1893, deathYear: 1976 },
  },
  {
    slug: "deng-xiaoping",
    name: "Deng Xiaoping",
    wikipediaTitle: "Deng_Xiaoping",
    description:
      "Deng Xiaoping was a Chinese statesman who served as the paramount leader of the People's Republic of China from 1978 to 1989 and architected the country's transition from Maoist autarky to a market-based economy. In June 1989 he ordered the People's Liberation Army into Beijing's Tiananmen Square to crush the student-led pro-democracy movement, killing hundreds and possibly thousands of unarmed protesters and bystanders. He retained final political authority well past his nominal retirement, including direction of the rapid economic acceleration following his 1992 \"Southern Tour.\"",
    alignment: "evil",
    fallback: { birthYear: 1904, deathYear: 1997 },
  },
  {
    slug: "xi-jinping",
    name: "Xi Jinping",
    wikipediaTitle: "Xi_Jinping",
    description:
      "Xi Jinping is a Chinese politician who has served as General Secretary of the Chinese Communist Party since 2012 and as president of China since 2013, having abolished presidential term limits in 2018 to enable indefinite rule. His administration has overseen the construction of a network of internment camps in Xinjiang in which an estimated one million Uyghurs and other Turkic Muslims have been detained, the dismantling of Hong Kong's autonomy under the 2020 National Security Law, and an unprecedented sustained military pressure campaign on Taiwan. Domestically he has built the most pervasive surveillance state in modern history and a personality cult that explicitly evokes Mao Zedong.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: null },
  },
  {
    slug: "chiang-kai-shek",
    name: "Chiang Kai-shek",
    wikipediaTitle: "Chiang_Kai-shek",
    description:
      "Chiang Kai-shek was the leader of the Chinese Nationalist government from 1928 until his loss to Mao Zedong's Communist forces in 1949, after which he ruled the Republic of China on Taiwan as a one-party authoritarian state until his death in 1975. His 1927 \"White Terror\" purge of the Communist Party in Shanghai killed thousands, and his subsequent campaigns and the corruption of his regime contributed materially to his loss of mainland China. The White Terror he imposed on Taiwan from 1947 onward saw the killing or imprisonment of an estimated 140,000 Taiwanese under martial law that remained in force until 1987.",
    alignment: "evil",
    fallback: { birthYear: 1887, deathYear: 1975 },
  },
  {
    slug: "kim-il-sung",
    name: "Kim Il-sung",
    wikipediaTitle: "Kim_Il_Sung",
    description:
      "Kim Il Sung was the founder of the Democratic People's Republic of Korea, ruling the country from its 1948 establishment until his death in 1994 and constructing the dynastic regime now in its third generation. His 1950 invasion of South Korea triggered the Korean War, which killed an estimated three million Koreans and Chinese and ended in the still-armistice-only division of the peninsula. The Juche personality cult he built around himself, his late wife, and his son Kim Jong Il became the foundational political ideology of North Korean life, enforced through prison camps in which an estimated 100,000 to 200,000 people remain incarcerated.",
    alignment: "evil",
    fallback: { birthYear: 1912, deathYear: 1994 },
  },
  {
    slug: "kim-jong-il",
    name: "Kim Jong-il",
    wikipediaTitle: "Kim_Jong_Il",
    description:
      "Kim Jong Il was the second supreme leader of North Korea, ruling from his father Kim Il Sung's death in 1994 until his own death in 2011. His tenure saw the Arduous March famine of the mid-1990s, in which somewhere between hundreds of thousands and three million North Koreans died of starvation while the regime continued to export food and resources, and the country's October 2006 detonation of its first nuclear weapon. The kwanliso political prison camps and the prison-camp-as-policy network expanded substantially under his leadership.",
    alignment: "evil",
    fallback: { birthYear: 1941, deathYear: 2011 },
  },
  {
    slug: "kim-jong-un",
    name: "Kim Jong-un",
    wikipediaTitle: "Kim_Jong_Un",
    description:
      "Kim Jong Un is a North Korean dictator who has served as supreme leader of the country since the death of his father Kim Jong Il in late 2011. He consolidated power early in his tenure by ordering the executions of senior officials including his uncle Jang Song-thaek—reportedly killed by anti-aircraft fire—and the 2017 assassination of his half-brother Kim Jong-nam with VX nerve agent at Kuala Lumpur airport. He has rapidly expanded the country's nuclear-weapons and intercontinental ballistic missile programs, conducted multiple nuclear and missile tests in defiance of UN sanctions, and presided over a sustained tightening of the prison-camp system.",
    alignment: "evil",
    fallback: { birthYear: 1984, deathYear: null },
  },
  {
    slug: "saparmurat-niyazov",
    name: "Saparmurat Niyazov",
    wikipediaTitle: "Saparmurat_Niyazov",
    description:
      "Saparmurat Niyazov was a Turkmen politician and dictator who ruled Turkmenistan from 1985 until his death in 2006, first as first secretary of the local Communist Party and from 1991 as the country's first president. He renamed himself Türkmenbaşy (\"Father of all Turkmen\") and turned the country into one of the most extreme personality cults of the post-Soviet era—erecting a gilded statue of himself in Ashgabat that rotated to face the sun, renaming months of the calendar after his mother and himself, and elevating his own ghost-written book the Ruhnama into a required text alongside the Qur'an in schools. He outlawed ballet, opera, and circus performances, and held no competitive elections during his rule.",
    alignment: "evil",
    fallback: { birthYear: 1940, deathYear: 2006 },
  },
  {
    slug: "mobutu-sese-seko",
    name: "Mobutu Sese Seko",
    wikipediaTitle: "Mobutu_Sese_Seko",
    description:
      "Mobutu Sese Seko, born Joseph-Désiré Mobutu, was a Congolese politician and military officer who ruled Zaire (today's Democratic Republic of the Congo) from 1965 until his 1997 overthrow by Laurent-Désiré Kabila's rebellion. He oversaw the assassination of Patrice Lumumba in 1961 with U.S. and Belgian backing, then through more than three decades of one-party rule embezzled an estimated $4 billion in state and aid funds while the country's economy and infrastructure collapsed. His regime was sustained by Western Cold War support that survived its routine torture, summary executions, and disappearance of political opponents.",
    alignment: "evil",
    fallback: { birthYear: 1930, deathYear: 1997 },
  },
  {
    slug: "muammar-gaddafi",
    name: "Muammar Gaddafi",
    wikipediaTitle: "Muammar_Gaddafi",
    description:
      "Muammar Gaddafi was a Libyan revolutionary and dictator who ruled Libya for 42 years, from his 1969 coup against King Idris until his overthrow and killing by rebel forces in October 2011. His government bombed Pan Am Flight 103 over Lockerbie, Scotland in December 1988, killing 270 people; provided long-running material support to the IRA, the Black September Organization, and other armed groups; and conducted a prolonged campaign of disappearances, torture, and execution of Libyan opposition figures at home and abroad. The 1996 Abu Salim prison massacre alone killed an estimated 1,200 political prisoners in a single afternoon.",
    alignment: "evil",
    fallback: { birthYear: 1942, deathYear: 2011 },
  },
  {
    slug: "bashar-al-assad",
    name: "Bashar al-Assad",
    wikipediaTitle: "Bashar_al-Assad",
    description:
      "Bashar Hafez al-Assad is a Syrian former politician and physician who served as president of Syria from 2000 until his overthrow in December 2024 amid the rebel offensive that ended five decades of Assad-family rule. From 2011 his government's response to peaceful pro-democracy protests escalated into the Syrian Civil War, which has killed an estimated 600,000 people; his forces repeatedly used chemical weapons against civilian populations, including the August 2013 sarin attack in eastern Ghouta and the April 2017 sarin attack in Khan Shaykhun. He fled to Russia in late 2024 and has been granted asylum there.",
    alignment: "evil",
    fallback: { birthYear: 1965, deathYear: null },
  },
  {
    slug: "hosni-mubarak",
    name: "Hosni Mubarak",
    wikipediaTitle: "Hosni_Mubarak",
    description:
      "Muhammad Hosni El Sayed Mubarak was an Egyptian military officer and politician who served as the 4th president of Egypt from 1981 until his February 2011 resignation amid the mass protests of the Egyptian Revolution. His three-decade rule was sustained by routine emergency-law detentions, torture in state security facilities, and electoral fraud, while Egypt remained one of the largest annual recipients of U.S. military aid. He was tried after his fall and convicted in 2012 of complicity in the killing of protesters during the revolution—a conviction later overturned on appeal.",
    alignment: "evil",
    fallback: { birthYear: 1928, deathYear: 2020 },
  },
  {
    slug: "mahmoud-abbas",
    name: "Mahmoud Abbas",
    wikipediaTitle: "Mahmoud_Abbas",
    description:
      "Mahmoud Abbas is a Palestinian politician who has served as president of the Palestinian National Authority since 2005 and as chairman of the Palestine Liberation Organization since 2004. His four-year presidential term expired in 2009 but he has remained in office without holding new elections for more than a decade and a half, while Palestinian Authority security forces have repeatedly cooperated with Israeli operations against political opponents in the West Bank. Under his tenure the West Bank has been steadily eroded by Israeli settlement expansion while his Fatah movement and Hamas have remained politically estranged.",
    alignment: "evil",
    fallback: { birthYear: 1935, deathYear: null },
  },
  {
    slug: "saddam-hussein",
    name: "Saddam Hussein",
    wikipediaTitle: "Saddam_Hussein",
    description:
      "Saddam Hussein was an Iraqi dictator who served as the 5th president of Iraq from 1979 until his overthrow during the U.S.-led invasion of Iraq in 2003. His government waged the eight-year Iran-Iraq War, killed an estimated 50,000 to 100,000 Kurds in the 1988 Anfal Campaign that included the chemical-weapons attack on Halabja, invaded Kuwait in 1990, and operated mass-execution and torture facilities including the Abu Ghraib prison. Captured by U.S. forces in December 2003, he was tried by an Iraqi tribunal for crimes against humanity and hanged in December 2006.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: 2006 },
  },
  {
    slug: "abu-bakr-al-baghdadi",
    name: "Abu Bakr al-Baghdadi",
    wikipediaTitle: "Abu_Bakr_al-Baghdadi",
    description:
      "Abu Bakr al-Baghdadi, born Ibrahim Awwad Ibrahim Ali al-Badri, was the founder and first leader of the Islamic State, declaring himself caliph in June 2014 from a pulpit in Mosul. Under his leadership ISIS killed and enslaved tens of thousands of civilians—particularly Yazidis, Shia Muslims, and Christians—across Iraq and Syria, ran an organized international slave market, broadcast videotaped beheadings, and inspired terrorist attacks on multiple continents. He killed himself with a suicide vest during a U.S. Special Operations raid on his hideout in northwestern Syria in October 2019.",
    alignment: "evil",
    fallback: { birthYear: 1971, deathYear: 2019 },
  },
  {
    slug: "hugo-chavez",
    name: "Hugo Chávez",
    wikipediaTitle: "Hugo_Chávez",
    description:
      "Hugo Rafael Chávez Frías was a Venezuelan politician and military officer who served as president of Venezuela from 1999 until his death in 2013. After surviving an unsuccessful 2002 U.S.-backed coup attempt, he progressively consolidated power by packing the courts and electoral authorities, restricting opposition media, and using oil revenue to fund a personalist Bolivarian movement abroad. His administration nationalized hundreds of companies and turned Venezuela's economy into a single-commodity petrostate that, after his death, collapsed into the largest peacetime hyperinflation in modern Latin American history.",
    alignment: "evil",
    fallback: { birthYear: 1954, deathYear: 2013 },
  },
  {
    slug: "alberto-fujimori",
    name: "Alberto Fujimori",
    wikipediaTitle: "Alberto_Fujimori",
    description:
      "Alberto Kenya Fujimori Inomoto was a Peruvian politician who served as president of Peru from 1990 to 2000, ruling effectively as a dictator after his April 1992 \"self-coup\" dissolved the legislature and the judiciary. His government's intelligence services ran the Grupo Colina death squad, which carried out the 1991 Barrios Altos and 1992 La Cantuta massacres of suspected leftist sympathizers. Convicted in 2009 of human-rights crimes and sentenced to 25 years in prison, he was released on humanitarian grounds in late 2023, less than a year before his death in 2024.",
    alignment: "evil",
    fallback: { birthYear: 1938, deathYear: 2024 },
  },
  {
    slug: "augusto-pinochet",
    name: "Augusto Pinochet",
    wikipediaTitle: "Augusto_Pinochet",
    description:
      "Augusto José Ramón Pinochet Ugarte was a Chilean army officer and dictator who ruled Chile from 1973 to 1990 after leading the U.S.-backed military coup that overthrew democratically elected President Salvador Allende on 11 September 1973. His regime tortured an estimated 40,000 people and killed or disappeared more than 3,000 political opponents, while his \"Chicago Boys\" economists imposed an aggressive program of privatization and deregulation as a global free-market test case. He was indicted on multiple human-rights and corruption charges before his death in 2006 but never tried.",
    alignment: "evil",
    fallback: { birthYear: 1915, deathYear: 2006 },
  },
  {
    slug: "francisco-franco",
    name: "Francisco Franco",
    wikipediaTitle: "Francisco_Franco",
    description:
      "Francisco Franco Bahamonde was a Spanish general and military dictator who led the Nationalist forces in the Spanish Civil War of 1936 to 1939 and then ruled Spain as Caudillo from 1939 until his death in 1975. With military assistance from Nazi Germany and Fascist Italy he overthrew the democratic Second Spanish Republic, conducted mass executions of political opponents during and after the war, and established a 36-year dictatorship of authoritarian Catholic nationalism. The Pact of Forgetting that followed his death long suppressed Spain's reckoning with the war's mass graves, which remain partially unrecovered to this day.",
    alignment: "evil",
    fallback: { birthYear: 1892, deathYear: 1975 },
  },
  {
    slug: "benito-mussolini",
    name: "Benito Mussolini",
    wikipediaTitle: "Benito_Mussolini",
    description:
      "Benito Amilcare Andrea Mussolini was an Italian politician who founded the original Fascist movement in 1919 and served as Prime Minister of Italy from 1922 until his overthrow in 1943. His regime invaded Ethiopia in 1935—using mustard gas against Ethiopian civilians—suppressed the Italian press and political opposition, allied with Nazi Germany, and shipped Italian Jews to Auschwitz under the 1938 racial laws. Captured by Italian partisans while attempting to flee to Switzerland in April 1945, he was executed and his body hung upside down at a Milan gas station.",
    alignment: "evil",
    fallback: { birthYear: 1883, deathYear: 1945 },
  },
  {
    slug: "hideki-tojo",
    name: "Hideki Tojo",
    wikipediaTitle: "Hideki_Tojo",
    description:
      "Hideki Tojo was a Japanese general and politician who served as Prime Minister of Japan from 1941 to 1944 during the Pacific War. As prime minister he authorized the December 1941 attack on Pearl Harbor and oversaw the Japanese Imperial Army's conduct across China, Korea, the Philippines, and Southeast Asia, including the systematic enslavement of \"comfort women\" and the Bataan Death March. After Japan's surrender he attempted suicide in 1945; he was nursed back to health, tried as a war criminal at the Tokyo Trials, and hanged in December 1948.",
    alignment: "evil",
    fallback: { birthYear: 1884, deathYear: 1948 },
  },
  {
    slug: "reinhard-heydrich",
    name: "Reinhard Heydrich",
    wikipediaTitle: "Reinhard_Heydrich",
    description:
      "Reinhard Tristan Eugen Heydrich was a high-ranking SS general, head of the Reich Main Security Office, and one of the principal architects of the Holocaust. As acting Reichsprotektor of Bohemia and Moravia he earned the nickname \"the Butcher of Prague\" for the mass arrests, executions, and deportations to Theresienstadt that he ordered, and as chair of the January 1942 Wannsee Conference he formalized the bureaucratic plan for the genocide of European Jews. He was assassinated in Prague in May 1942 by Czech and Slovak resistance fighters, dying of his wounds a week later, after which Nazi reprisals destroyed the village of Lidice and killed all of its men.",
    alignment: "evil",
    fallback: { birthYear: 1904, deathYear: 1942 },
  },
  {
    slug: "adolf-eichmann",
    name: "Adolf Eichmann",
    wikipediaTitle: "Adolf_Eichmann",
    description:
      "Otto Adolf Eichmann was a German-Austrian SS officer and one of the principal organizers of the Holocaust, responsible for the logistics of the deportations of Jews from across Nazi-occupied Europe to the death camps. He participated in the January 1942 Wannsee Conference at which the Final Solution was operationalized. After fleeing to Argentina under a false identity in 1950 he was kidnapped by Mossad agents in 1960, tried in Jerusalem, convicted of war crimes and crimes against humanity, and hanged in 1962—the only judicial execution Israel has ever carried out.",
    alignment: "evil",
    fallback: { birthYear: 1906, deathYear: 1962 },
  },
  {
    slug: "albert-speer",
    name: "Albert Speer",
    wikipediaTitle: "Albert_Speer",
    description:
      "Albert Speer was a German architect who served as Adolf Hitler's chief architect and as Minister of Armaments and War Production from 1942 until the end of the Second World War. As armaments minister he doubled and tripled German weapons output by ruthlessly exploiting concentration-camp slave labor, including direct knowledge of the conditions at Mittelbau-Dora. Convicted at the Nuremberg trials of war crimes and crimes against humanity, he served 20 years in Spandau Prison and spent the rest of his life cultivating the now-discredited image of the \"good Nazi\" who claimed not to have known about the Holocaust.",
    alignment: "evil",
    fallback: { birthYear: 1905, deathYear: 1981 },
  },
  {
    slug: "albert-kesselring",
    name: "Albert Kesselring",
    wikipediaTitle: "Albert_Kesselring",
    description:
      "Albert Kesselring was a German Generalfeldmarschall who led Luftwaffe forces in the Battle of Britain, the North African Campaign, and the long Italian Campaign of the Second World War. As commander-in-chief in Italy from 1943 to 1945 he ordered or condoned the reprisal massacres of Italian civilians and partisans, including the Ardeatine massacre of 335 men outside Rome and the slaughter of 560 villagers at Sant'Anna di Stazzema. He was sentenced to death by a British military tribunal for war crimes in 1947, had his sentence commuted, and was released from prison in 1952.",
    alignment: "evil",
    fallback: { birthYear: 1885, deathYear: 1960 },
  },
  {
    slug: "julius-streicher",
    name: "Julius Streicher",
    wikipediaTitle: "Julius_Streicher",
    description:
      "Julius Streicher was a German Nazi Party publisher and Gauleiter of Franconia who founded the antisemitic newspaper Der Stürmer in 1923, producing two decades of incitement to genocide on its pages. The Nuremberg tribunal convicted him of crimes against humanity in 1946 specifically for the propaganda role of Der Stürmer in preparing the German public to accept the Holocaust, and he was hanged in October 1946—the only journalist among the defendants. His final words on the gallows were \"Heil Hitler.\"",
    alignment: "evil",
    fallback: { birthYear: 1885, deathYear: 1946 },
  },
  {
    slug: "mahmoud-ahmadinejad",
    name: "Mahmoud Ahmadinejad",
    wikipediaTitle: "Mahmoud_Ahmadinejad",
    description:
      "Mahmoud Ahmadinejad is an Iranian politician who served as the sixth president of Iran from 2005 to 2013. His tenure was marked by repeated public denials of the Holocaust, calls for Israel to be \"wiped off the map,\" and the violent suppression of the Green Movement protests that erupted after his disputed re-election in 2009, in which dozens were killed and thousands of demonstrators were detained, tortured, or sentenced in mass political trials. His government also sharply accelerated Iran's uranium-enrichment program in defiance of international sanctions.",
    alignment: "evil",
    fallback: { birthYear: 1956, deathYear: null },
  },
  {
    slug: "christopher-columbus",
    name: "Christopher Columbus",
    wikipediaTitle: "Christopher_Columbus",
    description:
      "Christopher Columbus was an Italian-born navigator who completed four Spanish-financed transatlantic voyages between 1492 and 1502, opening the way for sustained European colonization of the Americas. As governor of the colony at Hispaniola from 1492 to 1500 he authorized the enslavement, mutilation, and mass killing of the Taíno people of the Caribbean—a regime so brutal that even his Spanish contemporaries arrested him and stripped him of his colonial titles in 1500. The Indigenous population of Hispaniola, estimated at hundreds of thousands at first contact, was effectively annihilated within a generation of his arrival.",
    alignment: "evil",
    fallback: { birthYear: 1451, deathYear: 1506 },
  },
  {
    slug: "john-cabot",
    name: "John Cabot",
    wikipediaTitle: "John_Cabot",
    description:
      "John Cabot, born Giovanni Caboto, was an Italian-born navigator and explorer who in 1497 sailed for Henry VII of England and made the earliest known European exploration of coastal North America since the Norse voyages five centuries earlier. His landfall, probably on Newfoundland, became the legal basis for the English Crown's subsequent territorial claims to the entire continent and the displacement of the Indigenous peoples those claims authorized. He died, almost certainly at sea, on a follow-up voyage of 1498.",
    alignment: "evil",
    fallback: { birthYear: 1450, deathYear: 1498 },
  },
  {
    slug: "juan-de-la-cosa",
    name: "Juan de la Cosa",
    wikipediaTitle: "Juan_de_la_Cosa",
    description:
      "Juan de la Cosa was a Castilian navigator and cartographer who served as owner and master of the Santa María on Christopher Columbus's first voyage to the Americas in 1492 and accompanied Columbus on subsequent voyages as well. His 1500 mappa mundi is the earliest surviving European map to depict the Americas. He participated in the violent enslavement and exploitation of the Indigenous people of Hispaniola and the Caribbean, and was killed by a poisoned arrow during a 1510 colonial expedition to the South American mainland.",
    alignment: "evil",
    fallback: { birthYear: 1450, deathYear: 1510 },
  },
  {
    slug: "ferdinand-magellan",
    name: "Ferdinand Magellan",
    wikipediaTitle: "Ferdinand_Magellan",
    description:
      "Ferdinand Magellan was a Portuguese explorer who in the service of Spain led the 1519–1522 expedition that produced the first known European circumnavigation of the globe. He himself was killed in April 1521 at the Battle of Mactan in the Philippines while attempting to subjugate local resistance leader Lapu-Lapu and force conversion of the Mactan inhabitants to Christianity. His expedition's surviving ship, the Victoria, completed the circumnavigation under Juan Sebastián Elcano with only 18 of the original 270 crew alive.",
    alignment: "evil",
    fallback: { birthYear: 1480, deathYear: 1521 },
  },
  {
    slug: "francis-drake",
    name: "Francis Drake",
    wikipediaTitle: "Francis_Drake",
    description:
      "Sir Francis Drake was an English sea captain, explorer, and privateer who completed the second European circumnavigation of the globe between 1577 and 1580, raiding Spanish ships and colonies along the Pacific coast of the Americas as he went. He had earlier participated in his cousin John Hawkins's pioneering English slaving voyages from West Africa to the Caribbean in the 1560s, and continued to profit from the early Atlantic slave trade across his career. Queen Elizabeth I knighted him in 1581 aboard his returning ship the Golden Hind.",
    alignment: "evil",
    fallback: { birthYear: 1540, deathYear: 1596 },
  },
  {
    slug: "james-cook",
    name: "James Cook",
    wikipediaTitle: "James_Cook",
    description:
      "Captain James Cook was a British Royal Navy officer and cartographer who led three voyages of exploration to the Pacific between 1768 and 1779, charting the coasts of New Zealand, eastern Australia, and the Hawaiian Islands and laying the formal British claims that would underwrite a century of subsequent colonization. The diseases his crews introduced and the violence his expeditions provoked devastated Indigenous populations across the Pacific. He was killed in February 1779 at Kealakekua Bay in Hawaiʻi by a Native Hawaiian crowd after he attempted to take Hawaiian chief Kalaniʻōpuʻu hostage in retaliation for a stolen ship's boat.",
    alignment: "evil",
    fallback: { birthYear: 1728, deathYear: 1779 },
  },
  {
    slug: "francisco-pizarro",
    name: "Francisco Pizarro",
    wikipediaTitle: "Francisco_Pizarro",
    description:
      "Francisco Pizarro was a Spanish conquistador whose expeditions led the conquest of the Inca Empire in the 1530s. Capturing the Inca emperor Atahualpa under a flag of truce at Cajamarca in 1532, he extorted a roomful of gold and silver as ransom, then strangled Atahualpa anyway in 1533 before sacking the imperial capital at Cuzco and founding the colonial city of Lima. The conquest he led killed and enslaved millions of Andean people directly or through introduced disease, exhaustion, and famine, and ended one of the largest pre-Columbian states in the Americas.",
    alignment: "evil",
    fallback: { birthYear: 1478, deathYear: 1541 },
  },
  {
    slug: "afonso-de-albuquerque",
    name: "Afonso de Albuquerque",
    wikipediaTitle: "Afonso_de_Albuquerque",
    description:
      "Afonso de Albuquerque was a Portuguese general and admiral who served as the second viceroy of Portuguese India from 1509 to 1515, building the Portuguese Estado da Índia by conquering Goa, Malacca, and Hormuz and establishing a chain of armed coastal trading posts across the Indian Ocean. His campaigns were marked by deliberately spectacular violence designed to terrorize coastal populations into submission, including the cutting off of noses, ears, and hands of survivors at port cities he had attacked. The maritime empire he built endured in fragments for nearly five centuries.",
    alignment: "evil",
    fallback: { birthYear: 1453, deathYear: 1515 },
  },
  {
    slug: "abel-tasman",
    name: "Abel Tasman",
    wikipediaTitle: "Abel_Tasman",
    description:
      "Abel Janszoon Tasman was a Dutch seafarer and explorer in the service of the Dutch East India Company whose 1642 and 1644 voyages were the first European contact with Tasmania—originally named Van Diemen's Land for his patron and now bearing his own name—as well as with New Zealand and the Fijian and Tongan island groups. His landfalls established Dutch and later British navigational priority for the territories his employer would soon attempt to dominate, beginning more than three centuries of European colonization across the southern Pacific. The Indigenous Tasmanians he encountered were nearly extinguished by British colonization within two centuries of his voyages.",
    alignment: "evil",
    fallback: { birthYear: 1603, deathYear: 1659 },
  },
  {
    slug: "martin-luther",
    name: "Martin Luther",
    wikipediaTitle: "Martin_Luther",
    description:
      "Martin Luther was a German theologian and former Augustinian friar whose 1517 Ninety-Five Theses inaugurated the Protestant Reformation and broke the religious unity of Western Christendom. In his later years he wrote bitterly antisemitic works—most notoriously the 1543 tract On the Jews and Their Lies, which urged the burning of synagogues, the destruction of Jewish homes and books, the expulsion of Jews from German lands, and the use of forced labor against them. The work was extensively cited by Nazi propagandists four centuries later and is still officially repudiated by many Lutheran bodies today.",
    alignment: "evil",
    fallback: { birthYear: 1483, deathYear: 1546 },
  },
  {
    slug: "georges-danton",
    name: "Georges Danton",
    wikipediaTitle: "Georges_Danton",
    description:
      "Georges Jacques Danton was a French politician and orator who served as the first president of the Committee of Public Safety in 1793 during the French Revolution. He helped organize the September 1792 Massacres in which more than a thousand prisoners—many of them ordinary criminals or political detainees—were summarily executed by Paris mobs over five days, and he supervised the early phase of the Reign of Terror that followed. After turning against the most extreme phase of the Terror under Maximilien Robespierre, he was tried on charges of corruption and counter-revolution and guillotined in April 1794.",
    alignment: "evil",
    fallback: { birthYear: 1759, deathYear: 1794 },
  },
  {
    slug: "sigmund-freud",
    name: "Sigmund Freud",
    wikipediaTitle: "Sigmund_Freud",
    description:
      "Sigmund Freud was an Austrian neurologist and the founder of psychoanalysis, whose theories shaped 20th-century psychiatry, anthropology, literature, and popular conceptions of the mind. Many of his core clinical claims—including his theories of female sexuality, his interpretation of women's accounts of childhood sexual abuse, and his foundational case studies—have been substantially revised or repudiated by subsequent psychiatric research. He was an early enthusiast of cocaine as a therapeutic agent, prescribing it widely to his patients before its addictive properties became publicly understood, in the same career-defining work in which his lasting psychoanalytic reputation began.",
    alignment: "evil",
    fallback: { birthYear: 1856, deathYear: 1939 },
  },
  {
    slug: "thomas-edison",
    name: "Thomas Edison",
    wikipediaTitle: "Thomas_Edison",
    description:
      "Thomas Alva Edison was an American inventor and businessman whose Menlo Park laboratory produced more than a thousand patents, including a commercially viable incandescent light bulb, the phonograph, and the motion-picture camera. The collaborative nature of those inventions has long been understated in his favor, and he is widely cited for using his patent power to delay or suppress technologies developed by his employees and rivals. During the 1880s \"War of the Currents\" against George Westinghouse and Nikola Tesla's alternating-current system, he publicly electrocuted animals—including the elephant Topsy in 1903—to argue that AC was uniquely dangerous, even as he covertly supported the development of the AC-powered electric chair to associate the technology with execution.",
    alignment: "evil",
    fallback: { birthYear: 1847, deathYear: 1931 },
  },
  {
    slug: "wernher-von-braun",
    name: "Wernher von Braun",
    wikipediaTitle: "Wernher_von_Braun",
    description:
      "Wernher von Braun was a German-American aerospace engineer who joined the Nazi Party in 1937 and the Allgemeine SS in 1940, and who led the development of the V-2 ballistic missile—the first long-range guided weapon to enter service. The V-2 was assembled at the Mittelwerk underground factory by concentration-camp slave labor from Mittelbau-Dora, where an estimated 20,000 prisoners died of starvation, exposure, and execution—more than the missile itself killed in combat. Brought to the United States in 1945 under Operation Paperclip, he became the principal designer of the Saturn V rocket that carried Apollo 11 to the Moon in 1969.",
    alignment: "evil",
    fallback: { birthYear: 1912, deathYear: 1977 },
  },
  {
    slug: "larry-page",
    name: "Larry Page",
    wikipediaTitle: "Larry_Page",
    description:
      "Lawrence Edward Page is an American businessman and computer scientist who in 1998 co-founded Google with Sergey Brin and served as its CEO from 1998 to 2001 and 2011 to 2015 and as Alphabet CEO from 2015 to 2019. Under his leadership Google became the dominant global gateway to the internet and a defining surveillance-advertising business model that has been the subject of major antitrust judgments in the United States, the European Union, and India. He has remained a controlling Alphabet shareholder while spending much of the 2020s in seclusion in the South Pacific.",
    alignment: "evil",
    fallback: { birthYear: 1973, deathYear: null },
  },
  {
    slug: "james-watson",
    name: "James Watson",
    wikipediaTitle: "James_Watson",
    description:
      "James Dewey Watson was an American molecular biologist who, with Francis Crick, deduced the double-helix structure of DNA in 1953, drawing critically on the X-ray crystallography of Rosalind Franklin and Maurice Wilkins, and shared the 1962 Nobel Prize in Physiology or Medicine. Across the decades that followed he made repeated public statements asserting that genetic differences explained racial gaps in intelligence, ultimately leading to his suspension from Cold Spring Harbor Laboratory in 2007 and the rescinding of his honorary titles there in 2019 after he reaffirmed those claims on television. He died in November 2025 at age 97.",
    alignment: "evil",
    fallback: { birthYear: 1928, deathYear: 2025 },
  },
  {
    slug: "aaron-rodgers",
    name: "Aaron Rodgers",
    wikipediaTitle: "Aaron_Rodgers",
    description:
      "Aaron Charles Rodgers is an American professional football quarterback regarded as one of the most physically talented passers in NFL history, with four NFL Most Valuable Player awards. In 2021 he publicly told reporters he had been \"immunized\" against COVID-19 when he had in fact only used homeopathic alternatives; after testing positive he attacked Fauci, vaccine mandates, and mainstream medicine in a series of media appearances. He has continued to amplify conspiracy theories about vaccines, the September 11 attacks, and the Sandy Hook Elementary School shooting, drawing condemnation from victims' families.",
    alignment: "evil",
    fallback: { birthYear: 1983, deathYear: null },
  },
  {
    slug: "alec-baldwin",
    name: "Alec Baldwin",
    wikipediaTitle: "Alec_Baldwin",
    description:
      "Alexander Rae Baldwin III is an American actor and producer best known for his television role as Jack Donaghy on 30 Rock and for his impersonation of Donald Trump on Saturday Night Live. In October 2021 he was holding a Colt revolver on the New Mexico set of the western Rust when it discharged, killing cinematographer Halyna Hutchins and wounding director Joel Souza; he was ultimately charged with involuntary manslaughter, and the case was dismissed without prejudice in 2024 over prosecutorial misconduct in handling evidence. He has separately been documented in numerous public outbursts, including a profanity-laden voicemail to his daughter Ireland that became a 2007 tabloid scandal.",
    alignment: "evil",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "bobby-fischer",
    name: "Bobby Fischer",
    wikipediaTitle: "Bobby_Fischer",
    description:
      "Robert James Fischer was an American chess grandmaster and the 11th World Chess Champion, who in 1972 defeated Boris Spassky of the USSR in Reykjavík in the Cold War's most-publicized chess match. After defaulting his title in 1975 he largely withdrew from competitive chess, surfacing again in 1992 to play a rematch of Spassky in violation of U.S. sanctions on Yugoslavia, becoming a wanted fugitive in the United States. He spent his last years issuing publicly broadcast antisemitic and anti-American tirades—including celebrating the September 11 attacks on Filipino radio—before dying in Reykjavík in 2008 of kidney failure.",
    alignment: "evil",
    fallback: { birthYear: 1943, deathYear: 2008 },
  },
  {
    slug: "al-davis",
    name: "Al Davis",
    wikipediaTitle: "Al_Davis",
    description:
      "Allen R. Davis was the longtime principal owner and de facto general manager of the Oakland Raiders of the National Football League from 1972 until his death in 2011. He filed three lawsuits against his own league to enable him to relocate the franchise and to fight an NFL salary structure he disliked, repeatedly disrupting league operations and earning a reputation as one of professional sports' most adversarial owners. His later years were marked by dysfunction at the Raiders' coaching and front-office levels, including a public feud with head coach Lane Kiffin that ended in Kiffin's mid-season firing.",
    alignment: "evil",
    fallback: { birthYear: 1929, deathYear: 2011 },
  },
  {
    slug: "albert-belle",
    name: "Albert Belle",
    wikipediaTitle: "Albert_Belle",
    description:
      "Albert Jojuan Belle is an American former Major League Baseball outfielder who played from 1989 to 2000, primarily for the Cleveland Indians, and in 1995 became the only player ever to hit 50 doubles and 50 home runs in a single season. His career off the field was marked by a 1995 incident in which he threw a baseball at a NBC reporter at the All-Star Game, a 1995 Halloween incident in which he chased trick-or-treaters with his car, and a 2006 conviction for stalking a former girlfriend. He has not been elected to the Baseball Hall of Fame, dropping off the ballot for falling well below the necessary support threshold in his final year of eligibility.",
    alignment: "evil",
    fallback: { birthYear: 1966, deathYear: null },
  },
  {
    slug: "alberto-salazar",
    name: "Alberto Salazar",
    wikipediaTitle: "Alberto_Salazar",
    description:
      "Alberto Salazar is an American former track coach and long-distance runner who won the New York City Marathon three times in the early 1980s and the 1982 Boston Marathon, and went on to coach Olympic medalists Mo Farah and Galen Rupp at the Nike Oregon Project. In September 2019 he was banned from track and field for four years by the U.S. Anti-Doping Agency for trafficking testosterone, tampering with the doping-control process, and administering prohibited methods to his athletes, and in 2021 he was permanently banned by the U.S. Center for SafeSport over emotional and physical-abuse misconduct toward female athletes.",
    alignment: "evil",
    fallback: { birthYear: 1958, deathYear: null },
  },
  {
    slug: "paul-gauguin",
    name: "Paul Gauguin",
    wikipediaTitle: "Paul_Gauguin",
    description:
      "Eugène Henri Paul Gauguin was a French Post-Impressionist painter who spent the last decade of his life in French Polynesia, producing the South Pacific–set canvases for which he is now best remembered. Recent scholarship has documented that during his time in Tahiti and the Marquesas Islands he took at least three Indigenous wives or partners between the ages of 13 and 14 and likely transmitted syphilis to many of them, all while producing the orientalist and sexualized paintings of Polynesian girls that have entered the canon of modern Western art. Several major museums have begun reframing or partially restricting their displays of his work in light of these findings.",
    alignment: "evil",
    fallback: { birthYear: 1848, deathYear: 1903 },
  },
  {
    slug: "coco-chanel",
    name: "Coco Chanel",
    wikipediaTitle: "Coco_Chanel",
    description:
      "Gabrielle Bonheur \"Coco\" Chanel was a French fashion designer who founded the Chanel brand and reshaped 20th-century women's fashion with her sportswear silhouettes, the little black dress, and the 1921 perfume Chanel No. 5. During the German occupation of France she lived at the Hôtel Ritz in Paris and conducted an affair with Nazi intelligence officer Hans Günther von Dincklage, and in 1941 she attempted to use Nazi anti-Jewish ordinances to seize full control of the Chanel No. 5 perfume business from her Jewish business partners, the Wertheimer family. Released documents have since established that she also operated as Nazi German military intelligence agent F-7124 under the codename \"Westminster.\"",
    alignment: "evil",
    fallback: { birthYear: 1883, deathYear: 1971 },
  },
  {
    slug: "louis-vuitton",
    name: "Louis Vuitton",
    wikipediaTitle: "Louis_Vuitton_(designer)",
    description:
      "Louis Vuitton was a French malletier and businessman who founded the Louis Vuitton leather-goods house in 1854 after working as trunk-maker to Empress Eugénie de Montijo. The luxury brand he established now operates as a subsidiary of LVMH and has faced sustained criticism for failures to eliminate forced labour in its supply chain, mistreatment allegations from models in 2017, and 2024 controversies in Barcelona involving documented damage to the UNESCO-listed Park Güell during a sponsored fashion show. The LV monogram he created has also become one of the most counterfeited and most aggressively litigated trademarks in the world.",
    alignment: "evil",
    fallback: { birthYear: 1821, deathYear: 1892 },
  },
  {
    slug: "naomi-campbell",
    name: "Naomi Campbell",
    wikipediaTitle: "Naomi_Campbell",
    description:
      "Naomi Campbell is a British supermodel who rose to prominence in the late 1980s as one of the original supermodels alongside Linda Evangelista and Christy Turlington. She has been convicted of assault on multiple occasions, including a 2000 attack on her personal assistant in London, a 2007 guilty plea for hurling a BlackBerry at her housekeeper at her Manhattan apartment, and a 2008 conviction for assaulting two Heathrow police officers after a luggage dispute. In 2010 she testified at the war-crimes trial of former Liberian president Charles Taylor about \"dirty-looking stones\" she received as a gift from him following a 1997 charity dinner.",
    alignment: "evil",
    fallback: { birthYear: 1970, deathYear: null },
  },
  {
    slug: "prince-william",
    name: "Prince William",
    wikipediaTitle: "William,_Prince_of_Wales",
    description:
      "Prince William is the heir apparent to the British throne and Prince of Wales, the elder son of Charles III and Diana, Princess of Wales. His March 2022 royal tour of the Caribbean with Catherine, Princess of Wales, drew widespread protest and was described by Caribbean leaders as a tone-deaf colonial spectacle, with Jamaica's prime minister using the visit to formally announce intentions to remove the monarch as head of state. He has continued to draw on the Duchy of Cornwall's tax-advantaged £1 billion estate and inherited his father's Duchy properties in 2022 without paying inheritance tax.",
    alignment: "evil",
    fallback: { birthYear: 1982, deathYear: null },
  },
  {
    slug: "prince-philip",
    name: "Prince Philip",
    wikipediaTitle: "Prince_Philip,_Duke_of_Edinburgh",
    description:
      "Prince Philip, Duke of Edinburgh, was the husband of Queen Elizabeth II and the longest-serving royal consort in British history, holding the role from her 1952 accession until his death in 2021. He became notorious during state visits for racist and xenophobic remarks, including telling British students in Beijing in 1986 that they would become \"slitty-eyed\" if they stayed in China too long, asking an Aboriginal Australian leader in 2002 whether his people \"still throw spears at each other,\" and joking to a driving-instructor in Scotland in 1995 about how women keep their husbands \"off the booze.\" He served as a wartime Royal Navy officer before marriage and remained a defender of the monarchy's role in former colonies throughout decolonisation.",
    alignment: "evil",
    fallback: { birthYear: 1921, deathYear: 2021 },
  },
  {
    slug: "al-capone",
    name: "Al Capone",
    wikipediaTitle: "Al_Capone",
    description:
      "Alphonse Gabriel \"Al\" Capone was an American gangster who served as boss of the Chicago Outfit during the Prohibition era, building a bootlegging empire estimated to generate $100 million annually. He orchestrated the Saint Valentine's Day Massacre of February 14, 1929, in which seven members of Bugs Moran's North Side Gang were lined up and machine-gunned in a Lincoln Park garage, and was implicated in dozens of additional murders of rival gangsters, journalists, and witnesses. He was convicted of federal income-tax evasion in 1931 and sentenced to eleven years, serving time at Atlanta Penitentiary and Alcatraz before neurosyphilis-induced dementia ended his criminal career.",
    alignment: "evil",
    fallback: { birthYear: 1899, deathYear: 1947 },
  },
  {
    slug: "albert-anastasia",
    name: "Albert Anastasia",
    wikipediaTitle: "Albert_Anastasia",
    description:
      "Albert Anastasia, born Umberto Anastasio, was a Calabrian-American mafioso who served as boss of what became the Gambino crime family and as the operational head of Murder, Inc., the Mafia's contract-killing arm during the 1930s and 1940s. Known as the \"Lord High Executioner,\" he is believed to have personally ordered or carried out hundreds of killings, including the 1939 murder of informant Abe \"Kid Twist\" Reles, who was thrown from a hotel window while in NYPD protective custody. He was assassinated in October 1957 while seated in a barber's chair at the Park Sheraton Hotel in Manhattan, in a hit widely attributed to Carlo Gambino and Vito Genovese.",
    alignment: "evil",
    fallback: { birthYear: 1902, deathYear: 1957 },
  },
  {
    slug: "pablo-escobar",
    name: "Pablo Escobar",
    wikipediaTitle: "Pablo_Escobar",
    description:
      "Pablo Emilio Escobar Gaviria was a Colombian drug lord and founder of the Medellín Cartel, which at its 1980s peak supplied an estimated 80 percent of the cocaine smuggled into the United States and made him one of the wealthiest people in history. To resist extradition he waged a campaign of narcoterrorism against the Colombian state that included the 1984 assassination of Justice Minister Rodrigo Lara Bonilla, the 1989 bombing of Avianca Flight 203 which killed 110 people, the 1989 truck-bombing of the DAS headquarters in Bogotá which killed 63, and the murder of presidential candidate Luis Carlos Galán. He was killed by Colombian National Police on a Medellín rooftop on December 2, 1993.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: 1993 },
  },
  {
    slug: "mata-hari",
    name: "Mata Hari",
    wikipediaTitle: "Mata_Hari",
    description:
      "Mata Hari, born Margaretha Geertruida Zelle, was a Dutch exotic dancer and courtesan who performed in Paris in the years before the First World War and was executed by French firing squad in October 1917 after being convicted of espionage on behalf of Imperial Germany. She had accepted payments from German diplomatic agents and was assigned the codename H-21 by German intelligence, though her trial was conducted under wartime emergency rules and the surviving evidence has since been judged thin by many historians. The French government's case framed her as responsible for the deaths of tens of thousands of Allied soldiers during a year of catastrophic French battlefield losses.",
    alignment: "evil",
    fallback: { birthYear: 1876, deathYear: 1917 },
  },
  {
    slug: "aldrich-ames",
    name: "Aldrich Ames",
    wikipediaTitle: "Aldrich_Ames",
    description:
      "Aldrich Hazen Ames was an American CIA counterintelligence officer who in 1985 began selling the identities of CIA assets inside the Soviet Union to the KGB in exchange for more than $4.6 million in cash, a sum then unprecedented for an American spy. The information he provided led directly to the arrest and execution of at least ten CIA-recruited Soviet officials, compromising more highly classified U.S. intelligence assets than any other officer until Robert Hanssen's 2001 arrest. He was convicted of espionage in 1994 and served a life sentence without the possibility of parole until his death in January 2026 at the Federal Correctional Institution in Cumberland, Maryland.",
    alignment: "evil",
    fallback: { birthYear: 1941, deathYear: 2026 },
  },
  {
    slug: "sirhan-sirhan",
    name: "Sirhan Sirhan",
    wikipediaTitle: "Sirhan_Sirhan",
    description:
      "Sirhan Bishara Sirhan is a Palestinian-Jordanian man who assassinated U.S. Senator Robert F. Kennedy on June 5, 1968, shooting him at the Ambassador Hotel in Los Angeles moments after Kennedy claimed victory in the California Democratic presidential primary. He was convicted of first-degree murder in April 1969 and originally sentenced to death by gas chamber, a sentence commuted to life imprisonment in 1972 following the People v. Anderson ruling. He has remained incarcerated at Richard J. Donovan Correctional Facility for over five decades and stated in a 1989 interview that his motive was Kennedy's support for sending fifty fighter jets to Israel.",
    alignment: "evil",
    fallback: { birthYear: 1944, deathYear: null },
  },
  {
    slug: "hugh-hefner",
    name: "Hugh Hefner",
    wikipediaTitle: "Hugh_Hefner",
    description:
      "Hugh Marston Hefner was an American magazine publisher who founded Playboy in 1953 and built it into a media empire that turned the marketing of female nudity for male consumption into a mainstream product. Multiple former Playmates and live-in girlfriends, including Holly Madison, Kendra Wilkinson, and Sondra Theodore, have since detailed coercive sexual practices, surveillance, drug use, and emotional abuse at the Playboy Mansion, with much of the testimony documented in the 2022 A&E series Secrets of Playboy. He died in 2017 at age 91 and was buried beside Marilyn Monroe at Westwood Memorial Park in a plot he purchased decades earlier.",
    alignment: "evil",
    fallback: { birthYear: 1926, deathYear: 2017 },
  },
  {
    slug: "mother-teresa",
    name: "Mother Teresa",
    wikipediaTitle: "Mother_Teresa",
    description:
      "Mother Teresa, born Anjezë Gonxhe Bojaxhiu, was an Albanian-Indian Catholic nun and founder of the Missionaries of Charity in Kolkata, who received the 1979 Nobel Peace Prize and was canonised in 2016. Critics including Christopher Hitchens and the medical journal The Lancet documented that her Homes for the Dying provided minimal pain relief, reused syringes, and rejected modern hospital care for residents while she herself was flown to high-end Western hospitals for her own treatment. She accepted large donations from Haitian dictator Jean-Claude \"Baby Doc\" Duvalier and from convicted American fraudster Charles Keating, refused to return Keating's money when asked by the prosecution, and used her global platform to oppose contraception, abortion, and divorce in poor countries.",
    alignment: "evil",
    fallback: { birthYear: 1910, deathYear: 1997 },
  },
  {
    slug: "brigham-young",
    name: "Brigham Young",
    wikipediaTitle: "Brigham_Young",
    description:
      "Brigham Young was an American religious leader who succeeded Joseph Smith as president of the Church of Jesus Christ of Latter-day Saints in 1847 and led the Mormon migration to the Salt Lake Valley, which he governed as the first territorial governor of Utah. He openly practiced and aggressively promoted polygamy, taking at least 55 wives, and as territorial governor in September 1857 his rhetoric and the militia under his authority laid the groundwork for the Mountain Meadows Massacre, in which a Mormon militia disguised as Native Americans murdered approximately 120 unarmed Arkansas emigrants. He also instituted a priesthood-and-temple ban barring Black members from full participation, a doctrine that remained official church policy until 1978.",
    alignment: "evil",
    fallback: { birthYear: 1801, deathYear: 1877 },
  },
  {
    slug: "abraham-kuyper",
    name: "Abraham Kuyper",
    wikipediaTitle: "Abraham_Kuyper",
    description:
      "Abraham Kuyper was a Dutch Neo-Calvinist theologian, journalist, and politician who served as Prime Minister of the Netherlands from 1901 to 1905 and founded the Anti-Revolutionary Party. His doctrine of \"sphere sovereignty\" and his theological writings on race were drawn upon directly by Afrikaner Reformed theologians in twentieth-century South Africa to provide a religious justification for the racial separation policies that became apartheid. As prime minister he ordered the violent military suppression of the 1903 Dutch railway strike and pursued colonial policies in the Dutch East Indies that deepened forced-labour systems on Java and Sumatra.",
    alignment: "evil",
    fallback: { birthYear: 1837, deathYear: 1920 },
  },
  {
    slug: "akechi-mitsuhide",
    name: "Akechi Mitsuhide",
    wikipediaTitle: "Akechi_Mitsuhide",
    description:
      "Akechi Mitsuhide was a Japanese samurai general of the Sengoku period who served the warlord Oda Nobunaga before turning on his master in the Honnō-ji Incident of June 21, 1582, surrounding Nobunaga's lightly guarded temple lodgings in Kyoto and forcing him to commit seppuku as the building burned. The treachery, which also caused the death of Nobunaga's heir Oda Nobutada at Nijō Palace, ended the campaign to unify Japan under the Oda clan and is remembered in Japanese as the textbook example of betrayal of one's lord. Mitsuhide held political power for only thirteen days before being defeated by Toyotomi Hideyoshi at the Battle of Yamazaki and killed by bandits while fleeing the battlefield.",
    alignment: "evil",
    fallback: { birthYear: 1526, deathYear: 1582 },
  },
  {
    slug: "andrew-carnegie",
    name: "Andrew Carnegie",
    wikipediaTitle: "Andrew_Carnegie",
    description:
      "Andrew Carnegie was a Scottish-American steel magnate who built Carnegie Steel into the largest and most profitable industrial enterprise of its era before selling it to J. P. Morgan in 1901 to form U.S. Steel. As owner of the Homestead Works in Pennsylvania he authorised plant manager Henry Clay Frick to break the Amalgamated Association of Iron and Steel Workers in 1892, leading to the Homestead Strike, the deployment of 300 armed Pinkerton agents, and a pitched battle on July 6 that left at least seven workers and three Pinkertons dead. He drove down workers' wages and lengthened shifts to twelve hours across his mills while writing essays on the moral duty of the rich, an arrangement his contemporary critics described as financing libraries with stolen wages.",
    alignment: "evil",
    fallback: { birthYear: 1835, deathYear: 1919 },
  },
  {
    slug: "j-p-morgan",
    name: "J. P. Morgan",
    wikipediaTitle: "J._P._Morgan",
    description:
      "John Pierpont Morgan was an American financier whose firm J.P. Morgan & Co. dominated U.S. corporate finance, organising the trusts and consolidations that became U.S. Steel in 1901, General Electric in 1892, and International Harvester in 1902. He bailed out the U.S. Treasury in the Panic of 1893 and again organised the response to the Panic of 1907 from his private library, on terms that critics including Senator Robert La Follette argued amounted to a privatised central bank operating in his interest. The 1912–1913 Pujo Committee investigation documented that he and a small circle of Wall Street allies sat on 341 directorships across 112 corporations holding more than $22 billion in resources, an aggregation of financial power that drove the eventual creation of the Federal Reserve.",
    alignment: "evil",
    fallback: { birthYear: 1837, deathYear: 1913 },
  },
  {
    slug: "bernard-arnault",
    name: "Bernard Arnault",
    wikipediaTitle: "Bernard_Arnault",
    description:
      "Bernard Jean Étienne Arnault is a French businessman who chairs the LVMH luxury-goods conglomerate and has repeatedly ranked as the world's wealthiest individual, with a fortune valued in excess of $200 billion. In 2012 he applied for Belgian citizenship in what was widely reported as an attempt to escape President François Hollande's proposed 75 percent top tax rate, prompting the front-page Libération headline \"Casse-toi, riche con!\"; he was placed under preliminary French investigation in 2024 over alleged money-laundering links to a Russian oligarch. LVMH brands under his ownership have repeatedly been named in supply-chain reports involving forced labour, sweatshop conditions in Italian leather workshops, and the underpayment of garment workers in Asia.",
    alignment: "evil",
    fallback: { birthYear: 1949, deathYear: null },
  },
  {
    slug: "alan-sugar",
    name: "Alan Sugar",
    wikipediaTitle: "Alan_Sugar",
    description:
      "Baron Sugar is a British businessman who founded the consumer-electronics company Amstrad in 1968 and has hosted the BBC's The Apprentice since 2005. He drew widespread condemnation in 2018 after posting a doctored photograph of the Senegal football team on Twitter alongside images of luxury sunglasses and handbags with the caption \"I recognise some of these guys from the beach in Marbella,\" a tweet which the Equality and Human Rights Commission and antiracism campaigners described as overtly racist. He has repeatedly used his platform to attack trade unions, junior doctors, and striking rail workers, and has held a Conservative-aligned seat in the House of Lords as a crossbencher since 2009 despite previously sitting as a Labour peer.",
    alignment: "evil",
    fallback: { birthYear: 1947, deathYear: null },
  },
  {
    slug: "alan-greenspan",
    name: "Alan Greenspan",
    wikipediaTitle: "Alan_Greenspan",
    description:
      "Alan Greenspan is an American economist who served as chair of the Federal Reserve from 1987 to 2006 under four presidents, presiding over the deregulation of derivatives markets and the systematic refusal of the Fed to use its supervisory authority over the burgeoning subprime-mortgage industry. His public opposition to regulating over-the-counter derivatives, including the 1998 effort to suppress CFTC chair Brooksley Born's proposal for derivatives oversight, helped enable the credit-default-swap exposures that triggered the 2008 financial crisis. In October 2008 he conceded before the House Oversight Committee that he had \"found a flaw\" in his free-market ideology, an admission economists have described as one of the most consequential mea culpas in modern monetary policy.",
    alignment: "evil",
    fallback: { birthYear: 1926, deathYear: null },
  },
  {
    slug: "aubrey-mcclendon",
    name: "Aubrey McClendon",
    wikipediaTitle: "Aubrey_McClendon",
    description:
      "Aubrey Kerr McClendon was an American oil-and-gas executive who co-founded Chesapeake Energy in 1989 and built it into the second-largest natural-gas producer in the United States during the shale-fracking boom of the 2000s. He was indicted by a federal grand jury on March 1, 2016, on charges of conspiring to rig bids on oil-and-gas leases in Oklahoma between 2007 and 2012, manipulating prices paid to landowners. He died the following morning, March 2, 2016, when his Chevrolet Tahoe slammed into a concrete bridge embankment in Oklahoma City at high speed in what investigators ruled an accident with no evidence of evasive action.",
    alignment: "evil",
    fallback: { birthYear: 1959, deathYear: 2016 },
  },
  {
    slug: "tony-blair",
    name: "Tony Blair",
    wikipediaTitle: "Tony_Blair",
    description:
      "Sir Anthony Charles Lynton Blair served as Prime Minister of the United Kingdom from 1997 to 2007 as Labour leader and committed British forces to the 2003 invasion of Iraq alongside U.S. President George W. Bush. The 2016 Chilcot Report found that he presented the case for war on the basis of intelligence about Iraqi weapons of mass destruction that was \"presented with a certainty that was not justified,\" that peaceful options for disarmament had not been exhausted, and that the legal basis for invasion was \"far from satisfactory.\" Estimates of Iraqi civilian deaths during the war and subsequent occupation range from approximately 200,000 to over a million.",
    alignment: "evil",
    fallback: { birthYear: 1953, deathYear: null },
  },
  {
    slug: "neville-chamberlain",
    name: "Neville Chamberlain",
    wikipediaTitle: "Neville_Chamberlain",
    description:
      "Arthur Neville Chamberlain was a British Conservative politician who served as Prime Minister of the United Kingdom from May 1937 to May 1940 and is most remembered for his policy of appeasement toward Nazi Germany. He signed the Munich Agreement on September 30, 1938, conceding the Sudetenland of Czechoslovakia to Adolf Hitler in exchange for what he called \"peace for our time,\" only to see Germany occupy the rest of Czechoslovakia within six months and invade Poland in September 1939. His government was forced from office in May 1940 after the disastrous Norwegian Campaign, and he died of bowel cancer six months later.",
    alignment: "evil",
    fallback: { birthYear: 1869, deathYear: 1940 },
  },
  {
    slug: "madeleine-albright",
    name: "Madeleine Albright",
    wikipediaTitle: "Madeleine_Albright",
    description:
      "Madeleine Korbel Albright was a Czech-American diplomat who served as U.S. Ambassador to the United Nations from 1993 to 1997 and as the first female U.S. Secretary of State from 1997 to 2001 under President Bill Clinton. Asked by Lesley Stahl on 60 Minutes in May 1996 about a UNICEF estimate that economic sanctions had contributed to the deaths of half a million Iraqi children, she replied that the choice was \"very hard\" but that \"we think the price is worth it,\" a comment she later said she regretted phrasing that way but never disavowed in substance. She was an architect of NATO's 1999 air campaign against Yugoslavia and a vocal advocate for the 2003 invasion of Iraq.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: 2022 },
  },
  {
    slug: "agostino-depretis",
    name: "Agostino Depretis",
    wikipediaTitle: "Agostino_Depretis",
    description:
      "Agostino Depretis was an Italian statesman who served three terms as Prime Minister of Italy between 1876 and 1887 and gave the political vocabulary the term trasformismo, the practice of co-opting parliamentary opposition through patronage and ad hoc majorities to neutralise programmatic politics. His governments oversaw the harsh repression of agrarian unrest in southern Italy, the colonial assault on Eritrea that culminated in the 1887 Battle of Dogali, and the entrenchment of a deeply corrupt patronage state that historians of the liberal Italian period treat as a major contributor to the eventual collapse of parliamentary government under fascism. He died in office at Stradella in July 1887 while still serving as prime minister.",
    alignment: "evil",
    fallback: { birthYear: 1813, deathYear: 1887 },
  },
  {
    slug: "abdelaziz-bouteflika",
    name: "Abdelaziz Bouteflika",
    wikipediaTitle: "Abdelaziz_Bouteflika",
    description:
      "Abdelaziz Bouteflika served as President of Algeria from 1999 to 2019 and was the country's longest-serving head of state. After suffering a debilitating stroke in 2013 that left him largely unable to speak in public, he and the military faction known as le pouvoir manipulated the constitution to allow him to run for and win two further terms in 2014 and 2019, the latter campaign launched while he was hospitalised in Geneva. He was forced from office on April 2, 2019, by the popular Hirak protest movement after announcing a fifth-term bid, and the post-resignation period exposed billions in alleged embezzlement involving his brother Saïd, former prime ministers, and oligarchs of his inner circle.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: 2021 },
  },
  {
    slug: "abiy-ahmed",
    name: "Abiy Ahmed",
    wikipediaTitle: "Abiy_Ahmed",
    description:
      "Abiy Ahmed Ali has served as Prime Minister of Ethiopia since April 2018 and was awarded the 2019 Nobel Peace Prize for the rapprochement with Eritrea that ended the two countries' twenty-year border standoff. Just over a year later, in November 2020, his federal forces and Eritrean allies launched the Tigray War against the Tigray People's Liberation Front; the United Nations and Amnesty International documented massacres including the November 2020 Mai Kadra killings, the November 2020 Axum massacre, the use of starvation as a weapon of war, and widespread sexual violence by Ethiopian and Eritrean troops. The conflict, which lasted until November 2022, is estimated to have caused 600,000 or more deaths, ranking among the deadliest wars of the twenty-first century.",
    alignment: "evil",
    fallback: { birthYear: 1976, deathYear: null },
  },
  {
    slug: "agrippina-the-younger",
    name: "Agrippina the Younger",
    wikipediaTitle: "Agrippina_the_Younger",
    description:
      "Julia Agrippina, known as Agrippina the Younger, was a Roman empress, the great-granddaughter of Augustus, sister of the emperor Caligula, niece and fourth wife of the emperor Claudius, and mother of the emperor Nero. Ancient historians including Tacitus, Suetonius, and Cassius Dio attribute to her the poisoning of her second husband Passienus Crispus to claim his estate, the manoeuvring that disinherited Claudius's son Britannicus in favour of her own son, and finally the poisoning of Claudius himself in October 54 with a dish of mushrooms so that Nero could ascend to the throne. Nero ordered her assassination in March 59, after a staged shipwreck in the Bay of Naples failed to kill her and assassins sent to her villa at Bauli stabbed her to death.",
    alignment: "evil",
    fallback: { birthYear: 15, deathYear: 59 },
  },
  {
    slug: "agustin-de-iturbide",
    name: "Agustín de Iturbide",
    wikipediaTitle: "Agustín_de_Iturbide",
    description:
      "Agustín de Iturbide was a Mexican royalist army officer who first fought against Mexican independence forces under José María Morelos and personally signed the execution orders for hundreds of insurgents, before switching sides in 1820 to negotiate the Plan of Iguala and unite the independence movement with the colonial elite. After leading the Army of the Three Guarantees into Mexico City in September 1821 he had himself proclaimed Emperor Agustín I in May 1822, dissolved the constituent congress that resisted him, and ruled by decree until a republican uprising forced his abdication in March 1823. Returning from European exile in July 1824, he was arrested on landing at Soto la Marina and executed by firing squad on July 19, 1824.",
    alignment: "evil",
    fallback: { birthYear: 1783, deathYear: 1824 },
  },
  {
    slug: "al-jolson",
    name: "Al Jolson",
    wikipediaTitle: "Al_Jolson",
    description:
      "Al Jolson, born Asa Yoelson, was a Lithuanian-American entertainer who became one of the most popular American performers of the 1910s and 1920s and starred in the first feature-length sound film, The Jazz Singer, in 1927. His signature stage persona was built on the use of burnt-cork blackface, which he wore in The Jazz Singer's title role and in numerous Broadway and film performances; the genre's caricatures of Black Americans were central to his commercial success and helped extend the cultural life of minstrelsy well into the talkie era. Although he supported individual Black musicians and openly opposed segregation in some venues, his films and recordings remain among the most-cited examples of mainstream blackface entertainment in twentieth-century American media.",
    alignment: "evil",
    fallback: { birthYear: 1886, deathYear: 1950 },
  },
  {
    slug: "alfonso-v-of-portugal",
    name: "Alfonso V (of Portugal)",
    wikipediaTitle: "Afonso_V_of_Portugal",
    description:
      "Afonso V, called \"the African,\" was King of Portugal from 1438 until his death in 1481 and pursued the conquest of Muslim cities along the North African coast, capturing Alcácer Ceguer in 1458, Arzila and Tangier in 1471, and presiding over the slaughter and enslavement of significant portions of their civilian populations. Under his reign Portugal expanded the trans-Atlantic African slave trade, with the 1455 papal bull Romanus Pontifex, granted to him by Pope Nicholas V, explicitly authorising Portugal to \"reduce to perpetual slavery\" all enemies of Christ encountered on the African coast. He also waged the unsuccessful 1475–1479 War of the Castilian Succession on behalf of his niece-bride Joanna la Beltraneja, ending in his renunciation of all Castilian claims at the Treaty of Alcáçovas.",
    alignment: "evil",
    fallback: { birthYear: 1432, deathYear: 1481 },
  },
  {
    slug: "bobby-brown",
    name: "Bobby Brown",
    wikipediaTitle: "Bobby_Brown",
    description:
      "Robert Barisford Brown is an American R&B singer who rose to fame as a member of New Edition before launching a solo career with the 1988 album Don't Be Cruel. His marriage to Whitney Houston from 1992 to 2007 was repeatedly marked by drug arrests on both sides and by accusations of domestic violence, including a 1993 incident in Atlanta in which he reportedly hit Houston, and his own subsequent admissions of physical abuse in his 2016 memoir Every Little Step. He has been arrested at least nine times on charges including DUI, battery, drug possession, and probation violations, and his daughter Bobbi Kristina died in 2015 in circumstances strikingly similar to Houston's 2012 drowning death.",
    alignment: "evil",
    fallback: { birthYear: 1969, deathYear: null },
  },
  {
    slug: "chris-pratt",
    name: "Chris Pratt",
    wikipediaTitle: "Chris_Pratt",
    description:
      "Christopher Michael Pratt is an American actor known for the Marvel franchise Guardians of the Galaxy and the Jurassic World films. He has been a public member of Hillsong Church and Zoe Church, two evangelical organisations whose stated theological positions on LGBTQ+ identity have been described by former members and journalists as conversion-adjacent, and which several of his Marvel co-stars including Ellen Page and Mark Ruffalo publicly criticised in 2019. In May 2020 he liked a series of tweets supporting then-President Donald Trump's response to the George Floyd protests, and in September 2022 he publicly thanked God in a manner widely interpreted by his ex-wife Anna Faris's fans as a sleight against their disabled son Jack.",
    alignment: "evil",
    fallback: { birthYear: 1979, deathYear: null },
  },
  {
    slug: "dustin-hoffman",
    name: "Dustin Hoffman",
    wikipediaTitle: "Dustin_Hoffman",
    description:
      "Dustin Lee Hoffman is an American actor and two-time Academy Award winner whose film career spans more than five decades and includes The Graduate, Midnight Cowboy, Marathon Man, Kramer vs. Kramer, and Rain Man. Beginning in November 2017 at least seven women publicly accused him of sexual misconduct, including writer Anna Graham Hunter, who described being repeatedly groped on the 1985 set of Death of a Salesman when she was 17, playwright John Riggi's then-girlfriend Cori Thomas, who alleged he exposed himself to her in a hotel room, and producer Wendy Riss Gatsiounis, who described an incident she said occurred in his office during a meeting. He has acknowledged some incidents and denied others.",
    alignment: "evil",
    fallback: { birthYear: 1937, deathYear: null },
  },
  {
    slug: "joseph-mengele",
    name: "Joseph Mengele",
    wikipediaTitle: "Josef_Mengele",
    description:
      "Josef Mengele was a German SS-Hauptsturmführer and physician who served as the chief camp doctor at Auschwitz-Birkenau from May 1943 until the camp's liberation in January 1945, and is remembered as the \"Angel of Death\" for his role at the unloading ramps personally selecting prisoners for the gas chambers. He performed lethal medical experiments on inmates, with a particular focus on identical twins, dwarfs, and people with heterochromia, including injections of dyes into eyes, surgical mutilations without anaesthetic, and infections with typhus and other pathogens for the Kaiser Wilhelm Institute for Anthropology, Human Heredity, and Eugenics. He escaped Allied custody at the end of the war and lived as a fugitive in Argentina, Paraguay, and Brazil for thirty-four years before drowning during a stroke at a São Paulo beach in February 1979.",
    alignment: "evil",
    fallback: { birthYear: 1911, deathYear: 1979 },
  },
  {
    slug: "nicki-minaj",
    name: "Nicki Minaj",
    wikipediaTitle: "Nicki_Minaj",
    description:
      "Onika Tanya Maraj-Petty, known professionally as Nicki Minaj, is a Trinidadian-American rapper whose 2010 debut Pink Friday made her one of the highest-charting female rappers of the 2010s. In September 2021 she tweeted to her then nearly 23 million followers that her cousin's friend in Trinidad had become impotent and infertile after taking the COVID-19 vaccine, prompting a public correction from the Trinidad and Tobago Ministry of Health, the U.S. CDC, and Anthony Fauci, and a wave of vaccine misinformation that researchers later traced back to her account. Her husband Kenneth Petty pleaded guilty in 2021 to failing to register as a sex offender after a previous Pennsylvania conviction for attempted rape, and the 1994 victim of that attack subsequently sued the couple, alleging witness intimidation; the suit was settled out of court in 2023.",
    alignment: "evil",
    fallback: { birthYear: 1982, deathYear: null },
  },
  {
    slug: "pope-john-paul-ii",
    name: "Pope John Paul II",
    wikipediaTitle: "Pope_John_Paul_II",
    description:
      "Karol Józef Wojtyła reigned as Pope John Paul II from 1978 until his death in 2005, the second-longest pontificate in modern history. Subsequent investigations including the 2020 Vatican McCarrick Report and the 2023 Polish state commission report have documented that he knowingly protected and promoted serial sexual abusers within the Catholic hierarchy, including U.S. Cardinal Theodore McCarrick despite credible reports reaching the Vatican as early as 1999, and Mexican Legion of Christ founder Marcial Maciel Degollado, whose abuse of seminarians and his own children was repeatedly documented to John Paul II's office and ignored. The same period saw him preside over a global cover-up of clerical abuse cases that institutional inquiries in Ireland, the United States, France, and Germany have subsequently estimated involved hundreds of thousands of victims.",
    alignment: "evil",
    fallback: { birthYear: 1920, deathYear: 2005 },
  },
  {
    slug: "richard-branson",
    name: "Richard Branson",
    wikipediaTitle: "Richard_Branson",
    description:
      "Sir Richard Charles Nicholas Branson is a British entrepreneur and founder of the Virgin Group, which now spans more than 400 companies. His personal residence has been Necker Island in the British Virgin Islands since 2006, an arrangement that journalists and the BBC's Panorama have linked to substantial reductions in his and his companies' UK tax exposure even as Virgin Care and other Virgin subsidiaries collected NHS contracts worth roughly £2 billion between 2013 and 2020. In 2017 Virgin Care successfully sued the NHS for an undisclosed settlement after losing a child-services contract bid in Surrey, drawing cross-party condemnation; in April 2020 he simultaneously lobbied the British government for a £500 million bailout of Virgin Atlantic and offered Necker Island as collateral.",
    alignment: "evil",
    fallback: { birthYear: 1950, deathYear: null },
  },
  {
    slug: "vladimir-putin",
    name: "Vladimir Putin",
    wikipediaTitle: "Vladimir_Putin",
    description:
      "Vladimir Vladimirovich Putin has served as President or Prime Minister of Russia continuously since 1999, in a sequence engineered through constitutional changes that allowed him to remain in power past originally constitutionally-mandated term limits. He prosecuted the Second Chechen War from 1999 onwards, ordered the 2008 invasion of Georgia, the 2014 annexation of Crimea, and the full-scale invasion of Ukraine that began February 24, 2022, which has produced documented Russian war crimes including the Bucha massacre and resulted in tens of thousands of civilian deaths. The International Criminal Court issued an arrest warrant for him on March 17, 2023, for the unlawful deportation of Ukrainian children to Russia; under his rule the murders, imprisonments, and exiles of opposition figures including Anna Politkovskaya, Boris Nemtsov, and Alexei Navalny have proceeded with conspicuous Kremlin involvement.",
    alignment: "evil",
    fallback: { birthYear: 1952, deathYear: null },
  },
  {
    slug: "walt-disney",
    name: "Walt Disney",
    wikipediaTitle: "Walt_Disney",
    description:
      "Walter Elias Disney was an American animator and entrepreneur who co-founded the Walt Disney Company and produced Snow White and the Seven Dwarfs, Pinocchio, Fantasia, and Mickey Mouse. He led the violent suppression of the 1941 Disney animators' strike, blacklisting and firing union organisers including Art Babbitt and Bill Tytla, and in October 1947 testified as a friendly witness before the House Un-American Activities Committee, naming individual animators he believed were communist organisers and contributing to the broader Hollywood blacklist. His studio's films of the 1930s, 1940s, and 1950s contained recurring antisemitic and anti-Black caricatures, most prominently the crows in Dumbo (1941), the centaurs in Fantasia, and the entire production Song of the South (1946), which the company has since withheld from public re-release.",
    alignment: "evil",
    fallback: { birthYear: 1901, deathYear: 1966 },
  },
  {
    slug: "william-jennings-bryan",
    name: "William Jennings Bryan",
    wikipediaTitle: "William_Jennings_Bryan",
    description:
      "William Jennings Bryan was an American populist politician who served three times as the Democratic Party's nominee for President of the United States, in 1896, 1900, and 1908, and as Secretary of State under Woodrow Wilson from 1913 to 1915. While progressive on bimetallism and opposition to imperialism in the Philippines, he served as the lead prosecutor in the 1925 Scopes \"Monkey\" Trial in Dayton, Tennessee, arguing for the conviction of high-school teacher John Scopes for teaching human evolution and helping cement state-level bans on evolution instruction across the American South for decades. He died of an apparent stroke in his sleep at Dayton five days after the trial concluded.",
    alignment: "evil",
    fallback: { birthYear: 1860, deathYear: 1925 },
  },
  {
    slug: "george-washington",
    name: "George Washington",
    wikipediaTitle: "George_Washington",
    description:
      "George Washington was the commanding general of the Continental Army during the American Revolutionary War and the first President of the United States, serving from 1789 to 1797. He held more than 577 enslaved people over the course of his life, with 123 documented at Mount Vernon at his death, pursued runaway enslaved person Ona Judge across state lines for years, and used his authority as president to sign the Fugitive Slave Act of 1793. As commander he ordered the 1779 Sullivan Expedition against the Iroquois Confederacy, instructing General John Sullivan that Iroquois settlements were \"not merely to be overrun but destroyed,\" a campaign that burned at least forty Haudenosaunee towns and earned him the lasting Iroquois name Conotocaurious, or \"Town Destroyer.\"",
    alignment: "evil",
    fallback: { birthYear: 1732, deathYear: 1799 },
  },
  {
    slug: "joan-of-arc",
    name: "Joan of Arc",
    wikipediaTitle: "Joan_of_Arc",
    description:
      "Joan of Arc, known in French as Jeanne d'Arc, was a French peasant girl from Domrémy who claimed visions of saints Michael, Catherine, and Margaret directing her to support Charles VII against the English, and who led French forces to victory at the relief of Orléans in 1429 and at Patay later that year. Her wartime conduct included threatening letters to enemy commanders demanding immediate surrender or extermination, the storming of Saint-Pierre-le-Moûtier in 1429, and the unsuccessful assault on Paris in September 1429 in which she was wounded leading an attack on the Saint-Honoré gate. Captured by Burgundian forces at Compiègne in May 1430 and handed to the English, she was tried for heresy and cross-dressing by a pro-English ecclesiastical court at Rouen and burned at the stake on May 30, 1431, at age nineteen.",
    alignment: "evil",
    fallback: { birthYear: 1412, deathYear: 1431 },
  },
  {
    slug: "queen-elizabeth-i",
    name: "Queen Elizabeth I",
    wikipediaTitle: "Elizabeth_I",
    description:
      "Elizabeth I, the last monarch of the House of Tudor, reigned as Queen of England and Ireland from 1558 until her death in 1603, in a period subsequently celebrated as the \"Elizabethan era.\" Her government conducted the Tudor conquest of Ireland with sustained brutality, including the 1565–1576 Desmond Rebellions, the 1574 Rathlin Island massacre in which her forces under Walter Devereux slaughtered approximately 600 Scottish and Irish civilian inhabitants, and the 1579–1583 second Desmond Rebellion in which her commanders pursued a deliberate scorched-earth famine policy across Munster. She personally licensed the slave-trading voyages of Sir John Hawkins between 1562 and 1568, the first English crown-backed entries into the trans-Atlantic slave trade, and signed the death warrant of Mary, Queen of Scots, who was beheaded at Fotheringhay Castle in February 1587.",
    alignment: "evil",
    fallback: { birthYear: 1533, deathYear: 1603 },
  },
  {
    slug: "queen-elizabeth-ii",
    name: "Queen Elizabeth II",
    wikipediaTitle: "Elizabeth_II",
    description:
      "Elizabeth II reigned as Queen of the United Kingdom and head of the Commonwealth from 1952 until her death in 2022, the longest reign in British history. Her seventy-year tenure spanned the violent counter-insurgencies of late British decolonisation, including the Mau Mau Uprising in Kenya from 1952 to 1960, in which her government ran a network of detention camps that subjected an estimated 80,000 to 150,000 Kikuyu civilians to torture and forced labour, and the Cyprus and Aden conflicts of the late 1950s and 1960s. Documents released under the British Government's 2013 Migrated Archive disclosure, and the 2013 Kenyan settlement in which the British government paid £19.9 million in compensation to 5,228 Mau Mau victims, were issued in her name as head of state, and she also signed off on the controversial royal protection extended to her son Prince Andrew during his association with sex offender Jeffrey Epstein.",
    alignment: "evil",
    fallback: { birthYear: 1926, deathYear: 2022 },
  },
  {
    slug: "melania-trump",
    name: "Melania Trump",
    wikipediaTitle: "Melania_Trump",
    description:
      "Melania Trump is widely known for plagiarizing portions of Michelle Obama's 2008 Democratic National Convention speech during her 2016 Republican National Convention address, and for wearing an 'I really don't care, do u?' jacket while visiting a detention center for migrant children separated from their parents under the Trump administration's policies. She publicly promoted racist birther conspiracy theories about Barack Obama, defended her husband's harmful and discriminatory agenda, and oversaw a controversial White House Rose Garden renovation that removed historic trees and floral installations dating back decades. Her tenure was marked by ethical scrutiny over personal commercial ventures and allegations surrounding the circumstances of her own immigration and early work in the United States.",
    alignment: "evil",
    fallback: { birthYear: 1970, deathYear: null, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/F20260213AH-3001_%28cropped%29.jpg/330px-F20260213AH-3001_%28cropped%29.jpg" },
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
