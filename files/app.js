czcz();
function czcz(){
$('.back2top').click(function(){$('html,body').animate({scrollTop: '0px'}, 1000);});
    $(window).scroll(function(){
        $(window).scrollTop()>10?$('.back2top').css('display','block'):$('.back2top').css('display','none');
    });
function slzanpd_check(id) {
	return new RegExp('slzanpd_' + id + '=true').test(document.cookie);
}

function slzanpd_(a) {
	a.css('current');
}


function btn_click(btn, on, off) {
	flag = true;
	$(btn).click(function() {
		$(btn).prop('class', (flag = !flag) ? on : off);
	});
}

!
function() {
	$('[data-slzanpd]').each(function() {
		var a = $(this),
			id = a.data('slzanpd');
		if (slzanpd_check(id)) {
			$(this).addClass('current');
		}
	});
}();
	// 搜索按钮
	var menu = $(".search_main");
	$(".top-login").click(function(){
		menu.toggleClass("menu_pop");
	});
function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
	}
}

function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "none"){
		obj.style.display = "block";
		e.className="minus";
	}else{
		obj.style.display = "none";
		e.className="plus";
	}
}

};
App = {
  mouseEvent:function() { 
  //shortcode
	$(".cr-tabs").tabs();
	
	$(".cr-toggle").each( function () {
		var $this = $(this);
		if( $this.attr('data-id') == 'closed' ) {
			$this.accordion({ header: '.cr-toggle-title', collapsible: true, active: false  });
		} else {
			$this.accordion({ header: '.cr-toggle-title', collapsible: true});
		}

		$this.on('accordionactivate', function( e, ui ) {
			$this.accordion('refresh');
		});

		$(window).on('resize', function() {
			$this.accordion('refresh');
		});
	});
  
	 //footer-tips 
	$(".footer-tips i").click(function(){
    $(".footer-tips").fadeToggle("fast");
	});
   
	//share    
	 $('.post-share a').click(function (event) {   
		 event.stopPropagation();   
		 $('.share-icons').fadeToggle("fast");  
		 return false;
	 });  
	$(document).click(function(event){
		var _con = $('.share-icons'); 
		if(!_con.is(event.target) && _con.has(event.target).length === 0){
		$('.share-icons').fadeOut('fast'); 
			 }
	});
	
	//donate
	$(".donate_icon img , i.iconfont.donate_close").click(function(){
		$(".donate_box").fadeToggle("fast");
		$(".donate_hide_box").fadeToggle("fast");
	});
	
	//Ajax-JSON实时获取评论头像
$("input#email").blur(function(){
		 	var _email = $(this).val();
			if (_email != '') {
	    	$.getJSON('/content/templates/Kiss/ajaxurl.php?email='+_email, function(avatar){// 修改为你的Ajax路径
	    		if(avatar.pic){
					$('.ajaxurl').attr('src', avatar.pic);// 修改为你自己的头像标签
	    		}
	    	});//end
			}
			return false;
		});
	//灯箱
	baguetteBox.run('.entry-content', {
        captions: function(element) {
            // `this` == Array of current gallery items
            return element.getElementsByTagName('img')[0].alt;
        }
    });	
	
  //结束
  },
  
  //back to top
gotop:function() { 
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 100,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	
		//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
  },
	
//preloading
preloading:function() { 	
$({property: 0}).animate({property: 100}, {
                duration: 1000,
                step: function() {
                    var percentage = Math.round(this.property);
                    $('#progress').css('width',  percentage+"%");
                     if(percentage == 100) {
                            $("#progress").addClass("done");//完成，隐藏进度条
                        }
                }
});
},



// 评论分页
commentsPaging:function() {
 $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    $(document).on('click', '#comments-navi a',
    function(e) {
        e.preventDefault();
        $.ajax({
            type: "GET",
            url: $(this).attr('href'),
            beforeSend: function() {
                $('#comments-navi').remove();
                $('ul.commentwrap').remove();
                $('#loading-comments').slideDown()
            },
            dataType: "html",
            success: function(out) {
                result = $(out).find('ul.commentwrap');
                nextlink = $(out).find('#comments-navi');
                $('#loading-comments').slideUp(550);
                $('#loading-comments').after(result.fadeIn(800));
                $('ul.commentwrap').after(nextlink)
            }
        })
    });
},
}
	

	
	
