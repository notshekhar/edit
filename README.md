<!DOCTYPE html>
<html>
<head>
<link href="untxt.png" rel="shortcut icon"></link>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script>
$(document).ready(function(){
//runing the codes
$('#run').click(function(){
var txt = $('#input').val();
$('#output').html(txt);
});
});
</script>
<style>
body {
    background: #E9EBEE;
    align-items: center;
    font-family: Tahoma;
}
#inputdiv {

    background: white;
    width: 50%;
    height: 500px;
    border-color: white;
    border-style: none;
    border-radius: 4px 4px 4px 4px;
	box-sizing: border-box;
	border-bottom: 1px solid #e5e5e5;
    line-height: 20px;
	box-shadow: 0px 0px 0 0.9px rgba(0, 0, 0, .10);
	outline: none;

}
#input {
    margin-left: 10px;
    background: white;
    width: 98%;
    height: 490px;
    border-color: white;
    border-style: none;
    outline: none;
	resize: none;
	font-size: 15px;
    font-family: Tahoma;
	color: #3f4694;
}
#output {
    position: relative;
    background: white;
    width: 50%;
    height: 500px;
    border-color: white;
    border-style: none;
    border-radius: 4px 4px 4px 4px;
	box-sizing: border-box;
	border-bottom: 1px solid #e5e5e5;
    line-height: 20px;
	box-shadow: 0px 0px 0 0.9px rgba(0, 0, 0, .10);
	outline: none;
	margin-top: -500px;
	margin-left:50%;
	overflow: scroll;
}
#output::-webkit-scrollbar {
    width: 10px;
}
#output::-webkit-scrollbar-thumb {
    border-radius: 0px;
	background: #3f4694;
}
#input::-webkit-scrollbar {
    width: 10px;
}
#input::-webkit-scrollbar-thumb {
    border-radius: 0px;
	background: #3f4694;
}
#head {
    top: 0px;
    left: 0px;
    z-index: 499;
    display: block;
    width: 100%;
    height: 50px;
    margin: 0;
    background: #3f4694;
    border: 0;
}
#run {
    padding: 6;
	position: relative;
    background: #42B72A;
    border: 0;
	margin-top: 10px;
	margin-left: 100px;
    color: white;
    width: 69px;
    border-radius: 2px;
    cursor: pointer;
	height: 30px;
}
#up {
	background: url(icons/up.png);
    height: 20px;
    width: 20px;
	content: url();
}
#down {
	background: url(icons/down.png);
    height: 20px;
    width: 20px;
	content: url();
}
</style>
<title>try it yourself-1.0
</title>
</head>
<body>
<div id="head"><input type="button" value="run" id="run">
</div>
<div id="code"><div id="inputdiv"><textarea id="input" placeholder="// Write some HTML"></textarea></div>
<div id="output"></div>
</div>
</body>
</html>
