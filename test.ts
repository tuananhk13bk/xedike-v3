interface IUser {
  name: string;
  age: number;
  log: () => void;
  test: () => string;
}

class User implements IUser {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  log() {
    console.log(this.name);
  }

  test = () => {
    return this.name;
  };

  hihi() {
    console.log(this);
  }

  hihiArrow = () => {
    console.log(this);
  };

  static statichihi() {
    console.log(this);
  }

  static statichihiArrow = () => {
    console.log("cac");
  };

  static find() {
    return {
      name: this.name,
      age: this.age
    };
  }
}

const user = new User("asdfsdf", 20);
user.hihi();
user.hihiArrow();
// User.statichihi();
