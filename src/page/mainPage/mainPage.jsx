
import { useEffect, useState } from "react";
import { LeftMenu } from "./components/leftMenu/LeftMenu";
import { Scene } from "./components/Scene/Scene";
import { TopMenu } from "./components/TopMenu/TopMenu";
import style from "./style.module.css";
import { useStore } from "../../features/store";

export function MainPage() {
    const [ListGeometry, setGeometry] = useState([])
    const { sethotKey } = useStore()
    useEffect(() => {
        fetch("/SETTING/keyboard.json")
            .then(res => res.json())
            .then(data => { sethotKey(data) })

    })
    return (
        <div className={style.application}>
            <TopMenu setGeometry={setGeometry}  ListGeometry={ListGeometry} />
            <div className={style.main}>
                <LeftMenu />
                <div className={style.scene}>
                    <Scene ListGeometry={ListGeometry} />
                </div>
                <div className={style.RightMenu}></div>
            </div>
        </div>
    )
}