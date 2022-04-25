const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

const body = document.body;

const ul = document.createElement('ul');
body.append(ul)
ul.setAttribute('style', 'list-style: none')
users.forEach((user,idx) => {
  let li = document.createElement('li')
  li.innerText = (user.firstName + ' ' +user.lastName)
  ul.appendChild(li)
  li.setAttribute('id',user.id)
});

