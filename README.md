# Tabla de Usuarios con Paginación usando un Api de terceros
## Descripción 
Este proyecto Angular se centra en el consumo de una API de terceros [EscuelaJS API](https://api.escuelajs.co/api/v1/users) para mostrar información de usuarios registrados. Los datos (ID, nombre, correo electrónico, rol) se presentan en una tabla creada con Angular Material y se implementa paginación usando el componente `MatPaginator`.
## Características 
- Consumo de API REST usando `HttpClient`. 
- Visualización de datos en una tabla de Angular Material. 
- Paginación de la tabla con `MatPaginator` para una mejor usabilidad. 
## Uso
-Iniciar la aplicación con ``` ng serve ```
-Usar la paginación para mostar la cantidad de usuarios y desplazarse en la tabla.
### Servicio de los Usuarios
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL ='https://api.escuelajs.co/api/v1/users';
  constructor(private http:HttpClient) {}
  getUsers():Observable<any[]>{
    return this.http.get<any[]>(this.apiURL);
    
  }
}
