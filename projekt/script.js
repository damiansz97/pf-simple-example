const posts = [{
    title: "GraphQL",
    content: "To jest post odnośnie Graphql",
    author: "Tomek"
  },
  {
    title: "REST",
    content: "To jest post odnośnie REST",
    author: "Tomek"
  },
  {
    title: "SOAP",
    content: "To jest post odnośnie SOAP",
    author: "Tomek"
  },
  {
    title: "Koty",
    content: "Koty są super",
    author: "Wiktor"
  },
  {
    title: "Psy",
    content: "Psy to zwierzęta domowe i bardzo lojalne",
    author: "Wiktor"
  },
  {
    title: "Przyroda",
    content: "Ssaki to zwierzęta należące do kręgowców",
    author: "Dawid"
  },
  {
    title: "Historia",
    content: "Nauka o przeszłości",
    author: "Daniel"
  }
]

//reference to DOM node
let boardNewsDiv; 

// pure function to return correct posts
const findPosts = inputValue => {
  if (inputValue == '')
    return posts;
  else {
    return posts.filter(post =>
      post.author.toLowerCase().startsWith(inputValue.toLowerCase())
    )
  }
}

//pure function to return string for displaying posts
const showPosts = postsArray => {
  const boardHeader = "<table><thead><tr><th>Title</th><th>Content	</th><th>Author</th></tr></thead><tbody>";
  const boardNews = postsArray.reduce((postRecord,post) => 
    postRecord += "<tr><td>" + post.title + "</td><td>" + post.content + "</td><td>" + post.author + "</td></tr>",
    boardHeader
  );
  return boardNews + "</tbody></table>" ;
}

//impure function to display posts by input
const changeNewsBoard = event => {
  const currentPosts = findPosts(event.target.value);
  if (currentPosts.length > 0)
    boardNewsDiv.innerHTML = showPosts(currentPosts);
  else
    boardNewsDiv.innerHTML = '';
}

// when page is loaded
window.onload = function() {

	//set reference to DOM node
	boardNewsDiv = document.getElementById('boardNews');
  
  //display all posts
  boardNewsDiv.innerHTML = showPosts(posts);
  
  //listener to input (activate when the value of input changes)
  const findInput = document.getElementById('finder');
	findInput.addEventListener('input', changeNewsBoard);
}
