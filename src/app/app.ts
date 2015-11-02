import {Component, bootstrap,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    template: `
    <h3>Mi primer aplicacioncita de {{nombre}} edad {{raton.edad}} email {{raton.email}}</h3>
    <p>Esta es un template multilinea</p>
   <p> no lo puedo creer</p>
   <input [(ng-model)]="raton.edad"  placeholder="edad">
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]


})
class AppComponent {
    public nombre="Juan Carlitos";
    public raton:Raton={
        edad:45,
        email:'rapidclimate@gmail.com'
    };
}
class Raton{
    edad:number;
    email:string;
}
bootstrap(AppComponent);
//ESto es comentario y no tiene ningun efecto
