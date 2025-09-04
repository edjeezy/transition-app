import { Component, computed, inject, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { SearchBox } from "../search-box/search-box";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [SearchBox, CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  productService = inject(ProductService);
    
  // Signal pour le terme de recherche, qui sera lié à l'enfant
  searchTerm = signal('');

  // Signal calculé qui réagit aux changements des produits OU du terme de recherche
  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const products = this.productService.products();
    
    if (!term) {
      return products;
    }
    
    return products.filter(p => p.name.toLowerCase().includes(term));
  });
}
