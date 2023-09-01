class TextSummary {
	constructor(model) {
		this.model = model;
		console.log(process.env.COHERE_API_KEY);
		model.init(process.env.COHERE_API_KEY);
	}
	async generate(text) {
		const generateResponse = await this.model.generate({
			model: "medium",
			prompt: text,
			max_tokens: 50,
			temperature: 1,
		});

		return generateResponse.body.generations[0].text;
	}
}

exports.TextSummary = TextSummary;
