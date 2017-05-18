import React, {Component} from 'react'
import {firebaseApp} from '../firebase'
import {connect} from 'react-redux'
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import CompleteGoalList from './CompleteGoalList'

class App extends Component{

  signOut(){
    firebaseApp.auth().signOut()
  }

  render(){
    return(
      <div className="main-div" style={{margin:'5px'}}>
      <h3>Flat To Do List</h3>
      <AddGoal  />
      <hr />
      <h4>To do</h4>
      <GoalList />
      <hr />
      <h4>Complete Goals </h4>
      <CompleteGoalList />
      <hr />
        <button
          className='bt btn-danger'
          onClick={() => this.signOut()}
        >
        Sign Out 
        </button>
      </div>
      )
  }
}
function mapStateToProps(state){
  console.log('state', state)
  return {}
}
export default connect(mapStateToProps, null)(App) 