var PostController = angular.module('PostListController', []);
PostController.controller('PostController', function ( BlogService, MetadataService) {
    var vm = this;

    vm.post = {};

    BlogService.post($stateParams.id).then(function(post) {
        vm.post = post;

        MetadataService.setMetadata({
            title: post.title,
            description: post.excerpt
        });
    });
}

