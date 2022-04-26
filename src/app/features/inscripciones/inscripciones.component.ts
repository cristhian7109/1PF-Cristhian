import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Inscripcion } from 'src/app/core/interfaces/inscripcion';
import { InscripcionService } from 'src/app/core/services/inscripcion.service';
@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionComponent implements OnInit {
  listInscripcion: Inscripcion[] = []
  listInscripcionPromise!: Promise<any>;
  displayedColumns: string[] = ['id', 'idAlumno','nombreAlumno','idCurso', 'nombreCurso','acciones'];
  dataSource!:  MatTableDataSource<any>;
  modalAddEdit: string = "closed"
  modalEliminar: string = "closed"
  typemodal: string = ""
  seleccionado: Inscripcion = { id: 0, idCurso: 0, idAlumno: 0, nombreCurso: "", nombreAlumno: ""}

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _inscripcionService: InscripcionService) { }

  ngOnInit(): void {
    this.cargarInscripcions()
  }

  openModal(tipo:string,index:number) {
    if( tipo==="edit" ){
      this.seleccionado = {...this.listInscripcion[index],id:index}
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
  openModalEliminar(index:number) {
    this.seleccionado = {...this.listInscripcion[index],id:index}
    this.modalEliminar= 'open'
  } 
  closeModalEliminar() {
    this.modalEliminar= 'closed'
    this.cargarInscripcions()
  } 
  cargarInscripcions(){
    this.listInscripcionPromise = this._inscripcionService.getInscripcionPromise();
    this.listInscripcionPromise
    .then((curs)=>{
      this.listInscripcion = curs
    })
    .catch((error)=>{
      console.log("error",error);
    })
    .finally(()=>{
      console.log("Finally");
      this.dataSource = new MatTableDataSource(this.listInscripcion)
      this.dataSource.paginator = this.paginator;
    })
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
