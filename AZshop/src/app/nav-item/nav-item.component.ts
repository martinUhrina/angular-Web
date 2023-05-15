import { Component, HostListener } from '@angular/core';
import { ListService } from '../list.service';
import { Products } from '../products';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent {

  dog: Products[] = [
    new Products(1, 'Clicker', 10.99, 'This is the description for Product Clicekr', 'assets/clicker.png'),
    new Products(2, 'Frisbee', 19.99, 'This is the description for Product Frisbee', 'assets/puller.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png')];
  cat: Products[] = [new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png')];
  all: Products[] = [
    new Products(1, 'Clicker', 10.99, 'This is the description for Product Clicekr', 'assets/clicker.png'),
    new Products(2, 'Frisbee', 19.99, 'This is the description for Product Frisbee', 'assets/puller.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png')];
  other: Products[] = [
    new Products(2, 'Frisbee', 19.99, 'This is the description for Product Frisbee', 'assets/puller.png'),
    new Products(3, 'Laser', 7.99, 'This is the description for Product Laser', 'assets/clicker.png')];
  newList : Products[] = [];


  constructor(private listService: ListService){
    listService.setList(this.all)
  }

  onClick(choice: number) : void{
    
    switch(choice){
      case 1:this.newList = this.dog;break;
      case 2:this.newList = this.cat;break;
      case 3:this.newList = this.all;break;
      case 4:this.newList = this.other;break;
    }
    this.listService.setList(this.newList);
    console.log(this.newList);
    
  }


  visible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Získanie pozície scrollovania
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const screenHeight = window.innerHeight;
    const height = screenHeight / scrollPosition * 100;

    // Ak je pozícia scrollovania väčšia ako 1000px, element sa skryje
    if (height > 70) { ///nastavenie vysky zmiznutia
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
