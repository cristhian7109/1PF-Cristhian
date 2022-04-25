import { Component } from "@angular/core";

@Component({
    selector: 'app-contenido',
    templateUrl: './contenido.component.html',
    styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent{
    movies: any = [
        // {
        //     titulo: "A CIEGAS",
        //     genero: "THRILLER",
        //     duracion: "1h 32min",
        //     publico: "TBC.",
        //     img: "https://cdn.apis.cineplanet.cl/CDN/media/entity/get/FilmPosterGraphic/HO00000766?referenceScheme=HeadOffice&amp;allowPlaceHolder=true",
        //     estado: "estreno"
        // },
        // {
        //     titulo: "LOS TIPOS MALOS",
        //     genero: "ANIMACIÓN",
        //     duracion: "1h 40min",
        //     publico: "TE.",
        //     img: "https://cdn.apis.cineplanet.cl/CDN/media/entity/get/FilmPosterGraphic/HO00000776?referenceScheme=HeadOffice&allowPlaceHolder=true",
        //     estado: "normal"
        // },
        // {
        //     titulo: "BATMAN",
        //     genero: "ACCIÓN",
        //     duracion: "2h 56min",
        //     publico: "+14.",
        //     img: "https://cdn.apis.cineplanet.cl/CDN/media/entity/get/FilmPosterGraphic/HO00000763?referenceScheme=HeadOffice&allowPlaceHolder=true",
        //     estado: "estreno"
        // },
        // {
        //     titulo: "LOS TIPOS MALOS 2",
        //     genero: "ANIMACIÓN",
        //     duracion: "1h 60min",
        //     publico: "TE.",
        //     img: "https://cdn.apis.cineplanet.cl/CDN/media/entity/get/FilmPosterGraphic/HO00000776?referenceScheme=HeadOffice&allowPlaceHolder=true",
        //     estado: "normal"
        // },
        
    ]
    todayDate=new Date()

    constructor() { }

}