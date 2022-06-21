import { HyperDurable } from "../src/HyperDurable";

type CounterData = {
  abc?: number;
  counter: number;
  objectLikeProp: string[];
  dates: {
    created_at: Date;
  };
};

export class Counter
  extends HyperDurable<CounterData, Environment>
  implements CounterData
{
  abc?: number;
  counter: number;
  objectLikeProp: string[];
  dates: {
    created_at: Date;
  };

  constructor(state: DurableObjectState, env: Environment) {
    super(state, env);

    this.counter = 1;
    this.objectLikeProp = [];
    this.dates = { created_at: new Date(1655821616400) };
  }

  increment() {
    this.counter++;
  }

  sayHello(name: string) {
    return `Hello ${name}!`;
  }

  throws() {
    throw new Error("Mistake");
  }
}
