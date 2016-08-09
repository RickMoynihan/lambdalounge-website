/*
 * Fix console.log with a null-operation if it's undefined.  So
 * Internet Explorer, doesn't blow up when it's called.
 */

var console=console||{"log":function(){},
                      "dir":function(){}};
//initialize all forms (there's only ever one on jam sites)
$(function() {
    var getParameterByName = function(url, name) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      var regexS = "[\\?&]" + name + "=([^&#]*)";
      var regex = new RegExp(regexS);
      var results = regex.exec(url);
      if(results == null) {
        return null;
      } else {
	return decodeURIComponent(results[1].replace(/\+/g, " "));
      }
    };


    $('form').jamcta();
    $('section[data-behaviour]').armstrong();
    $('.video_preview').jamvimeopreview();

    // When you're on the marketing site copy any voucher_code into the
    var code = getParameterByName(window.location, 'voucher_code');
    if(code) {
      $('.get_jam iframe').attr('src', function(_idx, url) {
        return url + '?voucher_code=' + code;
      });
    };

});
(function() {
  var Armstrong;
  var __bind = function(func, context) {
    return function(){ return func.apply(context, arguments); };
  };
  /*

  ARMSTRONG - a jQueryUI widget that makes collections of things stretchy and tabby

  "I fully expected that, by the end of the century,
  we would have achieved substantially more than we actually did."
  - Neil Armstrong

  gjh for Stardotstar ©2012

  */
  Armstrong = {
    version: "1.1.15",
    /*
    	Default configuration
    	*/
    options: {
      activeClass: 'active',
      carouselClass: 'armstrong_carousel',
      carouselStageClass: 'armstrong_carousel_stage',
      carouselButtonClassL: 'armstrong_carousel_left',
      carouselButtonClassR: 'armstrong_carousel_right',
      carouselButtonTextLeft: '&larr;',
      carouselButtonTextRight: '&rarr;',
      carouselButtonsUseName: false,
      carouselPaneHeightFixed: 400,
      carouselPaneHeightStrategy: 0,
      carouselTitleClass: 'armstrong_carousel_title',
      defaultSelectedIndex: 0,
      overflowMenuClass: "armstrong_overflow_menu",
      overflowTabClass: "armstrong_overflow_tab",
      tabMenuAddedHeight: 20,
      tabClass: "armstrong_tab",
      tabMenuClass: "armstrong_tab_menu",
      tabMenuOverflowLabel: "&hellip;"
    },
    /*
    	Public API
    	*/
    getVersion: function() {
      return this.version;
    },
    setSelection: function(which_id) {
      this._showSelectedContent(which_id);
      if (this._carousel()) {
        this._refreshCarouselTitleText(which_id);
        return this.options.carouselButtonsUseName ? this._refreshCarouselButtonText(which_id) : null;
      } else {
        return this._showSelectedTab(which_id);
      }
    },
    destroy: function() {
      if (this._carousel()) {
        this._removeCarouselClassFromWrapper();
        this._removeCarouselButtons();
        this._resetCarouselHeight();
        this._reshowAllPanes();
      } else {
        this._tabMenuRemove();
        this._resetMinSizeForTabMenu();
        this._reshowAllPanes();
      }
      return $.Widget.prototype.destroy.call(this);
    },
    /*
    	Private jQuery ui widget interface
    	*/
    _init: function() {
      if (this._carousel()) {
        this._findPanes();
        this._createCarouselWrapper();
        this._setHeightForCarousel();
        this._createCarouselButtons();
        this._carouselButtonsEnable();
        return this._selectDefault();
      } else {
        this._findPanes();
        this._tabMenuCreate();
        this._setMinSizeForTabMenu();
        this._applyTabVisibility();
        this._tabMenuEnable();
        return this._selectDefault();
      }
    },
    /*
    	Private implementation - selector getters
    	*/
    _selectorForFirstChunk: function() {
      return "" + (this._selectorForChunk()) + ":first";
    },
    _selectorForChunk: function() {
      return ".chunk";
    },
    _selectorForOverflowMenu: function() {
      return "." + (this.options.overflowMenuClass);
    },
    _selectorForOverflowMenuContents: function() {
      return "" + (this._selectorForOverflowMenu()) + " ul";
    },
    _selectorForOverFlowTab: function() {
      return "." + (this.options.overflowTabClass);
    },
    _selectorForTabMenu: function() {
      return "." + (this.options.tabMenuClass);
    },
    _selectorForTabMenuLink: function() {
      return "" + (this._selectorForTabMenu()) + " a";
    },
    _selectorForTab: function() {
      return "." + (this.options.tabClass);
    },
    _selectorForWrapper: function() {
      return ".container";
    },
    _selectorForCarousel: function() {
      return "." + (this.options.carouselClass);
    },
    _selectorForCarouselStage: function() {
      return "." + (this.options.carouselStageClass);
    },
    /*
    	Private implementation - element getters
    	*/
    _elementForWrapper: function() {
      return this.element.find(this._selectorForWrapper());
    },
    _elementForStage: function() {
      return this.element.find(this._selectorForCarouselStage());
    },
    /*
    	Private implementation
    	*/
    _createCarouselWrapper: function() {
      this._elementForWrapper().addClass(this.options.carouselClass);
      return this._elementForWrapper().wrapInner("<div class=\"" + (this.options.carouselStageClass) + "\" />");
    },
    _applyTabVisibility: function() {
      var available_width;
      available_width = this._getWidthAvailableForTabs();
      if (available_width !== this.previousWidth) {
        this._fitTabsTo(available_width);
        return (this.previousWidth = available_width);
      }
    },
    _carousel: function() {
      return this.element.data("behaviour") === "carousel";
    },
    _carouselButtonsEnable: function() {
      this.element.find("." + (this.options.carouselButtonClassL)).click(__bind(function(event) {
        event.preventDefault();
        return this._selectPrevious();
      }, this));
      return this.element.find("." + (this.options.carouselButtonClassR)).click(__bind(function(event) {
        event.preventDefault();
        return this._selectNext();
      }, this));
    },
    _carouselButtonBarHTML: function(htmlclass) {
      return "<div class='armstrong_carousel_buttons container " + (htmlclass) + "'>\n	<div class=\"armstrong_l\"><a href='' class='" + (this.options.carouselButtonClassL) + "'><div>" + (this.options.carouselButtonTextLeft) + "<span></span></div></a></div>\n	<div class=\"armstrong_c\"><h3 class=" + (this.options.carouselTitleClass) + ">1/123</h3></div>\n	<div class=\"armstrong_r\"><a href='' class='" + (this.options.carouselButtonClassR) + "'><div><span></span>" + (this.options.carouselButtonTextRight) + "</div></a></div>\n</div>";
    },
    _createCarouselButtons: function() {
      return this._elementForWrapper().append(this._carouselButtonBarHTML('before'));
    },
    _enableWatchResize: function() {
      return $(window).resize(__bind(function() {
        return this._applyTabVisibility();
      }, this));
    },
    _findPanes: function() {
      return (this.panes = this._getAllPanes());
    },
    _fitTabsTo: function(available_width) {
      var _i, _len, _ref, _result, i, left_relative_to_parent, t, tab, toHide, toHideOverflow;
      toHideOverflow = [];
      toHide = [];
      _ref = this.element.find(this._selectorForTabMenu()).find(this._selectorForTab());
      for (i = 0, _len = _ref.length; i < _len; i++) {
        tab = _ref[i];
        t = $(tab).show();
        left_relative_to_parent = t.position().left - t.parent().position().left;
        if (left_relative_to_parent + t.outerWidth() <= available_width) {
          toHideOverflow.push(t);
          t.show();
        } else {
          toHide.push(t);
        }
      }
      /*
      		actually perform the hides last as a batch
      		*/
      if (toHide.length === 0) {
        return this._getOverflowTab().hide();
      } else {
        this._getOverflowTab().show();
        this._getOverflowTab().find('li').show();
        _ref = toHideOverflow;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tab = _ref[_i];
          this._getOverflowTab().find('#' + tab.data('jam-id') + '_overflow').closest('li').hide();
        }
        _result = []; _ref = toHide;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          tab = _ref[_i];
          _result.push(tab.hide());
        }
        return _result;
      }
    },
    _getAllPanes: function() {
      return this.element.find(this._selectorForChunk());
    },
    _getConstrainedHeightForCarousel: function() {
      /*
      		the height to which the carousel should be constrained.
      		hard to know the best way to determine this, complicated further by the fact that images may not be loaded :-(

      		strategy 0: do not constrain
      		strategy 1: use the height of the second pane (on the basis that that's likely to be more representative than the first)
      		strategy 2: use the height of the middle pane
      		strategy 3: use the constant value passed in as options.carouselPaneHeightFixed
      		strategy 4: use the height of the biggest pane

      		*/
      switch (this.options.carouselPaneHeightStrategy) {
        case 1:
          return $(this.panes[1]).height();
        case 2:
          return $(this.panes[Math.floor(this.panes.length / 2)]).height();
        case 3:
          return this.options.carouselPaneHeightFixed;
        case 4:
          return this._getTallestPaneHeight();
      }
    },
    _getOverflowMenuWidth: function() {
      return this._getOverflowTab().outerWidth();
    },
    _getOverflowTab: function() {
      return this.element.find(this._selectorForOverFlowTab());
    },
    _getTallestPaneHeight: function() {
      var _i, _len, _ref, h, p, thisH;
      h = 0;
      _ref = this.panes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        p = _ref[_i];
        thisH = $(p).height();
        if (thisH > h) {
          h = thisH;
        }
      }
      return h;
    },
    _getWidthAvailableForTabs: function() {
      return this._elementForWrapper().width() - this._getOverflowMenuWidth();
    },
    _refreshCarouselTitleText: function(which_id) {
      var elem, idx;
      elem = this.element.find(which_id);
      idx = this.element.find(".chunk").index(elem) + 1;
      return this.element.find("." + (this.options.carouselTitleClass)).html("" + (idx) + "/" + (this.element.find(".chunk").length));
    },
    _getPreviousTitle: function(previous_id) {
      var previous, previous_title;
      console.log(previous_id);
      previous = this.element.find("#" + (previous_id));
      previous_title = previous.attr('data-tabname') || previous.attr('title');
      if (previous_title === "") {
        previous_title = this.options.carouselButtonTextLeft;
      }
      return previous_title;
    },
    _getNextTitle: function(next_id) {
      var next, next_title;
      next = this.element.find("#" + (next_id));
      next_title = next.attr('data-tabname') || next.attr('title');
      if (next_title === "") {
        next_title = this.options.carouselButtonTextRight;
      }
      return next_title;
    },
    _refreshCarouselButtonText: function(which_id) {
      var l_html, next_id, previous_id, r_html;
      previous_id = this._getPreviousId();
      l_html = ("" + (this._getPreviousTitle(previous_id)));
      this.element.find("." + (this.options.carouselButtonClassL) + " span").html(l_html);
      next_id = this._getPreviousId();
      r_html = ("" + (this._getNextTitle(next_id)));
      return this.element.find("." + (this.options.carouselButtonClassR) + " span").html(r_html);
    },
    _removeCarouselButtons: function() {
      return this.element.find('.armstrong_carousel_buttons').remove();
    },
    _removeCarouselClassFromWrapper: function() {
      return this.element.find(this._selectorForWrapper()).removeClass(this.options.carouselClass);
    },
    _resetCarouselHeight: function() {
      return this._setHeight("inherit");
    },
    _resetMinSizeForTabMenu: function() {
      return this._setMinSize(this.restorePointForMinHeight);
    },
    _reshowAllPanes: function() {
      return this._getAllPanes().show().removeClass(this.options.activeClass);
    },
    _setHeight: function(n) {
      return this._elementForWrapper().css('height', n);
    },
    _setHeightForCarousel: function() {
      return this.options.carouselPaneHeightStrategy !== 0 ? this._setHeight(this._getConstrainedHeightForCarousel()) : null;
    },
    _setMinSize: function(n) {
      return this._elementForWrapper().css('min-height', n);
    },
    _setMinSizeForTabMenu: function() {
      this.restorePointForMinHeight = this._elementForWrapper().css('min-height');
      return this._setMinSize(this._tabMenuGetHeight());
    },
    _selectByIndex: function(idx) {
      return idx < this.panes.length ? this.setSelection("#" + (this.panes[idx].id)) : null;
    },
    _selectDefault: function() {
      return this._selectByIndex(this.options.defaultSelectedIndex);
    },
    _hoverNext: function() {},
    _leaveNext: function() {},
    _hoverPrevious: function() {},
    _leavePrevious: function() {},
    _getNextId: function() {
      var target_id;
      target_id = this.element.find("." + (this.options.activeClass)).next().attr('id');
      if (!(target_id)) {
        target_id = this.element.find(this._selectorForChunk()).first().attr('id');
      }
      return target_id;
    },
    _getPreviousId: function() {
      var target_id;
      target_id = this.element.find("." + (this.options.activeClass)).prev().attr('id');
      if (!(target_id)) {
        target_id = this.element.find(this._selectorForChunk()).last().attr('id');
      }
      return target_id;
    },
    _selectNext: function() {
      var target_id;
      target_id = this._getNextId();
      return this.setSelection("#" + (target_id));
    },
    _selectPrevious: function() {
      var target_id;
      target_id = this._getPreviousId();
      return this.setSelection("#" + (target_id));
    },
    _showSelectedContent: function(which_id) {
      return $(which_id).show().addClass(this.options.activeClass).siblings().not(this._selectorForTabMenu()).hide().removeClass(this.options.activeClass);
    },
    _showSelectedTab: function(which_id) {
      var anchor;
      anchor = $(this._tabMenuItemIDFromContentID(which_id));
      anchor.parent().siblings().children('a').removeClass(this.options.activeClass);
      return anchor.addClass(this.options.activeClass);
    },
    _tabMenuCreate: function() {
      return this.element.find(this._selectorForFirstChunk()).before(this._tabMenuGenerateHTML());
    },
    _tabMenuEnable: function() {
      this.element.find(this._selectorForTabMenuLink()).click(__bind(function(event) {
        event.preventDefault();
        return this.setSelection($(event.currentTarget).attr('href'));
      }, this));
      return this._enableWatchResize();
    },
    _tabMenuGenerateItemHTML: function(elem) {
      var tabname = elem.getAttribute('data-tabname') || elem.title;
      return "<li class='" + (this.options.tabClass) + "' data-jam-id='" + (elem.id) + "'><a href='#" + (elem.id) + "' id='" + (this._tabMenuItemIDFromContentID(elem.id)) + "'>" + (tabname) + "</a></li>";
    },
    _tabMenuGetHeight: function() {
      return this.element.find(this._selectorForTabMenu()).height() + this.element.find(this._selectorForOverflowMenuContents()).height() + this.options.tabMenuAddedHeight;
    },
    _tabMenuItemIDFromContentID: function(content_id) {
      return "" + (content_id) + "_tab";
    },
    _tabMenuOverflowItemIDFromContentID: function(content_id) {
      return "" + (content_id) + "_overflow";
    },
    _tabMenuGenerateAllItemsHTML: function() {
      var _i, _len, _ref, _result, elem, html;
      return (html = (function() {
        _result = []; _ref = this.panes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elem = _ref[_i];
          _result.push(this._tabMenuGenerateItemHTML(elem));
        }
        return _result;
      }).call(this).join('') + this._tabMenuOverflowMenuGenerateHTML());
    },
    _tabMenuGenerateHTML: function() {
      return ("<ul class='" + (this.options.tabMenuClass) + "'>...</ul>").replace(/\.\.\./, this._tabMenuGenerateAllItemsHTML());
    },
    _tabMenuOverflowMenuGenerateHTML: function() {
      return "<li class=\"" + (this.options.overflowTabClass) + "\">\n	<ul class=\"" + (this.options.overflowMenuClass) + "\">\n		<li><a>" + (this.options.tabMenuOverflowLabel) + "</a>\n			<ul>\n				" + (this._tabMenuOverflowMenuGenerateAllItemsHTML()) + "\n			</ul>\n		</li>\n	</ul>\n</li>";
    },
    _tabMenuOverflowMenuGenerateItemHTML: function(elem) {
      var tab_title = elem.getAttribute('data-tabname') || elem.title;
      return "<li><a href='#" + (elem.id) + "' id='" + (this._tabMenuOverflowItemIDFromContentID(elem.id)) + "'>" + (tab_title) + "</a></li>";
    },
    _tabMenuOverflowMenuGenerateAllItemsHTML: function() {
      var _i, _len, _ref, _result, elem;
      return (function() {
        _result = []; _ref = this.panes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          elem = _ref[_i];
          _result.push(this._tabMenuOverflowMenuGenerateItemHTML(elem));
        }
        return _result;
      }).call(this).join("");
    },
    _tabMenuRemove: function() {
      return this.element.find(this._selectorForTabMenu()).remove();
    }
  };
  $.widget("ui.armstrong", Armstrong);
}).call(this);
/*
 * jQuery JamCta v0.1
 *
 * Copyright 2011, Stardotstar Ltd
 * Author: Rob Aldred
 */

