import { extractor } from './extractor'
import { queries } from './queries'
import { cleaner } from './cleaner';

export const data = async () => {
    const result = await cleaner(extractor({ queries, config: {} }))
    console.log(result)
}
data()