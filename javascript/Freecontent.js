let Slider = async ()=>{
    let slider = ""
    try {
        let data = await fetch("https://aliahanin.github.io/github.api/json/Freecontent.json")
        let res = await data.json();
        slider = res.map((item) =>{
            return` <div class="swiper-slide  mt-5 rounded-xl relative  ">
            <img class = "w-[164px] h-[219px] opacity-60 desktop:w-[139px] desktop:h-[189px] rounded-xl  " src=${item.image} alt ="" />
            <div class="w-[70px] h-[24px] flex flex-row bg-[#1D2B1F]  rounded-xl pr-3 pt-1 gap-x-1 absolute top-4 right-0 desktop:right-9
            desktop:top-4 ">
                  <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 13.3333H3.33337C2.80294 13.3333 2.29423 13.1226 1.91916 12.7475C1.54409 12.3724 1.33337 11.8637 1.33337 11.3333V4.66663C1.33337 4.13619 1.54409 3.62749 1.91916 3.25241C2.29423 2.87734 2.80294 2.66663 3.33337 2.66663H12.6667C13.1971 2.66663 13.7058 2.87734 14.0809 3.25241C14.456 3.62749 14.6667 4.13619 14.6667 4.66663V11.3333C14.6667 11.8637 14.456 12.3724 14.0809 12.7475C13.7058 13.1226 13.1971 13.3333 12.6667 13.3333ZM2.86197 4.19522C2.73695 4.32025 2.66671 4.48981 2.66671 4.66663V11.3333C2.66671 11.5101 2.73695 11.6797 2.86197 11.8047C2.98699 11.9297 3.15656 12 3.33337 12H12.6667C12.8435 12 13.0131 11.9297 13.1381 11.8047C13.2631 11.6797 13.3334 11.5101 13.3334 11.3333V4.66663C13.3334 4.48981 13.2631 4.32025 13.1381 4.19522C13.0131 4.0702 12.8435 3.99996 12.6667 3.99996H3.33337C3.15656 3.99996 2.98699 4.0702 2.86197 4.19522ZM9.62005 8.66663L7.33338 10.1466C7.20743 10.23 7.0612 10.2776 6.91031 10.2843C6.75941 10.291 6.60954 10.2565 6.4767 10.1846C6.34387 10.1128 6.23307 10.0061 6.15616 9.87611C6.07925 9.74612 6.03911 9.59767 6.04004 9.44663V6.49996C6.03911 6.34892 6.07925 6.20047 6.15616 6.07048C6.23307 5.94049 6.34387 5.83384 6.4767 5.76195C6.60954 5.69005 6.75941 5.65561 6.91031 5.66231C7.0612 5.669 7.20743 5.71659 7.33338 5.79996L9.62005 7.26663C9.737 7.34218 9.83316 7.44582 9.89975 7.5681C9.96634 7.69038 10.0012 7.8274 10.0012 7.96663C10.0012 8.10586 9.96634 8.24288 9.89975 8.36516C9.83316 8.48744 9.737 8.59108 9.62005 8.66663Z" fill="#18A456"></path>
                    </svg>
                  <p class="text-green-400 text-[11px]">${item.logo}</p>
                </div>
                <p class="text-[11px] text-[#ffffff] absolute bottom-0  ">${item.Name}</p>            
            </div>`
        });
        document.querySelector("#Free-Content").insertAdjacentHTML("afterbegin" , slider.join(""))
    } catch (error) {
         console.log(error.message);
    }
}
Slider()