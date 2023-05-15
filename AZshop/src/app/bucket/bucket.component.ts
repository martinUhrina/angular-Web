import { Component, HostListener, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html', 
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {
  ngOnInit(): void {
    this.sumPrice();
  }

  priceSum : number= 100;
  

  products: Products[] = [
    new Products(1, 'Clicker', 10.99, 'This is the description for Product Clicekr', 'assets/clicker.png'),
    new Products(2, 'Frisbee', 19.99, 'This is the description for Product Frisbee', 'assets/puller.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png')
  ];
  
  
  
  sumPrice():void{
    this.priceSum = 0;
    this.products.forEach(product => {
      this.priceSum += product.price;
    })
  }
  visible = true;

   @HostListener('window:scroll', [])
   onWindowScroll() {
     // Získanie pozície scrollovania
     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
     const screenHeight = window.innerHeight;
     const height = screenHeight / scrollPosition * 100;

     // Ak je pozícia scrollovania väčšia ako 1000px, element sa skryje
     if (height > 70) {
       this.visible = true;
     } else {
       this.visible = false;
     }
   }

}
