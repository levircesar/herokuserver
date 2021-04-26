
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


const projects = [];
app.get('/projects', (request, response) => {
  const {id} = request.query;
  const results = id
    ? projects.filter(project => project.title.includes(id))
    : projects;

  return response.json(results);
});



app.post('/projects', (request, response) => {
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

  projects.push(project);
  return response.json(project);
});

app.put('/projects/:id',(request, response) => {
  const { id } = request.params;
  const {title,members,published_at,thumbnail,description,file} = request.body; 

  const projectIndex = projects.findIndex(project => project.id === id);
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


  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id',(request, response) => {
  const { id } = request.params;
  const projectIndex = projects.findIndex(project => project.id === id);
  if(projectIndex <0){
    return response.status(400).json({error: 'Project not found'})
  }
  projects.splice(projectIndex,1);
  return response.status(204).send();
});

app.listen(process.env.PORT || 3000);