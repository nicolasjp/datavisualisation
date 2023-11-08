
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as d3 from 'd3';
import {IArtistes} from "../nicolas/artistes";
import {ArtistesService} from "../nicolas/artistes.service";



@Component({
  selector: 'app-guillaume',
  templateUrl: './guillaume.component.html',
  styleUrls: ['./guillaume.component.css']
})
export class GuillaumeComponent implements OnInit, OnDestroy {
  artistes: IArtistes[] = [];
  artistesParAnnee: { [key: string]: number } = {};
  selectedLocation: string = 'toutes';
  selectedGenre: string = 'tous';
  selectedArtiste: IArtistes | null = null;
  locationDropdownIndex: number = 0;
  genreDropdownIndex: number = 0;
  artistesDeCetteAnnee: IArtistes[] = [];
  anneeSelected: string = '';

  constructor(private artistesService: ArtistesService) {
  }


  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis();

    this.updateGraph();
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
    this.selectedArtiste = null;
  }

  effacerListe() {
    this.anneeSelected = "";
  }

  afficherDetails(artiste: IArtistes) {
    this.selectedArtiste = artiste;
  }



  updateGraph() {
    //d3.select('svg').remove();
    d3.select('g').remove();
    d3.select('x').remove();

    const filteredArtists = this.artistes.filter(artiste => {
      return (
        (this.selectedLocation === "toutes" || artiste.location === this.selectedLocation) &&
        (this.selectedGenre === "tous" || artiste.genres === this.selectedGenre)
      );
    });


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

    this.artistesParAnnee = {};


    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.artistesParAnnee[annee.toString()] = 0;
    }

    filteredArtists.forEach((artiste) => {
      const anneeDebut = parseInt(artiste.lifeSpan);
      if (!isNaN(anneeDebut)) {
        this.artistesParAnnee[anneeDebut.toString()]++;
      }
    });


    const data: { year: string; value: number }[] = [];

    for (const year in this.artistesParAnnee) {
      data.push({year, value: this.artistesParAnnee[year] || 0});
    }

    const width = 960;
    const height = 750;
    const inter = (height / 2 - 40)/(filteredArtists.length/2)
    const margin = 10;
    const chartRadius = (height / 2 - 40) ;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    let svg = d3.select('#chart')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    const PI = Math.PI,
      arcMinRadius = 10,
      arcPadding = 10,
      labelPadding = -5,
      numTicks = 10;

    let scale = d3.scaleLinear()
      .domain([0, (d3.max(data, d => d.value) || 0) * 1.1])
      .range([0, 2 * PI]);

    let ticks = scale.ticks(numTicks+1).slice(0, -1);
    const integerTicks = ticks.filter(value => Number.isInteger(value)).sort((a, b) => a - b);
    let keys = data.map((d, i) => d.year);
    const numArcs = keys.length;
    const arcWidth = (chartRadius - arcMinRadius - numArcs * arcPadding) / numArcs;


    let axeValeur = svg.append('g')
      .attr('class', 'axe valeur')
      .selectAll('g')
      .data(integerTicks)
      .enter().append('g')
      .attr('transform', d => 'rotate(' + (rad2deg(scale(d)) - 90) + ')');

    axeValeur.append('line')
      .attr('x2', chartRadius);

    axeValeur.append('circle')
      .attr('r', getOuterRadius(0) + arcPadding)
      .style('fill',('lightgray'))

    axeValeur.append('text')
      .attr('x', chartRadius + 10)
      .style('text-anchor', d => (scale(d) >= PI && scale(d) < 2 * PI ? 'end' : null))
      .attr('transform', d => 'rotate(' + (90 - rad2deg(scale(d))) + ',' + (chartRadius + 10) + ',0)')
      .text(d => d)
      .style('font-weight', 'bold')
      .style('font-size', '16px');

    // Ajoutez les arcs
    let arcs = svg.selectAll(".arc")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "arc");

    const originalColors: string[] = [];

    arcs.append("path")
      .attr("d", (d, i) => {
        const startAngle = 0;
        const endAngle = scale(d.value);
        return d3.arc()({
          innerRadius: getInnerRadius(i),
          outerRadius: getOuterRadius(i),
          startAngle,
          endAngle
        });
      })
      .style("fill", (d, i) => color(i.toString()))
      /*.on('mouseover', function (d, i) {
        const tempColor = d3.select(this).style('fill'); // Stocke la couleur d'origine
        d3.select(this).style('fill', 'red'); // Change la couleur en rouge
      })
      .on('mouseout', function (d, i) {
        d3.select(this).style('fill', originalColors[i]); // Restaure la couleur d'origine
      })*/
      .on('click', (d) => {
        // Gestionnaire de clic pour l'arc
        const annee = d.srcElement.__data__['year'];
        this.anneeSelected = annee;
        const artistesDeCetteAnnee = filteredArtists.filter(artiste => artiste.lifeSpan === this.anneeSelected);
        this.artistesDeCetteAnnee = artistesDeCetteAnnee;

      });

    arcs.append('text')
      .attr('x', labelPadding)
      .attr('y', (d, i) => (getOuterRadius(i)-getInnerRadius(i))/2-getOuterRadius(i) + arcPadding-4)
      .text(d => d.year);




    function rad2deg(angle: number): number {
      return angle * 180 / Math.PI;
    }

    function getInnerRadius(index: number): number {
      return arcMinRadius + (numArcs - (index + 1)) * (arcWidth + arcPadding);
    }

    function getOuterRadius(index: number): number {
      return getInnerRadius(index) + arcWidth;
    }


  }
  ngOnDestroy(): void {
    d3.select('svg').remove();
    d3.select('g').remove();
    d3.select('x').remove();
  }
}
