const getPosts = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/posts');
    return response.json();
}

const getComments = async (postId: number) => {
  const response = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`);
    const data = await response.json();
  console.log(data);
  return data;  // Return the parsed data
}


export { getPosts, getComments };