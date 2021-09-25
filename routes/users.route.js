const express = require('express');
const { getUserById, getUsersFriends, getUsersPosts, getUsersFriendsPosts, updateUser } = require('../services/user.service');
const usersRoute = express.Router();

usersRoute.get('/:id', (req, res) => {
    getUserById(req.params.id).then(user => {
        res.send(user);
    })
})

usersRoute.put('/:id', (req, res) => {
    updateUser(req.params.id, req.body).then(result => {
        res.send(result);
    })
})

usersRoute.get('/:id/friends', (req, res) => {
    getUsersFriends(req.params.id).then(friends => {
        res.send(friends);
    })
})

usersRoute.get('/:id/friends/posts', (req, res) => {
    getUsersFriendsPosts(req.params.id).then(posts => {
        res.send(posts);
    })
})

usersRoute.get('/:id/posts', (req, res) => {
    getUsersPosts(req.params.id).then(posts => {
        res.send(posts);
    })
})

module.exports = usersRoute;