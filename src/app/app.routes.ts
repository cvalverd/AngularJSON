import { Routes } from '@angular/router';
import { ListaPersonasComponent } from './components/lista-personas/lista-personas.component';

export const routes: Routes = [
    { path: '', redirectTo: 'lista-personas', pathMatch: 'full' },
    {path: 'lista-personas', component: ListaPersonasComponent},
    {path: '**', redirectTo: 'lista-personas'}
];
