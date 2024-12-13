import { ref } from 'vue'

const getStuff = (url) =>
{
    const stuff = ref([])
    const error = ref(null)

    const load = async () =>
    {
        try
        {
            let data = await fetch(url)
            if (!data.ok)
            {
                throw Error('No data available')
            }
            stuff.value = await data.json()
        }
        catch (err)
        {
            error.value = err.message
        }
    }

    return { stuff, error, load }
}

export default getStuff