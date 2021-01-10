import { Injectable } from '@angular/core';
import { Vol } from '../model/vol.model';

@Injectable({
  providedIn: 'root'
})
export class VolService {
  vols : Vol[];

  vol : Vol;
  constructor() {
    this.vols= [
      {idVol: 1 , nomCompagnieAerienne: "Turkish Airlines", DateVol: new Date ("12/27/2020"), numeroVol:"TK 6541", escaleDepart: "Istanbul", escaleArrive: "Paris" ,     etatVol: "prévu",  departProgramme:"4:30PM" },
      {idVol: 2 , nomCompagnieAerienne: "Tunisair",         DateVol: new Date ("12/28/2020"), numeroVol:"TU 0339", escaleDepart: "Algerie",  escaleArrive: "Tunisie",    etatVol: "annulé", departProgramme:"2:30 PM"},
      {idVol: 3 , nomCompagnieAerienne: "Turkish Airlines", DateVol: new Date ("12/28/2020"), numeroVol:"TK 617",  escaleDepart: "Istanbul", escaleArrive: "Casablanca", etatVol: "prévu",  departProgramme:"7:55 AM"},
      {idVol: 4 , nomCompagnieAerienne: "Tunisair",         DateVol: new Date ("12/20/2020"), numeroVol:"TU 0399", escaleDepart: "Tunisie",  escaleArrive: "Mali",       etatVol: "prévu",  departProgramme:"00:55 AM"},
      {idVol: 5 , nomCompagnieAerienne: "Emarates",         DateVol: new Date ("10/12/2020"), numeroVol:"EK 784",  escaleDepart: "Dubai",    escaleArrive: "Tunisie",    etatVol: "prévu",  departProgramme:"2:55 AM"},
      {idVol: 6 , nomCompagnieAerienne: "Emarates",         DateVol: new Date ("01/09/2020"), numeroVol:"EK 953",  escaleDepart: "Beirut",   escaleArrive: "Dubai",      etatVol: "prévu",  departProgramme:"3:10 AM"},
      {idVol: 7 , nomCompagnieAerienne: "EgyptAir",         DateVol: new Date ("10/29/2020"), numeroVol:"MS 913",  escaleDepart: "Cairo",    escaleArrive: "Dubai",      etatVol: "annulé", departProgramme:"3:00 PM"},
      {idVol: 8 , nomCompagnieAerienne: "flydubai",         DateVol: new Date ("12/30/2020"), numeroVol:"FZ 8517", escaleDepart: "Dubai",    escaleArrive: "Chennai",    etatVol:"en vol",  departProgramme: "3:10 AM"}
    ];
   }

   listeVols():Vol[]{
     return this.vols;
   }

   ajouterVol( v: Vol){
     this.vols.push(v);
   }

   supprimerVol(v: Vol){
     const index = this.vols.indexOf(v,0);
     if (index > -1){
       this.vols.splice(index,1);
     }
     //ou Bien
     /* this.vols.forEach(cur, index) => {
       if (v.idVol ==cur.idVol) {
         this.vols.splice(index, 1);
       }
     });*/
   }

   consulterVol(id:number): Vol{
     this.vol = this.vols.find(v => v.idVol == id);
      return this.vol;
   }

   updateVol(v:Vol)
   {
     //console.log(v);
     this.supprimerVol(v);
     this.ajouterVol(v);
     this.trierVols();
   }

   trierVols(){
     this.vols = this.vols.sort((n1,n2) => {
       if (n1.idVol > n2.idVol) {
         return 1;
       }
       if (n1.idVol < n2.idVol) {
         return -1;
        }
        return 0;
     });
   }
}
