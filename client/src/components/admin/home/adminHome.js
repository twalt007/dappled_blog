import React, {Component} from 'react';
import AdminHeader from '../general/header'
import NavButton from '../../general/navButton'

class AdminHome extends Component{
    constructor (props){
        super(props);
        
        this.state={
            renderedContent: null,
        }

        this.history = props.history

        this.showOptions = this.showOptions.bind(this);
    }

    componentDidMount = () => {
        const sessionStatus = sessionStorage.getItem('renderedContent');
        if (sessionStatus){
            this.setState({renderedContent: sessionStatus});
        }else{
            this.setState({renderedContent: 'intro'});
        }
    }

    showOptions = () => {
        sessionStorage.setItem('renderedContent', 'call-to-action');
        this.setState({renderedContent: 'call-to-action'});

    }

    render(){
        console.log("state", this.state);
        let renderedContent = (
            <div className="intro green-space">
                <h1 className="text">Welcome to Dappled!</h1>
                <br></br>
                <h2 className="text">Use this space as your own private journal to record the events </h2>
                <h2 className="text"> ~ big and little ~ </h2>
                <h2 className="text">that make up your life and make you into you.</h2>
                <div className = "button-container">
                    <div className = {`small-button no-border`} onClick={this.showOptions} >Let's Go</div>                
                </div>
            </div>
        )
        if (this.state.renderedContent ==='call-to-action'){
            renderedContent = (
                <div className = "shown-options">
                    <div className = "call-to-action green-space">
                        <h1 className="text ">Let this be your happy place</h1>
                        <br></br>
                        <h2 className="text fade-in first">What would you like to do?</h2>
                    </div>
                    <div className="fade-in second">
                        <div className="function-buttons">
                            <NavButton text='Create New Post' url='/new' mainHistory={this.history} />
                            <NavButton text='Edit Post' url='/edit' mainHistory={this.history}/>
                            <NavButton text='Delete Post' url='/delete' mainHistory={this.history}/>
                        </div>
                        <div className="lrg-flx-container center-margins flex-right">
                            <NavButton buttonClasses='small-button' text='View Blog' url='/home' mainHistory={this.history}/>
                        </div>
                    </div>
                </div>
            )   
        }
        return(
        <div className = "admin admin-background section-container center">
            <AdminHeader mainHistory={this.history}/>
            {renderedContent}
        </div>   
        )     
    }
}

export default AdminHome

