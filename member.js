function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'Modules/skills/views/member.html',
        controller: 'SkillsMemberController',	
        controllerAs: 'vs',
        bindToController: true,
        scope:{
            member:'m'
        }
    };
}
