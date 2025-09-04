import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private http = inject(HttpClient);
  
  // Un signal dédié pour contenir l'erreur, s'il y en a une.
  private error = signal<any>(null);

  // L'observable source qui gère l'erreur.
  private products$ = this.http.get<any[]>('http://localhost:3000/products').pipe(
    catchError(err => {
      this.error.set(err); // On capture l'erreur et on la place dans le signal.
      return EMPTY; // On retourne un observable vide pour que `toSignal` ne reçoive pas l'erreur.
    })
  );

  // `products` ne contiendra que les données en cas de succès.
  private productsData = toSignal(this.products$, { initialValue: [] });
  
  // Signaux publics exposés au reste de l'application
  public products = computed(() => this.productsData());
  public getError = computed(() => this.error());
  public isLoading = computed(() => this.productsData().length === 0 && !this.error());
}
