module.exports = function(grunt) {
	'use strict';

	var mozjpeg = require('imagemin-mozjpeg');

	grunt.initConfig({
		env: {
			dev: {
				VIPS_WARNING: 0
			}
		},
		express: {
			dev: {
				options: {
					script: 'server.js',
				}
			}
		},
		watch: {
			express: {
				files:  [ 'index.html', 'dist/**/*.js' ],
				tasks:  [ 'express:dev' ],
				options: {
					spawn: false
				},
				public: {
					files: ['dist/**/*.js']
				}
			}
		},
		modernizr: {
			dist: {
				'crawl': false,
				'customTests': [],
				'dest': 'dist/modernizr.js',
				'tests': [
					'webp'
				],
				'options': [
					'setClasses'
				],
				'uglify': true
			}
		},
		imagemin: {
			retina: {
				files: [{
					expand: true,
					cwd: 'resize/retina/',
					src: ['**/*.{png,jpg,gif,webp}'],
					dest: 'dist/retina/'
				}]
			},
			hero: {
				files: [{
					expand: true,
					cwd: 'resize/hero/',
					src: ['**/*.{png,jpg,gif,webp}'],
					dest: 'dist/hero/'
				}]
			},
			backdrop: {
				files: [{
					expand: true,
					cwd: 'resize/backdrop/',
					src: ['**/*.{png,jpg,gif,webp}'],
					dest: 'dist/backdrop/'
				}]
			}
		},
		sharp: {
			retina: {
				files: [{
					expand: true,
					cwd: 'src/retina/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'resize/retina/'
				}],
				options: {
					tasks: [
						{ resize: '3x', rename: '{base}_3x.{ext}' },
						{ resize: '3x', rename: '{base}_3x.webp' },
						{ resize: '2x', rename: '{base}_2x.{ext}' },
						{ resize: '2x', rename: '{base}_2x.webp' },
						{ resize: '1x', rename: '{base}.{ext}' },
						{ resize: '1x', rename: '{base}.webp' }
					]
				}
			},
			hero: {
				files: [{
					expand: true,
					cwd: 'src/hero/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'resize/hero/'
				}],
				options: {
					tasks: [
						{ smartcrop: true, resize: [2000, 847], rename: '{base}-lg.{ext}',	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [2000, 847], rename: '{base}-lg.webp', 	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [1300, 700], rename: '{base}-md.{ext}', 	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [1300, 700], rename: '{base}-md.webp', 	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [1000, 600], rename: '{base}-sm.{ext}', 	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [1000, 600], rename: '{base}-sm.webp', 	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [600, 600], rename: '{base}-xs.{ext}', 	overlayWith: ['src/black_04.png', { tile: true }] },
						{ smartcrop: true, resize: [600, 600], rename: '{base}-xs.webp', 	overlayWith: ['src/black_04.png', { tile: true }] }
					]
				}
			},
			backdrop: {
				files: [{
					expand: true,
					cwd: 'src/backdrop/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'resize/backdrop/'
				}],
				options: {
					tasks: [
						// 2876*1540
						/*
							Source: 2876*1540 
							XL: 2540x1440	31.6%
							LG: 1920x1080	17.0%
							MD: 1366x768	35.0%
							MD: 1280x1024	 5.0%
							MD: 1280x800	 4.0%
							MD: 1024x768	 3.0%
							Mobile uses portrait cropping for the most common screen sizes.
						*/
						{ resize: [2540, 1440], rename: '{base}-landscape-lg.{ext}',	overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [2540, 1440], rename: '{base}-landscape-lg.webp', 	overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [1920, 1080], rename: '{base}-landscape-md.{ext}',	overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [1920, 1080], rename: '{base}-landscape-md.webp', 	overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [1366, 768], rename: '{base}-landscape-sm.{ext}', 	overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [1366, 768], rename: '{base}-landscape-sm.webp', 		overlayWith: ['src/black_067.png', { tile: true }] },
						
						{ resize: [1080, 1920], rename: '{base}-portrait-lg.{ext}',		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [1080, 1920], rename: '{base}-portrait-lg.webp', 		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [720, 1280], rename: '{base}-portrait-md.{ext}',		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [720, 1280], rename: '{base}-portrait-md.webp', 		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [640, 1136], rename: '{base}-portrait-sm.{ext}', 		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [640, 1136], rename: '{base}-portrait-sm.webp', 		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [480, 800], rename: '{base}-portrait-xs.{ext}', 		overlayWith: ['src/black_067.png', { tile: true }] },
						{ resize: [480, 800], rename: '{base}-portrait-xs.webp', 		overlayWith: ['src/black_067.png', { tile: true }] },
					]
				}
			},
		},
		svg_sprite: {
			default: {
				files: [{
					expand: true,
					cwd: 'src/svg/',
					src: ['**/*.svg'],
					dest: 'dist/svg/'
				}],
				options: {
					mode: {
						css: {
							prefix: '.rbv2svg__%s',
							sprite: 'rbv2.svg',
							bust: false,
							dimensions: '',
							render: {
								less: true
							},
							example: false
						}
					}
				}
			}
		},
		webfont: {
			icons: {
				src: 'src/svg/*.svg',
				dest: 'dist/fonts/'
			},
			options: {
				hashes: false,
				fontFilename: 'rbv2',
				stylesheet: 'less',
				templateOptions: {
					baseClass: 'rbv2',
					classPrefix: 'rbv2__'
				},
				types: 'eot,woff2,woff,ttf,svg'
			}
		},
		ttf2eot: {
			icons: {
				src: 'dist/fonts/*.ttf',
				dest: 'dist/fonts/'
			}
  		}
	});

	// Image optimization
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-sharp');
	grunt.loadNpmTasks('grunt-env');

	// Sprite handling
	grunt.loadNpmTasks('grunt-svg-sprite');
	grunt.loadNpmTasks('grunt-webfont');
	grunt.loadNpmTasks('grunt-ttf2eot');

	// Demo server tasks
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-modernizr');

	// Generate production images
	grunt.registerTask('default', ['imagemin']);
	grunt.registerTask('retina', ['env:dev', 'sharp:retina', 'imagemin:retina']);
	grunt.registerTask('hero', ['env:dev', 'sharp:hero', 'imagemin:hero']);
	grunt.registerTask('backdrop', ['env:dev', 'sharp:backdrop', 'imagemin:backdrop']);

	grunt.registerTask('svg', ['svg_sprite:default']);
	grunt.registerTask('font', ['webfont', 'ttf2eot']);

	// Run a simple server to test the production images
	grunt.registerTask('server', ['modernizr', 'express:dev', 'watch']);
};