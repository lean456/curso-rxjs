import { interval, timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const hoyen5 = new Date();
hoyen5.setSeconds(hoyen5.getSeconds() + 5);
const interval$ = interval(1000);
const timer$ = timer(hoyen5);

console.log("Inicio");
timer$.subscribe(observer);
console.log("Fin");
