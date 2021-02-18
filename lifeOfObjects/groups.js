class Group {
  // Your code here.
  constructor() {
    this.members = [];
  }
  add(n) {
    if (!this.has(n)) {
      this.members.push(n);
    }
  }
  static from(arr) {
    let group = new Group();
    for (let val of arr) {
      group.add(val);
    }
    return group;
  }
  delete(n) {
    this.members = this.members.filter((v) => v !== n);
  }
  has(n) {
    return this.members.includes(n);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
