import { create } from "zustand";
import faker from "faker";

const initialState = {
  user: null,
  isLoggedIn: false,
  accounts: [],
  comments: [],
  posts: [],
  points: 0,
};

const addImageToAccount = (account) => ({
  ...account,
  image: `https://picsum.photos/seed/${account.username}/200`,
});

export const GlobalStore = create((set, get) => ({
  ...initialState,
  setUser: (user) => set({ user }),

  logout: () => set({ user: null, isLoggedIn: false }),

  addAccount: (account) =>
    set((state) => ({
      ...state,
      accounts: [
        ...state.accounts,
        { ...addImageToAccount(account), points: 0 },
      ],
    })),

  login: (username, password) =>
    set((state) => {
      const user = state.accounts.find(
        (account) =>
          account.username == username && account.password == password
      );
      if (user) {
        return { ...state, user, isLoggedIn: true };
      } else {
        return state;
      }
    }),

  addForumPost: (post, username) => {
    set((state) => {
      const id = state.posts.length + 1;
      const user = state.accounts.find(
        (account) => account.username === username
      );
      const postWithIdAndImage = {
        ...post,
        id,
        image: user.image,
        comments: [],
        points: 0,
      };
      user.points += 3;
      return {
        ...state,
        posts: [...state.posts, postWithIdAndImage],
        lastPostId: id,
      };
    });
  },

  addComment: (postId, comment, username) => {
    set((state) => {
      const posts = state.posts.map((post) =>
        post.id == postId
          ? { ...post, comments: [...post.comments, { ...comment, username }] }
          : post
      );
      const user = state.accounts.find(
        (account) => account.username == username
      );
      const postAuthor = state.accounts.find(
        (account) =>
          account.username == posts.find((post) => post.id == postId).author
      );
      user.points += 2;
      postAuthor.points += 2;
      return { ...state, posts };
    });
  },

  upvotePost: (postId) =>
    set((state) => {
      const posts = state.posts.map((post) =>
        post.id == postId ? { ...post, points: post.points + 1 } : post
      );
      const user = state.user;
      const postAuthor = state.accounts.find(
        (account) =>
          account.username == posts.find((post) => post.id == postId).author
      );
      user.points += 1;
      postAuthor.points += 1;

      return { ...state, posts, user };
    }),

  downvotePost: (postId) =>
    set((state) => {
      const posts = state.posts.map((post) =>
        post.id == postId ? { ...post, points: post.points - 1 } : post
      );
      return { ...state, posts };
    }),

  reset: () => set(() => ({ ...initialState })),
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