(function($) {
  $.jamcta = function(el, options) {
    var form = el;

    form.init = function() {
      form.vars = $.extend({}, $.jamcta.defaults, options);
      form.data('jamcta', true);
    };

    form.bind('submit',function(event) {
      var target = $(this);
      if(target.is('form')) {
        event.preventDefault();
        form.cta_send(form.send_successful,form.send_unsuccessful,form.send_complete);
      }
    });

    form.cta_send = function(done_callback,fail_callback,always_callback) {
      console.log(form);
      form.send_start();
      $.ajax({
        type: form.vars.http_type,
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json',
        success: $.proxy(done_callback,form),
        error: $.proxy(fail_callback,form),
        complete: $.proxy(always_callback,form)
      });
    };

    //sets button text to sending.. and disables
    form.send_start = function() {
      var submit_button = form.find('input[type=submit]');
      submit_button.attr('old_value',submit_button.attr('value'));
      submit_button.attr('value',"Sending...");
      submit_button.attr('disabled','');
    };

    //reenable button and return to old state
    form.send_complete = function() {
      console.log('complete');
      var submit_button = $(this).find('input[type=submit]');
      submit_button.attr('value',submit_button.attr('old_value'));
      submit_button.removeAttr('disabled');
    };

    //ajax was successful, parse json response
    form.send_successful = function(data, textStatus, jqXHR) {
      console.log('success');
      if(typeof data == "object") {
        if(data.status == 200) {
          form.cta_success('Thanks for contacting us; your message will be processed shortly.');
        } else {
          form.cta_error('Ooops there was an error, ' + data.message + ' ['+data.status+']');
        }
      } else {
        form.cta_error('Ooops there was an error, please try again in a moment');
      }
    };

    //actual ajax failed callback
    form.send_unsuccessful = function(jqXHR, textStatus, errorThrown) {
      console.log('failure');
      var data = $.parseJSON(jqXHR.responseText);
      if(data) {
        form.cta_error('Ooops there was an error, ' + data.message + ' ['+data.status+']');
      } else {
        form.cta_error('Ooops there was an error, try again in a moment');
      }
    };

    //displays error above the form
    form.cta_error = function(message) {
      $('#call_to_action_error').remove();
      $(this).before($('<div id="call_to_action_error">'+message+'</div>'));
    };

    //displays success message & hides form
    form.cta_success = function(message) {
      $('#call_to_action_success').remove();
      $(this).before($('<div id="call_to_action_success">'+message+'</div>'));
      $(this).hide();
    };

    form.init();
  };

  //default values, override in the plugin call
  //eg. $('form').jamcta({url:'another url'})
  $.jamcta.defaults = {
    http_type: 'post',
    success: function(){},
    failure: function(){}
  };

  //iterator for jquery selector results
  //inits jamcta on each
  $.fn.jamcta = function(options) {
    return this.each(function() {
      if ($(this).data('jamcta') != true) {
        new $.jamcta($(this), options);
      }
    });
  };
})(jQuery);
/*
 * jQuery JamVimeoPreview v0.1
 *
 * Copyright 2012, Stardotstar Ltd
 * Author: Rob Aldred
 * 
 * Video image preview for Vimeo videos
 */

