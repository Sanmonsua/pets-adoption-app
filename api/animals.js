import { Client } from '@petfinder/petfinder-js'

const client = new Client({
	apiKey: 'q3ZSoa5Gg4sL0xPXAGOEMxytaaEOMhaYqVK0yWMNwKtmkjtahc',
	secret: 'bRP5d0t3fNSOmwm5p8eX33HZwZHiW0sSKEftdPDW',
})

function formatAnimals(animals) {
	return animals.map(({ id, name, species, photos: [first] }) => ({
		id,
		name,
		species,
		picture: first
			? first.small
			: species == 'Cat'
			? `http://placekitten.com/200/${Math.floor(
					Math.random() * 200 + 200
			  )}`
			: 'https://placedog.net/500',
	}))
}

export async function searchAnimals(params = {}) {
	var {
		data: { animals },
	} = await client.animal.search(params)
	console.log(animals)
	return formatAnimals(animals)
}