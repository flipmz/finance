
// Дэлгэцтэй ажиллах controller
var uiController = (function(){})();

// Санхүүтэй ажиллах controller
var financeController =(function(){});

// Программын холбогч controller
var appController = (function(uiController, financeController){

    var ctrlAddItem = function(){
    // 1. оруулах өгөгдлийг дэлгэцээс олж авна.
        console.log('delgetsees ugugdul avah heseg');
    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална

    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана

    // 4.төсвийг тооцоолно.

    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана

    }
    
    document.querySelector('.add__btn').addEventListener("click", function(){
        ctrlAddItem();
    });

    document.addEventListener("keypress", function(event){
        if(event.keyCode === 13){
            ctrlAddItem();
        }
        else console.log("uur tovch daragdlaa");
    })
})(uiController, financeController);

 // 1. оруулах өгөгдлийг дэлгэцээс олж авна.

    // 2.Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж тэнд хадгална

    // 3. Олж авсан өгөгдлүүдээ вэб дээрээ тохирох хэсэгт нь гаргана

    // 4.төсвийг тооцоолно.

    // 5. Эцсийн үлдэгдэл тооцоог дэлгэцэнд гаргана