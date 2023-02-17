export interface AnimalProps<T> {  
  animal?: Array<T>;
  treeAnimal?: Array<T>;
}

export interface AnimalDetailProps<T> {
  title: string;
  animals: Array<T>;
}

export interface AnimalFamilyProps<T> {
  title: string;
  animals: {
    parentsAnimals: Array<T>;
    childAnimals: Array<T>;
  }
}

export interface AnimalInfoProps {
  name: string;
  file: string;
  age: number;
  birth: string;
  gender: string;
  point?: string[];
}