import { Tipos } from "./tipos";
import { Component, Input } from '@angular/core'
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  //selector: 'my-app',
  selector: 'tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})

export class TiposComponent {
  //titulo = 'Lista de Tipos de Objeto';
  tipos = Lista;

  @Input()
  tiposElegido:Tipos;

  constructor(private http: Http){

  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/tiposObjeto').subscribe(
      data => {

        let list: Tipos[] = [];
        var objeto = data.json();

        for (let res of objeto.resultado) {
          let item = new Tipos();
          item.codigo = res.codigo;
          item.nombre = res.nombre;
          list.push(item);
        }
        this.tipos = list;
      },
        error => console.log(error)
      );
  };

  onSubmit(form: NgForm){
    //console.log(form.value);
    
    const { value: body } = form;

    //console.log(body);

    this.http.post('http://localhost:3000/api/tiposObjeto', body).subscribe(res => {
      console.log(res);
      //this.refreshUsers();
    })
  };

  elegirTipo(_tipos:Tipos):void{
    this.tiposElegido = _tipos;
    console.log(_tipos);
  }
}

const Lista:Tipos[] = [
  /*{codigo:"1", nombre:'TipoObjetoA'},
  {codigo:"2", nombre:'TipoObjetoB'},
  {codigo:"3", nombre:'TipoObjetoC'},
  {codigo:"4", nombre:'TipoObjetoD'},*/
];


