// class Learneable {
//   constructor() {
//     this.interns = new Set(); //identifying the observers in this its the intern
//   }
//   add(intern) {
//     this.interns.add(intern);
//   }
//   remove(intern) {
//     this.interns.delete(intern);
//   }
//   notify(context) {
//     if (context.hasPassed) {
//       for (let intern of this.interns) {
//         intern.contact(context);
//       }
//     }
//   }
// }

// class intern {
//   constructor(name) {
//     this.name = name;
//   }
//   contact(data) {
//     console.log(`inform intern ${this.name} that they have gotten into it`);
//   }
// }

// const learneable = new Learneable();
// const mary = new intern("mary");
// const fumzy = new intern("fumzy");

// learneable.add(mary);
// learneable.add(fumzy);
// learneable.notify({ hasPassed: true });

class Telephone {
  constructor() {
    this.phoneNumbers = new Set();
    this.observers = [];
  }

  add(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  remove(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dial(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      console.log(`Dialing ${phoneNumber}...`);
    } else {
      console.log(`phone number ${phoneNumber} not found`);
    }
  }

  addObservers(observer) {
    this.observers.push(observer);
  }
  removeObservers(observer) {
    this.observers.delete(observer);
  }
  notifyObserver(phoneNumber) {
    this.observers.forEach((observer) => observer.update(phoneNumber));
  }
  notify(context) {
    if (context.phoneNumber) {
      for (let phoneNumber of this.phoneNumbers) {
        phoneNumber.contact(context);
      }
    }
  }
}
class phoneNumber {
  constructor(number) {
    this.number = number;
  }
  contact(data) {
    console.log(`phone number ${this.number} has been added`);
  }
}

class observer {
  update(phoneNumber) {}
}
class phoneNumberprint extends observer {
  update(phoneNumber) {
    console.log(`observer1 phone number ${phoneNumber}`);
  }
}
class dialling extends observer {
  update(phoneNumber) {
    console.log(`observer2 dialing ${phoneNumber}`);
  }
}
const telephone = new Telephone();
const number1 = new phoneNumber("1234567");
const observer1 = new phoneNumberprint();
const observer2 = new dialling();
telephone.addObservers(observer1);
telephone.add(number1);
telephone.notify({ phoneNumber: true });
telephone.dial(number1);
// telephone.notify({ phoneNumber: true });
telephone.add(observer1);
telephone.notify({ : true });
