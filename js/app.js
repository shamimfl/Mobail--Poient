// --------------intut -------------------------------//
// --------------intut -------------------------------//
// --------------intut -------------------------------//
const searchPhone =() => {
    const input = document.getElementById('input');
    const inputText = input.value;
    if (input.value === '') {
        document.getElementById('totalSearch').innerText = `Please Search Something`;
        document.getElementById('cardContainer').textContent = '';
    } else {
        document.getElementById('cardContainer').textContent = '';
        document.getElementById('totalSearch').innerText = '';
        input.value = '';
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displayResult(data.data.slice(0,20)));
    }
}
     //-------------------searchPhone resul ---------------//
     //-------------------searchPhone resul ---------------//
     //-------------------searchPhone resul ---------------//
    const displayResult = allData => {
        document.getElementById('totalSearch').innerText = `${allData.length} search result founds`
        const cardContainer = document.getElementById('cardContainer');
        cardContainer.textContent = '';
        const modelcard =document.getElementById('modal-display')
        modelcard.textContent=''
        if (allData.length === 0) {
            document.getElementById('totalSearch').innerText = `No result for invalid Search`;
        } else {
            allData.forEach(data => {
            //---------- creat div start----------------//
            //---------- creat div start----------------//
            //---------- creat div start----------------//
            //---------- creat div start----------------//
            const div = document.createElement('div');
            div.classList.add('col-md-4');
            div.innerHTML = `
            <div class="card p-2 m-3">
                <img style="height: 20rem;" class="img-fluid" src="${data.image ? data.image : 'No result'}">
                <h3>Name : ${data.phone_name ? data.phone_name: 'No result'}</h3>
                <p class="p-0 m-0"><span class="fw-bold">Brand:</span> ${data.brand ? data.brand : 'No result'}</p>
                <button onclick="phoneDetails('${data.slug}')"  type="button" class="btn btn-dark">
                 Details
                </button>
            </div>
            `
            cardContainer.appendChild(div);
        })
        }};
        // -------------phone details-------------------\\
        // -------------phone details-------------------\\
        // -------------phone details-------------------\\
        const phoneDetails = (slugId) =>{
            const url =`https://openapi.programming-hero.com/api/phone/${slugId}`
            fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data.data.image))
            .then(data => displaydata(data))
        }
        
        //..................... disply show----------------------//
        //..................... disply show----------------------//
        const displaydata= (data) =>{
            console.log(data.data)
        const modelcard =document.getElementById('modal-display')
        modelcard.textContent=''
        const div =document.createElement('div')
        div.innerHTML=''
        div.innerHTML=`

        
        <div class="d-flex border border-3 shadow-lg p-2 w-75 mx-auto rounded">
        <div>
        <img height="250px" src="${data?.data?.image ? data?.data?.image: 'No result'}" class="w-100" alt="...">
        <h5>Name: ${data?.data?.name ? data?.data?.name: 'No result' }"</h5>
        <h5>Brand: ${data?.data?.brand ? data?.data?.brand:'No result'}"</h5>
        <h6>ReleaseDate  : ${data?.data?.releaseDate ? data?.data?.releaseDate: 'No result'}</h6>
        <h6>Chipset  : ${data?.data?.mainFeatures?.chipSet ? data?.data?.mainFeatures?.chipSet : 'No result'}</h6>
        <h6>DisplaySize  : ${data?.data?.mainFeatures?.displaySize ? data?.data?.mainFeatures?.displaySize:'No result'}</h6>
        <h6>Memory  : ${data?.data?.mainFeatures?.memory ? data?.data?.mainFeatures?.memory:'No result'}</h6>
        </div>
        <div>
            <ul>
             <h4>Others</h4>
                <li>Bluetooth:${data?.data?.others?.Bluetooth ? data?.data?.others?.Bluetooth : 'Not result'} </li>
                <li>GPS :${data?.data?.others?.GPS ? data?.data?.others?.GPS:'No result'} </li>
                <li>Radio :${data?.data?.others?.Radio ? data?.data?.others?.Radio:'No result'} </li>
                <li.USB :>${data?.data?.others?.USB ? data?.data?.others?.USB:'No result'} </li.USB>
                <li>WLAN :${data?.data?.others?.WLAN ? data?.data?.others?.WLAN:'No result'} </li>
            </ul>
            <ul>
             <h4>Sensors</h4>
                <li>${data?.data?.mainFeatures?.sensors[0] ? data?.data?.mainFeatures?.sensors[0]:'No result'} </li>
                <li>${data?.data?.mainFeatures?.sensors[1] ? data?.data?.mainFeatures?.sensors[1]:'No result'} </li>
                <li>${data?.data?.mainFeatures?.sensors[2] ? data?.data?.mainFeatures?.sensors[2]:'No result'} </li>
                <li>${data?.data?.mainFeatures?.sensors[3] ? data?.data?.mainFeatures?.sensors[3]:'No result'} </li>
                <li>${data?.data?.mainFeatures?.sensors[4] ? data?.data?.mainFeatures?.sensors[4]:'No result'} </li>
                <li>${data?.data?.mainFeatures?.sensors[5] ? data?.data?.mainFeatures?.sensors[5]:'No result'} </li>
                <li>${data?.data?.mainFeatures?.sensors[6] ? data?.data?.mainFeatures?.sensors[6]:'No result'} </li>
            </ul>
            
      </div>
      </div>
        `
       modelcard.appendChild(div);
    }