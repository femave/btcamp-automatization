## Main idea

This is an early mvp for the service

My main idea is to build a npm package with a solution that will have two main entry points:

- First: via local package, this package will contain an entry point for the queries
- Second: via call to our entry point that will receive the queries as param

### Example

```
import { puppyService } from '..'
const config = {
    fetchLocal: true
    otherOptions..
}
const content = await puppyService({ config })
// Then it will look at node_modules etc

or directly 

const config = {
    fetchLocal: false
    otherOptions..
}

const queries = {}
const content = await puppyService({ config, queries })
```