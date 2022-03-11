
const addBtn = document.getElementById('add')
// const editBtn = document.querySelector('.edit')
// const trashBtn = document.querySelector('.trash')

function addNewNote(text = '') {
  const newNote = document.createElement('div')
  newNote.classList.add('note')
  newNote.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? '' : 'hidden'}"></div>
        <textarea ${text ? 'hidden' : ''}></textarea>
    `
    const editBtn = newNote.querySelector('.edit')
    const deleteBtn = newNote.querySelector('.delete')
    const main = newNote.querySelector('.main')
    const textArea = newNote.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked.parse(text)

    deleteBtn.addEventListener('click', () => {
        newNote.remove()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })
    textArea.addEventListener('input', (e) => {
        const { value } = e.target;3
        main.innerHTML = marked.parse(value)
    })


  document.body.appendChild(newNote)
}

addBtn.addEventListener('click', () => addNewNote())

// trashBtn.addEventListener('click', (e) => {
//     console.log(e.target)
// })
