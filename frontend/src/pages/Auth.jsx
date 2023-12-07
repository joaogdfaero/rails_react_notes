import React from "react"

const Auth = (props) => {
    const type = props.match.params.form;

    return <div>
        <form>
            <input type="text" name="username" value=""/>
            <input type="password" name="password" value=""/>
            <input type="submit" value={type}/>
        </form>
    </div>
}

export default Auth