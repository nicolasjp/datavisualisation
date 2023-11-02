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
    })
    return this.artistes;
  }

}