//ajax comments
function ajaxComt(){
    var commentform = '#commentform1', // ××× form表单id
    comment = 'comment', // ××× textarea 的id 不带#
    commentlist = 'commentwrap',  // ××× 评论列表ul或ol的class，不带点
    respond = '#respond',  // ××× 评论插入位置，插入在这个id之前
    //homeUrl = document.location.href.match(/http:\/\/([^\/]+)\//i)[0], // 主页地址，用于下面的提交函数
    txt1 = '<div id="loading" class="text-info"><span class="comload"></span></div>',
    txt2 = '<div id="error">#</div>',
    txt3 = '"><div class="text-success"> <span class="sub-yes"></span>',
    edt1 = ' 刷新页面之前您可以<a rel="nofollow" class="comment-reply-link" href="#edit" onclick=\'return addComment.moveForm("',
    edt2 = ')\'>再次编辑评论</a></div>',
    cancel_edit = '取消编辑',
    edit,
    num = 1,
    $comments = $('#response'), // 评论数
    $cancel = $('#cancel-comment-reply-link'),
    cancel_text = $cancel.text(),
    $submit = $('#commentform #submit');
    $submit.attr('disabled', false),
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
    comm_array = [];
    comm_array.push('');
    $('#'+comment).after(txt1 + txt2); // ××× textarea的id或class
    $('#loading').hide();
    $('#error').hide();
    // 评论提交
$('#commentform1').submit(  //原版为动态绑定，即 $(document).on("submit", commentform,
    function() {
        if (edit) $('#'+comment).after('<input type="text" name="edit_id" id="edit_id" value="' + edit + '" style="display:none;" />');
        $submit.attr('disabled', true).fadeTo('slow', 0.5);
        $('#loading').slideDown();
        $.ajax({
            url: Theme.ajaxurl,
            data: $(this).serialize() + "?action=addcom",
            type: $(this).attr('method'),
            error: function(request) {
                $('#loading').slideUp();
                $("#error").slideDown().html('<span class="sub-no"></span>' +request.responseText);
                setTimeout(function() {
                    $submit.attr('disabled', false).fadeTo('slow', 1);
                    $('#error').slideUp();
                },
                3000);
            },
            success: function(data) {
                $('#loading').hide();
                comm_array.push($('#'+comment).val());
                $('textarea').each(function() {
                    this.value = ''
                });
                var t = addComment,
                cancel = t.I('cancel-comment-reply-link'),
                temp = t.I('wp-temp-form-div'),
                respond = t.I(t.respondId),
                post = t.I('comment_post_ID').value,
                parent = t.I('comment_parent').value;
                // 增加评论数
                if (!edit && $comments.length) { 
                    n = parseInt($comments.text().match(/\d+/)); // 匹配数字
                    $comments.text($comments.text().replace(n, n + 1));
                }
                // 评论显示
                new_htm = '" id="new_comm_' + num + '"></';
                new_htm = (parent == '0') ? ('\n<ol class="'+commentlist+'" ' +  new_htm + 'ol>') : ('\n<ul class="children' + new_htm + 'ul>');
                ok_htm = '\n<div class="ajax-notice" id="success_' + num + txt3;
                div_ = (document.body.innerHTML.indexOf('div-comment-') == -1) ? '': ((document.body.innerHTML.indexOf('li-comment-') == -1) ? 'div-': '');
                ok_htm = ok_htm.concat(edt1, div_, 'comment-', parent, '", "', parent, '", "respond", "', post, '", ', num, edt2);
                ok_htm += '</span><span></span>\n';
                ok_htm += '</div>\n';
                if($('.commentwrap')[0]){ // ××××××××××××××××××××非嵌套评论时，新评论显示插入的位置（按自己的喜好修改显示位置）
                    $('.commentlist').append('<ul class="commentwrap"></ul>');
                    $('.commentwrap').prepend(new_htm);
                } else {
                    $('#respond').after(new_htm);
                }
                $('#new_comm_' + num).append(data);
                $('#new_comm_' + num + ' li').append(ok_htm);
                $body.animate({scrollTop: $('#new_comm_' + num).offset().top - 200},900);
                countdown();
                num++;
                edit = '';
                $('*').remove('#edit_id');
                cancel.style.display = 'none';
                cancel.onclick = null;
                t.I('comment_parent').value = '0';
                if (temp && respond) {
                    temp.parentNode.insertBefore(respond, temp);
                    temp.parentNode.removeChild(temp)
                }
            }
        });
        return false;
    });
    addComment = {
        moveForm: function(commId, parentId, respondId, postId, num) {
            var t = this,
            div,
            comm = t.I(commId),
            respond = t.I(respondId),
            cancel = t.I('cancel-comment-reply-link'),
            parent = t.I('comment_parent'),
            post = t.I('comment_post_ID');
            if (edit) exit_prev_edit();
            num ? (t.I(comment).value = comm_array[num], edit = t.I('new_comm_' + num).innerHTML.match(/(comment-)(\d+)/)[2], $new_sucs = $('#success_' + num), $new_sucs.hide(), $new_comm = $('#new_comm_' + num), $new_comm.hide(), $cancel.text(cancel_edit)) : $cancel.text(cancel_text);
            t.respondId = respondId;
            postId = postId || false;
            if (!t.I('wp-temp-form-div')) {
                div = document.createElement('div');
                div.id = 'wp-temp-form-div';
                div.style.display = 'none';
                respond.parentNode.insertBefore(div, respond)
            } ! comm ? (temp = t.I('wp-temp-form-div'), t.I('comment_parent').value = '0', temp.parentNode.insertBefore(respond, temp), temp.parentNode.removeChild(temp)) : comm.parentNode.insertBefore(respond, comm.nextSibling);
            $body.animate({scrollTop: $('#respond').offset().top - 180},400);
            if (post && postId) post.value = postId;
            parent.value = parentId;
            cancel.style.display = '';
            cancel.onclick = function() {
                if (edit) exit_prev_edit();
                var t = addComment,
                temp = t.I('wp-temp-form-div'),
                respond = t.I(t.respondId);
                t.I('comment_parent').value = '0';
                if (temp && respond) {
                    temp.parentNode.insertBefore(respond, temp);
                    temp.parentNode.removeChild(temp);
                }
                this.style.display = 'none';
                this.onclick = null;
                return false;
            };
            try {
                t.I(comment).focus();
            }
             catch(e) {}
            return false;
        },
        I: function(e) {
            return document.getElementById(e);
        }
    };
    function exit_prev_edit() {
        $new_comm.show();
        $new_sucs.show();
        $('textarea').each(function() {
            this.value = ''
        });
        edit = '';
    }
    var wait = 15,
    submit_val = $submit.val();
    function countdown() {
        if (wait > 0) {
            $submit.val(wait);
            wait--;
            setTimeout(countdown, 1000);
        } else {
            $submit.val(submit_val).attr('disabled', false).fadeTo('slow', 1);
            wait = 15;
        }
    }
} 

 //////////// share /////////////
