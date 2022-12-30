import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  usuario="Angular";
  password="123456";
  mensaje="";
  registrado= false;
  lista:Array<string>=['Home','Suport','Contact'];
  arreglo!:string;

  enviar(user:string , pas:string){
  
    

    
    if(this.usuario==user && this.password==pas){
      
      this.registrado=true;
      this.mensaje="Bienvenido Usuario: "
      
    }else{
      alert("Incorrecto")
      this.mensaje="Credenciales incorrectas, intentalo nuevamente"
    }
    

  }

  

}
