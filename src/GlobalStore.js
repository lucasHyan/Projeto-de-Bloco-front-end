import { create } from 'zustand';

const initialState = {
  user: {
    id:0,
    userName: '',
    Password: '',
  },
  token: '',
};

export const GlobalStore = create(set => ({
  comments: [],
  addComment: (comment) => set(state => ({ comments: [...state.comments, comment] })),
  accounts: [], 
  addAccount: (account) => set(state => ({ accounts: [...state.accounts, account] })),
  posts: [],
  addForumPost: (post) => set(state => ({ posts: [...state.posts, post] })),
}));