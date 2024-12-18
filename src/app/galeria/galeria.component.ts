import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {
  images: { itemImageSrc: string; thumbnailImageSrc: string; alt: string; title: string }[] = [];
  responsiveOptions: any[] = [];

  constructor() {
    this.images = [
      {
        itemImageSrc: 'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 1',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/1716861/pexels-photo-1716861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 2',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/6159682/pexels-photo-6159682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/6159682/pexels-photo-6159682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 3',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/7501395/pexels-photo-7501395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/7501395/pexels-photo-7501395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 4',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/699739/pexels-photo-699739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/699739/pexels-photo-699739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 5',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/17505082/pexels-photo-17505082/free-photo-of-blanco-robot-guerra-de-las-galaxias-star-wars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/17505082/pexels-photo-17505082/free-photo-of-blanco-robot-guerra-de-las-galaxias-star-wars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 6',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/9482199/pexels-photo-9482199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/9482199/pexels-photo-9482199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 7',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/163696/toy-car-toy-box-mini-163696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 8',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/19258159/pexels-photo-19258159/free-photo-of-puesta-de-sol-agua-modelo-maqueta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/19258159/pexels-photo-19258159/free-photo-of-puesta-de-sol-agua-modelo-maqueta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 9',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 10',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/20206582/pexels-photo-20206582/free-photo-of-tecnologia-ordenador-accesorio-fan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/20206582/pexels-photo-20206582/free-photo-of-tecnologia-ordenador-accesorio-fan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 11',
        title: 'videojuegos'
      },
      {
        itemImageSrc: 'https://images.pexels.com/photos/29704291/pexels-photo-29704291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        thumbnailImageSrc: 'https://images.pexels.com/photos/29704291/pexels-photo-29704291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        alt: 'Imagen 12',
        title: 'videojuegos'
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
