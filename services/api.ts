const getPosts = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/posts');
    return response.json();
}

const getPostComments = async (postId: number) => {
    const response = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`);
    return response.json();
}

export { getPosts };