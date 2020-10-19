import { Client } from '@petfinder/petfinder-js'

const client = new Client({
	apiKey: 'q3ZSoa5Gg4sL0xPXAGOEMxytaaEOMhaYqVK0yWMNwKtmkjtahc',
	secret: 'bRP5d0t3fNSOmwm5p8eX33HZwZHiW0sSKEftdPDW',
})

function formatAnimals(animals) {
	return animals.map(function processAnimal(animal) {
		var { photos: [first] = [], species } = animal
		console.log(animal)
		return {
			...animal,
			picture: first
				? first.small
				: species == 'Cat'
				? `http://placekitten.com/200/${Math.floor(
						Math.random() * 200 + 200
				  )}`
				: 'https://placedog.net/500',
		}
	})
}

function formatTypes(types) {
	return types.map(({ name }) => ({ name, value: name }))
}

export async function searchAnimals(params = {}) {
	var {
		data: { animals },
	} = await client.animal.search(params)
	return formatAnimals(animals)
}

export async function getAnimalTypes() {
	var {
		data: { types },
	} = await client.animalData.types()
	return formatTypes(types)
}
