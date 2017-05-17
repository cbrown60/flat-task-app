import React, {Component} from 'react'

class GoalItem  extends Component{

  completeGoal(){

  }

  render(){
    console.log('this.props.goal', this.props.goal)
    const{email,title} = this.props.goal
    return(
        <div style={{margin:'5px'}}>
          <strong>{title}</strong>
          <span style={{marginRight:'5px'}}>submited by <em>{email}</em></span>
          <button
            className='btn btn-sm btn-primary'
            onClick={() => this.completeGoal()}
          >Complete
          </button>
        </div>

      )
  }
}
export default GoalItem
