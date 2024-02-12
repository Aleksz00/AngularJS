let app = angular.module('calculatorApp', []);
app.controller('calculatorController', function($scope, $http){
    $http.get('stages.json')
    .then(function(response){
        $scope.stages = response.data;
        console.log($scope.stages)
    })

    //megjelenítsük a 10 beviteli mezőt
    $scope.teamMembers = [];
    for (let i = 0; i < 10; i++) {
        $scope.teamMembers.push(
            {
                firstName: '',
                lastName: '',
                speed: '',
                totalDistance: 0
            });  
    }
    console.log($scope.teamMembers);

    //Futók kiválasztása egy-egy szakaszra
    $scope.updateRunners = function(){
        $scope.runners = [];
        angular.forEach($scope.teamMembers, function(member){
            let fullName = member.firstName + ' ' + member.lastName;
            //ellenőrzés, létezik e a tömbben, ha nem adja hozzá
            if($scope.runners.indexOf(fullName) === -1){
                //ha nincs benne adja hozzá az üres tömbhöz
                $scope.runners.push(fullName)
            }
        });
        console.log($scope.runners);
    }

    //idő formázása
    $scope.formatTime = function(member){
        if(member.speed && member.speed.length === 4){
            member.speed = member.speed.slice(0, 2) + ':' + member.speed.slice(2)
        }
    };


});
/*
app.filter('timeFormat', function(){
    return function(input){
        if(input && input.length === 4){
            return input.slice(0, 2) + ':' + input.slice(2)
        }
        return input;
    }
})*/