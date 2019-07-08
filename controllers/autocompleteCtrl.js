(function() {
    angular.module('search')

    .controller('autocompleteCtrl', ['$scope', 'dataService', function($scope, $dataService) {
        
        var timeOutId = 0;
        $scope.showTerm = function(){
            clearTimeout(timeOutId);
            console.log('Cancelled')
            var newTimeout = setTimeout(function(){
                showResults();
                console.log('timeoutcalled')
            }, 500)
            timeOutId = newTimeout;
        }
        

        var showResults = function(){
            $scope.searchTerm = $scope.searchTerm.toLowerCase();
            let result = $dataService.searchResult($scope.searchTerm);
            var resultDiv = document.getElementById('search-results');
            var nameContainer = document.getElementById('nameList');
            var companyContainer = document.getElementById('companyList');
            var noResult = document.createElement('div');
            noResult.innerText = 'No Result Found';
            noResult.classList.add('no-result', 'result-item');
            nameContainer.innerHTML = '';
            companyContainer.innerHTML = '';
            if ($scope.searchTerm == '' || result.length == 0) {
                resultDiv.style.display = 'none';
            } else {
                resultDiv.style.display = 'block';
                result.forEach(element => {
                    let name = element.name.first+' '+element.name.last;
                    let company = element.company;
                    if (name.includes($scope.searchTerm)){
                        name = name.replace($scope.searchTerm, '<span class="found">'+$scope.searchTerm+'</span>')
                        let nameDiv = document.createElement('div');
                        nameDiv.classList.add('result-item');
                        nameDiv.innerHTML = name;
                        nameContainer.appendChild(nameDiv)
                    } else if(company.includes($scope.searchTerm)) {
                        company = company.replace($scope.searchTerm, '<span class="found">' + $scope.searchTerm + '</span>')
                        let companyDiv = document.createElement('div')
                        companyDiv.classList.add('result-item');
                        companyDiv.innerHTML = company;
                        companyContainer.appendChild(companyDiv)
                    }
                });

                if (nameContainer.childNodes.length == 0){
                    nameContainer.appendChild(noResult);
                } else if (companyContainer.childNodes.length == 0) {
                    companyContainer.appendChild(noResult);
                }
            }
        }

        
    }])
})()
