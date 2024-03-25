import { useNavigate } from "react-router-dom";

import { useStore } from "../../../../features/store";

import { MaterialSvg } from "./svg/MaterialSvg";
import { MinusGeometrySvg } from "./svg/MinusGeometrySvg";
import { RotationSvg } from "./svg/RotationSvg";
import { ScaleSvg } from "./svg/ScaleSvg";
import { TranslateSvg } from "./svg/TranslateSvg";
import { UniteGeometrySvg } from "./svg/UniteGeometrySvg";

import style from "./style.module.css";

export function LeftMenu() {
    const { setMode, hotKey, target } = useStore()
    const navigate = useNavigate()
    const tranformObj = (e) => {
        const keyCode = e.target.getAttribute("data-key-code")
        if (!hotKey.tranform[keyCode])
            return
        setMode(hotKey.tranform[keyCode])
    }
    const openMeshPage = (e) => {

        var positions = target.geometry.getAttribute('position').array;
        var indices = target.geometry.getIndex().array;

        navigate("./mesh", {
            state: {
                positions,
                indices
            }
        })
    }
    return (
        <div className={style.leftMenu}>
            <div onClick={tranformObj}>
                <TranslateSvg classNameIcons={style.icons} />
                <RotationSvg classNameIcons={style.icons} />
                <ScaleSvg classNameIcons={style.icons} />
            </div>
            <div onClick={openMeshPage}>
                <MaterialSvg classNameIcons={style.icons} />
            </div>
            <UniteGeometrySvg classNameIcons={style.icons} />
            <MinusGeometrySvg classNameIcons={style.icons} />
        </div>
    )
}