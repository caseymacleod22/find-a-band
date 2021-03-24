const $searchForm = $('#search-form')
const $searchFormInput = $('#search-band')
const $results = $('#results')


let results;

$searchForm.on('submit', handleSubmit)

function handleSubmit(evt) {
    evt.preventDefault()
    const input = $searchFormInput.val()
    
    $.ajax('/bands/getband?band=' + input)
    .then(function(data) {
        results = data
        console.log(data)
        render()
        $searchFormInput.val('')
    }, function(error) {
        console.log(error)
    })
    
function render() {
    $results.html(`
        <a href="/bands/${results._id}">
         <h3>${results.bandName}</h3>
         <p>${results.yearFormed}<p>
        </a>
         `)
}

}