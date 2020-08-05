


// 메인 유저 이미지 클릭시 
function mainUserClickMoreBtnCss()
{
    $(".userMoreBox").addClass("show");
}

function mainUserClickMoreBtnCss_remove()
{
    $(".userMoreBox").removeClass("show");
}

// 메인 더보기 클릭시
function mainMoreBtnCss()
{
    $(".moreBtn_list").addClass("show");
}

function mainMoreBtnCss_remove()
{
    $(".moreBtn_list").removeClass("show");
}

function userWeight()
{
    $(function() {
        $('.chart').easyPieChart({
          // The color of the curcular bar. You can pass either a css valid color string like rgb, rgba hex or string colors. But you can also pass a function that accepts the current percentage as a value to return a dynamically generated color.
          barColor: '#fff',
          // The color of the track for the bar, false to disable rendering.
          trackColor: '#444',
          // The color of the scale lines, false to disable rendering.
          scaleColor: '#dfe0e0',
          // Defines how the ending of the bar line looks like. Possible values are: butt, round and square.
          lineCap: 'round',
          // Width of the bar line in px.
          lineWidth: 5,
          // Size of the pie chart in px. It will always be a square.
          size: 160,
          // Time in milliseconds for a eased animation of the bar growing, or false to deactivate.
          animate: 2000,
          // Callback function that is called at the start of any animation (only if animate is not false).
          onStart: $.noop,
          // Callback function that is called at the end of any animation (only if animate is not false).
          onStop: $.noop
        });
        $('.updatePieCharts').on('click', function(e) {
          e.preventDefault();
          var newValue = Math.floor(100 * Math.random());
          $('.chart').data('easyPieChart').update(newValue);
          $('span', $('.chart')).text(newValue);
        });
      });
}