import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { VolService } from '../services/vol.service';
import { Vol } from '../model/vol.model';

@Component({
  selector: 'app-update-vol',
  templateUrl: './update-vol.component.html',
  styles: []
})
export class UpdateVolComponent implements OnInit {
  
  currentVol = new Vol();
  constructor(private acctivatedRoute: ActivatedRoute,
              private router : Router,
              private volService: VolService) { }

  ngOnInit() {
    //console.log(this.route.snapshot.params.id);
    this.currentVol = this.volService.consulterVol(this.acctivatedRoute.snapshot.params.id);
    console.log(this.currentVol);
  }
  
  updateVol()
  {
    //console.log(this.currentVol);
    this.volService.updateVol(this.currentVol);
    this.router.navigate(['vols']);
  }
}
