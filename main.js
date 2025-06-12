const items = []

function addItem() {
    const itemName = document.querySelector("#item").value
    
    const newItem = {
        name: itemName,
        checked: false
    }

    items.push(newItem) 
    document.querySelector("#item").value = ""
    showItemsList()
}

function showItemsList() {
    const sectionList = document.querySelector(".list")
    sectionList.innerHTML = "" 

    items.map((item, index) => { 
        sectionList.innerHTML += `
            <div class="item">
                    <div>
                        <input type="checkbox" name="list" id="item-${index}">
                        <div class="custom-checkbox">
                            <img src="./checked.svg" alt="checked">
                        </div>
                        <label for="item-${index}">${item.name}</label>
                    </div>

                    <button>
                        <img src="./trash-icon.svg" alt="trash-icon">
                    </button>
                </div>
            `
    })
}