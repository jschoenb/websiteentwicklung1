import { diag, square} from './lib.js';
import Person from './person.js';

console.log(diag(4,3));
console.log(square(5));

let p = new Person("Hannes","Schönböck");
p.print();
p[topSecretPrivate]();