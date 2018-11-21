new Vue({
	el: "#exercise",
	data: {
		name: "bengy",
		age: "25",
		link: "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?width=700&crop=2:1"
	},
	methods: {
		random: function() {
			return Math.floor(Math.random()*100);
		}
	}
})

new Vue({
	el: "#exercise2",
	data: {
		you: "ugly",
		value: "lol"
	},
	methods: {
		alert: function() {
			alert("stop right there butthole!")
		},
		createValue: function(event) {
			this.value = event.target.value
		}
	}
})