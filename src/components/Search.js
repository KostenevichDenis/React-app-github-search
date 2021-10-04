import React, { useState } from 'react'
import { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

function Search() {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== "Enter") {
            return
        }

        github.clearUsers()

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Enter user data')
        }

    }

    return (
        <div className="form-group mb-4">
            <input 
                className="form-control"
                type="text"
                placeholder="Enter user name"
                onKeyPress={onSubmit}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            
        </div>
    )
}

export default Search
