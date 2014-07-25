//var camcmd_url = "CAMERA_URL";
var camcmd_cmd_url = "https://camcommand.herokuapp.com/commands/new";
var camcmd_new_url = "https://camcommand.herokuapp.com/commands/clear";
var camcmd_asset_path = "https://camcommand.herokuapp.com/";
var camcmd_show = true;

function camcmd_createWindow()
{
	var body = $('body');
	 
	var camcmd_win = $("<div id='camcmd_window' class='camcmd_window'/>");
	camcmd_win.css({'height' : camcmd_win.width()+'px'});
	camcmd_win.append($("<div class='camcmd_bar'/>").append($("<div id='camcmd_options' class='camcmd_options'>?</div>"),$("<div id='#camcmd_close' class='camcmd_close'>X</div>")));
	
	var camcmd_options = $("<div id='camcmd_options_window' class='camcmd_options_window' />");
	camcmd_options.append($("<div>Camera URL</div><div class='camcmd_input_box'><input class='camcmd_input' id='camcmd_url' name='camcmd_url'></input><div>"));
	camcmd_win.append(camcmd_options);
	var grid = [];
	var grid_w = 3;
	var grid_h = 4;
	for(var y = 0; y < grid_h; ++y)
	{
		for(var x = 0; x < grid_w; ++x)
		{
			grid[x+(y*grid_w)] = $("<div class='camcmd_spacer' />");
		}
	}
	 
	//Control defs
	grid[1].append($("<div class='camcmd_vertical_cell' />").html($("<img id='camcmd_big_up' src='" + camcmd_asset_path + "camcmd_big_up.png' />")));
	grid[1].append($("<div class='camcmd_vertical_cell' />").html($("<img id='camcmd_up' src='" + camcmd_asset_path + "camcmd_up.png' />")));
	
	grid[3].append($("<div class='camcmd_horizontal_cell' />").html($("<img id='camcmd_big_left' src='" + camcmd_asset_path + "camcmd_big_left.png'/>")));
	grid[3].append($("<div class='camcmd_horizontal_cell' />").html($("<img id='camcmd_left' src='" + camcmd_asset_path +"camcmd_left.png'></img>")));
	
	grid[5].append($("<div class='camcmd_horizontal_cell' />").html($("<img id='camcmd_right' src='" + camcmd_asset_path +"camcmd_right.png' />")));
	grid[5].append($("<div class='camcmd_horizontal_cell' />").html($("<img id='camcmd_big_right' src='" + camcmd_asset_path + "camcmd_big_right.png' />")));
		
	grid[7].append($("<div class='camcmd_vertical_cell' />").html($("<img id='camcmd_down' src='" + camcmd_asset_path +"camcmd_down.png'></img>")));
	grid[7].append($("<div class='camcmd_vertical_cell' />").html($("<img id='camcmd_big_down' src='" + camcmd_asset_path + "camcmd_big_down.png' />")));
	
	grid[9].append($("<button id='camcmd_tilt_center' type='button'>Center Tilt</button>"));
	grid[11].append($("<button id='camcmd_pan_center' type='button'>Center Pan</button>"));
	 
	 //Attach grid
	var controls = $("<div class='camcmd_controls' />");
	for(var index = 0; index < grid_w * grid_h; ++index)
	{
		controls.append(grid[index]);
	} 
	camcmd_win.append(controls);
	
	body.append(camcmd_win);
}

function camcmd_dispatchCommand(cmd)
{
	$.post(camcmd_cmd_url,{command : cmd});
}

function camcmd_startNewSession(cmd)
{
	$.post(camcmd_new_url, {comfirm : "yes"});
}

function camcmd_showOptions()
{
	$('#camcmd_options_window').slideToggle();
}

function camcmd_hideOptions()
{
	if($('#camcmd_options_window').css('display') != 'none')
	{
		$('#camcmd_options_window').slideToggle();
	}
}

function camcmd_toggleWindow()
{
	$('#camcmd_controls').slideToggle();
}

function camcmd_bindControls()
{
	
	$('#camcmd_up').mousedown(function() {
		camcmd_dispatchCommand("u");
	});
	$('#camcmd_big_up').mousedown(function() {
		camcmd_dispatchCommand("U");
	});
	$('#camcmd_down').mousedown(function(){
		camcmd_dispatchCommand("d");
	});
	$('#camcmd_big_down').mousedown(function() {
		camcmd_dispatchCommand("D");
	});
	$('#camcmd_right').mousedown(function() {
		camcmd_dispatchCommand("r");
	});
	$('#camcmd_big_right').mousedown(function() {
		camcmd_dispatchCommand("R");
	});
	$('#camcmd_left').mousedown(function() {
		camcmd_dispatchCommand("l");
	});
	$('#camcmd_big_left').mousedown(function() {
		camcmd_dispatchCommand("L");
	});

	$('#camcmd_options').mousedown(function(){
		camcmd_showOptions();
	});
	$('#camcmd_close').mousedown(function(){
		camcmd_toggleWindow();
	});
	$('#camcmd_tilt_center').click(function(){
		camcmd_dispatchCommand("t");
	});
	$('#camcmd_pan_center').click(function(){
		camcmd_dispatchCommand("p");
	});
	$('#camcmd_url').change(function(){
		camcmd_url = $(this).text();
	}).keypress(function(e) {
		if (e.which === 13) {
			camcmd_hideOptions();
		}
		e.stopPropagation();
	});
	
}

//(function() {
//  if (gapi && gapi.hangout) {
//    var initHangout = function(apiInitEvent) {
		//if (apiInitEvent.isApiReady) {
//			camcmd_createWindow();
//			camcmd_bindControls();
			//gapi.hangout.onApiReady.remove(initHangout);
		//}
    //};
    //gapi.hangout.onApiReady.add(initHangout);
  //}
//})();
