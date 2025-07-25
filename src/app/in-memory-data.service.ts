import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  { id: 12, name: 'Martian Manhunter' },
  { id: 13, name: 'Wonder Woman' },
  { id: 14, name: 'The Flash' },
  { id: 15, name: 'Aquaman' },
  { id: 16, name: 'Super Man' },
  { id: 17, name: 'Green Lantern' },
  { id: 18, name: 'Batman' },
  { id: 19, name: 'Cyborg' }
      
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}