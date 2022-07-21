import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

pack.addNetworkDomain("wttr.in")

pack.addFormula({
	name: "Weather",
	description: "Get weather for town",

	parameters: [
		coda.makeParameter({
			type: coda.ParameterType.String,
			name: "town",
			description: "Town to get weather for",
		}),
		coda.makeParameter({
			type: coda.ParameterType.String,
			name: "country",
			description: "Country of the town",
			optional: true,
		}),
	],

	resultType: coda.ValueType.String,
	codaType: coda.ValueHintType.ImageReference,

	execute: async function ([town, country], context) {
		let addCountry = country? `,${country}`: ''
		return `https://wttr.in/${town}${addCountry}.png`;
	}
});
