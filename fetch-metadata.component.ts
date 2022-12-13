import { Component, Inject } from '@angular/core';
import { Product } from './Product';
import { MetadataserviceService } from './Services/metadataservice.service';

@Component({
  selector: 'app-fetch-metadata',
  templateUrl: './fetch-metadata.component.html',
  styleUrls: ['./fetch-metadata.component.css']
})
export class FetchMetadataComponent {
  public productinformation: Product[] = [];
  constructor(private api: MetadataserviceService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.api.getProducts()
      .subscribe(data => {
        this.productinformation=data;
      });
  }
}

