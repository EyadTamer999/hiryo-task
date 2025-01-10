const getPosts = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/posts');
    return response.json();
}

const getComments = async (postId: number) => {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`); 
    console.log(response.json().then((data) => console.log(data)));
    return response.json();
}

export { getPosts, getComments };