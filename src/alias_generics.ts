// Alias 

type User = {firstname: string | number, lastname: string}
type DateString = string;
type Id = string | number;

const user: User = {firstname: "dev", lastname: "front"}
const dateString: DateString = 'DateString'

// Generics

type Firstname  = User['firstname']; // ou keyof User

function identity<ArgType>(arg: ArgType): ArgType {
  return arg;
}

const a = identity<string>("3")
const firstN = identity<Firstname>("test")

// type Id
function first<Id>(arg: Id[]): Id {
  return arg[0];
}

const b = first(["a", "b", "c", 4]);


const c = document.querySelector<HTMLButtonElement>('#compteur');


function consoleSize<Type extends {length :number}>(arg:Type): Type {
  console.log(arg.length);
  return arg;
}

const d = consoleSize([3, 5, 7])