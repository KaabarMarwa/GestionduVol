import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService } from '../services/vol.service';

@Component({
  selector: 'app-vols',
  templateUrl: './vols.component.html',
  styleUrls: ['./vols.component.css']
})
export class VolsComponent implements OnInit {
  vols: Vol[]; 
  constructor( private volService: VolService) { 
    this.vols = volService.listeVols();
  }

  ngOnInit(): void {
  }
  
  supprimerVol(v: Vol)
  {
    //console.log(v);
    let conf = confirm ("Etes-vous sur? ");
    if (conf)
     this.volService.supprimerVol(v);
  }


}
