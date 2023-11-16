import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Subscription } from "rxjs";
import { IArtistes } from "../nicolas/artistes";
import { ArtistesService } from "../nicolas/artistes.service";

@Component({
  selector: 'app-yohan',
  templateUrl: './yohan.component.html',
  styleUrls: ['./yohan.component.css']
})
export class YohanComponent implements OnInit, OnDestroy {
  artistes: IArtistes[] = []; // Le tableau qui stockera les données JSON
  artistesParAnnee: { [key: string]: IArtistes[] } = {};
  selectedLocation: string = "toutes";
  selectedGenre: string = "tous";
  locationDropdownIndex: number = 0; // Index de l'option "Toutes les Locations"
  genreDropdownIndex: number = 0; // Index de l'option "Tous les Genres"
  selectedArtist: IArtistes | null = null;
  artistesDeCetteAnnee: IArtistes[] = [];
  anneeSelected: string = "";

  constructor(private artistesService: ArtistesService) { }

  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis();
    this.updateGraph();
  }

  updateLocationFilter(event: any) {
    this.selectedLocation = event.target.value;
    this.updateGraph();
  }

  updateGenreFilter(event: any) {
    this.selectedGenre = event.target.value;
    this.updateGraph();
  }

  resetFilters() {
    this.selectedLocation = "toutes";
    this.selectedGenre = "tous";
    this.locationDropdownIndex = 0;
    this.genreDropdownIndex = 0;
    this.updateGraph();
  }

  effacerDetails() {
    this.selectedArtist = null;
  }

  effacerListe() {
    this.anneeSelected = "";
  }

  afficherDetails(artiste: IArtistes) {
    this.selectedArtist = artiste;
  }

  updateGraph() {
    d3.select('svg').remove();
    // Filtrer les données en fonction des filtres sélectionnés (this.selectedLocation et this.selectedGenre)
    const filteredArtists = this.artistes.filter(artiste => {
      return (
        (this.selectedLocation === "toutes" || artiste.location === this.selectedLocation) &&
        (this.selectedGenre === "tous" || artiste.genres === this.selectedGenre)
      );
    });
    console.log(filteredArtists);
    // Ici, vous pouvez exécuter le code pour créer le graphique avec D3.js en utilisant les données récupérées.
    // Assurez-vous que la création du graphique est effectuée après avoir chargé les données.
    // 1. Trouver l'année de début la plus ancienne et la plus récente
    let anneeDebutPlusAncienne = Infinity;
    let anneeDebutPlusRecente = -Infinity;

    filteredArtists.forEach((artiste) => {
      const anneeDebut = parseInt(artiste.lifeSpan);
      if (!isNaN(anneeDebut)) {
        if (anneeDebut < anneeDebutPlusAncienne) {
          anneeDebutPlusAncienne = anneeDebut;
        }
        if (anneeDebut > anneeDebutPlusRecente) {
          anneeDebutPlusRecente = anneeDebut;
        }
      }
    });

    // 2. Créer une structure de données pour les artistes par années
    //const artistesParAnnee = {};

    this.artistesParAnnee = {};
    // 3. Compter le nombre d'artistes par année
    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.artistesParAnnee[annee.toString()] = []; // Convertir l'année en chaîne de caractères
    }

    filteredArtists.forEach((artiste) => {
      const anneeDebut = parseInt(artiste.lifeSpan);
      if (!isNaN(anneeDebut)) {
        this.artistesParAnnee[anneeDebut.toString()].push(artiste);
      }
    });

    //console.log(this.artistesParAnnee);

    // 4. Utiliser D3.js pour créer le graphique à barres
    const largeurGraphique = 1400;
    const hauteurGraphique = 400;
    const marge = { haut: 20, droite: 20, bas: 40, gauche: 40 };

    const svg = d3.select('body').append('svg')
      .attr('width', largeurGraphique)
      .attr('height', hauteurGraphique);

    const xScale = d3.scaleTime()
      .domain([new Date((anneeDebutPlusAncienne - 1).toString()), new Date((anneeDebutPlusRecente + 1).toString())])
      .range([0, largeurGraphique - marge.gauche - marge.droite]);

    const graphique = svg.append('g')
      .attr('transform', `translate(${marge.gauche},${hauteurGraphique - marge.bas})`)
      .call(d3.axisBottom(xScale).ticks(d3.timeYear));

    graphique.select('.domain')
      .attr('stroke-width', '12px')
      .attr('stroke', '#0071bc');

    graphique.selectAll('.tick line')
      .attr('stroke-width', '0px');

    graphique.selectAll('.tick text')
      .attr('dy', '-3.5em')
      .style('font-size', '10px')
      .style("font-family", "OCR A Std, monospace")
      .style("opacity", "0.5")
      .style("font-weight", "bold");

    const anneesAvecArtistes = Object.entries(this.artistesParAnnee).filter(entry => entry[1].length > 0);

    graphique.selectAll('.tick').each(function(d) {
      if (d instanceof Date) {
        const yearString = d.getFullYear().toString();
        if (!anneesAvecArtistes.find(entry => entry[0] === yearString)) {
          d3.select(this).select('text').style('opacity', '0');
        }
      }
    });

    interface DataEntry {
      0: string; // pour l'année, si c'est une chaîne de caractères
      1: IArtistes[]; // pour les artistes, si c'est un tableau de chaînes
    }

    function calculateRadius(d: DataEntry) {
      return 10 + (d[1].length);
    }

    graphique.selectAll()
      .data(anneesAvecArtistes)
      .enter().append('circle')
      .attr('cx', d => {
        const date = new Date(d[0]);
        console.log(date);
        const cxValue = xScale(date);
        return cxValue;
      })
      .attr('cy', 0)
      .attr('r', calculateRadius)
      .attr('fill', 'orange');

    graphique.selectAll('circle')
      .on('mouseover', function (event, d) {
        const dataEntry = d as DataEntry;
        d3.select(this)
          .transition()
          .duration(250)
          .attr('fill', 'red')
          .attr('r', calculateRadius(dataEntry) + 5);
      })
      .on('mouseout', function (event, d) {
        const dataEntry = d as DataEntry;
        d3.select(this)
          .transition()
          .duration(250)
          .attr('fill', 'orange')
          .attr('r', calculateRadius(dataEntry));
      })
      .on('click', (d) => {
        const annee = d.srcElement.__data__[0];
        //console.log(`Vous avez cliqué sur la barre de l'année ${annee}`);
        this.anneeSelected = annee;
        const artistesDeCetteAnnee = filteredArtists.filter(artiste => artiste.lifeSpan === annee);
        this.artistesDeCetteAnnee = artistesDeCetteAnnee;
      });
  }

  ngOnDestroy(): void {
    d3.select('svg').remove();
  }

}
