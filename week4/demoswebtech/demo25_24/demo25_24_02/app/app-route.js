import express from 'express';
const app = express.Router();

const products = [{"pid": 1, "pname": "Pepsi", "unit_price": 20}];

app.get('/products', (req, resp) => {
    resp.setHeader('Content-Type', 'application/json');
    resp.send(products);
});

app.get('/products/:pid', (req, resp) => {
    const pid = req.params.pid;
    resp.setHeader('Content-Type', 'application/json');
    resp.send(products);
});

app.post('/products/add', (req, resp) => {
    const pid = req.body.pid;
    const pname = req.body.pname;
    const unit_price = req.body.unit_price;
    resp.setHeader('Content-Type', 'application/json');
    if(products.push({"pid": pid, "pname": pname, "unit_price": unit_price})>0){
        resp.send(pid + " added");
    }
    else
        resp.status(500).send({message: pid + " not added"});
});

app.delete('/products/:pid',(req,resp)=>{
    const pid = req.params.pid;
    resp.setHeader('Content-Type','application/json');    
    // const product=products.find(p=>p.pid===pid);
    products.find(product=>{
        if(product.pid===pid){
            products.pop();
            resp.send("Product Deleted");
        }else{
            resp.send("Product Not found");
        }
    })
});

export default app;