const $input = document.querySelector(".input")
const $buttonAdd = document.querySelector(".button_add")
const $buttonDelete = document.querySelector(".button_delete")
const $list = document.querySelector(".list")
const arr = []
$buttonDelete.setAttribute("disabled", true)
const displayList = (input, list) => {
    input.value = ""
    list.innerHTML = ""
    arr.map((el, i) => list.innerHTML += `<li class="list_item" data-id="${i}">${i + 1}.<input type="text" value="${el}"></li>`)
}
document.addEventListener("click", event => {
    const target = event.target
    if (target.classList.contains("button_add")) {
        if ($input.value) {
            arr.push($input.value)
            displayList($input, $list)
            if (arr.length) $buttonDelete.removeAttribute("disabled")
        }
    }
    if (target.classList.contains("button_delete")) {
        if (arr.length) {
            arr.pop()
            displayList($input, $list)
            if (!arr.length) $buttonDelete.setAttribute("disabled", true)
        }
    }
})
document.addEventListener("change", event => {
    const target = event.target
    if (target.closest('.list_item')?.dataset?.id) {
        const id = target.closest('.list_item').dataset.id
        const value = target.closest('.list_item input').value
        arr.splice(id, 1, value)
    }
})