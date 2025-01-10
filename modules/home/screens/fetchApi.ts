const getPosts = async () => {
    const response = await fetch('https://gorest.co.in/public/v2/posts');
    return response.json();
}

export { getPosts };