(function($) {
  $.jamvimeopreview = function(el, options) {
    var init = function() {
      get_image();
    };
    
    var get_image = function() {
      console.log('> get image');
      var video_id = el.data('video-id');
      if(!video_id || el.attr('src') != 'about:blank') return false;
      if(window.jam_video_cache[video_id]) {
        console.log('- got cache');
        set_image(window.jam_video_cache[video_id]);
        return true;
      }
      pull_image(video_id);
      return true;
    };
    var pull_image = function(video_id) {
      console.log('> pull image');
      $.ajax({
        type:'GET',
        url: 'http://vimeo.com/api/v2/video/' + video_id + '.json',
        jsonp: 'callback',
        dataType: 'jsonp',
        success: function(data) {
          var thumbnail = data[0].thumbnail_large;
          window.jam_video_cache[video_id] = thumbnail;
          set_image(thumbnail);
        }
      });
      return true;
    }
    var set_image = function(thumbnail) {
      console.log('> set image');
      console.log(thumbnail);
      el.attr('src',thumbnail);
    };
    
    init();
  }
  $.fn.jamvimeopreview = function(options) {
    return this.each(function() {
      new $.jamvimeopreview($(this), options);
    });
  }
  if(!window.jam_video_cache) {
    window.jam_video_cache = {};
  }
})(jQuery);