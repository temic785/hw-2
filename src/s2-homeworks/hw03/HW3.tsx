import React, {Dispatch, SetStateAction, useState} from "react"
import {v1} from "uuid"
import s2 from "../../s1-main/App.module.css"
import GreetingContainer from "./GreetingContainer"

/*



* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// export const pureAddUserCallback = (name: string, setUsers: Dispatch<SetStateAction<UserType[]>>, users: UserType[]) => { // need to fix any
export const pureAddUserCallback = (name: string, setUsers: (users:Array<UserType>)=>void, users: UserType[]) => { // need to fix any
    const user = { // need to fix
        _id: v1(), name
    }
    console.log(name)
    setUsers([...users, user])
    console.log(users)

}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => {
        console.log("name "+name)// need to fix any
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={"hw3"}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
