import {Component, bootstrap,CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/angular2';
@Component({
    selector: 'my-app',
    templateUrl: 'plantilla1.html',
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
