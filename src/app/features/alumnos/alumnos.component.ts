import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/core/interfaces/alumnos';
import { AlumnoService } from 'src/app/core/services/alumno.service';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  listAlumno: Alumno[] = []
  listAlumnoPromise!: Promise<any>;
  displayedColumns: string[] = ['id','nombre', 'edad', 'sexo', 'promedio', 'acciones'];
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
    this.listAlumnoPromise = this._alumnoService.getAlumnoPromise();
    this.listAlumnoPromise
    .then((alums)=>{
      this.listAlumno = alums
    })
    .catch((error)=>{
      console.log("error",error);
    })
    .finally(()=>{
      console.log("Finally");
      this.dataSource = new MatTableDataSource(this.listAlumno)
      this.dataSource.paginator = this.paginator;
    })
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
