// logic to register


// upload profile logic
const profile_upload = document.querySelector("#file")
const profile_image = document.querySelector(".profile-image")
let uploaded_image_url = ""
const modal = document.querySelector(".modal")
// target the register form
const signup_form = document.querySelector(".signup-form")

profile_upload.addEventListener("change", function(event){
        //  grab the uploaded
        const uploaded_image = event.target.files[0]
        // convert the uploaded file to object url
        uploaded_image_url = URL.createObjectURL(uploaded_image)
        profile_image.src = uploaded_image_url

})


signup_form.addEventListener("submit", function(event){

    event.preventDefault()
   if(uploaded_image_url === ""){
       alert("image required")
   }else{
          modal.style.display = "flex"
    signup_form.style.display = "none"
 
    setTimeout(function(){
          modal.style.display = "none"
          signup_form.style.display = "flex"
         
    }, 3000)
   }
  
})