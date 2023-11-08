import { Component } from '@angular/core';
import {IArtistes} from "../nicolas/artistes";
import {ArtistesService} from "../nicolas/artistes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail-artiste',
  templateUrl: './detail-artiste.component.html',
  styleUrls: ['./detail-artiste.component.css']
})
export class DetailArtisteComponent {
  artistes: IArtistes[] = [];
  selectedArtist: IArtistes[] = [];

  constructor(private artistesService: ArtistesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.artistes = this.artistesService.getArtistesBis();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedArtist = this.artistes.filter(artiste => {
      return (artiste.id === id);
    });
    console.log(this.selectedArtist);
  }

  effacerDetails() {
    this.selectedArtist = [];
    window.history.back();
  }

}

