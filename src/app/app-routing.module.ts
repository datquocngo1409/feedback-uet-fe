import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {AuthGuard} from './core/guards/auth.guard';
import {HorizontalLayoutComponent} from './horizontal-layout/horizontal-layout.component';
import {TestComponent} from './@pages/pages/test/test/test.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'session',
        loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
    },
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always',
        children: [
            {
                path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'subject', loadChildren: () => import('./@pages/pages/subject/subject.module').then(m => m.SubjectModule)
            },
            {
                path: 'statistical', loadChildren: () => import('./@pages/pages/statistical/statistical.module').then(m => m.StatisticalModule)
            },
            {
                path: 'test',
                component: TestComponent
            }
        ]
    },
    // {
    //    path: 'report',
    //    component: ReportLayoutComponent,
    //    canActivate: [AuthGuard],
    //    runGuardsAndResolvers: 'always',
    //    children: [
    //       {  path: '', loadChildren: () => import('./report/report.module').then(m => m.ReportModule)}
    //    ]
    // },
    {
        path: '**',
        redirectTo: 'session/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes,  { useHash: true })],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule {
}
