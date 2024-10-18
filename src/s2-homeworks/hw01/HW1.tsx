import React from "react"
import Message from "./message/Message"
import MessageSender from "./message-sender/MessageSender"
import s2 from "../../s1-main/App.module.css"
import FriendMessage from "./friend-message/FriendMessage"
import avatar from "./avatar.png"
import avatar2 from "./avatar2.png"

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any
export type UserType = {
    avatar: string
    name: string
}
export type ValueMessageType = {
    text: string
    time: string
}

export type MessageType = {
    id: number;
    user: UserType
    message: ValueMessageType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: "Artem",  // можно менять
    },
    message: {
        text: "🌱 Hello, Woopsie! 🐛\n"+
            "It’s so great to see you! I’m really happy that we can chat. How are your days on the leaves going?", // можно менять
        time: "04:20", // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar2, // можно менять
        name: "Vypsen", // можно менять
    },
    message: {
        text: "Normalin normalin!", // можно менять
        time: "04:21", // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={"hw1"}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}

export default HW1
