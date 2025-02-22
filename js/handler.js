document.getElementById('btn-update-title')
        .addEventListener('click', function(){
            // console.log('btn clicked')
            const pageTitleElement = document.getElementById('page-title');
            console.log(pageTitleElement);
            pageTitleElement.innerText = 'update page title text.'
        })

        document.getElementById('btn-login')
        .addEventListener('click', function(){
const userInfoEI = document.getElementById('user-info');
userInfoEI.innerText = 'user logged In successfully'
        })