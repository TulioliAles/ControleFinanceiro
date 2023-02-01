import { NovaCategoriaComponent } from './components/categoria/nova-categoria/nova-categoria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListagemCategoriasComponent } from './components/categoria/listagem-categorias/listagem-categorias.component';

const routes: Routes = [
  {
    path : 'categorias/listagemCategorias',
    component: ListagemCategoriasComponent,
  },
  {
    path : 'categorias/novaCategoria',
    component: NovaCategoriaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
