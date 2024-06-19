import { expect as _expect } from "chai";
const expect = _expect;
import { GlobalStore } from "../src/GlobalStore.js";

describe("GlobalStore", function () {
  let account;
  let post;

  beforeEach(function () {
    GlobalStore.getState().reset();

    account = {
      username: "testuser",
      password: "testpassword",
    };

    post = {
      title: "Test Post",
      body: "This is a test post.",
      author: "testuser",
    };
  });
  it("should initialize with correct initial state", function () {
    const state = GlobalStore.getState();

    expect(state.user).to.equal(null);
    expect(state.isLoggedIn).to.equal(false);
    expect(state.accounts).to.be.an("array");
    expect(state.comments).to.be.an("array");
    expect(state.posts).to.be.an("array");
    expect(state.points).to.equal(0);
  });

  it("should add an account correctly", function () {
    const account = {
      username: "testuser",
      password: "testpassword",
    };
    GlobalStore.getState().addAccount(account);

    const state = GlobalStore.getState();

    expect(state.accounts.length).to.equal(1);
    expect(state.accounts[0].username).to.equal("testuser");
    expect(state.accounts[0].password).to.equal("testpassword");
  });

  it("should login a user correctly", function () {
    GlobalStore.getState().addAccount(account);
    GlobalStore.getState().login("testuser", "testpassword");

    const state = GlobalStore.getState();

    expect(state.isLoggedIn).to.equal(true);
    expect(state.user.username).to.equal("testuser");
    expect(state.user.password).to.equal("testpassword");
  });

  it("should not login with invalid credentials", function () {
    GlobalStore.getState().addAccount(account);
    GlobalStore.getState().login("invaliduser", "invalidpassword");

    const state = GlobalStore.getState();

    expect(state.isLoggedIn).to.equal(false);
    expect(state.user).to.equal(null);
  });

  it("should add a forum post correctly", function () {
    GlobalStore.getState().addAccount(account);
    GlobalStore.getState().login("testuser", "testpassword");

    GlobalStore.getState().addForumPost(post, "testuser");

    const state = GlobalStore.getState();

    expect(state.posts.length).to.equal(1);
    expect(state.posts[0].title).to.equal("Test Post");
    expect(state.posts[0].body).to.equal("This is a test post.");
    expect(state.posts[0].author).to.equal("testuser");
  });

  it("should upvote a post correctly", function () {
    GlobalStore.getState().addAccount(account);
    GlobalStore.getState().login("testuser", "testpassword");

    GlobalStore.getState().addForumPost(post, "testuser");
    GlobalStore.getState().upvotePost(1);

    const state = GlobalStore.getState();

    expect(state.posts[0].points).to.equal(1);
  });

  it("should downvote a post correctly", function () {
    GlobalStore.getState().addAccount(account);
    GlobalStore.getState().login("testuser", "testpassword");

    GlobalStore.getState().addForumPost(post, "testuser");
    GlobalStore.getState().downvotePost(1);

    const state = GlobalStore.getState();

    expect(state.posts[0].points).to.equal(-1);
  });
});
