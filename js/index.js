$().ready(function() {
 //applies to all elements with title attribute. Change to ".class[title]" to select only elements with specific .class and title
 $("[title]").style_my_tooltips({
  tip_follows_cursor: "on", //on/off
  tip_delay_time: 100 //milliseconds
 });
});
