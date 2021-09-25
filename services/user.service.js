const { default: axios } = require("axios")

const getUsers = async () => {
    return await (await axios.get('http://localhost:3000/users')).data;
}

const getPosts = async () => {
    return await (await axios.get('http://localhost:3000/posts')).data;
}

const getUserById = async (id) => {
    return await (await axios.get(`http://localhost:3000/users/${id}`)).data;
}

const getUsersFriends = async (id) => {
    const user = await getUserById(id);
    const users = await getUsers();
    return users.filter(u => user.friends.includes(u.id));
}

const getUsersPosts = async (id) => {
    const posts = await (await axios.get(`http://localhost:3000/posts`)).data;
    return posts.filter(p => p.userId === id);
}

const getUsersFriendsPosts = async (id) => {
    const user = await getUserById(id);
    const posts = await getPosts();
    return posts.filter(p => user.friends.includes(p.userId));
}

module.exports = {
    getUsers,
    getUserById,
    getUsersFriends,
    getUsersPosts,
    getUsersFriendsPosts
}