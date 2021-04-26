
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const episodes = [];
app.get('/episodes', (request, response) => {
  const {id} = request.query;
  const results = id
    ? episodes.filter(project => project.title.includes(id))
    : episodes;

  return response.json(results);
});



app.post('/episodes', (request, response) => {
  const {id,title,members,published_at,thumbnail,description,url,type,duration} = request.body; 

  const project = {
    id,
    title,
    members,
    published_at,
    thumbnail,
    description,
    file: {
      url,
      type,
      duration
    }
  }

  episodes.push(project);
  return response.json(project);
});

app.put('/episodes/:id',(request, response) => {
  const { id } = request.params;
  const {title,members,published_at,thumbnail,description,file} = request.body; 

  const projectIndex = episodes.findIndex(project => project.id === id);
  if(projectIndex <0){
    return response.status(400).json({error: 'Project not found'})
  }
  const project = {
    id,
    title,
    members,
    published_at,
    thumbnail,
    description,
    file:{
      url,
      type,
      duration
    }
  }


  episodes[projectIndex] = project;

  return response.json(project);
});

app.delete('/episodes/:id',(request, response) => {
  const { id } = request.params;
  const projectIndex = episodes.findIndex(project => project.id === id);
  if(projectIndex <0){
    return response.status(400).json({error: 'Project not found'})
  }
  episodes.splice(projectIndex,1);
  return response.status(204).send();
});

app.listen(process.env.PORT || 3000);