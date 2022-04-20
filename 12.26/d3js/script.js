var w = 500,
	h = 500;

var colorscale = d3.scale.category10();

//Legend titles
var LegendOptions = ['数据分析师','数据科学家'];

//Data
var d = [
		  [
			{axis:"SQL & 正则表达",value:0.90},			
			{axis:"Excel",value:0.90},			
			{axis:"BI相关工具集",value:0.80},
			{axis:"统计",value:0.60},
			{axis:"机器学习",value:0.50},
			{axis:"数据结构及算法",value:0.60},
			{axis:"大数据及分布式",value:0.45},
			{axis:"沟通能力",value:0.70},
			{axis:"编程技巧",value:0.60},
			{axis:"学术钻研",value:0.60},
			{axis:"产品敏感度",value:0.80},
		  ],[
			{axis:"SQL & 正则表达",value:0.90},
			{axis:"Excel",value:0.85},			
			{axis:"BI相关工具集",value:0.60},
			{axis:"统计",value:0.90},
			{axis:"机器学习",value:0.90},
			{axis:"数据结构及算法",value:0.70},
			{axis:"大数据及分布式",value:0.70},
			{axis:"沟通能力",value:0.80},
			{axis:"编程技巧",value:0.80},
			{axis:"学术钻研",value:0.90},
			{axis:"产品敏感度",value:0.90},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  ExtraWidthX: 300
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#chart", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)') 
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("数据分析师和数据科学家");
		
//Initiate Legend	
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)') 
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;	