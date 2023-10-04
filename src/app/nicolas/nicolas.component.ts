import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-nicolas',
  templateUrl: './nicolas.component.html',
  styleUrls: ['./nicolas.component.css']
})
export class NicolasComponent implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
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
  }

}
