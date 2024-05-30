import { useState, useEffect } from "react";

const useRandomUserAndComment = (numUsers = 1, numComments = 1) => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };

    const fetchComments = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const data = await response.json();
      setComments(data);
    };

    fetchUsers().catch(error => console.error('Error fetching users:', error));
    fetchComments().catch(error => console.error('Error fetching comments:', error));
  }, []);

  const getRandomItems = (items, numItems) => {
    let randomItems = [];
    for (let i = 0; i < numItems; i++) {
      const randomIndex = Math.floor(Math.random() * items.length);
      randomItems.push(items[randomIndex]);
    }
    return randomItems;
  };

  return {
    randomUsers: getRandomItems(users, numUsers),
    randomComments: getRandomItems(comments, numComments),
  };
};

export default useRandomUserAndComment;