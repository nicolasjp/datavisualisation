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
export class NicolasComponent implements OnInit, AfterViewInit, OnDestroy {
  artistes: IArtistes[] = []; // Le tableau qui stockera les données JSON
  artistesParAnnee: { [key: string]: number } = {};
  sub!: Subscription;
  errorMessage: string = "";

  constructor(private artistesService: ArtistesService) { }

  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis();
  }


  ngAfterViewInit(){
    // Ici, vous pouvez exécuter le code pour créer le graphique avec D3.js en utilisant les données récupérées.
    // Assurez-vous que la création du graphique est effectuée après avoir chargé les données.
    // 1. Trouver l'année de début la plus ancienne et la plus récente
    let anneeDebutPlusAncienne = Infinity;
    let anneeDebutPlusRecente = -Infinity;

    this.artistes.forEach((artiste) => {
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

    // 3. Compter le nombre d'artistes par année
    for (let annee = anneeDebutPlusAncienne; annee <= anneeDebutPlusRecente; annee++) {
      this.artistesParAnnee[annee.toString()] = 0; // Convertir l'année en chaîne de caractères
    }

    this.artistes.forEach((artiste) => {
      const anneeDebut = parseInt(artiste.lifeSpan);
      if (!isNaN(anneeDebut)) {
        this.artistesParAnnee[anneeDebut.toString()]++; // Convertir l'année en chaîne de caractères
      }
    });

// 4. Utiliser D3.js pour créer le graphique à barres
    const largeurGraphique = 800;
    const hauteurGraphique = 400;
    const marge = { haut: 20, droite: 20, bas: 40, gauche: 40 };

    const svg = d3.select('body').append('svg')
      .attr('width', largeurGraphique)
      .attr('height', hauteurGraphique);

    const largeur = largeurGraphique - marge.gauche - marge.droite;
    const hauteur = hauteurGraphique - marge.haut - marge.bas;

    const graphique = svg.append('g')
      .attr('transform', `translate(${marge.gauche},${marge.haut})`);

    const x = d3.scaleBand()
      .domain(Object.keys(this.artistesParAnnee))
      .range([0, largeur])
      .padding(0.1);

    const artistesParAnneeValues = Object.values(this.artistesParAnnee)
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
      .domain([0, maxValue])
      .nice()
      .range([hauteur, 0]);

    const xScale = d3.scaleBand()
      .domain(Object.keys(this.artistesParAnnee).map(annee => annee.toString()))
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
      .on('click', function (d) {
        // Réagissez au clic sur la barre
        const annee = d.srcElement.__data__[0];
        console.log(`Vous avez cliqué sur la barre de l'année ${annee}`);
        // Ajoutez ici le code pour effectuer une action spécifique
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
      .text('Année de début de carrière');

    svg.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('x', -hauteurGraphique / 2)
      .attr('y', 10)
      .attr('text-anchor', 'middle')
      .text('Nombre d\'artistes');
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /*ngAfterViewInit() {
    // Données pour le graphique à barres
    const data = [3,10,2,18,6];

    // Création d'un élément SVG dans le composant
    const svg = d3.select(this.el.nativeElement.querySelector('svg'));

    // Configuration des dimensions du graphique
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    // Création de l'échelle pour les axes
    const x = d3.scaleBand()
      .domain(data.map((d, i) => i.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const data2 = [5,10,15,20,25,30];
    const y = d3.scaleLinear()
      .domain([0, d3.max(data2) as number])
      .nice()
      .range([height - margin.bottom, margin.top]);


    // Création des barres du graphique
    svg.selectAll('rect')
      .data(data)
      .enter().append('rect')
      .attr('x', (d, i) => {
        const xValue = x(i.toString());
        if (typeof xValue === 'number') {
          return xValue;
        }
        // Gérez le cas où xValue est undefined, par exemple, en renvoyant une valeur par défaut.
        return 0; // Vous pouvez choisir une valeur par défaut appropriée ici.
      })
      .attr('y', d => y(d))
      .attr('width', x.bandwidth())
      .attr('height', d => y(0) - y(d))
      .attr('fill', 'steelblue');

    // Ajout des axes
    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }*/

}
