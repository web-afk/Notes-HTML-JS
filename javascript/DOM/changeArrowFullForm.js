import { $ } from "../dom.js"
import { handleClickFastFormArrow } from "../events/clickFastFormArrow.js";

export const handleAllFullFormArrows = arrows => {
    const dashBoardFullForm = $(".dashboard-full-form")
    if(dashBoardFullForm.classList.contains("hide-block")) return 0;

    [...arrows].forEach(arrow => {
        arrow.addEventListener("click", handleClickFastFormArrow)
    })
}