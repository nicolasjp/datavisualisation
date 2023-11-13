import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import * as d3 from 'd3';
import {Subscription} from "rxjs";
import {IArtistes} from "./artistes";
import {ArtistesService} from "./artistes.service";

@Component({
  selector: 'app-nicolas',
  templateUrl: './nicolas.component.html',
  styleUrls: ['./nicolas.component.css']
})
export class NicolasComponent implements OnInit, OnDestroy {
  artistes: IArtistes[] = []; // Le tableau qui stockera les données JSON
  artistesParAnnee: { [key: string]: number } = {};
  selectedLocation: string = "toutes";
  selectedGenre: string = "tous";
  locationDropdownIndex: number = 0; // Index de l'option "Toutes les Locations"
  genreDropdownIndex: number = 0; // Index de l'option "Tous les Genres"
  selectedArtist: IArtistes | null = null;
  artistesDeCetteAnnee : IArtistes[] = [];
  anneeSelected: string = "";
  axeAnnee: string[] = [];
  axeValues: number[] = [];

  constructor(private artistesService: ArtistesService) {
  }

  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis();
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

    // 2. Créer une structure de données pour le nombre d'artistes par année
    //const artistesParAnnee = {};

    this.artistesParAnnee = {};
    // 3. Compter le nombre d'artistes par année
    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.artistesParAnnee[annee.toString()] = 0; // Convertir l'année en chaîne de caractères
    }

    filteredArtists.forEach((artiste) => {
      const anneeDebut = parseInt(artiste.lifeSpan);
      if (!isNaN(anneeDebut)) {
        this.artistesParAnnee[anneeDebut.toString()]++; // Convertir l'année en chaîne de caractères
      }
    });

    // Convertir l'objet de paires clé-valeur en un tableau d'objets
    const artistesParAnneeArray = Object.keys(this.artistesParAnnee).map(annee => ({
      annee: annee,
      nombre: this.artistesParAnnee[annee]
    }));

    // Trier le tableau en fonction du nombre d'artistes de manière croissante
    artistesParAnneeArray.sort((a, b) => a.nombre - b.nombre);
    this.axeAnnee = [];
    this.axeValues = [];
    artistesParAnneeArray.forEach((a) => {
      if(a.nombre !== 0){
        this.axeAnnee.push(a.annee);
        this.axeValues.push(a.nombre);
      }
    })

    // 4. Utiliser D3.js pour créer le graphique à barres
    const largeurGraphique = 800;
    const hauteurGraphique = 400;
    const marge = { haut: 20, droite: 20, bas: 40, gauche: 40 };

    const svg = d3.select('body').append('svg')
      .attr('width', largeurGraphique)
      .attr('height', hauteurGraphique)
      .style('position', 'absolute')
      .style('top', '60%')
      .style('left', '70%')
      .style('transform', 'translate(-50%, -50%)');

    const largeur = largeurGraphique - marge.gauche - marge.droite;
    const hauteur = hauteurGraphique - marge.haut - marge.bas;

    const graphique = svg.append('g')
      .attr('transform', `translate(${marge.gauche},${marge.haut})`);

    const x = d3.scaleBand()
      .domain(this.axeAnnee)
      .range([0, largeur])
      .padding(0.1);

    const artistesParAnneeValues = this.axeValues
      .filter(val => val !== undefined && val.toString() !== "")
      .map(Number);
    // Calculer le maximum en utilisant une boucle for
    let maxValue = 0;
    for (const value of artistesParAnneeValues) {
      if (!isNaN(value) && value > maxValue) {
        maxValue = value;
      }
    }
    const y = d3.scaleLinear()
      .domain([0, maxValue+2])
      .nice()
      .range([hauteur, 0]);

    const xScale = d3.scaleBand()
      .domain(this.axeAnnee.map(annee => annee.toString()))
      .range([0, largeur])
      .padding(0.1);

    graphique.selectAll('rect')
      .data(Object.entries(this.artistesParAnnee))
      .enter().append('rect')
      .attr('y', ([, count]) => {
        if (typeof count === 'number') {
          return y(count);
        }
        return 0; // Gestion des cas où count n'est pas un nombre
      })
      .attr('width', x.bandwidth())
      .attr('height', ([, count]) => {
        if (typeof count === 'number') {
          return hauteur - y(count);
        }
        return 0; // Gestion des cas où count n'est pas un nombre
      })
      .attr('fill', 'steelblue')
      .attr('x', (d) => {
        const annee = d[0].toString(); // Convertissez l'année en chaîne de caractères
        return xScale(annee) || 0; // Utilisez xScale et assurez-vous de renvoyer une valeur par défaut si xScale renvoie undefined
      });

    graphique.selectAll('rect')
      .on('mouseover', function () {
        // Réagissez au passage de la souris sur la barre
        d3.select(this).attr('fill', 'red'); // Par exemple, changez la couleur de la barre
      })
      .on('mouseout', function () {
        // Réagissez lorsque la souris quitte la barre
        d3.select(this).attr('fill', 'steelblue'); // Rétablissez la couleur de la barre
      })
      .on('click', (d) => {
        // Réagissez au clic sur la barre
        const annee = d.srcElement.__data__[0];
        console.log(`Vous avez cliqué sur la barre de l'année ${annee}`);
        this.anneeSelected = annee;
        // Ajoutez ici le code pour effectuer une action spécifique

        // Filtrer la liste des artistes pour ceux qui ont commencé leur carrière cette année
        const artistesDeCetteAnnee = filteredArtists.filter(artiste => artiste.lifeSpan === annee);

        // Stockez les artistes de cette année dans une variable de votre composant
        this.artistesDeCetteAnnee = artistesDeCetteAnnee;
      });


    // Ajouter des axes
    const axeX = d3.axisBottom(x).ticks(x.domain().length);
    const axeY = d3.axisLeft(y).ticks(5);

    graphique.append('g')
      .attr('class', 'axe-x')
      .attr('transform', `translate(0,${hauteur})`)
      .call(axeX);

    graphique.append('g')
      .attr('class', 'axe-y')
      .call(axeY);

    // Ajouter des étiquettes d'axe
    svg.append('text')
      .attr('x', largeurGraphique / 2)
      .attr('y', hauteurGraphique - 5)
      .attr('text-anchor', 'middle')
      .text('Année de début de carrière')
      .style('font-weight', 'bold');

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -hauteurGraphique / 2)
      .attr('y', 10)
      .attr('text-anchor', 'middle')
      .text('Nombre d\'artistes')
      .style('font-weight', 'bold');
    // Mettre à jour le graphique en utilisant les données filtrées
    // ... Votre code pour mettre à jour le graphique ...
  }

  ngOnDestroy(): void {
    d3.select('svg').remove();
  }
}
