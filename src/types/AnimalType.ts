export interface AnimalType<T> {  
  animal?: Array<T>;
  treeAnimal?: Array<T>;
}

export interface AnimalDetailType<T> {
  title: string;
  animals: {
    parentsAnimals?: Array<T>;
    childAnimals?: Array<T>;
    kindAnimals?: Array<T>
  };
}

export interface AnimalInfoType {
  name: string;
  file: string;
  age: number;
  birth: string;
  gender: string;
  point?: string[];
}