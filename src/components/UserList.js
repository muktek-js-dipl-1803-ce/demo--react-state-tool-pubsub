import React, { Component } from 'react';
import UserCard from './User.js' ;
import request from 'superagent';


const userExampleListArray = [
  {
    name: {
      first: "Chad"
    },
    nat: "CA",
    gender: "male",
    picture: {
      large: "http://flathash.com/okaus"
    }
  },
  {
    name: {
      first: "Janet"
    },
    nat: "US",
    gender: "female",
    picture: {
      large: "http://flathash.com/ffff"
    }
  },
  {
    name: {
      first: "Bob"
    },
    nat: "GB",
    gender: "male",
    picture: {
      large: "http://flathash.com/sss"
    }
  },
]


class UserList extends Component {
  constructor(args){
    super(args)

    this.state = {
      userDataList : userExampleListArray
    }
  }

  _fetchUserData(componentProps){
    let apiReqUrl = 'https://randomuser.me/api?results=10'
    let natInRoute = componentProps.match.params.nat
    let genderInRoute = componentProps.match.params.gen

    if(typeof natInRoute !== 'undefined'){
       apiReqUrl = `https://randomuser.me/api?results=10&nat=${natInRoute}`
    }

    if(typeof genderInRoute !== 'undefined'){
       const genderObjMap = {
         M: 'male',
         F: 'female'
       }
       apiReqUrl = `https://randomuser.me/api?results=10&gender=${genderObjMap[genderInRoute]}`
    }

    console.log('new req', apiReqUrl)
    request
      .get(apiReqUrl)
      .then((serverRes)=>{
        const serverResJson = serverRes.body
        console.log(serverResJson)

        this.setState({
          userDataList : serverResJson.results
        })

      })
  }

  componentWillMount(){
    this._fetchUserData(this.props)
  }

  componentWillReceiveProps(newProps){
    this._fetchUserData(newProps)
  }

  _renderCards(userList){
    let userComponentList =  userList.map((userObj)=>{
      // console.log(userObj)
      return (
        <UserCard
          name={userObj.name.first}
          gen={userObj.gender}
          country={userObj.nat}
          imgUrl={userObj.picture.large} />
      )
    })

    return userComponentList
  }




  render() {

    return (
      <div className="user-page">
        <h2>Users</h2>

        <h3>in route: <code>{this.props.match.url}</code></h3>
        <hr/>
        <div className="userslist">
          { this._renderCards(this.state.userDataList) }
        </div>
      </div>
    );
  }
}

export default UserList;
