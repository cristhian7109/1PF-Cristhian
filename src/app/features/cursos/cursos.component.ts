import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/core/interfaces/cursos';
import { CursoService } from 'src/app/core/services/cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  listCurso: Curso[] = []
  listCursoPromise!: Promise<any>;
  displayedColumns: string[] = ['id','nombre', 'descripcion', 'duracion','acciones'];
  dataSource!:  MatTableDataSource<any>;
  modalAddEdit: string = "closed"
  modalEliminar: string = "closed"
  typemodal: string = ""
  seleccionado: Curso = {
    id:0, nombre: "", descripcion: "", duracion:0
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _cursoService: CursoService) { }

  ngOnInit(): void {
    this.cargarCursos()
  }

  openModal(tipo:string,index:number) {
    if( tipo==="edit" ){
      this.seleccionado = {...this.listCurso[index],id:index}
    }else{
      this.seleccionado = {id:0, nombre: "", descripcion: "", duracion:0}
    }
    this.typemodal=tipo
    this.modalAddEdit= 'open'
  } 
  closeModal() {
    this.modalAddEdit= 'closed'
    this.cargarCursos()
  } 
  openModalEliminar(index:number) {
    this.seleccionado = {...this.listCurso[index],id:index}
    this.modalEliminar= 'open'
  } 
  closeModalEliminar() {
    this.modalEliminar= 'closed'
    this.cargarCursos()
  } 
  cargarCursos(){
    this.listCursoPromise = this._cursoService.getCursoPromise();
    this.listCursoPromise
    .then((curs)=>{
      this.listCurso = curs
    })
    .catch((error)=>{
      console.log("error",error);
    })
    .finally(()=>{
      console.log("Finally");
      this.dataSource = new MatTableDataSource(this.listCurso)
      this.dataSource.paginator = this.paginator;
    })
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
