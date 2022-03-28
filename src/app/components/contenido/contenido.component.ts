import { Component } from "@angular/core";

@Component({
    selector: 'app-contenido',
    templateUrl: './contenido.component.html',
    styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent{
    students: any = [
        {
            nombre:"Cristhian",
            apellido:"Ureta",
            edad:24,
            promedio:13,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
        {
            nombre:"Antony",
            apellido:"Vasquez",
            edad:25,
            promedio:18,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
        {
            nombre:"Juan",
            apellido:"Perez",
            edad:24,
            promedio:15,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
        {
            nombre:"Lucas",
            apellido:"Trauco",
            edad:23,
            promedio:16,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
        {
            nombre:"Gianfranco",
            apellido:"Candamo",
            edad:24,
            promedio:17,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
        {
            nombre:"Jorge",
            apellido:"Flores",
            edad:23,
            promedio:14,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
        {
            nombre:"Marco",
            apellido:"Casas",
            edad:23,
            promedio:12,
            img:"https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"
        },
    ]
    todayDate=new Date()

    constructor() { }

}