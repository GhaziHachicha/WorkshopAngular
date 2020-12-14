export class Books{
id:number;
titre:string;
auteur:string;
nbrPage:number;
emprunte:boolean;

constructor(id : number, titre : string , auteur: string , nbrPage:number,emprunte : boolean){
    this.id=id;
    this.titre=titre;
    this.auteur=auteur;
    this.nbrPage=nbrPage;
    this.emprunte=emprunte;
}
}