jQuery(document).on("click", ".share-icons span",
function() {
var e = jQuery(this),
t = e.data("type"),
r = e.parent(),
a = r.data("title"),
n = r.data("url"),
o = r.data("thumb"),
c = ["toolbar=0,status=0,resizable=1,width=640,height=560,left=", (screen.width - 640) / 2, ",top=", (screen.height - 560) / 2].join(""),
i;
switch (t) {
case "weibo":
i = "http://service.weibo.com/share/share.php?title=" + a + "&appkey=4221439169&url=" + n;
window.open(i, "分享", c);
break;
case "qzone":
i = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title=" + a + "&url=" + n;
window.open(i, "分享", c);
break;
case "qq":
i = "http://connect.qq.com/widget/shareqq/index.html?title=" + a + "&url=" + n;
window.open(i, "分享", c);
break;
case "tieba":
i = "http://tieba.baidu.com/f/commit/share/openShareApi?title=" + a + "&url=" + n;
window.open(i, "分享", c);
break;
case "wechat":
i = "http://qr.liantu.com/api.php?text=" + n;
window.open(i, "分享", c);
break;
case "twitter":
i = "http://twitter.com/share?text=" + a + "&url=" + n;
window.open(i, "分享", c);
break;
case "facebook":
i = "http://www.facebook.com/sharer.php?text=" + a + "&url=" + n;
window.open(i, "分享", c);
break
}
return false
});

 ////////////header and footer/////////////
  $(".top-tips a").click(function(){
    $(".tips-box").fadeToggle("fast");
  });
 

	
