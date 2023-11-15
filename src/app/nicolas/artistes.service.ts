import { Injectable } from "@angular/core"
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError, tap} from "rxjs/operators";
import {IArtistes} from "./artistes";

@Injectable({
  providedIn: "root"
})
export class ArtistesService {
  private dataUrl = "api/data/data.json";
  artistes: IArtistes[] = [];

  constructor(private http: HttpClient) {}

  getArtistes(): Observable<IArtistes[]> {
    return this.http.get<IArtistes[]>(this.dataUrl).pipe(
      tap(data => console.log("All", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    //in a real world app, we may send the server to some remote logging infrastructure
    //instead of just logging it to the console
    let errorMessage = "";
    if(err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred : ${err.error.message}`;
    }
    else {
      //The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getArtistesBis(): IArtistes[]{
    this.artistes = [];
    this.artistes.push({
        "id": 1,
        "name": "A (エース) (ACE)",
        "genres": "Pop",
        "lifeSpan": "2010",
        "location": "Japan",
        "albums": [
          {
            "title": "夜明けのアンセム／NUDE (2010)",
            "publicationDate": "2010",
            "songs": [
              "夜明けのアンセム",
              "Nude"
            ]
          },
          {
            "title": "Black Butterfly (2011)",
            "publicationDate": "2011",
            "songs": [
              "Black Butterfly",
              "Devil's Voice"
            ]
          },
          {
            "title": "Black & White Album",
            "publicationDate": "2011",
            "songs": [
              "カナリア",
              "God Child",
              "今宵、銃声が聴こえない街で",
              "Mirror Of Terror",
              "バニラスカイ",
              "交響詩freedomイ短調",
              "Grafton Calling",
              "Masquerade",
              "Sakura",
              "Godess",
              "Viva La Casta!",
              "Ouvertura"
            ]
          },
          {
            "title": "White & Holy Night With U (2011)",
            "publicationDate": "2011",
            "songs": [
              "White & Holy Night With U"
            ]
          },
          {
            "title": "Night Of The Knights (2012)",
            "publicationDate": "2012",
            "songs": [
              "Night Of The Knights",
              "Fool's Gold"
            ]
          },
          {
            "title": "Tales For The Abyss",
            "publicationDate": "2012",
            "songs": [
              "Night Of The Knights",
              "Nude",
              "灰色の天使",
              "Rhapsody In Black",
              "Loveless",
              "Abyss",
              "Black Butterfly",
              "夜明けのアンセム",
              "Shangrila",
              "Reel Of Fortune (Instrumental)",
              "Nu World",
              "Ship”Friend Of Mine”"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Devil's Voice",
              "Fool's Gold",
              "Ship \"Friend Of Mine\""
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "A Balladeer",
        "genres": "Pop",
        "lifeSpan": "2004",
        "location": "Netherlands",
        "albums": [
          {
            "title": "Rumor Had It",
            "publicationDate": "2004",
            "songs": [
              "I Saw You Hiding From The Rain Today",
              "Rumor Had It",
              "They've Shut Down Marks & Spencer",
              "Left-Over Tears, Lost"
            ]
          },
          {
            "title": "Panama",
            "publicationDate": "2006",
            "songs": [
              "Summer",
              "Blank",
              "All I Wanted",
              "Pre-Berlin",
              "Sirens",
              "Winterschläfer",
              "Robin II",
              "Fortune Teller",
              "Hamburg",
              "Copper Shades",
              "Swim With Sam",
              "Herbst"
            ]
          },
          {
            "title": "Where Are You, Bambi Woods?",
            "publicationDate": "2008",
            "songs": [
              "Plan B",
              "Jesus Doesn't Love Me",
              "When Dean Was The Man (And Monroe Always Smiled)",
              "Nightmare On Elm Street",
              "Oh, California",
              "Mary Had A Secret",
              "Superman Can't Move His Legs",
              "Poster Child",
              "Welcome To Vegas",
              "Alright, Mr. Demille",
              "Where Are You, Bambi Woods?",
              "America America"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Oh California"
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "A Beautiful Silence",
        "genres": "Pop",
        "lifeSpan": "2005",
        "location": "Netherlands",
        "albums": [
          {
            "title": "Broken Hearts And Lessons Learned",
            "publicationDate": "2005",
            "songs": [
              "Instrumental",
              "There Is No Cure",
              "Waiting For You To Rip My Heart Out",
              "Sweet Dreams And Bitter Endings",
              "My Guardian Angel",
              "To Lead Astray",
              "Going Places",
              "You Break Me Down",
              "Could You Say",
              "Death Is A Part Of Life",
              "Big Booty Bitches"
            ]
          },
          {
            "title": "My Own Windy City",
            "publicationDate": "2006",
            "songs": [
              "B.L.I.N.G. (Being Lonely Is Never Good)",
              "Make Your Move",
              "You're Living A Lie",
              "My Guardian Angel",
              "We've Got Something Here",
              "I Won't Let You Go",
              "Grey Skies",
              "Say Hello To History For Me",
              "Dance With The Stars",
              "You Can Make This Easier",
              "Hope Is A Myth",
              "My Own Windy City"
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "A Band Called Pain",
        "genres": "Metal",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "Broken Dreams",
            "publicationDate": "2007",
            "songs": [
              "Holy",
              "State Of The Union",
              "The Pieces",
              "Grave",
              "Hole",
              "Broken Dreams",
              "The War Song",
              "How Would It Feel",
              "County Line",
              "Hellbound",
              "Freedom Ain't Free",
              "Charger",
              "Embrace The Pain",
              "Walk Away",
              "Ten Fold",
              "All Over Me",
              "Goodbye"
            ]
          },
          {
            "title": "Beautiful Gun",
            "publicationDate": "2010",
            "songs": [
              "Swallow",
              "Tuskegee Airmen",
              "Under My Skin",
              "Close My Eyes",
              "Beautiful Gun",
              "Push",
              "Ambivalent",
              "King Of Pain",
              "Descending",
              "Black Or White",
              "Blow It Away",
              "Nothing Lasts Forever",
              "The Day You Died",
              "Machine",
              "Long Way Down",
              "A Million Miles"
            ]
          }
        ]
      },
      {
        "id": 5,
        "name": "A Billion Ernies",
        "genres": "Rock",
        "lifeSpan": "2009",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Doomsday Robot Army",
              "Hermit Crab",
              "Stop Calling Us Ska",
              "All For The Money",
              "Choose",
              "Anonymous",
              "Fill Me Up",
              "Effect Of The Scene",
              "Please Do Not Reveal The Ending"
            ]
          }
        ]
      },
      {
        "id": 6,
        "name": "A Bird Flew",
        "genres": "",
        "lifeSpan": "",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Serpent"
            ]
          }
        ]
      },
      {
        "id": 7,
        "name": "A Black Rose Burial",
        "genres": "Metal",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "An Awakening Of Revenants",
            "publicationDate": "2005",
            "songs": [
              "Intro",
              "Straight From The Mind Of The Modern Day Vigilante",
              "A Baleful Aura...",
              "Intermission",
              "An Awakening Of Revenants",
              "The Epidemic Of Unexpected Relapses",
              "Outro"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Cobra Kai Versus Kobe Tai",
              "Tom Savini Versus Greg Nicotero",
              "Tony Danza Versus Groin Pains"
            ]
          }
        ]
      },
      {
        "id": 8,
        "name": "A Blinding Silence",
        "genres": "Metal",
        "lifeSpan": "2012",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "A Prayer Before Dying",
              "Miseries And Miracles",
              "Forever Is Ok",
              "When In Doubt",
              "To Sleep And Dream",
              "Promises",
              "Pedestal",
              "My Final Goodbye",
              "A Walk Alone",
              "Gibberish",
              "Here Before"
            ]
          }
        ]
      },
      {
        "id": 9,
        "name": "A Boy Named Thor",
        "genres": "Pop",
        "lifeSpan": "1998",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1998",
            "songs": [
              "Oops"
            ]
          }
        ]
      },
      {
        "id": 10,
        "name": "A Breath Before Surfacing",
        "genres": "Metal",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "Death Is Swallowed In Victory",
            "publicationDate": "2008",
            "songs": [
              "Summoning The Lord Of The Pit",
              "Trollz",
              "Disharmony Among Choirs",
              "Ray Road",
              "Cosmetic Abomination",
              "Writhing",
              "Just What The Monster Ordered",
              "Looking Into The Sun Without Going Blind",
              "A Night In Terror Tower",
              "Trainwreck",
              "Death Is Swallowed In Victory"
            ]
          }
        ]
      },
      {
        "id": 11,
        "name": "A Brand",
        "genres": "Rock",
        "lifeSpan": "2004",
        "location": "Belgium",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2004",
            "songs": [
              "Beauty Booty Killerqueen",
              "Electric Electric",
              "A Perfect Habitat For Foxes",
              "Fanzz",
              "U-Turn",
              "Tonight",
              "Some Peace",
              "Mutiny",
              "Interrupt My High",
              "Where's Your Heart",
              "'till Death",
              "Hammerhead"
            ]
          }
        ]
      },
      {
        "id": 12,
        "name": "A Broken Tomorrow",
        "genres": "Electro",
        "lifeSpan": "2007",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2007",
            "songs": [
              "I've Seen Prettier In Amsterdam",
              "When They Were Sinking"
            ]
          }
        ]
      },
      {
        "id": 13,
        "name": "A Broken Silence",
        "genres": "Rock",
        "lifeSpan": "2006",
        "location": "Australia",
        "albums": [
          {
            "title": "All For What...",
            "publicationDate": "2009",
            "songs": [
              "Are You Not Entertained",
              "Run A Check",
              "All For What",
              "The Pinnacle",
              "Rat Race",
              "If You Did Know",
              "Everyday",
              "By Your Laws",
              "The Road Is Lost",
              "This Nation",
              "There They Go",
              "Take This Mirror"
            ]
          },
          {
            "title": "A Broken Silence",
            "publicationDate": "2011",
            "songs": [
              "March To This Destiny",
              "What Are We Waiting For (Life Is So Wonderful)",
              "Hope",
              "Caught Up In Fiction",
              "Genesis Of Control",
              "Walls Collide",
              "Daydreams",
              "The Right Price",
              "Fearless",
              "Real Heroes",
              "Closing The Door",
              "Give 'Em Praise",
              "Keep Living Our Life"
            ]
          }
        ]
      },
      {
        "id": 14,
        "name": "A Bunny's Caravan",
        "genres": "Rock",
        "lifeSpan": "2006",
        "location": "Norway",
        "albums": [
          {
            "title": "Other songs",
            "publicationDate": "2006",
            "songs": [
              "Inclosed By Skies"
            ]
          }
        ]
      },
      {
        "id": 15,
        "name": "A C Roy",
        "genres": "Electro",
        "lifeSpan": "1995",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1995",
            "songs": [
              "Attention Pan",
              "Coca Cola Addict",
              "Fuck The Bouncers",
              "L.O.L",
              "Nothing Changes",
              "Way Too Blue"
            ]
          }
        ]
      },
      {
        "id": 16,
        "name": "A Call For Arms",
        "genres": "Metal",
        "lifeSpan": "2009",
        "location": "England",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2009",
            "songs": [
              "Insisted Suicide",
              "A Call For Arms",
              "Watch This City Burn",
              "Perish"
            ]
          }
        ]
      },
      {
        "id": 17,
        "name": "A Case Of Grenada",
        "genres": "Indé",
        "lifeSpan": "2003",
        "location": "Germany",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2003",
            "songs": [
              "Artificial Sun Kills Ideologists",
              "Electric Dance Floor Poetry",
              "Immaturity Of A Moment",
              "Signals On Displays",
              "Soaked In Blood",
              "The Secret In The Sound",
              "Traitors Manual",
              "As Far As We Can't See"
            ]
          }
        ]
      },
      {
        "id": 18,
        "name": "A Camp",
        "genres": "Pop",
        "lifeSpan": "2001",
        "location": "New York",
        "albums": [
          {
            "title": "A Camp",
            "publicationDate": "2001",
            "songs": [
              "Frequent Flyer",
              "I Can Buy You",
              "Angel Of Sadness",
              "Such A Bad Comedown",
              "Song For The Leftovers",
              "Walking The Cow",
              "Hard As A Stone",
              "Algebra",
              "Silent Night",
              "The Same Old Song",
              "The Oddness Of The Lord",
              "Rock 'n' Roll Ghost",
              "The Bluest Eyes In Texas",
              "Elephant"
            ]
          },
          {
            "title": "Colonia",
            "publicationDate": "2009",
            "songs": [
              "The Crowning",
              "Stronger Than Jesus",
              "Bear On The Beach",
              "Love Has Left The Room",
              "Golden Teeth And Silver Medals",
              "Here Are Many Wild Animals",
              "Chinatown",
              "My America",
              "Eau De Colonia",
              "I Signed The Line",
              "It's Not Easy To Be Human",
              "The Weed Had Got There First"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Bluest Eyes In Texas",
              "Charlie Charlie",
              "Daddy's Gone",
              "Deceased",
              "My Dad",
              "Rock N Roll Ghost",
              "Same Old Song",
              "Nathan Larson & Nina Persson:Angel's Fall",
              "Nina Persson:Food For The Beast"
            ]
          }
        ]
      },
      {
        "id": 19,
        "name": "A Chilling Silence",
        "genres": "",
        "lifeSpan": "2021",
        "location": "Sweden",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2021",
            "songs": [
              "Black Heart Lover"
            ]
          }
        ]
      },
      {
        "id": 20,
        "name": "A Challenge Of Honour",
        "genres": "Classical",
        "lifeSpan": "2000",
        "location": "Netherlands",
        "albums": [
          {
            "title": "Only Stones Remain",
            "publicationDate": "2001",
            "songs": [
              "Intro - Lijepa Nasa",
              "Jonestown",
              "The Home Coming",
              "The Samurai Way",
              "For Thy Master Honour",
              "Havamal",
              "The Raven",
              "Dum Pater Familias",
              "Niebelungen Land",
              "The Dragon's Breath",
              "Only Stones Remain",
              "Fatherless"
            ]
          },
          {
            "title": "Monuments",
            "publicationDate": "2004",
            "songs": [
              "An Introduction",
              "Ode To Solitude",
              "The Hope Of Truth (Vers. II)",
              "Theme For Play The Game",
              "The New Jerusalem",
              "My Lady's Grave",
              "Theme For Miller's Court",
              "Sudden Closure",
              "Sturm Der Stille",
              "Abatoir",
              "March Into Captivity",
              "The Morning Lays Behind Us"
            ]
          },
          {
            "title": "Seven Samurai",
            "publicationDate": "2005",
            "songs": [
              "Introduction",
              "Kambei",
              "The Village",
              "A Quest For Knights",
              "The Seventh Samurai",
              "Preparing The Village",
              "They Came Over The Hill",
              "The Final Confrontation",
              "Victorious"
            ]
          },
          {
            "title": "Iberia 2007",
            "publicationDate": "2007",
            "songs": [
              "Free The Mountain-People",
              "Arabian Tradition",
              "Le Fort De Souville",
              "Water On The Otherside (Instrumental)",
              "Der Feuerkreiner:Dioniso",
              "Der Feuerkreiner:Moderne Landschaft",
              "Der Feuerkreiner:Nein!"
            ]
          },
          {
            "title": "On compilations",
            "publicationDate": "",
            "songs": [
              "A Challenge Of Honour & Sturmpercht:Der Kalte Baum",
              "A Challenge Of Honour & Sturmpercht:Des Kreuzheers Schwerer Stahl"
            ]
          }
        ]
      },
      {
        "id": 21,
        "name": "A Change Of Pace",
        "genres": "Rock",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "Change Is The Only Constant",
            "publicationDate": "2003",
            "songs": [
              "Queen Of Hearts",
              "Chippie",
              "Goodbye For Now",
              "Pearl Summer",
              "Sell Out",
              "A Vague Memory",
              "Black Truth"
            ]
          },
          {
            "title": "An Offer You Can't Refuse",
            "publicationDate": "2005",
            "songs": [
              "Loose Lips Sink Ships",
              "Death Do Us Part",
              "Every Second",
              "Asleep At The Wheel",
              "December",
              "Know One Knows",
              "Home Is Where The Heart Is",
              "A Farewell To Friendship",
              "Chippie",
              "Goodbye For Now",
              "Queen Of Hearts"
            ]
          },
          {
            "title": "Prepare The Masses",
            "publicationDate": "2006",
            "songs": [
              "Prepare The Masses",
              "How To Rape A Country",
              "I'm Alive",
              "Shoot From The Hip",
              "Weekend Warriors",
              "White Lines And Lipstick",
              "A Song The World Can Sing Out Loud",
              "Take Care",
              "War In Your Bedroom",
              "I Wanna Be Your Rock & Roll",
              "Recipe For Disaster",
              "Safe And Sound In Phone Lines"
            ]
          },
          {
            "title": "Just No Better Way",
            "publicationDate": "2008",
            "songs": [
              "The First Time We Ever Met",
              "I Found Myself Today",
              "She Believed (Never In Herself)",
              "The Safest Place",
              "I'll Be There"
            ]
          },
          {
            "title": "It Could Be Worse",
            "publicationDate": "2011",
            "songs": [
              "Never Settle",
              "I Wanna Know",
              "What The Hell Happened",
              "Maybe Someday",
              "Weekend Warriors",
              "The Other Way",
              "Hot 'til She Talks",
              "I'll Be There",
              "Cut Me Off",
              "Let You Down",
              "Where Do I Go From Here"
            ]
          },
          {
            "title": "Songs from Singles/Compilations",
            "publicationDate": "",
            "songs": [
              "Christmas On The Coast",
              "I Never Knew",
              "The Thin Red Line",
              "In This Together"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Found Myself Today",
              "Girlfriend",
              "Loose Lips (Dvd)",
              "Till Death Due Us Part"
            ]
          }
        ]
      },
      {
        "id": 22,
        "name": "A City Serene",
        "genres": "Hardcore",
        "lifeSpan": "2008",
        "location": "United States",
        "albums": [
          {
            "title": "The Art Of Deceiving Perception",
            "publicationDate": "2009",
            "songs": [
              "With Swords Crossed",
              "Walk The Plank",
              "The Escape",
              "I Guess It's Curtains For You"
            ]
          }
        ]
      },
      {
        "id": 23,
        "name": "A City Static",
        "genres": "Hardcore",
        "lifeSpan": "2014",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2014",
            "songs": [
              "Running Never Did Anything",
              "Oceans Apart"
            ]
          }
        ]
      },
      {
        "id": 24,
        "name": "A Covenant Of Thorns",
        "genres": "Pop",
        "lifeSpan": "1992",
        "location": "United States",
        "albums": [
          {
            "title": "Hallowed & Hollow",
            "publicationDate": "1999",
            "songs": [
              "Love Crooked Love",
              "Empty Exorcism",
              "Tears And Roses",
              "Purgatory",
              "Forever",
              "Transparent",
              "Drive Me Home",
              "Necropolis",
              "Deep",
              "Home",
              "Never Fade Away"
            ]
          },
          {
            "title": "If The Heavens Should Fall",
            "publicationDate": "2004",
            "songs": [
              "If The Heavens Should Fall",
              "State Of Mind",
              "This Decay",
              "Angel (How Can I Go On?)",
              "Saline And Bitter",
              "Serafina",
              "I'll See The Stars",
              "Only A Priest",
              "Alone In A Crowd",
              "Shell Of A Saint",
              "Lonely, Like A Satellite",
              "Dreaming"
            ]
          }
        ]
      },
      {
        "id": 25,
        "name": "A Crying Shame",
        "genres": "Pop",
        "lifeSpan": "1993",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1993",
            "songs": [
              "Coheed And Cambria Eat Your Heart Out",
              "Are You There?",
              "Let Go",
              "In The Night",
              "This Last Breath",
              "Mr. Potatohead"
            ]
          }
        ]
      },
      {
        "id": 26,
        "name": "A Corpse Named Abel",
        "genres": "Metal",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2001",
            "songs": [
              "Feel You Breathe",
              "Devil Dressed Lovely",
              "Titus Arum",
              "The Great Escape",
              "Dead Set On Dying Slow",
              "Fin"
            ]
          }
        ]
      },
      {
        "id": 27,
        "name": "A Current Affair",
        "genres": "Hardcore",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2006",
            "songs": [
              "Explorer",
              "Life In An Hourglass",
              "Life Of Me",
              "Love One Another",
              "The Real Devastation",
              "The Search",
              "The Theif"
            ]
          }
        ]
      },
      {
        "id": 28,
        "name": "A Cut Below The Rest",
        "genres": "Rock",
        "lifeSpan": "1998",
        "location": "England",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Color Blind",
              "Hating The Sky"
            ]
          }
        ]
      },
      {
        "id": 29,
        "name": "A Cutthroat Kiss",
        "genres": "Hardcore",
        "lifeSpan": "2002",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2002",
            "songs": [
              "Breathe",
              "Cut An X",
              "Cutthroat",
              "Dear Friends",
              "Gasoline Sunsets",
              "Scream Silence Now",
              "The Way We Used To..."
            ]
          }
        ]
      },
      {
        "id": 30,
        "name": "A Cor Do Som",
        "genres": "Jazz",
        "lifeSpan": "1997",
        "location": "Brazil",
        "albums": [
          {
            "title": "Geração Pop",
            "publicationDate": "1994",
            "songs": [
              "Beleza Pura",
              "Abri A Porta",
              "Palco",
              "Transe Total",
              "Menino Deus",
              "Magia Tropical",
              "Arpoador",
              "Alto Astral",
              "Suingue Menina",
              "Zero",
              "Frutificar",
              "Mudança De Estação",
              "Zanzibar (As Cores)",
              "Assanhado"
            ]
          },
          {
            "title": "Mudança De Estação",
            "publicationDate": "1994",
            "songs": [
              "Saudação À Paz",
              "Zero",
              "Ar De Baião",
              "Asas Musicais",
              "Alto Astral",
              "Apanhei-Te Mini-Moog",
              "Escapuliu Tudo Areia",
              "Mudança De Estação",
              "Swingue",
              "O Show Não Tem Final",
              "Voo Da Borboleta",
              "Cinema Mudo",
              "Ciranda Nas Estrelas",
              "Boa Vibração"
            ]
          },
          {
            "title": "Ao Vivo No Circo",
            "publicationDate": "1999",
            "songs": [
              "Beleza Pura",
              "Zero/Abri A Porta",
              "Mudança De Estação",
              "Onde Todos Estão",
              "Pororocas",
              "Menino Deus",
              "Yesterday",
              "Suingue Menina/Semento Do Amor",
              "Frutificar",
              "Dentro Da Minha Cabeça",
              "Zanzibar (As Cores)"
            ]
          },
          {
            "title": "E- Collection",
            "publicationDate": "2001",
            "songs": [
              "Arpoador",
              "Abri A Porta",
              "Beleza Pura",
              "Swingue Menina",
              "Palco",
              "Zanzibar (As Cores)",
              "Massaranduba",
              "Alto Astral",
              "Mudança De Estação",
              "Menino Deus",
              "Goma De Mascar",
              "Sargento Pimenta E Banda Da Solidao",
              "Dentro Da Minha Cabeca",
              "A Abobada Da Vida"
            ]
          },
          {
            "title": "Acústico",
            "publicationDate": "2005",
            "songs": [
              "Saudação A Paz",
              "Semente Do Amor",
              "Zanzibar (As Cores)",
              "Os \"Pingo\" Da Chuva",
              "Swingue Menina",
              "Davilicença",
              "Noites Cariocas",
              "Amor Inteiro (Oxalá)",
              "O Dia De Amanhã",
              "Abri A Porta",
              "Zero",
              "Menino Deus",
              "Beleza Pura",
              "Tocar",
              "Frutificar",
              "Pela Beira Do Mar (Versão Estúdio)"
            ]
          },
          {
            "title": "Nova Série",
            "publicationDate": "2008",
            "songs": [
              "Alto Astral",
              "Abri A Porta",
              "Arpoador",
              "Beleza Pura",
              "Palco",
              "Swingue Menina",
              "Zanzibar (As Cores)",
              "Menino Deus",
              "Maçaranduba",
              "As Quatro Fases Do Amor",
              "Goma De Mascar",
              "Tigresa",
              "Mudança De Estação",
              "Som Da Cor"
            ]
          },
          {
            "title": "Warner 30 Anos",
            "publicationDate": "2008",
            "songs": [
              "Menino Deus",
              "Abri A Porta",
              "Palco",
              "Beleza Pura",
              "Alto Astral",
              "Zanzibar (As Cores)",
              "As Quatro Fases Do Amor",
              "Tigresa",
              "Swingue Menina",
              "Sonho Molhado",
              "Assanhado",
              "Dança, Saci (Ao Vivo)",
              "Arpoador",
              "Eleanor Rigby"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Bruno E Daniel",
              "Dança Das Fadas",
              "Maracangalha",
              "Moleque Sacana",
              "Para Ser O Sol",
              "Parraforr",
              "Semente De Amor",
              "Stacimirim",
              "Ticaricuriquet",
              "Viver Para Sorrir"
            ]
          }
        ]
      },
      {
        "id": 31,
        "name": "A Dark Performance",
        "genres": "Rock",
        "lifeSpan": "2004",
        "location": "United States",
        "albums": [
          {
            "title": "Act. I",
            "publicationDate": "2004",
            "songs": [
              "Hollow",
              "Dialogue",
              "Last Act Of A Sickening Show",
              "Open Minds Will Dominate",
              "Shadowy Season (A Ravenous Moon)",
              "Of Dream And Redemption",
              "Fire Across The Land",
              "Fading Away",
              "The Funeral",
              "Senseless Dilemma",
              "Dreadful Dream",
              "Away From The Shadows"
            ]
          }
        ]
      },
      {
        "id": 32,
        "name": "A Day Before Sunrise",
        "genres": "Rock",
        "lifeSpan": "2000",
        "location": "Switzerland",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2000",
            "songs": [
              "Aeroplane",
              "Bela Lugosi",
              "Leave Me Alone",
              "Nine Numbers",
              "Raindrops",
              "Set Fire",
              "Voices Over A Heartbeat"
            ]
          }
        ]
      },
      {
        "id": 33,
        "name": "A Day In Black And White",
        "genres": "Rock",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "Split EP",
            "publicationDate": "2004",
            "songs": [
              "In A Grove",
              "What Do You Want Me To Do, Sign Your Freakin' Yearbook?",
              "Part One"
            ]
          },
          {
            "title": "My Heroes Have Always Killed Cowboys",
            "publicationDate": "2004",
            "songs": [
              "Forward / Backward",
              "There Are Objects & Objects",
              "Storming The Bastille",
              "The Gaze",
              "The Illusion Of The End"
            ]
          },
          {
            "title": "Split EP",
            "publicationDate": "2005",
            "songs": [
              "Nothing With Nothing",
              "All Plots",
              "Old Songs"
            ]
          },
          {
            "title": "Notes",
            "publicationDate": "2005",
            "songs": [
              "Tinnitus",
              "New Energy",
              "A Literal Title",
              "Lame Duck",
              "Less Is More",
              "Long-Distance Song Effects",
              "Nothing With Nothing",
              "A Good Turn",
              "Ronald's Right",
              "All Plots",
              "Sink Brand Cut Wrist"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Foward / Backward"
            ]
          }
        ]
      },
      {
        "id": 34,
        "name": "A Day's Refrain",
        "genres": "Hardcore",
        "lifeSpan": "2002",
        "location": "United States",
        "albums": [
          {
            "title": "A Day's Refrain",
            "publicationDate": "2002",
            "songs": [
              "Stand By",
              "We Grow Numb",
              "Longest Five Miles",
              "When You're Done Screaming",
              "Rebecca",
              "D1",
              "No Tradebacks",
              "Photoalbum",
              "In Retrospect",
              "Are You Listening Or Just Waiting For Your Turn To Speak?",
              "May 18th",
              "Statistic"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "District Eleven",
              "Forces Of Habit",
              "Don't Fake The Funk"
            ]
          }
        ]
      },
      {
        "id": 35,
        "name": "A Dead God...",
        "genres": "Metal",
        "lifeSpan": "2008",
        "location": "",
        "albums": [
          {
            "title": "Demo 2008: Just Look At The World Around You",
            "publicationDate": "2008",
            "songs": [
              "Unleash Thyself",
              "To Wonder Among The Stars",
              "Eternal Gloom",
              "Forever Torment"
            ]
          }
        ]
      },
      {
        "id": 36,
        "name": "A Day Of Pigs",
        "genres": "Hardcore",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "The Oath",
            "publicationDate": "2006",
            "songs": [
              "Through Time",
              "My Dying Rose",
              "Black Cobra",
              "Forever My Dead"
            ]
          },
          {
            "title": "Lecherous",
            "publicationDate": "2007",
            "songs": [
              "Inomminate",
              "In Blood I Lust",
              "In The Crease",
              "How To Kill A Witch",
              "665",
              "Way To Go Fuckface",
              "We Are The Serpent",
              "Before The Gutting",
              "Pikey",
              "1000 Diamonds",
              "The Lions Cry",
              "My Dying Rose",
              "667"
            ]
          }
        ]
      },
      {
        "id": 37,
        "name": "A Decent Animal",
        "genres": "Rock",
        "lifeSpan": "1995",
        "location": "England",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1995",
            "songs": [
              "First We See If It Fits"
            ]
          }
        ]
      },
      {
        "id": 38,
        "name": "A Different Breed Of Killer",
        "genres": "Metal",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "I, Colossus",
            "publicationDate": "2008",
            "songs": [
              "Dawning",
              "Liberation Of A Giant",
              "The Accidentist",
              "I, Colossus",
              "Autonomy",
              "Omega",
              "To Dismantle The Architect (The Meeting)",
              "The Cleansing Apparatus",
              "The Glorious Fall",
              "Aural Apocalypse"
            ]
          },
          {
            "title": "Demos",
            "publicationDate": "",
            "songs": [
              "The Accidentist",
              "Walking Desecration"
            ]
          }
        ]
      },
      {
        "id": 39,
        "name": "A Dying Daydream",
        "genres": "Rock",
        "lifeSpan": "1999",
        "location": "Belgium",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Under The Rainbow Bleeds Red"
            ]
          }
        ]
      },
      {
        "id": 40,
        "name": "A Dying Dream",
        "genres": "",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2006",
            "songs": [
              "Believe",
              "Hourglass Effect",
              "Now Or Never",
              "Sight For Sore Eyes",
              "The Sky's The Limit",
              "Few And Far Between"
            ]
          }
        ]
      },
      {
        "id": 41,
        "name": "A Fading Memory",
        "genres": "",
        "lifeSpan": "2009",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2009",
            "songs": [
              "Give The Boy Some Room",
              "There's No Time For Timeouts",
              "The Sunrise Anthem"
            ]
          }
        ]
      },
      {
        "id": 42,
        "name": "A Dying God",
        "genres": "",
        "lifeSpan": "2014",
        "location": "",
        "albums": [
          {
            "title": "Anthems To Ascension",
            "publicationDate": "2014",
            "songs": [
              "Zarathustran Blues",
              "Aspernementum",
              "Vitriolic Roars Of The Betrayed",
              "Promethean Fire",
              "Freedom Is The Death Of Union"
            ]
          }
        ]
      },
      {
        "id": 43,
        "name": "A Farewell Rescue",
        "genres": "Rock",
        "lifeSpan": "2007",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2007",
            "songs": [
              "You'll Never Work In This Town Again"
            ]
          }
        ]
      },
      {
        "id": 44,
        "name": "A Faith Called Chaos",
        "genres": "",
        "lifeSpan": "2001",
        "location": "",
        "albums": [
          {
            "title": "Forgive Nothing",
            "publicationDate": "2004",
            "songs": [
              "They Leave A Small Hum In Their Wake",
              "Circa '98",
              "We Woke Up A Fire",
              "Forgive Nothing",
              "Boxing With Bayonets",
              "Witless And White Knuckled",
              "The Tenessee Promise Still Loves The Texas Lie",
              "The Pugilist",
              "Ten Thousand Times Tongue And Cheek",
              "I Hate This City"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "The Tennessee Promise Still Loves The Texas Lie",
              "Pugilist"
            ]
          }
        ]
      },
      {
        "id": 45,
        "name": "A Fall To Break",
        "genres": "Rock",
        "lifeSpan": "2011",
        "location": "United States",
        "albums": [
          {
            "title": "The Man In The Mask",
            "publicationDate": "2011",
            "songs": [
              "Right Now",
              "Make Me Bleed",
              "The Man In The Mask",
              "Better Off Alone",
              "Use These Scars",
              "Tell Me",
              "Nothing Without You",
              "I'm Sorry",
              "What Are You Fighting For",
              "Don't Know About You",
              "Whats The Matter",
              "Ignite",
              "Getting Nowhere",
              "I've Died",
              "Signs I'm Alive"
            ]
          },
          {
            "title": "September Falls",
            "publicationDate": "2012",
            "songs": [
              "Guilty Conscience",
              "Won't Change",
              "The Things You Couldn't Do",
              "Dig Deep",
              "Can't Let Go",
              "Fall Down",
              "Run",
              "Beside You",
              "Lost, Left, All Alone",
              "Face This Fight",
              "September Falls"
            ]
          }
        ]
      },
      {
        "id": 46,
        "name": "A Few Good Men",
        "genres": "Jazz",
        "lifeSpan": "1993",
        "location": "",
        "albums": [
          {
            "title": "Take A Dip",
            "publicationDate": "1995",
            "songs": [
              "Tonite",
              "Walk You Thru",
              "Let's Take A Dip",
              "All Of My Love",
              "Please Baby Don't Cry (Interlude)",
              "Have I Never",
              "A Thang For You",
              "Young Girl",
              "Don't Cry (Behind My Back)",
              "Sexy Day",
              "A Good Man",
              "1-900-G-Man (How I Say I Love You)"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Southern Girl"
            ]
          }
        ]
      },
      {
        "id": 47,
        "name": "A Fight Called Hope",
        "genres": "Rock",
        "lifeSpan": "2006",
        "location": "Germany",
        "albums": [
          {
            "title": "Demo 2006",
            "publicationDate": "2006",
            "songs": [
              "Leaving Life",
              "Choose Your End",
              "In Your Head",
              "Why Do We Fear",
              "When Light Casts A Shade",
              "Goodbye (See You In Time)"
            ]
          }
        ]
      },
      {
        "id": 48,
        "name": "A Foot In Coldwater",
        "genres": "Rock",
        "lifeSpan": "1970",
        "location": "Canada",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "(Make Me Do) Anything You Want",
              "Make Me Do Anything You Want"
            ]
          }
        ]
      },
      {
        "id": 49,
        "name": "A Fine Boat, That Coffin!",
        "genres": "Jazz",
        "lifeSpan": "2006",
        "location": "Germany",
        "albums": [
          {
            "title": "Second Nail",
            "publicationDate": "2006",
            "songs": [
              "Spritze",
              "Confessions 0.1",
              "Confessions 0.2",
              "Eine Kugel Scheint Der Einzige Trost Für Ein Einsames Herz Zu Sein",
              "I Wanna Eat Your Face",
              "Zerfall Von Molekülen In Einfachere Bestandteile",
              "Ey, Haste Ne Bombe Geköpft Oder Was?",
              "Mannstopmunition",
              "Ins Fernsehen? Wo Muss Ich Unterschreiben?",
              "Ich Bin Nicht Stiller",
              "Night Ray",
              "Wir Nehmen Abschied"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Eine Frage: Design Oder Fratze?"
            ]
          }
        ]
      },
      {
        "id": 50,
        "name": "A Flock Of Seagulls",
        "genres": "Punk",
        "lifeSpan": "1980",
        "location": "United Kingdom",
        "albums": [
          {
            "title": "Modern Love Is Automatic",
            "publicationDate": "1981",
            "songs": [
              "Modern Love Is Automatic",
              "D.N.A.",
              "Windows",
              "You Can Run"
            ]
          },
          {
            "title": "A Flock Of Seagulls",
            "publicationDate": "1982",
            "songs": [
              "I Ran (So Far Away)",
              "Space Age Love Song",
              "You Can Run",
              "Don't Ask Me",
              "Messages",
              "Telecommunication",
              "Modern Love Is Automatic",
              "Standing In The Doorway",
              "D.N.A.",
              "Man Made"
            ]
          },
          {
            "title": "Listen",
            "publicationDate": "1983",
            "songs": [
              "Wishing (If I Had A Photograph Of You)",
              "Nightmares",
              "Transfer Affection",
              "What Am I Supposed To Do?",
              "Electrics",
              "The Traveller",
              "2:30",
              "Over The Border",
              "The Fall",
              "(It's Not Me) Talking",
              "Committed",
              "Quicksand",
              "I Ran (So Far Away)"
            ]
          },
          {
            "title": "The Story Of A Young Heart",
            "publicationDate": "1984",
            "songs": [
              "The Story Of A Young Heart",
              "Never Again (The Dancer)",
              "The More You Live, The More You Love",
              "European (I Wish I Was)",
              "Remember David",
              "Over My Head",
              "Heart Of Steel",
              "The End",
              "Suicide Day",
              "Living In Heaven"
            ]
          },
          {
            "title": "Dream Come True",
            "publicationDate": "1985",
            "songs": [
              "Better & Better",
              "Heartbeat Like A Drum",
              "Who's That Girl (She's Got It)",
              "Hot Tonight",
              "Cry Like A Baby",
              "Say So Much",
              "Love On Your Knees",
              "How Could You Ever Leave Me",
              "Whole Lot Of Loving"
            ]
          },
          {
            "title": "The Light At The End Of The World",
            "publicationDate": "1995",
            "songs": [
              "Burnin' Up",
              "Magic",
              "Setting Sun",
              "Rainfall",
              "Ordinary Man",
              "You're Mine",
              "Walking In The Garden",
              "Hearts On Fire",
              "Life Is Easy",
              "Say You Love Me",
              "The Light At The End Of The World",
              "Seven Seas"
            ]
          }
        ]
      },
      {
        "id": 51,
        "name": "A Friend In London",
        "genres": "Pop",
        "lifeSpan": "2005",
        "location": "Denmark",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "New Tomorrow"
            ]
          }
        ]
      },
      {
        "id": 52,
        "name": "A Foot In The Grave",
        "genres": "Rock",
        "lifeSpan": "2005",
        "location": "",
        "albums": [
          {
            "title": "Rock N Growl",
            "publicationDate": "2005",
            "songs": [
              "Inside My Head",
              "In My Grave",
              "Against The Wind"
            ]
          }
        ]
      },
      {
        "id": 53,
        "name": "A Genuine Freakshow",
        "genres": "Pop",
        "lifeSpan": "2005",
        "location": "United Kingdom",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Hopscotch Machine Gun Madness"
            ]
          }
        ]
      },
      {
        "id": 54,
        "name": "A Frames",
        "genres": "Rock",
        "lifeSpan": "1999",
        "location": "United States",
        "albums": [
          {
            "title": "Black Forest",
            "publicationDate": "2005",
            "songs": [
              "Black Forest I",
              "Experiment",
              "Galena",
              "Death Train",
              "Flies",
              "Eva Braun",
              "Black Forest II",
              "Quantum Mechanic",
              "Memoranda",
              "U-Boat",
              "My Teacher",
              "Age Of Progress",
              "Negative",
              "Black Forest III"
            ]
          }
        ]
      },
      {
        "id": 55,
        "name": "A Giants Moment",
        "genres": "Pop",
        "lifeSpan": "1982",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Rhetts Song",
              "Where Will You Go?"
            ]
          }
        ]
      },
      {
        "id": 56,
        "name": "A Girl Called Eddy",
        "genres": "Pop",
        "lifeSpan": "1999",
        "location": "United States",
        "albums": [
          {
            "title": "A Girl Called Eddy",
            "publicationDate": "2004",
            "songs": [
              "Tears All Over Town",
              "Kathleen",
              "Girls Can Really Tear You Up Inside",
              "The Long Goodbye",
              "Somebody Hurt You",
              "People Used To Dream About The Future",
              "Heartache",
              "Life Thru The Same Lens",
              "Did You See The Moon Tonight",
              "Little Bird",
              "Golden"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Baby Plays Around",
              "Tears All Over",
              "The Little Boy That Santa Claus Forgot",
              "The Same Old Tears",
              "The Soundtrack Of Your Life"
            ]
          }
        ]
      },
      {
        "id": 57,
        "name": "A Girl Called Jane",
        "genres": "",
        "lifeSpan": "2007",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2007",
            "songs": [
              "He's Alive"
            ]
          }
        ]
      },
      {
        "id": 58,
        "name": "A Good Day For Killing",
        "genres": "",
        "lifeSpan": "2003",
        "location": "",
        "albums": [
          {
            "title": "AssAsSin",
            "publicationDate": "2003",
            "songs": [
              "Let's Kill Someone",
              "A Good Day For Killing",
              "Death Gate Opened",
              "Ghoul"
            ]
          }
        ]
      },
      {
        "id": 59,
        "name": "A Great Big World",
        "genres": "Pop",
        "lifeSpan": "2012",
        "location": "United States",
        "albums": [
          {
            "title": "Is There Anybody Out There?",
            "publicationDate": "2014",
            "songs": [
              "Rockstar",
              "Land Of Opportunity",
              "Already Home",
              "I Really Want It",
              "Say Something",
              "You'll Be Okay",
              "Everyone Is Gay",
              "There Is An Answer",
              "I Don't Wanna Love Somebody Else",
              "This Is The New Year",
              "Shorty Don't Wait",
              "Cheer Up!",
              "Say Something"
            ]
          },
          {
            "title": "When The Morning Comes",
            "publicationDate": "2015",
            "songs": [
              "All I Want Is Love",
              "Kaleidoscope",
              "End Of The World",
              "Hold Each Other",
              "Oasis",
              "Come On",
              "Won't Stop Running",
              "One Step Ahead",
              "The Future's Right In Front Of Me",
              "When The Morning Comes",
              "Where Does The Time Go?"
            ]
          },
          {
            "title": "Songs Featuring A Great Big World",
            "publicationDate": "",
            "songs": [
              "Ingrid Michaelson:Over You"
            ]
          }
        ]
      },
      {
        "id": 60,
        "name": "A Great Big Pile Of Leaves",
        "genres": "Indé",
        "lifeSpan": "2007",
        "location": "United States",
        "albums": [
          {
            "title": "The Fiery Works",
            "publicationDate": "2007",
            "songs": [
              "User's Guide To A Coloring Book",
              "Mystery Of The Brain",
              "Conscious And The Fiery Works",
              "Hey Tangerine!",
              "This Is A Country Song...",
              "Workeatsleep"
            ]
          },
          {
            "title": "The Fiery Works II",
            "publicationDate": "2008",
            "songs": [
              "Sleepsleepsleep",
              "Bring Back Recess",
              "The Size Of Dinosaurs",
              "Spanish For Smile",
              "Drought Of Snow"
            ]
          }
        ]
      },
      {
        "id": 61,
        "name": "A Gun Called Tension",
        "genres": "",
        "lifeSpan": "2005",
        "location": "United States",
        "albums": [
          {
            "title": "A Gun Called Tension",
            "publicationDate": "2005",
            "songs": [
              "Hero",
              "Gold Fronts",
              "Interview",
              "5 + 1",
              "Treason",
              "Electric Chair",
              "Foundation",
              "Lyrics",
              "7th Of May",
              "Thelonius",
              "Document",
              "Thelonius"
            ]
          }
        ]
      },
      {
        "id": 62,
        "name": "A Heart Fades Forever",
        "genres": "Metal",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2001",
            "songs": [
              "Beyond My Grasp",
              "Amidst The Eternity Of Tomorrow",
              "The Echoes That Last Forever"
            ]
          }
        ]
      },
      {
        "id": 63,
        "name": "A Guy Called Gerald",
        "genres": "",
        "lifeSpan": "1967",
        "location": "United Kingdom",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1967",
            "songs": [
              "Alien Report",
              "Beaches And Deserts",
              "Could You Understand",
              "Fever (Or A Flame)",
              "Fever",
              "Final Call",
              "Glow",
              "Humanity",
              "Hurry To Go Easy",
              "I Make It You Take It",
              "I Make It",
              "Landed",
              "Multiples",
              "Multiplies",
              "Scale Circle",
              "The First Breath",
              "The Universe",
              "Universal Spirit"
            ]
          }
        ]
      },
      {
        "id": 64,
        "name": "A Halo Called Fred",
        "genres": "Rock",
        "lifeSpan": "2001",
        "location": "United States",
        "albums": [
          {
            "title": "Chester's Dozen",
            "publicationDate": "2001",
            "songs": [
              "Ode To Steve",
              "Butt!",
              "Lollipop",
              "Damaged",
              "In My Dreams",
              "Mr. Hooper",
              "Fraggle Fragment",
              "Sun's Shining Rays Of Love",
              "Hugs Are Better Than Drugs",
              "70's Clothes",
              "Fire Alarm",
              "Fred",
              "My Name Is Satan",
              "Change Of My Mind",
              "Sensitive",
              "(Hat)",
              "Y Chromosome",
              "I Don't Wanna It'll Hurt",
              "(Oh! You Know What We Didn't Do? What? 'essence Of Comedy.' Duh!)",
              "La La La La La",
              "Hugs Are Better Than Drugs",
              "Brain",
              "Thwacking Simon Against The Floor",
              "Kill Kill Kill",
              "Damged",
              "The Elephant Song",
              "Suck My Haircut",
              "I Don't Wanna It'll Hurt",
              "May Day",
              "Fred",
              "He Wasn't My Friend So I Killed Him",
              "(Hat)"
            ]
          },
          {
            "title": "Sgt. Pepper's Lonely Hearts Club Band",
            "publicationDate": "2004",
            "songs": [
              "Please Stop Kicking My Head",
              "Mexican Love Song Or Love Song For (Insert Your Name Here)",
              "Dr. Dog",
              "I Wanna Be Your Nose",
              "Blymy The Pirate",
              "Pretty Flower",
              "Obsequious",
              "Brain",
              "Schmuck",
              "Butt!",
              "Aliens",
              "Bugs",
              "Love Stinks",
              "The Essence Of Comedy",
              "Dead Guy",
              "Bernie's Chart",
              "Save The Toads",
              "Hub City Spoke Repair",
              "Heinously Inconsiderate",
              "Symphony Number 9",
              "Ralphquest",
              "Mr. Fucky-Fuck Face"
            ]
          },
          {
            "title": "Necessity Is The Motherfucker Of Invention",
            "publicationDate": "2000",
            "songs": [
              "Dig:",
              "Minuet In F",
              "The King Of Bean",
              "Nekkid Hoedown",
              "Chicken Boy",
              "Satan's Lullaby",
              "Clown Nose",
              "I Think I'll Go Back There",
              "Hypothetical Twist",
              "Normalize It",
              "Zoom Zebbatab",
              "Hoochless Torso",
              "Joke Song",
              "A Pitiful Song",
              "15'00\"",
              "Minuet In F",
              "Chicken Boy",
              "I Think I'll Go Back There",
              "Zoom Zebbatab"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Dig",
              "Hat",
              "I Don't Wanna, It'll Hurt",
              "My Brain",
              "The Sun's Shining Rays Of Love",
              "You Schmuck"
            ]
          }
        ]
      },
      {
        "id": 65,
        "name": "A Hole Inside",
        "genres": "Rock",
        "lifeSpan": "1989",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1989",
            "songs": [
              "A Hole Inside",
              "Failed",
              "Promise",
              "Worth To Steal"
            ]
          }
        ]
      },
      {
        "id": 66,
        "name": "A Hope For Home",
        "genres": "Metal",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "Here, The End",
            "publicationDate": "2007",
            "songs": [
              "Casting Light Through Such Thin Shades",
              "The Residuum",
              "(Grace) We Are The Heirs!",
              "Verily I Say, Unto You",
              "Of Water And The Spirit",
              "My Path, Ascending",
              "Kyle",
              "If, And Only If",
              "The Human Project Lives",
              "Yea, The Cold Embrace Of The Sea",
              "Here, The End"
            ]
          },
          {
            "title": "The Everlasting Man",
            "publicationDate": "2009",
            "songs": [
              "The Covenant",
              "Iniquity: An Offering",
              "Affliction: The Witness, The Advocate",
              "Infidelity: Kingdom's End",
              "The Exile",
              "Babylon: The Insatiable Thirst",
              "Absolution: Of Flight And Failure",
              "Masada: The Spiral Staircase",
              "Restoration: The Return From Exile",
              "Redemption: A Grief Observed",
              "The Thousand Years"
            ]
          },
          {
            "title": "Realis",
            "publicationDate": "2010",
            "songs": [
              "Nightfall",
              "The Overmen",
              "Withering Branches",
              "The Machine Stops",
              "No Light",
              "Post Tenebras Lux",
              "First Light Of Dawn",
              "The Crippling Fear",
              "The Warmth Of The Heavens",
              "Seasons",
              "Ascension",
              "After"
            ]
          }
        ]
      },
      {
        "id": 67,
        "name": "A House",
        "genres": "",
        "lifeSpan": "1985",
        "location": "Ireland",
        "albums": [
          {
            "title": "On Our Big Fat Merry-Go-Round",
            "publicationDate": "1988",
            "songs": [
              "Call Me Blue",
              "I Want To Kill Something",
              "I'll Always Be Grateful",
              "My Little Lighthouse",
              "Watch Out You're Dead",
              "Don't Ever Think You're Different",
              "That's Not The Truth",
              "Love Of The Eighties",
              "Violent Love",
              "Love Quarry",
              "Clump Of Trees",
              "Stone The Crows",
              "Hay When The Sun Shines",
              "Freak Out"
            ]
          },
          {
            "title": "I Want Too Much",
            "publicationDate": "1990",
            "songs": [
              "13 Wonderful Love Songs",
              "I Want Too Much",
              "Talking",
              "The Patron Saint Of Mediocrity",
              "Shivers Up My Spine",
              "Marry Me",
              "I Give You You",
              "Now That I'm Sick",
              "I Think I'm Going Mad",
              "Bring Down The Beast",
              "Manstrong",
              "Keep The Homefires Burning",
              "You'll Cry When I Die",
              "Small Talk"
            ]
          },
          {
            "title": "I Am The Greatest",
            "publicationDate": "1991",
            "songs": [
              "I Don't Care",
              "You're Too Young",
              "Endless Art",
              "Blind Faith",
              "Cotton Pickers",
              "How Strong Is Love",
              "When I First Saw You",
              "I Am Afraid",
              "Victor",
              "Take It Easy On Me",
              "Creatures Of Craze",
              "Slipping Away",
              "I Wanted Too Much",
              "I Lied",
              "Live Life Dead Die",
              "I Am The Greatest"
            ]
          }
        ]
      },
      {
        "id": 68,
        "name": "A Kid Named Thompson",
        "genres": "",
        "lifeSpan": "2008",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2008",
            "songs": [
              "I Want To Wake Up"
            ]
          }
        ]
      },
      {
        "id": 69,
        "name": "A Jealousy Issue",
        "genres": "Rock",
        "lifeSpan": "2002",
        "location": "United States",
        "albums": [
          {
            "title": "Somebody Shoot Me, I Think I'm In Love",
            "publicationDate": "2002",
            "songs": [
              "Burning Butterflies",
              "Dollface",
              "Paperweight",
              "In The Shape Of Stars",
              "Take A Picture, She'll Last Longer"
            ]
          },
          {
            "title": "If The Flames Don't Kill Us... We Will",
            "publicationDate": "2003",
            "songs": [
              "Dance Of The Demons (Intro)",
              "Midnights With The Monster Squad",
              "Who Crucified The Chaperone?",
              "Scheming Dreaming Juggernaut",
              "Burning Butterflies",
              "Dollface",
              "Paperweight",
              "In The Shape Of Stars",
              "Take A Picture, She'll Last Longer",
              "Psychology Of Optional Experience"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "And Days Were Longer",
              "Like Dynamite"
            ]
          }
        ]
      },
      {
        "id": 70,
        "name": "A Kidnap In Color",
        "genres": "Rock",
        "lifeSpan": "2008",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2008",
            "songs": [
              "Call Me Crazy",
              "The Rumours Are Flying",
              "Miss Scarlet, In The Ballroom, With The Revolver",
              "Lust Be A Lady",
              "Leave The Light On",
              "Treason In The High Court",
              "Just Another Romantic",
              "A Problem A Bottle Of Rum Won't Fix",
              "By Invitation Only"
            ]
          }
        ]
      },
      {
        "id": 71,
        "name": "A La Carte",
        "genres": "Disco",
        "lifeSpan": "1978",
        "location": "Germany",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1979",
            "songs": [
              "Doctor, Doctor (Help Me Please)",
              "In The Summer Sun Greece",
              "River Blues",
              "When The Boys Come Home",
              "You Get Me On The Run",
              "Ahe Tamoure",
              "Have You Forgotten",
              "In The Summer Sun Of Greece",
              "River Blue",
              "Viva Torero",
              "You Get Me On The Rund"
            ]
          }
        ]
      },
      {
        "id": 72,
        "name": "A Klana Indiana",
        "genres": "Disco",
        "lifeSpan": "1998",
        "location": "Austria",
        "albums": [
          {
            "title": "Jetzt Muss Es Raus",
            "publicationDate": "1999",
            "songs": [
              "Intro",
              "Call Me Indiana",
              "Mei Squaw Wü' 6 Mal Jede Nacht",
              "Twist No. Sex",
              "10 Klane Indiana",
              "Uiii, Is Des Bled !",
              "Du Da!",
              "Zicke Zacke",
              "7 Klane Indiana",
              "A Klana Indiana",
              "Indiana - Medley",
              "4 Klane Indiana",
              "Jeronimo",
              "Twist No. Sex-Remix",
              "Indiana Ehrenwort"
            ]
          }
        ]
      },
      {
        "id": 73,
        "name": "A Lesson Learned",
        "genres": "Rock",
        "lifeSpan": "2012",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2012",
            "songs": [
              "Im Blue A Ba Di A Ba Die"
            ]
          }
        ]
      },
      {
        "id": 74,
        "name": "A Legend Falls",
        "genres": "",
        "lifeSpan": "2003",
        "location": "England",
        "albums": [
          {
            "title": "Chaos Becomes Us",
            "publicationDate": "2003",
            "songs": [
              "Post-Mortem Pre-Ævum",
              "The Voice Inside",
              "The Lesser Of Evil",
              "Elegy To Empathy",
              "And As The Sun Stills...",
              "Never",
              "Sullen",
              "Chaos Becomes Us",
              "Abhorrent Ascent",
              "Requiem For The Masses"
            ]
          },
          {
            "title": "Analyzing Tactics Of The Morally Dead & Dying",
            "publicationDate": "2005",
            "songs": [
              "Opus No. 17",
              "Progeny & Poltergeist",
              "Opus No. 16",
              "The Ominous",
              "Opus No. 20",
              "A Separation Of Sentiments",
              "Opus No. 19",
              "Of Treachery And Romance",
              "Form Of Kypris",
              "Childern Of Lilth"
            ]
          }
        ]
      },
      {
        "id": 75,
        "name": "A Liar Wrote This Symphony",
        "genres": "",
        "lifeSpan": "",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "What Shade We Make"
            ]
          }
        ]
      },
      {
        "id": 76,
        "name": "A Life In Vain",
        "genres": "Metal",
        "lifeSpan": "2003",
        "location": "Norway",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2003",
            "songs": [
              "This Isn't A Funeral"
            ]
          }
        ]
      },
      {
        "id": 77,
        "name": "A Life Like This",
        "genres": "",
        "lifeSpan": "",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Daybreak",
              "This Song Could Save Us",
              "So It's Solitaire"
            ]
          }
        ]
      },
      {
        "id": 78,
        "name": "A Life Divided",
        "genres": "Rock",
        "lifeSpan": "2003",
        "location": "Germany",
        "albums": [
          {
            "title": "Virtualized",
            "publicationDate": "2003",
            "songs": [
              "Criticize",
              "I Am God",
              "Virtualized",
              "Static",
              "Somebody",
              "Ignorance",
              "Pieces",
              "Breathe",
              "Unlike",
              "Sounds Like A Melody",
              "Heaven",
              "No World Order",
              "Only Night"
            ]
          },
          {
            "title": "Far",
            "publicationDate": "2006",
            "songs": [
              "Anyone",
              "Isolation",
              "Some Kind Of Grey",
              "Hand Of Healing",
              "The Ordinary",
              "Solid",
              "Tools Of A Freakness",
              "Friends",
              "So Far To Go",
              "Leaving",
              "Free",
              "I Hope You'll Make It To The West",
              "The Persistence Of Memory",
              "Matter Of Sight",
              "Cry For Help"
            ]
          },
          {
            "title": "Passenger",
            "publicationDate": "2011",
            "songs": [
              "Heart On Fire",
              "Forever",
              "Anyone",
              "Words",
              "Hey You",
              "Doesn't Count",
              "Save Me",
              "Other Side",
              "Sounds Like A Melody",
              "Change",
              "The End"
            ]
          },
          {
            "title": "The Great Escape",
            "publicationDate": "2013",
            "songs": [
              "The Lost",
              "It Ain't Good",
              "Clouds Of Glass",
              "The Last Dance",
              "Game Over",
              "Feel",
              "Perfect Day",
              "Foreign Rain",
              "Wait For Me",
              "Goodbye",
              "On The Edge",
              "Space",
              "If You Want To",
              "The Last Dance",
              "Ever Changing World",
              "It's Alright",
              "Perpetual",
              "The Way",
              "Everything Is Anything",
              "Always On My Mind",
              "Feel"
            ]
          },
          {
            "title": "Human",
            "publicationDate": "2015",
            "songs": [
              "Burst",
              "The Most Beautiful Black",
              "Inside Me",
              "Own Mistake",
              "Right Where I Belong",
              "Could You",
              "Drive",
              "My Apology",
              "Believe",
              "Lay Me Down",
              "Happy End"
            ]
          }
        ]
      },
      {
        "id": 79,
        "name": "A Lost Cause",
        "genres": "",
        "lifeSpan": "1997",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1997",
            "songs": [
              "April 7",
              "Sally",
              "I'm Not A Kid"
            ]
          }
        ]
      },
      {
        "id": 80,
        "name": "A Lost People",
        "genres": "",
        "lifeSpan": "",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Big Booty Bitches"
            ]
          }
        ]
      },
      {
        "id": 81,
        "name": "A Loss For Words",
        "genres": "Rock",
        "lifeSpan": "1999",
        "location": "Boston",
        "albums": [
          {
            "title": "These Past 5 Years",
            "publicationDate": "2005",
            "songs": [
              "Introduction",
              "A Theme For Your Ego",
              "Bullets Leave Holes",
              "Hot Hand In A Dice Game",
              "Death Or Glory",
              "Shoot For Seven",
              "Kill With Style"
            ]
          },
          {
            "title": "Webster Lake",
            "publicationDate": "2008",
            "songs": [
              "All Roads Lead Home",
              "Face To Face",
              "Wrightsville Beach",
              "Highway 24 Revisited",
              "It's Good To Be Back In Eastern Standard"
            ]
          },
          {
            "title": "The Kids Can't Lose",
            "publicationDate": "2009",
            "songs": [
              "Stamp Of Approval",
              "40 Thieves",
              "Where I'm From, You Die With Your Secrets",
              "Hold Your Breath",
              "Mt. St. Joseph",
              "The Promises You Keep (Burn This Bridge)",
              "Heavy Lies The Crown",
              "Wasted Youth",
              "Half Step Down",
              "Behind Our Backs",
              "Hot Hand In A Dice Game"
            ]
          },
          {
            "title": "Motown Classics",
            "publicationDate": "2010",
            "songs": [
              "All Night Long",
              "Do You Love Me",
              "I Just Called To Say I Love You",
              "I Want You Back",
              "My Girl",
              "Reach Out (I'll Be There)",
              "Tears Of A Clown",
              "This Old Heart Of Mine",
              "What's Goin On",
              "You Can't Hurry Love"
            ]
          },
          {
            "title": "No Sanctuary",
            "publicationDate": "2011",
            "songs": [
              "Honeymoon Eyes",
              "Pray for Rain",
              "Pirouette",
              "Raining Excuses",
              "The Hammers Fall",
              "The Lost Cause I Used to Be",
              "No Sanctuary",
              "JMR",
              "Jetsetter",
              "Finite",
              "Wrightsville Beach"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Broke Don't Fix",
              "My Blood Is Too Thick For Nevada",
              "Overflow"
            ]
          }
        ]
      },
      {
        "id": 82,
        "name": "A Media Tea",
        "genres": "Rock",
        "lifeSpan": "1990",
        "location": "Canadian",
        "albums": [
          {
            "title": "Con Uñas Y Dientes",
            "publicationDate": "2011",
            "songs": [
              "Sin Trampa Ni Cartón",
              "Dame Más",
              "A Un Nombre De Cuento",
              "Huye Conmigo",
              "Un Último Paseo",
              "Comienza La Cuenta Atrás",
              "Insaciable",
              "Aroma De Bar",
              "A Pelo",
              "A-4"
            ]
          }
        ]
      },
      {
        "id": 83,
        "name": "A Love Like Pi",
        "genres": "Rock",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "The Atlas And The Oyster",
            "publicationDate": "2009",
            "songs": [
              "The Oyster",
              "Honesty",
              "Atlas",
              "Innocent Man",
              "Oh, Everything",
              "Take It Back",
              "A Merry Cain",
              "All You Do With Guilt, Iscariot",
              "My Body",
              "Young Men",
              "Oh Lolita",
              "The Piper"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "2008",
            "songs": [
              "Broken Hands",
              "I Am A Soldier",
              "It's Not An Embrace When Your Arms Are Nailed Open",
              "Keep My Lovers True"
            ]
          }
        ]
      },
      {
        "id": 84,
        "name": "A Million Engines In Neutral",
        "genres": "",
        "lifeSpan": "1995",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Big City Go Easy",
              "Travis Bickle",
              "The Bottom Of A Charcoal Grill",
              "Bigger Brushes, Brighter Colors"
            ]
          }
        ]
      },
      {
        "id": 85,
        "name": "A Million Dead Birds Laughing",
        "genres": "",
        "lifeSpan": "2011",
        "location": "Australia",
        "albums": [
          {
            "title": "Force Fed Enlightenment",
            "publicationDate": "2011",
            "songs": ["Purpose","Defiants","Conduit","161"]
          },
          {
            "title": "Xen",
            "publicationDate": "2012",
            "songs": ["Zombie","King","Quantum","Goliath"]
          }
        ]
      },
      {
        "id": 86,
        "name": "A Million Kittens, Inc",
        "genres": "Rock",
        "lifeSpan": "1998",
        "location": "England",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "A Maze Of Graves",
              "Johnnie Walker, Texas Ranger",
              "The Bothered Son And Phony Ghost",
              "Six Months For A Sick Drunk",
              "One Day All This Will Be Yours",
              "The Next Voice You Hear",
              "The Inaccurate Conception",
              "What An Ordeal",
              "Sharpen The Cutlass"
            ]
          }
        ]
      },
      {
        "id": 87,
        "name": "A Moment Spent",
        "genres": "",
        "lifeSpan": "",
        "location": "",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Smothered Flames",
              "Grand Scheme",
              "Sequels & Songwriters"
            ]
          }
        ]
      },
      {
        "id": 88,
        "name": "A Long Winter",
        "genres": "Rock",
        "lifeSpan": "1988",
        "location": "United States",
        "albums": [
          {
            "title": "Breathing Underwater",
            "publicationDate": "2000",
            "songs": [
              "Too Far To Fly",
              "Portraits Hung In Empty Halls",
              "These Eyes Will Remember",
              "Just One Kiss"
            ]
          },
          {
            "title": "I'm So Bad With Goodbyes...",
            "publicationDate": "2002",
            "songs": [
              "Razel Got Her Wings",
              "She's Gone But Her Ghost Still Haunts Me",
              "Her Delicate Yearning",
              "The Boy From Judecca",
              "If Everything Ends, Please Don't Leave Me",
              "What Runs Through",
              "Juliet",
              "The Summers Seem Like Days, And The Days Seem Like Seconds"
            ]
          }
        ]
      },
      {
        "id": 89,
        "name": "A Minute Till Midnight",
        "genres": "Metal",
        "lifeSpan": "2007",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2007",
            "songs": [
              "Crown Tipping",
              "Silence The Dreamer",
              "Carrier Pigeons",
              "Bullet Belt Disco"
            ]
          }
        ]
      },
      {
        "id": 90,
        "name": "A Minute To Pray A Second To Die",
        "genres": "Punk",
        "lifeSpan": "1981",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1981",
            "songs": [
              "8688",
              "Yamaha Potato Head",
              "Doomsday (The Fall From Grace)",
              "Die Hard"
            ]
          }
        ]
      },
      {
        "id": 91,
        "name": "A Murder Of Crows",
        "genres": "",
        "lifeSpan": "2003",
        "location": "Metal",
        "albums": [
          {
            "title": "Genesis",
            "publicationDate": "2004",
            "songs": [
              "Great White Balls Of Fire",
              "Assassinations And Conversations",
              "I'm An Expert In Nameology",
              "Consequences Of Trying To Have A Relationship With A Crackhead",
              "Jack Bauer",
              "The Path Of Rust"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "Coraliza"
            ]
          }
        ]
      },
      {
        "id": 92,
        "name": "A New Kind Of American Saint",
        "genres": "Rock",
        "lifeSpan": "2000",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "There's Only One Rule In This Town (A.K.A. Knock Knock Knockin'...",
              "Jesus Wasn't Straightedge, But I Am",
              "If It Ain't Shit...It Ain't Shit",
              "Don't Let These Tight Pants Fool You, I'm All Heart Motherfucker"
            ]
          }
        ]
      },
      {
        "id": 93,
        "name": "A New Challenger Approaches",
        "genres": "",
        "lifeSpan": "2014",
        "location": "United States",
        "albums": [
          {
            "title": "Dead Inside",
            "publicationDate": "2014",
            "songs": [
              "Dead Inside",
              "Charon",
              "Obsidian Empire",
              "The Red Scarf",
              "Fenrir",
              "Pray To The Sharks",
              "Ellie"
            ]
          }
        ]
      },
      {
        "id": 94,
        "name": "A Night In Texas",
        "genres": "Metal",
        "lifeSpan": "2009",
        "location": "Australian",
        "albums": [
          {
            "title": "Invigoration",
            "publicationDate": "2013",
            "songs": [
              "Invigoration",
              "Throne Of Flies",
              "Orphan Of Humanity",
              "Human Castle",
              "Defaming The Omega"
            ]
          },
          {
            "title": "The God Delusion",
            "publicationDate": "2015",
            "songs": [
              "The God Delusion",
              "Satan's Upheaval",
              "Throne Of Flies II",
              "Apostasy",
              "I, Godless",
              "Heathen",
              "The Priest Of Lechery",
              "Death Scripture",
              "The River Of Pain"
            ]
          }
        ]
      },
      {
        "id": 95,
        "name": "A New January",
        "genres": "Electro",
        "lifeSpan": "1996",
        "location": "United States",
        "albums": [
          {
            "title": "Patchwork Shadows",
            "publicationDate": "1996",
            "songs": [
              "Change",
              "Babble",
              "Last Time",
              "Loss",
              "Hidden",
              "Bleed",
              "Sweet Enough To Steal",
              "Shallow Expectations",
              "Witchling",
              "On The Edge",
              "Subtract",
              "Cream"
            ]
          },
          {
            "title": "After Clothes",
            "publicationDate": "1998",
            "songs": [
              "After Clothes",
              "Partially Unbroken",
              "After Clothes",
              "Shallow Expectations",
              "After Clothes",
              "Virtues",
              "Green",
              "After Clothes",
              "Forever In A Day"
            ]
          },
          {
            "title": "Cold And Naked",
            "publicationDate": "2003",
            "songs": [
              "Take It From Me",
              "Worlds Are Breaking Down",
              "Tisiver Ssol",
              "Flicker",
              "Jaded",
              "Shape Your Tongue",
              "Uncreate",
              "Drown",
              "Just Like Heaven",
              "Pushing (Way Too Hard)",
              "Tooms",
              "Imbroglio",
              "Next To Nothing",
              "Transparent",
              "Take It From Me"
            ]
          },
          {
            "title": "Self-Medicate",
            "publicationDate": "2007",
            "songs": [
              "Heartburst",
              "Waited So Long",
              "Suffer Stains",
              "The Matter",
              "Wrapped In Cellophane",
              "Outburn",
              "When You Fall",
              "Blasphemous Rumours"
            ]
          },
          {
            "title": "Compilation Appearances",
            "publicationDate": "",
            "songs": [
              "It Happens All The Time"
            ]
          }
        ]
      },
      {
        "id": 96,
        "name": "A Novel Form",
        "genres": "",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2006",
            "songs": [
              "Fake It Face It",
              "Kiss And Tell",
              "Isint That You Wrapped Around Him"
            ]
          }
        ]
      },
      {
        "id": 97,
        "name": "A Petty Pensieve",
        "genres": "",
        "lifeSpan": "1995",
        "location": "Germany",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "1995",
            "songs": [
              "Gone",
              "Of Dreams And Stars",
              "Harry Don't You See"
            ]
          }
        ]
      },
      {
        "id": 98,
        "name": "A Place Called Here",
        "genres": "",
        "lifeSpan": "2000",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "2000",
            "songs": [
              "Rise Above The Streetlights",
              "The Dawn Of The White Whore"
            ]
          }
        ]
      },
      {
        "id": 99,
        "name": "A Perfect Kiss",
        "genres": "",
        "lifeSpan": "2002",
        "location": "United States",
        "albums": [
          {
            "title": "In Spite Of Angels",
            "publicationDate": "2002",
            "songs": [
              "Seven And A Half Years Of Waiting",
              "My Disaster",
              "Song",
              "Night",
              "Supernatural Superglue",
              "Briana",
              "Angels",
              "Fading",
              "The Dream Is Over",
              "In Spite Of My Angel",
              "End Of An Error",
              "A Drop Of Water To Cool My Tongue"
            ]
          },
          {
            "title": "The Olympians",
            "publicationDate": "2006",
            "songs": [
              "Bottom Of The Sunrise",
              "A Memory Less Traveled",
              "D-Up! (In Chapel Hill)",
              "The Medication",
              "The End Wasted",
              "Idiot Penguin",
              "Ardent Decay",
              "Disquiet",
              "Ashes (Of My Pajama Pants)",
              "Once = Always?"
            ]
          }
        ]
      },
      {
        "id": 100,
        "name": "A Pink",
        "genres": "Pop",
        "lifeSpan": "2011",
        "location": "South Korea",
        "albums": [
          {
            "title": "Seven Springs Of Apink",
            "publicationDate": "2011",
            "songs": [
              "Seven Springs Of Apink",
              "몰라요",
              "It Girl",
              "Wishlist",
              "Boo"
            ]
          },
          {
            "title": "Une Annee",
            "publicationDate": "2012",
            "songs": [
              "Une Annee",
              "Hush",
              "고양이",
              "4월 19일",
              "Bubibu",
              "Step",
              "Boy",
              "I Got You",
              "하늘 높이"
            ]
          },
          {
            "title": "Secret Garden",
            "publicationDate": "2013",
            "songs": [
              "U You",
              "No No No",
              "Lovely Day",
              "난 니가 필요해",
              "Secret Garden"
            ]
          },
          {
            "title": "Pink Blossom",
            "publicationDate": "2014",
            "songs": [
              "Sunday Mpnday",
              "Mr Chu",
              "사랑동화",
              "So Long"
            ]
          },
          {
            "title": "Pink Luv",
            "publicationDate": "2014",
            "songs": [
              "LUV",
              "Wanna Be",
              "Secret",
              "천사가 아냐",
              "동화 같은 사랑",
              "Good Morning Baby",
              "My Darling"
            ]
          },
          {
            "title": "Pink Memory",
            "publicationDate": "2015",
            "songs": [
              "Remember",
              "Perfume",
              "끌려",
              "Dejavu",
              "꽃잎점",
              "What A Boy Wants",
              "I DO",
              "신기하죠",
              "Remember (Instr.)",
              "새끼손가락"
            ]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": [
              "No No No (Japanese Version)",
              "Mr Chu (Japanese Version)"
            ]
          }
        ]
      })
    return this.artistes;
  }
}
