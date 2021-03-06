import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SurveyComponent } from './components/survey/survey.component';

export const ROUTES: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'survey',
        component: SurveyComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
