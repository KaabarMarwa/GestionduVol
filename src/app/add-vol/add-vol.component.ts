import { Component, OnInit } from '@angular/core';
import { Vol } from '../model/vol.model';
import { VolService} from '../services/vol.service';

@Component({
  selector: 'app-add-vol',
  templateUrl: './add-vol.component.html',
  styleUrls: ['./add-vol.component.css']
})
export class AddVolComponent implements OnInit {
  newVol = new Vol();
  constructor(private volService: VolService) { }

  ngOnInit(): void {
  }
  addVol(){
    //console.log(this.newVol);
    this.volService.ajouterVol(this.newVol);
  }
}
