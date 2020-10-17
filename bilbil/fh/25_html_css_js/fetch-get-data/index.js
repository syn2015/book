async function getData() {
    //response
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response)
    // json
    const posts = await response.json();
    console.dir(posts)

    // root element
    const root = document.querySelector('#root');
    // create ul
    const ul = document.createElement('ul');
    //对于每一篇文章，创建一个li,然后在其中创建一个a,把结果追加到ul中
    posts.forEach(post => {
        const li = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.appendChild(document.createTextNode(post.title));
        anchor.setAttribute('href', `https://jsonplaceholder.typicode.com/posts/${post.id}`);
        li.appendChild(anchor);
        ul.appendChild(li);
    });
    // ul追加到root中
    root.appendChild(ul);

}
//
getData();