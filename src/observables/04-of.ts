import { of } from "rxjs";

// const obs$  = of(1,2,3,4,5,6);
const obs$ = of(...[2, 3, 4], 1, 2, 3, 4, 5, 6);
console.log("inicio del obs");
obs$.subscribe(
  (next) => console.log("next", next),
  null,
  () => console.log("terminamos secuencia")
);
console.log("fin del obs");
