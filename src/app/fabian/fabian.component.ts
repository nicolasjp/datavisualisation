import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {IArtistes} from "../nicolas/artistes";
import {ArtistesService} from "../nicolas/artistes.service";
import * as d3 from "d3";
import {promises, truncate} from "fs";
import {max, min, select} from "d3";

@Component({
  selector: 'app-fabian',
  templateUrl: './fabian.component.html',
  styleUrls: ['./fabian.component.css']
})
export class FabianComponent implements OnInit {
  artistes: IArtistes[] = []; // Le tableau qui stockera les données JSON
  artistesParAnnee: { [key: string]: number } = {};
  albumsParAnnee: { [key: string]: number } = {}; //création variable

  selectedLocation: string = "toutes";
  selectedGenre: string = "tous";
  locationDropdownIndex: number = 0; // Index de l'option "Toutes les Locations"
  genreDropdownIndex: number = 0; // Index de l'option "Tous les Genres"
  selectedArtist: IArtistes | null = null;
  artistesDeCetteAnnee: IArtistes[] = [];
  anneeSelected: string = "";
  private albumsParAnneeVal: { [key: string]: number } = {};

  constructor(private artistesService: ArtistesService) {
  }

  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis(); // artiste recup les données json
    this.updateGraph();
    //console.log(this.artistes);
  }

  // Gestionnaire d'événement pour le filtre "Location"
  updateLocationFilter(event: any) {
    this.selectedLocation = event.target.value;
    this.updateGraph();
  }

  // Gestionnaire d'événement pour le filtre "Genre"
  updateGenreFilter(event: any) {
    this.selectedGenre = event.target.value;
    this.updateGraph();
  }

  // Fonction pour réinitialiser les filtres
  resetFilters() {
    this.selectedLocation = "toutes";
    this.selectedGenre = "tous";
    // Réinitialiser les index des listes déroulantes
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

  // Fonction pour mettre à jour le graphique en fonction des filtres
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


    ////////////////////////// pour mettre ne place l'année de publi la plus récente et la plus ancienne
    filteredArtists.forEach((artiste) => {

      const anneepubliDebutint = parseInt(artiste.albums[0]["publicationDate"]);

      if (!isNaN(anneepubliDebutint)) {
        if (anneepubliDebutint < anneeDebutPlusAncienne) {
          anneeDebutPlusAncienne = anneepubliDebutint;
        }
        if (anneepubliDebutint > anneeDebutPlusRecente) {
          anneeDebutPlusRecente = anneepubliDebutint;
        }
      }

    });


    /////////////////////////////

    // 2. Créer une structure de données pour le nombre d'artistes par année
    //const artistesParAnnee = {};

    this.artistesParAnnee = {};

    this.albumsParAnnee = {}; //creation variable fabian
    // 3. Compter le nombre d'artistes par année

    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.artistesParAnnee[annee] = 0; // Convertir l'année en chaîne de caractères
    }

    filteredArtists.forEach((artiste) => {
      const anneeDebut = parseInt(artiste.lifeSpan);
      if (!isNaN(anneeDebut)) {
        this.artistesParAnnee[anneeDebut]++; // Convertir l'année en chaîne de caractères
      }
    });


    ///////////////////// pour faire le couple de données année, nbr d'album
    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.albumsParAnnee[annee] = 0; // Convertir l'année en chaîne de caractères
    }

    filteredArtists.forEach((artiste) => {
      const anneePubli = parseInt(artiste.albums[0]["publicationDate"]);
      if (!isNaN(anneePubli)) {
        this.albumsParAnnee[anneePubli]++; // Convertir l'année en chaîne de caractères
      }
    });



///////////////// pour enlever les années ou il ya 0 pour faire une visu ou c'est pas important

    const albumsParAnneeVal = Object.entries(this.albumsParAnnee)
      .filter(([_, value]) => value !== 0)
      .reduce<{ [key: number]: number }>((obj, [key, value]) => {
        obj[parseInt(key)] = value;
        return obj;
      }, {});
    ////////////////////////////////////////GRA¨PHE


    // set the color scale
    function drawPieChart(albumsData: { [year: number]: number }): void {
      const width = 400;
      const height = 400;
      const radius = Math.min(width, height) / 2;

      const svg = d3.select('body') // Sélectionnez le conteneur où vous souhaitez afficher le pie chart
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const color = d3.scaleOrdinal(d3.schemeCategory10);

      const pie = d3.pie<number>().value(d => d);

      const dataEntries = Object.entries(albumsData);
      const dataValues = dataEntries.map(([year, count]) => count);

      const arcs = d3.arc<any>()
        .innerRadius(0)
        .outerRadius(radius);

      const pieData = pie(dataValues);

      const arcsData = svg.selectAll('arc')
        .data(pieData)
        .enter()
        .append('g');

      arcsData.append('path')
        .attr('fill', (_, i) => color(i.toString()))
        .attr('d', arcs);

      arcsData.append('text')
        .attr('transform', d => `translate(${arcs.centroid(d)})`)
        .attr('dy', '0.35em')
        .text((d, i) => dataEntries[i][0]); // Utilisation des années comme libellés

      const legend = svg.selectAll('.legend')
        .data(Object.keys(albumsData))
        .enter()
        .append('g')
        .attr('class', 'legend')
        .attr('transform', (_, i) => `translate(-50,${i * 20})`);

      legend.append('rect')
        .attr('x', width - 18)
        .attr('width', 18)
        .attr('height', 18)
        .style('fill', (_, i) => color(i.toString()));

      legend.append('text')
        .attr('x', width - 24)
        .attr('y', 9)
        .attr('dy', '.35em')
        .style('text-anchor', 'end')
        .text(d => d);
    }

// Utilisation de la fonction drawPieChart avec vos données albumsparannee


    drawPieChart(albumsParAnneeVal);







  }



  ngOnDestroy(): void {
    d3.select('svg').remove();
  }
}

