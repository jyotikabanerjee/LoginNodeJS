/**
 * Created by jyotikabanerjee on 11/07/14.
 */



document.addEventListener('DOMContentLoaded', function () {

    /*  CAROUSEL PART  */
    function MySlider(sliderHeight, sliderObj){
        this.sliderht = sliderHeight;
        this.sliderObj = sliderObj;
        this.currSlide = 0;
        this.slides = [];
    }

    MySlider.prototype.moveToNext= function(){
        this.currSlide++;
        var finalPos = this.currSlide * this.sliderht;
        var initPos = this.sliderObj.scrollLeft;
        var sliderObj = this;
        var id = setInterval(function(){
            sliderObj.sliderObj.scrollLeft = initPos++;
            if(initPos > finalPos){
                clearInterval(id);
            }
        }, 1);
    };

    MySlider.prototype.moveToPrev= function(){
        this.currSlide--;
        var finalPos = this.currSlide * this.sliderht;
        var initPos = this.sliderObj.scrollLeft;
        var sliderObj = this;
        var id = setInterval(function(){
            sliderObj.sliderObj.scrollLeft = initPos--;
            if(initPos<finalPos){
                clearInterval(id);
            }

        }, 1);

    };

    var sliderElem= document.getElementById('slider');
    var myslider = new MySlider(500, sliderElem);
    document.getElementById('move-top').addEventListener('click', function () {
        console.log("Calling Move to Next");
        myslider.moveToNext();
    });

    document.getElementById('move-bottom').addEventListener('click', function () {
        console.log("Calling Move to Prev");
        myslider.moveToPrev();
    });



    /*     OPERATION PART   */

    document.getElementById('submit').addEventListener('submit', function (event) {
       event.preventDefault();

        var obj = {
            username: event.username.value,
            password: event.username.password
        }

        var xhr  = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.onreadystatechange = function (data){
            if(xhr.readyState === 4 && xhr.status === 200){
                console.log("Post request successful...");

                if(data.message === 'USER_AUTHORIZED'){
                    console.log('Authorized user...')
                }
            }
        }
        xhr.send(obj);
    });


});

