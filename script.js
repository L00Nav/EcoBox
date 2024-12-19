//global vars
	class Agent
	{
		constructor (i)
		{
			this.wealth = 10;
			this.disp = document.getElementsByClassName("a"+i+"w")[0];
		}

		add()
		{
			this.wealth += 1;

			this.disp.innerHTML = this.wealth;
		}
	}

	let agents = [];
	let amountOfAgents = 10;

	let cc = document.getElementsByClassName("container")[0];

//init
	for (let i = 0; i < amountOfAgents; i++)
	{
		cc.innerHTML += '<p class="agent' + i + '">'+
		'Agent ' + i + ' has: '+
		'<span class="a' + i + 'w">'+ 10 +'</span></p>' +
		'<button onclick="add('+ i +')">Add one</button><br>';
	}

	for (let i = 0; i < amountOfAgents; i++)
	{
		agents[i] = new Agent(i);
	}

//button functions

	function add(n)
	{
		agents[n].add();
	}

	function test()
	{
		//
	}
