
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
    
    
    function returnFirstTwoDrivers() {
        return drivers.slice(0, 2)

    }
    function returnLastTwoDrivers() {
        return drivers.slice(2, 4)
    }
    const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

    function createFareMultiplier() {
        return function fareMultiplier() {
            return 5 * 5;
        }; 
    }
    function fareDoubler(fare) {
        return fare * 2;
    }
    
    function fareTripler(fare) {
        return fare * 3;
    }
        
    
    function selectDifferentDrivers(drivers, functions) {
        if(functions === returnFirstTwoDrivers === true)
            return drivers.slice(0, 2)
        else if(functions === returnLastTwoDrivers === true)
            return drivers.slice(2, 4)
    }

