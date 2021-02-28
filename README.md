# Graphql and Express  &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)


This examples is an backend of Graphql CRUD
[See the proyect](https://crisronda.github.io/dbz-angular/dbz/) 

# Libraries & Tech

- Mongo DB
- NodeJS
- GraphQL Yoga
- Docker

# How to run
1. Install docker 
2. Intall docker compose
3. Run `docker-compose build`
3. Run `docker-compose up`
4. Go to [localhost:4000](htttp://localhost:4000)
5. Fork and enjoy!

# Font end 
I created an example with Angular, you can fork the project [in my other repo](https://github.com/CrisRonda/dbz-angular)

<img style="margin: 16px 0 4px" src='https://media.giphy.com/media/YroplJPYSFRdAug1YC/giphy.gif'/>

# Schemas

## getCharacters
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

## createCharacter
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
## Update character
```
 mutation updateCharacter(
    $id: ID!
    $name: String!
    $power: String!
    $image: String!
    $race: String!
  ) {
    updateCharacter(
      id: $id
      name: $name
      power: $power
      image: $image
      race: $race
    ) {
      id
      name
      power
      race
      image
    }
  }
```

## Delete character
```txt
 mutation deleteCharacter($name: String!) {
    deleteCharacter(name: $name)
  }
```

## Subscriptions
## On create new character
```
subscription newCharacter {
    newCharacter {
      id
      name
      power
      image
      race
    }
  }
  ```

## On delete character

```
subscription oldCharacter {
    oldCharacter
  }
```
