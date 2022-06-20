import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completado"),
};
const intervalo$ = new Observable<number>((subscriber) => {
  let contador = 0;
  // crear un contador de segundos
  const interval = setInterval(() => {
    contador++;
    subscriber.next(contador);
    console.log(contador);
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log("intervalo destruido");
  };
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe();
const subs3 = intervalo$.subscribe();

subs.add(subs2);
subs.add(subs3);
setTimeout(() => {
  subs.unsubscribe();
  //   subs2.unsubscribe();
  //   subs3.unsubscribe();
  console.log("completado unsubscribe");
}, 6000);
