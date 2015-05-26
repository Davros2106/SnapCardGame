angular.module('tombola.snapCardGame.providers.gameApiProxy',[]);
angular.module('tombola.snapCardGame.providers.gameModel',[]);
angular.module('tombola.snapCardGame.directives',[]);
angular.module('tombola.snapCardGame', [
    'tombola.snapCardGame.providers.gameApiProxy',
    'tombola.snapCardGame.providers.gameModel',
    'tombola.snapCardGame.directives']);