import { CategoriasService } from './../../../services/categorias.service';
import { TiposService } from './../../../services/tipos.service';
import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/models/Tipo';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-categoria',
  templateUrl: './nova-categoria.component.html',
  styleUrls: ['../listagem-categorias/listagem-categorias.component.scss']
})
export class NovaCategoriaComponent implements OnInit {

  formulario: any;
  tipos: Tipo[];

  constructor(private tiposService: TiposService,
              private categoriaService: CategoriasService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.tiposService.getListaTipos().subscribe(resultado => {
      this.tipos = resultado;
    });

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      icone: new FormControl(null),
      tipoId: new FormControl(null)
    });
  }

  get propriedade(){
    return this.formulario.controls;
  }

  EnviarFormulario(): void {
    const categoria = this.formulario.value;

    this.categoriaService.postCategoria(categoria).subscribe((resultado) => {
      this.router.navigate(['categorias/listagemCategorias']);
    });
  }

  VoltarListagem(): void{
    this.router.navigate(['categorias/listagemCategorias']);
  }
}
