export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
  };
  
  export const fetchPostDetails = async (postId: number) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.json();
  };
  
 export const heavyComputation = (item) => {
    // Simulate heavy computation
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += item.id;
    }
    return `Computed value: ${result}`;
  };
  