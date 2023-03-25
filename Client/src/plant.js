import axios from 'axios'

export async function identifyPlants(base64files) {
  const data = {
    api_key: 'sJmJb340zZNsbDipKpBTQgWbWihDJbUNLaRYC8WVXcfW3iyCw5',
    images: base64files,
    modifiers: ['crops_fast', 'similar_images'],
    plant_language: 'en',
    plant_details: [
      'common_names',
      'url',
      'name_authority',
      'wiki_description',
      'taxonomy',
      'synonyms'
    ]
  }
  try {
    const response = await axios.post(
        'https://api.plant.id/v2/identify',
        data
    )
    return response.data
  } catch (error) {
    console.error('Error: ', error)
    return null
  }
}

export function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}