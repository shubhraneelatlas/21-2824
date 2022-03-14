const rulerPoints = document.querySelectorAll(".overlay-points span");
for (i = 0; i < rulerPoints.length; i++) {
    rulerPoints[i].addEventListener("mouseover", function(e) {
        let top = parseInt(this.style.bottom);
        let right = parseInt(this.style.left);
        top = 100 - top;
        right = 100 - right;
        // console.log(top);
        document.querySelector(".markerBorder").style.visibility = "visible";
        document.querySelector(".markerBorder").style.top = top + "%";
        document.querySelector(".markerBorder").style.right = right + "%";

        let idName = String(this.dataset.id);
        if (idName.indexOf(',') > -1) {
            let idArr = idName.split(',');
            for(i=0; i< idArr.length; i++){
                document.getElementById(idArr[i]).style.border = "1px solid red";
            }
            
        }else{
            // console.log(`#${idName} .accordion-header`);
        document.querySelector(`#${idName} .accordion-header`).style.backgroundColor = "#8dc8e8";
        document.querySelector(`#${idName} .accordion-header button`).style.fontWeight = "700";
    }

    });

    rulerPoints[i].addEventListener("mouseout", function(e) {
        document.querySelector(".markerBorder").style.top = 0;
        document.querySelector(".markerBorder").style.right = 0;
        document.querySelector(".markerBorder").style.visibility = "hidden";
        let idName = String(this.dataset.id);

        if (idName.indexOf(',') > -1) {
            let idArr = idName.split(',');
            for(i=0; i< idArr.length; i++){
                document.getElementById(idArr[i]).style.border = "none";
            }

        }else{
            document.querySelector(`#${idName} .accordion-header`).style.backgroundColor = "white";
            document.querySelector(`#${idName} .accordion-header button`).style.fontWeight = "400";
    }
    });
}
const accordionPoints = document.querySelectorAll(".accordion-item");
for(i = 0; i< accordionPoints.length; i++){
    accordionPoints[i].addEventListener("mouseover", function(e){
        let idName = String(this.id);
        console.log(idName);
        const mouseoverEvent = new Event('mouseover');
       document.querySelector(`.overlay-points span[data-id=${idName}]`).dispatchEvent(mouseoverEvent);
       document.querySelector(`.overlay-points span[data-id=${idName}]`).style.transform = "translate(-50%, 50%) scale(1.2)"
    });
    accordionPoints[i].addEventListener("mouseout", function(e){
        let idName = String(this.id);
        console.log(idName);
        const mouseoutEvent = new Event('mouseout');
        document.querySelector(`.overlay-points span[data-id=${idName}]`).dispatchEvent(mouseoutEvent);
        document.querySelector(`.overlay-points span[data-id=${idName}]`).style.transform = ""
        
    });
}


// $(`input:checkbox`).on('click', function() {
//     var $box = $(this);
//     if ($box.is(":checked")) {
      
//     // $(`input:checkbox`).prop("checked", false);
   
//       $box.prop("checked", true);
//       let filterId = $box.attr("id");
//       if(filterId == 'All'){
       
//             $(".overlay-points span, .accordion-item").css("display", "block");

//       }else{
//         $(".overlay-points span, .accordion-item").css("display", "none");
//         if($(`.${filterId}`).css("display") == 'none'){
//             $(`.${filterId}`).css("display", "block");
//           }
//       }
      
     
//     } else {
//       $box.prop("checked", true);
//       let filterId = $box.attr("id");
//       if($(`.${filterId}`).css("display") == 'block'){
//         $(`.${filterId}`).css("display", "none");
//       }
//     }
//   });


$(`input:checkbox`).on('click', function() {
    $('.overlay-points span, .accordion-item').css('display','none');
   
    let checkedEle = [];
    if($(this).is(":checked") && $(this).attr("id") == "All"){
        $(`input:checkbox`).prop("checked", false);
        $(`input:checkbox#All`).prop("checked", true);
        // $('.overlay-points span').css('display','true');
        checkedEle = ['creator', 'trust', 'strategic', 'material']
    }else if($(this).is(":checked") && this != "All"){
        $(`input:checkbox#All`).prop("checked", false);
        let checkedBox = document.querySelectorAll(`input:checked`);
        for(i=0; i< checkedBox.length; i++){
          checkedEle.push($(checkedBox[i]).attr("id"))
        } 
    }
    else if($(this).is(":checked")){
        let checkedBox = document.querySelectorAll(`input:checked`);
        for(i=0; i< checkedBox.length; i++){
          checkedEle.push($(checkedBox[i]).attr("id"))
        } 
    }
    else{
        // $(`input:checkbox`).prop("checked", false);
        // $(`input:checkbox#All`).prop("checked", true);
        let checkedBox = document.querySelectorAll(`input:checked`);
        if(checkedBox.length == 0){
            $(`input:checkbox#All`).prop("checked", true);
            checkedEle = ['creator', 'trust', 'strategic', 'material'];
        }else{
        for(i=0; i< checkedBox.length; i++){
          checkedEle.push($(checkedBox[i]).attr("id"))
        } 
    }

    }
    for(let i=0; i<checkedEle.length; i++){
        if(checkedEle[i] == "creator"){
            $('.creator').css("display","block")
        }else if(checkedEle[i] == "trust"){
            $('.trust').css("display","block")
        }else if(checkedEle[i] == "strategic"){
            $('.strategic').css("display","block")
        }else if(checkedEle[i] == "material"){
            $('.material').css("display","block")
        }else{
            $('.overlay-points span').css('display','block');
        }
    }
    console.log(checkedEle, "hello");
});
// for triggering popover on hover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})



$('.openBtn').on('click',function(){
    var url = $(this).attr("data-url") //your page url
    $('.modal-body').load(url,function(){
        $('.modal').show();
    });
});