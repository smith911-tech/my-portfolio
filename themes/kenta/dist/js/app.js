(() => {
    var __webpack_modules__ = [ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _modules_focusable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        var _modules_focusable__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_modules_focusable__WEBPACK_IMPORTED_MODULE_0__);
        var _modules_collapsable_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
        var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
        var _modules_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
        var _modules_focus_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
        var _modules_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
        var _modules_to_top__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
        var _modules_preloader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
        var _modules_create_scroll_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9);
        var _modules_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);
        var _modules_theme_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
        var _modules_sticky__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
        var _modules_particles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13);
        jQuery(document).ready((function($) {
            "use strict";
            new _modules_preloader__WEBPACK_IMPORTED_MODULE_7__["default"]($);
            new _modules_collapsable_menu__WEBPACK_IMPORTED_MODULE_1__["default"]($);
            new _modules_menu__WEBPACK_IMPORTED_MODULE_2__["default"]($);
            new _modules_toggle__WEBPACK_IMPORTED_MODULE_3__["default"]($);
            new _modules_form__WEBPACK_IMPORTED_MODULE_9__["default"]($);
            new _modules_focus_redirect__WEBPACK_IMPORTED_MODULE_4__["default"]($);
            new _modules_popup__WEBPACK_IMPORTED_MODULE_5__["default"]($);
            new _modules_to_top__WEBPACK_IMPORTED_MODULE_6__["default"]($);
            new _modules_create_scroll_reveal__WEBPACK_IMPORTED_MODULE_8__["default"]($);
            new _modules_theme_switch__WEBPACK_IMPORTED_MODULE_10__["default"]($);
            new _modules_sticky__WEBPACK_IMPORTED_MODULE_11__["default"]($);
            new _modules_particles__WEBPACK_IMPORTED_MODULE_12__["default"]($);
        }));
    }, () => {
        jQuery.extend(jQuery.expr[":"], {
            focusable: function focusable(el) {
                return jQuery(el).is("a, button, :input, [tabindex]");
            }
        });
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var CollapsableMenu = _createClass((function CollapsableMenu($) {
            _classCallCheck(this, CollapsableMenu);
            $(".kenta-collapsable-menu.collapsable").each((function(_, menu) {
                $(menu).find(".menu-item-has-children, .page_item_has_children").each((function(_, item) {
                    var $submenu = $(item).find("> .sub-menu, > .children");
                    var $toggle = $(item).find("> a .kenta-dropdown-toggle");
                    $submenu.hide();
                    $toggle.on("click", (function(ev) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        $toggle.toggleClass("active");
                        $submenu.slideToggle(300);
                    }));
                }));
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = CollapsableMenu;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Menu = _createClass((function Menu($) {
            _classCallCheck(this, Menu);
            var $menuItem = $(".sf-menu .menu-item");
            $menuItem.on("mouseover", (function() {
                $(this).addClass("sfHover");
            }));
            $menuItem.on("mouseleave", (function() {
                var $this = $(this);
                setTimeout((function() {
                    $this.removeClass("sfHover");
                }), 300);
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = Menu;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Toggle = _createClass((function Toggle($) {
            _classCallCheck(this, Toggle);
            var _this = this;
            var scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            if (scrollBarWidth > 0) {
                document.body.style.setProperty("--scrollbar-width", "".concat(scrollBarWidth, "px"));
            }
            $("[data-toggle-target]").each((function() {
                var $this = $(this);
                if ($this.hasClass("kenta-toggleable")) {
                    return;
                }
                $this.addClass("kenta-toggleable");
                $(this).on("click", (function() {
                    var el = $(this);
                    var $target = $(el.data("toggle-target"));
                    var $showFocus = $(el.data("toggle-show-focus"));
                    var $hiddenFocus = $(el.data("toggle-hidden-focus"));
                    $target.toggleClass("active");
                    if ($target.hasClass("active")) {
                        $(document.body).addClass("kenta-modal-visible");
                        if ($showFocus && $showFocus.first()) {
                            setTimeout((function() {
                                return $showFocus.first().focus();
                            }), 100);
                        }
                    } else {
                        setTimeout((function() {
                            $(document.body).removeClass("kenta-modal-visible");
                        }), 300);
                        if ($hiddenFocus && $hiddenFocus.first()) {
                            setTimeout((function() {
                                return $hiddenFocus.first().focus();
                            }), 100);
                        }
                    }
                }));
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = Toggle;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var FocusRedirect = _createClass((function FocusRedirect($) {
            _classCallCheck(this, FocusRedirect);
            $("[data-redirect-focus]").each((function() {
                var $this = $(this);
                var $target = $($this.data("redirect-focus"));
                $this.on("keydown", (function(ev) {
                    var tabKey = ev.keyCode === 9;
                    var shiftKey = ev.shiftKey;
                    var $focusable = $this.find(":focusable:visible:not(.lotta-customizer-shortcut)");
                    var $last = $focusable.last();
                    var $first = $focusable.first();
                    var active = document.activeElement;
                    if (tabKey && !shiftKey && $last.is(active)) {
                        ev.preventDefault();
                        $target.focus();
                    }
                    if (tabKey && shiftKey && $first.is(active)) {
                        ev.preventDefault();
                        $target.focus();
                    }
                }));
                $target.on("keydown", (function(ev) {
                    if (!$this.is(":visible")) {
                        return;
                    }
                    var tabKey = ev.keyCode === 9;
                    var shiftKey = ev.shiftKey;
                    var $focusable = $this.find(":focusable:visible");
                    var $last = $focusable.last();
                    var $first = $focusable.first();
                    if (tabKey && !shiftKey) {
                        ev.preventDefault();
                        $first.focus();
                    }
                    if (tabKey && shiftKey) {
                        ev.preventDefault();
                        $last.focus();
                    }
                }));
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = FocusRedirect;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Popup = _createClass((function Popup($) {
            _classCallCheck(this, Popup);
            $("[data-popup-target]").each((function() {
                var $this = $(this);
                var $target = $($this.data("popup-target"));
                var show = function show() {
                    $target.stop().animate({
                        opacity: "show",
                        marginTop: "0"
                    }, 300);
                };
                var hide = function hide() {
                    $target.stop().animate({
                        opacity: "hide",
                        marginTop: "10"
                    }, 150);
                };
                if ($this.data("popup-on-hover")) {
                    $this.hover(show, hide);
                } else {
                    $this.click(show, hide);
                }
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = Popup;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var ToTop = _createClass((function ToTop($) {
            _classCallCheck(this, ToTop);
            var $scrollTop = $("#scroll-top");
            $(window).on("scroll", (function() {
                if ($(this).scrollTop() > 200) {
                    $scrollTop.addClass("active");
                } else {
                    $scrollTop.removeClass("active");
                }
            }));
            $scrollTop.on("click", (function() {
                $("html, body").scrollTop(0);
                return false;
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = ToTop;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var Preloader = function() {
            function Preloader($) {
                var _this = this;
                _classCallCheck(this, Preloader);
                if ($(".kenta-preloader-wrap").length) {
                    $(document).ready((function() {
                        return _this.hidePreloader($);
                    }));
                    if ($("body").hasClass("elementor-editor-active")) {
                        setTimeout((function() {
                            return _this.hidePreloader($);
                        }), 300);
                    }
                }
            }
            _createClass(Preloader, [ {
                key: "hidePreloader",
                value: function hidePreloader($) {
                    $(".kenta-preloader-wrap > div").fadeOut(600);
                    $(".kenta-preloader-wrap").fadeOut(1500);
                }
            } ]);
            return Preloader;
        }();
        const __WEBPACK_DEFAULT_EXPORT__ = Preloader;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var CreateScrollReveal = _createClass((function CreateScrollReveal($) {
            _classCallCheck(this, CreateScrollReveal);
            if (window.ScrollReveal === undefined) {
                return;
            }
            var options = $(document.body).data("kenta-scroll-reveal");
            ScrollReveal().reveal(".kenta-scroll-reveal", options);
            ScrollReveal().reveal(".kenta-scroll-reveal-widget", options);
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = CreateScrollReveal;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
            }
            return arr2;
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Form = _createClass((function Form($) {
            _classCallCheck(this, Form);
            var inputs = _toConsumableArray(document.querySelectorAll(".comment-form, .kenta-inner-label")).reduce((function(result, parent) {
                return [].concat(_toConsumableArray(result), _toConsumableArray(parent.querySelectorAll("input,textarea")));
            }), []).filter((function(input) {
                return input.type !== "hidden" && input.type !== "checkbox" && input.type !== "submit";
            }));
            console.log(inputs);
            var inputWrapper = function inputWrapper(el) {
                if (!el) {
                    return null;
                }
                if (el.querySelector("label")) {
                    return el;
                }
                return inputWrapper(el.parentNode);
            };
            var renderEmptiness = function renderEmptiness() {
                inputs.map((function(input) {
                    var wrapper = inputWrapper(input.parentNode);
                    if (wrapper) {
                        wrapper.classList.remove("kenta-not-empty-field");
                    }
                    if (!input.value) {
                        return;
                    }
                    if (input.value.trim().length > 0) {
                        if (wrapper) {
                            wrapper.classList.add("kenta-not-empty-field");
                        }
                    }
                }));
            };
            setTimeout((function() {
                renderEmptiness();
            }));
            inputs.map((function(input) {
                return input.addEventListener("input", renderEmptiness);
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = Form;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
        var _particles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var ThemeSwitch = function() {
            function ThemeSwitch($) {
                _classCallCheck(this, ThemeSwitch);
                var $switch = this;
                var blogId = jQuery(document.documentElement).attr("data-kenta-blog-id");
                var active = jQuery(document.documentElement).attr("data-kenta-theme");
                var isPersistent = jQuery(document.documentElement).attr("data-save-color-scheme") === "yes";
                var mode = js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].get(blogId + "-color-mode");
                if (isPersistent && mode !== active) {
                    jQuery(document.documentElement).attr("data-kenta-theme", mode);
                }
                $(".kenta-theme-switch").each((function() {
                    var $this = $(this);
                    if ($this.hasClass("kenta-theme-switch-initialized")) {
                        return;
                    }
                    $this.addClass("kenta-theme-switch-initialized");
                    $this.on("click", $switch.toggle.bind($switch));
                }));
            }
            _createClass(ThemeSwitch, [ {
                key: "toggle",
                value: function toggle() {
                    var blogId = jQuery(document.documentElement).attr("data-kenta-blog-id");
                    var current = jQuery(document.documentElement).attr("data-kenta-theme");
                    if (current === "dark") {
                        this.setLightMode(blogId);
                    } else {
                        this.setDarkMode(blogId);
                    }
                    if (wp.customize) {
                        wp.customize.preview.send("kenta-theme-changed", current === "dark" ? "light" : "dark");
                    }
                    new _particles__WEBPACK_IMPORTED_MODULE_1__["default"](jQuery);
                }
            }, {
                key: "setLightMode",
                value: function setLightMode(blogId) {
                    this.setGlobalTransition();
                    jQuery(document.documentElement).attr("data-kenta-theme", "light");
                    if (jQuery(document.documentElement).attr("data-save-color-scheme") === "yes") {
                        js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(blogId + "-color-mode", "light", {
                            expires: 365
                        });
                    }
                }
            }, {
                key: "setDarkMode",
                value: function setDarkMode(blogId) {
                    this.setGlobalTransition();
                    jQuery(document.documentElement).attr("data-kenta-theme", "dark");
                    if (jQuery(document.documentElement).attr("data-save-color-scheme") === "yes") {
                        js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set(blogId + "-color-mode", "dark", {
                            expires: 365
                        });
                    }
                }
            }, {
                key: "setGlobalTransition",
                value: function setGlobalTransition() {
                    document.body.classList.add("transition-force-none");
                    setTimeout((function() {
                        document.body.classList.remove("transition-force-none");
                    }), 50);
                }
            } ]);
            return ThemeSwitch;
        }();
        const __WEBPACK_DEFAULT_EXPORT__ = ThemeSwitch;
    }, (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => api
        });
        /*! js-cookie v3.0.5 | MIT */        function assign(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    target[key] = source[key];
                }
            }
            return target;
        }
        var defaultConverter = {
            read: function(value) {
                if (value[0] === '"') {
                    value = value.slice(1, -1);
                }
                return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
            },
            write: function(value) {
                return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
            }
        };
        function init(converter, defaultAttributes) {
            function set(name, value, attributes) {
                if (typeof document === "undefined") {
                    return;
                }
                attributes = assign({}, defaultAttributes, attributes);
                if (typeof attributes.expires === "number") {
                    attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
                }
                if (attributes.expires) {
                    attributes.expires = attributes.expires.toUTCString();
                }
                name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                var stringifiedAttributes = "";
                for (var attributeName in attributes) {
                    if (!attributes[attributeName]) {
                        continue;
                    }
                    stringifiedAttributes += "; " + attributeName;
                    if (attributes[attributeName] === true) {
                        continue;
                    }
                    stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
                }
                return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
            }
            function get(name) {
                if (typeof document === "undefined" || arguments.length && !name) {
                    return;
                }
                var cookies = document.cookie ? document.cookie.split("; ") : [];
                var jar = {};
                for (var i = 0; i < cookies.length; i++) {
                    var parts = cookies[i].split("=");
                    var value = parts.slice(1).join("=");
                    try {
                        var found = decodeURIComponent(parts[0]);
                        jar[found] = converter.read(value, found);
                        if (name === found) {
                            break;
                        }
                    } catch (e) {}
                }
                return name ? jar[name] : jar;
            }
            return Object.create({
                set,
                get,
                remove: function(name, attributes) {
                    set(name, "", assign({}, attributes, {
                        expires: -1
                    }));
                },
                withAttributes: function(attributes) {
                    return init(this.converter, assign({}, this.attributes, attributes));
                },
                withConverter: function(converter) {
                    return init(assign({}, this.converter, converter), this.attributes);
                }
            }, {
                attributes: {
                    value: Object.freeze(defaultAttributes)
                },
                converter: {
                    value: Object.freeze(converter)
                }
            });
        }
        var api = init(defaultConverter, {
            path: "/"
        });
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        var Particles = function() {
            function Particles($) {
                var _this = this;
                _classCallCheck(this, Particles);
                if (!window.particlesJS) {
                    return;
                }
                $(".kenta-particles-canvas").each((function(i, el) {
                    var $canvas = $(el);
                    var config = JSON.parse($canvas.attr("data-kenta-particles"));
                    particlesJS($canvas.attr("id"), _this.overrideConfig($canvas, config));
                }));
            }
            _createClass(Particles, [ {
                key: "overrideConfig",
                value: function overrideConfig($canvas, config) {
                    var detect_on = $canvas.data("kenta-particle-detect-on");
                    var quantity = Number($canvas.data("kenta-particle-quantity"));
                    var speed = Number($canvas.data("kenta-particle-speed"));
                    var size = Number($canvas.data("kenta-particle-size"));
                    var shape = $canvas.data("kenta-particle-shape");
                    var particle_color = this.getColorValue($canvas.data("kenta-particle-color"));
                    var line_color = this.getColorValue($canvas.data("kenta-particle-line-color") || particle_color);
                    if ("default" !== detect_on && "" !== detect_on && undefined !== detect_on) {
                        config.interactivity.detect_on = detect_on;
                    }
                    if ("" !== size && undefined !== size && size > 0) {
                        config.particles.size.value = size;
                    }
                    if ("" !== quantity && undefined !== quantity && quantity > 0) {
                        config.particles.number.value = quantity;
                    }
                    if ("" !== particle_color && undefined !== particle_color) {
                        config.particles.color.value = particle_color;
                    }
                    if ("" !== line_color && undefined !== line_color) {
                        if (config.particles.line_linked) {
                            config.particles.line_linked.color = line_color;
                        } else {
                            if (config.particles.links) {
                                config.particles.links.color = line_color;
                            } else {
                                config.particles.links = {
                                    color: line_color
                                };
                            }
                        }
                    }
                    if ("default" !== shape && "" !== shape && undefined !== shape) {
                        config.particles.shape.type = shape;
                    }
                    if ("" !== speed && undefined !== speed && speed > 0) {
                        config.particles.move.speed = speed;
                    }
                    config.background = {};
                    config.fullScreen = {
                        enable: false
                    };
                    return config;
                }
            }, {
                key: "getColorValue",
                value: function getColorValue(color) {
                    if (!color || color === "" || color === "__INITIAL_VALUE__") {
                        return "";
                    }
                    if (color.indexOf("var") > -1) {
                        var value = getComputedStyle(document.documentElement).getPropertyValue(color.replace(/var\(/, "").replace(/\)/, "")).trim().replace(/\s/g, "");
                        if (value.indexOf("#") === -1 && value.indexOf("rgb") === -1) {
                            return "rgb(".concat(value, ")");
                        }
                        return value;
                    }
                    return color;
                }
            } ]);
            return Particles;
        }();
        const __WEBPACK_DEFAULT_EXPORT__ = Particles;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        var Sticky = _createClass((function Sticky($) {
            _classCallCheck(this, Sticky);
            if (!window.hcSticky) {
                return;
            }
            $(".kenta-sticky").each((function(i, el) {
                var $header = $(el).parent(".kenta-site-header");
                var isTransparentHeader = $header.hasClass("kenta-transparent-header");
                var isAdminBarShowing = $header.hasClass("kenta-header-with-admin-bar");
                var args = {
                    stickTo: ".kenta-site-wrap",
                    stickyClass: "kenta-is-sticky",
                    onStart: function onStart() {
                        if (isTransparentHeader) {
                            $header.removeClass("kenta-transparent-header");
                        }
                    },
                    onStop: function onStop() {
                        if (isTransparentHeader) {
                            $header.addClass("kenta-transparent-header");
                        }
                    }
                };
                $(el).hcSticky(isAdminBarShowing ? Object.assign(args, {
                    top: 32,
                    responsive: {
                        782: {
                            top: 46
                        }
                    }
                }) : args);
            }));
        }));
        const __WEBPACK_DEFAULT_EXPORT__ = Sticky;
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
    }, (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
    } ];
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (() => {
        var deferred = [];
        __webpack_require__.O = (result, chunkIds, fn, priority) => {
            if (chunkIds) {
                priority = priority || 0;
                for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                deferred[i] = [ chunkIds, fn, priority ];
                return;
            }
            var notFulfilled = Infinity;
            for (var i = 0; i < deferred.length; i++) {
                var [chunkIds, fn, priority] = deferred[i];
                var fulfilled = true;
                for (var j = 0; j < chunkIds.length; j++) {
                    if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key => __webpack_require__.O[key](chunkIds[j])))) {
                        chunkIds.splice(j--, 1);
                    } else {
                        fulfilled = false;
                        if (priority < notFulfilled) notFulfilled = priority;
                    }
                }
                if (fulfilled) {
                    deferred.splice(i--, 1);
                    var r = fn();
                    if (r !== undefined) result = r;
                }
            }
            return result;
        };
    })();
    (() => {
        __webpack_require__.n = module => {
            var getter = module && module.__esModule ? () => module["default"] : () => module;
            __webpack_require__.d(getter, {
                a: getter
            });
            return getter;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) {
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    Object.defineProperty(exports, key, {
                        enumerable: true,
                        get: definition[key]
                    });
                }
            }
        };
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
            }
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        var installedChunks = {
            1: 0,
            6: 0,
            7: 0,
            5: 0,
            9: 0,
            8: 0
        };
        __webpack_require__.O.j = chunkId => installedChunks[chunkId] === 0;
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId, i = 0;
            if (chunkIds.some((id => installedChunks[id] !== 0))) {
                for (moduleId in moreModules) {
                    if (__webpack_require__.o(moreModules, moduleId)) {
                        __webpack_require__.m[moduleId] = moreModules[moduleId];
                    }
                }
                if (runtime) var result = runtime(__webpack_require__);
            }
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            for (;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    installedChunks[chunkId][0]();
                }
                installedChunks[chunkId] = 0;
            }
            return __webpack_require__.O(result);
        };
        var chunkLoadingGlobal = self["webpackChunkkenta"] = self["webpackChunkkenta"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    })();
    __webpack_require__.O(undefined, [ 6, 7, 5, 9, 8 ], (() => __webpack_require__(0)));
    __webpack_require__.O(undefined, [ 6, 7, 5, 9, 8 ], (() => __webpack_require__(15)));
    __webpack_require__.O(undefined, [ 6, 7, 5, 9, 8 ], (() => __webpack_require__(16)));
    __webpack_require__.O(undefined, [ 6, 7, 5, 9, 8 ], (() => __webpack_require__(17)));
    __webpack_require__.O(undefined, [ 6, 7, 5, 9, 8 ], (() => __webpack_require__(18)));
    var __webpack_exports__ = __webpack_require__.O(undefined, [ 6, 7, 5, 9, 8 ], (() => __webpack_require__(19)));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})();