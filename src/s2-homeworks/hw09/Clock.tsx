import React, {useEffect, useState} from "react"
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton"
import {restoreState} from "../hw06/localStorage/localStorage"
import s from "./Clock.module.css"

function Clock() {
    let [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState("hw9-date", Date.now())))
    const [show, setShow] = useState<boolean>(false)


    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
       setDate(new Date())
        const id = setInterval(() => {
            setDate(() => {
                const newDate = new Date(Date.now())
                return newDate
            })

        }, 1000)
        setTimerId(Number(id))
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId)
        setTimerId(undefined);

    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const createFormatter = (locale: string, options: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat(locale, options);

    const formatterYearMonthDay = createFormatter("ru-Ru", { day: "2-digit", month: "2-digit", year: "numeric" });
    const formatterMonth = createFormatter("en-US", { month: "long" });
    const formatterWeekday = createFormatter("en-US", { weekday: "long" });
    const formatterTime = createFormatter("ru-Ru", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    const stringTime = formatterTime.format(date)
    const stringDate =formatterYearMonthDay.format(date)
    const stringDay = formatterWeekday.format(date)
    const stringMonth = formatterMonth.format(date)

    return (
        <div className={s.clock}>
            <div
                id={"hw9-watch"}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={"hw9-day"}>{stringDay}</span>,{" "}
                <span id={"hw9-time"}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={"hw9-more"}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={"hw9-month"}>{stringMonth}</span>,{" "}
                            <span id={"hw9-date"}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={"hw9-button-start"}
                    disabled={!!timerId}
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={"hw9-button-stop"}
                    disabled={!timerId}
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>

        </div>
    )
}

export default Clock
