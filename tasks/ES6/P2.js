const trueFriends = () => {
  const friends = ["kobita", "phone", "computer", "headphones"];

  const realFriends = [];

  for (const friend of friends) {
    if (friend.length % 2 === 0) {
      realFriends.push(friend);
    }
  }

  return realFriends;
};

const result = trueFriends();
console.log('my real friend is',result);
