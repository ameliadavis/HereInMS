

$('form').on('submit', (e) => {
    e.preventDefault();

    const email =$('#email').val().trim();
    const name =$('#name').val().trim();
    const igHandle =$('#igHandle').val().trim();
    const text = $('#text').val().trim();
    const upload= $('#filePath').val().split('\\');

    const data = {
        email, 
        name, 
        igHandle, 
        text,
        upload, 
    }
    $.post('/uploads/', data, function() {
        console.log("this data is being sent to the server", data)
    })
})











