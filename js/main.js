// document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#toggle').addEventListener('click', () => {
        document.querySelector('.navigation-mb').classList.toggle('active')
        document.querySelector('.navigation-mb').classList.toggle('fixed')
    })
    
    document.querySelectorAll('.navigation-mb .items .item').forEach(item => {
        item.addEventListener('click', () => {
        document.querySelector('.navigation-mb').classList.toggle('fixed')
            document.querySelector('.navigation-mb').classList.toggle('active')
    
        })
    })
    
   function sendEmail(){
    const params={
        name:document.querySelector('.name-inp').value,
        email:document.querySelector('.email-inp').value,
        message:document.getElementById('message').value,
    };

    const service_ID='service_phgz363'
    const templete_id='template_jcktmbq'

    emailjs.send(service_ID,templete_id,params)
    .then(
     res=>{
         document.querySelector('.name-inp').value=''
         document.querySelector('.email-inp').value=''
         document.getElementById('message').value=''
         console.log(res);
         alert('You message sent successfuly!')
     }
    )
    .catch(error=>console.log(error))
   }
// })

// id: service_phgz363 //service_phgz363
