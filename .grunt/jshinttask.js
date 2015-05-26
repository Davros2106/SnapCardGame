
module.exports =  {

    script: {
        cwd: '',
        src: 'main-app/app/scripts/*.js',
        dest: '.build/',
        expand: true
    },

    file: {
        cwd: '',
        src: '.grunt/*.js',
        dest: '.build/',
        expand: true
    },

    grunt: {
        cwd: '',
        src: 'gruntfile.js',
        dest: '.build/',
        expand: true
    },

    options: {

        quotmark: 'single'

    },

    directives: {
        cwd: '',
        src: 'main-app/app/scripts/directives',
        dest: '.build/',
        expand: true
    },

    services: {
        cwd: '',
        src: 'main-app/app/scripts/providers',
        dest: '.build/',
        expand: true
    },


};
