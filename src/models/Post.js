class Post {
  constructor(id, username, profilePicture, title, content, date) {
    this.id = id;
    this.user = {
      username: username,
      profilePicture: profilePicture,
    };
    this.title = title;
    this.content = content;
    this.date = date;
  }
}