//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });	
  
////////////////postlike///////////////
$.fn.postLike = function() {
 if ($(this).hasClass('done')) {
 return false;
 } else {
 $(this).addClass('done');
 var id = $(this).data("id"),
 action = $(this).data('action'),
 rateHolder = $(this).children('.count');
 var ajax_data = {
 action: "bigfa_like",
 um_id: id,
 um_action: action
 };
 $.post("/wp-admin/admin-ajax.php", ajax_data,
 function(data) {
 $(rateHolder).html(data);
 });
 return false;
 }
};
$(document).on("click", ".favorite",
function() {
 $(this).postLike();
});


App.gotop();
App.mouseEvent();
ajaxComt(); 
App.commentsPaging();
App.preloading();

 //pjax
if(Theme.pjax){
$(document).pjax('a[target!=_top]', '#pjax-container', { // .page 需要刷新的 DIV 部分的类名
    fragment: '#pjax-container',
    timeout: 8000,
}).on('pjax:send', function() {
        $('body').addClass('loding');
}).on('pjax:complete', function() {
    // 此处放置Pjax加载完毕后重载的函数，比如ajax评论函数
    $('body').removeClass('loding');
	Prism.highlightAll();
    ajaxComt();
	plpl();
	czcz();
    App.mouseEvent();
	Dajiba.LIKE();
	Dajiba.mlike();
    //App.commentsPaging(); 
    App.preloading();
    window.addEventListener('popstate',function(e) {
    // 此处放置浏览器点击后退键需要执行的函数
    App.mouseEvent();		
    }, false);
}).on('submit', '.ma-search', function (e) {  // .ma-search 搜索from标签的类名, 多个逗号隔开
    e.preventDefault(); // 去除搜索框默认事件
    $.pjax.submit(e, '#pjax-container', { // .page 需要刷新的 DIV 部分的类名
        fragment:'#pjax-container', 
        timeout:8000,
    });

});
}

//导航
	$(document).on('click', 'a.header-btn,a.header-off,#mo-nav ul li a', function() {
		if ($('body').is('.header-show')) {
			$('body').removeClass('header-show');
			} else {
				$('body').addClass('header-show');
			}
	});
	
/*-----------Dajiba-----------*/
Dajiba = {
	LIKE: function () {
		//Ajax-like
		$.fn.postLike = function () {
			if ($(this).hasClass('done')) {
				tips_update('点多了伤身体~');
				return false;
			} else {
				$(this).addClass('done');
				//$('.like i.icon').removeClass('Q-heart-l');
				//$('.like i.icon').addClass('Q-heart');
				var id = $(this).data("gid"),
					action = $(this).data('action'),
					rateHolder = $(this).children('.count');
				var ajax_data = {
					action: action,
					id: id,
				};
				$.post(B.BLOG_URL, ajax_data,
					function (data) {
						$(rateHolder).html(data);
					});
				return false;
			}
		};
		$(".like").click(function () {
			$(this).postLike();
		});
	},	
	mlike: function () {
		//Do you like me?
		$(".auth_zan").click(function() {
				$.post(B.BLOG_URL, {action: 'ajax_mlike_add'},
					function (data) {
						data.success ? ($(".auth_zan p").html(data.like)) : '';
					}, 'json');
		});
	},	
};
/*-----------Dajiba-end----------*/
$(function() {
	Dajiba.LIKE();
	Dajiba.mlike();
});
function getObject(objectId){
	if(document.getElementById && document.getElementById(objectId)){
		return document.getElementById(objectId);
	}else if(document.all && document.all(objectId)){
		return document.all(objectId);
	}else if(document.layers && document.layers[objectId]){
		return document.layers[objectId];
	}else{
		return false;
	}
}

function showHide(e,objname){
	var obj = getObject(objname);
	if(obj.style.display == "none"){
		obj.style.display = "block";
		e.className="minus";
	}else{
		obj.style.display = "none";
		e.className="plus";
	}
}

$('.m-header .switch').on('click', function() {
    var mobile = $('#overlay.mobile');
    mobile.fadeIn(200);
    var item = $('.mobile .menu-item');
    mobile.click(function(e) {
        if(e.target.id == 'overlay') {
            mobile.fadeOut(200);
        }
    });
    item.click(function() {
        mobile.fadeOut(200);
    });
});