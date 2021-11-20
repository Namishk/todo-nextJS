// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "../../data/data";

export default function handler(req, res) {
  if(req.method === 'GET') {
    res.status(200).json(data)
  }
  else if (req.method === 'POST') {
    const task = req.body.task;
    const category = req.body.category;

    const todo = {
      task : task,
      category : category
    }

    data.push(todo);

    res.status(201).json(todo);
  }
}
