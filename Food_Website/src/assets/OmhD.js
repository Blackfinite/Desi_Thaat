
import AvocadoToast from "./AvocadoToast.jpg"

import EggsBenedict from "./EggsBenedict.jpg"

import ChickenCaesarSalad from "./ChickenCaesarSalad.jpg"
import ClubSandwich from "./ClubSandwich.jpg"

import GrilledRibeyeSteak from "./GrilledRibeyeSteak.jpg"
import SalmonFillet from "./SalmonFillet.jpg"

import TacosalPastor from "./TacosalPastor.jpg"
import ChickenQuesadilla from "./ChickenQuesadilla.jpg"

import Lasagna from "./Lasagna.jpg"
import SpaghettiCarbonara from "./SpaghettiCarbonara.jpg"

import IcedLatte from "./IcedLatte.jpg"
import Mojito from "./Mojito.jpg"



export const dummyMenuData = {
  Breakfast: [
    {
      id: 'breakfast-1',
      name: 'Eggs Benedict',
      price: '80',
      rating: 4.2,
      image: EggsBenedict,
      description: 'Poached eggs over toasted English muffins with hollandaise sauce.',
    },
    {
      id: 'breakfast-2',
      name: 'Avocado Toast',
      price: '70',
      rating: 4.5,
      image: AvocadoToast,
      description: 'Toasted bread topped with smashed avocado and spices.',
    },
    
  ],
  Lunch: [
    {
      id: 'lunch-1',
      name: 'Chicken Caesar Salad',
      price: '199',
      rating: 4.4,
      image: ChickenCaesarSalad,
      description: 'Crisp romaine with grilled chicken, parmesan, and Caesar dressing.',
    },
    {
      id: 'lunch-2',
      name: 'Club Sandwich',
      price: '150',
      rating: 4.3,
      image: ClubSandwich,
      description: 'Triple-decker sandwich with turkey, bacon, and fresh veggies.',
    },
   
  ],
  Dinner: [
    {
      id: 'dinner-1',
      name: 'Grilled Ribeye Steak',
      price: '249',
      rating: 4.7,
      image: GrilledRibeyeSteak,
      description: 'Juicy ribeye steak grilled to perfection.',
    },
    {
      id: 'dinner-2',
      name: 'Salmon Fillet',
      price: '220',
      rating: 4.5,
      image: SalmonFillet,
      description: 'Fresh salmon fillet with a lemon butter sauce.',
    },
   

  
  ],
  Mexican: [
    {
      id: 'mexican-1',
      name: 'Tacos al Pastor',
      price: '11.99',
      rating: 4.6,
      image: TacosalPastor,
      description: 'Tacos with marinated pork, pineapple, and cilantro.',
    },
    {
      id: 'mexican-2',
      name: 'Chicken Quesadilla',
      price: '100',
      rating: 4.4,
      image: ChickenQuesadilla,
      description: 'Grilled quesadilla filled with chicken, cheese, and salsa.',
    },
    

  ],
  Italian: [
    {
      id: 'italian-1',
      name: 'Spaghetti Carbonara',
      price: '199',
      rating: 4.7,
      image: SpaghettiCarbonara,
      description: 'Classic pasta with eggs, cheese, pancetta, and pepper.',
    },
    {
      id: 'italian-2',
      name: 'Lasagna',
      price: '150',
      rating: 4.6,
      image: Lasagna,
      description: 'Layers of pasta with meat sauce, cheese, and béchamel.',
    },
    
  ],
  Drinks: [
    {
      id: 'drinks-1',
      name: 'Iced Latte',
      price: '50',
      rating: 4.0,
      image: IcedLatte,
      description: 'Cool and refreshing espresso-based iced latte.',
    },
    {
      id: 'drinks-2',
      name: 'Mojito',
      price: '99',
      rating: 4.3,
      image: Mojito,
      description: 'Classic mojito with mint, lime, and rum.',
    },
   
  ],
};