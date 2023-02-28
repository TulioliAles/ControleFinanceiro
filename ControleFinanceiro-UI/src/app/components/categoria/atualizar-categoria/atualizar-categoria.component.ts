import { FormGroup, FormControl } from '@angular/forms';
import { CategoriasService } from './../../../services/categorias.service';
import { TiposService } from './../../../services/tipos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';
import { Tipo } from 'src/app/models/Tipo';

@Component({
  selector: 'app-atualizar-categoria',
  templateUrl: './atualizar-categoria.component.html',
  styleUrls: ['../listagem-categorias/listagem-categorias.component.scss']
})
export class AtualizarCategoriaComponent implements OnInit {

  nomeCategoria: string;
  categoria: Observable<Categoria>;
  tipos: Tipo[];
  formulario: any;

  constructor(private router: Router,
      private route: ActivatedRoute,
      private tiposService: TiposService,
      private categoriasService: CategoriasService
    ) { }

  ngOnInit(): void {
    const categoriaId = this.route.snapshot.params.id;

    this.tiposService.getListaTipos().subscribe(resultado => {
      this.tipos = resultado;
    });

    this,this.categoriasService.getCategoriaById(categoriaId).subscribe(resultado => {
      this.nomeCategoria = resultado.nome;
      this.formulario = new FormGroup({
        categoriaId: new FormControl(resultado.categoriaId),
        nome: new FormControl(resultado.nome),
        icone: new FormControl(resultado.icone),
        tipoId: new FormControl(resultado.tipoId)
      });
    });
  }

  get propriedade(){
    return this.formulario.controls;
  }

  VoltarListagem(): void{
    this.router.navigate(['categorias/listagemCategorias']);
  }

}
