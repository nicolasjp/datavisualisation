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
      "name": "A Band Called Pain",
      "genres": "Heavy Metal",
      "lifeSpan": "2001",
      "location": "United States",
      "albums": [
        {
          "title": "Broken Dreams",
          "publicationDate": "2007",
          "songs": ["Holy", "State Of The Union", "The Pieces", "Grave", "Hole", "Broken Dreams", "The War Song",
            "How Would It Feel", "County Line", "Hellbound", "Freedom Ain't Free", "Charger", "Embrace The Pain",
            "Walk Away", "Ten Fold", "All Over Me", "Goodbye"
          ]
        },
        {
          "title": "Beautiful Gun",
          "publicationDate": "2010",
          "songs": ["Swallow","Tuskegee Airmen","Under My Skin","Close My Eyes","Beautiful Gun","Push","Ambivalent",
            "King Of Pain","Descending","Black Or White","Blow It Away","Nothing Lasts Forever","The Day You Died",
            "Machine","Long Way Down","A Million Miles"
          ]
        }
      ]
    },
    {
      "id": 2,
      "name": "A Black Rose Burial",
      "genres": "",
      "lifeSpan": "2001",
      "location": "United States",
      "albums": [
        {
          "title": "An Awakening Of Revenants",
          "publicationDate": "2005",
          "songs": ["Intro","Straight From The Mind Of The Modern Day Vigilante","A Baleful Aura...","Intermission",
            "An Awakening Of Revenants","The Epidemic Of Unexpected Relapses","Outro"
          ]
        },
        {
          "title": "Other Songs",
          "publicationDate": "",
          "songs": ["Cobra Kai Versus Kobe Tai","Tom Savini Versus Greg Nicotero","Tony Danza Versus Groin Pains"]
        }
      ]
    },
    {
      "id": 3,
      "name": "A Breath Before Surfacing",
      "genres": "Deathcore",
      "lifeSpan": "2006",
      "location": "United States",
      "albums": [
        {
          "title": "Death Is Swallowed In Victory",
          "publicationDate": "2008",
          "songs": ["Summoning The Lord Of The Pit","Trollz","Disharmony Among Choirs","Ray Road","Cosmetic Abomination",
            "Writhing","Just What The Monster Ordered","Looking Into The Sun Without Going Blind","A Night In Terror Tower",
            "Trainwreck","Death Is Swallowed In Victory"
          ]
        }
      ]
    },
    {
      "id": 4,
      "name": "A Brand",
      "genres": "",
      "lifeSpan": "2004",
      "location": "Belgium",
      "albums": [
        {
          "title": "Other Songs",
          "publicationDate": "",
          "songs": ["Beauty Booty Killerqueen","Electric Electric","A Perfect Habitat For Foxes","Fanzz","U-Turn",
            "Tonight","Some Peace","Mutiny","Interrupt My High","Where's Your Heart","'till Death","Hammerhead"
          ]
        }
      ]
    },
    {
      "id": 5,
      "name": "A Camp",
      "genres": "Rock",
      "lifeSpan": "2001",
      "location": "Sweden",
      "albums": [
        {
          "title": "A Camp",
          "publicationDate": "2001",
          "songs": ["Frequent Flyer","I Can Buy You","Angel Of Sadness","Such A Bad Comedown","Song For The Leftovers",
            "Walking The Cow","Hard As A Stone","Algebra","Silent Night","The Same Old Song","The Oddness Of The Lord",
            "Rock 'n' Roll Ghost","The Bluest Eyes In Texas","Elephant"
          ]
        },
        {
          "title": "Colonia",
          "publicationDate": "2009",
          "songs": ["The Crowning","Stronger Than Jesus","Bear On The Beach","Love Has Left The Room",
            "Golden Teeth And Silver Medals","Here Are Many Wild Animals","Chinatown","My America","Eau De Colonia",
            "I Signed The Line","It's Not Easy To Be Human","The Weed Had Got There First"
          ]
        },
        {
          "title": "Other Songs",
          "publicationDate": "",
          "songs": ["Bluest Eyes In Texas","Charlie Charlie","Daddy's Gone","Deceased","My Dad","Rock N Roll Ghost",
            "Same Old Song","Nathan Larson & Nina Persson:Angel's Fall","Nina Persson:Food For The Beast"
          ]
        }
      ]
    },
    {
      "id": 6,
      "name": "A Challenge Of Honour",
      "genres": "Classical",
      "lifeSpan": "2000",
      "location": "Netherlands",
      "albums": [
        {
          "title": "Only Stones Remain",
          "publicationDate": "2001",
          "songs": ["Intro - Lijepa Nasa","Jonestown","The Home Coming","The Samurai Way","For Thy Master Honour",
            "Havamal","The Raven","Dum Pater Familias","Niebelungen Land","The Dragon's Breath","Only Stones Remain",
            "Fatherless"
          ]
        },
        {
          "title": "Monuments",
          "publicationDate": "2004",
          "songs": ["An Introduction","Ode To Solitude","The Hope Of Truth (Vers. II)","Theme For Play The Game",
            "The New Jerusalem","My Lady's Grave","Theme For Miller's Court","Sudden Closure","Sturm Der Stille",
            "Abatoir","March Into Captivity","The Morning Lays Behind Us"
          ]
        },
        {
          "title": "Seven Samurai",
          "publicationDate": "2005",
          "songs": ["Introduction","Kambei","The Village","A Quest For Knights","The Seventh Samurai",
            "Preparing The Village","They Came Over The Hill","The Final Confrontation","Victorious"
          ]
        },
        {
          "title": "Iberia 2007",
          "publicationDate": "2007",
          "songs": ["Free The Mountain-People","Arabian Tradition","Le Fort De Souville",
            "Water On The Otherside (Instrumental)","Der Feuerkreiner:Dioniso",
            "Der Feuerkreiner:Moderne Landschaft","Der Feuerkreiner:Nein!"
          ]
        },
        {
          "title": "On compilations",
          "publicationDate": "",
          "songs": ["A Challenge Of Honour & Sturmpercht:Der Kalte Baum",
            "A Challenge Of Honour & Sturmpercht:Des Kreuzheers Schwerer Stahl"
          ]
        }
      ]
    },
    {
      "id": 7,
      "name": "A Hope For Home",
      "genres": "Metal",
      "lifeSpan": "2006",
      "location": "United States",
      "albums": [
        {
          "title": "Here, The End",
          "publicationDate": "2007",
          "songs": ["Casting Light Through Such Thin Shades", "The Residuum", "(Grace) We Are The Heirs!", "Verily I Say, Unto You",
              "Of Water And The Spirit", "My Path, Ascending", "Kyle", "If, And Only If", "The Human Project Lives",
              "Yea, The Cold Embrace Of The Sea", "Here, The End"
          ]
        }
      ]
    },
    {
      "id": 8,
      "name": "A Life Divided",
      "genres": "Rock",
      "lifeSpan": "2003",
      "location": "Germany",
      "albums": [
        {
          "title": "Virtualized",
          "publicationDate": "2003",
          "songs": ["Criticize", "I Am God", "Virtualized", "Somebody", "Ignorance", "Pieces", "Breathe", "Unlike",  "Sounds Like A Melody", "Heaven",  "No World Order",
            "Only Night"]
        }
      ]
    },
      {
        "id": 9,
        "name": "A Loss For Words",
        "genres": "Pop",
        "lifeSpan": "1999",
        "location": "United States",
        "albums": [
          {
            "title": "These Past 5 Years",
            "publicationDate": "2005",
            "songs": ["Introduction", "A Theme For Your Ego", "Bullets Leave Holes",
              "Hot Hand In A Dice Game", "Death Or Glory", "Shoot For Seven", "Kill With Style"]
          }
        ]
      },
      {
        "id": 10,
        "name": "A Current Affair",
        "genres": "",
        "lifeSpan": "2006",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": ["Explorer", "Life In An Hourglass", "Life Of Me", "Love One Another",
              "The Real Devastation", "The Search", "The Theif"]
          }
        ]
      },
      {
        "id": 11,
        "name": "A Love Ends Suicide",
        "genres": "",
        "lifeSpan": "2004",
        "location": "United States",
        "albums": [
          {
            "title": "The Cycle Of Hope",
            "publicationDate": "2005",
            "songs": ["The Cycle Of Hope", "Let's Spark To Fire", "Another Revolution", "Cold Summer", "Of Day Dream And Fantasy", "The Black Art", "Voices Of Channel Seven", "Romance Creates Killers", "Dying To Be Beautiful", "The 3 Minute Man", "W.T.F. Happened To Skate Junction"]
          },
          {
            "title": "In The Disaster",
            "publicationDate": "2006",
            "songs": ["Cold Summer", "In The Disaster", "Of Day Dream And Fantasy", "Let's Spark To Fire", "The Black Art", "Romance Creates Killers", "Amadeus", "Another Revolution", "Dying To Be Beautiful", "Skate Junction", "Heroes Of Faith"]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": ["Heros Of Faith", "Lets Spark The Fire"]
          }
        ]
      },
      {
        "id": 12,
        "name": "A Million Dead Birds Laughing",
        "genres": "",
        "lifeSpan": "2008",
        "location": "Australia",
        "albums": [
          {
            "title": "Force Fed Enlightenment",
            "publicationDate": "2011",
            "songs": ["Conduit", "Void", "Forcefed", "Edge", "Requiem", "Defiants", "Purpose", "Willow", "Oracle", "Leech", "161", "Invader", "Agony"]
          },
          {
            "title": "Xen",
            "publicationDate": "2012",
            "songs": ["Nest", "Beast", "Goliath", "Terminal",  "Martyr",  "Jackal",  "Hydra", "King", "Quantum", "Ulcer", "Spirit","Xen", "Yeti", "Zombie"]
          }
        ]
      },
      {
        "id": 13,
        "name": "A Mind Confused",
        "genres": "",
        "lifeSpan": "1993",
        "location": "Sweden",
        "albums": [
          {
            "title": "Poems Of A Darker Soul",
            "publicationDate": "1995",
            "songs": ["Eternal Sleep", "Dreams Of An Erotic Salvation", "A Mind Confused", "Poems Of A Darker Soul", "Morningstar In Zenith", "Forever Autumn"]
          },
          {
            "title": "Anarchos",
            "publicationDate": "1997",
            "songs": ["Bloodpoem", "Consecration Of Death", "Seducer Of Pain Divine", "Obliteration", "Ophidia Astrum",
              "Suffer My Deeds", "Sanctum Black", "Anarchos", "Eternal Sleep", "Out Of Chaos Spawn"]
          }
        ]
      },
      {
        "id": 14,
        "name": "A New Dawn",
        "genres": "",
        "lifeSpan": "2004",
        "location": "Netherlands",
        "albums": [
          {
            "title": "The Wisdom Of Hindsight",
            "publicationDate": "2004",
            "songs": ["The Wisdom Of Hindsight", "Kissed Goodbye", "Eagle", "Last Dawn", "Victimless Tragedy"]
          },
          {
            "title": "Falling From Grace",
            "publicationDate": "2008",
            "songs": ["Black Lotus", "Living Lie", "Veil Of Charity", "Darkness Falls", "The Wisdom Of Hindsight",
              "Prelude To A Farewell", "Kissed Goodbye", "Victimless Tragedy", "Winter", "Descending (Ascension Part II)",
              "Ascension (Part III)"]
          }
        ]
      },
      {
        "id": 15,
        "name": "A Pale Horse Named Death",
        "genres": "",
        "lifeSpan": "2010",
        "location": "United States",
        "albums": [
          {
            "title": "And Hell Will Follow Me",
            "publicationDate": "2011",
            "songs": ["And Hell Will Follow Me", "As Black As My Heart", "To Die In Your Arms", "Heroin Train", "Devil In The Closet","Cracks In The Walls", "Bad Dream", "Bath In My Blood (Schizophrenia In Me)", "Pill Head", "Meet The Wolf", "Serial Killer", "When Crows Descend Upon You", "Die Alone"]
          },
          {
            "title": "Lay My Soul To Waste",
            "publicationDate": "2013",
            "songs": ["Lay My Soul To Waste", "Shallow Grave",  "The Needle In You", "In The Sleeping Death","Killer By Night", "Growing Old", "Dead Of Winter", "Devil Came With A Smile", "Day Of The Storm", "DMSLT",  "Cold Dark Mourning"]
          }
        ]
      },
      {
        "id": 16,
        "name": "A Dream Too Late",
        "genres": "",
        "lifeSpan": "2007",
        "location": "United States",
        "albums": [
          {
            "title": "Intermission To The Moon",
            "publicationDate": "2007",
            "songs": ["14th & Knott","Do You Believe? (In Ghosts)","The Life","Be Honest","Can I Start New?","Daylight","Airsick","A Night Polaris"]
          },
          {
            "title": "Other Songs",
            "publicationDate": "2008",
            "songs": ["14th And Knott","City Park"]
          }
        ]
      },
      {
        "id": 17,
        "name": "A Dream Of Poe",
        "genres": "",
        "lifeSpan": "2005",
        "location": "England",
        "albums": [
          {
            "title": "Delirium Tremens",
            "publicationDate": "2006",
            "songs": ["The Dawn","A Forest","The Conqueror Worm","Laudanum","Gentle Whisper","For My Fallen Angel","Whispers Of Osiris"]
          },
          {
            "title": "Lady Of Shalott",
            "publicationDate": "2010",
            "songs": ["Lady Of Shalott", "Lady Of Shalott (Short Version)", "If Only Tonight We Could Sleep", "Laudanum",
              "Whispers Of Osiris", "The Mirror Of Deliverance", "Os Vultos", "Lady Of Shalott", "Liber XLIX",
              "The Lost King Of The Lyre", "Chrysopoeia"]
          }
        ]
      },
      {
        "id": 18,
        "name": "A Death For Every Sin",
        "genres": "",
        "lifeSpan": "1999",
        "location": "Canada",
        "albums": [
          {
            "title": "In A Time Where Hope Is Lost",
            "publicationDate": "2002",
            "songs": ["Suffer The Loss", "Born To Lose", "Memories Remain", "Something To Die For", "Tortured Days",
              "Beyond The Tears", "The Black Path", "Throne Of Depravity", "Filled With Sorrow", "Utopia's Demise"]
          }
        ]
      },
      {
        "id": 19,
        "name": "A Petal Fallen",
        "genres": "",
        "lifeSpan": "2002",
        "location": "United States",
        "albums": [
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": ["The Second Grain Of Salt"]
          }
        ]
      },
      {
        "id": 20,
        "name": "A Place To Bury Strangers",
        "genres": "",
        "lifeSpan": "2003",
        "location": "United States",
        "albums": [
          {
            "title": "A Place To Bury Strangers",
            "publicationDate": "2007",
            "songs": ["Missing You","Don't Think Lover", "To Fix The Gash In Your Head",
              "The Falling Sun", "Another Step Away", "Breathe", "I Know I'll See You",
              "She Dies", "My Weakness", "Ocean"]
          },
          {
            "title": "Exploding Head",
            "publicationDate": "2009",
            "songs": ["It Is Nothing", "In Your Heart", "Lost Feeling", "Deadbeat",
              "Ego Death", "Smile When You Smile", "Everything Always Goes Wrong",
              "Exploding Head", "I Lived My Life To Stand In The Shadow Of Your Heart"]
          },
          {
            "title": "Worship",
            "publicationDate": "2012",
            "songs": ["Alone", "You Are The One", "Mind Control", "Worship", "Fear"]
          },
          {
            "title": "Transfixiation",
            "publicationDate": "2015",
            "songs": ["Supermaster", "Straight", "Love High", "Deeper", "Lower Zone",
              "I Will Die"]
          },
          {
            "title": "Other Songs",
            "publicationDate": "",
            "songs": ["The Light"]
          }
        ]
      },
      {
        "id": 21,
        "name": "A Day To Remember",
        "genres": "Metal",
        "lifeSpan": "2003",
        "location": "United States",
        "albums": [
          {
            "title": "2004 Demos",
            "publicationDate": "2004",
            "songs": ["This Sun Has Set","If Looks Could Kill...Then I'd Be Dead","When 3's A Crowd","Breathe Hope In Me"]
          },
          {
            "title": "And Their Name Was Treason",
            "publicationDate": "2005",
            "songs": ["Intro","A Second Glance","Casablanca Sucked Anyways","If Looks Could Kill","You Had Me At Hello","Sound The Alarm"]
          },
          {
            "title": "For Those Who Have Heart",
            "publicationDate": "2007",
            "songs": ["Fast Forward To 2012","Speak Of The Devil","The Danger In Starting A Fire","The Plot To Bomb The Panhandle","Monument","The Price We Pay","Colder Than My Heart, If You Can Imagine","Show 'Em The Ropes","A Shot In The Dark","Here's To The Past","Start The Shooting","Heartless","Why Walk On Water When We've Got Boats"]
          },
          {
            "title": "Homesick",
            "publicationDate": "2009",
            "songs": ["The Downfall Of Us All", "I'm Made Of Wax, Larry, What Are You Made Of?", "NJ Legion Iced Tea",
              "Have Faith In Me", "Welcome To The Family", "Homesick", "Holdin' It Down For The Underground",
              "Another Song About The Weekend", "If It Means A Lot To You", "Sticks & Bricks", "This Is The House That Doubt Built",
              "You Be Tails, I'll Be Sonic", "Out Of Time", "Right Where You Want Me To Be", "Over My Head (Cable Car)",
              "Right Back At It Again", "Dead & Buried", "I'm Already Gone"]
          }
        ]
      },
      {
        "id": 22,
        "name": "A Death Among Heroes",
        "genres": "Deathcore",
        "lifeSpan": "2008",
        "location": "United States",
        "albums": [
          {
            "title": "Stand Strong",
            "publicationDate": "2009",
            "songs": ["Miffy Never Saw It Coming","Michael Nicewonder Is The Next Big Thing","It Can't Rain All The Time",
              "Interlude","Downhill Wheelchair Racing","Five Feet And Digging"]
          }
        ]
      })
    return this.artistes;
  }

}
