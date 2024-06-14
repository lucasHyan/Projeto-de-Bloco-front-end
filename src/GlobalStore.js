import { create } from "zustand";
import faker from "faker";

const initialState = {
  user: null,
  isLoggedIn: false,
  accounts: [],
  comments: [],
  posts: [],
};

const addImageToAccount = (account) => ({
  ...account,
  image: `https://picsum.photos/seed/${account.username}/200`,
});

export const GlobalStore = create((set) => ({
  ...initialState,
  setUser: (user) => set({ user }),
  logout: () => set({ ...initialState }),
  addAccount: (account) =>
    set((state) => ({
      ...state,
      accounts: [...state.accounts, addImageToAccount(account)],
    })),
  login: (username, password) =>
    set((state) => {
      const user = state.accounts.find(
        (account) =>
          account.username === username && account.password === password
      );
      if (user) {
        return { ...state, user, isLoggedIn: true };
      } else {
        return state;
      }
    }),
  // addCommentToPost: (postId, comment) =>
  //   set((state) => {
  //     const postIndex = state.posts.findIndex((post) => post.id == postId);
  //     if (postIndex == -1) {
  //       console.error(`Post with id: ${postId} not found`);
  //       return state;
  //     }
  //     const newPosts = [...state.posts];
  //     newPosts[postIndex] = {
  //       ...newPosts[postIndex],
  //       comments: [...newPosts[postIndex].comments, comment],
  //     };
  //     return { ...state, posts: newPosts };
  //   }),
  addForumPost: (post, username) =>
    set((state) => {
      const id = state.posts.length + 1;
      const userImage = state.accounts.find(
        (account) => account.username == username
      ).image;
      const postWithIdAndImage = {
        ...post,
        id,
        image: userImage,
        comments: [],
      };
      return { ...state, posts: [...state.posts, postWithIdAndImage] };
    }),
  getLastPostId: () => get((state) => state.posts[state.posts.length - 1].id),
}));

const NUM_ACCOUNTS_AND_POSTS = 6;

const generateRandomData = () => {
  for (let i = 0; i < NUM_ACCOUNTS_AND_POSTS; i++) {
    const account = {
      username: faker.internet.userName(),
      password: faker.internet.password(),
    };
    GlobalStore.getState().addAccount(account);

    const post = {
      title: faker.lorem.words(5),
      body: faker.lorem.sentences(3),
      author: account.username,
    };
    GlobalStore.getState().addForumPost(post, account.username);
  }
};

generateRandomData();
