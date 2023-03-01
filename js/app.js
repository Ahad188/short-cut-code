const btnsub = document.getElementById('btn-sub');
const input = document.getElementById('input-url');
btnsub.addEventListener('click',function(){
   const result = input.value;
   loadapi(result);
})

     const loadapi = (result)=>{
          const url = `https://api.shrtco.de/v2/shorten?url=${result}`
          fetch(url)
          .then(rs => rs.json())
          .then(data =>dataDisplay(data))
     }

     const dataDisplay= (data) =>{
        const re =  document.getElementById('ruselts');
        re.value = data.result.short_link;
        console.log(data.result.short_link)
     }