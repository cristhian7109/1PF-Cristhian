import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subscription, Observable } from 'rxjs';
import { Alumno } from 'src/app/core/interfaces/alumnos';
import { AlumnoService } from 'src/app/core/services/alumno.service';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<any>;

  listAlumno!:  Observable<Alumno[]>
  alumnSubscription!: Subscription;
  displayedColumns: string[] = ['id','nombre', 'edad', 'sexo', 'promedio', 'acciones'];
  modalAddEdit: string = "closed"
  modalEliminar: string = "closed"
  typemodal: string = ""
  seleccionado: Alumno = {
    id:0, nombre: "", apellido: "", sexo: "", promedio: 0, edad:0
  }

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarAlumnos()
  }

  openModal(tipo:string,data:any) {
    if( tipo==="edit" ){
      this.seleccionado = data
    }else{
      this.seleccionado = {id:0, nombre: "", apellido: "", sexo: "", promedio: 0, edad:0}
    }
    this.typemodal=tipo
    this.modalAddEdit= 'open'
  } 
  closeModal() {
    this.modalAddEdit= 'closed'
    this.cargarAlumnos()
  } 
  openModalEliminar(id:number) {
    this.seleccionado = {...this.seleccionado,id:id}
    this.modalEliminar= 'open'
  } 
  closeModalEliminar() {
    this.modalEliminar= 'closed'
    this.cargarAlumnos()
  } 
  cargarAlumnos(){
    this.listAlumno = this._alumnoService.getAlumno();
    this.alumnSubscription = this._alumnoService.alumnoSubject.subscribe(
      () => {
        this.listAlumno = this._alumnoService.getAlumno();
      }
    );
  }
  ngOnDestroy(): void {
    this.alumnSubscription.unsubscribe();
  }
}
