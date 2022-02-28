import express from 'express';
import Person from './person.js';

//const express = require('express');
//const book = require('./book');

const port = 3000;
const msg = `http://localhost:${port} started...`;
const server = express();

const persons = [];
persons.push(new Person('Aayush','Thakkar','male'));
persons.push(new Person('Isheet','Shetty','male'));
persons.push(new Person('Radhika','Lohar','female'));
persons.push(new Person('Tamseel','P','male'));

//GET http://localhost:3000/books
server.get("/persons",(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.send(persons);
});

//GET http://localhost:3000/books/:isbn
server.get("/persons/:fname",(req,res)=>{
    res.setHeader('Content-Type','application/json');
    const person = persons.find(p=>p.fname===req.params.fname);
    if(person){
        res.send(person);
    }else{
        req.status(404).send('Car not found');
    }
});

server.listen(3000,()=>{
    console.log(msg);
});
