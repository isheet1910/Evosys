import express from 'express';
import Car from './car.js';

//const express = require('express');
//const book = require('./book');

const port = 3000;
const msg = `http://localhost:${port} started...`;
const server = express();

const cars = [];
cars.push(new Car('BMW','A6','white'));
cars.push(new Car('Audi','q3','red'));
cars.push(new Car('Tata','Safari','grey'));

//GET http://localhost:3000/books
server.get("/cars",(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.send(cars);
});

//GET http://localhost:3000/books/:isbn
server.get("/cars/:brand",(req,res)=>{
    res.setHeader('Content-Type','application/json');
    const car = cars.find(c=>c.brand===req.params.brand);
    if(car){
        res.send(car);
    }else{
        req.status(404).send('Car not found');
    }
});

server.listen(3000,()=>{
    console.log(msg);
});
