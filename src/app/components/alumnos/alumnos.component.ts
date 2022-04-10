import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from './../../interfaces/alumnos';

// const ELEMENT_DATA: Alumno[] = [
//   {id:0, nombre: "Juan", apellido: "Perez", sexo: "masculino", promedio: 14,edad:20},
//   {id:1, nombre: "Juan", apellido: "Perez", sexo: "masculino", promedio: 14,edad:20},
//   {id:2, nombre: "Juan", apellido: "Perez", sexo: "masculino", promedio: 14,edad:20},
//   {id:3, nombre: "Juan", apellido: "Perez", sexo: "masculino", promedio: 14,edad:20},
//   {id:4, nombre: "Juan", apellido: "Perez", sexo: "masculino", promedio: 14,edad:20},
//   {id:5, nombre: "Juan", apellido: "Perez", sexo: "masculino", promedio: 14,edad:20},
// ];

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listAlumno:Alumno[] = []
  displayedColumns: string[] = ['id','nombre', 'edad', 'sexo', 'promedio', 'acciones'];
  // dataSource = ELEMENT_DATA;
  dataSource!:  MatTableDataSource<any>;
  modalAddEdit: string = "closed"
  modalEliminar: string = "closed"
  typemodal: string = ""
  seleccionado: Alumno = {
    id:0, nombre: "", apellido: "", sexo: "", promedio: 0, edad:0
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.cargarAlumnos()
  }

  openModal(tipo:string,index:number) {
    if( tipo==="edit" ){
      this.seleccionado = {...this.listAlumno[index],id:index}
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
  openModalEliminar(index:number) {
    this.seleccionado = {...this.listAlumno[index],id:index}
    this.modalEliminar= 'open'
  } 
  closeModalEliminar() {
    this.modalEliminar= 'closed'
    this.cargarAlumnos()
  } 
  cargarAlumnos(){
    this.listAlumno = this._alumnoService.getAlumno();
    this.dataSource = new MatTableDataSource(this.listAlumno)
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
