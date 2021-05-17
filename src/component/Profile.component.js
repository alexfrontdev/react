import React from "react"
import css from "./profile.css";

import Paper from '@material-ui/core/Paper';
const Profile = (props) => {
        return (
            <Paper elevation={1} className={css.profile}>
                <div className={css.content}>
                <h1>Profile</h1>
                     <p>Name: Matt Damon</p>
                </div>
                    
            </Paper>
            )
}
export default Profile