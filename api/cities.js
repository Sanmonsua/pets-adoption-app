const URL = 'https://public.opendatasoft.com/api/records/1.0/'

function formatRecords(records) {
	return records.map(format)

	function format({
		fields: { accentcity, region, country, latitude, longitude },
	}) {
		return {
			city: accentcity,
			state: region.toUpperCase(),
			country: country.toUpperCase(),
			latitude,
			longitude,
		}
	}
}

export async function searchCities(q) {
	var query = q.split(' ').join('+')
	var params = `search/?dataset=worldcitiespop&q=${query}&sort=population&refine.country=us`
	var result = await fetch(URL + params)
	var { records } = await result.json()
	return records !== undefined ? formatRecords(records) : []
}
