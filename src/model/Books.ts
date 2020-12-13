export class Books{
id:number;
titre:string;
auteur:string;
nbrPage:number;

constructor(id : number, titre : string , auteur: string , nbrPage:number){
    this.id=id;
    this.titre=titre;
    this.auteur=auteur;
    this.nbrPage=nbrPage;
}
}