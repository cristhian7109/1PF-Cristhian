import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Inscripcion } from 'src/app/core/interfaces/inscripcion';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
import { Observable, Subscription } from 'rxjs';
@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;
  listInscripcion!: Observable<Inscripcion[]>
  cursoSubscription!: Subscription;
  displayedColumns: string[] = ['id', 'idAlumno','nombreAlumno','idCurso', 'nombreCurso','acciones'];
  modalAddEdit: string = "closed"
  modalEliminar: string = "closed"
  typemodal: string = ""
  seleccionado: Inscripcion = { id: 0, idCurso: 0, idAlumno: 0, nombreCurso: "", nombreAlumno: ""}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _inscripcionService: InscripcionService) { }

  ngOnInit(): void {
    this.cargarInscripcions()
  }

  openModal(tipo:string,data:any) {
    console.log(data);
    
    if( tipo==="edit" ){
      this.seleccionado = data
    }else{
      this.seleccionado = {id:0, idCurso: 0, idAlumno: 0, nombreCurso: "", nombreAlumno: ""}
    }
    this.typemodal=tipo
    this.modalAddEdit= 'open'
  } 
  closeModal() {
    this.modalAddEdit= 'closed'
    this.cargarInscripcions()
  } 
  openModalEliminar(id:number) {
    this.seleccionado = {...this.seleccionado,id:id}
    this.modalEliminar= 'open'
  } 
  closeModalEliminar() {
    this.modalEliminar= 'closed'
    this.cargarInscripcions()
  } 
  cargarInscripcions(){
    this.listInscripcion = this._inscripcionService.getInscripcion();
    this.cursoSubscription = this._inscripcionService.suscripcionSubject.subscribe(
      () => {
        this.listInscripcion = this._inscripcionService.getInscripcion();
      }
    );
    
  }

}
