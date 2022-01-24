import React, { Component } from 'react';

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        //short circuit operator
        return this.state.isLoggedIn && <div>Welcome Short Circuit!</div>

        //ternary conditional operation approach --BEST PRACTICE
        // return(
        //     this.state.isLoggedIn ? 
        //     <div>Welcome User...ternary</div> :
        //     <div>Weclome Guest !!!! ternary</div>
        // )



        //Element Variable approach
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome User, element varianble</div>
        // }else{
        //     message = <div>Welcome Guest..</div>
        // }

        // return <div>{message}</div>


        // return (
        //     <div>
        //         <div> Welcome User - Allan!</div>
        //         <div> Welcome Guest User!</div>
        //     </div>
        // )
    }
}

export default UserGreeting;

/*
 *  https://youtu.be/7o5FPaVA9m0

use short circuit or conditional operator, tends to be cleaner and readable
 */
