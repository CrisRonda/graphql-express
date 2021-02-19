# Graphql and Express  &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)


This examples is in develop.

# How to run
1. Install docker 
2. Intall docker compose
3. Run `docker-compose build`
3. Run `docker-compose up`
4. Go to [localhost:4000](htttp://localhost:4000)
5. Fork and enjoy!

# Schemas

createCharacter
```
mutation createCharacter{
  createCharacter(
    name: "Goku kid", 
    power:"11", 
    image:"https://i.pinimg.com/originals/3a/bc/7d/3abc7db51ec2f3671ad5eb4aef15db8b.png",
    race:"Sayan"){
    name
    power
    race
    image
  }
}
```
getCharacters
```
{
  character{
    id
    name
    race
    image
    power
  }
}
```