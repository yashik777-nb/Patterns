const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; // list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single User Message
        to.recieve(message, from);
      } else {
        // Braoadcast
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from);
          }
        }
      }
    },
  };
};

const yash = new User("Yash");
const sai = new User("Sai");
const kiran = new User("Kiran");

const chatroom = new Chatroom();
chatroom.register(yash);
chatroom.register(sai);
chatroom.register(kiran);

yash.send("Hi Bro", sai);
sai.send("Hi Anna", yash);
kiran.send("Hello All");
