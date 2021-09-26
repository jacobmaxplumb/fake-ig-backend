const { default: axios } = require("axios")
const admin = require('./admin.service');

const getUsers = async () => {
    return await admin.auth().listUsers().then(data => {
        return data.users.map(u => {
            return { uid: u.uid, email: u.email, displayName: u.displayName, photoURL: u.photoURL, metadata: u.metadata };
        })
    });
}

const getPosts = async () => {
    return await (await axios.get('http://localhost:3000/posts')).data;
}

const getUserById = async (id) => {
    return await admin.auth().getUser(id);
}

const getUsersPosts = async (id) => {
    const posts = await (await axios.get(`http://localhost:3000/posts`)).data;
    return posts.filter(p => p.userId === id);
}

const getUsersFriends = async (id) => {
    const users = await getUsers();
    const user = await getUserById(id);
    const friendIds = await (await axios.get(`http://localhost:3000/friends/${id}`)).data.friends;
    return users.filter(u => friendIds.includes(u.uid));
}

const getUsersFriendsPosts = async (id) => {
    const friends = await (await getUsersFriends(id)).map(f => f.uid);
    const posts = await getPosts();
    return posts.filter(p => friends.includes(p.userId));
}

module.exports = {
    getUsers,
    getUserById,
    getUsersFriends,
    getUsersPosts,
    getUsersFriendsPosts
}