import {Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import {IArtistes} from "../nicolas/artistes";
import {ArtistesService} from "../nicolas/artistes.service";
import * as d3 from "d3";
import {IAlbums} from "../nicolas/albums";
import {promises, truncate} from "fs";
import {hierarchy, max, min, select} from "d3";

@Component({
  selector: 'app-fabian',
  templateUrl: './fabian.component.html',
  styleUrls: ['./fabian.component.css']
})
export class FabianComponent implements OnInit {
  artistes: IArtistes[] = []; // Le tableau qui stockera les données JSON
  albums: IAlbums[] = []; // le tableau qui stockera les données json des albums
  artistesParAnnee: { [key: string]: number } = {};
  albumsParAnnee: { [key: string]: number } = {}; //création variable
  albumDetails: any[] = [];
  selectedLocation: string = "toutes";
  selectedGenre: string = "tous";
  locationDropdownIndex: number = 0; // Index de l'option "Toutes les Locations"
  genreDropdownIndex: number = 0; // Index de l'option "Tous les Genres"
  selectedArtist: IArtistes | null = null;
  selectedAlbum: IAlbums | null = null;

  artistesDeCetteAnnee: IArtistes[] = [];
  albumsDeCetteAnnee: IArtistes[] = [];

  anneeSelected: string = "";
  private albumsParAnneeVal: { [key: string]: number } = {};

  constructor(private artistesService: ArtistesService) {
  }

  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis(); // artiste recup les données json
    this.updateGraph();
    console.log(this.artistes);
  }

  //this.artistes possède toutes les données sur les artistes avec les albums par artiste

  // Gestionnaire d'événement pour le filtre "Location"
  updateLocationFilter(event: any) {
    this.selectedLocation = event.target.value;
    this.updateGraph();
  }

  showAlbumDetails(album: any) {
    album.showDetails = !album.showDetails;
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
  effacerDetailsAlbum() {
    this.selectedAlbum = null;
  }

  effacerListe() {
    this.anneeSelected = "";
  }

  afficherDetails(artiste: IArtistes) {
    this.selectedArtist = artiste;
    console.log(this.selectedArtist)

  }

  afficherDetailsAlbum(album: IAlbums) {
    this.selectedAlbum = album;
    console.log(this.selectedAlbum)

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
    console.log(this.artistes);

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
    console.log(this.artistesParAnnee)


    ///////////////////// pour faire le couple de données année, nbr d'album
    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.albumsParAnnee[annee] = 0; // Convertir l'année en chaîne de caractères
    }
    console.log(this.albumsParAnnee)

    filteredArtists.forEach((artiste) => {
      const anneePubli = parseInt(artiste.albums[0]["publicationDate"]);
      if (!isNaN(anneePubli)) {
        this.albumsParAnnee[anneePubli]++; // Convertir l'année en chaîne de caractères
      }
    });

    console.log(this.albumsParAnnee)


///////////////// pour enlever les années ou il ya 0 pour faire une visu ou c'est pas important

    const albumsParAnneeVal = Object.entries(this.albumsParAnnee)
      .filter(([_, value]) => value !== 0)
      .reduce<{ [key: number]: number }>((obj, [key, value]) => {
        obj[parseInt(key)] = value;
        return obj;
      }, {});



    ////////////////////////////////////////
    ///////////////////////////////////////
    //////////////////////////////////////
    //graphe

    const albumsParAnneeVal1 = Object.entries(albumsParAnneeVal);
    const albumsParAnneeVal2 = albumsParAnneeVal1.map(([year, count]) => ({ year: year.toString(), value: count }));


    const albumsData = albumsParAnneeVal2;


    //////////////////////////////////
    //DIMENSION GRAPHE
    /////////////////////////////////
    const margin = { top: 20, right: 20, bottom: 40, left: 60 };
    const width = 800 - margin.left - margin.right; // Ajustement de la largeur
    const height = 400 - margin.top - margin.bottom;


    const svg = d3.select('body')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);



    /////////////////////////////////
    //DEFINITION AXES
    ////////////////////////////////
    const xScale = d3.scaleLinear()
      .domain([anneeDebutPlusAncienne-1, anneeDebutPlusRecente]) // Utilisation de l'année la plus ancienne et la plus récente
      .range([0, width]);


    //definir la valeur max
    function getMaxValue(data: { [p: number]: number }): number {


      const anneeSelected: string = "";

      // Utilisation de Object.values() pour obtenir toutes les valeurs de l'objet
      const valuesArray: number[] = Object.values(data);

      // Utilisation de Math.max() pour trouver la valeur maximale dans le tableau
      const maxValue: number = Math.max(...valuesArray);

      return maxValue;
    }
    const maxValue = getMaxValue(albumsParAnneeVal);

    const yScale = d3.scaleLinear()
      .domain([0,maxValue+1]) // Plage des valeurs des albums
      .range([height, 0])
      .nice();

    ////////////////////////////
    //SVG
    /////////////////////////////

    svg.selectAll('circle')
      .data(albumsData)
      .enter().append('circle')
      .attr('cx', d => xScale(Number(d.year)))
      .attr('cy', d => yScale(d.value))
      .attr('r', 5) // Taille des points
      .style('fill', 'steelblue'); // Couleur des points

    // Ajout des axes x et y
    const xAxis = d3.axisBottom(xScale).tickFormat(d3.format('d')); // Format des étiquettes de l'axe x
    const yAxis = d3.axisLeft(yScale).ticks(5);

    svg.selectAll('.dot')
      .data(albumsData)
      .enter()
      .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(Number(d.year)))
      .attr('cy', d => yScale(d.value))
      .attr('r', 5) // Taille des points
      .attr('fill', 'blue') // Couleur par défaut des points
      .on('mouseover', function () {
        d3.select(this).attr('fill', 'red'); // Changement de couleur au survol
      })
      .on('mouseout', function () {
        d3.select(this).attr('fill', 'blue'); // Revenir à la couleur initiale
      })
      .on('click', (d) => {
        const annee = d.srcElement.__data__['year'];
        console.log(`Vous avez cliqué sur le scatter plot de l'année ${annee}`);
        this.anneeSelected = annee;

        const albumsDeCetteAnnee = filteredArtists
          .filter(artiste => artiste.albums[0].publicationDate === annee)
          .map(artiste => ({
            artistName : artiste.name,
            publicationDate: artiste.albums[0].publicationDate,
            title: artiste.albums[0].title,
            songs: artiste.albums[0].songs,
            allSongs: artiste.albums.reduce((songsList: string[], album) => {
              if (album.publicationDate === annee) {
                songsList.push(...album.songs);
              }
              return songsList;
            }, [])
          }));

        this.albumDetails = albumsDeCetteAnnee;
        console.log(this.albumDetails);
      });





    svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-45)') // Inclinaison des étiquettes à -45 degrés
      .attr('text-anchor', 'end') // Ancrage du texte à l'extrémité
      .attr('dx', '-0.5em') // Décalage horizontal
      .attr('dy', '0.5em'); // Décalage vertical
    svg.append('g')
      .call(yAxis)
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Number of Albums');


  }

  ngOnDestroy(): void {
    d3.select('svg').remove();
  }
}


