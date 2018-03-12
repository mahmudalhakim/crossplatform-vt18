var app = angular.module("myApp" , []);
app.directive("nyDirektiv" , function(){
    return{
        template:"Jag har skapats med en Angular direktiv!"
    }
});

app.directive("nyDirektiv2" , function(){
    return{
        template:"<h1>My New Element Directive 2</h1>"
    }
});
    
app.directive("nyDirektiv3" , function(){
    return{
        restrict: "M",
        replace: true,
        template:"<h1>My New Comment Directive 3</h1>"
    }
});
    
