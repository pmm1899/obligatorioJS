import { Component, Input } from '@angular/core'
import { Tarea } from "./tarea";


@Component({
    selector: 'mi-tarea-detalle',
    template: `
        <div *ngIf="tareaElegidaDetalle">
        <h2>{{tareaElegidaDetalle.tituloTarea}}</h2>
        <div><label>{{tareaElegidaDetalle.id}}</label></div>
        <div>
            <label>Nombre:</label>
            <input [(ngModel)]="tareaElegidaDetalle.tituloTarea">
        </div>
        </div>
    `
})

export class TareaDetalleComponent{
    @Input()
    tareaElegidaDetalle:Tarea
}