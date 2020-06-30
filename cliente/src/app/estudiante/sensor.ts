export class Sensor{
    nombre:string;
    estado:string;
    cargando:boolean;
    data:any;
    
    constructor(nombre:string,estado:string,data:any){
        this.nombre=nombre;
        this.estado=estado;
        this.data=data;
    }
    /*quitarData(){
        this.data=null;
        this.estado='Desconectado';
    }
    ponerData(data:any){
        this.data=data;
        this.estado='Conectado';
    }*/

}