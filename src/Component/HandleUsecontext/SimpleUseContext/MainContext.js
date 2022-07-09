import React ,{useState} from 'react'
import { UserContext } from './UserContext'
import ComA from './ComA'

// we can transfer data in any Child Component by Using UseContext
// tranfer data in GrandChild  Component without interpt Child Component

const MainContext = () => {

    const [state, setState] = useState("ali");

    return (
        <div>
            <UserContext.Provider value={{state , setState }}>
                <ComA/>
            </UserContext.Provider>
        </div>
    )
}

export default MainContext
