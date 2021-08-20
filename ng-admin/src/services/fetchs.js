const fetchs = {

    async addWord(post) {
      const data = new FormData();
      data.append("json", JSON.stringify(post));
      const response = await fetch ('http://localhost:5000/word/', {method: "POST", body: data});
      const res = await response.json();
      return res
   },
  
//    async deleteAllFeed() {
//     let response = await fetch(`http://localhost:5000/feed/`, {method: "DELETE"});
//     let user = await response.json();
//     return user;
//    },
  
//    async getAllFeedPosts() {
//     let response = await fetch('http://localhost:5000/feed/');
//     let feed = await response.json();
//     return JSON.parse(feed)
//    },
     
//    async deletePostById(id) {
//     let response = await fetch(`http://localhost:5000/feed/${id}`, {method: "DELETE"});
//     let user = await response.json();
//     return user;
//    },
  
//    async changePostName(id, newName) {
//     const data = new FormData();
//     data.append("json", JSON.stringify(newName));
//     let response = await fetch(`http://localhost:5000/feed/name/${id}`, {method: "PUT", body: data} );
//     let res = await response.json();
//     return res
//    },
  
//    async changePostBody(id, newBody) {
//     const data = new FormData();
//     data.append("json", JSON.stringify(newBody));
//     let response = await fetch(`http://localhost:5000/feed/body/${id}`, {method: "PUT", body: data} );
//     let res = await response.json();
//     return res
//    },
  
//    async addToPostCommentsArrayOne(postID, commentID) {
//     const data = new FormData();
//     data.append("json", JSON.stringify(commentID));
//     let response = await fetch(`http://localhost:5000/feed/post/${postID}`, {method: "PUT", body: data} );
//     let res = await response.json();
//     return res
//    },
  
//    async searchAllPostsByCommentID(commentID) {
//     let response = await fetch(`http://localhost:5000/feed/${commentID}`);
//     let feed = await response.json();
//     return JSON.parse(feed)
//    },
  
//    async updateOnePostByID(postID, newPost) {
//     const data = new FormData();
//     data.append("json", JSON.stringify(newPost));
//     let response = await fetch(`http://localhost:5000/feed/${postID}`, {method: "PATCH", body: data} );
//     let res = await response.json();
//     return res
//    },
  
//    async updateOneCommentTitleByID(postID, value, newValue) {
//     const values = { value, newValue };
//     const data = new FormData();
//     data.append("json", JSON.stringify(values));
//     let response = await fetch(`http://localhost:5000/feed/title/${postID}`, {method: "POST", body: data} );
//     let res = await response.json();
//     return res
//    },
  
//    async updateOneCommentTextareaByID(postID, value, newValue) {
//     const values = { value, newValue };
//     const data = new FormData();
//     data.append("json", JSON.stringify(values));
//     let response = await fetch(`http://localhost:5000/feed/textarea/${postID}`, {method: "POST", body: data} );
//     let res = await response.json();
//     return res
//    },
  
//    async removeOneTitleFromFeedPost(postID, value) {
//     const data = new FormData();
//     data.append("json", JSON.stringify(value));
//     let response = await fetch(`http://localhost:5000/feed/title/${postID}`, {method: "PATCH", body: data} );
//     let res = await response.json();
//     return res
//    },
  
  }

  export default fetchs