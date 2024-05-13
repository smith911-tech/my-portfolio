/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
window.createKBSlides = function (id) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (window.jQuery && jQuery().slick !== undefined) {
    jQuery(function ($) {
      $(".kb-slides-".concat(id, " .kb-slides-inner-container")).slick(Object.assign({
        appendDots: ".kb-slides-".concat(id, " .kb-slides-dots"),
        customPaging: function customPaging(slider, i) {
          return '<span class="kb-slide-dot"></span>';
        }
      }, options));
    });
  }
};
window.createKBParticles = function (id, options, override) {
  if (window.jQuery && window.particlesJS) {
    var getColorValue = function getColorValue(color) {
      if (!color || color === '') {
        return '';
      }
      if (color.indexOf('var') > -1) {
        var value = getComputedStyle(document.documentElement).getPropertyValue(color.replace(/var\(/, '').replace(/\)/, '')).trim().replace(/\s/g, '');
        if (value.indexOf('#') === -1 && value.indexOf('rgb') === -1) {
          return "rgb(".concat(value, ")");
        }
        return value;
      }
      return color;
    };
    var overrideOptions = function overrideOptions(options, override) {
      var particle_color = override.particle_color,
        line_color = override.line_color,
        detect_on = override.detect_on,
        shape = override.shape,
        quantity = override.quantity,
        speed = override.speed,
        size = override.size;
      particle_color = getColorValue(particle_color);
      line_color = getColorValue(line_color || particle_color);
      if ('' !== size && undefined !== size && Number(size) > 0) {
        options.particles.size.value = Number(size);
      }
      if ('default' !== detect_on && '' !== detect_on && undefined !== detect_on) {
        options.interactivity.detect_on = detect_on;
      }
      if ('' !== quantity && undefined !== quantity && Number(quantity) > 0) {
        options.particles.number.value = Number(quantity);
      }
      if ('' !== speed && undefined !== speed && Number(speed) > 0) {
        options.particles.move.speed = Number(speed);
      }
      if ('__INITIAL_VALUE__' !== particle_color && '' !== particle_color && undefined !== particle_color) {
        options.particles.color.value = particle_color;
      }
      if ('__INITIAL_VALUE__' !== line_color && '' !== line_color && undefined !== line_color) {
        if (options.particles.line_linked) {
          // for particles.js
          options.particles.line_linked.color = line_color;
        } else {
          // for tsParticles
          if (options.particles.links) {
            options.particles.links.color = line_color;
          } else {
            options.particles.links = {
              color: line_color
            };
          }
        }
      }
      if ('default' !== shape && '' !== shape && undefined !== shape) {
        options.particles.shape.type = shape;
      }

      // for tsParticles
      options.background = {};
      options.fullScreen = {
        enable: false
      };
      return options;
    };
    window.jQuery(function () {
      particlesJS("kb-particles-canvas-".concat(id), overrideOptions(options, override));
    });
  }
};
/******/ })()
;