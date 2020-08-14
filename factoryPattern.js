// A way of creating an interface for creating objects
// But we can let subclasses define, which class to instantiate.
// Factory methods are often used in applications to manage and maintain and manipulate collection of objects that
// are differnet but at the same time have many common characteristics

// Ex: Member: having a membership

class MemberFactory {
  createMember = (name, membershipType) => {
    let member;

    if (membershipType === "simple") member = new SimpleMembership(name);
    else if (membershipType === "standard")
      member = new StandardMembership(name);
    else if (membershipType === "super") member = new SuperMembership(name);

    member.type = membershipType;
    member.define = () =>
      console.log(`${member.name} (${member.type} : ${member.cost})`);

    return member;
  };
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = "$5";
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = "$15";
  }
}
class SuperMembership {
  constructor(name) {
    this.name = name;
    this.cost = "$25";
  }
}

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember("Yash", "super"));
members.push(factory.createMember("Sai", "simple"));
members.push(factory.createMember("Janaki", "simple"));
members.push(factory.createMember("IK", "super"));

console.log(members);

members.forEach((member) => member.define());
