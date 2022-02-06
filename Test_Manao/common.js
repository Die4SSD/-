$(document).ready(function() {
    $("#registForm").submit(function() {
        $.ajax({
            type: "POST",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            alert("Form send!")
        })
        return false
    })
})