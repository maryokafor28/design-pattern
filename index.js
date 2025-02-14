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
  }

  add(phoneNumber) {
    this.phoneNumbers.add(phoneNumber);
  }

  remove(phoneNumber) {
    this.phoneNumbers.delete(phoneNumber);
  }

  dial(phoneNumber) {
    if (this.phoneNumbers.has(phoneNumber)) {
      console.log(`Dialing:${phoneNumber}...`);
    } else {
      console.log(`phone number ${phoneNumber} not found`);
    }
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

const telephone = new Telephone();
const number1 = new phoneNumber("123455");
const number2 = new phoneNumber("5958488");
const number3 = new phoneNumber("6544666");
telephone.add(number1);
telephone.add(number2);
// telephone.notify({ phoneNumber: true });
telephone.remove(number2);
telephone.notify({ phoneNumber: true });
telephone.dial(number1);
telephone.notify({ phoneNumber: true });
