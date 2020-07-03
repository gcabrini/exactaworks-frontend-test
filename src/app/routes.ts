import {
    OrderPageComponent,
    HowItWorksPageComponent,
    PrivacyPageComponent,
    HelpPageComponent,
    NotFoundPageComponent
} from './pages';

export const routes = [
    { path: '', redirectTo: '/order', pathMatch: 'full' },
    { path: 'order', component: OrderPageComponent },
    { path: 'how-it-works', component: HowItWorksPageComponent },
    { path: 'privacy', component: PrivacyPageComponent },
    { path: 'help', component: HelpPageComponent },
    { path: '**', component: NotFoundPageComponent }
]